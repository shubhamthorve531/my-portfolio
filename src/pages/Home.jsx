import React from "react";
import { Container, Typography, Box, IconButton, Grid } from "@mui/material";
import { LinkedIn, GitHub, Twitter, Article } from "@mui/icons-material";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaMicrosoft } from "react-icons/fa";
import { SiTypescript, SiMicrosoftazure, SiVisualstudiocode, SiVisualstudio,SiCsharp, SiMicrosoft } from "react-icons/si";
import myImage from "../assets/Images/myImage1.jpg";
import handWave from "../assets/Images/hand-wave.svg";
import TypingText from "../components/TypingText";

import { socialLinks } from "../assets/Links/SocialLinksAndIcons";

const Home = () => {
  return (
    <>
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        textAlign: { xs: "center", md: "left" },
        mt: 5,
      }}
    >
      {/* Profile Image and Social Links */}
      <Box sx={{ textAlign: "center" }}>
        <img
          src={myImage}
          alt="Shubham Thorve"
          style={{
            borderRadius: "20%",
            height: "250px",
            width: "250px",
            objectFit: "cover",
          }}
        />
        
        <Typography
          variant="h6"
          sx={{ mt: 2, fontWeight: "bold", color: "grey" }}
        >
          You can find me on
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
      {socialLinks.map((link, index) => (
        <IconButton
          key={index}
          component="a"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: link.color }}
        >
          {link.icon}
        </IconButton>
      ))}
    </Box>
      </Box>

      {/* Text Content */}
      <Box sx={{ ml: { md: 4 }, mt: { xs: 3, md: 0 }, textAlign: "left", paddingLeft: "20px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h5" sx={{ color: "black", opacity: 0.6 }}>
            Hey, there
          </Typography>
          <img src={handWave} alt="hand-waving" width="30" height="30" />
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "32px", sm: "40px", md: "48px", lg: "60px" },
            lineHeight: 1.2,
            mt: 1,
          }}
        >
          <span style={{ color: "rgba(56, 56, 56, 0.6)" }}>I'm </span>
          <span
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, #7CC0C4, #548FBA, #3C84C7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Shubham Thorve
          </span>
          <Typography
            component="span"
            sx={{
              display: "block",
              fontWeight: "bold",
              fontSize: { xs: "32px", sm: "40px", md: "48px", lg: "60px" },
              lineHeight: 1.2,
              mt: 1,
            }}
          >
            a Software Engineer
          </Typography>
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "black",
            mt: 3,
            fontSize: { xs: "20px", sm: "24px", md: "28px" },
          }}
        >
          Passionate Frontend Developer | Backend, Cloud and AI Enthusiast | From Pune, India.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <TypingText />
        </Box>
      </Box>
    </Container>
    {/* Skills Section */}
    <Container sx={{ mt: 5, textAlign: "left" }}>
  <Typography
    variant="h6"
    sx={{ fontWeight: "bold", color: "grey", textAlign: "left" }}
  >
    Skills & Technologies
  </Typography>
  <Grid container spacing={2} justifyContent="space-between" mt={1}>
    {[
      { name: "HTML", icon: <FaHtml5 color="#E34F26" size={30} /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={30} /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={30} /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={30} /> },
      { name: "React", icon: <FaReact color="#61DAFB" size={30} /> },
      { name: ".NET", icon: <FaMicrosoft color="#512BD4" size={30} /> },
      { name: "C#", icon: <SiCsharp color="#239120" size={30} /> },
      { name: "Fluent UI", icon: <SiMicrosoft color="#0078D4" size={30} /> },
      { name: "Azure", icon: <SiMicrosoftazure color="#0089D6" size={30} /> },
      { name: "SQL Server", icon: <FaDatabase color="#CC2927" size={30} /> },
      { name: "VS Code", icon: <SiVisualstudiocode color="#007ACC" size={30} /> },
      { name: "Visual Studio", icon: <SiVisualstudio color="#5C2D91" size={30} /> },
    ].map((skill, index) => (
      <Grid item xs={6} sm={4} md={1} key={index}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {skill.icon}
          <Typography variant="body2" sx={{ mt: 1, lineHeight: 1,fontSize: "0.8rem" }}>
            {skill.name}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Container>

  </>
  );
};

export default Home;
