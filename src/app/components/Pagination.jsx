import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";
const Pagination = (props) => {
  const { onHandleChangePage, onHandleChangePageSize, page, pageSize } = props;
  const handleChangePage = (event, newPage) => {
    console.log("new Page: ", newPage);
    onHandleChangePage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    onHandleChangePageSize(event.target.value);
    onHandleChangePage(1);
  };
  return (
    <div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        // phân tư dữ liệu
        count={1000}
        rowsPerPage={pageSize}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Pagination;
