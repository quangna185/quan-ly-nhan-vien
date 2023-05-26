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
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { updateEmployee } from "app/redux/actions/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { leaderAction } from "app/redux/actions/action";
function AcceptDialog(props) {
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state?.Employee?.formData);
  const { handleClose, handleCloseAll } = props;
  const formik = useFormik({
    initialValues: {
      appointmentDate: "",
    },
    validationSchema: Yup.object({
      appointmentDate: Yup.date().required("Vui lòng nhập ngày"),
    }),
    onSubmit: (values) => {
      const isCheckStatus =
        employeeData?.resGetDataEmployeeId?.employeeInfo?.status;
      values.status = isCheckStatus === 3 ? 5 : 10;
      const employeeId =
        employeeData?.resGetDataEmployeeId?.employeeInfo?.employeeId;
      isCheckStatus === 3
        ? dispatch(leaderAction(employeeId, values))
        : dispatch(leaderAction(employeeId, values));
      //   if (employee.releaseRequest) {
      //     employee.status = "Kết thúc";
      //   } else {
      //     employee.status = "Đã duyệt";
      //   }
      //   employee.acceptInfo = values;
      //   dispatch(updateEmployee(employee));
      //   toast.success("Phê duyệt thành công");
      //   handleCloseAll();
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
          Xác nhận phê duyệt
          <Box onClick={handleClose}>
            <Close color="error"></Close>
          </Box>
        </DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent style={{ paddingTop: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="date"
                  label="Ngày hẹn"
                  variant="outlined"
                  name="appointmentDate"
                  value={formik.values.appointmentDate}
                  onChange={formik.handleChange}
                  error={
                    formik.errors.appointmentDate &&
                    formik.touched.appointmentDate
                  }
                  helperText={formik.errors.appointmentDate}
                />
              </Grid>
              <Grid item xs={12}>
                {" "}
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Đã đủ điều kiện phê duyệt"
                />
              </Grid>
            </Grid>
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

export default AcceptDialog;
