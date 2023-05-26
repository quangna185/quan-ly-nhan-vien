import { takeLatest, takeEvery } from "redux-saga/effects";
import { ActionTypes } from "../redux/actions/actionTypes";

import {
  getListEmployeeSaga,
  addNewEmployeeSaga,
  getListDataEmployeeSage,
  deleteEmployeeSaga,
  getFormDataEmployeeSaga,
  leaderActionSaga,
  addRegistSaga,
} from "./EmployeeSaga";
export default function* rootSaga() {
  yield takeLatest(ActionTypes.GET_LIST_EMPLOYEE_REQUEST, getListEmployeeSaga);
  yield takeLatest(ActionTypes.ADD_NEW_EMPLOYEE, addNewEmployeeSaga);
  yield takeLatest(ActionTypes.GET_LIST_DATA_EMPLOYEE, getListDataEmployeeSage);
  yield takeLatest(ActionTypes.DELETE_EMPLOYEE, deleteEmployeeSaga);
  yield takeLatest(ActionTypes.GET_FORM_DATA, getFormDataEmployeeSaga);
  yield takeLatest(ActionTypes.LEADER_ACTION, leaderActionSaga);
  yield takeLatest(ActionTypes.ADD_REGIST, addRegistSaga);
}
