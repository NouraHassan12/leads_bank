import axios from "axios";
import { service_type } from "../../API/Api";

const Get_service_types = async () => {
    const  token  = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${service_type}`,
    headers: headers,
    params: {
      return_all: 1,
    },
  });
  return response.data;
};

const service_types_Service = {
    Get_service_types,
};
export default service_types_Service;
