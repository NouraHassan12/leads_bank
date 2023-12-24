import axios from "axios";
import {
    create_bank_lead
} from "../../API/Api";
import { toast } from "react-toastify";
const createBank_Action = async (data) => {
  const  token  = JSON.parse(localStorage.getItem("token"));
 
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "POST",
    baseURL: `${create_bank_lead}`,
    headers: headers,
    data: data,
  });
  console.log(response, "create-issue-response 21212");
  if (response?.status == 200) {
    toast.success(" lead bank created Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return response.data;
};



const LeadBankService = {
    createBank_Action,

};
export default LeadBankService;
