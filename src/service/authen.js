import axios from 'axios';
const API_URL = 'http://localhost:8000';
// const API_URL = 'https://es-timesheet-api.azurewebsites.net';
export class AuthenService{
    login(data) {
        const url = `${API_URL}/login`;
        const logindata = {
                "email": data.username,
                "password": data.password
        }
        // console.log(logindata);
        const options = {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            data: logindata,
            url: url,
        }; 
        return axios(options)
    }
    relogin(data) {
        const url = `${API_URL}/login`;
        // console.log(data);
        const options = {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            data: data,
            url: url,
        }; 
        return axios(options)
    }
}