import * as actionTypes from '../actionTypes';
import { updateStateObj } from '../utils';

const initialState = {
	well: null,
	discipline: null
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

const newExperience = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_WELL:
			return setWell(state, action);
		case actionTypes.SET_DISCIPLINE:
			return setDiscipline(state, action);
		default:
			return state;
	}
};

export default newExperience;
