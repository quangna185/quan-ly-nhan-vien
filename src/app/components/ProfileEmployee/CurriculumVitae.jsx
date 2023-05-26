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
import MaterialTable from "@material-table/core";
import "./index.scss";
import { useSelector } from "react-redux";
import moment from "moment";
import CustomAvatar from "../Avatar/Avatar";
const CurriculumVitae = (props) => {
  const { employeeInfo, employeeCv, employee, display } = props;
  console.log("a", employeeInfo);
  console.log("b", employeeCv);
  const gender = useSelector((state) => state.Employee?.gender);
  const columns = [
    { title: "Họ tên", field: "name" },
    {
      title: "Ngày sinh ",
      field: "dateOfBirth",
      render: (rowdata) => moment(rowdata).format("DD/MM/YYYY"),
    },
    {
      title: "Giới tính",
      field: "gender",
      render: (rowData) => gender[rowData.gender]?.name,
    },
    { title: "Mối quan hệ", field: "relation" },
  ];
  return (
    <div>
      <Grid container textAlign="center" alignItems={"center"}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: "550" }}>
            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontWeight: "550" }}>
            Độc lập - Tự do - Hạnh phúc{" "}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>-------------------------------------</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={14} padding={4} alignItems={"center"}>
        <Grid item xs={4} textAlign={"center"} display={display}>
          <CustomAvatar
            image={
              employeeInfo?.employeeInfo?.photoUrl || "assets/images/logo1.png"
            }
            displayButton={"none"}
          />
        </Grid>
        <Grid item xs={4} textAlign={"center"}>
          <CustomAvatar
            image={
              employeeInfo?.employeeInfo?.photoUrl || "assets/images/face-3.jpg"
            }
            displayButton={"none"}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            SƠ YẾU LÝ LỊCH
          </Typography>
        </Grid>
      </Grid>
      <Grid container margin={"10px 0 10px 0"}>
        <Grid item xs={12}>
          <Typography className=" content">I: BẢN THÂN</Typography>
        </Grid>
        <Grid container margin={"10px 0 10px 0"}>
          <Grid item xs={6} display={"flex"}>
            <Grid item xs={2.7}>
              <Typography className="title ">1.Họ và tên: </Typography>
            </Grid>
            <Grid item xs={9.3} marginTop={"-10px"}>
              <TextField
                type="text"
                fullWidth
                value={
                  employeeInfo?.employeeInfo?.fullName ||
                  employee?.employeeInfo?.fullName
                }
                sx={{
                  "& fieldset": { border: "none" },
                  borderBottom: "2px dotted !important",
                  height: "27px !important",
                }}
                size="small"
              />
            </Grid>
          </Grid>
          <Grid item xs={6} display={"flex"}>
            <Grid xs={2.7}>
              <Typography className="title">2.Biệt danh: </Typography>
            </Grid>
            <Grid xs={9.3} marginTop={"-10px"}>
              <TextField
                type="text"
                fullWidth
                sx={{
                  "& fieldset": { border: "none" },
                  borderBottom: "2px dotted !important",
                  height: "27px !important",
                }}
                size="small"
                value={employeeCv?.resume?.commonName}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container margin={"10px 0 10px 0"}>
          <Grid item xs={6} display={"flex"}>
            <Grid xs={2.8}>
              <Typography className="title">3.Ngày sinh: </Typography>
            </Grid>
            <Grid xs={9.2} marginTop={"-10px"}>
              <TextField
                type="text"
                fullWidth
                value={moment(
                  employeeInfo?.employeeInfo?.dateOfBirth ||
                    employee?.employeeInfo?.dateOfBirth
                ).format("DD-MM-YYYY")}
                sx={{
                  "& fieldset": { border: "none" },
                  borderBottom: "2px dotted !important",
                  height: "27px !important",
                }}
                size="small"
              />
            </Grid>
          </Grid>
          <Grid item xs={6} display={"flex"}>
            <Grid xs={2.6}>
              <Typography className="title">4.Giới tính: </Typography>
            </Grid>
            <Grid xs={9.4} marginTop={"-10px"}>
              <TextField
                type="text"
                fullWidth
                value={
                  gender[
                    employeeInfo?.employeeInfo?.gender ||
                      employee?.employeeInfo?.gender
                  ]?.name
                }
                sx={{
                  "& fieldset": { border: "none" },
                  borderBottom: "2px dotted !important",
                  height: "27px !important",
                }}
                size="small"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid display={"flex"} item xs={12} margin={"10px 0 10px 0"}>
          <Grid xs={1.9}>
            <Typography className="title">5.Chỗ ở hiện nay: </Typography>
          </Grid>
          <Grid xs={10.1} marginTop={"-10px"}>
            <TextField
              type="text"
              fullWidth
              value={employeeCv?.resume?.currentAddress}
              sx={{
                "& fieldset": { border: "none" },
                borderBottom: "2px dotted !important",
                height: "27px !important",
              }}
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container margin={"10px 0 10px 0"}>
          <Grid xs={6} display={"flex"}>
            <Grid xs={3.5}>
              <Typography className="title">6.Số điện thoại:</Typography>
            </Grid>
            <Grid xs={8.5} marginTop={"-10px"}>
              <TextField
                type="text"
                value={
                  employeeInfo?.employeeInfo?.phone ||
                  employee?.employeeInfo?.phone
                }
                fullWidth
                sx={{
                  "& fieldset": { border: "none" },
                  borderBottom: "2px dotted !important",
                  height: "27px !important",
                }}
                size="small"
              />
            </Grid>
          </Grid>
          <Grid xs={6} display={"flex"}>
            <Grid xs={2}>
              <Typography className="title">7.Email: </Typography>
            </Grid>
            <Grid xs={10} marginTop={"-10px"}>
              <TextField
                type="text"
                fullWidth
                value={
                  employeeInfo?.employeeInfo?.email ||
                  employee?.employeeInfo?.email
                }
                sx={{
                  "& fieldset": { border: "none" },
                  borderBottom: "2px dotted !important",
                  height: "27px !important",
                }}
                size="small"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container margin={"10px 0 10px 0"}>
          <Grid item xs={6} display={"flex"}>
            <Grid xs={2.7}>
              <Typography className="title">8.Dân dộc: </Typography>
            </Grid>
            <Grid xs={9.3} marginTop={"-10px"}>
              <TextField
                type="text"
                fullWidth
                sx={{
                  "& fieldset": { border: "none" },
                  borderBottom: "2px dotted !important",
                  height: "27px !important",
                }}
                size="small"
                value={employeeCv?.resume?.ethnicity}
              />
            </Grid>
          </Grid>
          <Grid item xs={6} display={"flex"}>
            <Grid xs={2.7}>
              <Typography className="title">9.Tôn giáo: </Typography>
            </Grid>
            <Grid xs={9.3} marginTop={"-10px"}>
              <TextField
                type="text"
                fullWidth
                sx={{
                  "& fieldset": { border: "none" },
                  borderBottom: "2px dotted !important",
                  height: "27px !important",
                }}
                size="small"
                value={employeeCv?.resume?.religion}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container margin={"10px 0 10px 0"}>
          <Grid display={"flex"} xs={6}>
            <Grid xs={4.5}>
              <Typography className="title">10.Số thẻ căn cước: </Typography>
            </Grid>
            <Grid xs={7.5} marginTop={"-10px"}>
              <TextField
                type="text"
                fullWidth
                value={
                  employeeInfo?.employeeInfo?.citizenId ||
                  employee?.employeeInfo?.citizenId
                }
                sx={{
                  "& fieldset": { border: "none" },
                  borderBottom: "2px dotted !important",
                  height: "27px !important",
                }}
                size="small"
              />
            </Grid>
          </Grid>
          <Grid display={"flex"} xs={6}>
            <Grid xs={3}>
              <Typography className="title">11.Ngày cấp: </Typography>
            </Grid>
            <Grid xs={9} marginTop={"-10px"}>
              <TextField
                type="text"
                fullWidth
                sx={{
                  "& fieldset": { border: "none" },
                  borderBottom: "2px dotted !important",
                  height: "27px !important",
                }}
                size="small"
                value={moment(employeeCv?.resume?.citizenIdIssuanceDate).format(
                  "DD-MM-YYYY"
                )}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid display={"flex"} xs={12} margin={"10px 0 10px 0"}>
          <Grid xs={1.5}>
            <Typography className="title">12.Nơi cấp: </Typography>
          </Grid>
          <Grid xs={10.5} marginTop={"-10px"}>
            <TextField
              type="text"
              fullWidth
              sx={{
                "& fieldset": { border: "none" },
                borderBottom: "2px dotted !important",
                height: "27px !important",
              }}
              size="small"
              value={employeeCv?.resume?.citizenIdIssuingAuthority}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className=" content"
            paddingBottom="20px"
            paddingTop="20px"
          >
            II: QUAN HỆ GIA ĐÌNH
          </Typography>
          <Typography className=" content--note">
            Ghi rõ họ tên, năm sinh, nghề nghiệp, nơi công tác của bố mẹ đẻ, anh
            chị em ruột, vợ(hoặc chồng), con
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box width="100%" overflow="auto">
            <MaterialTable
              title={""}
              data={employeeInfo?.familyRelations || employee?.familyRelations}
              columns={columns}
              options={{
                rowStyle: (rowData, index) => {
                  return {
                    backgroundColor: index % 2 === 1 ? "#e2dcdc" : "#FFF",
                  };
                },
                maxBodyHeight: "1000px",
                minBodyHeight: "200px",
                headerStyle: {
                  backgroundColor: "#fff",
                  color: "black",
                },
                padding: "default",
                toolbar: false,
                paging: false,
              }}
            />
          </Box>
        </Grid>
        <Grid>
          <Typography className="title--pledge">LỜI CAM ĐOAN</Typography>
          <Typography className="Des--pledge">
            Tôi xin cam đoan những lời khai trên là đúng sự thực và chịu trách
            nhiệm về những lời khai đó. Nếu sau này cơ quan có thẩm quyền phát
            hiện vấn đề gì không đúng. Tôi xin chấp hành biện pháp xử lý theo
            quy định.
          </Typography>
        </Grid>

        <Grid container>
          <Grid xs={7}></Grid>
          <Grid className="signer--name" sx={5}>
            <Typography className="addres">
              Hà Nội, ngày 21 tháng 4 năm 2023
            </Typography>
            <Typography className="signer">Người viết ký tên</Typography>
            <Typography className="name">
              {employeeInfo?.employeeInfo?.fullName}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CurriculumVitae;
