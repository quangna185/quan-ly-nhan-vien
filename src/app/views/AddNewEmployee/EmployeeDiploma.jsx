import React, { useState } from "react";
import {
  Grid,
  TextField,
  DialogActions,
  Button,
  IconButton,
  Icon,
  Tooltip,
  Box,
} from "@mui/material";
import MaterialTable from "@material-table/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import ConfirmDialogDelete from "app/components/ConfirmDialog/ConfirmDialogDelete";
const EmployeeDiploma = (props) => {
  const { employeeData, handleAddDiploma } = props;
  const [diplomaData, setDiplomaData] = useState({});
  const [openDiploma, setOpenDiploma] = useState(false);

  const handleChangeEmployee = (rowData, method) => {
    if (method === 0) {
      setOpenDiploma(true);
      setDiplomaData(rowData);
    }
    if (method === 1) {
      formik.setValues(rowData);
    }
  };
  const handleClose = () => {
    setOpenDiploma(false);
  };
  const handleDeleteDiploma = () => {
    employeeData.certificates = employeeData.certificates.filter(
      (item) => item.id !== diplomaData.id
    );
    setOpenDiploma(false);
    setDiplomaData({});
  };
  const columns = [
    {
      title: "Hành động",
      render: (rowData) => {
        return (
          <>
            <Tooltip title="Sửa">
              <IconButton>
                <Icon
                  color="primary"
                  onClick={() => handleChangeEmployee(rowData, 1)}
                >
                  edit
                </Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Xóa">
              <IconButton onClick={() => handleChangeEmployee(rowData, 0)}>
                <Icon color={"error"}>delete</Icon>
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
    { title: "Tên văn bằng", field: "name" },
    {
      title: "Nội dung ",
      field: "content",
    },
    {
      title: "Ngày cấp",
      field: "issuanceDate",
      render: (rowdata) => moment(rowdata).format("DD/MM/YYYY"),
    },
    { title: "Lĩnh Vực", field: "field" },
  ];
  const formik = useFormik({
    initialValues: {
      name: "",
      issuanceDate: "",
      content: "",
      field: "",
      educationStartDate: "2015-05-07",
      educationEndDate: "2019-05-07",
      graduatedWith: "Xuất sắc, GPA 4.0 là không đủ để đo lường tài năng",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Hãy nhập đầy tên van bằng")
        .max(30, "Nhập nội dung đúng định dạng")
        .required("Không được bỏ trống"),
      content: Yup.string()
        .min(5, "Hãy nhập đầy đủ nội dung bằng")
        .max(30, "Nhập nội dung đúng định dạng")
        .required("Không được bỏ trống"),
      issuanceDate: Yup.date().required("Vui lòng nhập ngày"),
      field: Yup.string().required("Hãy nhập lĩnh vực"),
    }),
    onSubmit: (values) => {
      console.log(diplomaData);
      if (Object.keys(diplomaData).length === 0) {
        values.id = uuidv4();
        handleAddDiploma(values, "certificates");
      } else {
        values.id = diplomaData.id;
        employeeData.certificates = employeeData.certificates.filter(
          (diplomaData) => diplomaData.id !== values.id
        );
        employeeData.certificates.push(values);
      }
      console.log(values);

      formik.resetForm();
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={4}>
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                id="name"
                name="name"
                label="Tên văn bằng"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              ></TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                variant="outlined"
                fullWidth
                type="date"
                id="issuanceDate"
                name="issuanceDate"
                label="Ngày cấp"
                value={formik.values.issuanceDate}
                onChange={formik.handleChange}
                error={
                  formik.touched.issuanceDate &&
                  Boolean(formik.errors.issuanceDate)
                }
                helperText={
                  formik.touched.issuanceDate && formik.errors.issuanceDate
                }
              ></TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                id="field"
                name="field"
                label="Lĩnh vực"
                value={formik.values.field}
                onChange={formik.handleChange}
                error={formik.touched.field && Boolean(formik.errors.field)}
                helperText={formik.touched.field && formik.errors.field}
              ></TextField>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={12}>
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                id="content"
                name="content"
                label="Nội dung"
                value={formik.values.content}
                onChange={formik.handleChange}
                error={formik.touched.content && Boolean(formik.errors.content)}
                helperText={formik.touched.content && formik.errors.content}
              ></TextField>
            </Grid>
          </Grid>
        </Grid>
        <DialogActions>
          <Button
            variant="contained"
            type="submit"
            sx={{ mb: 2, background: "#7467EF" }}
          >
            Lưu
          </Button>
          <Button variant="contained" sx={{ mb: 2, background: "#FF9E43" }}>
            Hủy
          </Button>
        </DialogActions>
      </form>

      <Box>
        <MaterialTable
          title={""}
          data={employeeData?.certificates}
          columns={columns}
          options={{
            pageSize: 15,
            pageSizeOptions: [5, 10, 15, 20],
            rowStyle: (rowData, index) => {
              return {
                backgroundColor: index % 2 === 1 ? "#EEE" : "#FFF",
              };
            },
            maxBodyHeight: "1000px",
            minBodyHeight: "200px",
            headerStyle: {
              backgroundColor: "#262e49",
              color: "#fff",
            },
            padding: "default",
            toolbar: false,
          }}
        />
      </Box>
      {openDiploma && (
        <ConfirmDialogDelete
          handleClose={handleClose}
          onYesClick={() => {
            handleDeleteDiploma();
          }}
          title="Xóa văn bằng"
        />
      )}
    </div>
  );
};

export default EmployeeDiploma;
