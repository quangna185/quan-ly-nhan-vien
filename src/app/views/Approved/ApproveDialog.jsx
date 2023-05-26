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
import { useSelector } from "react-redux";
import Resume from "app/components/ProfileEmployee/Resume";
import Diploma from "app/components/ProfileEmployee/Diploma";
import CurriculumVitae from "app/components/ProfileEmployee/CurriculumVitae";
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

const ApproveDialog = (props) => {
  const { handleClose } = props;
  const [value, setValue] = useState(0);
  const employeeData = useSelector((state) => state?.Employee?.formData);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog open={true} maxWidth={"lg"} fullWidth={true}>
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
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
          }}
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
              display={"none"}
            />
          </TabPanel>
          <TabPanel value={value} index={1} style={{ width: "100%" }}>
            <CurriculumVitae
              employeeInfo={employeeData?.resGetDataEmployeeId}
              employeeCv={employeeData?.resGetFormEmployee}
              display={"none"}
            />
          </TabPanel>
          <TabPanel value={value} index={2} style={{ width: "100%" }}>
            <Diploma employeeInfo={employeeData?.resGetDataEmployeeId} />
          </TabPanel>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ApproveDialog;
