const ethers = require('ethers');
require('dotenv').config({ path: '../.env' });

let provider, privateKey;

switch (process.env.STATE) {
  case 'dev-local':
    privateKey = process.env.WALLET_PRIVATE_KEY_LOCAL;
    provider = new ethers.providers.JsonRpcProvider();
    break;
  case 'dev-rinkeby':
    privateKey = process.env.WALLET_PRIVATE_KEY_RINKEBY;
    provider = new ethers.providers.AlchemyProvider('rinkeby');
    break;

  default:
    privateKey = process.env.WALLET_PRIVATE_KEY_LOCAL;
    provider = new ethers.providers.JsonRpcProvider();
    break;
}

const wallet = new ethers.Wallet(privateKey, provider);

// console.log(wallet);
// provider.on('block', (blockNumber) => {
//   console.log('blockNumber ', blockNumber);
// });

// export { wallet as signer , provider };
module.exports = { signer: wallet, provider };
