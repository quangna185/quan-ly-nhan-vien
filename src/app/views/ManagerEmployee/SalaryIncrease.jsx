import {
  Grid,
  TextField,
  Button,
  Icon,
  Tooltip,
  IconButton,
} from "@mui/material";
import React from "react";
import MaterialTable from "@material-table/core";

const SalaryIncrease = () => {
  const columns = [
    {
      title: "Hành động",
      render: (rowData) => {
        return (
          <>
            <Tooltip title="Sửa">
              <IconButton color="primary">
                <Icon>edit</Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Xóa">
              <IconButton color="error">
                <Icon>delete</Icon>
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
    { title: "Lần", field: "time" },
    { title: "Bậc", field: "rank" },

    { title: "Lý do", field: "reason" },
    { title: "Ngày", field: "date" },
    { title: "Ghi chú", field: "note" },
  ];
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs={4}>
            <TextField
              size="small"
              label="Ngày tăng lương"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              name="date"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField size="small" fullWidth label="Lần thứ" name="time" />
          </Grid>
          <Grid item xs={4}>
            <TextField size="small" fullWidth label="Cấp bậc" name="rank" />
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs={12}>
            <TextField
              size="small"
              fullWidth
              label="Lý do tăng lương"
              name="reason"
            />
          </Grid>
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={8.5}>
              <TextField size="small" fullWidth label="Ghi chú" name="note" />
            </Grid>
            <Grid container item xs={3.5} spacing={1}>
              <Grid item>
                <Button variant="contained" color="secondary" type="submit">
                  Thêm
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Lưu
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" sx={{ background: "#FF9E43" }}>
                  Hủy
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <MaterialTable
            title={""}
            //   data={listDocument}
            columns={columns}
            options={{
              pageSize: 5,
              pageSizeOptions: [5, 10, 15, 20],
              rowStyle: (rowData, index) => {
                return {
                  backgroundColor: index % 2 === 1 ? "#EEE" : "#FFF",
                };
              },
              maxBodyHeight: "500px",
              minBodyHeight: "200px",
              headerStyle: {
                backgroundColor: "#262e49",
                color: "#fff",
              },
              padding: "default",
              toolbar: false,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SalaryIncrease;
