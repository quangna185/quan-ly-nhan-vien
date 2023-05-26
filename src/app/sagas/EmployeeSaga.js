import { call, put } from "redux-saga/effects";
import {
  GetAllEmployee,
  GetListEmployee,
  addNewEmployee,
  deleteEmployee,
  getFormDataEmployee,
  getEmployeeDataById,
  leaderOfAction,
  sendLead,
  updateFormDataEmployee,
} from "app/views/AddNewEmployee/EmployeeServices";
import { ActionTypes } from "app/redux/actions/actionTypes";

export function* getListEmployeeSaga() {
  try {
    const listEmployee = yield call(GetListEmployee);

    yield put({
      type: ActionTypes.GET_LIST_EMPLOYEE_SUCCESS,
      payload: listEmployee?.data?.data,
    });
  } catch (err) {
    console.log(err);
  }
}
export function* addNewEmployeeSaga(action) {
  try {
    yield put({
      type: ActionTypes.GET_EMPLOYEE_DATA,
      payload: action.payload,
    });
    // yield call(addNewEmployee, data);
    // yield getListEmployeeSaga();
  } catch (err) {
    console.log(err);
  }
}

// lay dư liệu

export function* getListDataEmployeeSage(action) {
  const page = action?.payload?.page;
  const pageSize = action?.payload?.pageSize;
  const status = action?.payload?.status;
  try {
    const listDataEmployee = yield call(GetAllEmployee, status, page, pageSize);
    yield put({
      type: ActionTypes.GET_LIST_DATA_EMPLOYEE_SUCCESS,
      payload: listDataEmployee?.data?.data,
    });
  } catch (err) {
    console.log(err);
  }
}
// xoa du lieu

export function* deleteEmployeeSaga(action) {
  yield call(deleteEmployee, action.payload);
  yield getListDataEmployeeSage();
}

// lay du lieu tu form

export function* getFormDataEmployeeSaga(action) {
  try {
    const res = yield call(getFormDataEmployee, action.payload);
    const dataEmployeeId = yield call(getEmployeeDataById, action.payload);
    yield put({
      type: ActionTypes.GET_FORM_DATA_SUCCESS,
      payload: {
        resGetFormEmployee: res.data.data,
        resGetDataEmployeeId: dataEmployeeId.data.data,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
// cap nhat form du lieu

export function* updateFormEmployeeSaga(action) {
  console.log(action);
  try {
    // const res = yield call(updateFormDataEmployee,)
  } catch (err) {
    console.log(err);
  }
}
// lanh dạo

export function* leaderActionSaga(action) {
  try {
    const res = yield call(
      leaderOfAction,
      action?.payload?.id,
      action?.payload?.data
    );
    if (res.status === 200) {
      toast.success(`${action.payload.action} thành công`);
    } else {
      console.log("loii", res);
      // toast.error()
    }
  } catch (err) {
    console.log(err);
  }
}

// trinh lanh dao

export function* addRegistSaga(action) {
  const res = yield call(sendLead, action.payload.id, action.payload.data);
  // if (res.status === 200) {
  //   toast.success("Gửi lãnh đạo thành công");
  // } else {
  //   console.log("loii", res);
  //   // toast.error()
  // }
}
