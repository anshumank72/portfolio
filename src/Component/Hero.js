import React from "react";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import mainLogo from "../assets/mainLogo.png";
import { classes } from "istanbul-lib-coverage";

const useStyles = makeStyles((theme) => ({
  mainLogo: {
    transform: "rotate(-16deg)",
    marginTop: "-1rem",
    width: "91%",
    height: "85vh",
    opacity: "0.5",
  },
  heading: {
    fontSize: "4rem",
    fontWeight: 200,
    color: "#333",
    letterSpacing: ".45rem",
    lineHeight: 1.4,
  },
  suportingText: {
    fontSize: "1.3rem",
    fontWeight: "200",
    color: "#575757",
  },
}));

const hero = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        {/*-----first block-----*/}
        <Grid container direction="row" alignItems="center">
          <Grid item lg={5}>
            <Grid container direction="column" style={{ paddingLeft: "3rem" }}>
              <Grid item>
                <Typography className={classes.heading}>
                  Hello✌🏽,
                  <br />
                  I'm <span>Anshuman</span>
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.suportingText}>
                  A{" "}
                  <span style={{ fontStyle: "italic", fontWeight: "400" }}>
                    commited
                  </span>{" "}
                  Front-end developer
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={7}>
            <img src={mainLogo} alt="mainLogo" className={classes.mainLogo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default hero;
