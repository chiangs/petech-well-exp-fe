import * as actionTypes from '../actionTypes';
import { updateStateObj } from '../utils';

const initialState = {
	well: null,
	discipline: null
};

const newExperience = (state = initialState, action) => {
	let updatedProperties = {};
	switch (action.type) {
		case actionTypes.SET_WELL:
			updatedProperties = {
				well: action.wellName
			};
			return updateStateObj(state, updatedProperties);
		case actionTypes.SET_DISCIPLINE:
			updatedProperties = {
				discipline: action.discipline
			};
			return updateStateObj(state, updatedProperties);
		default:
			return state;
	}
};

export default newExperience;
