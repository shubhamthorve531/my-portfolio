import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Typography } from "@mui/material";

const TypingText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "I build scalable web applications.",
          "I specialize in React and modern UI development.",
          "I enjoy solving complex problems with simple solutions.",
          "I am passionate about continuous learning and growth.",
          "I believe in writing clean, maintainable code."
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      return () => {
        typed.destroy(); // Cleanup on component unmount
      };
    }
  }, []);

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
      <span ref={typedRef} />
    </Typography>
  );
};

export default TypingText;
