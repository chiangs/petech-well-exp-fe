import * as actionTypes from '../actionTypes';
import { updateStateObj } from '../utils';

const initialState = {
	well: null,
	discipline: null,
	currTopic: null,
	topics: []
	// topicsRequired: [],
	// topicsOptional: []
};

const clearState = (state, action) => {
	return updateStateObj(state, initialState);
};

const setWell = (state, action) => {
	return action.well.id > 0
		? updateStateObj(state, { well: action.well })
		: state;
};

const setDiscipline = (state, action) => {
	return action.discipline.id > 0
		? updateStateObj(state, { discipline: action.discipline })
		: state;
};

const setCurrTopic = (state, action) => {
	return action.currTopic.id > 0
		? updateStateObj(state, { currTopic: action.currTopic })
		: state;
};

const setTopics = (state, action) => {
	return updateStateObj(state, { topics: action.topics });
};

// const setTopicsRequired = (state, action) =>
// 	updateStateObj(state, { topicsRequired: action.topicsRequired });

// const setTopicsOptional = (state, action) =>
// 	updateStateObj(state, { topicsOptional: action.topicsOptional });

const newExperience = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_WELL:
			return setWell(state, action);
		case actionTypes.SET_DISCIPLINE:
			return setDiscipline(state, action);
		case actionTypes.SET_CURR_TOPIC:
			return setCurrTopic(state, action);
		case actionTypes.STARTOVER:
			return clearState(state, action);
		case actionTypes.SET_TOPICS:
			return setTopics(state, action);
		// case actionTypes.SET_TOPICS_REQUIRED:
		// 	return setTopicsRequired(state, action);
		// case actionTypes.SET_TOPICS_OPTIONAL:
		// 	return setTopicsOptional(state, action);
		default:
			return state;
	}
};

export default newExperience;
