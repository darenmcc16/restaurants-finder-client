import {USER_TOKEN_KEY} from '../config'

const TokenService = {
    saveAuthToken(token) {
        window.sessionStorage.setItem(USER_TOKEN_KEY, token)
    },
    getAuthToken() {
        return window.sessionStorage.getItem(USER_TOKEN_KEY)
    },
    clearAuthToken() {
        window.sessionStorage.removeItem(USER_TOKEN_KEY)
        sessionStorage.clear();
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
    makeBasicAuthToken(userName, password) {
        return window.btoa(`${userName}:${password}`)
    },
    saveUserId(userId) {
        return window.sessionStorage.setItem('user_id', userId);
    },
    getUserId(user_id) {
        return window.sessionStorage.getItem('user_id', user_id)
    }

}

export default TokenService