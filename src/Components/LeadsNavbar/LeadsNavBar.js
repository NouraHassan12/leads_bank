import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { LeadsNav } from "./LeadsStyle";
import { NavLink } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function LeadsNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <LeadsNav>
      <AppBar className="header" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            
            <Box 
            sx={{ flexGrow: 1, display: { xs: "flex" }  }}
            style={{marginTop:"20px"}}
            >
            

              <MenuItem onClick={handleCloseNavMenu}>
                {/* <Typography textAlign="center" className="Typography">
                  create lead
                </Typography> */}
                <NavLink to={`CreateLead`}>Add new lead </NavLink>
              </MenuItem>


              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to={`AllLeads/?page=1`}>
               Available Leads
                </NavLink>
       
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to={`SoldLeadsList`}>
                Leads sold
                </NavLink>
       
              </MenuItem>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </LeadsNav>
  );
}
export default LeadsNavbar;
