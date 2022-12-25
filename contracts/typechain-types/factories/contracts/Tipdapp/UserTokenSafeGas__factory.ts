/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UserTokenSafeGas,
  UserTokenSafeGasInterface,
} from "../../../contracts/Tipdapp/UserTokenSafeGas";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
  "0x608060405234801561001057600080fd5b5061002b67be15277ebb4d1bf360c01b61008b60201b60201c565b610045672e62f8053ab437b160c01b61008b60201b60201c565b33600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061008e565b50565b6120b3806200009e6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80634cd88b761161008c57806395d89b411161006657806395d89b411461024b578063a6f9dae114610269578063a9059cbb14610299578063dd62ed3e146102c9576100ea565b80634cd88b76146101e157806370a08231146101fd5780638da5cb5b1461022d576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b57806340c10f19146101a957806342966c68146101c5576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f76102f9565b60405161010491906116bb565b60405180910390f35b61012760048036038101906101229190611785565b6103c7565b60405161013491906117e0565b60405180910390f35b610145610531565b604051610152919061180a565b60405180910390f35b61017560048036038101906101709190611825565b610577565b60405161018291906117e0565b60405180910390f35b6101936107d7565b6040516101a09190611894565b60405180910390f35b6101c360048036038101906101be9190611785565b61081c565b005b6101df60048036038101906101da91906118af565b610a8b565b005b6101fb60048036038101906101f69190611a11565b610bd2565b005b61021760048036038101906102129190611a89565b610d62565b604051610224919061180a565b60405180910390f35b610235610de7565b6040516102429190611ac5565b60405180910390f35b610253610e4d565b60405161026091906116bb565b60405180910390f35b610283600480360381019061027e9190611a89565b610f1b565b60405161029091906117e0565b60405180910390f35b6102b360048036038101906102ae9190611785565b6111a6565b6040516102c091906117e0565b60405180910390f35b6102e360048036038101906102de9190611ae0565b611221565b6040516102f0919061180a565b60405180910390f35b606061030f67efa65ed8504cf4c260c01b6112e4565b61032367c373e2848a52cf2660c01b6112e4565b61033767b24defe9c132dce160c01b6112e4565b6000805461034490611b4f565b80601f016020809104026020016040519081016040528092919081815260200182805461037090611b4f565b80156103bd5780601f10610392576101008083540402835291602001916103bd565b820191906000526020600020905b8154815290600101906020018083116103a057829003601f168201915b5050505050905090565b60006103dd67a6c409a6028e2f1d60c01b6112e4565b6103f16725b7c296c8891d2760c01b6112e4565b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061048667046e0af7be02011a60c01b6112e4565b61049a6788f72ed41ef68bf760c01b6112e4565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104f7919061180a565b60405180910390a361051367db41905202998f7b60c01b6112e4565b6105276719b1ad5128c8e39460c01b6112e4565b6001905092915050565b60006105476791e09e94d004c95a60c01b6112e4565b61055b67c1edd62860ecb5ea60c01b6112e4565b61056f67946c74dd7a749dc260c01b6112e4565b600254905090565b600061058d6735455a8e11f7895260c01b6112e4565b6105a167a32c4ecbb2df6d3a60c01b6112e4565b6105b567111ec2f42584cc0e60c01b6112e4565b6000600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905061064a6781ffda9c29477aad60c01b6112e4565b61065e67670766f438b40d4d60c01b6112e4565b6106726764fd42541586fe9560c01b6112e4565b828110156106b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ac90611bcc565b60405180910390fd5b6106c967c4e014685e8f20db60c01b6112e4565b6106dd67bc905dcc500d404460c01b6112e4565b82600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107699190611c1b565b9250508190555061078467bd1314a99ca4368b60c01b6112e4565b61079867546e6435d27255ea60c01b6112e4565b6107a38585856112e7565b6107b767f3f7cdbd2e28993560c01b6112e4565b6107cb6726d8374023bd1e4d60c01b6112e4565b60019150509392505050565b60006107ed67faaa7d21990406de60c01b6112e4565b61080167c4d21aeb19e5c1d060c01b6112e4565b61081567cb82a58603c4be5e60c01b6112e4565b6012905090565b61083067d21d34d38cf2213660c01b6112e4565b610844675140373fa631c3d660c01b6112e4565b610858673555c4f73363140f60c01b6112e4565b61086c6794b18db8c98a926460c01b6112e4565b61088067942be9a923a47b9860c01b6112e4565b3373ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610910576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090790611c9b565b60405180910390fd5b61092467db0cb68b5f5be10d60c01b6112e4565b61093867adaa24ae18c2852a60c01b6112e4565b61094c67f4bc965d1328e2a060c01b6112e4565b6109606772c625ffbd98ca7360c01b6112e4565b61097467a6a2075674f87f0060c01b6112e4565b610988679bafb8db234ca33e60c01b6112e4565b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506109e96778ede832b939399d60c01b6112e4565b80600260008282540192505081905550610a0d674971739a4e520c6860c01b6112e4565b610a216771167f1f3cbf898e60c01b6112e4565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a7f919061180a565b60405180910390a35050565b610a9f6774c4278a08eb43c760c01b6112e4565b610ab367615e7feee073936d60c01b6112e4565b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b029190611c1b565b92505081905550610b1d672d1c38a171153ee560c01b6112e4565b610b3167df0f1cec4924240360c01b6112e4565b80600260008282540392505081905550610b5567f8d55aebb166287160c01b6112e4565b610b69677348222a4fa8d08560c01b6112e4565b600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bc7919061180a565b60405180910390a350565b610be66722c84ec163f4960960c01b6112e4565b610bfa675140373fa631c3d660c01b6112e4565b610c0e673555c4f73363140f60c01b6112e4565b610c226794b18db8c98a926460c01b6112e4565b610c3667942be9a923a47b9860c01b6112e4565b3373ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610cc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbd90611c9b565b60405180910390fd5b610cda67db0cb68b5f5be10d60c01b6112e4565b610cee67adaa24ae18c2852a60c01b6112e4565b610d026782d2fbbbeddd01ee60c01b6112e4565b610d166742243ca5887661a460c01b6112e4565b610d2a67e338bfeb81bedfce60c01b6112e4565b8060009081610d399190611e67565b50610d4e677483d6733f1169f060c01b6112e4565b8160019081610d5d9190611e67565b505050565b6000610d78670164af6b6555d3a460c01b6112e4565b610d8c67dc5f8d7feb2731b360c01b6112e4565b610da067ce11a7e12980edf960c01b6112e4565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610dfd67e8a9507b223ee5be60c01b6112e4565b610e11678b9545e3cd1ecece60c01b6112e4565b610e2567c309663e743420fb60c01b6112e4565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060610e6367e746a2fd98f674ca60c01b6112e4565b610e7767148e2ad826c11a0360c01b6112e4565b610e8b67f6b4859ffeb3347c60c01b6112e4565b60018054610e9890611b4f565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec490611b4f565b8015610f115780601f10610ee657610100808354040283529160200191610f11565b820191906000526020600020905b815481529060010190602001808311610ef457829003601f168201915b5050505050905090565b6000610f3167e712fd79133d804d60c01b6112e4565b610f45675140373fa631c3d660c01b6112e4565b610f59673555c4f73363140f60c01b6112e4565b610f6d6794b18db8c98a926460c01b6112e4565b610f8167942be9a923a47b9860c01b6112e4565b3373ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611011576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100890611c9b565b60405180910390fd5b61102567db0cb68b5f5be10d60c01b6112e4565b61103967adaa24ae18c2852a60c01b6112e4565b61104d67eac64a932bc7dde160c01b6112e4565b6110616798196c3f98436a5660c01b6112e4565b6110756769dff6ec33f06a9360c01b6112e4565b61108967d80454b72817beaa60c01b6112e4565b61109d6768129c5ddcf6b5b060c01b6112e4565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361110c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110390611f85565b60405180910390fd5b61112067a5360eca9c6b1b7b60c01b6112e4565b61113467dc175a34ab54dc5760c01b6112e4565b81600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506111896798aaa07bbc2849c560c01b6112e4565b61119d673b10b0d8dd4ae69f60c01b6112e4565b60019050919050565b60006111bc67ef7f73baf30435f760c01b6112e4565b6111d0678a9e45efb1aacd4c60c01b6112e4565b6111e467584c829d2359ceee60c01b6112e4565b6111ef3384846112e7565b611203675af2e981e509614760c01b6112e4565b611217675991ae39fa56bd6560c01b6112e4565b6001905092915050565b600061123767576ea9861da8106a60c01b6112e4565b61124b67da9832579047aa5d60c01b6112e4565b61125f6794599255748f35ae60c01b6112e4565b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b50565b6112fb6796d10d31002cff7e60c01b6112e4565b61130f6760856d551bcce76060c01b6112e4565b611323675c3edc72a73c7b3f60c01b6112e4565b611337674cd260a37b1c5ea760c01b6112e4565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036113a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139d90611ff1565b60405180910390fd5b6113ba679b6827c175de243260c01b6112e4565b6113ce678aa175fa3e2d663a60c01b6112e4565b6113e267cab02577201ee51660c01b6112e4565b6000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905061143a677e8ee0967eef593a60c01b6112e4565b61144e67940bc5f3c13d055c60c01b6112e4565b61146267bfbf0d097455054260c01b6112e4565b818110156114a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161149c9061205d565b60405180910390fd5b6114b96767592a335ff68fbe60c01b6112e4565b6114cd67ba8cd860ca197d2760c01b6112e4565b81600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461151c9190611c1b565b9250508190555061153767eca5c8f9beabb7b260c01b6112e4565b61154b67dd1feda38556e3d260c01b6112e4565b81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506115ac674e7533233577b22c60c01b6112e4565b6115c0671b18afcd9bc9f31a60c01b6112e4565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161161d919061180a565b60405180910390a350505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561166557808201518184015260208101905061164a565b60008484015250505050565b6000601f19601f8301169050919050565b600061168d8261162b565b6116978185611636565b93506116a7818560208601611647565b6116b081611671565b840191505092915050565b600060208201905081810360008301526116d58184611682565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061171c826116f1565b9050919050565b61172c81611711565b811461173757600080fd5b50565b60008135905061174981611723565b92915050565b6000819050919050565b6117628161174f565b811461176d57600080fd5b50565b60008135905061177f81611759565b92915050565b6000806040838503121561179c5761179b6116e7565b5b60006117aa8582860161173a565b92505060206117bb85828601611770565b9150509250929050565b60008115159050919050565b6117da816117c5565b82525050565b60006020820190506117f560008301846117d1565b92915050565b6118048161174f565b82525050565b600060208201905061181f60008301846117fb565b92915050565b60008060006060848603121561183e5761183d6116e7565b5b600061184c8682870161173a565b935050602061185d8682870161173a565b925050604061186e86828701611770565b9150509250925092565b600060ff82169050919050565b61188e81611878565b82525050565b60006020820190506118a96000830184611885565b92915050565b6000602082840312156118c5576118c46116e7565b5b60006118d384828501611770565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61191e82611671565b810181811067ffffffffffffffff8211171561193d5761193c6118e6565b5b80604052505050565b60006119506116dd565b905061195c8282611915565b919050565b600067ffffffffffffffff82111561197c5761197b6118e6565b5b61198582611671565b9050602081019050919050565b82818337600083830152505050565b60006119b46119af84611961565b611946565b9050828152602081018484840111156119d0576119cf6118e1565b5b6119db848285611992565b509392505050565b600082601f8301126119f8576119f76118dc565b5b8135611a088482602086016119a1565b91505092915050565b60008060408385031215611a2857611a276116e7565b5b600083013567ffffffffffffffff811115611a4657611a456116ec565b5b611a52858286016119e3565b925050602083013567ffffffffffffffff811115611a7357611a726116ec565b5b611a7f858286016119e3565b9150509250929050565b600060208284031215611a9f57611a9e6116e7565b5b6000611aad8482850161173a565b91505092915050565b611abf81611711565b82525050565b6000602082019050611ada6000830184611ab6565b92915050565b60008060408385031215611af757611af66116e7565b5b6000611b058582860161173a565b9250506020611b168582860161173a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611b6757607f821691505b602082108103611b7a57611b79611b20565b5b50919050565b7f496e73756666696369656e7420616c6c6f77616e636500000000000000000000600082015250565b6000611bb6601683611636565b9150611bc182611b80565b602082019050919050565b60006020820190508181036000830152611be581611ba9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611c268261174f565b9150611c318361174f565b9250828203905081811115611c4957611c48611bec565b5b92915050565b7f4f6e6c79206f776e657200000000000000000000000000000000000000000000600082015250565b6000611c85600a83611636565b9150611c9082611c4f565b602082019050919050565b60006020820190508181036000830152611cb481611c78565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611d1d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611ce0565b611d278683611ce0565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611d64611d5f611d5a8461174f565b611d3f565b61174f565b9050919050565b6000819050919050565b611d7e83611d49565b611d92611d8a82611d6b565b848454611ced565b825550505050565b600090565b611da7611d9a565b611db2818484611d75565b505050565b5b81811015611dd657611dcb600082611d9f565b600181019050611db8565b5050565b601f821115611e1b57611dec81611cbb565b611df584611cd0565b81016020851015611e04578190505b611e18611e1085611cd0565b830182611db7565b50505b505050565b600082821c905092915050565b6000611e3e60001984600802611e20565b1980831691505092915050565b6000611e578383611e2d565b9150826002028217905092915050565b611e708261162b565b67ffffffffffffffff811115611e8957611e886118e6565b5b611e938254611b4f565b611e9e828285611dda565b600060209050601f831160018114611ed15760008415611ebf578287015190505b611ec98582611e4b565b865550611f31565b601f198416611edf86611cbb565b60005b82811015611f0757848901518255600182019150602085019450602081019050611ee2565b86831015611f245784890151611f20601f891682611e2d565b8355505b6001600288020188555050505b505050505050565b7f4e6577206f776e6572206973207a65726f206164647265737300000000000000600082015250565b6000611f6f601983611636565b9150611f7a82611f39565b602082019050919050565b60006020820190508181036000830152611f9e81611f62565b9050919050565b7f5472616e7366657220746f207a65726f20616464726573730000000000000000600082015250565b6000611fdb601883611636565b9150611fe682611fa5565b602082019050919050565b6000602082019050818103600083015261200a81611fce565b9050919050565b7f416d6f756e7420657863656564732062616c616e636500000000000000000000600082015250565b6000612047601683611636565b915061205282612011565b602082019050919050565b600060208201905081810360008301526120768161203a565b905091905056fea26469706673582212200e5321223ab6a715a503e8ba6bfa7f37a1859a5595cfcda0c2eead7d08c9491b64736f6c63430008110033";

type UserTokenSafeGasConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserTokenSafeGasConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserTokenSafeGas__factory extends ContractFactory {
  constructor(...args: UserTokenSafeGasConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UserTokenSafeGas> {
    return super.deploy(overrides || {}) as Promise<UserTokenSafeGas>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UserTokenSafeGas {
    return super.attach(address) as UserTokenSafeGas;
  }
  override connect(signer: Signer): UserTokenSafeGas__factory {
    return super.connect(signer) as UserTokenSafeGas__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserTokenSafeGasInterface {
    return new utils.Interface(_abi) as UserTokenSafeGasInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserTokenSafeGas {
    return new Contract(address, _abi, signerOrProvider) as UserTokenSafeGas;
  }
}
