import axios from 'axios';

const apis = axios.create({
	baseURL: 'http://localhost:8080',
});

export default apis;