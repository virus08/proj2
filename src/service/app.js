import axios from 'axios';
const API_URL = 'http://localhost:8000';
import Cookies from 'js-cookie';
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

    getMenu(Role) {
        const url = `${API_URL}/menu?role=` + Role;
        const accessToken = Cookies.get('accessToken');
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