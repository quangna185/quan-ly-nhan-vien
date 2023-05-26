import { ActionTypes } from "../actions/actionTypes";
const initialState = {
  status: {
    1: " Lưu mới",
    // 2 : " Chờ xử lý",
    3: " Chờ duyệt",
    4: "Yêu cầu bổ sung",
    5: "Đã duyệt",
    6: "Đã từ chối",
    8: "Chờ duyệt kết thúc",
    9: "Yêu cầu bổ sung đối với kết thúc",
    10: "Đã duyệt kết thúc",
    11: "Đã từ chối kv",
    13: " Đã lưu hồ sơ",
    14: "Đã xóa",

    15: "Lưu mới",
    16: " Chờ duyệt",
    17: "Yêu cầu bổ sung",
    18: "Đã duyệt",
    19: "Đã từ chối",
  },
  team: [
    {
      id: 1,
      name: "FrontEnd",
    },
    {
      id: 2,
      name: "BackEnd",
    },
    {
      id: 3,
      name: "Test",
    },
  ],
  gender: [
    {
      id: 1,
      name: "Nữ",
    },
    {
      id: 2,
      name: "Nam",
    },
  ],
  listEmployee: [],
  employeeData: {
    employeeInfo: {},
    certificates: [],
    familyRelations: [],
  },
  formData: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_LIST_EMPLOYEE_SUCCESS: {
      console.log(action.payload);
      return { ...state, listEmployee: action.payload };
    }
    case ActionTypes.GET_EMPLOYEE_DATA: {
      console.log(action.payload);
      return { ...state, employeeData: action.payload };
    }

    case ActionTypes.ADD_NEW_EMPLOYEE_SUCCESS: {
      return {};
    }

    case ActionTypes.GET_LIST_DATA_EMPLOYEE_SUCCESS: {
      return { ...state, listEmployee: action.payload };
    }
    case ActionTypes.GET_FORM_DATA_SUCCESS: {
      return {
        ...state,
        formData: action.payload,
      };
    }
    default:
      return state;
  }
};
