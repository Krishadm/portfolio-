
import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useColorMode } from "../context/ThemeContext";

interface Project {
  title: string;
  description: string;
  tech: string;
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "Rock-Paper-Scissors Game",
    description:
      "Interactive Rock Paper Scissors game built with dynamic UI interactions.",
    tech: "HTML • CSS • JavaScript",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "To-Do List Web App",
    description:
      "Task management application where users can add, delete and mark tasks as completed.",
    tech: "React • MUI • JavaScript",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Drive-In Cars Rental",
    description:
      "UI/UX design for a car rental booking platform focused on smooth user experience.",
    tech: "Figma • UI/UX Design",
    liveLink: "#",
    githubLink: "#",
  },
];

export default function Projects() {
  const { mode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <Box
      id="projects"
      sx={{
        position: "relative",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 8, md: 12 },
        color: "#fff",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: isDark
            ? "rgba(18,18,18,0.85)"
            : "rgba(30,30,30,0.75)",
          zIndex: 0,
        },
      }}
    >
      <Box position="relative" zIndex={1} maxWidth="1200px" mx="auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            mb={8}
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontFamily: "'Inter', sans-serif",
            }}
          >
            My Projects
          </Typography>
        </motion.div>

        {/* GRID */}
        <Grid container sx={{ border: "1px solid rgba(255,255,255,0.2)" }}>
          {projects.map((project, index) => (
            <Grid key={index} xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: "100%",
                    borderBottom: {
                      xs:
                        index !== projects.length - 1
                          ? "1px solid rgba(255,255,255,0.2)"
                          : "none",
                      md: "none",
                    },
                    borderRight: {
                      md:
                        index !== projects.length - 1
                          ? "1px solid rgba(255,255,255,0.2)"
                          : "none",
                    },
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.03)",
                    },
                  }}
                >
                  {/* Title */}
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={2}
                    sx={{
                      fontFamily: "monospace",
                      background:
                        "linear-gradient(90deg,#9f68f0,#22d3ee)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {project.title}
                  </Typography>

                  {/* Code style tags */}
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "monospace",
                      fontSize: "0.9rem",
                    }}
                  >
                    &lt;p&gt;
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      borderLeft: "1px solid rgba(255,255,255,0.2)",
                      pl: 3,
                      ml: 1.5,
                      fontFamily: "monospace",
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.6,
                      flex: 1,
                      mb: 2,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "monospace",
                      fontSize: "0.9rem",
                      mb: 2,
                    }}
                  >
                    &lt;/p&gt;
                  </Typography>

                  {/* Tech */}
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#22d3ee",
                      fontFamily: "monospace",
                      mb: 3,
                    }}
                  >
                    {project.tech}
                  </Typography>

                  {/* Buttons */}
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      href={project.liveLink}
                      variant="contained"
                      size="small"
                      sx={{
                        textTransform: "none",
                        background:
                          "linear-gradient(90deg,#9f68f0,#22d3ee)",
                      }}
                    >
                      Live
                    </Button>

                    <Button
                      href={project.githubLink}
                      variant="outlined"
                      size="small"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        borderColor: "rgba(255,255,255,0.3)",
                      }}
                    >
                      GitHub
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

