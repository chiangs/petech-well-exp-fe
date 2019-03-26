import { combineReducers } from 'redux';
import newExperienceReducer from './newExperience/newExperience.reducer';

const rootReducer = combineReducers({
	newExperience: newExperienceReducer
});

export default rootReducer;
