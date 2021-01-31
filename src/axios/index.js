import axios from 'axios';

export const BASE_URL = 'https://www.googleapis.com/youtube/v3/';
const headers = {
	// key : 'AIzaSyDkIZnbwIjRyXs_y3MIbMNYaRcdZ5HFykc',
	// key:'AIzaSyDuBHX5JBxLBPuTFxtLBvQnOs_Pef86A9I',
	// 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
};

export default axios.create({
	baseURL: BASE_URL,
	// headers,
});
