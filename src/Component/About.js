import React from "react";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button, Hidden } from "@material-ui/core";
import aboutLogo from "../assets/aboutLogo.jpg";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: "0 1rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 .5rem",
    },
  },
  spanText: {
    position: "relative",
    fontStyle: "italic",
    display: "inline-block",
    color: "#fff",
    transform: `rotate(-2deg)`,
    backgroundColor: "#127eb1",

    "&:after": {
      content: "",
      position: "absolute",
      top: 0,
      left: 0,
      zindex: -1,
      width: "100%",
      height: "100%",
    },
  },
  description: {
    fontSize: "1rem",
    fontWeight: "300",
    lineHeight: "1.8",
    marginTop: "5px",
  },
  descriptionskills: {
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.8",
    marginTop: "5px",
  },
  headingabout: {
    color: "#127eb1",
    fontSize: "1.5rem",
    fontWeight: "400",
    textTransform: "uppercase",
  },
  skills: {
    color: "#127eb1",
    fontWeight: "400",
    fontSize: "1rem",
    marginTop: "1.5rem",
  },
  resumeButton: {
    backgroundColor: "#127eb1",
    padding: "0.8rem 3rem",
    borderRadius: "50px",
    color: "#fff",
    transition: "transform 0.2s ease-out",
    "&:hover": {
      backgroundColor: "#127eb1",
      transform: "translateY(-4px)",
    },
  },
  aboutLogo: {
    width: "40em",
    height: "auto",
    position: "absolute",
    top: "3%",
    right: "10%",
    [theme.breakpoints.down("md")]: {
      width: "31em",
      height: "auto",
      top: "10%",
    },
  },
  buttonTop: {
    marginTop: "3rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "1.5rem",
    },
  },
}));
const about = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="row" className={classes.aboutContainer}>
      <Grid item lg={5} md={5} style={{ margin: "0 auto" }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ padding: "3em 0", textAlign: "center" }}
        >
          <Grid item style={{ marginBottom: "1rem" }}>
            <Typography className={classes.headingabout}>About Me</Typography>
          </Grid>
          <Grid item style={{ color: "#575757" }}>
            <Typography style={{ fontSize: "1.2rem", fontWeight: "300" }}>
              If you're{" "}
              <span style={{ fontStyle: "italic", fontWeight: "400" }}>
                wondering{" "}
              </span>
              who <span style={{ fontStyle: "italic" }}>I am</span>...
            </Typography>
            <Typography className={classes.description}>
              I'm <span className={classes.spanText}>Anshuman</span> , a 21
              years old <span className={classes.spanText}>Front-end</span>{" "}
              developer, from India .
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: "2rem" }}>
            <Typography
              className={classes.description}
              style={{ width: "80%", margin: "0 auto" }}
            >
              A passionate aspiring Front-end Developer Actively ready to join
              in a great lively team of a good start-up to adapt me in any
              situation and environment with ease and perform the best.
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: "2rem" }}>
            <Typography className={classes.descriptionskills}>
              My current <span className={classes.spanText}>stack</span> of{" "}
              <span className={classes.spanText}>languages/technologies</span>{" "}
              is:
            </Typography>
            <Typography className={classes.skills}>
              HTML5 - CSS3 - JAVASCRIPT - SASS - WEBPACK - REACTJS - REDUX -
              STYLED COMPONENTS - CSS MODULES - FIREBASE - BABEL RESUME
            </Typography>
          </Grid>
          <Grid item className={classes.buttonTop}>
            <Button variant="contained" className={classes.resumeButton}>
              Resume
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item lg={7} md={7} style={{ position: "relative" }}>
          <img src={aboutLogo} alt="aboutLogo" className={classes.aboutLogo} />
        </Grid>
      </Hidden>
    </Grid>
  );
};
export default about;
