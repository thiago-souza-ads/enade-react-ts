export function isAuthenticated() {
	const token = localStorage.getItem('token');
	return token !== null;
}
export function getUser() {
	const user = localStorage.getItem('user');
	return user;
}