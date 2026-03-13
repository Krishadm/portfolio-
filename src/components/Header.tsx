import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useEffect, useState } from "react";

const sections = [
  { label: "Home", id: "about-me" },
  { label: "Expertise", id: "skills-tools" },
  { label: "Work", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("about-me");
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setMenuOpen(false); // close mobile menu
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "transparent",
          backdropFilter: "blur(6px)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 2, md: 4 },
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box>
            <Typography
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "22px",
                color: "#7dd3fc",
                letterSpacing: "1px",
              }}
            >
              Krishnakanth<span style={{ color: "#a78bfa" }}></span>
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {sections.map(({ label, id }) => (
                <Box
                  key={id}
                  onClick={() => handleScroll(id)}
                  sx={{
                    cursor: "pointer",
                    fontFamily: "monospace",
                    transition: "0.3s",
                    "&:hover": {
                      color: "#7dd3fc",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      letterSpacing: "0.5px",
                      // textTransform: "lowercase",
                      color: activeSection === id ? "#7dd3fc" : "white",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <Box sx={{ marginLeft: "auto" }}>
              <IconButton
                onClick={() => setMenuOpen(!menuOpen)}
                sx={{ color: "white" }}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          )}
        </Toolbar>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <Box
            sx={{
              background: "rgba(0,0,0,0.9)",
              backdropFilter: "blur(10px)",
            }}
          >
            <List>
              {sections.map(({ label, id }) => (
                <ListItem key={id} disablePadding>
                  <ListItemButton
                    onClick={() => handleScroll(id)}
                    selected={activeSection === id}
                  >
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{
                        textTransform: "capitalize",
                        color: "white",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </AppBar>
    </>
  );
}