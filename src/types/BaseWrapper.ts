/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common';

export interface BaseWrapperInterface extends ethers.utils.Interface {
  functions: {
    'allVaults()': FunctionFragment;
    'bestVault()': FunctionFragment;
    'registry()': FunctionFragment;
    'setRegistry(address)': FunctionFragment;
    'token()': FunctionFragment;
    'totalAssets()': FunctionFragment;
    'totalVaultBalance(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'allVaults', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bestVault', values?: undefined): string;
  encodeFunctionData(functionFragment: 'registry', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setRegistry', values: [string]): string;
  encodeFunctionData(functionFragment: 'token', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'totalAssets',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'totalVaultBalance',
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: 'allVaults', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bestVault', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'registry', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setRegistry',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'totalAssets',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'totalVaultBalance',
    data: BytesLike
  ): Result;

  events: {};
}

export interface BaseWrapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseWrapperInterface;

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
    allVaults(overrides?: CallOverrides): Promise<[string[]]>;

    bestVault(overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    setRegistry(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalAssets(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { assets: BigNumber }>;

    totalVaultBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;
  };

  allVaults(overrides?: CallOverrides): Promise<string[]>;

  bestVault(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  setRegistry(
    _registry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

  totalVaultBalance(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    allVaults(overrides?: CallOverrides): Promise<string[]>;

    bestVault(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    setRegistry(_registry: string, overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    totalVaultBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    allVaults(overrides?: CallOverrides): Promise<BigNumber>;

    bestVault(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    setRegistry(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    totalVaultBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allVaults(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bestVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRegistry(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalVaultBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
