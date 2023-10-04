import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useAuth from "../../../hooks/useAuth";
import ToggleThem from "../../../Components/ToggleThem/ToggleThem";
import logo from "../../../assets/logo.jpg";
import Swal from "sweetalert2";
import { ExitToApp } from "@mui/icons-material";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems = (
    <List>
      <ListItem button component={NavLink} to="/" onClick={toggleDrawer}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={NavLink} to="/classes" onClick={toggleDrawer}>
        <ListItemText primary="Classes" />
      </ListItem>
      <ListItem
        button
        component={NavLink}
        to="/instructor"
        onClick={toggleDrawer}
      >
        <ListItemText primary="Instructors" />
      </ListItem>

      {user && (
        <ListItem
          button
          component={NavLink}
          to="/dashboard"
          onClick={toggleDrawer}
        >
          <ListItemText primary="Dashboard" />
        </ListItem>
      )}
    </List>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* Mobile Navbar */}
      <AppBar
        position="fixed"
        color="inherit"
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Toolbar className="flex justify-between items-center">
          <div className="flex justify-center">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <img src={logo} alt="" style={{ marginRight: "16px" }} />
            </Link>
          </div>
          <ToggleThem />
        </Toolbar>
      </AppBar>
      {/* Tablet and Desktop Navbar */}
      <AppBar
        position="fixed"
        color="inherit"
        className="md:py-1"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Toolbar className="flex justify-between items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[80%] object-cover"
              style={{ marginRight: "16px" }}
            />
          </Link>
          <div className="flex justify-center">
            <Button
              color="inherit"
              component={NavLink}
              to="/"
              className="text-[16px] font-semibold text-black nav"
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/classes"
              className="text-[16px] font-semibold text-black nav"
            >
              Classes
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/instructor"
              className="text-[16px] font-semibold text-black nav"
            >
              Instructors
            </Button>
            {user && (
              <Button
                color="inherit"
                component={NavLink}
                to="/dashboard"
                className="text-[16px] font-semibold text-black nav"
              >
                Dashboard
              </Button>
            )}
          </div>

          {user ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                className="h-[50px] w-[50px] border-2 rounded-full hidden sm:hidden md:block"
                src={user && user.photoURL}
                alt="user Photo"
              />
              <Button
                variant="contained"
                color="secondary"
                startIcon={<ExitToApp />}
                onClick={handleLogout}
                style={{ marginLeft: "16px" }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {menuItems}
      </Drawer>
    </>
  );
};

export default Navbar;
