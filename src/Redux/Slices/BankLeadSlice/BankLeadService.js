import axios from "axios";
import { create_bank_lead, available_leads, delete_lead , show_lead , update_bank_lead } from "../../API/Api";
import { notification } from "antd";
const createBank_Action = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));

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
  console.log(response, "create-response 21212");
  if (response?.status == 200) {
    notification.success({
      message: response.data.message,
    });
  }
  return response.data;
};

const Get_available_leads = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${available_leads}`,
    headers: headers,
    params: {
      page: data.page,
    },
  });
  return response.data;
};

const deleteLead = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "DELETE",
    baseURL: `${delete_lead}/${data.id}`,
    headers: headers,
  
  });
  return response.data;
};

const getLead = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${show_lead}/${data.id}`,
    headers: headers,
  
  });
  return response.data;
};


const update_lead_Bank_Action = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "PUT",
    baseURL: `${update_bank_lead}/${data.id}`,
    headers: headers,
    data: data,
  });
  console.log(response, "update response 21212");
  if (response?.status == 200) {
    notification.success({
      message: response.data.message,
    });
  }
  return response.data;
};

const LeadBankService = {
  createBank_Action,
  Get_available_leads,
  deleteLead,
  getLead ,
  update_lead_Bank_Action
};
export default LeadBankService;
