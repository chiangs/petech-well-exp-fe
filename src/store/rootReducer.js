import { combineReducers } from 'redux';
import newExperienceReducer from '../modules/NewExperience/store/newExperience.reducers';

const rootReducer = combineReducers({
	newExperience: newExperienceReducer
});

export default rootReducer;
