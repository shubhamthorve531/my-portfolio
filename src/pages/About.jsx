// About.js

import React from "react";
import { Container, Card, Typography, Box } from "@mui/material";
import "../styles/About.css"; // Assuming you will write your custom CSS for this page
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coder from "../assets/Images/coder.webp";

const imageData = [
  { id: 1, src: coder, alt: "Image 1" },
  { id: 2, src: coder, alt: "Image 2" },
  { id: 3, src: coder, alt: "Image 3" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "50px",
  className: "carousel-3d",
};
const About = () => {
  return (
    <Container className="about-container">
      {/* About Text */}
      <Box className="about-text-box">
        <Typography variant="h4" className="about-heading">
          About Me
        </Typography>
        <Box className="about-text-box-0">
          <Box className="about-text-box-1">
            <Box className="about-text-box-1-0">
              <Typography variant="body1" className="about-description" mt={1}>
                Hello! I'm <strong>Shubham</strong>, a Software Engineer based
                in
                <strong> Pune, India</strong>. Specializing in Frontend
                Development, Backend, Cloud, and AI technologies. I’m passionate
                about building scalable and efficient systems while constantly
                learning new skills.
              </Typography>

              <Typography variant="body1" className="about-description" mt={1}>
                Currently, I’m focused on mastering <strong>React</strong>,{" "}
                <strong>TypeScript</strong>, <strong>.NET</strong>, and cloud
                technologies like <strong>Azure</strong>. I enjoy working with
                both <strong>front-end</strong> and <strong>back-end</strong>{" "}
                tech to create seamless solutions.
              </Typography>

              <Typography variant="body1" className="about-description" mt={2}>
                When I'm not coding, you'll find me{" "}
                <strong>training for marathons, cycling, trekking,</strong> or
                staying up-to-date with the latest tech trends.
              </Typography>
            </Box>
            {/* <Box className="about-text-box-1-1">
              <Slider {...settings}>
                {imageData.map((image) => (
                  <div key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="developer-illustration"
                    />
                  </div>
                ))}
              </Slider>
            </Box> */}
          </Box>

          {/* Experience Timeline */}
          <Box className="about-text-box-2">
            <Typography variant="h5" className="timeline-heading">
              My Experience
            </Typography>
            <Box className="timeline">
              {[
                {
                  title: "Senior Software Engineer at Persistent Systems",
                  duration: "Oct 2024 - Present",
                  description:
                    "Working on projects in React, TypeScript, .NET, and Azure to deliver scalable solutions. Developed a lightweight Form Builder Webcomponent for reusable UI components.",
                },
                {
                  title: "Software Engineer at Persistent Systems",
                  duration: "July 2022 - Sept 2024",
                  description:
                    "Built a UI using React, supporting 60,000+ MCAPS employees. Managed data syncs via Azure Synapse. Ensured quality through unit and accessibility testing.",
                },
                {
                  title: "Software Development Intern",
                  duration: "Feb 2022 - July 2022",
                  description:
                    "Completed Java Full Stack Internship with hands-on experience through multiple POC projects.",
                },
              ].map((experience, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                >
                  <Typography variant="h6" className="timeline-title">
                    {experience.title}
                  </Typography>
                  <Typography variant="body2" className="timeline-duration">
                    {experience.duration}
                  </Typography>
                  <Typography variant="body2" className="timeline-description">
                    {experience.description}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
