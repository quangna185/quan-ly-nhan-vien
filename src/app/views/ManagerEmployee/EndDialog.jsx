import React from "react";
import {
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
  IconButton,
  TextField,
  Icon,
} from "@mui/material";

const EndDialog = (props) => {
  const { handleClose } = props;
  return (
    <div>
      <Dialog open={true} maxWidth="md" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            borderBottom: "1px solid #ccc",
          }}
        >
          <Typography>Biểu mẫu đơn xin nghỉ việc</Typography>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: "10px" }}
          >
            <Icon color="error">close</Icon>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            spacing={2}
            style={{
              fontFamily: '"Times New Roman", Times, serif',
              padding: 15,
            }}
          >
            <Grid container item sm={12} xs={12} justifyContent="center">
              <Typography variant="h5" textTransform="uppercase">
                Cộng hòa xã hội Chủ Nghĩa Việt Nam
              </Typography>
            </Grid>
            <Grid
              container
              item
              sm={12}
              xs={12}
              justifyContent="center"
              paddingTop={"0px important"}
            >
              <Typography variant="h6">Độc lập - Tự do - Hạnh phúc</Typography>
            </Grid>
            <Grid container item sm={12} xs={12} justifyContent="center">
              <Typography>-------------------------------------</Typography>
            </Grid>
            <Grid
              sx={{ pt: 8, pb: 8 }}
              container
              item
              sm={12}
              xs={12}
              justifyContent="center"
            >
              <Typography variant="h5">ĐƠN XIN NGHỈ VIỆC</Typography>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <Typography>Kính gửi: Ban giám đốc công ty ABC</Typography>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={1.25} paddingTop={"15px"}>
                  <Typography>Tên tôi là:</Typography>
                </Grid>
                <Grid item xs={10.75}>
                  <TextField
                    type="text"
                    fullWidth
                    sx={{
                      "& fieldset": { border: "none" },
                      borderBottom: "2px dotted !important",
                      height: "30px !important",
                    }}
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid item container xs={12}>
                <Grid item xs={1} paddingTop={"15px"}>
                  <Typography>Bộ phận:</Typography>
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    type="text"
                    fullWidth
                    sx={{
                      "& fieldset": { border: "none" },
                      borderBottom: "2px dotted !important",
                      height: "30px !important",
                    }}
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} paddingTop={"15px"}>
                <Typography>
                  Nay tôi trình đơn này kính xin Ban Giám đốc Công ty chấp thuận
                  cho tôi được
                </Typography>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={2.5} paddingTop={"15px"}>
                  <Typography>Thôi việc kể từ ngày:</Typography>
                </Grid>
                <Grid item xs={9.5}>
                  <TextField
                    type="date"
                    fullWidth
                    sx={{
                      "& fieldset": { border: "none" },
                      borderBottom: "2px dotted !important",
                      height: "30px !important",
                    }}
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={2.3} paddingTop={"15px"}>
                  <Typography>Lý do xin thôi việc:</Typography>
                </Grid>
                <Grid item xs={9.7}>
                  <TextField
                    type="text"
                    fullWidth
                    sx={{
                      "& fieldset": { border: "none" },
                      borderBottom: "2px dotted !important",
                      height: "30px !important",
                    }}
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} paddingTop={"15px"}>
                <Typography>
                  Tôi thực viện việc báo trước là:30 ngày,kể từ ngày làm đơn
                </Typography>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={4.5} paddingTop={"15px"}>
                  <Typography>
                    Tôi sẽ tiến hành bàn giao công việc cho:
                  </Typography>
                </Grid>
                <Grid item xs={7.5}>
                  <TextField
                    type="text"
                    fullWidth
                    sx={{
                      "& fieldset": { border: "none" },
                      borderBottom: "2px dotted !important",
                      height: "30px !important",
                    }}
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={1} paddingTop={"15px"}>
                  <Typography>Bộ phận:</Typography>
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    type="text"
                    fullWidth
                    sx={{
                      "& fieldset": { border: "none" },
                      borderBottom: "2px dotted !important",
                      height: "30px !important",
                    }}
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid>
                <Typography paddingTop={"15px"}>
                  Tôi rất hài lòng vì thời gian làm việc cho Công ty.Cảm ơn Ban
                  Giám đốc
                </Typography>
                <Typography paddingTop={"15px"}>
                  Công ty đã hỗ trợ và giúp đơ tôi.
                </Typography>
              </Grid>
              <Grid>
                <Typography paddingTop={"15px"}>
                  Kính đề nghị ban giám đốc xem xét và giải quyết
                </Typography>
              </Grid>
            </Grid>
            <Grid xs={12} item container>
              <Grid xs={6} item></Grid>
              <Grid
                xs={6}
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Grid>
                  <Typography>Hà Nội, ngày 18 tháng 8 năm 2023</Typography>
                </Grid>
                <Grid>
                  <Typography>Người làm đơn</Typography>
                </Grid>
                <Grid>
                  <Typography>quang</Typography>
                </Grid>
              </Grid>
            </Grid>
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
            className="button-cancel"
            variant="contained"
            sx={{ mb: 2, background: "#FF9E43" }}
            onClick={handleClose}
          >
            Hủy
          </Button>
          <Button
            className="button-confirm1"
            variant="contained"
            type="submit"
            sx={{ mb: 2 }}
            color="primary"
          >
            Trình lãnh đạo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EndDialog;
