import axios from "axios";
import { state } from "../../API/Api";

const Get_state = async (data) => {
    const  token  = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${state}/${data.id}`,
    headers: headers,
    // params: {
    //     id: data.id,
    // },
  });
  return response.data;
};

const state_Service = {
    Get_state,
};
export default state_Service;
