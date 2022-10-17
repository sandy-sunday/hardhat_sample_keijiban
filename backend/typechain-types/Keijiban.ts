/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Keijiban {
  export type PostStruct = {
    name: PromiseOrValue<string>;
    content: PromiseOrValue<string>;
    id: PromiseOrValue<string>;
  };

  export type PostStructOutput = [string, string, string] & {
    name: string;
    content: string;
    id: string;
  };
}

export interface KeijibanInterface extends utils.Interface {
  functions: {
    "createPost(string,string)": FunctionFragment;
    "getPosts()": FunctionFragment;
    "posts(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createPost" | "getPosts" | "posts"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createPost",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "getPosts", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "posts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "createPost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPosts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "posts", data: BytesLike): Result;

  events: {
    "CreatedPost(string,string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreatedPost"): EventFragment;
}

export interface CreatedPostEventObject {
  name: string;
  content: string;
  id: string;
}
export type CreatedPostEvent = TypedEvent<
  [string, string, string],
  CreatedPostEventObject
>;

export type CreatedPostEventFilter = TypedEventFilter<CreatedPostEvent>;

export interface Keijiban extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KeijibanInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createPost(
      _name: PromiseOrValue<string>,
      _content: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getPosts(overrides?: CallOverrides): Promise<[Keijiban.PostStructOutput[]]>;

    posts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & { name: string; content: string; id: string }
    >;
  };

  createPost(
    _name: PromiseOrValue<string>,
    _content: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getPosts(overrides?: CallOverrides): Promise<Keijiban.PostStructOutput[]>;

  posts(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & { name: string; content: string; id: string }
  >;

  callStatic: {
    createPost(
      _name: PromiseOrValue<string>,
      _content: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getPosts(overrides?: CallOverrides): Promise<Keijiban.PostStructOutput[]>;

    posts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & { name: string; content: string; id: string }
    >;
  };

  filters: {
    "CreatedPost(string,string,address)"(
      name?: PromiseOrValue<string> | null,
      content?: null,
      id?: null
    ): CreatedPostEventFilter;
    CreatedPost(
      name?: PromiseOrValue<string> | null,
      content?: null,
      id?: null
    ): CreatedPostEventFilter;
  };

  estimateGas: {
    createPost(
      _name: PromiseOrValue<string>,
      _content: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getPosts(overrides?: CallOverrides): Promise<BigNumber>;

    posts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createPost(
      _name: PromiseOrValue<string>,
      _content: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getPosts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    posts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}