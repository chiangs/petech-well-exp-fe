/**
 * Updates a state object with given properties
 * @function updateStateObj
 * @param {state} state - current state object
 * @param {updatedProperties} updatedProperties - updated property key/values
 * @returns {state} state - merged state
 */
export const updateStateObj = (state, updatedProperties) => ({
	...state,
	...updatedProperties
});
