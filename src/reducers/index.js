import { combineReducers } from 'redux';
import UsersReducers from './Users_reducers';

const rootReducer = combineReducers({
	users: UsersReducers
});

export default rootReducer;
