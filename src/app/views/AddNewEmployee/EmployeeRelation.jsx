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
  MenuItem,
} from "@mui/material";
import MaterialTable from "@material-table/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import ConfirmDialogDelete from "app/components/ConfirmDialog/ConfirmDialogDelete";
const EmployeeRelation = (props) => {
  const { employeeData, handleAddRelation } = props;
  const genders = useSelector((state) => state.Employee?.gender);
  const [relationship, setRelationship] = useState({});
  const [openRelations, setOpenRelations] = useState(false);
  const handleChangeEmployee = (rowData, method) => {
    if (method === 0) {
      setOpenRelations(true);
      setRelationship(rowData);
    }
    if (method === 1) {
      formik.setValues(rowData);
    }
  };
  const handleClose = () => {
    setOpenRelations(false);
  };
  const handleDeleteRelations = () => {
    employeeData.familyRelations = employeeData.familyRelations.filter(
      (item) => item.id !== relationship.id
    );
    setOpenRelations(false);
    // setRelationship({});
  };
  const columns = [
    {
      title: "Hành động",
      render: (rowData) => {
        return (
          <>
            <Tooltip title="Sửa">
              <IconButton
                onClick={() => {
                  handleChangeEmployee(rowData, 1);
                }}
              >
                <Icon color="primary">edit</Icon>
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
    { title: "Họ tên", field: "name" },
    {
      title: "Ngày sinh ",
      field: "dateOfBirth",
      render: (rowdata) => moment(rowdata).format("DD/MM/YYYY"),
    },
    {
      title: "Giới tính",
      field: "gender",
      render: (rowData) => genders[rowData.gender]?.name,
    },
    { title: "Mối quan hệ", field: "relation" },
  ];
  const genderItem = useSelector((state) => state.Employee?.gender);
  const formik = useFormik({
    initialValues: {
      name: relationship.name || "",
      dateOfBirth: relationship.dateOfBirth || "",
      gender: relationship.gender || "",
      relation: relationship.relation || "",
      citizenId: relationship.citizenId || "",
      address: relationship.address || "",
      phone: "123456789",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Hãy nhập đầy đủ họ và tên")
        .max(30, "Nhập họ tên đúng định dạng")
        .required("Không được bỏ trống"),
      gender: Yup.string().required("Không được bỏ trống"),
      relation: Yup.string().required("Không được để trống"),
      citizenId: Yup.string()
        .max(16, "Không được nhập quá 16 ký tư")
        .required("Không được bỏ trống"),
      phone: Yup.string()
        .min(9, "Số điện thoại ít nhất 10 số")
        .max(11, "Nhập không dc quá 11 ký tự")
        .required("Không được bỏ trống"),
      address: Yup.string().required("Không được bỏ trống"),
      dateOfBirth: Yup.date().required("Vui lòng nhập ngày"),
    }),

    onSubmit: (values) => {
      console.log(relationship);
      if (Object.keys(relationship).length === 0) {
        values.id = uuidv4();
        handleAddRelation(values, "familyRelations");
        formik.resetForm();
      } else {
        values.id = relationship.id;
        employeeData.familyRelations = employeeData.familyRelations.filter(
          (relationship) => relationship.id !== values.id
        );
        console.log("sưa nhan vien ", employeeData.familyRelations);
        employeeData.familyRelations.push(values);
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={3}>
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                id="name"
                name="name"
                label="Họ tên"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              ></TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
                size="small"
                variant="outlined"
                fullWidth
                id="dateOfBirth"
                name="dateOfBirth"
                label="Ngày sinh"
                value={formik.values.dateOfBirth}
                onChange={formik.handleChange}
                error={
                  formik.touched.dateOfBirth &&
                  Boolean(formik.errors.dateOfBirth)
                }
                helperText={
                  formik.touched.dateOfBirth && formik.errors.dateOfBirth
                }
              ></TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                variant="outlined"
                select
                fullWidth
                id="gender"
                name="gender"
                label="Giới tính"
                value={formik.values.gender}
                onChange={formik.handleChange}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={formik.touched.gender && formik.errors.gender}
              >
                {genderItem.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                id="relation"
                name="relation"
                label="Mối quan hệ"
                value={formik.values.relation}
                onChange={formik.handleChange}
                error={
                  formik.touched.relation && Boolean(formik.errors.relation)
                }
                helperText={formik.touched.relation && formik.errors.relation}
              ></TextField>
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={4}>
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                id="citizenId"
                name="citizenId"
                label="Số căn cuốc công dân"
                value={formik.values.citizenId}
                onChange={formik.handleChange}
                error={
                  formik.touched.citizenId && Boolean(formik.errors.citizenId)
                }
                helperText={formik.touched.citizenId && formik.errors.citizenId}
              ></TextField>
            </Grid>
            <Grid item xs={8}>
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                id="address"
                name="address"
                label="Địa chỉ"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
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
          data={employeeData?.familyRelations}
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
      {openRelations && (
        <ConfirmDialogDelete
          handleClose={handleClose}
          onYesClick={() => {
            handleDeleteRelations();
          }}
          title="Xóa quan hệ gia đình"
        />
      )}
    </div>
  );
};

export default EmployeeRelation;
