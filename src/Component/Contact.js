import React from "react";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import brandLogo from "../assets/brandLogo.png";
import greenPhoto from "../assets/greenPhoto.jpg";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: "4rem 0",
    height: "40rem",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      padding: "2rem 0",
      height: "36.5rem",
    },
  },
  spanText: {
    fontStyle: "italic",
    fontWeight: 500,
  },
  socialIcon: {
    border: "1px solid #127eb1",
    borderRadius: "50%",
    padding: "7px",
    color: "#000",
    "&:hover": {
      backgroundColor: "#127eb1",
    },
  },
  image: {
    width: "100%",
    height: "40em",
    position: "absolute",
    right: "10%",
    top: "3%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
    },
    [theme.breakpoints.down("md")]: {
      width: "35em",
      height: "auto",
      margin: "2em 0 0 2em",
    },
  },
  contactinfoContainer: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "em",
    },
  },
}));

const footer = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item lg={5} md={4}>
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
                  <Grid
                    item
                    component={"a"}
                    href="https://github.com/anshumank72"
                  >
                    <GitHubIcon className={classes.socialIcon} />
                  </Grid>
                  <Grid
                    item
                    component={"a"}
                    href="https://www.linkedin.com/in/anshuman-kashyap-29ba58201/"
                  >
                    <LinkedInIcon className={classes.socialIcon} />
                  </Grid>
                  <Grid
                    item
                    component={"a"}
                    href="https://github.com/anshumank72"
                  >
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
      </Grid>
      <Hidden smDown>
        <Grid item lg={7} md={8} style={{ position: "relative" }}>
          <img src={greenPhoto} alt="image" className={classes.image} />
        </Grid>
      </Hidden>
    </Grid>
  );
};
export default footer;
