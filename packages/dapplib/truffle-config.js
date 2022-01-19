require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera foot blanket razor screen property gentle light army gasp'; 
let testAccounts = [
"0x84355bf474b71cdf65c1ea58211874e3ff0e22c34cd77e1a31bcafba770f331a",
"0x2d0e35ee2103aeaf35cf579c058985bc5ee6faf40efc2a00b1205a580f4d0de8",
"0x7135ce4a9cd1d41f1c386ebf7ff6231b37eb49ad0c0e7d1f0e4964448c1294f2",
"0x674bdf52ff489ef872423ef1711f3257da2c3f3315fc30dab72c253ba9bf0ecd",
"0x8dbe09de0be240286b44dad0e64c22d5808b15b918c76ce2a1cef615c3062cc8",
"0x51d50fc3a04bf6979ca1ae882075016a60733867f0832d14482d388b9094d93e",
"0x964e261d91e67324bdf503d38513c52cce50b7b46ff929cea805ee270fbe095e",
"0x0b5a5062dd1925e7e892fe5be8b097b42cbad3a929a98912904d5bdaed58a145",
"0x81e01262ff11718035d3b288d13b5d61b95c32637c1c0c3c20242678cd90dee7",
"0x8c79d33478f3b87003f172844885fe7fd2b1ec5046b1cd81de3a1e2709ab0bb6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


