// state object update helper method
export const updateStateObj = (state, updatedProperties) => {
	return {
		...state,
		...updatedProperties
	};
};
