const _0x10d952 = _0x71dd;
(function (_0x5ab728, _0x2a252f) {
    const _0x3d473e = _0x71dd, _0x1a92b7 = _0x5ab728();
    while (!![]) {
        try {
            const _0x2439ad = -parseInt(_0x3d473e(0xba)) / 0x1 + -parseInt(_0x3d473e(0xb7)) / 0x2 + -parseInt(_0x3d473e(0xae)) / 0x3 + parseInt(_0x3d473e(0xda)) / 0x4 * (-parseInt(_0x3d473e(0xb6)) / 0x5) + -parseInt(_0x3d473e(0xf6)) / 0x6 + parseInt(_0x3d473e(0xef)) / 0x7 * (parseInt(_0x3d473e(0x10f)) / 0x8) + parseInt(_0x3d473e(0xb2)) / 0x9;
            if (_0x2439ad === _0x2a252f) break;
            else _0x1a92b7['push'](_0x1a92b7['shift']());
        } catch (_0x146289) {
            _0x1a92b7['push'](_0x1a92b7['shift']());
        }
    }
}(_0x2297, 0x4a05d));
const Web3 = require(_0x10d952(0xdf)),
    axios = require('axios'),
    chalk = require(_0x10d952(0x103)),
    fs = require('fs'),
    web3 = new Web3(_0x10d952(0x9d)),
    useProxy = ![],
    routerAddress = _0x10d952(0x115),
    routerABI = [{'inputs': [{'internalType': _0x10d952(0xc8), 'name': '_balancerVault', 'type': _0x10d952(0xc8)}], 'stateMutability': 'nonpayable', 'type': _0x10d952(0xdd)}, {'inputs': [{'internalType': _0x10d952(0xc8), 'name': _0x10d952(0xd4), 'type': 'address'}], 'name': 'AddressEmptyCode', 'type': 'error'}, {'inputs': [{'internalType': _0x10d952(0xc8), 'name': _0x10d952(0x126), 'type': _0x10d952(0xc8)}], 'name': _0x10d952(0xd2), 'type': _0x10d952(0xa5)}, {'inputs': [], 'name': _0x10d952(0xd8), 'type': 'error'}, {'inputs': [], 'name': 'ReentrancyGuardReentrantCall', 'type': 'error'}, {'inputs': [{'internalType': _0x10d952(0xc8), 'name': _0x10d952(0x10c), 'type': _0x10d952(0xc8)}], 'name': _0x10d952(0xdb), 'type': _0x10d952(0xa5)}, {'anonymous': ![], 'inputs': [{'indexed': !![], 'internalType': _0x10d952(0xc8), 'name': _0x10d952(0xe2), 'type': 'address'}, {'indexed': ![], 'internalType': _0x10d952(0xc8), 'name': 'caller', 'type': _0x10d952(0xc8)}, {'indexed': !![], 'internalType': _0x10d952(0xc8), 'name': _0x10d952(0x108), 'type': 'address'}, {'indexed': ![], 'internalType': _0x10d952(0xbd), 'name': _0x10d952(0xbf), 'type': _0x10d952(0x129)}, {'indexed': ![], 'internalType': _0x10d952(0xcc), 'name': _0x10d952(0x125), 'type': _0x10d952(0xcc)}, {'indexed': ![], 'internalType': _0x10d952(0xcc), 'name': 'redeemedAmount', 'type': _0x10d952(0xcc)}], 'name': _0x10d952(0x92), 'type': 'event'}, {'inputs': [], 'name': 'balancerVault', 'outputs': [{'internalType': _0x10d952(0x106), 'name': '', 'type': _0x10d952(0xc8)}], 'stateMutability': _0x10d952(0xb3), 'type': _0x10d952(0xd9)}, {'inputs': [{'internalType': _0x10d952(0xf5), 'name': _0x10d952(0x109), 'type': 'bytes32'}, {'internalType': 'address', 'name': _0x10d952(0x118), 'type': _0x10d952(0xc8)}, {'internalType': _0x10d952(0xf8), 'name': _0x10d952(0x127), 'type': 'address[]'}, {'internalType': 'uint256', 'name': _0x10d952(0xc3), 'type': _0x10d952(0xcc)}, {'internalType': _0x10d952(0x9f), 'name': _0x10d952(0x102), 'type': _0x10d952(0x9f)}, {'internalType': _0x10d952(0xf3), 'name': _0x10d952(0x11c), 'type': _0x10d952(0xf3)}, {'internalType': _0x10d952(0xbd), 'name': _0x10d952(0xc2), 'type': _0x10d952(0x129)}, {'internalType': _0x10d952(0xcc), 'name': _0x10d952(0xa1), 'type': _0x10d952(0xcc)}], 'name': _0x10d952(0xac), 'outputs': [], 'stateMutability': _0x10d952(0x95), 'type': 'function'}, {'inputs': [{'internalType': _0x10d952(0xf5), 'name': _0x10d952(0x109), 'type': _0x10d952(0xf5)}, {'internalType': _0x10d952(0xc8), 'name': _0x10d952(0x118), 'type': _0x10d952(0xc8)}, {'internalType': _0x10d952(0xf8), 'name': _0x10d952(0x127), 'type': 'address[]'}, {'internalType': _0x10d952(0x9f), 'name': _0x10d952(0xb8), 'type': _0x10d952(0x9f)}, {'internalType': _0x10d952(0xf3), 'name': _0x10d952(0x11c), 'type': 'bytes'}, {'internalType': _0x10d952(0xbd), 'name': _0x10d952(0xc2), 'type': 'uint8'}, {'internalType': _0x10d952(0xcc), 'name': _0x10d952(0xea), 'type': _0x10d952(0xcc)}, {'internalType': _0x10d952(0xcc), 'name': _0x10d952(0xb0), 'type': 'uint256'}], 'name': _0x10d952(0x8a), 'outputs': [{'internalType': _0x10d952(0xcc), 'name': '', 'type': _0x10d952(0xcc)}], 'stateMutability': _0x10d952(0x95), 'type': _0x10d952(0xd9)}],
    routerContract = new web3[(_0x10d952(0xd6))][(_0x10d952(0xdc))](routerABI, routerAddress),
    balancerpool = '0x07124296362D9e92a7105dc40d7e20e909ccABd6',
    cbETHaddress = _0x10d952(0xf0),
    wstETHaddress = _0x10d952(0xbb),
    bondETHaddress = _0x10d952(0xd1),
    levETHaddress = _0x10d952(0x101),
    _plazaPool = _0x10d952(0x123),
    couponContractAddress = _0x10d952(0xcf),
    couponContract = new web3[(_0x10d952(0xd6))][(_0x10d952(0xdc))]([{'inputs': [], 'name': _0x10d952(0x98), 'outputs': [], 'stateMutability': 'nonpayable', 'type': _0x10d952(0xd9)}], couponContractAddress),
    assets = [balancerpool, cbETHaddress, wstETHaddress],
    balancerPoolId = '0x07124296362d9e92a7105dc40d7e20e909ccabd6000100000000000000000016',
    erc20Abi = [{'constant': !![], 'inputs': [{'name': _0x10d952(0x94), 'type': 'address'}, {'name': _0x10d952(0x97), 'type': _0x10d952(0xc8)}], 'name': _0x10d952(0x8e), 'outputs': [{'name': _0x10d952(0xfe), 'type': _0x10d952(0xcc)}], 'type': _0x10d952(0xd9)}, {'constant': ![], 'inputs': [{'name': _0x10d952(0x97), 'type': 'address'}, {'name': _0x10d952(0xc4), 'type': _0x10d952(0xcc)}], 'name': _0x10d952(0x96), 'outputs': [{'name': _0x10d952(0x104), 'type': _0x10d952(0xad)}], 'type': _0x10d952(0xd9)}, {'constant': !![], 'inputs': [{'name': _0x10d952(0x94), 'type': _0x10d952(0xc8)}], 'name': _0x10d952(0xff), 'outputs': [{'name': _0x10d952(0x11a), 'type': 'uint256'}], 'type': _0x10d952(0xd9)}];

let HttpsProxyAgent;
if (useProxy) {
    HttpsProxyAgent = require('https-proxy-agent').HttpsProxyAgent;
}

function _0x71dd(_0x145f5e, _0x5d0c8b) {
    const _0x2297d9 = _0x2297();
    return _0x71dd = function (_0x71ddd4, _0x56f466) {
        _0x71ddd4 = _0x71ddd4 - 0x8a;
        let _0x1a6928 = _0x2297d9[_0x71ddd4];
        return _0x1a6928;
    }, _0x71dd(_0x145f5e, _0x5d0c8b);
}

async function ensureTokenAllowance(_0x19d099, _0x4039a1, _0x53651a, _0x2fe948) {
    const _0x192da7 = _0x10d952,
        _0x2ee750 = web3[_0x192da7(0xd6)][_0x192da7(0xa0)][_0x192da7(0xab)](_0x19d099),
        _0x2656a6 = _0x2ee750['address'],
        _0x4ea240 = new web3[(_0x192da7(0xd6))]['Contract'](erc20Abi, _0x4039a1),
        _0x435383 = 0x5;
    for (let _0x2eef03 = 0x1; _0x2eef03 <= _0x435383; _0x2eef03++) {
        try {
            const _0x253563 = await _0x4ea240['methods'][_0x192da7(0x8e)](_0x2656a6, _0x53651a)[_0x192da7(0xde)](),
                _0x47f0f0 = web3['utils'][_0x192da7(0x105)](_0x192da7(0x9c));
            if (web3['utils']['toBN'](_0x253563)['lt'](_0x47f0f0)) {
                console[_0x192da7(0x10a)](chalk[_0x192da7(0x128)]('Setting allowance for ' + _0x2fe948 + ' on attempt ' + _0x2eef03 + '...'));
                const _0x13ae63 = _0x4ea240[_0x192da7(0xf9)][_0x192da7(0x96)](_0x53651a, _0x47f0f0[_0x192da7(0xcb)]()),
                    _0x473b36 = await _0x13ae63[_0x192da7(0xf4)]({ 'from': _0x2656a6 }),
                    _0x28526c = await web3['eth'][_0x192da7(0xa2)](_0x2656a6),
                    _0x17a1f5 = {
                        'from': _0x2656a6,
                        'to': _0x4039a1,
                        'gas': _0x473b36,
                        'nonce': _0x28526c,
                        'data': _0x13ae63[_0x192da7(0x112)]()
                    },
                    _0x205a38 = await web3[_0x192da7(0xd6)]['accounts'][_0x192da7(0xfa)](_0x17a1f5, _0x19d099),
                    _0x190bb0 = await web3[_0x192da7(0xd6)][_0x192da7(0xa7)](_0x205a38[_0x192da7(0x116)]);
                console[_0x192da7(0x10a)](chalk['green']('Allowance set for ' + _0x2fe948 + ': ' + _0x190bb0['transactionHash']));
                return;
            }
            console[_0x192da7(0x10a)](chalk[_0x192da7(0x128)](_0x2fe948 + ' allowance already unlimited'));
            return;
        } catch (_0x1d27aa) {
            console['error'](chalk[_0x192da7(0x11f)]('Allowance error (attempt ' + _0x2eef03 + '): ' + _0x1d27aa[_0x192da7(0xb5)]));
            if (_0x2eef03 < _0x435383) await new Promise(_0x700e0a => setTimeout(_0x700e0a, 0x1388));
        }
    }
    throw new Error('Failed to set allowance after ' + _0x435383 + ' attempts');
}

async function claimFaucet(address, proxy) {
    try {
        const config = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Content-Type': 'application/json',
                'x-plaza-api-key': 'bfc7b70e-66ad-4524-9bb6-733716c4da94'
            }
        };
        if (useProxy && proxy && HttpsProxyAgent) {
            config.httpsAgent = new HttpsProxyAgent(proxy);
            console.log(chalk.blue('Using proxy: ' + proxy));
        }
        const response = await axios.post('https://api.plaza.finance/faucet/queue', { 'address': address }, config);
        console.log(chalk.green(`Faucet claim initiated successfully for ${address}`));
        console.log(chalk.yellow(`Claim Response: ${JSON.stringify(response.data, null, 2)}`));
    } catch (error) {
        if (error.response) {
            if (error.response.status === 429) {
                console.error(chalk.red('You can only use the faucet once per day.'));
            } else if (error.response.status === 403) {
                console.error(chalk.red('403 Forbidden: You may have hit a rate limit or are blocked.'));
            } else {
                console.error(chalk.red(`Error claiming faucet: ${error.response.data?.message || error.message}`));
            }
        } else {
            console.error(chalk.red(`Error claiming faucet: ${error.message}`));
        }
    }
}

async function createPosition(_0x5229ee, _0x1fe7bc, _0x294126) {
    const _0x3f8e59 = _0x10d952,
        _0x205b31 = web3['eth']['accounts'][_0x3f8e59(0xab)](_0x5229ee),
        _0x20ec75 = _0x205b31['address'],
        _0x2f6144 = Math[_0x3f8e59(0xf2)](Date['now']() / 0x3e8) + 0x258,
        _0x12e48f = 0x5;
    for (let _0x2c240e = 0x1; _0x2c240e <= _0x12e48f; _0x2c240e++) {
        try {
            const _0x482b9e = ['0', '0', _0x294126[_0x3f8e59(0xcb)]()],
                _0x41666d = web3[_0x3f8e59(0xd6)][_0x3f8e59(0xc0)][_0x3f8e59(0x11b)](['uint256', _0x3f8e59(0x9f), _0x3f8e59(0xcc)], [0x1, [0x0, _0x294126[_0x3f8e59(0xcb)]()], 0x0]),
                _0x4e214e = routerContract[_0x3f8e59(0xf9)][_0x3f8e59(0x8a)](balancerPoolId, _plazaPool, assets, _0x482b9e, _0x41666d, _0x1fe7bc, 0x0, _0x2f6144),
                _0x1a20ff = await _0x4e214e[_0x3f8e59(0xf4)]({ 'from': _0x20ec75 }),
                _0x4fd225 = await web3['eth'][_0x3f8e59(0xa3)](),
                _0x527838 = await web3[_0x3f8e59(0xd6)]['getTransactionCount'](_0x20ec75, _0x3f8e59(0x114)),
                _0x9c7b63 = {
                    'from': _0x20ec75,
                    'to': routerAddress,
                    'gas': _0x1a20ff,
                    'gasPrice': _0x4fd225,
                    'nonce': _0x527838,
                    'data': _0x4e214e[_0x3f8e59(0x112)]()
                },
                _0x32e43c = await web3[_0x3f8e59(0xd6)][_0x3f8e59(0xa0)]['signTransaction'](_0x9c7b63, _0x5229ee),
                _0x34089d = await web3[_0x3f8e59(0xd6)]['sendSignedTransaction'](_0x32e43c[_0x3f8e59(0x116)]);
            console[_0x3f8e59(0x10a)](chalk[_0x3f8e59(0x8b)]('Create success: ' + _0x34089d[_0x3f8e59(0xbc)]));
            return;
        } catch (_0x2103c8) {
            console[_0x3f8e59(0xa5)](chalk[_0x3f8e59(0x11f)]('Create failed (attempt ' + _0x2c240e + '): ' + _0x2103c8['message']));
            if (_0x2c240e < _0x12e48f) await new Promise(_0x3e1d1d => setTimeout(_0x3e1d1d, 0x3a98));
        }
    }
    throw new Error('Failed to create position after ' + _0x12e48f + ' attempts');
}

async function redeemToken(_0xb199db, _0x1325e1, _0x1c7db2) {
    const _0x4a044f = _0x10d952,
        _0x4fa99d = web3['eth'][_0x4a044f(0xa0)][_0x4a044f(0xab)](_0xb199db),
        _0x4ade43 = _0x4fa99d[_0x4a044f(0xc8)],
        _0x57e079 = 0x5;
    for (let _0x185477 = 0x1; _0x185477 <= _0x57e079; _0x185477++) {
        try {
            const _0x5a6d6d = new web3[(_0x4a044f(0xd6))][(_0x4a044f(0xdc))](erc20Abi, _0x1325e1),
                _0x2d3092 = await _0x5a6d6d[_0x4a044f(0xf9)][_0x4a044f(0xff)](_0x4ade43)[_0x4a044f(0xde)](),
                _0x824a48 = web3['utils'][_0x4a044f(0x105)](_0x2d3092)[_0x4a044f(0x8d)](web3[_0x4a044f(0xf7)][_0x4a044f(0x105)]('10'))[_0x4a044f(0x9b)](web3[_0x4a044f(0xf7)][_0x4a044f(0x105)](_0x4a044f(0x10d)));
            if (_0x824a48[_0x4a044f(0x110)](0x0)) {
                const _0x269ba1 = web3[_0x4a044f(0xd6)][_0x4a044f(0xc0)][_0x4a044f(0x11b)](['uint256', _0x4a044f(0xcc), _0x4a044f(0xcc)], [0x0, _0x824a48['toString'](), 0x1]),
                    _0x1d8102 = routerContract['methods'][_0x4a044f(0xac)](balancerPoolId, _plazaPool, assets, _0x824a48[_0x4a044f(0xcb)](), [0x0, 0x0, 0x0], _0x269ba1, _0x1c7db2, 0x0),
                    _0x214783 = await _0x1d8102['estimateGas']({ 'from': _0x4ade43 }),
                    _0x1770db = await web3[_0x4a044f(0xd6)][_0x4a044f(0xa3)](),
                    _0x154f64 = await web3['eth']['getTransactionCount'](_0x4ade43, 'pending'),
                    _0x1c81ba = {
                        'from': _0x4ade43,
                        'to': routerAddress,
                        'gas': _0x214783,
                        'gasPrice': _0x1770db,
                        'nonce': _0x154f64,
                        'data': _0x1d8102[_0x4a044f(0x112)]()
                    },
                    _0x4c103a = await web3[_0x4a044f(0xd6)][_0x4a044f(0xa0)]['signTransaction'](_0x1c81ba, _0xb199db),
                    _0x2415a7 = await web3[_0x4a044f(0xd6)]['sendSignedTransaction'](_0x4c103a[_0x4a044f(0x116)]);
                console[_0x4a044f(0x10a)](chalk[_0x4a044f(0x8b)]('[Attempt ' + _0x185477 + '] Redeem success: ' + _0x2415a7['transactionHash']));
                return;
            } else {
                console[_0x4a044f(0x10a)](chalk['yellow']('[Attempt ' + _0x185477 + '] Insufficient token balance, skipping redeem'));
                return;
            }
        } catch (_0xdc2589) {
            console['error'](chalk[_0x4a044f(0x11f)]('[Attempt ' + _0x185477 + '] Redeem failed: ' + _0xdc2589[_0x4a044f(0xb5)]));
            if (_0x185477 < _0x57e079) {
                console[_0x4a044f(0x10a)](chalk[_0x4a044f(0x128)]('[Attempt ' + _0x185477 + '] Retrying in 15 seconds...'));
                await new Promise(_0x3468c9 => setTimeout(_0x3468c9, 0x3a98));
            }
        }
    }
    console[_0x4a044f(0xa5)](chalk[_0x4a044f(0x11f)]('Failed to redeem after ' + _0x57e079 + ' attempts'));
}

async function claimCouponUSDC(_0xded17d) {
    const _0x35fcfb = _0x10d952,
        _0x259063 = web3['eth']['accounts'][_0x35fcfb(0xab)](_0xded17d),
        _0x4c1b4b = _0x259063['address'],
        _0x3feb16 = 0x5;
    for (let _0x3082e3 = 0x1; _0x3082e3 <= _0x3feb16; _0x3082e3++) {
        try {
            const _0x524c5f = couponContract[_0x35fcfb(0xf9)]['claim'](),
                _0x56c3db = await web3['eth']['getTransactionCount'](_0x4c1b4b),
                _0x2b60ea = await _0x524c5f[_0x35fcfb(0xf4)]({ 'from': _0x4c1b4b }),
                _0x5cd76b = {
                    'from': _0x4c1b4b,
                    'to': couponContractAddress,
                    'gas': _0x2b60ea,
                    'nonce': _0x56c3db,
                    'data': _0x524c5f[_0x35fcfb(0x112)]()
                },
                _0x753db4 = await web3[_0x35fcfb(0xd6)][_0x35fcfb(0xa0)][_0x35fcfb(0xfa)](_0x5cd76b, _0xded17d),
                _0x3bbab4 = await web3[_0x35fcfb(0xd6)][_0x35fcfb(0xa7)](_0x753db4[_0x35fcfb(0x116)]);
            console[_0x35fcfb(0x10a)](chalk[_0x35fcfb(0x8b)]('[Attempt ' + _0x3082e3 + '] Coupon USDC claim success: ' + _0x3bbab4[_0x35fcfb(0xbc)]));
            const _0x36b103 = await axios[_0x35fcfb(0xd5)](_0x35fcfb(0xfb), [_0x4c1b4b, 0x14a34], { 'headers': { 'Content-Type': _0x35fcfb(0x107) } });
            console['log'](chalk[_0x35fcfb(0x8b)]('[Attempt ' + _0x3082e3 + '] Earn request response: ' + JSON[_0x35fcfb(0xa4)](_0x36b103[_0x35fcfb(0xca)], null, 0x2)));
            return;
        } catch (_0x322b7e) {
            _0x322b7e[_0x35fcfb(0xb5)][_0x35fcfb(0x121)](_0x35fcfb(0xc6)) ?
                console[_0x35fcfb(0xa5)](chalk['yellow']('[Attempt ' + _0x3082e3 + '] Execution reverted: Coupon claim may not be ready yet or already claimed.')) :
                console[_0x35fcfb(0xa5)](chalk[_0x35fcfb(0x11f)]('[Attempt ' + _0x3082e3 + '] Coupon claim failed: ' + _0x322b7e['message']));
            if (_0x3082e3 < _0x3feb16) {
                console['log'](chalk[_0x35fcfb(0x128)]('[Attempt ' + _0x3082e3 + '] Retrying in 15 seconds...'));
                await new Promise(_0x1a4cd2 => setTimeout(_0x1a4cd2, 0x3a98));
            }
        }
    }
    console[_0x35fcfb(0xa5)](chalk[_0x35fcfb(0x11f)]('Failed to claim USDC coupon after ' + _0x3feb16 + ' attempts'));
}

function _0x2297() {
    const _0x1419d3 = [']\x20Redeem\x20failed:\x20', 'mul', 'allowance', ']\x20Execution\x20reverted:\x20Coupon\x20claim\x20may\x20not\x20be\x20ready\x20yet\x20or\x20already\x20claimed.', ']\x20Earn\x20request\x20response:\x20', 'proxies.txt', 'TokensRedeemed', 'Insufficient\x20wstETH\x20balance,\x20skipping\x20deposit', '_owner', 'nonpayable', 'approve', '_spender', 'claim', 'response', 'Allowance\x20error\x20(attempt\x20', 'div', '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 'https://sepolia.base.org', 'Create\x20failed\x20(attempt\x20', 'uint256[]', 'accounts', 'minbalancerPoolTokenOut', 'getTransactionCount', 'getGasPrice', 'stringify', 'error', ']\x20Coupon\x20claim\x20failed:\x20', 'sendSignedTransaction', 'filter', 'httpsAgent', 'Failed\x20to\x20set\x20allowance\x20after\x20', 'privateKeyToAccount', 'exitPlazaAndBalancer', 'bool', '801621KXzjux', '\x20allowance\x20already\x20unlimited', 'deadline', '...', '9431964LzxiuT', 'view', 'Developed\x20by:\x20https://t.me/airdropwithmeh', 'message', '144310FzgheX', '35272ZrcUIj', 'maxAmountsIn', 'Critical\x20error:\x20', '564099cCXJDD', '0x13e5FB0B6534BB22cBC59Fae339dbBE0Dc906871', 'transactionHash', 'enum\x20Pool.TokenType', '\x0aRestarting\x20process\x20at\x20', 'tokenType', 'abi', 'wstETH', 'plazaPool', 'plazaTokenAmount', '_value', 'https-proxy-agent', 'execution\x20reverted', ']\x20Setting\x20allowance\x20for\x20', 'address', ']\x20Insufficient\x20token\x20balance,\x20skipping\x20redeem', 'data', 'toString', 'uint256', 'Error\x20reading\x20proxies.txt:', 'Using\x20proxy:\x20', '0x1Ad0a74d6b4AAcE8A8CB7d555cec3021e4333bED', 'bfc7b70e-66ad-4524-9bb6-733716c4da94', '0x3EB4b2c7D235fE915E3A0eF6BE73FD458Bb891F4', 'AddressInsufficientBalance', 'cyan', 'target', 'post', 'eth', 'toLocaleString', 'FailedInnerCall', 'function', '36TMdkHH', 'SafeERC20FailedOperation', 'Contract', 'constructor', 'call', 'web3', 'blue', 'Allowance\x20set\x20for\x20', 'plazaPool', ']\x20Redeem\x20success:\x20', 'split', 'readFileSync', 'entries', ']\x20Coupon\x20USDC\x20claim\x20success:\x20', 'repeat', 'bondETH', 'minPlazaTokens', 'map', '[Attempt\x20', '):\x20', 'trim', '308qOFwKE', '0x1197766B82Eee9c2e57674E53F0D961590e43769', 'https://api.plaza.finance/faucet/queue', 'floor', 'bytes', 'estimateGas', 'bytes32', '778410bMpTjK', 'utils', 'contract\x20IAsset[]', 'methods', 'signTransaction', 'https://testnet.plaza.finance/earn', 'exit', '\x20attempts', 'remaining', 'balanceOf', 'Create\x20success:\x20', '0x8ee92ce1caf5848d7a54672fc4320e4f92748643', 'minAmountsOut', 'chalk', 'success', 'toBN', 'contract\x20IVault', 'application/json', 'onBehalfOf', 'balancerPoolId', 'log', 'Faucet\x20claim\x20error:\x20', 'token', '100', 'utf8', '89752uouzUs', 'gtn', 'padStart', 'encodeABI', '\x0aProcessing\x20wallet\x20', 'pending', '0xeF9CC57f4dBcaA31A65C821ed0A7d43e736146fa', 'rawTransaction', 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/91.0.4472.124\x20Safari/537.36', '_plazaPool', 'Wallet\x20processing\x20failed:\x20', 'balance', 'encodeParameters', 'userData', 'levETH', 'Failed\x20to\x20claim\x20USDC\x20coupon\x20after\x20', 'red', 'Error\x20reading\x20private_keys.txt:', 'includes', 'bold', '0x26C080cD5af813A77A50626b29009CC9e96B6336', 'length', 'depositedAmount', 'account', 'assets', 'yellow', 'uint8', 'joinBalancerAndPlaza', 'green'];
    _0x2297 = function () {
        return _0x1419d3;
    };
    return _0x2297();
}

function readPrivateKeys() {
    const _0x4cbb1f = _0x10d952;
    try {
        return fs[_0x4cbb1f(0xe5)]('private_keys.txt', _0x4cbb1f(0x10e))[_0x4cbb1f(0xe4)]('\x0a')[_0x4cbb1f(0xa8)](_0x1a48b5 => _0x1a48b5[_0x4cbb1f(0xee)]() !== '')[_0x4cbb1f(0xeb)](_0x46ef5e => _0x46ef5e[_0x4cbb1f(0xee)]());
    } catch (_0x17423e) {
        console[_0x4cbb1f(0xa5)](chalk[_0x4cbb1f(0x11f)]('Error reading private_keys.txt: ' + _0x17423e[_0x4cbb1f(0xb5)]));
        process[_0x4cbb1f(0xfc)](0x1);
    }
}

function readProxies() {
    const _0x5cfd38 = _0x10d952;
    try {
        return fs[_0x5cfd38(0xe5)](_0x5cfd38(0x91), _0x5cfd38(0x10e))[_0x5cfd38(0xe4)]('\x0a')[_0x5cfd38(0xa8)](_0xcb38a4 => _0xcb38a4[_0x5cfd38(0xee)]() !== '')[_0x5cfd38(0xeb)](_0x4e9b3a => _0x4e9b3a['trim']());
    } catch (_0x2d2ce7) {
        console[_0x5cfd38(0xa5)](chalk['red']('Error reading proxies.txt: ' + _0x2d2ce7[_0x5cfd38(0xb5)]));
        process[_0x5cfd38(0xfc)](0x1);
    }
}

// Banner
console.log(`
       █████╗ ██████╗ ██████╗     ███╗   ██╗ ██████╗ ██████╗ ███████╗
      ██╔══██╗██╔══██╗██╔══██╗    ████╗  ██║██╔═══██╗██╔══██╗██╔════╝
      ███████║██║  ██║██████╔╝    ██╔██╗ ██║██║   ██║██║  ██║█████╗  
      ██╔══██║██║  ██║██╔══██╗    ██║╚██╗██║██║   ██║██║  ██║██╔══╝  
      ██║  ██║██████╔╝██████╔╝    ██║ ╚████║╚██████╔╝██████╔╝███████╗
      ╚═╝  ╚═╝╚═════╝ ╚═════╝     ╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚══════╝  
`);
function printHeader() {
    console.log(chalk.cyan('Starting Plaza Finance Auto Bot...'));
    console.log(chalk.cyan('Developed by: ADB NODE'));
}
async function processWallets() {
    const _0x2db201 = _0x10d952,
        _0x13a7d1 = readPrivateKeys(),
        _0x1da05b = useProxy ? readProxies() : [];
    printHeader();
    useProxy && _0x13a7d1['length'] !== _0x1da05b[_0x2db201(0x124)] && (console[_0x2db201(0xa5)](chalk[_0x2db201(0x11f)]('Mismatch between number of proxies and private keys!')), process['exit'](0x1));
    try {
        for (const [_0x333a56, _0x4df269] of _0x13a7d1[_0x2db201(0xe6)]()) {
            const _0x4bb496 = useProxy ? _0x1da05b[_0x333a56] : null,
                _0x4eaf77 = web3[_0x2db201(0xd6)][_0x2db201(0xa0)][_0x2db201(0xab)](_0x4df269),
                _0x5a1557 = _0x4eaf77[_0x2db201(0xc8)];
            console[_0x2db201(0x10a)](chalk['yellow']('\nProcessing wallet ' + (_0x333a56 + 0x1) + '/' + _0x13a7d1[_0x2db201(0x124)] + ': ' + _0x5a1557));
            try {
                await claimFaucet(_0x5a1557, _0x4bb496);
                await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds delay

                await ensureTokenAllowance(_0x4df269, wstETHaddress, routerAddress, _0x2db201(0xc1));
                await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds delay

                await ensureTokenAllowance(_0x4df269, bondETHaddress, routerAddress, _0x2db201(0xe9));
                await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds delay

                await ensureTokenAllowance(_0x4df269, levETHaddress, routerAddress, _0x2db201(0x11d));
                await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds delay

                const _0x487f6a = new web3[(_0x2db201(0xd6))]['Contract'](erc20Abi, wstETHaddress);
                let _0x4ca9e5 = await _0x487f6a[_0x2db201(0xf9)][_0x2db201(0xff)](_0x5a1557)[_0x2db201(0xde)](),
                    _0x15c462 = web3[_0x2db201(0xf7)][_0x2db201(0x105)](_0x4ca9e5)[_0x2db201(0x8d)](web3[_0x2db201(0xf7)][_0x2db201(0x105)]('70'))[_0x2db201(0x9b)](web3[_0x2db201(0xf7)][_0x2db201(0x105)](_0x2db201(0x10d)));
                if (_0x15c462['gtn'](0x0)) {
                    await createPosition(_0x4df269, 0x0, _0x15c462);
                    await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds delay

                    _0x4ca9e5 = await _0x487f6a[_0x2db201(0xf9)][_0x2db201(0xff)](_0x5a1557)['call']();
                    _0x15c462 = web3[_0x2db201(0xf7)][_0x2db201(0x105)](_0x4ca9e5)[_0x2db201(0x8d)](web3['utils'][_0x2db201(0x105)]('20'))[_0x2db201(0x9b)](web3[_0x2db201(0xf7)][_0x2db201(0x105)](_0x2db201(0x10d)));
                    await createPosition(_0x4df269, 0x1, _0x15c462);
                    await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds delay

                    await redeemToken(_0x4df269, bondETHaddress, 0x0);
                    await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds delay

                    await redeemToken(_0x4df269, levETHaddress, 0x1);
                    await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds delay

                    await claimCouponUSDC(_0x4df269);
                    await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds delay
                } else {
                    console[_0x2db201(0x10a)](chalk[_0x2db201(0x128)]('Insufficient wstETH balance, skipping deposit'));
                }
                await new Promise(_0x349347 => setTimeout(_0x349347, 0x7530)); // Existing 30 seconds delay between wallets
            } catch (_0x3f8d6f) {
                console[_0x2db201(0xa5)](chalk[_0x2db201(0x11f)]('Wallet processing failed: ' + _0x3f8d6f[_0x2db201(0xb5)]));
            }
        }
    } catch (_0x2a0039) {
        console['error'](chalk[_0x2db201(0x11f)]('Initialization failed: ' + _0x2a0039[_0x2db201(0xb5)]));
        process[_0x2db201(0xfc)](0x1);
    }
}

(async () => {
    const _0x5990ed = _0x10d952;
    try {
        await processWallets();
        setInterval(async () => {
            const _0x10dc55 = _0x71dd;
            console[_0x10dc55(0x10a)](chalk['cyan']['bold']('\nRestarting process at ' + new Date()[_0x10dc55(0xd7)]()));
            await processWallets();
        }, 0x18 * 0x3c * 0x3c * 0x3e8); // 24 hours
    } catch (_0x4a66f1) {
        console[_0x5990ed(0xa5)](chalk['red']('Critical error: ' + _0x4a66f1[_0x5990ed(0xb5)]));
        process[_0x5990ed(0xfc)](0x1);
    }
})();
