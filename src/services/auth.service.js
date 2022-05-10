import axios from "axios";
import Cookies from 'js-cookie'
import { API } from "../global";

const register = (values) => {
    return axios.post(`${API}user/register`, values);
  };
  const login = (values) => {
    return axios
      .post(`${API}user/login`, values)
      .then((response) => {
        if (response.data.user.token) {
         // localStorage.setItem("user", JSON.stringify(response.data));
         Cookies.set(`logintoken`, response.data.user.token,{expires:1});
         console.log("Cookies",Cookies.get(`logintoken`))
        }
        return response.data.user;
      });
  };
  const logout = () => {
   // localStorage.removeItem("user");

   return axios
   .get(`${API}user/logout`, {headers:{"x-auth-token":Cookies.get(`logintoken`)}})
   .then((response) => {
     console.log(response)
    Cookies.remove(`logintoken`);
   });
  
  };
  export default {
    register,
    login,
    logout,
  };