import React from "react";
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
import moment from "moment";
import MaterialTable from "@material-table/core";
const Diploma = (props) => {
  const { employeeInfo, employee } = props;
  const certificates = employeeInfo?.certificates;

  const columns = [
    { title: "Tên văn bằng", field: "name" },
    { title: "Tổ chức", field: "educationalOrg" },
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
  return (
    <div>
      <Box width="100%" overflow="auto">
        <MaterialTable
          title={""}
          data={certificates || employee?.certificates}
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
    </div>
  );
};

export default Diploma;
