/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  EnterTheChainlinkMultiverse,
  EnterTheChainlinkMultiverseInterface,
} from "../../../contracts/ChainlinkMultiverse.sol/EnterTheChainlinkMultiverse";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EmptySource",
    type: "error",
  },
  {
    inputs: [],
    name: "NoInlineSecrets",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "coordinator",
        type: "address",
      },
    ],
    name: "OnlyOwnerOrCoordinator",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyRouterCanFulfill",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    name: "UnexpectedRequestID",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "vrfCoordinator",
        type: "address",
      },
    ],
    name: "CoordinatorSet",
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
    ],
    name: "OwnershipTransferRequested",
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
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "RequestFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "numWords",
        type: "uint32",
      },
    ],
    name: "RequestSent",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "arbitrumSepoliaVRF",
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
    name: "callbackGasLimit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gasLimit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes",
      },
    ],
    name: "handleOracleFulfillment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "keyHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastRequestId",
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
    name: "makeRandomRequest",
    outputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "multiverseApiSources",
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
    name: "numWords",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
    name: "pokesource",
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
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestConfirmations",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requestIdPending",
    outputs: [
      {
        internalType: "address",
        name: "userWallet",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isPending",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "requestIds",
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
    name: "result",
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
    name: "router",
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
    name: "s_lastError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_lastRequestId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_lastResponse",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "s_requests",
    outputs: [
      {
        internalType: "bool",
        name: "fulfilled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_vrfCoordinator",
    outputs: [
      {
        internalType: "contract IVRFCoordinatorV2Plus",
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
        name: "userWallet",
        type: "address",
      },
    ],
    name: "sendRequest",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vrfCoordinator",
        type: "address",
      },
    ],
    name: "setCoordinator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "subscriptionId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
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
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "s",
        type: "string",
      },
    ],
    name: "updatePokeSource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userToRequestResult",
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
] as const;

const _bytecode =
  "0x60028054600160a01b600160e01b031916604360a01b1790556006805473234a5fb5bd614a7aa2ffab244d603abfa0ac5c5c6001600160a01b03199091161790557f66756e2d617262697472756d2d7365706f6c69612d310000000000000000000060075560088054620493e063ffffffff199091161790557f787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae600e55600f805465ffffffffffff191662010001179055601280546001600160c01b0319167750d47e4142598e3411aa864e08a44284e471ac6f000186a01790556103a06040526102d760a0818152906200229c60c039601390620000ff908262000357565b503480156200010d57600080fd5b506012546006546001600160a01b03908116608052640100000000909104163380600081620001835760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0384811691909117909155811615620001b657620001b68162000207565b5050506001600160a01b038116620001e15760405163d92e233d60e01b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b039290921691909117905562000423565b336001600160a01b03821603620002615760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016200017a565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620002dd57607f821691505b602082108103620002fe57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200035257600081815260208120601f850160051c810160208610156200032d5750805b601f850160051c820191505b818110156200034e5782815560010162000339565b5050505b505050565b81516001600160401b03811115620003735762000373620002b2565b6200038b81620003848454620002c8565b8462000304565b602080601f831160018114620003c35760008415620003aa5750858301515b600019600386901b1c1916600185901b1785556200034e565b600085815260208120601f198616915b82811015620003f457888601518255948401946001909101908401620003d3565b5085821015620004135787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b608051611e56620004466000396000818161052401526110230152611e566000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806385e1b15b11610104578063a321ccaa116100a2578063f2fde38b11610071578063f2fde38b1461044c578063f68016b71461045f578063f887ea401461046f578063fc2a88c31461048257600080fd5b8063a321ccaa146103f4578063b0fb162f1461040f578063b1e2174914610430578063cfd30a6e1461043957600080fd5b80638e84737f116100de5780638e84737f146103375780638ea981171461038b5780639eccacf61461039e578063a168fa89146103b157600080fd5b806385e1b15b146102ec5780638796ba8c146102ff5780638da5cb5b1461031257600080fd5b80633944ea3a11610171578063653721471161014b57806365372147146102b357806377452a2c146102bb57806379ba5097146102ce5780637ccfd7fc146102d657600080fd5b80633944ea3a1461029a5780634b0795a8146102a257806361728f39146102aa57600080fd5b80631ab0f2b3116101ad5780631ab0f2b3146102395780631fe543e31461024f57806324f74697146102625780632e0a58901461028757600080fd5b8063020dbb9b146101d457806309c1ba2e146101f25780630ca7617514610224575b600080fd5b6101dc61048b565b6040516101e9919061175c565b60405180910390f35b60025461020c90600160a01b90046001600160401b031681565b6040516001600160401b0390911681526020016101e9565b61023761023236600461181a565b610519565b005b61024161059d565b6040519081526020016101e9565b61023761025d366004611886565b610785565b6012546102729063ffffffff1681565b60405163ffffffff90911681526020016101e9565b6101dc610295366004611904565b6107cf565b6101dc6107e8565b6101dc6107f5565b610241600e5481565b6101dc610802565b6102376102c936600461192d565b61080f565b610237610827565b600f546102729062010000900463ffffffff1681565b6102416102fa366004611904565b6108d1565b61024161030d36600461197d565b610a4d565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016101e9565b61036c61034536600461197d565b6004602052600090815260409020546001600160a01b03811690600160a01b900460ff1682565b604080516001600160a01b0390931683529015156020830152016101e9565b610237610399366004611904565b610a6e565b60025461031f906001600160a01b031681565b6103dd6103bf36600461197d565b600d6020526000908152604090205460ff8082169161010090041682565b6040805192151583529015156020830152016101e9565b60125461031f9064010000000090046001600160a01b031681565b600f5461041d9061ffff1681565b60405161ffff90911681526020016101e9565b61024160095481565b6101dc61044736600461197d565b610b60565b61023761045a366004611904565b610b8b565b6008546102729063ffffffff1681565b60065461031f906001600160a01b031681565b61024160115481565b6013805461049890611996565b80601f01602080910402602001604051908101604052809291908181526020018280546104c490611996565b80156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b505050505081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105625760405163c6829f8360e01b815260040160405180910390fd5b61056d838383610b9f565b60405183907f85e1543bf2f84fe80c6badbce3648c8539ad1df4d2b3d822938ca0538be727e690600090a2505050565b60006105a7610c73565b6002546040805160c081018252600e5481526001600160401b03600160a01b840416602080830191909152600f5461ffff81168385015260125463ffffffff9081166060850152620100009091041660808301528251908101909252600082526001600160a01b0390921691639b1c385e9160a082019061062790610cc8565b8152506040518263ffffffff1660e01b815260040161064691906119d0565b6020604051808303816000875af1158015610665573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106899190611a2d565b6040805160608101825260008082526001602080840182815285518481528083018752858701908152878552600d83529590932084518154945161ffff1990951690151561ff001916176101009415159490940293909317835593518051959650929491936106fe9391850192910190611681565b5050601080546001810182556000919091527f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae67201829055506011819055600f54604080518381526201000090920463ffffffff1660208301527fcc58b13ad3eab50626c6a6300b1d139cd6ebb1688a7cced9461c2f7e762665ee910160405180910390a190565b6002546001600160a01b031633146107ca5760025460405163073e64fd60e21b81523360048201526001600160a01b0390911660248201526044015b60405180910390fd5b505050565b6005602052600090815260409020805461049890611996565b600a805461049890611996565b600b805461049890611996565b600c805461049890611996565b610817610c73565b60136108238282611a94565b5050565b6001546001600160a01b0316331461087a5760405162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b60448201526064016107c1565b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b60006108db610c73565b61091c6040805160e0810190915280600081526020016000815260200160008152602001606081526020016060815260200160608152602001606081525090565b6109b96013805461092c90611996565b80601f016020809104026020016040519081016040528092919081815260200182805461095890611996565b80156109a55780601f1061097a576101008083540402835291602001916109a5565b820191906000526020600020905b81548152906001019060200180831161098857829003601f168201915b505050505082610d3990919063ffffffff16565b6109ee6109c582610d46565b600254600854600754600160a01b9092046001600160401b03169163ffffffff9091169061101e565b60098181556040805180820182526001600160a01b03808816825260016020808401918252600096875260049052929094209051815492511515600160a01b026001600160a81b03199093169416939093171790915554915050919050565b60108181548110610a5d57600080fd5b600091825260209091200154905081565b6000546001600160a01b03163314801590610a9457506002546001600160a01b03163314155b15610ae55733610aac6000546001600160a01b031690565b60025460405163061db9c160e01b81526001600160a01b03938416600482015291831660248301529190911660448201526064016107c1565b6001600160a01b038116610b0c5760405163d92e233d60e01b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040519081527fd1a6a14209a385a964d036e404cb5cfb71f4000cdb03c9366292430787261be69060200160405180910390a150565b60038181548110610b7057600080fd5b90600052602060002001600091509050805461049890611996565b610b93610c73565b610b9c816110f0565b50565b600083815260046020526040902054600160a01b900460ff161515600114610bfe5760405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a59081c995c5d595cdd081a5960721b60448201526064016107c1565b600b610c0a8282611a94565b506000838152600460205260409020805460ff60a01b19169055600a610c308382611a94565b50600c610c3d8382611a94565b506000838152600460209081526040808320546001600160a01b0316835260059091529020610c6d600c82611b53565b50505050565b6000546001600160a01b03163314610cc65760405162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b60448201526064016107c1565b565b60607f92fd13387c7fe7befbc38d303d6468778fb9731bc4583f17d92989c6fcfdeaaa82604051602401610d0191511515815260200190565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915292915050565b6108238260008084611199565b60606000610d55610100611217565b9050610d8e6040518060400160405280600c81526020016b31b7b232a637b1b0ba34b7b760a11b8152508261123890919063ffffffff16565b8251610dac906002811115610da557610da5611c2d565b8290611251565b6040805180820190915260088152676c616e677561676560c01b6020820152610dd6908290611238565b6040830151610ded908015610da557610da5611c2d565b604080518082019091526006815265736f7572636560d01b6020820152610e15908290611238565b6060830151610e25908290611238565b60a08301515115610eb9576040805180820190915260048152636172677360e01b6020820152610e56908290611238565b610e5f8161128a565b60005b8360a0015151811015610eaf57610e9f8460a001518281518110610e8857610e88611c43565b60200260200101518361123890919063ffffffff16565b610ea881611c6f565b9050610e62565b50610eb9816112ae565b60808301515115610f7d57600083602001516002811115610edc57610edc611c2d565b03610efa5760405163a80d31f760e01b815260040160405180910390fd5b60408051808201909152600f81526e39b2b1b932ba39a637b1b0ba34b7b760891b6020820152610f2b908290611238565b610f4483602001516002811115610da557610da5611c2d565b6040805180820190915260078152667365637265747360c81b6020820152610f6d908290611238565b6080830151610f7d9082906112cc565b60c083015151156110165760408051808201909152600981526862797465734172677360b81b6020820152610fb3908290611238565b610fbc8161128a565b60005b8360c001515181101561100c57610ffc8460c001518281518110610fe557610fe5611c43565b6020026020010151836112cc90919063ffffffff16565b61100581611c6f565b9050610fbf565b50611016816112ae565b515192915050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663461d27628688600188886040518663ffffffff1660e01b8152600401611076959493929190611c88565b6020604051808303816000875af1158015611095573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b99190611a2d565b60405190915081907f1131472297a800fee664d1d89cfa8f7676ff07189ecc53f80bbb5f4969099db890600090a295945050505050565b336001600160a01b038216036111485760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016107c1565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b80516000036111bb576040516322ce3edd60e01b815260040160405180910390fd5b838360028111156111ce576111ce611c2d565b908160028111156111e1576111e1611c2d565b905250604084018280156111f7576111f7611c2d565b9081801561120757611207611c2d565b9052506060909301929092525050565b61121f6116cc565b805161122b90836112d9565b5060006020820152919050565b6112458260038351611353565b81516107ca908261146c565b815161125e9060c2611494565b50610823828260405160200161127691815260200190565b6040516020818303038152906040526112cc565b6112958160046114fd565b6001816020018181516112a89190611cd1565b90525050565b6112b98160076114fd565b6001816020018181516112a89190611ce4565b6112458260028351611353565b6040805180820190915260608152600060208201526112f9602083611cf7565b1561132157611309602083611cf7565b611314906020611ce4565b61131e9083611cd1565b91505b60208084018390526040518085526000815290818401018181101561134557600080fd5b604052508290505b92915050565b6017816001600160401b031611611379578251610c6d9060e0600585901b168317611494565b60ff816001600160401b0316116113b95782516113a1906018611fe0600586901b1617611494565b508251610c6d906001600160401b0383166001611514565b61ffff816001600160401b0316116113fa5782516113e2906019611fe0600586901b1617611494565b508251610c6d906001600160401b0383166002611514565b63ffffffff816001600160401b03161161143d57825161142590601a611fe0600586901b1617611494565b508251610c6d906001600160401b0383166004611514565b825161145490601b611fe0600586901b1617611494565b508251610c6d906001600160401b0383166008611514565b60408051808201909152606081526000602082015261148d83838451611599565b9392505050565b60408051808201909152606081526000602082015282515160006114b9826001611cd1565b9050846020015182106114da576114da856114d5836002611d19565b61166a565b84516020838201018581535080518211156114f3578181525b5093949350505050565b81516107ca90601f611fe0600585901b1617611494565b60408051808201909152606081526000602082015283515160006115388285611cd1565b9050856020015181111561155557611555866114d5836002611d19565b6000600161156586610100611e14565b61156f9190611ce4565b9050865182810187831982511617815250805183111561158d578281525b50959695505050505050565b60408051808201909152606081526000602082015282518211156115bc57600080fd5b83515160006115cb8483611cd1565b905085602001518111156115e8576115e8866114d5836002611d19565b855180518382016020019160009180851115611602578482525b505050602086015b602086106116425780518252611621602083611cd1565b915061162e602082611cd1565b905061163b602087611ce4565b955061160a565b51815160001960208890036101000a0190811690199190911617905250849150509392505050565b815161167683836112d9565b50610c6d838261146c565b8280548282559060005260206000209081019282156116bc579160200282015b828111156116bc5782518255916020019190600101906116a1565b506116c8929150611701565b5090565b60405180604001604052806116f4604051806040016040528060608152602001600081525090565b8152602001600081525090565b5b808211156116c85760008155600101611702565b6000815180845260005b8181101561173c57602081850181015186830182015201611720565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061148d6020830184611716565b634e487b7160e01b600052604160045260246000fd5b60006001600160401b038084111561179f5761179f61176f565b604051601f8501601f19908116603f011681019082821181831017156117c7576117c761176f565b816040528093508581528686860111156117e057600080fd5b858560208301376000602087830101525050509392505050565b600082601f83011261180b57600080fd5b61148d83833560208501611785565b60008060006060848603121561182f57600080fd5b8335925060208401356001600160401b038082111561184d57600080fd5b611859878388016117fa565b9350604086013591508082111561186f57600080fd5b5061187c868287016117fa565b9150509250925092565b60008060006040848603121561189b57600080fd5b8335925060208401356001600160401b03808211156118b957600080fd5b818601915086601f8301126118cd57600080fd5b8135818111156118dc57600080fd5b8760208260051b85010111156118f157600080fd5b6020830194508093505050509250925092565b60006020828403121561191657600080fd5b81356001600160a01b038116811461148d57600080fd5b60006020828403121561193f57600080fd5b81356001600160401b0381111561195557600080fd5b8201601f8101841361196657600080fd5b61197584823560208401611785565b949350505050565b60006020828403121561198f57600080fd5b5035919050565b600181811c908216806119aa57607f821691505b6020821081036119ca57634e487b7160e01b600052602260045260246000fd5b50919050565b60208152815160208201526020820151604082015261ffff60408301511660608201526000606083015163ffffffff80821660808501528060808601511660a0850152505060a083015160c08084015261197560e0840182611716565b600060208284031215611a3f57600080fd5b5051919050565b601f8211156107ca57600081815260208120601f850160051c81016020861015611a6d5750805b601f850160051c820191505b81811015611a8c57828155600101611a79565b505050505050565b81516001600160401b03811115611aad57611aad61176f565b611ac181611abb8454611996565b84611a46565b602080601f831160018114611af65760008415611ade5750858301515b600019600386901b1c1916600185901b178555611a8c565b600085815260208120601f198616915b82811015611b2557888601518255948401946001909101908401611b06565b5085821015611b435787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b818103611b5e575050565b611b688254611996565b6001600160401b03811115611b7f57611b7f61176f565b611b8d81611abb8454611996565b6000601f821160018114611bc15760008315611ba95750848201545b600019600385901b1c1916600184901b178455611c26565b600085815260209020601f19841690600086815260209020845b83811015611bfb5782860154825560019586019590910190602001611bdb565b5085831015611c195781850154600019600388901b60f8161c191681555b50505060018360011b0184555b5050505050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611c8157611c81611c59565b5060010190565b6001600160401b038616815260a060208201526000611caa60a0830187611716565b61ffff9590951660408301525063ffffffff92909216606083015260809091015292915050565b8082018082111561134d5761134d611c59565b8181038181111561134d5761134d611c59565b600082611d1457634e487b7160e01b600052601260045260246000fd5b500690565b808202811582820484141761134d5761134d611c59565b600181815b80851115611d6b578160001904821115611d5157611d51611c59565b80851615611d5e57918102915b93841c9390800290611d35565b509250929050565b600082611d825750600161134d565b81611d8f5750600061134d565b8160018114611da55760028114611daf57611dcb565b600191505061134d565b60ff841115611dc057611dc0611c59565b50506001821b61134d565b5060208310610133831016604e8410600b8410161715611dee575081810a61134d565b611df88383611d30565b8060001904821115611e0c57611e0c611c59565b029392505050565b600061148d8383611d7356fea2646970667358221220702b8ac0223405455c0e737665d3801969ce04a0aad32afac97648c8d82098b364736f6c63430008140033636f6e737420706f6b6955524c203d206068747470733a2f2f706f6b656170692e636f2f6170692f76322f706f6b656d6f6e603b636f6e737420687055524c203d206068747470733a2f2f77697a6172642d776f726c642d6170692e6865726f6b756170702e636f6d2f486f75736573603b636f6e737420706f6b656d6f6e436861726163746572203d20313b636f6e736f6c652e6c6f67286053656e64696e672048545450207265717565737420746f20247b706f6b6955524c7d2f247b706f6b656d6f6e4368617261637465727d2f60293b636f6e737420706f6b6952657175657374203d2046756e6374696f6e732e6d616b654874747052657175657374287b75726c3a2060247b706f6b6955524c7d2f247b706f6b656d6f6e4368617261637465727d602c6d6574686f643a2060474554602c7d293b636f6e737420687052657175657374203d2046756e6374696f6e732e6d616b654874747052657175657374287b75726c3a20687055524c2c6d6574686f643a2060474554602c7d293b636f6e737420706f6b69526573706f6e7365203d20617761697420706f6b69526571756573743b636f6e7374206870526573706f6e7365203d206177616974206870526571756573743b636f6e73742072657144617461203d20706f6b69526573706f6e73652e646174613b636f6e737420687044617461203d206870526573706f6e73652e646174613b636f6e7374206d7944617461203d207b706f6b656d6f6e547970653a20726571446174612e74797065735b305d2e747970652e6e616d652c706f6b656d6f6e4e616d653a20726571446174612e737065636965732e6e616d652c706f6b656d6f6e496d6167653a20726571446174612e737072697465732e6f746865722e686f6d652e66726f6e745f64656661756c742c7d3b72657475726e2046756e6374696f6e732e656e636f6465537472696e67284a534f4e2e737472696e67696679286d794461746129293b";

type EnterTheChainlinkMultiverseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EnterTheChainlinkMultiverseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EnterTheChainlinkMultiverse__factory extends ContractFactory {
  constructor(...args: EnterTheChainlinkMultiverseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      EnterTheChainlinkMultiverse & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): EnterTheChainlinkMultiverse__factory {
    return super.connect(runner) as EnterTheChainlinkMultiverse__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnterTheChainlinkMultiverseInterface {
    return new Interface(_abi) as EnterTheChainlinkMultiverseInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EnterTheChainlinkMultiverse {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as EnterTheChainlinkMultiverse;
  }
}