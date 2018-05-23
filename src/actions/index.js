export const FETCH_USERS = 'fetch_users';

export function fetchUsers() {
	
	return{
		type: FETCH_USERS,
		payload: [
			{name: "Brandon"},
			{name: "Marine"},
			{name: "Pam"}
		]
	}
} 