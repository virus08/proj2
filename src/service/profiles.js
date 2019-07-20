import axios from 'axios';
const API_URL = 'http://localhost:8000';
import Cookies from 'js-cookie';

const accessToken = Cookies.get('accessToken');

import {AuthenService} from './authen'
const authentication = new AuthenService();

// console.log(xdata.config.data)
// authentication.relogin(JSON.parse(xdata.config.data)).then((data)=>{
//     Cookies.set('accessToken', data, { expires: 1 });
// })

// const API_URL = 'https://es-timesheet-api.azurewebsites.net';
export class ProfileService {
    me() {
        const url = `${API_URL}/me`;
        // console.log(xdata);
        const options = {
            method: 'GET',
            headers: {'Authorization': "Bearer " + accessToken},
            url: url,
        };
        return axios(options)
    }
    xme() {
        var defaultdata = {
            "id": 1, 
            "firstname": "Wanchai",
            "lastname": "Fuangmali",
            "phone":"0650961419",
            "jobtitle":"Pre-Sales",
            "picture":"iVBORw0KGgoAAAANSUhEUgAAAB8AAAAaCAIAAADAARDdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAApSURBVEhL7cwxAQAwDASh+jf9VcCY7RDA26V2aZd2aZd2aZd2aZfLffvBJWkWk3WXGwAAAABJRU5ErkJggg==",
            "role":["Admin","Manager","Stocker","Oil","User"],
            "userId": 1
          }
        return defaultdata;
      }
}