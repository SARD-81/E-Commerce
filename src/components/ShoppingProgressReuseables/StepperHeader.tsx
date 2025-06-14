import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  styled,
  Box,
} from "@mui/material";

interface IStepperHeaderProps {
  activeStep: number;
}

// add customs step styles
const CustomStepLabel = styled(StepLabel)(() => ({
  "& .MuiStepLabel-labelContainer": {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    gap: "4px",
  },
  "& .MuiStepLabel-iconContainer": {
    order: 2,
    padding: 0,
  },
  "& .MuiStepLabel-label": {
    order: 1,
    marginTop: "0 !important",
    marginBottom: "10px !important",
  },
}));

// need to add customs style
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 42,
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.divider,
    borderTopWidth: 1,
  },
}));

const labels = ["ورود", "آدرس", "خلاصه خرید"];

const StepperHeader: React.FC<IStepperHeaderProps> = ({ activeStep }) => (
  <Box sx={{ maxWidth: 900, mx: "auto", width: "100%", p: "20px 0" }}>
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      connector={<CustomConnector />}
      sx={{
        direction: "ltr",
        width: "100%",
        "& .MuiStep-root": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      {labels.map((label) => (
        <Step key={label}>
          <CustomStepLabel sx={{ flexDirection: "column-reverse" }}>
            {label}
          </CustomStepLabel>
        </Step>
      ))}
    </Stepper>
  </Box>
);

export default StepperHeader;
