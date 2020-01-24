import React from "react";
import { makeStyles } from "@material/ui/core/styles";
import Stepper from "@material/ui/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({}));

function getSteps() {
  return ["Information", "Account"];
}

export default function StepperForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return "Information Component";
      case 1:
        return "Account component";
      default:
        return "Unknown stepIndex";
    }
  }
}
