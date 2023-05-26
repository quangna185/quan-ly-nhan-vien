import React, { useEffect, useState } from "react";
import Breadcrumb from "app/components/Breadcrumb";
import { Box, Icon, IconButton, styled, Tooltip } from "@mui/material";
import MaterialTable from "@material-table/core";
import ApprovalDialog from "./ApprovalDialog";
import { useSelector, useDispatch } from "react-redux";
import {
  getListDataEmployee,
  getFormEmployeeData,
} from "app/redux/actions/action";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));
const Approval = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // const handleClickOpen = () => {
  //   dispatch(getFormEmployeeData(rowdata.employeeId));
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const status = "2,3,8,16";
    dispatch(getListDataEmployee(status, page, pageSize));
  }, []);
  const listDataEmployees = useSelector((state) => state.Employee.listEmployee);
  const status = useSelector((state) => state.Employee?.status);
  const columns = [
    { title: "Mã nhân viên", field: "code" },
    { title: "Họ tên", field: "fullName" },
    { title: "Email", field: "email" },
    { title: "Số điện thoại", field: "phone" },
    {
      title: "Trạng thái",
      field: "status",
      render: (rowData) => status[rowData.status],
    },
    {
      title: "Hành động",
      render: (rowdata) => {
        return (
          <>
            <Tooltip title="Xem chi tiết">
              <IconButton
                onClick={() => {
                  dispatch(getFormEmployeeData(rowdata.employeeId));
                  setOpen(true);
                }}
              >
                <Icon color="success">visibilityIcon</Icon>
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
              { name: "Lãnh đạo", path: "/" },
              { name: "Chờ duyệt" },
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

              padding: "default",

              toolbar: true,
            }}
          />
        </Box>
        {open && <ApprovalDialog handleClose={handleClose} />}
      </Container>
    </div>
  );
};

export default Approval;
