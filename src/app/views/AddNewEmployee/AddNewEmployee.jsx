import { Box, styled, Button, IconButton, Icon, Tooltip } from "@mui/material";
import Breadcrumb from "app/components/Breadcrumb";
import MaterialTable from "@material-table/core";
import AddNewEmployeeDialog from "../AddNewEmployee/AddNewEmployeeDialog";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListDataEmployee,
  deleteEmployee,
  getEmployeeData,
  getFormEmployeeData,
} from "app/redux/actions/action";
import moment from "moment";
import ConfirmDialogDelete from "app/components/ConfirmDialog/ConfirmDialogDelete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApprovalDialog from "../Approval/ApprovalDialog";
import ApproveDialog from "../Approved/ApproveDialog";
const Container = styled("div")(() => ({
  margin: "30px",
  "& .breadcrumb": {
    marginBottom: "30px",
  },
}));

const AddNewEmployee = () => {
  const dispatch = useDispatch();
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const [shouldOpenViewDialog, setShouldOpenViewDialog] = useState(false);
  const [
    shouldOpenConfirmationDeleteDialog,
    setshouldOpenConfirmationDeleteDialog,
  ] = useState(false);
  const [shouldOpenRequestDialog, setShouldOpenRequestDialog] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [employeeDelete, setEmployeeDelete] = useState("");

  useEffect(() => {
    const status = "1,3,4,6";
    dispatch(getListDataEmployee(status, page, pageSize));
  }, []);

  const listEmployees = useSelector((state) => state.Employee?.listEmployee);
  const status = useSelector((state) => state.Employee?.status);
  const handleOpenDialog = () => {
    setShouldOpenDialog(true);
  };
  const handleClose = () => {
    setShouldOpenDialog(false);
    dispatch(getEmployeeData({}));
  };

  // xóa
  const hanleChangeEmployeeDelete = (rowData) => {
    dispatch(deleteEmployee(rowData.employeeId));
    setshouldOpenConfirmationDeleteDialog(false);
    toast.success("Xóa nhân viên thành công");
  };

  // sưa
  const handleChangeEmployee = (rowData) => {
    console.log("thong tin", rowData);
    dispatch(getEmployeeData(rowData));
    setShouldOpenDialog(true);
  };
  const columns = [
    {
      title: "Mã nhân viên",
      field: "code",
    },
    {
      title: "Họ tên",
      field: "fullName",
    },
    {
      title: "Ngày sinh",
      field: "dateOfBirth",
      render: (rowdata) => moment(rowdata).format("DD/MM/YYYY"),
    },
    {
      title: "Số điện thoại",
      field: "phone",
    },
    {
      title: "Trạng thái",
      field: "status",
      render: (rowData) => status[rowData.status],
    },
    {
      title: "Hành động",
      render: (rowData) => {
        return (
          <>
            <Tooltip title="Xem chi tiết">
              <IconButton
                disabled={rowData.status !== "1" ? false : true}
                onClick={() => {
                  setShouldOpenViewDialog(true);
                  dispatch(getFormEmployeeData(rowData.employeeId));
                }}
              >
                <Icon color={rowData.status !== "1" ? "success" : "disabled"}>
                  visibilityIcon
                </Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Sửa">
              <IconButton onClick={() => handleChangeEmployee(rowData)}>
                <Icon color="primary">edit</Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Xóa">
              <IconButton>
                <Icon
                  color="error"
                  onClick={() => {
                    setEmployeeDelete(rowData);
                    setshouldOpenConfirmationDeleteDialog(true);
                  }}
                >
                  delete
                </Icon>
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
  ];
  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Quản lý", path: "/" },
            { name: "Thêm mới nhân viên" },
          ]}
        />
      </Box>
      <Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
          onClick={handleOpenDialog}
        >
          Thêm mới
        </Button>
      </Box>
      <Box width="100%" overflow="auto">
        <MaterialTable
          title={""}
          data={listEmployees}
          columns={columns}
          options={{
            pageSize: 5,
            pageSizeOptions: [5, 10, 15, 20],
            rowStyle: (rowData, index) => {
              return {
                backgroundColor: index % 2 === 1 ? "#EEE" : "#FFF",
              };
            },
            maxBodyHeight: "1000px",
            minBodyHeight: "370px",
            headerStyle: {
              backgroundColor: "#262e49",
              color: "#fff",
            },
            padding: "default",
            toolbar: false,
          }}
        />
      </Box>
      {shouldOpenDialog && <AddNewEmployeeDialog handleClose={handleClose} />}
      {shouldOpenConfirmationDeleteDialog && (
        <ConfirmDialogDelete
          handleClose={() => {
            setshouldOpenConfirmationDeleteDialog(false);
          }}
          onYesClick={() => {
            hanleChangeEmployeeDelete(employeeDelete);
          }}
          title="Xóa nhân viên"
        />
      )}
      {shouldOpenViewDialog && (
        <ApproveDialog
          handleClose={() => {
            setShouldOpenViewDialog(false);
            dispatch(getEmployeeData({}));
          }}
        />
      )}
    </Container>
  );
};

export default AddNewEmployee;
