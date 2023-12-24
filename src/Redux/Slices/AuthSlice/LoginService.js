import axios from "axios";
import {
    login
} from "../../API/Api";
import { toast } from "react-toastify";
import {  notification  } from 'antd';
const login_Action = async (data) => {
 
  // Get the Data From Local Storage
try {
    var user = JSON.parse(localStorage.getItem("user"));
  } catch (e) {}
  const headers = {
    // Authorization: `Bearer ${token}`,
    Accept: "application/json",
    XMLHttpRequest: "XMLHttpRequest",
  };
  const response = await axios({
    method: "POST",
    baseURL: `${login}`,
    headers: headers,
    data: data,
  });
  console.log(response, "logiiiin-response");
  if (response?.status == 200) {
    localStorage.setItem("user", JSON.stringify(response.data.data.user));
    localStorage.setItem("token" , JSON.stringify(response.data.data.token))
    notification.success({
        message: response.data.message,
       
      });
    // toast.success("welcome!", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
  }
  return response.data;
};

const loginService = {
    login_Action ,

  };
  export default loginService;