import React from "react";
import TextField from "@material-ui/core/TextField";
import { Grid, MenuItem } from "@mui/material";
import CustomAvatar from "app/components/Avatar/Avatar";
import { useSelector } from "react-redux";
const EmployeeInfo = (props) => {
  const { employeeInfoValues, setFieldValue, errors, touched } = props;
  const genderItem = useSelector((state) => state.Employee?.gender);
  const teamItem = useSelector((state) => state.Employee?.team);
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item container xs={12} spacing={4}>
          <Grid item container xs={9}>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={4}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  id="employeeInfo.code"
                  name="employeeInfo.code"
                  label="Mã nhân viên"
                  value={employeeInfoValues?.employeeInfo?.code}
                  onChange={(event) => {
                    setFieldValue("employeeInfo.code", event.target.value);
                  }}
                  error={
                    touched.employeeInfo?.code &&
                    Boolean(errors.employeeInfo?.code)
                  }
                  helperText={
                    touched.employeeInfo?.code && errors.employeeInfo?.code
                  }
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  id="employeeInfo.fullName"
                  name="employeeInfo.fullName"
                  label="Tên nhân viên"
                  value={employeeInfoValues?.employeeInfo?.fullName}
                  onChange={(event) => {
                    setFieldValue("employeeInfo.fullName", event.target.value);
                  }}
                  error={
                    touched.employeeInfo?.fullName &&
                    Boolean(errors.employeeInfo?.fullName)
                  }
                  helperText={
                    touched.employeeInfo?.fullName &&
                    errors.employeeInfo?.fullName
                  }
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="small"
                  variant="outlined"
                  fullWidth
                  id="employeeInfo.dateOfBirth"
                  name="employeeInfo.dateOfBirth"
                  type="date"
                  label="Ngày sinh"
                  value={employeeInfoValues?.employeeInfo?.dateOfBirth}
                  onChange={(event) => {
                    setFieldValue(
                      "employeeInfo.dateOfBirth",
                      event.target.value
                    );
                  }}
                  error={
                    touched.employeeInfo?.dateOfBirth &&
                    Boolean(errors.employeeInfo?.dateOfBirth)
                  }
                  helperText={
                    touched.employeeInfo?.dateOfBirth &&
                    errors.employeeInfo?.dateOfBirth
                  }
                />
              </Grid>
            </Grid>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={4}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  id="employeeInfo.phone"
                  name="employeeInfo.phone"
                  label="Số điện thoại"
                  value={employeeInfoValues?.employeeInfo?.phone}
                  onChange={(event) => {
                    setFieldValue("employeeInfo.phone", event.target.value);
                  }}
                  error={
                    touched.employeeInfo?.phone &&
                    Boolean(errors.employeeInfo?.phone)
                  }
                  helperText={
                    touched.employeeInfo?.phone && errors.employeeInfo?.phone
                  }
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  size="small"
                  variant="outlined"
                  select
                  fullWidth
                  id="employeeInfo.gender"
                  name="employeeInfo.gender"
                  label="GIới tính"
                  value={employeeInfoValues?.employeeInfo?.gender}
                  onChange={(event) => {
                    setFieldValue("employeeInfo.gender", event.target.value);
                  }}
                  error={
                    touched.employeeInfo?.gender &&
                    Boolean(errors.employeeInfo?.gender)
                  }
                  helperText={
                    touched.employeeInfo?.gender && errors.employeeInfo?.gender
                  }
                >
                  {genderItem.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  id="employeeInfo.email"
                  name="employeeInfo.email"
                  label="Email"
                  value={employeeInfoValues?.employeeInfo?.email}
                  onChange={(event) => {
                    setFieldValue("employeeInfo.email", event.target.value);
                  }}
                  error={
                    touched.employeeInfo?.email &&
                    Boolean(errors.employeeInfo?.email)
                  }
                  helperText={
                    touched.employeeInfo?.email && errors.employeeInfo?.email
                  }
                />
              </Grid>
            </Grid>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={6}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  select
                  id="employeeInfo.teamId"
                  name="employeeInfo.teamId"
                  label="Nhóm"
                  value={employeeInfoValues?.employeeInfo?.teamId}
                  onChange={(event) => {
                    setFieldValue("employeeInfo.teamId", event.target.value);
                  }}
                  error={
                    touched.employeeInfo?.teamId &&
                    Boolean(errors.employeeInfo?.teamId)
                  }
                  helperText={
                    touched.employeeInfo?.teamId && errors.employeeInfo?.teamId
                  }
                >
                  {teamItem.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  id="employeeInfo.citizenId"
                  name="employeeInfo.citizenId"
                  label="Căn cước công dân"
                  value={employeeInfoValues?.employeeInfo?.citizenId}
                  onChange={(event) => {
                    setFieldValue("employeeInfo.citizenId", event.target.value);
                  }}
                  error={
                    touched.employeeInfo?.citizenId &&
                    Boolean(errors.employeeInfo?.citizenId)
                  }
                  helperText={
                    touched.employeeInfo?.citizenId &&
                    errors.employeeInfo?.citizenId
                  }
                />
              </Grid>
            </Grid>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  id="employeeInfo.address"
                  name="employeeInfo.address"
                  label="Địa chỉ"
                  value={employeeInfoValues?.employeeInfo?.address}
                  onChange={(event) => {
                    setFieldValue("employeeInfo.address", event.target.value);
                  }}
                  error={
                    touched.employeeInfo?.address &&
                    Boolean(errors.employeeInfo?.address)
                  }
                  helperText={
                    touched.employeeInfo?.address &&
                    errors.employeeInfo?.address
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={3}>
            <CustomAvatar
              formikRoot={employeeInfoValues}
              image={employeeInfoValues?.employeeInfo.photoUrl}
              displayButton={""}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default EmployeeInfo;
