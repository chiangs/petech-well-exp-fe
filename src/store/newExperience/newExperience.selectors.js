import { stateKeys } from '../stateKeys';

const getNewExpState = state => state[stateKeys.NEWEXP];

export const getWell = state => getNewExpState(state).well;
export const getDiscipline = state => getNewExpState(state).discipline;
