/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  UserFacet,
  UserFacetInterface,
} from "../../../../contracts/Tipdapp/facets/UserFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "donator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addressToDonate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "Donate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "userToken",
        type: "address",
      },
    ],
    name: "NewUser",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "balanceERC20",
    outputs: [
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceETH",
    outputs: [
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_mintTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_toUser",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timestampOffChain",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_addressToDonate",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_userTokenAddress",
        type: "address",
      },
    ],
    name: "donateERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addressToDonate",
        type: "address",
      },
    ],
    name: "donateETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
    ],
    name: "registerUser",
    outputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "userToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_tokenAddress",
        type: "address[]",
      },
    ],
    name: "withdrawManyERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061116c806100206000396000f3fe6080604052600436106100865760003560e01c80633b11e5c8116100595780633b11e5c814610151578063a1e14f9f14610187578063ae07e2781461019a578063e086e5ec146101ba578063f4f3b200146101c257600080fd5b806310bdea0a1461008b5780631663c708146100be5780631d2e4afd1461010f57806325647df21461012f575b600080fd5b34801561009757600080fd5b506100ab6100a6366004610cec565b6101e2565b6040519081526020015b60405180910390f35b3480156100ca57600080fd5b506100f76100d9366004610d1f565b6001600160a01b039081166000908152600460205260409020541690565b6040516001600160a01b0390911681526020016100b5565b34801561011b57600080fd5b506100f761012a366004610de4565b61020f565b34801561013b57600080fd5b5061014f61014a366004610e48565b61037c565b005b34801561015d57600080fd5b506100ab61016c366004610d1f565b6001600160a01b031660009081526002602052604090205490565b61014f610195366004610d1f565b610753565b3480156101a657600080fd5b5061014f6101b5366004610f1a565b610916565b61014f610959565b3480156101ce57600080fd5b5061014f6101dd366004610d1f565b610aa0565b6001600160a01b038083166000908152600360209081526040808320938516835292905220545b92915050565b60015460009060ff161561023e5760405162461bcd60e51b815260040161023590610f8f565b60405180910390fd5b336000908152600460205260409020546001600160a01b0316156102995760405162461bcd60e51b81526020600482015260126024820152711059191c995cdcc81c9959da5cdd195c995960721b6044820152606401610235565b6005546000906102b1906001600160a01b0316610c3b565b60405163266c45bb60e11b81529091506001600160a01b03821690634cd88b76906102e29087908790600401611004565b600060405180830381600087803b1580156102fc57600080fd5b505af1158015610310573d6000803e3d6000fd5b50503360008181526004602090815260409182902080546001600160a01b0319166001600160a01b03881690811790915591519182529193507fff3eabe1067b08ba8af3e8d3191eebeae9b35de7a7aeee40f2ad1ceb6a88760792500160405180910390a29392505050565b60015460ff161561039f5760405162461bcd60e51b815260040161023590610f8f565b426103ab85605a611048565b116103f15760405162461bcd60e51b815260206004820152601660248201527514da59db985d1d5c99481d1a5b5948195e1c1a5c995960521b6044820152606401610235565b6041891461043a5760405162461bcd60e51b81526020600482015260166024820152750aee4dedcce40e6d2cedcc2e8eae4ca40d8cadccee8d60531b6044820152606401610235565b6001805460408051602081018c90529081018a905260608082018a90526080820189905260a082018890526bffffffffffffffffffffffff1986821b811660c08401529085901b1660d4820152610144359261016435926101843560001a926101009091046001600160a01b0316919060e80160408051601f198184030181529082905280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000091830191909152603c820152605c0160408051601f198184030181528282528051602091820120600084529083018083525260ff851690820152606081018690526080810185905260a0016020604051602081039080840390855afa158015610554573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146105a65760405162461bcd60e51b815260206004820152600f60248201526e57726f6e67207369676e617475726560881b6044820152606401610235565b6040516323b872dd60e01b8152336004820152306024820152604481018c90526001600160a01b038616906323b872dd906064016020604051808303816000875af11580156105f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061d919061105b565b508860006003016000886001600160a01b03166001600160a01b031681526020019081526020016000206000876001600160a01b03166001600160a01b03168152602001908152602001600020600082825401925050819055508760006003016000306001600160a01b03166001600160a01b031681526020019081526020016000206000876001600160a01b03166001600160a01b0316815260200190815260200160002060008282540192505081905550836001600160a01b03166340c10f19338c6040518363ffffffff1660e01b81526004016107129291906001600160a01b03929092168252602082015260400190565b600060405180830381600087803b15801561072c57600080fd5b505af1158015610740573d6000803e3d6000fd5b5050505050505050505050505050505050565b60015460ff16156107765760405162461bcd60e51b815260040161023590610f8f565b6000735f4ec3df9cbd43714fe2740f5e3616155c5b84196001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156107ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ee9190611097565b50505091505060006305f5e100348361080791906110e7565b61081191906110fe565b9050600061271060008001543461082891906110e7565b61083291906110fe565b3060009081526002602090815260408083208054850190556001600160a01b038881168452818420805434879003019055600492839052928190205490516340c10f1960e01b81523392810192909252602482018690529293509116906340c10f1990604401600060405180830381600087803b1580156108b257600080fd5b505af11580156108c6573d6000803e3d6000fd5b505060408051600081523460208201526001600160a01b03881693503392507f926c014a021d0c02ba786ba65252d955a4b3ee5afd50a9e9bad13aea855e1a6f910160405180910390a350505050565b8060005b8181146109535761094b84848381811061093657610936611120565b90506020020160208101906101dd9190610d1f565b60010161091a565b50505050565b33600090815260026020526040812054908190036109b95760405162461bcd60e51b815260206004820152601960248201527f596f752068617665203020455448206f6e2062616c616e6365000000000000006044820152606401610235565b336000818152600260205260408082208290555190919083908381818185875af1925050503d8060008114610a0a576040519150601f19603f3d011682016040523d82523d6000602084013e610a0f565b606091505b5050905080610a605760405162461bcd60e51b815260206004820152601860248201527f4661696c656420746f20776974686472617720457468657200000000000000006044820152606401610235565b60408051600081526020810184905233917f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb910160405180910390a25050565b3360009081526003602090815260408083206001600160a01b038516845290915281205490819003610b145760405162461bcd60e51b815260206004820152601c60248201527f596f752068617665203020746f6b656e73206f6e2062616c616e6365000000006044820152606401610235565b3360008181526003602090815260408083206001600160a01b03871680855292528083208390555163a9059cbb60e01b8152600481019390935260248301849052909163a9059cbb906044016020604051808303816000875af1158015610b7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba3919061105b565b905080610bf25760405162461bcd60e51b815260206004820152601a60248201527f5769746864726177204552433230206e6f7420737563636573730000000000006044820152606401610235565b604080516001600160a01b03851681526020810184905233917f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb910160405180910390a2505050565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008260601b60e81c176000526e5af43d82803e903d91602b57fd5bf38260781b17602052603760096000f090506001600160a01b038116610cd05760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b6044820152606401610235565b919050565b80356001600160a01b0381168114610cd057600080fd5b60008060408385031215610cff57600080fd5b610d0883610cd5565b9150610d1660208401610cd5565b90509250929050565b600060208284031215610d3157600080fd5b610d3a82610cd5565b9392505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610d6857600080fd5b813567ffffffffffffffff80821115610d8357610d83610d41565b604051601f8301601f19908116603f01168101908282118183101715610dab57610dab610d41565b81604052838152866020858801011115610dc457600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215610df757600080fd5b823567ffffffffffffffff80821115610e0f57600080fd5b610e1b86838701610d57565b93506020850135915080821115610e3157600080fd5b50610e3e85828601610d57565b9150509250929050565b6000806000806000806000806000806101208b8d031215610e6857600080fd5b8a3567ffffffffffffffff80821115610e8057600080fd5b818d0191508d601f830112610e9457600080fd5b813581811115610ea357600080fd5b8e6020828501011115610eb557600080fd5b60209283019c509a50508b0135975060408b0135965060608b0135955060808b0135945060a08b01359350610eec60c08c01610cd5565b9250610efa60e08c01610cd5565b9150610f096101008c01610cd5565b90509295989b9194979a5092959850565b60008060208385031215610f2d57600080fd5b823567ffffffffffffffff80821115610f4557600080fd5b818501915085601f830112610f5957600080fd5b813581811115610f6857600080fd5b8660208260051b8501011115610f7d57600080fd5b60209290920196919550909350505050565b60208082526015908201527414db585c9d0810dbdb9d1c9858dd081c185d5cd959605a1b604082015260600190565b6000815180845260005b81811015610fe457602081850181015186830182015201610fc8565b506000602082860101526020601f19601f83011685010191505092915050565b6040815260006110176040830185610fbe565b82810360208401526110298185610fbe565b95945050505050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561020957610209611032565b60006020828403121561106d57600080fd5b81518015158114610d3a57600080fd5b805169ffffffffffffffffffff81168114610cd057600080fd5b600080600080600060a086880312156110af57600080fd5b6110b88661107d565b94506020860151935060408601519250606086015191506110db6080870161107d565b90509295509295909350565b808202811582820484141761020957610209611032565b60008261111b57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220be9f2859c21585e4748262b46edc5d17782291a23f48bcf4625d3480cfcd405164736f6c63430008110033";

type UserFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserFacet__factory extends ContractFactory {
  constructor(...args: UserFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UserFacet> {
    return super.deploy(overrides || {}) as Promise<UserFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UserFacet {
    return super.attach(address) as UserFacet;
  }
  override connect(signer: Signer): UserFacet__factory {
    return super.connect(signer) as UserFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserFacetInterface {
    return new utils.Interface(_abi) as UserFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserFacet {
    return new Contract(address, _abi, signerOrProvider) as UserFacet;
  }
}
