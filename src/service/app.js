import axios from 'axios';
const API_URL = 'http://localhost:8000';
import Cookies from 'js-cookie';

const xconf = JSON.parse(Cookies.get('conf'));

// console.log(xconf);
// const accessToken = xdata.data.accessToken

import {AuthenService} from '../service/authen'
const authentication = new AuthenService();

// console.log(xdata.config.data)

authentication.relogin(xconf).then((data)=>{
     Cookies.set('accessToken', data.data.accessToken, { expires: 1 });
})

// const API_URL = 'https://es-timesheet-api.azurewebsites.net';
export class AppService{
    appSeting() {
        const url = `${API_URL}/app`;
        const accessToken = Cookies.get('accessToken');
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