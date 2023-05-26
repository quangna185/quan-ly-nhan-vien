import React from "react";
import {
  Typography,
  Grid,
  Box,
  Select,
  TextField,
  MenuItem,
  IconButton,
  Icon,
  Tooltip,
} from "@mui/material";
import "./index.scss";
import CakeIcon from "@mui/icons-material/Cake";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FemaleIcon from "@mui/icons-material/Female";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import CustomAvatar from "../Avatar/Avatar";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import moment from "moment";
const Resume = (props) => {
  const { employeeInfo, employeeCv, employee, display } = props;
  console.log(employeeInfo);
  console.log(employeeCv);
  const team = useSelector((state) => state.Employee?.team);
  const gender = useSelector((state) => state.Employee?.gender);
  return (
    <div>
      <Grid
        container
        className="resume-container"
        xs={12}
        spacing={2}
        sx={{ marginTop: "5px" }}
      >
        <Grid
          container
          direction={"column"}
          xs={4}
          rowSpacing={2}
          className="resume-left"
        >
          <Grid item>
            <CustomAvatar
              image={
                employeeInfo?.employeeInfo?.photoUrl ||
                "assets/images/face-3.jpg"
              }
              displayButton={"none"}
            />
          </Grid>
          <Grid item display={display}>
            <CustomAvatar
              image={
                employeeInfo?.employeeInfo?.photoUrl ||
                "assets/images/logo1.png"
              }
              displayButton={"none"}
            />
          </Grid>

          <Grid style={{ marginTop: "170px" }}>
            <Grid>
              <Typography
                variant="h5"
                textAlign={"center"}
                textTransform={"uppercase"}
              >
                {employeeInfo?.employeeInfo?.fullName ||
                  employee?.employeeInfo?.fullName}
              </Typography>
              <Typography variant="subtitle1" textAlign={"center"}>
                {team[employeeInfo?.employeeInfo?.teamId]?.name ||
                  team[employee?.employeeInfo?.teamId]?.name}
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction={"column"}
              rowSpacing={2}
              paddingLeft={"15px"}
              marginTop={"15px"}
            >
              <Grid margin={"10px 0 10px 0"}>
                <Typography variant="h6" component="h7" fontSize={"17px"}>
                  THÔNG TIN CÁ NHÂN
                </Typography>
              </Grid>
              <Grid className="info">
                <CakeIcon className="info__icon" />
                {moment(
                  employeeInfo?.employeeInfo?.dateOfBirth ||
                    employee?.employeeInfo?.dateOfBirth
                ).format("DD-MM-YYYY")}
              </Grid>
              <Grid className="info">
                <LocalPhoneIcon className="info__icon" />
                {employeeInfo?.employeeInfo?.phone ||
                  employee?.employeeInfo?.phone}
              </Grid>
              <Grid className="info">
                <FemaleIcon className="info__icon" />
                {
                  gender[
                    employeeInfo?.employeeInfo?.gender ||
                      employee?.employeeInfo?.gender
                  ]?.name
                }
              </Grid>
              <Grid className="info">
                <EmailIcon className="info__icon" />
                {employeeInfo?.employeeInfo?.email ||
                  employee?.employeeInfo?.email}
              </Grid>
              <Grid className="info">
                <HomeIcon className="info__icon" />
                {employeeInfo?.employeeInfo?.address ||
                  employee?.employeeInfo?.address}
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction={"column"}
              rowSpacing={2}
              paddingLeft={"15px"}
              marginTop={"15px"}
            >
              <Grid>
                <Typography
                  variant="h6"
                  component="h2"
                  fontSize={"17px"}
                  marginBottom={"15px"}
                >
                  KỸ NĂNG
                </Typography>
              </Grid>
              <Grid marginTop={"-20px"} width={"90%"} display={display}>
                <TextField
                  type="text"
                  sx={{
                    "& fieldset": { border: "none" },
                    borderBottom: "2px dotted !important",
                    height: "28px !important",
                  }}
                  size="small"
                  InputProps={{
                    inputProps: { style: { color: "#fff" } },
                    readOnly: status,
                  }}
                  value={employeeCv?.cv?.skill}
                />
              </Grid>
              <Grid>
                <Typography variant="body1" fontSize={16}>
                  {employeeCv?.cv?.skill}
                </Typography>
              </Grid>
              <Grid></Grid>
            </Grid>
            <Grid
              item
              container
              direction={"column"}
              rowSpacing={2}
              paddingLeft={"15px"}
              marginTop={"10px"}
            >
              <Grid>
                <Typography
                  variant="h6"
                  component="h2"
                  fontSize={"17px"}
                  marginBottom={"15px"}
                  marginTop={"5px"}
                >
                  SỞ THÍCH
                </Typography>
              </Grid>
              <Grid marginTop={"-20px"} width={"90%"} display={display}>
                <TextField
                  type="text"
                  sx={{
                    "& fieldset": { border: "none" },
                    borderBottom: "2px dotted !important",
                    height: "28px !important",
                  }}
                  InputProps={{
                    inputProps: { style: { color: "#fff" } },
                    readOnly: status,
                  }}
                  size="small"
                  value={employeeCv?.cv?.hobby}
                />
              </Grid>
              <Grid>
                <Typography variant="body1" fontSize={16}>
                  {employeeCv?.cv?.hobby}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          xs={8}
          className="resume-right"
          direction={"column"}
          spacing={4}
        >
          <Grid>
            <Grid style={{ paddingTop: "10px" }}>
              <Typography variant="h6" component="h2" className="info">
                <CrisisAlertIcon className="icons" />
                MỤC TIÊU NGHỀ NGHIỆP
              </Typography>
              <Box sx={{ borderBottom: "2px dotted" }} display={display}>
                <TextField
                  sx={{
                    "& fieldset": { border: "none" },
                    height: "28px",
                  }}
                  size="small"
                  value={employeeCv?.cv?.careerGoal}
                />
              </Box>
              <Grid style={{ paddingTop: "15px" }}>
                <Typography variant="body1" fontSize={16}>
                  {employeeCv?.cv?.careerGoal}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid marginTop={"20px"}>
            <Grid>
              <Typography variant="h6" component="h2" className="info">
                <SchoolIcon className="icons" />
                HỌC VẤN
              </Typography>
              <Grid container paddingTop={"10px"}>
                <Grid xs={7.5}>
                  <Typography fontWeight={"600"}>
                    Chuyên ngành:Công nghệ thông tin
                  </Typography>
                </Grid>
                <Grid xs={4.5}>
                  <Typography fontWeight={"600"}>
                    25-05-2018 - 18-05-2023
                  </Typography>
                </Grid>
              </Grid>
              <Grid xs={12} item>
                <Typography>Học viễn công nghệ bưu chính viễn thông</Typography>
              </Grid>
              <Grid xs={12} item>
                <Typography>Tốt nghiệp loại Khá</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Grid
              marginBottom={"10px"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: " space-between",
              }}
            >
              <Typography variant="h6" component="h2" className="info">
                <BadgeIcon className="icons" />
                KINH NGHIỆM LÀM VIỆC
              </Typography>
              <AddIcon
                style={{
                  display: display,
                }}
                onClick={() => {
                  handleAddTextField;
                }}
              />
            </Grid>
            <Grid
              item
              container
              xs={12}
              justifyContent={"space-between"}
              columnSpacing={{ xs: 1, sm: 2 }}
              marginTop={2}
              display={display}
            >
              <Grid container display={"flex"}>
                <Grid xs={1.5}>
                  <Typography className="title" fontWeight={"600"}>
                    Vị trí:{" "}
                  </Typography>
                </Grid>
                <Grid xs={10.5} marginTop={"-13px"}>
                  <TextField
                    type="text"
                    fullWidth
                    sx={{
                      "& fieldset": { border: "none" },
                      borderBottom: "2px dotted !important",
                      height: "28px !important",
                    }}
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid display={"flex"} marginTop={"10px"}>
                <Grid xs={2.5}>
                  <Typography className="title" fontWeight={"600"}>
                    Tên công ty:
                  </Typography>
                </Grid>
                <Grid xs={9.5} marginTop={"-13px"}>
                  <TextField
                    type="text"
                    fullWidth
                    sx={{
                      "& fieldset": { border: "none" },
                      borderBottom: "2px dotted !important",
                      height: "28px !important",
                    }}
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid container marginTop={"10px"}>
                <Grid item xs={12} display={"flex"}>
                  <Grid item xs={2.6}>
                    <Typography fontWeight={"600"} className="title">
                      Ngày bắt đầu:
                    </Typography>
                  </Grid>
                  <Grid xs={9.4} marginTop={"-13px"}>
                    <TextField
                      type="date"
                      fullWidth
                      sx={{
                        "& fieldset": { border: "none" },
                        borderBottom: "2px dotted !important",
                        height: "28px !important",
                      }}
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container marginTop={"10px"}>
                <Grid item xs={12} display={"flex"}>
                  <Grid item xs={2.7}>
                    <Typography fontWeight={"600"} className="title">
                      Ngày kết thúc:
                    </Typography>
                  </Grid>
                  <Grid xs={9.3} marginTop={"-13px"}>
                    <TextField
                      type="date"
                      fullWidth
                      sx={{
                        "& fieldset": { border: "none" },
                        borderBottom: "2px dotted !important",
                        height: "28px !important",
                      }}
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container marginTop={"10px"}>
                <Grid item xs={1.5}>
                  <Typography fontWeight={"600"} className="title">
                    Mô tả:
                  </Typography>
                </Grid>
                <Grid xs={10.5} marginTop={"-13px"}>
                  <TextField
                    type="text"
                    fullWidth
                    sx={{
                      "& fieldset": { border: "none" },
                      borderBottom: "2px dotted !important",
                      height: "28px !important",
                    }}
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {employeeCv?.cv?.workExperiences?.map((workExperience) => {
            return (
              <Grid>
                <Grid item justifyContent={"space-between"}>
                  <Grid container display={"flex"}>
                    <Grid xs={7.5}>
                      <Typography variant="subtitle1" fontSize={17}>
                        <b>Tên công ty:</b> {workExperience.company}
                      </Typography>
                    </Grid>
                    <Grid xs={4.5}>
                      <Typography
                        textTransform={"uppercase"}
                        variant="subtitle1"
                        fontWeight={600}
                      >
                        {moment(workExperience.startDate).format("DD-MM-YYYY")}{" "}
                        - {moment(workExperience.endDate).format("DD-MM-YYYY")}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid xs={12}>
                    <Typography variant="subtitle1" fontSize={16}>
                      <b>Mô tả công việc:</b> {workExperience.detail}
                    </Typography>
                  </Grid>
                  <Grid xs={12}>
                    <Typography variant="body1" fontSize={16}>
                      <b>Vị trí: </b>
                      {workExperience.position}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
