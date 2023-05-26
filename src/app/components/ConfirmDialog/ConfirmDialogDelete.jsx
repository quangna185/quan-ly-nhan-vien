import React from "react";
import {
  DialogTitle,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
} from "@mui/material";

const ConfirmDialogDelete = (props) => {
  const { handleClose, onYesClick, title } = props;
  return (
    <div>
      <Dialog
        className="confirm-dialog"
        open={true}
        onClose={handleClose}
        fullWidth
        maxWidth={"sm"}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ mb: 2, background: "#FF9E43" }}
            onClick={handleClose}
          >
            Hủy
          </Button>
          <Button
            onClick={onYesClick}
            variant="contained"
            sx={{ mb: 2, background: "#7467EF" }}
            type="submit"
          >
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialogDelete;
