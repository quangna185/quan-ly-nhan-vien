import React, { useEffect, useState } from "react";
import Breadcrumb from "app/components/Breadcrumb";
import MaterialTable from "@material-table/core";
import {
  Button,
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  Tooltip,
} from "@mui/material";
import ManagerEmployeeDialog from "./ManagerEmployeeDialog";
import Pagination from "app/components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getListDataEmployee } from "app/redux/actions/action";
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));
const ManagerEmployee = () => {
  const [openManagerEmployeeDialog, setOpenManagerEmployeeDialog] =
    useState(false);
  const status = useSelector((state) => state.Employee?.status);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const onHandleChangePage = (page) => {
    setPage(page);
  };
  const onHandleChangePageSize = (pageSize) => {
    setPageSize(pageSize);
  };
  useEffect(() => {
    const status = 5;
    dispatch(getListDataEmployee(status, page, pageSize));
  }, [page, pageSize]);

  const listDataEmployees = useSelector((state) => state.Employee.listEmployee);
  console.log(listDataEmployees);
  const columns = [
    { title: "Mã nhân viên", field: "code" },
    { title: "Họ và tên", field: "fullName" },
    { title: "Email", field: "email" },
    { title: "Số điện thoại", field: "phone" },
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
            <Tooltip title="Cập nhật diễn biến">
              <IconButton onClick={() => setOpenManagerEmployeeDialog(true)}>
                <Icon color="success">visibilityIcon</Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Thông tin">
              <IconButton>
                <Icon>report</Icon>
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[
              { name: "Quản lý", path: "/" },
              { name: "Quản lý nhân viên" },
            ]}
          />
        </Box>
        <Box width="100%" overflow="auto">
          <MaterialTable
            title={""}
            data={listDataEmployees}
            columns={columns}
            options={{
              paging: false,
              rowStyle: (rowData, index) => {
                return {
                  backgroundColor: index % 2 === 1 ? "#EEE" : "#FFF",
                };
              },
              maxBodyHeight: "1000px",
              minBodyHeight: "370px",
              headerStyle: {
                backgroundColor: "#222943",
                color: "#fff",
              },
              // padding: 'dense',
              padding: "default",
              // search: false,
              // exportButton: true,0
              toolbar: true,
            }}
          />
          <Pagination
            onHandleChangePage={onHandleChangePage}
            onHandleChangePageSize={onHandleChangePageSize}
            page={page}
            pageSize={pageSize}
          />
        </Box>
        {openManagerEmployeeDialog && (
          <ManagerEmployeeDialog
            handleClose={() => {
              setOpenManagerEmployeeDialog(false);
            }}
          />
        )}
      </Container>
    </div>
  );
};

export default ManagerEmployee;
