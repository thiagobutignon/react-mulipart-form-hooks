import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Information from "./Information";
import Account from "./Account";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useStyles = makeStyles(theme => ({}));

function getSteps() {
  return ["Information", "Account"];
}

const informationSchema = yup.object().shape({
  firstName: yup.string().required("This field is required."),
  lastname: yup.string().required("This field is required."),
  nickname: yup.string().required("This field is required.")
});

const accountSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email.")
    .required("This field is required."),
  password: yup
    .string()
    .required("This field is required.")
    .min(3, "Please your password have less than 3 letters."),
  confirmPassword: yup
    .string()
    .required("This field is required.")
    .min(3, "This field at least 3 characters.")
    .oneOf([yup.ref("password"), null], "Password not match.")
});

export default function StepperForm() {
  const classes = useStyles();

  const informationForm = useForm({
    validationSchema: informationSchema
  });
  const accountForm = useForm({
    validationSchema: accountSchema
  });

  const onSubmit = data => {
    console.log(data);

    handleNext();
  };

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
        return <Information formProps={informationForm} />;
      case 1:
        return <Account formProps={accountForm} />;
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <div className={classes.root}>
      <form
        onSubmit={
          activeStep === 0
            ? informationForm.handleSubmit(onSubmit)
            : accountForm.handleSubmit(onSubmit)
        }
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <div>{getStepContent(activeStep)}</div>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
