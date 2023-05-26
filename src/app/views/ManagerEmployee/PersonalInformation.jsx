import React from "react";
import {
  Dialog,
  DialogTitle,
  Box,
  Button,
  Card,
  styled,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Icon,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
const PersonalInformation = () => {
  return (
    <div>
      <Grid item container xs={12}>
        <Grid item container xs={4}>
          {/* <Grid item xs={12}>
          <Typography
            variant="h5"
            textAlign={"center"}
            textTransform={"uppercase"}
          ></Typography>
          <Typography variant="subtitle1" textAlign={"center"}></Typography>
        </Grid> */}
        </Grid>
        <Grid item container xs={8}>
          <Typography
            sx={{
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            Thông tin cơ bản
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <TextField
                size="small"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                label="Họ và tên"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                size="small"
                InputProps={{
                  readOnly: true,
                }}
                label="Mã nhân viên"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                size="small"
                InputProps={{
                  readOnly: true,
                }}
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                size="small"
                InputProps={{
                  readOnly: true,
                }}
                label="Số điện thoại"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                type={"date"}
                size="small"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                label="Ngày sinh"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                size="small"
                InputProps={{
                  readOnly: true,
                }}
                label="Vị trí"
                variant="outlined"
              ></TextField>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalInformation;
