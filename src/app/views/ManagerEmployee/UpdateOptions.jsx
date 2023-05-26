import React from "react";
import { Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import RegisterDocument from "./RegisterDocument";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SalaryIncrease from "./SalaryIncrease";
import Promote from "./Promote";
import SuggestionOfAdvice from "./SuggestionOfAdvice";
const UpdateOptions = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                background: "rgba(53, 71, 126, 0.9)",
                height: 64,
                borderRadius: "4px",
                color: "#fff",
              }}
            >
              <Typography>Đăng ký hồ sơ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RegisterDocument />
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary
              sx={{
                background: "rgba(53, 71, 126, 0.9)",
                height: 64,
                borderRadius: "4px",
                color: "#fff",
              }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Tăng lương</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SalaryIncrease />
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary
              sx={{
                background: "rgba(53, 71, 126, 0.9)",
                height: 64,
                borderRadius: "4px",
                color: "#fff",
              }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Thăng chức</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Promote />
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary
              sx={{
                background: "rgba(53, 71, 126, 0.9)",
                height: 64,
                borderRadius: "4px",
                color: "#fff",
              }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Đề xuất tham mưu</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SuggestionOfAdvice />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateOptions;
