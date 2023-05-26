const API = "http://em-dev.oceantech.com.vn/em/";
const token = localStorage.getItem("access_token");
const headers = {
  headers: {
    Authorization: ` bearer ${token}`,
  },
};
import axios from "axios";
import { async } from "regenerator-runtime";

//
export const GetListEmployee = async () => {
  const url = `${API}employees?statuses=1&page=1&size=10`;
  return await axios.get(url, headers);
};
export const addNewEmployee = (data) => {
  console.log("456");
  const url = `${API}employees`;
  return axios.post(url, data, headers);
};

// Trạng thái chờ duyệt
// lay dữ liệu
export const GetAllEmployee = async (status, page, pageSize) => {
  const url = `${API}employees?statuses=${status}&page=${page}&size=${pageSize}`;
  return await axios.get(url, headers);
};
// lay du lieu id

export const getEmployeeDataById = async (id) => {
  const url = `${API}employees/${id}`;
  return await axios.get(url, headers);
};
// xóa
export const deleteEmployee = (id) => {
  const url = `${API}employees/${id}/status`;
  const data = {
    status: 14,
  };
  return axios.put(url, data, headers);
};

// lay du liẹu form

export const getFormDataEmployee = async (id) => {
  const url = `${API}employees/${id}/form`;
  return await axios.get(url, headers);
};

//

export const updateFormDataEmployee = async (id, data) => {
  const url = `${API}employee/${id}/form`;
  return await axios.put(url, data, headers);
};

// Hành động của lãnh đạo

export const leaderOfAction = async (id, data) => {
  const url = `${API}employees/${id}/status`;
  return await axios.put(url, data, headers);
};

//trinh lãnh đạo
export const sendLead = async (id, data) => {
  const url = `${API}employees/${id}/status`;
  return await axios.put(url, data, headers);
};
