import axios from "axios";
import { cities } from "../../API/Api";

const Get_cities = async (data) => {
    const  token  = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${cities}`,
    headers: headers,
    params: {
        state_id: data.id,
    },
  });
  return response.data;
};

const cities_Service = {
    Get_cities,
};
export default cities_Service;
