import React from "react";
import { Typography } from "@mui/material";
import {Typed} from "react-typed";

const TypingText = () => {
  return (
    <Typography
      variant="body1"
      sx={{
        color: "black",
        mt: 2,
        fontSize: { xs: "16px", sm: "18px", md: "20px" },
        opacity: 0.8,
      }}
    >
      <span>
        <Typed
          strings={[
            "I like to solve problems",
            "I like to learn new things",
            "I like trekking",
            "I like running",
          ]}
          typeSpeed={50}  // Typing speed in milliseconds
          backSpeed={30}  // Backspacing speed
          loop            // Keeps looping through the strings
        />
      </span>
    </Typography>
  );
};

export default TypingText;
