import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  Box,
  Button,
  styled,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { leaderAction } from "app/redux/actions/action";
function AdditionalRequestDialog(props) {
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state?.Employee?.formData);
  console.log("d", employeeData);
  const { handleClose, handleCloseAll } = props;
  const formik = useFormik({
    initialValues: {
      statusLog: "",
    },
    validationSchema: Yup.object({
      statusLog: Yup.string()
        .min(5, "Hãy nhập đầy đủ nội dung ")
        .max(30, "Nhập nội dung đúng định dạng")
        .required("Không được bỏ trống"),
    }),
    onSubmit: (values) => {
      const isCheckStatus =
        employeeData?.resGetDataEmployeeId?.employeeInfo?.status;
      const employeeId =
        employeeData?.resGetDataEmployeeId?.employeeInfo?.employeeId;
      values.status = isCheckStatus === 3 ? 4 : 9;
      isCheckStatus === 3
        ? dispatch(leaderAction(employeeId, values, "Yêu cầu bổ sung"))
        : dispatch(leaderAction(employeeId, values, "Yêu cầu bổ sung"));
      handleCloseAll();
      // employee.status = "Yêu cầu bổ sung";
      // employee.additionalRequest = values;
      // dispatch(updateEmployee(employee));
      // handleCloseAll();
      // toast.success("Gửi yêu cầu bổ sung thành công");
    },
  });
  return (
    <>
      {" "}
      <Dialog open={open} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Yêu cầu bổ sung
          <Box onClick={handleClose}>
            <Close color="error"></Close>
          </Box>
        </DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent style={{ paddingTop: 10 }}>
            <TextField
              fullWidth
              minRows={5}
              multiline
              name="statusLog"
              label="Yêu cầu bổ sung"
              onChange={formik.handleChange}
              value={formik.values.statusLog}
              error={formik.errors.statusLog && formik.touched.statusLog}
              helperText={formik.errors.statusLog}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              sx={{ mb: 2 }}
              type="submit"
            >
              Xác nhận
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ mb: 2, background: "#FF9E43" }}
            >
              Hủy
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default AdditionalRequestDialog;
