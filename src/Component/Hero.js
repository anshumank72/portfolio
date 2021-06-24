import React from "react";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import mainLogo from "../assets/mainLogo.png";
import Portfoilo from "../assets/Portfolio.png";
import Oyo from "../assets/Oyo.png";
import Movieflex from "../assets/Movieflex.png";
import Romato from "../assets/Romato.png";
import Todo from "../assets/Todo.png";

const useStyles = makeStyles((theme) => ({
  heroAboutContainer: {
    padding: "5em 0",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "2em 0",
    },
  },
  mainLogo: {
    transform: "rotate(-16deg)",
    marginTop: "-1rem",
    width: "45em",
    height: "auto",
    opacity: "0.6",

    [theme.breakpoints.down("md")]: {
      width: "41.5em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "25em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "18em",
      height: "auto",
      zindex: 10,
    },
  },
  headingText: {
    paddingLeft: "2em",
    [theme.breakpoints.down("md")]: {
      padding: "6em 0 6em 2em",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0",
      textAlign: "center",
      marginTop: "-3em",
      zindex: 20,
    },
  },
  heading: {
    fontSize: "4rem",
    fontWeight: 200,
    color: "#333",
    letterSpacing: ".45rem",
    lineHeight: 1.4,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  suportingText: {
    fontSize: "1.3rem",
    fontWeight: "200",
    color: "#575757",
  },
  spanText: {
    position: "relative",
    fontStyle: "italic",
    display: "inline-block",
    color: "#fff",
    transform: `rotate(-2deg)`,
    backgroundColor: "#127eb1",
    fontWeight: 400,
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
  image: {
    width: "70%",
    height: "auto",
    boxShadow: "1px 1px 10px 12px rgb(104 104 240 / 20%)",
    borderRadius: "3px",
  },
  projectDescription: {
    fontSize: "0.9rem",
    fontWeight: "400",
    lineHeight: "1.7",
    color: "#575757",
    marginBottom: "1.5rem",
  },
  buttonBlue: {
    padding: "1rem 3rem",
    backgroundColor: "#127eb1",
    color: "#fff",
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#333",
    },
  },
  buttonWhite: {
    padding: "1rem 3rem",
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: "#127eb1",
      color: "#fff",
    },
  },
}));

const hero = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column">
      <Grid item>
        {/*-----first block-----*/}
        <Grid
          container
          direction={matchesSM ? "column-reverse" : "row"}
          alignItems="center"
          justify="flex-start"
        >
          <Grid item lg={5} md={4} sm={12} className={classes.headingText}>
            <Grid container direction="column">
              <Grid item>
                <Typography className={classes.heading}>
                  Hello✌🏽,
                  <br />
                  I'm{" "}
                  <span style={{ color: "#127eb1", fontWeight: "400" }}>
                    Anshuman
                  </span>
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
          <Grid item lg={7} md={8} sm={12} style={{ position: "relative" }}>
            <img src={mainLogo} alt="mainLogo" className={classes.mainLogo} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----about block-----*/}
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.heroAboutContainer}
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
          <Grid item style={{ marginTop: "3rem" }}>
            <Button variant="contained" className={classes.resumeButton}>
              Resume
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----portfolio block-----*/}
        <Grid container direction="column" alignItems="center">
          <Grid item style={{ textAlign: "center" }}>
            <Typography
              className={classes.headingabout}
              style={{ marginBottom: "1rem" }}
            >
              portfolio
            </Typography>
            <Typography
              className={classes.description}
              style={{ fontSize: "1.3rem" }}
            >
              check <span className={classes.spanText}>what </span> I've been
              doing <span className={classes.spanText}>lately</span>
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="center"
              style={{ margin: "6em 2em 0 4em" }}
            >
              <Grid item lg={6} md={6} style={{ textAlign: "center" }}>
                <img
                  src={Portfoilo}
                  alt="portfolio snap"
                  className={classes.image}
                />
              </Grid>
              <Grid item lg={6} md={6}>
                <Grid container direction="column" style={{ width: "70%" }}>
                  <Grid item>
                    <Typography className={classes.projectDescription}>
                      This very website you're now watching. I wanted something
                      fast and with good SEO for my portfolio, so i would like
                      to add react that seemed best fit. It reads data from
                      markdown files, so it's super easy for me to keep adding
                      Portfolio items as I keep developing stuff.
                    </Typography>
                    <Typography className={classes.skills}>
                      REACT - STYLED COMPONENTS - MODULE CSS - MATERIAL UI
                    </Typography>
                    <Grid item>
                      <Grid container style={{ marginTop: "2rem" }}>
                        <Grid item style={{ marginRight: "2rem" }}>
                          <Button
                            variant="contained"
                            className={classes.buttonBlue}
                          >
                            Visit
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            className={classes.buttonWhite}
                          >
                            Source
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row-reverse"
              justify="center"
              style={{ margin: "6em 2em 0 4em" }}
            >
              <Grid item lg={6} md={6} style={{ textAlign: "center" }}>
                <img
                  src={Portfoilo}
                  alt="portfolio snap"
                  className={classes.image}
                />
              </Grid>
              <Grid item lg={6} md={6}>
                <Grid container direction="column" style={{ width: "70%" }}>
                  <Grid item>
                    <Typography className={classes.projectDescription}>
                      This very website you're now watching. I wanted something
                      fast and with good SEO for my portfolio, so i would like
                      to add react that seemed best fit. It reads data from
                      markdown files, so it's super easy for me to keep adding
                      Portfolio items as I keep developing stuff.
                    </Typography>
                    <Typography className={classes.skills}>
                      REACT - STYLED COMPONENTS - MODULE CSS - MATERIAL UI
                    </Typography>
                    <Grid item>
                      <Grid container style={{ marginTop: "2rem" }}>
                        <Grid item style={{ marginRight: "2rem" }}>
                          <Button
                            variant="contained"
                            className={classes.buttonBlue}
                          >
                            Visit
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            className={classes.buttonWhite}
                          >
                            Source
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default hero;
