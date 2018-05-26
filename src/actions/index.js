import axios from 'axios';

export const FETCH_USERS = 'fetch_users';

export function fetchUsers() {
	const request = axios.get('https://jsonplaceholder.typicode.com/users');
	return{
		type: FETCH_USERS,
		payload: request
	}
} 