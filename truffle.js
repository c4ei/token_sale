const HDWalletProvider = require('@truffle/hdwallet-provider');
require("dotenv").config();
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY || "";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: "7545",
    //   network_id: "*" // match any network id
    // },
    // rinkeby: {
    //   host: "localhost",
    //   port: 8545,
    //   network_id: 4,
    //   gas: 4700000
    // },
    c4ei: {
      provider: () => new HDWalletProvider(GOERLI_PRIVATE_KEY, `https://rpc.c4ei.net`),
       network_id: 21004
      //  ,gas: 5500000,
      //  confirmations: 2,
      //  timeoutBlocks: 200,
      //  skipDryRun: true
    }
  }
};
