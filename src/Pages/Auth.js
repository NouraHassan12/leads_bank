import * as React from "react";
import { useState , useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AuthPage } from "./authStyle";
import Button from "@mui/material/Button";
import Signin from "../Components/Auth/Login.js";
import SignUp from "../Components/Auth/SignUp.js";
import { withStyles } from "@material-ui/core/styles";
import logo from "../Images/logo.png";
const CustomTab = withStyles({
  root: {
    backgroundColor: "white !important",
    color: "#2d3282 !important",
    margin: "10px 15px !important",
    borderRadius: "10px !important",
    textTransform: "lowercase !important",
  },
  selected: {
    backgroundColor: "#2d3282 !important",
    color: "white !important",
    margin: "10px 15px !important",
    borderRadius: "10px !important",
  },
})(Tab);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Login() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <AuthPage>
      <Box

        // sx={{ bgcolor: "background.paper", width: 500 }}
        className="container"
      >
        <AppBar  className="header" position="static" style={{backgroundColor:"red !important"}}>
          <img
            src={logo}
            alt="lgog"
            style={{ alignSelf: "baseline", margin: "10px" }}
          />
          <Tabs
           
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            //  variant="fullWidth"
            aria-label="full width tabs example"
          >
            <CustomTab label="Login" {...a11yProps(0)} />
            <CustomTab label="Sign up" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Signin />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <SignUp />
          </TabPanel>
        </SwipeableViews>
      </Box>
     
    </AuthPage>
  );
}
