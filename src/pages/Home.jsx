import React from "react";
import { Container, Typography, Box } from "@mui/material";
import myImage from "../assets/Images/myImage1.jpg";
import handWave from "../assets/Images/hand-wave.svg";
import TypingText from "../components/TypingText";

const Home = () => {
  return (
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
      {/* Profile Image */}
      <Box>
        <img
          src={myImage}
          alt="Shubham Thorve"
          style={{
            borderRadius: "50%",
            height: "250px",
            width: "250px",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Text Content */}
      <Box sx={{ ml: { md: 4 }, mt: { xs: 3, md: 0 }, textAlign: "left" }}>
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
          Passionate Frontend Developer | Backend and Cloud Enthusiast | Blogger from Pune, India.
        </Typography>

        {/* <Box sx={{ mt: 2 }}>
          <TypingText />
        </Box> */}
      </Box>
    </Container>
  );
};

export default Home;
