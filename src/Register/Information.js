import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({}));

export default function Information({ formProps: { register, errors } }) {
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
              id="firstName"
              label="First name"
              margi="normal"
              variant="outlined"
              inputRef={register}
              error={!!errors.firstName}
            />
            {errors.firstName && (
              <p className={classes.errorMessage}>{errors.firstName.message}</p>
            )}
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id="lastName"
              label="Last name"
              margi="normal"
              variant="outlined"
              inputRef={register}
              error={!!errors.lastName}
            />

            {errors.lastName && (
              <p className={classes.errorMessage}>{errors.lastName.message}</p>
            )}
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={1}>
          <Grid item md={12} xs={12}>
            <Grid item md={12} xs={12}>
              <TextField
                id="nickname"
                label="Nickname"
                margin="normal"
                variant="outlined"
                inputRef={register}
                error={!!errors.nickname}
              />
              {errors.nickname && (
                <p className={classes.errorMessage}>
                  {errors.nickname.message}
                </p>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
