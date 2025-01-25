# Auto Daily Plaza Finance Bot

注册链接：[Plaza Finance 测试网奖励注册](https://testnet.plaza.finance/rewards/lm6HOBbEFzVI)

此脚本自动化处理 Plaza Finance 的交互操作，包括从水龙头领取代币、为 wstETH 设置无限授权额度、创建 Bond 和 Leverage 代币，以及赎回部分代币。脚本支持多钱包循环处理，并在所有钱包处理完成后每隔 6 小时重复一次操作。

## 功能特性
- 自动领取水龙头代币。
- 为 wstETH 代币设置无限授权额度。
- 创建 Bond 和 Leverage 代币。
- 赎回 Bond 和 Leverage 代币余额的 50%。
- 每隔 6 小时重复执行操作。

## 环境需求
- Node.js
- 必要的 Node.js 模块：`web3`, `axios`, `chalk`, `fs`

使用以下命令安装必要模块：
```bash
npm install web3@1.8.0 axios chalk@2 fs
```
克隆仓库
```
git clone https://github.com/ziqing888/plazafinance-auto-bot.git 
cd plazafinance-auto-bot
```
设置步骤
在 private_keys.txt 文件，将你的私钥一行一个添加到文件中。请确保：
每个私钥均为 64 个字符的十六进制字符串（去掉 0x 前缀）。

使用以下命令运行脚本：
```
node index.js
```
脚本启动后会立即运行，并在每 6 小时自动重复一次操作。
日志输出
脚本使用 chalk 输出彩色日志，方便查看执行状态，包括：

水龙头领取状态。
wstETH 授权状态。
Bond 和 Leverage 代币创建状态。
赎回代币状态。
每笔交易的成功与失败信息都会在控制台打印。

注意事项
请确保 private_keys.txt 中的私钥有效，且钱包余额足以支付相关交易费用。
如果遇到执行失败，脚本会尝试重试 5 次，重试间隔为 30 秒。
请妥善保护你的私钥文件，避免泄露造成资产损失。
