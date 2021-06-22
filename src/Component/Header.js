import {
  AppBar,
  Tabs,
  Toolbar,
  Tab,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import brandLogo from "../assets/brandLogo.png";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  AppBar: {
    boxShadow: "0 0.5rem 2rem rgb(0 0 0 / 10%)",
    zIndex: theme.zIndex.modal + 1,
  },
  brandLogo: {
    height: "2.5em",
    width: "9em",
    opacity: 1,
    [theme.breakpoints.down("sm")]: {
      width: "8em",
      height: "2.1em",
    },
  },
  TabContainer: {
    marginLeft: "auto",
  },
  Tab: {
    fontSize: "0.8rem",
    fontWeight: 500,
  },
  MenuIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  DrawerItem: {
    fontSize: "0.8rem",
    fontWeight: 500,
  },
}));

const header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleActiveTab = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/about" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/portfolio" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/contact" && value !== 3) {
      setValue(3);
    }
  }, [value]);

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText className={classes.Tab}>HOME</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/about"
            selected={value === 1}
          >
            <ListItemText className={classes.Tab}>ABOUT ME</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/portfolio"
            selected={value === 2}
          >
            <ListItemText className={classes.Tab}>PORTFOLIO</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 3}
          >
            <ListItemText className={classes.Tab}>CONTACT</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.MenuIconContainer}
        disableRipple
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    </React.Fragment>
  );

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleActiveTab}
        className={classes.TabContainer}
        indicatorColor="primary"
      >
        <Tab label="Home" className={classes.Tab} component={Link} to="/" />
        <Tab
          label="About Me"
          className={classes.Tab}
          component={Link}
          to="/about"
        />
        <Tab
          label="Portfolio"
          className={classes.Tab}
          component={Link}
          to="/portfolio"
        />
        <Tab
          label="Contact"
          className={classes.Tab}
          component={Link}
          to="/contact"
        />
      </Tabs>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.AppBar}>
          <Toolbar>
            <img src={brandLogo} alt="logo" className={classes.brandLogo} />
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};
export default header;
