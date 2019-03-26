import * as actionTypes from '../actionTypes';
import { updateStateObj } from '../utils';

const initialState = {
	well: null,
	discipline: null
};

const setWell = (state, action) => updateStateObj(state, { well: action.well });

const setDiscipline = (state, action) =>
	updateStateObj(state, { discipline: action.disciplineId });

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
