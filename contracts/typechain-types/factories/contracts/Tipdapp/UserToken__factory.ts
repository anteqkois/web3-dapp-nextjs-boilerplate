/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UserToken,
  UserTokenInterface,
} from "../../../contracts/Tipdapp/UserToken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "changeOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c34806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80634cd88b761161008c57806395d89b411161006657806395d89b41146101e3578063a6f9dae1146101eb578063a9059cbb146101fe578063dd62ed3e1461021157600080fd5b80634cd88b761461018c57806370a082311461019f5780638da5cb5b146101c857600080fd5b806323b872dd116100c857806323b872dd14610142578063313ce5671461015557806340c10f191461016457806342966c681461017957600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f761024a565b6040516101049190610855565b60405180910390f35b61012061011b3660046108ba565b6102dc565b6040519015158152602001610104565b6002545b604051908152602001610104565b6101206101503660046108e4565b610349565b60405160128152602001610104565b6101776101723660046108ba565b610409565b005b610177610187366004610920565b6104ad565b61017761019a3660046109dc565b61055c565b6101346101ad366004610a40565b6001600160a01b031660009081526005602052604090205490565b6003546040516001600160a01b039091168152602001610104565b6100f76105ec565b6101206101f9366004610a40565b6105fb565b61012061020c3660046108ba565b6106bf565b61013461021f366004610a62565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b60606000805461025990610a95565b80601f016020809104026020016040519081016040528092919081815260200182805461028590610a95565b80156102d25780601f106102a7576101008083540402835291602001916102d2565b820191906000526020600020905b8154815290600101906020018083116102b557829003601f168201915b5050505050905090565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103379086815260200190565b60405180910390a35060015b92915050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054828110156103bb5760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e7420616c6c6f77616e636560501b60448201526064015b60405180910390fd5b60001981146103f3576103ce8382610acf565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6103fe8585856106d5565b506001949350505050565b6003546001600160a01b031633146104505760405162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b60448201526064016103b2565b6001600160a01b03821660008181526005602090815260408083208054860190556002805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91015b60405180910390a35050565b336000908152600560205260409020548181101561050d5760405162461bcd60e51b815260206004820152601b60248201527f4275726e20616d6f756e7420657863656564732062616c616e6365000000000060448201526064016103b2565b3360008181526005602090815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91016104a1565b600354600160a01b900460ff16156105b65760405162461bcd60e51b815260206004820152601f60248201527f436f6e747261637420697320616c726561647920696e697469616c697a65640060448201526064016103b2565b600380546001600160a81b0319163317600160a01b17905560006105da8282610b3e565b5060016105e78382610b3e565b505050565b60606001805461025990610a95565b6003546000906001600160a01b031633146106455760405162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b60448201526064016103b2565b6001600160a01b03821661069b5760405162461bcd60e51b815260206004820152601960248201527f4e6577206f776e6572206973207a65726f20616464726573730000000000000060448201526064016103b2565b50600380546001600160a01b0319166001600160a01b03831617905560015b919050565b60006106cc3384846106d5565b50600192915050565b6001600160a01b03821661072b5760405162461bcd60e51b815260206004820152601860248201527f5472616e7366657220746f207a65726f2061646472657373000000000000000060448201526064016103b2565b306001600160a01b038316036107835760405162461bcd60e51b815260206004820152601860248201527f5472616e7366657220746f20746869732061646472657373000000000000000060448201526064016103b2565b6001600160a01b038316600090815260056020526040902054818110156107e55760405162461bcd60e51b8152602060048201526016602482015275416d6f756e7420657863656564732062616c616e636560501b60448201526064016103b2565b6001600160a01b03808516600081815260056020526040808220805487900390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906108479086815260200190565b60405180910390a350505050565b600060208083528351808285015260005b8181101561088257858101830151858201604001528201610866565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146106ba57600080fd5b600080604083850312156108cd57600080fd5b6108d6836108a3565b946020939093013593505050565b6000806000606084860312156108f957600080fd5b610902846108a3565b9250610910602085016108a3565b9150604084013590509250925092565b60006020828403121561093257600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261096057600080fd5b813567ffffffffffffffff8082111561097b5761097b610939565b604051601f8301601f19908116603f011681019082821181831017156109a3576109a3610939565b816040528381528660208588010111156109bc57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156109ef57600080fd5b823567ffffffffffffffff80821115610a0757600080fd5b610a138683870161094f565b93506020850135915080821115610a2957600080fd5b50610a368582860161094f565b9150509250929050565b600060208284031215610a5257600080fd5b610a5b826108a3565b9392505050565b60008060408385031215610a7557600080fd5b610a7e836108a3565b9150610a8c602084016108a3565b90509250929050565b600181811c90821680610aa957607f821691505b602082108103610ac957634e487b7160e01b600052602260045260246000fd5b50919050565b8181038181111561034357634e487b7160e01b600052601160045260246000fd5b601f8211156105e757600081815260208120601f850160051c81016020861015610b175750805b601f850160051c820191505b81811015610b3657828155600101610b23565b505050505050565b815167ffffffffffffffff811115610b5857610b58610939565b610b6c81610b668454610a95565b84610af0565b602080601f831160018114610ba15760008415610b895750858301515b600019600386901b1c1916600185901b178555610b36565b600085815260208120601f198616915b82811015610bd057888601518255948401946001909101908401610bb1565b5085821015610bee5787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220d1d1926d440a530cca9a0ad2e6a5c1e5ef3418b132383b15ef26bfb7701f210564736f6c63430008110033";

type UserTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserToken__factory extends ContractFactory {
  constructor(...args: UserTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UserToken> {
    return super.deploy(overrides || {}) as Promise<UserToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UserToken {
    return super.attach(address) as UserToken;
  }
  override connect(signer: Signer): UserToken__factory {
    return super.connect(signer) as UserToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserTokenInterface {
    return new utils.Interface(_abi) as UserTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserToken {
    return new Contract(address, _abi, signerOrProvider) as UserToken;
  }
}
