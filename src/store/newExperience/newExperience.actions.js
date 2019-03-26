import * as actionTypes from '../actionTypes';

export const setWell = wellId => {
	return {
		type: actionTypes.SET_WELL,
		well: wellId
	};
};

export const setDiscipline = disciplineId => {
	return {
		type: actionTypes.SET_DISCIPLINE,
		disciplineId: disciplineId
	};
};
