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

export const setTopicsRequired = topics => {
	return {
		type: actionTypes.SET_TOPICS_REQUIRED,
		topicsRequired: topics
	};
};

export const setTopicsOptional = topics => {
	return {
		type: actionTypes.SET_TOPICS_OPTIONAL,
		topicsOptional: topics
	};
};
