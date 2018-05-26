import { FETCH_USERS } from '../actions';

const UsersReducer = (state=[], action) => {
	switch (action.type) {
		case FETCH_USERS:
			return [...state, ...action.payload.data];
	}
	return state;
}

export default UsersReducer;