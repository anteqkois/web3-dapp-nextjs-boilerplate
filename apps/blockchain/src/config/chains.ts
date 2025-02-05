type Address = `0x${string}`;
type BlockExplorer = {
  name: string;
  url: string;
};
type Chain = {
  /** ID in number form */
  id: number;
  /** Human-readable name */
  name: string;
  /** Internal network name */
  network: string;
  /** Currency used by chain */
  nativeCurrency: NativeCurrency;
  /** Collection of RPC endpoints */
  rpcUrls: {
    [key: string]: RpcUrls;
    default: RpcUrls;
  };
  /** Collection of block explorers */
  blockExplorers?: {
    [key: string]: BlockExplorer;
    default: BlockExplorer;
  };
  /** Collection of contracts */
  contracts?: {
    ensRegistry?: Contract;
    multicall3?: Contract;
  };
  /** Flag for test networks */
  testnet?: boolean;
};
type Contract = {
  address: Address;
  blockCreated?: number;
};
type NativeCurrency = {
  name: string;
  /** 2-6 characters long */
  symbol: string;
  decimals: number;
};
type RpcUrls = {
  http: string[];
  webSocket?: string[];
};

// src/arbitrum.ts
const arbitrum = {
  id: 42161,
  name: 'Arbitrum One',
  network: 'arbitrum',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ['https://arb-mainnet.g.alchemy.com/v2'],
      webSocket: ['wss://arb-mainnet.g.alchemy.com/v2'],
    },
    infura: {
      http: ['https://arbitrum-mainnet.infura.io/v3'],
      webSocket: ['wss://arbitrum-mainnet.infura.io/ws/v3'],
    },
    default: {
      http: ['https://arb1.arbitrum.io/rpc'],
    },
  },
  blockExplorers: {
    etherscan: { name: 'Arbiscan', url: 'https://arbiscan.io' },
    default: { name: 'Arbiscan', url: 'https://arbiscan.io' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 7654707,
    },
  },
};

// src/arbitrumGoerli.ts
const arbitrumGoerli = {
  id: 421613,
  name: 'Arbitrum Goerli',
  network: 'arbitrum-goerli',
  nativeCurrency: {
    name: 'Arbitrum Goerli Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    alchemy: {
      http: ['https://arb-goerli.g.alchemy.com/v2'],
      webSocket: ['wss://arb-goerli.g.alchemy.com/v2'],
    },
    infura: {
      http: ['https://arbitrum-goerli.infura.io/v3'],
      webSocket: ['wss://arbitrum-goerli.infura.io/ws/v3'],
    },
    default: {
      http: ['https://goerli-rollup.arbitrum.io/rpc'],
    },
  },
  blockExplorers: {
    etherscan: { name: 'Arbiscan', url: 'https://goerli.arbiscan.io/' },
    default: { name: 'Arbiscan', url: 'https://goerli.arbiscan.io/' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 88114,
    },
  },
  testnet: true,
};

// src/avalanche.ts
const avalanche = {
  id: 43114,
  name: 'Avalanche',
  network: 'avalanche',
  nativeCurrency: {
    decimals: 18,
    name: 'Avalanche',
    symbol: 'AVAX',
  },
  rpcUrls: {
    default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11907934,
    },
  },
};

// src/avalancheFuji.ts
const avalancheFuji = {
  id: 43113,
  name: 'Avalanche Fuji',
  network: 'avalanche-fuji',
  nativeCurrency: {
    decimals: 18,
    name: 'Avalanche Fuji',
    symbol: 'AVAX',
  },
  rpcUrls: {
    default: { http: ['https://api.avax-test.network/ext/bc/C/rpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://testnet.snowtrace.io' },
    default: { name: 'SnowTrace', url: 'https://testnet.snowtrace.io' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 7096959,
    },
  },
  testnet: true,
};

// src/bsc.ts
const bsc = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  nativeCurrency: {
    decimals: 18,
    name: 'BNB',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: { http: ['https://rpc.ankr.com/bsc'] },
  },
  blockExplorers: {
    etherscan: { name: 'BscScan', url: 'https://bscscan.com' },
    default: { name: 'BscScan', url: 'https://bscscan.com' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 15921452,
    },
  },
};

// src/bscTestnet.ts
const bscTestnet = {
  id: 97,
  name: 'Binance Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'BNB',
    symbol: 'tBNB',
  },
  rpcUrls: {
    default: { http: ['https://bsc-testnet.public.blastapi.io'] },
  },
  blockExplorers: {
    etherscan: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 17422483,
    },
  },
  testnet: true,
};

// src/evmos.ts
const evmos = {
  id: 9001,
  name: 'Evmos',
  network: 'evmos',
  nativeCurrency: {
    decimals: 18,
    name: 'Evmos',
    symbol: 'EVMOS',
  },
  rpcUrls: {
    default: { http: ['https://eth.bd.evmos.org:8545'] },
  },
  blockExplorers: {
    default: { name: 'Evmos Block Explorer', url: 'https://escan.live/' },
  },
};

// src/evmosTestnet.ts
const evmosTestnet = {
  id: 9e3,
  name: 'Evmos Testnet',
  network: 'evmos-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Evmos',
    symbol: 'EVMOS',
  },
  rpcUrls: {
    default: { http: ['https://eth.bd.evmos.dev:8545'] },
  },
  blockExplorers: {
    default: {
      name: 'Evmos Testnet Block Explorer',
      url: 'https://evm.evmos.dev/',
    },
  },
};

// src/fantom.ts
const fantom = {
  id: 250,
  name: 'Fantom',
  network: 'fantom',
  nativeCurrency: {
    decimals: 18,
    name: 'Fantom',
    symbol: 'FTM',
  },
  rpcUrls: {
    default: { http: ['https://rpc.ankr.com/fantom'] },
  },
  blockExplorers: {
    etherscan: { name: 'FTMScan', url: 'https://ftmscan.com' },
    default: { name: 'FTMScan', url: 'https://ftmscan.com' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 33001987,
    },
  },
};

// src/fantomTestnet.ts
const fantomTestnet = {
  id: 4002,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Fantom',
    symbol: 'FTM',
  },
  rpcUrls: {
    default: { http: ['https://rpc.testnet.fantom.network'] },
  },
  blockExplorers: {
    etherscan: { name: 'FTMScan', url: 'https://testnet.ftmscan.com' },
    default: { name: 'FTMScan', url: 'https://testnet.ftmscan.com' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 8328688,
    },
  },
};

// src/foundry.ts
const foundry = {
  id: 31337,
  name: 'Foundry',
  network: 'foundry',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
  },
};

// src/iotex.ts
const iotex = {
  id: 4689,
  name: 'IoTeX',
  network: 'iotex',
  nativeCurrency: {
    decimals: 18,
    name: 'IoTeX',
    symbol: 'IOTX',
  },
  rpcUrls: {
    default: {
      http: ['https://babel-api.mainnet.iotex.io'],
      webSocket: ['wss://babel-api.mainnet.iotex.io'],
    },
  },
  blockExplorers: {
    default: { name: 'IoTeXScan', url: 'https://iotexscan.io' },
  },
};

// src/iotexTestnet.ts
const iotexTestnet = {
  id: 4690,
  name: 'IoTeX Testnet',
  network: 'iotex-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'IoTeX',
    symbol: 'IOTX',
  },
  rpcUrls: {
    default: {
      http: ['https://babel-api.testnet.iotex.io'],
      webSocket: ['wss://babel-api.testnet.iotex.io'],
    },
  },
  blockExplorers: {
    default: { name: 'IoTeXScan', url: 'https://testnet.iotexscan.io' },
  },
};

// src/goerli.ts
const goerli = {
  id: 5,
  network: 'goerli',
  name: 'Goerli',
  nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ['https://eth-goerli.g.alchemy.com/v2'],
      webSocket: ['wss://eth-goerli.g.alchemy.com/v2'],
    },
    infura: {
      http: ['https://goerli.infura.io/v3'],
      webSocket: ['wss://goerli.infura.io/ws/v3'],
    },
    default: {
      http: ['https://rpc.ankr.com/eth_goerli'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: 'https://goerli.etherscan.io',
    },
    default: {
      name: 'Etherscan',
      url: 'https://goerli.etherscan.io',
    },
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 6507670,
    },
  },
  testnet: true,
};

// src/gnosis.ts
const gnosis = {
  id: 100,
  name: 'Gnosis',
  network: 'gnosis',
  nativeCurrency: {
    decimals: 18,
    name: 'Gnosis',
    symbol: 'xDAI',
  },
  rpcUrls: {
    default: { http: ['https://rpc.gnosischain.com'] },
  },
  blockExplorers: {
    etherscan: {
      name: 'Gnosisscan',
      url: 'https://gnosisscan.io/',
    },
    default: {
      name: 'Gnosis Chain Explorer',
      url: 'https://blockscout.com/xdai/mainnet/',
    },
  },
};

// src/hardhat.ts
const hardhat = {
  id: 31337,
  name: 'Hardhat',
  network: 'hardhat',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
  },
};

// src/localhost.ts
const localhost = {
  id: 1337,
  name: 'Localhost',
  network: 'localhost',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
  },
};

// src/mainnet.ts
const mainnet = {
  id: 1,
  network: 'homestead',
  name: 'Ethereum',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ['https://eth-mainnet.g.alchemy.com/v2'],
      webSocket: ['wss://eth-mainnet.g.alchemy.com/v2'],
    },
    infura: {
      http: ['https://mainnet.infura.io/v3'],
      webSocket: ['wss://mainnet.infura.io/ws/v3'],
    },
    default: {
      http: ['https://cloudflare-eth.com'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: 'https://etherscan.io',
    },
    default: {
      name: 'Etherscan',
      url: 'https://etherscan.io',
    },
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 14353601,
    },
  },
};

// src/optimism.ts
const optimism = {
  id: 10,
  name: 'Optimism',
  network: 'optimism',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ['https://opt-mainnet.g.alchemy.com/v2'],
      webSocket: ['wss://opt-mainnet.g.alchemy.com/v2'],
    },
    infura: {
      http: ['https://optimism-mainnet.infura.io/v3'],
      webSocket: ['wss://optimism-mainnet.infura.io/ws/v3'],
    },
    default: {
      http: ['https://mainnet.optimism.io'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: 'https://optimistic.etherscan.io',
    },
    default: {
      name: 'Etherscan',
      url: 'https://optimistic.etherscan.io',
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 4286263,
    },
  },
};

// src/optimismGoerli.ts
const optimismGoerli = {
  id: 420,
  name: 'Optimism Goerli',
  network: 'optimism-goerli',
  nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ['https://opt-goerli.g.alchemy.com/v2'],
      webSocket: ['wss://opt-goerli.g.alchemy.com/v2'],
    },
    infura: {
      http: ['https://optimism-goerli.infura.io/v3'],
      webSocket: ['wss://optimism-goerli.infura.io/ws/v3'],
    },
    default: {
      http: ['https://goerli.optimism.io'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: 'https://goerli-optimism.etherscan.io',
    },
    default: {
      name: 'Etherscan',
      url: 'https://goerli-optimism.etherscan.io',
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 49461,
    },
  },
  testnet: true,
};

// src/polygon.ts
const polygon = {
  id: 137,
  name: 'Polygon',
  network: 'matic',
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ['https://polygon-mainnet.g.alchemy.com/v2'],
      webSocket: ['wss://polygon-mainnet.g.alchemy.com/v2'],
    },
    infura: {
      http: ['https://polygon-mainnet.infura.io/v3'],
      webSocket: ['wss://polygon-mainnet.infura.io/ws/v3'],
    },
    default: {
      http: ['https://polygon-rpc.com'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'PolygonScan',
      url: 'https://polygonscan.com',
    },
    default: {
      name: 'PolygonScan',
      url: 'https://polygonscan.com',
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 25770160,
    },
  },
};

// src/polygonMumbai.ts
const polygonMumbai = {
  id: 80001,
  name: 'Polygon Mumbai',
  network: 'maticmum',
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ['https://polygon-mumbai.g.alchemy.com/v2'],
      webSocket: ['wss://polygon-mumbai.g.alchemy.com/v2'],
    },
    infura: {
      http: ['https://polygon-mumbai.infura.io/v3'],
      webSocket: ['wss://polygon-mumbai.infura.io/ws/v3'],
    },
    default: {
      http: ['https://matic-mumbai.chainstacklabs.com'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'PolygonScan',
      url: 'https://mumbai.polygonscan.com',
    },
    default: {
      name: 'PolygonScan',
      url: 'https://mumbai.polygonscan.com',
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 25770160,
    },
  },
  testnet: true,
};

// src/sepolia.ts
const sepolia = {
  id: 11155111,
  network: 'sepolia',
  name: 'Sepolia',
  nativeCurrency: { name: 'Sepolia Ether', symbol: 'SEP', decimals: 18 },
  rpcUrls: {
    infura: {
      http: ['https://sepolia.infura.io/v3'],
      webSocket: ['wss://sepolia.infura.io/ws/v3'],
    },
    default: {
      http: ['https://rpc.sepolia.org'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: 'https://sepolia.etherscan.io',
    },
    default: {
      name: 'Etherscan',
      url: 'https://sepolia.etherscan.io',
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 6507670,
    },
  },
  testnet: true,
};

// src/taraxa.ts
const taraxa = {
  id: 841,
  name: 'Taraxa Mainnet',
  network: 'taraxa',
  nativeCurrency: { name: 'Tara', symbol: 'TARA', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.mainnet.taraxa.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Taraxa Explorer',
      url: 'https://explorer.mainnet.taraxa.io',
    },
  },
};

// src/taraxaTestnet.ts
const taraxaTestnet = {
  id: 842,
  name: 'Taraxa Testnet',
  network: 'taraxa-testnet',
  nativeCurrency: { name: 'Tara', symbol: 'TARA', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.taraxa.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Taraxa Explorer',
      url: 'https://explorer.testnet.taraxa.io',
    },
  },
  testnet: true,
};

// src/zkSync.ts
const zkSync = {
  id: 324,
  name: 'zkSync',
  network: 'zksync',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://zksync2-mainnet.zksync.io'],
      webSocket: ['wss://zksync2-mainnet.zksync.io/ws'],
    },
  },
  blockExplorers: {
    default: {
      name: 'zkExplorer',
      url: 'https://explorer.zksync.io',
    },
  },
};

// src/zkSyncTestnet.ts
const zkSyncTestnet = {
  id: 280,
  name: 'zkSync Testnet',
  network: 'zksync-testnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://zksync2-testnet.zksync.dev'],
      webSocket: ['wss://zksync2-testnet.zksync.dev/ws'],
    },
  },
  blockExplorers: {
    default: {
      name: 'zkScan',
      url: 'https://zksync2-testnet.zkscan.io',
    },
  },
  testnet: true,
};
export {
  arbitrum,
  arbitrumGoerli,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  evmos,
  evmosTestnet,
  fantom,
  fantomTestnet,
  foundry,
  gnosis,
  goerli,
  hardhat,
  iotex,
  iotexTestnet,
  localhost,
  mainnet,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  sepolia,
  taraxa,
  taraxaTestnet,
  zkSync,
  zkSyncTestnet,
};
export type {
  Address,
  BlockExplorer,
  Chain,
  Contract,
  NativeCurrency,
  RpcUrls,
};
