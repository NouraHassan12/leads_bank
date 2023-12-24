import axios from "axios";
import {
    register
} from "../../API/Api";
import { toast } from "react-toastify";
const registration_Action = async (data) => {
  // const { token } = JSON.parse(localStorage.getItem("user"));
  const headers = {
    // Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "POST",
    baseURL: `${register}`,
    headers: headers,
    data: data,
  });
  console.log(response, "registration-response");
  if (response?.status == 200) {
    toast.success("registered Successfully", {
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

const registrationService = {
    registration_Action ,

  };
  export default registrationService;