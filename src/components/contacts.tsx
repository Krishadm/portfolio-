
import React from "react";
import { Box, Typography, Divider, IconButton, Stack } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import { useColorMode } from "../context/ThemeContext";

const ContactPage: React.FC = () => {
  const sentence =
    "Feel free to reach out to me for any questions and opportunities!";
  const words = sentence.split(" ");


  const socials = [
    {
      icon: <WhatsAppIcon fontSize="large" />,
      link: "https://wa.me/9150131154",
      gradient: "linear-gradient(135deg,#25D366,#128C7E)",
    },
    {
      icon: <InstagramIcon fontSize="large" />,
      link: "https://www.instagram.com/itskrishnakanth_11",
      gradient: "linear-gradient(135deg,#833AB4,#FD1D1D,#FCAF45)",
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      link: "https://www.linkedin.com/in/krishna-kanth-s-bab53b392?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      gradient: "linear-gradient(135deg,#0A66C2,#004182)",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box
      id="contact"
      sx={{
        position: "relative",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 10, md: 14 },
        color: "#fff",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          bgcolor:"rgba(18, 18, 18, 0.85)",
          zIndex: 0,
        },
      }}
    >
      <Box position="relative" zIndex={1} maxWidth="1000px" mx="auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            mb={6}
            sx={{
              fontSize: { xs: "2.4rem", md: "3.4rem" },
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Contact Me
          </Typography>
        </motion.div>

        {/* CARD */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Box
            sx={{
              border: "1px solid rgba(255,255,255,0.2)",
              p: { xs: 4, md: 6 },
              textAlign: "center",
              backdropFilter: "blur(10px)",
              transition: "all 0.4s ease",

              "&:hover": {
                borderColor: "rgba(255,255,255,0.35)",
                boxShadow: "0 0 40px rgba(255,255,255,0.08)",
              },
            }}
          >

            {/* Sentence animation */}
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.85)",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "6px",
                mb: 5,
              }}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              ))}
            </Typography>

            {/* SOCIAL ICONS */}
            <Stack direction="row" spacing={4} justifyContent="center">
              {socials.map((itemData, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{
                    scale: 1.15,
                    y: -6,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconButton
                    component="a"
                    href={itemData.link}
                    target="_blank"
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.2)",
                      background: "rgba(255,255,255,0.05)",
                      color: "#fff",
                      position: "relative",
                      overflow: "hidden",

                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background: itemData.gradient,
                        opacity: 0,
                        transition: "opacity 0.3s",
                      },

                      "&:hover::before": {
                        opacity: 1,
                      },

                      "& svg": {
                        position: "relative",
                        zIndex: 1,
                      },
                    }}
                  >
                    {itemData.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Stack>

            <Divider
              sx={{
                my: 5,
                borderColor: "rgba(255,255,255,0.1)",
              }}
            />

            {/* Footer */}
            <motion.div variants={item}>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                &lt;/contact&gt;
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.85rem",
                  mt: 1,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                © 2026 Krishnakanth
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ContactPage;

