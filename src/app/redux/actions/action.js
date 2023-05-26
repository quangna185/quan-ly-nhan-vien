import { ActionTypes } from "./actionTypes";

export const getListEmployeeRequest = () => {
  return { type: ActionTypes.GET_LIST_EMPLOYEE_REQUEST };
};
// tạo mảng chưa du liẹu
export const getEmployeeData = (payload) => {
  return { type: ActionTypes.GET_EMPLOYEE_DATA, payload: payload };
};
//
export const addEmployeeData = (payload) => {
  return { type: ActionTypes.ADD_NEW_EMPLOYEE, payload: payload };
};

// lay du lieu
export const getListDataEmployee = (status, page, pageSize) => {
  return {
    type: ActionTypes.GET_LIST_DATA_EMPLOYEE,
    payload: { status, page, pageSize },
  };
};

// xoa
export const deleteEmployee = (payload) => {
  return {
    type: ActionTypes.DELETE_EMPLOYEE,
    payload: payload,
  };
};

// lây du liẹu tu form

export const getFormEmployeeData = (payload) => {
  console.log("action", payload);
  return {
    type: ActionTypes.GET_FORM_DATA,
    payload: payload,
  };
};

// cập nhật dữ liệu lên form

export const updateFormEmployee = (id, data) => {
  return {
    type: ActionTypes.UPDATE_EMPLOYEE,
    payload: { id, data },
  };
};

// lãnh đạo

export const leaderAction = (id, data, action) => {
  return {
    type: ActionTypes.LEADER_ACTION,
    payload: { id, data, action },
  };
};

//trinh lanh đạo

export const addRegistAction = (id, data) => {
  return {
    type: ActionTypes.ADD_REGIST,
    payload: { id, data },
  };
};
