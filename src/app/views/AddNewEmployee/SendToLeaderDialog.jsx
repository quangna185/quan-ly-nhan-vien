import React from "react";
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
const SendToLeaderDialog = (props) => {
  const { handleClose, employeeId } = props;

  const formik = useFormik({
    initialValues: {
      registerName: "",
      registerDate: "",
      registerPosition: "",
      registerContent: "",
    },
    validationSchema: Yup.object({
      registerName: Yup.string()
        .min(5, "Hãy nhập đầy tên nhân viên")
        .max(30, "Nhập nội dung đúng định dạng")
        .required("Không được bỏ trống"),
      registerContent: Yup.string()
        .min(5, "Hãy nhập đầy đủ nội dung ")
        .max(30, "Nhập nội dung đúng định dạng")
        .required("Không được bỏ trống"),
      registerDate: Yup.date().required("Vui lòng nhập ngày"),
      // registerPosition: Yup.string().required("Nhập vị trí"),
    }),
    onSubmit: (values) => {
      console.log(values);
      values.status = "3";
      dispatch(addRegistAction(employeeId, values));

      //  handleCloseAll();
      // toast.success("Gửi lãnh đạo thành công");
    },
  });
  return (
    <div>
      <Dialog open={open} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Gửi lãnh đạo
          <Box onClick={handleClose}>
            <Close color="error"></Close>
          </Box>
        </DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent style={{ paddingTop: 10 }}>
            <Grid container spacing={2}>
              <Grid item container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    size="small"
                    fullWidth
                    name="registerName"
                    label="Tên lãnh đạo"
                    value={formik.values.registerName}
                    onChange={formik.handleChange}
                    error={
                      formik.errors.registerName && formik.touched.registerName
                    }
                    helperText={formik.errors.registerName}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    size="small"
                    fullWidth
                    name="registerDate"
                    label="Ngày gửi"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formik.values.registerDate}
                    onChange={formik.handleChange}
                    error={
                      formik.errors.registerDate && formik.touched.registerDate
                    }
                    helperText={formik.errors.registerDate}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    size="small"
                    fullWidth
                    label="Chức Vụ"
                    name="registerPosition"
                    value={formik.values.registerPosition}
                    onChange={formik.handleChange}
                    error={
                      formik.errors.registerPosition &&
                      formik.touched.registerPosition
                    }
                    helperText={formik.errors.registerPosition}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <TextField
                  size="small"
                  fullWidth
                  label="Nội dung"
                  name="registerContent"
                  multiline
                  minRows={3}
                  value={formik.values.registerContent}
                  onChange={formik.handleChange}
                  error={
                    formik.errors.registerContent &&
                    formik.touched.registerContent
                  }
                  helperText={formik.errors.registerContent}
                />
              </Grid>
            </Grid>
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
              sx={{ mb: 2, background: "#7467EF" }}
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
    </div>
  );
};

export default SendToLeaderDialog;
