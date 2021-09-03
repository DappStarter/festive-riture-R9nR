require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note situate company install nasty equal giggle'; 
let testAccounts = [
"0xc8ee68bfc49e00ee2300fecdc238dfaca80761ba7a5eed34d2d71b759b0f862b",
"0x103089e08ffe9e90ad27e500629ff2cc3d828f9b5909df7e49e48e654e3caad9",
"0x85af02eaec0508334e9315eb3625204efc7fdc8f44115e2b401b5b1c41b34d42",
"0xa4a20dc1b3cdac3f1ecf823f0ea44faed5604d4069a45b15c725269caaa9de37",
"0x37155653cab5d4fef635fd995a6dde097d19c80cd4fd41e289480e15be242e34",
"0x2bad0f83746083b6dd1c67e2d2bca31c2f5938ddc81fb65782a9a837108885a3",
"0xb6967d197c6ffc7fdd918330ca074b5b6499895b06dc0b83fab8f58c23da4676",
"0x788af9c0c5ae870dc150ed1886ac17d9e4a159a34e790d20d1fef64d6c7c1c15",
"0xe3149e56073135594b36c901dd8a03e215cad752c5737288c4e9976aa9bdef99",
"0x455959f15231b1734f66ae6035c4e2b7d73858ff554a9be4eb4febbb7c7cabf0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

