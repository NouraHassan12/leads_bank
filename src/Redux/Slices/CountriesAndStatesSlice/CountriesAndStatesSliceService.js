import axios from "axios";
import { countries } from "../../API/Api";

const Get_countries = async () => {
    const  token  = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${countries}`,
    headers: headers,
    // params: {
    //   return_all: 1,
    // },
  });
  return response.data;
};

const countries_Service = {
    Get_countries,
};
export default countries_Service;
