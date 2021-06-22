import React from "react";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import brandLogo from "../assets/brandLogo.png";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: "4rem 0",
    height: "40rem",
  },
  spanText: {
    fontStyle: "italic",
    fontWeight: 500,
  },
  socialIcon: {
    border: "1px solid #127eb1",
    borderRadius: "50%",
    padding: "7px",
  },
}));

const footer = (props) => {
  const classes = useStyles();
  return (
    <footer>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        className={classes.footerContainer}
      >
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography
                style={{
                  color: "#127eb1",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  marginBottom: "1rem",
                }}
              >
                CONTACT ME
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "300",
                  color: "#575757",
                }}
              >
                If you want to <span className={classes.spanText}>talk</span>,
                you can <span className={classes.spanText}>find me</span> at:
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item style={{ marginBottom: "1rem" }}>
              <Typography style={{ fontSize: "1.2rem", color: "#575757" }}>
                anshumank72@gmail.com
              </Typography>
            </Grid>
            <Grid item>
              <Grid container justify="space-between">
                <Grid item>
                  <GitHubIcon className={classes.socialIcon} />
                </Grid>
                <Grid item>
                  <LinkedInIcon className={classes.socialIcon} />
                </Grid>
                <Grid item>
                  <TwitterIcon className={classes.socialIcon} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <img
                src={brandLogo}
                alt="footerLogo"
                style={{ width: "13rem" }}
              />
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: "0.9rem", color: "#575757" }}>
                copyright@2021,ANSHUMAN
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};
export default footer;
