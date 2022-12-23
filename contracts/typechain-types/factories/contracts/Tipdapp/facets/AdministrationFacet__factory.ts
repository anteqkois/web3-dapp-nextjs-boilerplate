/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AdministrationFacet,
  AdministrationFacetInterface,
} from "../../../../contracts/Tipdapp/facets/AdministrationFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_newSignerAdmin",
        type: "address",
      },
    ],
    name: "changeSignerAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newImplementation",
        type: "address",
      },
    ],
    name: "setUserTokenImplmentation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "signerAdmin",
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
    name: "tipFee",
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
    inputs: [],
    name: "unPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "userTokenImplmentation",
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
    name: "withdrawERC20Admin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawETHAdmin",
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
    name: "withdrawManyERC20Admin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610667806100206000396000f3fe6080604052600436106100a75760003560e01c8063a1244ca111610064578063a1244ca114610165578063d63fc60a14610185578063d8a3740e146101a5578063e98827b6146101c3578063f7b188a5146101e3578063fab6a803146101f857600080fd5b806335759788146100ac5780635c975abb146100b657806369fe0e2d146100de57806379cc3f1c146100fe5780638456cb591461011e5780638b08da6d14610133575b600080fd5b6100b461021b565b005b3480156100c257600080fd5b5060015460ff1660405190151581526020015b60405180910390f35b3480156100ea57600080fd5b506100b46100f936600461053b565b6102d9565b34801561010a57600080fd5b506100b4610119366004610554565b6102f4565b34801561012a57600080fd5b506100b461033f565b34801561013f57600080fd5b506005546001600160a01b03165b6040516001600160a01b0390911681526020016100d5565b34801561017157600080fd5b506100b46101803660046105c9565b610355565b34801561019157600080fd5b506100b46101a03660046105c9565b61037f565b3480156101b157600080fd5b506000546040519081526020016100d5565b3480156101cf57600080fd5b506100b46101de3660046105c9565b6103af565b3480156101ef57600080fd5b506100b461049e565b34801561020457600080fd5b5060015461010090046001600160a01b031661014d565b6102236104b2565b306000908152600260205260408082208054908390559051909190339083908381818185875af1925050503d806000811461027a576040519150601f19603f3d011682016040523d82523d6000602084013e61027f565b606091505b50509050806102d55760405162461bcd60e51b815260206004820152601860248201527f4661696c656420746f207769746864726177204574686572000000000000000060448201526064015b60405180910390fd5b5050565b6102e16104b2565b6105dc81106102ef57600080fd5b600055565b6102fc6104b2565b8060005b8181146103395761033184848381811061031c5761031c6105f9565b90506020020160208101906101de91906105c9565b600101610300565b50505050565b6103476104b2565b6001805460ff191681179055565b61035d6104b2565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6103876104b2565b600180546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b6103b76104b2565b3060009081526003602090815260408083206001600160a01b0385168085529252808320805490849055905163a9059cbb60e01b8152336004820152602481018290529092919063a9059cbb906044016020604051808303816000875af1158015610426573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044a919061060f565b9050806104995760405162461bcd60e51b815260206004820152601a60248201527f5769746864726177204552433230206e6f74207375636365737300000000000060448201526064016102cc565b505050565b6104a66104b2565b6001805460ff19169055565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b031633146105395760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b60648201526084016102cc565b565b60006020828403121561054d57600080fd5b5035919050565b6000806020838503121561056757600080fd5b823567ffffffffffffffff8082111561057f57600080fd5b818501915085601f83011261059357600080fd5b8135818111156105a257600080fd5b8660208260051b85010111156105b757600080fd5b60209290920196919550909350505050565b6000602082840312156105db57600080fd5b81356001600160a01b03811681146105f257600080fd5b9392505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561062157600080fd5b815180151581146105f257600080fdfea2646970667358221220ece6e597529cec2d866341311d5da685bbfa2d144897ddd9e38e35788b2ace8864736f6c63430008110033";

type AdministrationFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdministrationFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AdministrationFacet__factory extends ContractFactory {
  constructor(...args: AdministrationFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AdministrationFacet> {
    return super.deploy(overrides || {}) as Promise<AdministrationFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AdministrationFacet {
    return super.attach(address) as AdministrationFacet;
  }
  override connect(signer: Signer): AdministrationFacet__factory {
    return super.connect(signer) as AdministrationFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdministrationFacetInterface {
    return new utils.Interface(_abi) as AdministrationFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdministrationFacet {
    return new Contract(address, _abi, signerOrProvider) as AdministrationFacet;
  }
}
