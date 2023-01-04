import { Network } from './src/types/index.js';

export {};

interface IProcessEnv {
  NETWORK: Network;
  COINMARKETCAP_API_KEY: string;
  ALCHEMY_API_KEY: string;
  DEPLOYER_WALLET_PRIVATE_KEY: string;
  SIGNER_WALLET_PRIVATE_KEY: string;
  THIRD_WALLET_PRIVATE_KEY: string;
  AMQP_URL: string;
}

declare global {
  namespace NodeJS {
    export interface ProcessEnv extends IProcessEnv {}
  }
}
