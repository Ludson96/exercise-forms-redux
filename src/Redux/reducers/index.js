import { combineReducers } from 'redux';
import personalFormReducer from './PersonalFormReducer';
import professionalFormReducer from './ProfessionalFormReducer';

const rootReducer = combineReducers({
  personalFormReducer,
  professionalFormReducer,
});

export default rootReducer;
