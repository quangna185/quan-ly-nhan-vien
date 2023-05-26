import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  Box,
  Icon,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Resume from "app/components/ProfileEmployee/Resume";
import CurriculumVitae from "app/components/ProfileEmployee/CurriculumVitae";
import Diploma from "app/components/ProfileEmployee/Diploma";
import { useSelector, useDispatch } from "react-redux";
import SendToLeaderDialog from "./SendToLeaderDialog";
import { updateFormEmployee } from "app/redux/actions/action";

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
const EmployeeRegisterDialog = (props) => {
  const { handleClose } = props;
  const [value, setValue] = useState(0);
  const [
    shouldOpenSendToLeadershipDialog,
    setShouldOpenSendToLeadershipDialog,
  ] = useState(false);
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.Employee.employeeData);
  const [employeeData, setEmployeeData] = useState(employee);

  useEffect(() => {
    setEmployeeData(employee);
  }, [employee]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
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
            <Resume employee={employeeData} />
          </TabPanel>
          <TabPanel value={value} index={1} style={{ width: "100%" }}>
            <CurriculumVitae employee={employeeData} />
          </TabPanel>
          <TabPanel value={value} index={2} style={{ width: "100%" }}>
            <Diploma employee={employeeData} />
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
        <Button variant="contained" color="primary" sx={{ mb: 2 }}>
          In
        </Button>
        <Button
          variant="contained"
          sx={{ mb: 2, background: "#7467EF" }}
          onClick={() => {
            dispatch(updateFormEmployee());
          }}
        >
          Lưu
        </Button>
        <Button
          variant="contained"
          sx={{ mb: 2, background: "#339999" }}
          onClick={() => {
            setShouldOpenSendToLeadershipDialog(true);
          }}
        >
          Gửi lãnh đạo
        </Button>
        <Button variant="contained" sx={{ mb: 2, background: "#FF9E43" }}>
          Hủy
        </Button>
      </DialogActions>
      {shouldOpenSendToLeadershipDialog && (
        <SendToLeaderDialog
          handleClose={() => {
            setShouldOpenSendToLeadershipDialog(false);
          }}
        />
      )}
    </Dialog>
    // <div>
    //   <Dialog open={true} maxWidth={"lg"} fullWidth={true}>
    //     <DialogTitle
    //       sx={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "space-between",
    //       }}
    //     >
    //       Hồ sơ nhân viên
    //       <IconButton onClick={() => handleClose()}>
    //         <Icon color="error">close</Icon>
    //       </IconButton>
    //     </DialogTitle>
    //     <DialogContent>
    //       <Box
    //         sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}
    //       >
    //         <Tabs
    //           orientation="vertical"
    //           variant="scrollable"
    //           value={value}
    //           onChange={handleChange}
    //           aria-label="Vertical tabs example"
    //           sx={{ borderRight: 1, borderColor: "divider" }}
    //         >
    //           <Tab label="Hồ sơ CV" {...a11yProps(0)} />
    //           <Tab label="Sơ yếu lý lịch" {...a11yProps(1)} />
    //           <Tab label="Hồ sơ văn bằng" {...a11yProps(2)} />
    //         </Tabs>
    //         <TabPanel value={value} index={0} style={{ width: "100%" }}>
    //           <Resume employee={employeeData} />
    //         </TabPanel>
    //         <TabPanel value={value} index={1} style={{ width: "100%" }}>
    //           <CurriculumVitae employee={employeeData} />
    //         </TabPanel>
    //         <TabPanel value={value} index={2} style={{ width: "100%" }}>
    //           <Diploma employee={employeeData} />
    //         </TabPanel>
    //       </Box>
    //     </DialogContent>
    //     <DialogActions
    //       sx={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Button variant="contained" color="primary" sx={{ mb: 2 }}>
    //         In
    //       </Button>
    //       <Button variant="contained" sx={{ mb: 2, background: "#7467EF" }}>
    //         Lưu
    //       </Button>
    //       <Button
    //         variant="contained"
    //         sx={{ mb: 2, background: "#339999" }}
    //         onClick={() => {
    //           setShouldOpenSendToLeadershipDialog(true);
    //         }}
    //       >
    //         Gửi lãnh đạo
    //       </Button>
    //       <Button variant="contained" sx={{ mb: 2, background: "#FF9E43" }}>
    //         Hủy
    //       </Button>
    //     </DialogActions>
    //     {shouldOpenSendToLeadershipDialog && (
    //       <SendToLeaderDialog
    //         handleClose={() => {
    //           setShouldOpenSendToLeadershipDialog(false);
    //         }}
    //       />
    //     )}
    //   </Dialog>
    // </div>
  );
};

export default EmployeeRegisterDialog;
