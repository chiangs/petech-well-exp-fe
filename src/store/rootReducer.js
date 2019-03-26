import { combineReducers } from 'redux';
import newExperienceReducer from './newExperience/newExperience.reducers';

const rootReducer = combineReducers({
	newExperience: newExperienceReducer
});

export default rootReducer;
