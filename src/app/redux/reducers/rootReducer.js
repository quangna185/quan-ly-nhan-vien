import { combineReducers } from "redux";
import EmployeeReducer from "./EmployeeReducer";

export default combineReducers({
  Employee: EmployeeReducer,
  
});