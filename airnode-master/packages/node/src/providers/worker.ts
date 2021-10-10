import * as evmWorkers from '../evm/workers';
import { EVMProviderState, ProviderState, WorkerOptions } from '../types';

export async function spawnNewProvider(state: ProviderState<any>, workerOpts: WorkerOptions) {
  if (state.settings.chainType === 'evm') {
    return evmWorkers.spawnNewProvider(state as ProviderState<EVMProviderState>, workerOpts);
  }

  throw new Error(`Unknown chain type: ${state.settings.chainType}`);
}

export async function spawnProviderRequestProcessor(state: ProviderState<any>, workerOpts: WorkerOptions) {
  if (state.settings.chainType === 'evm') {
    return evmWorkers.spawnProviderRequestProcessor(state as ProviderState<EVMProviderState>, workerOpts);
  }

  throw new Error(`Unknown chain type: ${state.settings.chainType}`);
}
