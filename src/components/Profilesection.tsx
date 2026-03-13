import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import generatedimage from "../../src/generated-image.png";
import test from "../../src/test.jpg";

import { FaReact, FaJs, FaGithub } from "react-icons/fa";
import { SiTypescript, SiMui, SiRedux } from "react-icons/si";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: ["SOFTWARE ENGINEER", "FRONT END DEVELOPER", "WEB DEVELOPER"],
    loop: true,
    delaySpeed: 2000,
  });

  const techStack = [
    { icon: FaReact, color: "#61DBFB" },
    { icon: FaJs, color: "#F7DF1E" },
    { icon: SiTypescript, color: "#3178C6" },
    { icon: SiMui, color: "#007FFF" },
    { icon: SiRedux, color: "#764ABC" },
    { icon: FaGithub, color: "#ffffff" },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        position: "relative",
        color: "#fff",
       
        backgroundImage: `url(${test})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor:"rgba(18, 18, 18, 0.85)",
        }}
      />

      {/* CONTENT */}
      <Box sx={{ position: "relative", zIndex: 1, px: 2 }}>
        {/* NAME */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "3rem", md: "6rem" },
              fontWeight: 800,
              letterSpacing: "6px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            KRISHNA KANTH
          </Typography>
        </motion.div>

        {/* ROLE */}
        <Typography
          sx={{
            mt: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            letterSpacing: "4px",
            color: "rgba(255,255,255,0.8)",
            fontFamily: "monospace",
          }}
        >
          {text}
          <Cursor cursorStyle="|" />
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            mt: 3,
            maxWidth: "600px",
            mx: "auto",
            color: "rgba(255,255,255,0.7)",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          I build modern, responsive and scalable web applications using React
          and modern frontend technologies.
        </Typography>

        {/* TECH STACK TITLE */}
        <Typography
          sx={{
            mt: 6,
            mb: 2,
            fontSize: "0.8rem",
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          TECH STACK I USE
        </Typography>

        {/* TECH STACK ICONS */}
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          {techStack.map((item, index) => {
            const Icon = item.icon;

            return (
              <Box
                key={index}
                sx={{
                  color: item.color,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.15)",
                  },
                }}
              >
                <Icon size={28} />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}