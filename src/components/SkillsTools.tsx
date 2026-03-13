import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { FiMonitor } from "react-icons/fi";
import { useColorMode } from "../context/ThemeContext";

const expertiseData = [
  {
    title1: "Software",
    title2: "Development",
    highlightColor: "#f50057", // Pinkish red
    icon: <FiMonitor size={46} color="#fff" />,
    description: "Experienced in both functional and OOP: java, JavaScript, TypeScript."
  },
  {
    title1: "Frontend Dev",
    title2: "React",
    highlightColor: "#2196f3", // Blue
    icon: <FaReact size={46} color="#fff" />,
    description: "Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks."
  },
  {
    title1: "React Dev",
    // title2: "Android, iOS",
    highlightColor: "#ff9800", // Orange
    icon: <SiFlutter size={46} color="#fff" />,
    description: "Skilled in developing hybrid web apps and cross-platform solutions using the React library ."
  }
];

export default function SkillsTools() {


  return (
    <Box
      id="expertise"
      sx={{
        position: "relative",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 8, md: 12 },
        // backgroundColor: "#111",
        color: "#fff",
        // backgroundImage: 'url("https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code-768x384.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor:"rgba(18, 18, 18, 0.85)", // Slightly lighter overlay in light mode, but still dark to contrast with white text
          zIndex: 0,
        }
      }}
    >
      <Box position="relative" zIndex={1} maxWidth="1200px" mx="auto">
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
            sx={{
              color: "#fff",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontFamily: "'Inter', sans-serif"
            }}
          >
            My Expertise
          </Typography>
        </motion.div>

        <Grid container sx={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}>
          {expertiseData.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    p: { xs: 3, md: 4, lg: 5 },
                    height: "100%",
                    borderBottom: { xs: index !== 2 ? "1px solid rgba(255, 255, 255, 0.2)" : "none", md: "none" },
                    borderRight: { md: index !== 2 ? "1px solid rgba(255, 255, 255, 0.2)" : "none" },
                    display: "flex",
                    flexDirection: "column",
                    transition: "background-color 0.3s",
                    '&:hover': {
                      backgroundColor: "rgba(255,255,255,0.03)"
                    }
                  }}
                >
                  {/* Header Section */}
                  <Box display="flex" alignItems="flex-start" mb={4}>
                    <Box mr={2.5} mt={0.5}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                          position: 'relative',
                          display: 'inline-block',
                          wordBreak: 'break-word',
                          zIndex: 1,
                          fontSize: { xs: "1.3rem", lg: "1.5rem" },
                          color: '#fff'
                        }}
                      >
                        {item.title1}
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: '4px',
                            left: 0,
                            width: '100%',
                            height: '8px',
                            backgroundColor: item.highlightColor,
                            zIndex: -1,
                            opacity: 0.9
                          }}
                        />
                      </Typography>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                          fontSize: { xs: "1.3rem", lg: "1.5rem" },
                          color: '#fff'
                        }}
                      >
                        {item.title2}
                      </Typography>
                    </Box>
                  </Box>

                  {/* HTML tags & text */}
                  <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', fontSize: '0.9rem', mb: 1 }}>
                    &lt;h3&gt;
                  </Typography>

                  <Typography
                    sx={{
                      borderLeft: "1px solid rgba(255,255,255,0.2)",
                      pl: 3,
                      ml: 1.5,
                      fontFamily: 'monospace',
                      color: "rgba(255,255,255,0.85)",
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      lineHeight: 1.6,
                      flex: 1
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', fontSize: '0.9rem', mt: 1 }}>
                    &lt;/h3&gt;
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
