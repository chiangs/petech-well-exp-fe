import { stateKeys } from '../stateKeys';

const getNewExpState = state => state[stateKeys.NEWEXP];

export const getWell = state => getNewExpState(state).well;
export const getDiscipline = state => getNewExpState(state).discipline;
export const getCurrTopic = state => getNewExpState(state).currTopic;
// export const getTopicsRequired = state => getNewExpState(state).topicsRequired;
// export const getTopicsOptional = state => getNewExpState(state).topicsOptional;
