import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer,Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../assets/Images/logo.jpg"; 
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "../styles/Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Projects", path: "/projects" },
    { text: "Blogs", path: "/blogs" },
    { text: "Resume", path: "/projects" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar className="nav-toolbar">
        <Typography variant="h6" className="logo" component={Link} to="/">
          <Box component="span" className="logo-box">
            <Box className="logo-text">ST</Box>
          </Box>
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {navItems.map((item, index) => (
            <Box key={index} component={Link} to={item.path} className="nav-item">
              {item.text}
            </Box>
          ))}
        </Box>

        {/* Mobile Navigation */}
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box className="drawer-content">
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
          <List>
            {navItems.map((item, index) => (
              <ListItem key={index} component={Link} to={item.path} onClick={handleDrawerToggle}>
                <ListItemText primary={item.text} className="drawer-item" />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
