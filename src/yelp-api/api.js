import {API_ENDPOINT, TOKEN_KEY} from '../config';
import queryString from 'query-string';

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${API_ENDPOINT}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${TOKEN_KEY}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    });
    console.log(query);
}