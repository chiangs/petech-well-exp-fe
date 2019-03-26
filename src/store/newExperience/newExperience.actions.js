import * as actionTypes from '../actionTypes';

export const setWell = well => {
	return {
		type: actionTypes.SET_WELL,
		well: well
	};
};

export const setDiscipline = discipline => {
	return {
		type: actionTypes.SET_DISCIPLINE,
		discipline: discipline
	};
};
