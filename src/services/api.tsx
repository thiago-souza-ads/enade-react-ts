import axios from 'axios';
import { getToken } from 'auth';

const api = axios.create({
	baseURL: 'http://localhost:8080',
});
// baseURL: process.env.REACT_APP_REPORT_API_URL,


// api.interceptors.request.use(config => {
// 	const outputConfig = config;
//
// 	const token = getToken();
// 	if (token) {
// 		outputConfig.headers.Authorization = `Bearer ${token}`;
// 	}
//
// 	outputConfig.params = {
// 		...outputConfig.params,
// 	};
//
// 	return outputConfig;
// });

export default api;