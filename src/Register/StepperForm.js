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
