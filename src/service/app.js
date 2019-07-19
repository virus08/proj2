import axios from 'axios';
const API_URL = 'http://localhost:8000';
import Cookies from 'js-cookie';

const xdata = JSON.parse(Cookies.get('accessToken'));
const accessToken = xdata.data.accessToken

import {AuthenService} from '../service/authen'
const authentication = new AuthenService();

// console.log(xdata.config.data)
authentication.relogin(JSON.parse(xdata.config.data)).then((data)=>{
    Cookies.set('accessToken', data, { expires: 1 });
})

// const API_URL = 'https://es-timesheet-api.azurewebsites.net';
export class AppService{
    appSeting() {
        const url = `${API_URL}/app`;
        // console.log(xdata);
        const options = {
            method: 'GET',
            headers: {'Authorization': "Bearer " + accessToken},
            url: url,
        };
        return axios(options)
    }
    Appname() {
        return "Myapp";
      }
}