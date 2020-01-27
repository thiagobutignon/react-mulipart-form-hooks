import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({}));

export default function Account({ formProps: { register, errors } }) {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item md={12} xs={12}>
            <TextField
              id="email"
              label="Email"
              margin="normal"
              variant="outlined"
              inputRef={register}
              error={!!errors.email}
            />
            {errors.email && (
              <p className={classes.errorMessage}>{errors.email.message}</p>
            )}
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id="password"
              label="Password"
              margin="normal"
              variant="outlined"
              type="password"
              inputRef={register}
              error={!!errors.password}
            />
            {errors.email && (
              <p className={classes.errorMessage}>{errors.password.message}</p>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item md={12} xs={12}>
            <TextField
              id="confirm-password"
              label="Confirm Password"
              margin="normal"
              variant="outlined"
              type="password"
              inputRef={register}
              error={!!errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <p className={classes.errorMessage}>
                {errors.confirmPassword.message}
              </p>
            )}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
