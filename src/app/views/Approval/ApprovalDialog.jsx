import React, { useState } from "react";
import {
  Tooltip,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
  Box,
  IconButton,
  Icon,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Resume from "../../components/ProfileEmployee/Resume";
import Diploma from "../../components/ProfileEmployee/Diploma";
import CurriculumVitae from "../../components/ProfileEmployee/CurriculumVitae";
import AdditionalRequestDialog from "./AdditionalRequestDialog";
import AcceptDialog from "./AcceptDialog";
import RefuseDialog from "./RefuseDialog";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const ApprovalDialog = (props) => {
  const { handleClose } = props;
  const [value, setValue] = useState(0);
  const [shouldOpenRequestDialog, setShouldOpenRequestDialog] = useState(false);
  const [shouldOpenRefuseDialog, setShouldOpenRefuseDialog] = useState(false);
  const [shouldOpenAcceptDialog, setShouldOpenAcceptDialog] = useState(false);
  const employeeData = useSelector((state) => state?.Employee?.formData);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Dialog open={true} maxWidth={"lg"} fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Hồ sơ nhân viên
          <IconButton onClick={() => handleClose()}>
            <Icon color="error">close</Icon>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              orientation="vertical"
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="Hồ sơ" {...a11yProps(0)}></Tab>
              <Tab label="Sơ yếu lý lịch" {...a11yProps(1)}></Tab>
              <Tab label="Danh sách văn bằng" {...a11yProps(2)}></Tab>
            </Tabs>
            <TabPanel value={value} index={0} style={{ width: "100%" }}>
              <Resume
                employeeInfo={employeeData?.resGetDataEmployeeId}
                employeeCv={employeeData?.resGetFormEmployee}
              />
            </TabPanel>
            <TabPanel value={value} index={1} style={{ width: "100%" }}>
              <CurriculumVitae
                employeeInfo={employeeData?.resGetDataEmployeeId}
                employeeCv={employeeData?.resGetFormEmployee}
              />
            </TabPanel>
            <TabPanel value={value} index={2} style={{ width: "100%" }}>
              <Diploma employeeInfo={employeeData?.resGetDataEmployeeId} />
            </TabPanel>
          </Box>
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
            color="success"
            sx={{ mb: 1 }}
            onClick={() => {
              setShouldOpenAcceptDialog(true);
            }}
          >
            Duyệt
          </Button>
          <Button
            sx={{ mb: 1 }}
            variant="contained"
            color="primary"
            onClick={() => {
              setShouldOpenRequestDialog(true);
            }}
          >
            Yêu cầu bổ sung
          </Button>

          <Button
            variant="contained"
            color="error"
            sx={{ mb: 1 }}
            onClick={() => {
              setShouldOpenRefuseDialog(true);
            }}
          >
            Từ Chối
          </Button>
          <Button
            variant="contained"
            sx={{ background: "#FF9E43", mb: 1 }}
            onClick={() => handleClose()}
          >
            Hủy
          </Button>
        </DialogActions>
      </Dialog>

      {shouldOpenRequestDialog && (
        <AdditionalRequestDialog
          handleClose={() => setShouldOpenRequestDialog(false)}
          handleCloseAll={handleClose}
        />
      )}

      {shouldOpenAcceptDialog && (
        <AcceptDialog
          handleClose={() => {
            setShouldOpenAcceptDialog(false);
          }}
          handleCloseAll={handleClose}
        />
      )}

      {shouldOpenRefuseDialog && (
        <RefuseDialog
          handleClose={() => {
            setShouldOpenRefuseDialog(false);
          }}
          handleCloseAll={handleClose}
        />
      )}
    </div>
  );
};

export default ApprovalDialog;
