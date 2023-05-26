import {
  Dialog,
  DialogTitle,
  Box,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { Close } from "@mui/icons-material";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import EmployeeInfo from "./EmployeeInfo";
import EmployeeDiploma from "./EmployeeDiploma";
import EmployeeRelation from "./EmployeeRelation";
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addEmployeeData } from "../../redux/actions/action";
import EmployeeRegisterDialog from "./EmployeeRegisterDialog";
const AddNewEmployeeDialog = (props) => {
  const { handleClose } = props;
  const [value, setValue] = useState("1");
  const [saved, setSaved] = useState("none");
  const dispatch = useDispatch();
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const employee = useSelector((state) => state?.Employee?.employeeData);
  const [employeeData, setEmployeeData] = useState(employee);
  const handleAddToList = (data, method) => {
    setEmployeeData({
      ...employeeData,
      [method]: [...employeeData[method], data],
    });
  };
  const formRef = useRef();
  useEffect(() => {
    setEmployeeData(employee);
  }, [employee]);
  const initialValues = {
    employeeInfo: {
      fullName: employeeData?.fullName || "",
      code: employeeData?.code || "",
      phone: employeeData?.phone || "",
      email: employeeData?.email || "",
      address: employeeData?.address || "",
      teamId: employeeData?.teamId || "",
      citizenId: employeeData?.citizenId || "",
      photoUrl: employeeData?.photoUrl || "assets/images/face-1.png",
      gender: employeeData?.gender || "",
      dateOfBirth: employeeData?.dateOfBirth || "",
      status: employeeData?.dateOfBirth || 1,
    },
    certificates: employeeData?.certificates || [],
    familyRelations: employeeData?.familyRelations || [],
  };
  const validationSchema = yup.object({
    employeeInfo: yup.object().shape({
      code: yup
        .string()
        .min(6, "Nhập tối thiểu 6 ký tự")
        .max(32, "Nhập không được quá 32 ký tự")
        .required("Không được bỏ trống"),
      fullName: yup
        .string()
        .min(5, "Hãy nhập đầy đủ họ và tên")
        .max(30, "Nhập họ tên đúng định dạng")
        .required("Không được bỏ trống"),
      email: yup
        .string()
        .email("Email sai định dạng")
        .required("Không được bỏ trống"),
      teamId: yup.string().required("Không được bỏ trống"),
      dateOfBirth: yup
        .date()
        .max(new Date(Date.now() - 567648000000), "Yêu cầu trên 18 tuổi")
        .min(new Date(Date.now() - 1892160000000), "Yêu cầu dưới 60 tuổi")
        .required("Vui lòng nhập ngày"),
      phone: yup
        .string()
        .min(9, "Số điện thoại ít nhất 10 số")
        .max(11, "Nhập không dc quá 11 ký tự")
        .required("Không được bỏ trống"),
      gender: yup.string().required("Không được bỏ trống"),
      address: yup.string().required("Không được bỏ trống"),
      citizenId: yup
        .string()
        .max(16, "Không được nhập quá 16 ký tư")
        .required("Không được bỏ trống"),
    }),
  });

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Dialog open={true} maxWidth={"md"} fullWidth={true}>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {!employeeData.employeeId ? "Thêm mới nhân viên" : "Sửa nhân viên"}
          <Box onClick={() => handleClose()}>
            <Close color="error"></Close>
          </Box>
        </DialogTitle>
        {/* <form onSubmit={formik.handleSubmit}> */}
        <DialogContent>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                background: "#ddd",
              }}
            >
              <TabList onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Thông tin nhân viên" value="1" />
                <Tab label="Thông tin  văn bằng" value="2" />
                <Tab label="Thông tin quan hệ gia đình" value="3" />
              </TabList>
            </Box>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              enableReinitialize
              innerRef={formRef}
              onSubmit={(values) => {
                // same shape as initial values
                //   //   values.id = uuidv4();
                dispatch(addEmployeeData(values));
                setSaved("block");
              }}
            >
              {({ values, setFieldValue, errors, touched }) => (
                <>
                  <TabPanel value="1" sx={{ p: "20px 0" }}>
                    <EmployeeInfo
                      employeeInfoValues={values}
                      setFieldValue={setFieldValue}
                      errors={errors}
                      touched={touched}
                    />
                  </TabPanel>
                  <TabPanel value="2" sx={{ p: "20px 0" }}>
                    <EmployeeDiploma
                      employeeData={employeeData}
                      handleAddDiploma={handleAddToList}
                    />
                  </TabPanel>
                  <TabPanel value="3" sx={{ p: "20px 0" }}>
                    <EmployeeRelation
                      employeeData={employeeData}
                      handleAddRelation={handleAddToList}
                    />
                  </TabPanel>
                </>
              )}
            </Formik>
          </TabContext>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{ mb: 2, background: "#7467EF" }}
            onClick={handleSubmit}
          >
            Lưu
          </Button>
          <Button
            variant="contained"
            sx={{
              mb: 2,
              background: "#339999",
              // display: saved,
            }}
            onClick={() => {
              setShouldOpenDialog("true");
            }}
          >
            Đăng kí
          </Button>
          <Button
            variant="contained"
            type="button"
            sx={{ mb: 2, background: "#FF9E43" }}
            on
            onClick={() => handleClose()}
          >
            Hủy
          </Button>
        </DialogActions>

        {/* </form> */}
      </Dialog>
      {shouldOpenDialog && (
        <EmployeeRegisterDialog
          handleAddToList={handleAddToList}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default AddNewEmployeeDialog;
