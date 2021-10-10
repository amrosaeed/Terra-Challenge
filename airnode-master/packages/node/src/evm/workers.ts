import { go } from '../utils/promise-utils';
import * as logger from '../logger';
import * as providerState from '../providers/state';
import * as workers from '../workers';
import { EVMProviderState, LogsData, ProviderState, WorkerFunctionName, WorkerOptions } from '../types';

async function spawn(
  state: ProviderState<EVMProviderState>,
  workerOpts: WorkerOptions,
  functionName: WorkerFunctionName,
  errorMessage: string
): Promise<LogsData<ProviderState<EVMProviderState> | null>> {
  const options = {
    ...workerOpts,
    functionName,
    payload: { state },
  };

  const [err, res] = await go(() => workers.spawn(options));
  if (err || !res) {
    const log = logger.pend('ERROR', `${errorMessage}: ${state.settings.name}`, err);
    return [[log], null];
  }

  if (!res.ok) {
    if (res.errorLog) {
      return [[res.errorLog], null];
    }
    const log = logger.pend('ERROR', `${errorMessage}: ${state.settings.name}`);
    return [[log], null];
  }

  const refreshedState = providerState.refresh({ ...res.data, config: state.config });
  return [[], refreshedState];
}

export async function spawnNewProvider(
  state: ProviderState<EVMProviderState>,
  workerOpts: WorkerOptions
): Promise<LogsData<ProviderState<EVMProviderState> | null>> {
  return spawn(state, workerOpts, 'initializeProvider', 'Unable to initialize provider');
}

export async function spawnProviderRequestProcessor(
  state: ProviderState<EVMProviderState>,
  workerOpts: WorkerOptions
): Promise<LogsData<ProviderState<EVMProviderState> | null>> {
  return spawn(state, workerOpts, 'processProviderRequests', 'Unable to process provider requests');
}
