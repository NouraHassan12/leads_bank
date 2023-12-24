import axios from "axios";
import { show_sold_lead } from "../../API/Api";

const Get_sold_leads = async () => {
    const  token  = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${show_sold_lead}`,
    headers: headers,
   
    params: {
        page: 1,
    },
  });
  return response.data;
};

const sold_lead_Service = {
    Get_sold_leads,
};
export default sold_lead_Service;
