import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  Icon,
} from "@mui/material";
import UpdateOptions from "./UpdateOptions";
import PersonalInformation from "./PersonalInformation";
import EndDialog from "./EndDialog";
const ManagerEmployeeDialog = (props) => {
  const { handleClose } = props;
  const [openEndDialog, setOpenEndDialog] = useState(false);
  return (
    <div>
      <Dialog open={true} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Cập nhật diễn biến
          <IconButton onClick={() => handleClose()}>
            <Icon color="error">close</Icon>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid item container xs={12} sx={{ marginBottom: "30px" }}>
            <PersonalInformation />
          </Grid>
          <Grid item container xs={12}>
            <UpdateOptions />
          </Grid>
        </DialogContent>

        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{ mb: 2, background: "#d32f2f" }}
            onClick={() => setOpenEndDialog(true)}
          >
            Kết thúc
          </Button>
          <Button
            variant="contained"
            sx={{ mb: 2, background: "#FF9E43" }}
            onClick={handleClose}
          >
            Hủy
          </Button>
        </DialogActions>
        {openEndDialog && (
          <EndDialog handleClose={() => setOpenEndDialog(false)} />
        )}
      </Dialog>
    </div>
  );
};

export default ManagerEmployeeDialog;
