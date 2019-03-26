import * as actionTypes from '../actionTypes';

export const setWell = name => {
	return {
		type: actionTypes.SET_WELL,
		wellName: name
	};
};

export const setDiscipline = discipline => {
	return {
		type: actionTypes.SET_DISCIPLINE,
		discipline: discipline
	};
};
