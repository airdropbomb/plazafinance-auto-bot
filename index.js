const Web3 = require('web3');
const axios = require('axios');
const chalk = require('chalk');  // 用于彩色日志
const fs = require('fs');        // 用于读取私钥
const web3 = new Web3('https://sepolia.base.org');


const wstETHAddress = '0x13e5fb0b6534bb22cbc59fae339dbbe0dc906871';

const erc20Abi = [
  {
    "constant": true,
    "inputs": [
      {"name": "_owner","type": "address"},
      {"name": "_spender","type": "address"}
    ],
    "name": "allowance",
    "outputs": [{"name":"remaining","type":"uint256"}],
    "type":"function"
  },
  {
    "constant": false,
    "inputs": [
      {"name":"_spender","type":"address"},
      {"name":"_value","type":"uint256"}
    ],
    "name":"approve",
    "outputs":[{"name":"success","type":"bool"}],
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  }
];


const contractAbi = [
  {
    "inputs": [
      { "internalType": "uint8", "name": "tokenType", "type": "uint8" },
      { "internalType": "uint256", "name": "depositAmount", "type": "uint256" },
      { "internalType": "uint256", "name": "minAmount", "type": "uint256" }
    ],
    "name": "create",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint8", "name": "tokenType", "type": "uint8" },
      { "internalType": "uint256", "name": "depositAmount", "type": "uint256" },
      { "internalType": "uint256", "name": "minAmount", "type": "uint256" }
    ],
    "name": "redeem",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];


const contractAddress = '0xF39635F2adF40608255779ff742Afe13dE31f577';


const contract = new web3.eth.Contract(contractAbi, contractAddress);

// ==========  7) wstETH 无限授权  ==========
async function ensureUnlimitedSpending(privateKey, spenderAddress) {
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  const ownerAddress = account.address;

  const wstETHContract = new web3.eth.Contract(erc20Abi, wstETHAddress);

  try {
    const allowance = await wstETHContract.methods.allowance(ownerAddress, spenderAddress).call();
    const maxUint = web3.utils.toBN('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');

    if (web3.utils.toBN(allowance).lt(maxUint)) {
      console.log(chalk.yellow(`wstETH 的授权额度不是无限的。正在设置为无限...`));

      const approveMethod = wstETHContract.methods.approve(spenderAddress, maxUint.toString());
      const gasEstimate = await approveMethod.estimateGas({ from: ownerAddress });
      const nonce = await web3.eth.getTransactionCount(ownerAddress);

      const tx = {
        from: ownerAddress,
        to: wstETHAddress,
        gas: gasEstimate,
        nonce: nonce,
        data: approveMethod.encodeABI(),
      };

      const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

      console.log(chalk.green(`已为 wstETH 设置无限授权额度，交易哈希: ${receipt.transactionHash}`));
    } else {
      console.log(chalk.green(`wstETH 的授权额度已是无限的`));
    }
  } catch (error) {
    console.error(chalk.red(`设置 wstETH 无限授权额度时出错: ${error.message}`));
  }
}


async function claimFaucet(address) {
  try {
    const response = await axios.post(
      'https://api.plaza.finance/faucet/queue',
      { address: address },
      {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'Content-Type': 'application/json',
          'x-plaza-api-key': 'bfc7b70e-66ad-4524-9bb6-733716c4da94',
        }
      }
    );

    console.log(chalk.green(`已成功为 ${address} 发起水龙头申请`));
    console.log(chalk.yellow('申请响应:', response.data));
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error(chalk.red('您每天只能使用一次水龙头。'));
    } else if (error.response && error.response.status === 403) {
      console.error(chalk.red('403 禁止访问：您可能已达到速率限制或被阻止。'));
    } else {
      console.error(chalk.red(`申请水龙头时出错: ${error.message}`));
    }
  }
}


function getRandomDepositAmount() {
  const min = 0.009;
  const max = 0.01;
  const randomEthAmount = Math.random() * (max - min) + min;
  return web3.utils.toWei(randomEthAmount.toString(), 'ether');
}


function getTokenContractAddress(tokenType) {
  if (tokenType === 0) {
    // bondETH
    return "0x1aC493C87a483518642f320Ba5b342c7b78154ED";
  } else if (tokenType === 1) {
    // levETH
    return "0x975f67319f9DA83B403309108d4a8f84031538A6";
  }
  
}

// ==========  11) 获取某代币余额 50%  ==========
async function getFiftyPercentBalance(tokenType, userAddress) {
  const tokenAddress = getTokenContractAddress(tokenType);
  const tokenContract = new web3.eth.Contract(erc20Abi, tokenAddress);
  const balance = await tokenContract.methods.balanceOf(userAddress).call();
  return web3.utils.toBN(balance).div(web3.utils.toBN(2));
}

async function performAction(action, tokenType, depositAmount, minAmount, privateKey) {
  const maxRetries = 5;
  const retryDelayInSeconds = 30;

  let attempt = 0;
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  const senderAddress = account.address;

  while (attempt < maxRetries) {
    try {
      let actionMethod;

      if (action === 'create') {
      
        actionMethod = contract.methods.create(tokenType, depositAmount, minAmount);
      } else if (action === 'redeem') {
       
        const redeemAmount = await getFiftyPercentBalance(tokenType, senderAddress);
        if (redeemAmount.eq(web3.utils.toBN(0))) {
          console.log(chalk.red('没有余额可以赎回。'));
          return;
        }
        
        actionMethod = contract.methods.redeem(tokenType, redeemAmount, minAmount);
      } else {
        throw new Error('无效的操作。请使用 "create" 或 "redeem"。');
      }

      const nonce = await web3.eth.getTransactionCount(senderAddress);
      
      const gasEstimate = await actionMethod.estimateGas({ from: senderAddress });
      const tx = {
        from: senderAddress,
        to: contractAddress,
        gas: Math.floor(gasEstimate * 1.2), 
        nonce: nonce,
        data: actionMethod.encodeABI(),
      };

      const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

      try {
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log(chalk.green(`交易成功，哈希: ${receipt.transactionHash}`));
        return;  // 成功则不再重试
      } catch (error) {
        console.error(chalk.red(`交易失败: ${error.message}`));
        if (error.data) {
          console.error(chalk.red('回滚原因:', web3.utils.hexToAscii(error.data)));
        }
      }
    } catch (error) {
      attempt++;
      console.error(chalk.red(`执行 ${action} 操作时，第 ${attempt} 次尝试出错: ${error.message}`));

      if (attempt < maxRetries) {
        console.log(chalk.yellow(`将在 ${retryDelayInSeconds} 秒后重试...`));
        await new Promise((resolve) => setTimeout(resolve, retryDelayInSeconds * 1000));
      } else {
        console.error(chalk.red(`已达到最大重试次数。未能执行 ${action} 操作。`));
      }
    }
  }
}


function readPrivateKeys() {
  try {
    const keys = fs
      .readFileSync('private_keys.txt', 'utf8')
      .split('\n')
      .filter(key => key.trim() !== '')
      .map(key => key.trim());

    keys.forEach((key, index) => {
      if (key.length !== 64) {
        throw new Error(`第 ${index + 1} 行的私钥必须为32字节（64个字符）`);
      }
    });

    return keys;
  } catch (error) {
    console.error(chalk.red('读取 private_keys.txt 时出错:', error.message));
    process.exit(1);
  }
}

function printHeader() {
  const line = "=".repeat(50);
  const title = "每日自动化Plaza Finance";
  const createdBy = "加入我们：电报频道：https://t.me/ksqxszq";

  const totalWidth = 50;
  const titlePadding = Math.floor((totalWidth - title.length) / 2);
  const createdByPadding = Math.floor((totalWidth - createdBy.length) / 2);

  const centeredTitle = title.padStart(titlePadding + title.length).padEnd(totalWidth);
  const centeredCreatedBy = createdBy.padStart(createdByPadding + createdBy.length).padEnd(totalWidth);

  console.log(chalk.cyan.bold(line));
  console.log(chalk.cyan.bold(centeredTitle));
  console.log(chalk.green(centeredCreatedBy));
  console.log(chalk.cyan.bold(line));
}


async function processWallets() {

  const bondTokenType = 0;
  const leverageTokenType = 1;

  const minAmount = web3.utils.toWei('0.00001', 'ether'); 

  printHeader();
  const privateKeys = readPrivateKeys();

  for (const privateKey of privateKeys) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const walletAddress = account.address;

    console.log(chalk.yellow(`\n=== 开始处理钱包: ${chalk.blue(walletAddress)} ===`));

  
    console.log(chalk.green(`正在为 ${walletAddress} 申请水龙头...`));
    await claimFaucet(walletAddress);

   
    await ensureUnlimitedSpending(privateKey, contractAddress);

  
    const randomBondAmount = getRandomDepositAmount();
    console.log(chalk.blue(
      `使用金额 ${chalk.yellow(web3.utils.fromWei(randomBondAmount, 'ether'))} ETH 创建 Bond Token`
    ));
    await performAction('create', bondTokenType, randomBondAmount, minAmount, privateKey);

  
    const randomLeverageAmount = getRandomDepositAmount();
    console.log(chalk.blue(
      `使用金额 ${chalk.yellow(web3.utils.fromWei(randomLeverageAmount, 'ether'))} ETH 创建 Leverage Token`
    ));
    await performAction('create', leverageTokenType, randomLeverageAmount, minAmount, privateKey);

    console.log(chalk.magenta('正在赎回 Bond Token 余额的 50%...'));
    await performAction('redeem', bondTokenType, randomBondAmount, minAmount, privateKey);

  
    console.log(chalk.magenta('正在赎回 Leverage Token 余额的 50%...'));
    await performAction('redeem', leverageTokenType, randomLeverageAmount, minAmount, privateKey);

    console.log(chalk.yellow(`=== 已完成钱包处理: ${chalk.blue(walletAddress)} ===\n`));
    console.log(chalk.green(`在处理下一个钱包前，等待 30 秒...`));
    await new Promise((resolve) => setTimeout(resolve, 30 * 1000));
  }

  console.log(chalk.green('=== 所有钱包已处理完成 ==='));
}

// ==========  16) 定时循环执行  ==========
function getNextRunTime(delayInMs) {
  const nextRunDate = new Date(Date.now() + delayInMs);
  const [year, month, date] = [
    nextRunDate.getFullYear(),
    String(nextRunDate.getMonth() + 1).padStart(2, '0'),
    String(nextRunDate.getDate()).padStart(2, '0')
  ];
  const [hours, minutes, seconds] = [
    String(nextRunDate.getHours()).padStart(2, '0'),
    String(nextRunDate.getMinutes()).padStart(2, '0'),
    String(nextRunDate.getSeconds()).padStart(2, '0')
  ];
  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
}

// 每 6 小时执行一次
setInterval(async () => {
  console.log(chalk.cyan.bold(`正在运行流程，时间: ${new Date().toLocaleString()}`));
  await processWallets();

  const delayInMs = 6 * 60 * 60 * 1000;
  const nextRunTime = getNextRunTime(delayInMs);
  console.log(chalk.green(`流程已完成。下次运行时间: ${nextRunTime}`));
}, 6 * 60 * 60 * 1000);

// 启动时立即运行
(async () => {
  console.log(chalk.cyan.bold(`正在运行流程，时间: ${new Date().toLocaleString()}`));
  await processWallets();

  const delayInMs = 6 * 60 * 60 * 1000;
  const nextRunTime = getNextRunTime(delayInMs);
  console.log(chalk.green(`流程已完成。下次运行时间: ${nextRunTime}`));
})();
