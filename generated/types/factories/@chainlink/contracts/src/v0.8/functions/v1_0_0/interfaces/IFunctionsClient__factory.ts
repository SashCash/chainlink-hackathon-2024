/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IFunctionsClient,
  IFunctionsClientInterface,
} from "../../../../../../../../@chainlink/contracts/src/v0.8/functions/v1_0_0/interfaces/IFunctionsClient";

const _abi = [
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
] as const;

export class IFunctionsClient__factory {
  static readonly abi = _abi;
  static createInterface(): IFunctionsClientInterface {
    return new Interface(_abi) as IFunctionsClientInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IFunctionsClient {
    return new Contract(address, _abi, runner) as unknown as IFunctionsClient;
  }
}
