import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar
} from "@mui/material";
import { motion } from "framer-motion";
import { useColorMode } from "../context/ThemeContext";

const experienceData = [
  {
    company: "HEPL (Cavinkare Group of Companies)",
    role: "Trainee Developer",
    duration: "Feb 2024 – Mar 2025",
    logo: "/cms-logo.png",
    description:
      "Worked on frontend development using React, Material UI, and TypeScript. Built reusable components and collaborated with backend teams to integrate APIs."
  },
  {
    company: "Wele",
    role: "Junior Software Engineer",
    duration: "Mar 2025 – Present",
    logo: "/cms-logo.png",
    description:
      "Developing scalable web applications using React, Redux, GraphQL and modern frontend technologies. Focused on performance optimization and UI improvements."
  }
];

export default function Experience() {
  const { mode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <Box
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
          zIndex: 0
        }
      }}
    >
      <Box position="relative" zIndex={1} maxWidth="1100px" mx="auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            mb={8}
            sx={{ fontSize: { xs: "2.3rem", md: "3.3rem" } }}
          >
            My Experience
          </Typography>
        </motion.div>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4
          }}
        >
          {experienceData.map((exp, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", md: "48%" }
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: "#2196f3"
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    
                    {/* Header */}
                    <Box display="flex" alignItems="center" mb={3}>
                      <Avatar
                        src={exp.logo}
                        sx={{ width: 45, height: 45, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" fontWeight="bold">
                          {exp.company}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255,255,255,0.6)" }}
                        >
                          {exp.role} • {exp.duration}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.7
                      }}
                    >
                      {exp.description}
                    </Typography>

                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
}