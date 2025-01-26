import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link } from "react-scroll"; // Import Link from react-scroll
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
    { text: "Home", target: "home" },
    { text: "About", target: "about" },
    { text: "Projects", target: "projects" },
    { text: "Blogs", target: "blogs" },
    { text: "Contact", target: "contact" },
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
            <Link
              key={index}
              to={item.target}
              smooth={true}
              duration={500}
              offset={-80} // Adjust for navbar height offset
              className="nav-item"
            >
              {item.text}
            </Link>
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
              <ListItem key={index} onClick={handleDrawerToggle}>
                <Link
                  to={item.target}
                  smooth={true}
                  duration={500}
                  offset={-80} // Adjust for navbar height offset
                  className="drawer-item"
                >
                  <ListItemText primary={item.text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
