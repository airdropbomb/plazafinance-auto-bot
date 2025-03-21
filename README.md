# Auto Daily Plaza Finance Bot

Register：[Plaza Finance Testnet](https://testnet.plaza.finance/rewards/FCX2HY2v2dVw)

This script automates interactions with Plaza Finance, including claiming tokens from the faucet, setting unlimited allowance for wstETH, creating Bond and Leverage tokens, and redeeming a portion of the tokens. The script supports multi-wallet looping and repeats the operations every 6 hours after processing all wallets.


## Features
Automatically claim faucet tokens.

Set unlimited allowance for wstETH tokens.

Create Bond and Leverage tokens.

Redeem 50% of Bond and Leverage token balances.

Repeat the operations every 6 hours.


## Requirements
Node.js
Required Node.js modules: web3, axios, chalk, fs


Install the required modules using the following command:

```bash
npm install web3@1.8.0 axios chalk@2 fs
```

Clone the repository:

```
git clone https://github.com/airdropbomb/plazafinance-auto-bot.git 
cd plazafinance-auto-bot
```

Setup Wallet

In the private_keys.txt file, add your private keys, one per line. Ensure that:
Each private key is a 64-character hexadecimal string (without the 0x prefix).
```
nano private_keys.txt
```

Run the script with the following command:

```
node index.js
```
Log Output
The script uses chalk to output colored logs, making it easy to monitor the execution status, including:
Faucet claim status.

wstETH allowance status.

Bond and Leverage token creation status.

Token redemption status.

Success and failure information for each transaction will be printed to the console.


Ensure that the private keys in private_keys.txt are valid and that the wallet balances are sufficient to cover transaction fees.

If an execution fails, the script will retry up to 5 times with a 30-second interval between retries.

Protect your private key file carefully to avoid leakage and potential asset loss.

