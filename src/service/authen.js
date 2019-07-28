import axios from 'axios';
const API_URL = 'http://localhost:8000';
export class AuthenService{
    login(data) {
        const url = `${API_URL}/login`;
        const logindata = {
                "email": data.username,
                "password": data.password
        }
        const options = {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            data: logindata,
            url: url,
        }; 
        return axios(options)
    }
    me(xme) {
        // console.log(xme);
        const url = `${API_URL}/authen/me/`+ xme.username;
        // console.log(url);
        const options = {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
            url: url
        }; 
        return axios(options)
    }
}