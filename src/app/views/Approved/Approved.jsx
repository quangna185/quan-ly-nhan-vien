import React, { useState, useEffect } from "react";
import Breadcrumb from "app/components/Breadcrumb";
import { Box, Icon, IconButton, styled, Tooltip } from "@mui/material";
import MaterialTable from "@material-table/core";
import {
  getListDataEmployee,
  getFormEmployeeData,
  getEmployeeData,
} from "app/redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import ApproveDialog from "./ApproveDialog";
const Approved = () => {
  const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
      marginBottom: "30px",
      [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
  }));
  const dispatch = useDispatch();
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  useEffect(() => {
    const status = "5,6,10,11,18";
    dispatch(getListDataEmployee(status, page, pageSize));
  }, []);
  const status = useSelector((state) => state.Employee?.status);
  const listDataEmployees = useSelector((state) => state.Employee.listEmployee);

  const handleClose = () => {
    setShouldOpenDialog(false);
  };

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
                  // dispatch(getEmployeeData(rowdata.employeeId));
                  dispatch(getFormEmployeeData(rowdata.employeeId));
                  setShouldOpenDialog(true);
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
        {shouldOpenDialog && <ApproveDialog handleClose={handleClose} />}
      </Container>
    </div>
  );
};

export default Approved;
