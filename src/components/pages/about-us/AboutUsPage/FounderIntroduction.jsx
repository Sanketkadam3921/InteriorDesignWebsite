import React from "react";
import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import { FOUNDER_INTRODUCTION } from "./constants";
// Import logo image - using ?url to tell Vite to treat it as a static asset
import logoImage from "../../../../assets/Logo_Image.JPG?url";

export default function FounderIntroduction() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[100]} 100%)`,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 6, lg: 6 }}
          alignItems={{ xs: "flex-start", md: "flex-start", lg: "center" }}
          sx={{
            opacity: 0,
            transform: "translateY(20px)",
            animation: "fadeInUp 1s ease forwards",
            "@keyframes fadeInUp": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          {/* LEFT SECTION - TEXT */}
          <Grid
            item
            xs={12}
            md={12}
            lg={6}
            sx={{
              width: {
                sm: "390px",
                md: "500px",
                lg: "550px",
              },
              maxWidth: {
                xs: "100%", // Full width on mobile
                md: "90%", // Slightly narrower on tablet
                lg: "100%", // Proper half width on desktop
              },
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontSize: { xs: "1.7rem", md: "2.2rem" },
                fontWeight: 700,
                color: theme.palette.text.primary,
                mb: 2,
                position: "relative",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: "-10px",
                  width: "60px",
                  height: "3px",
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "2px",
                },
              }}
            >
              {FOUNDER_INTRODUCTION.greeting}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", md: "1.15rem" },
                color: theme.palette.primary.main,
                mb: 4,
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              {FOUNDER_INTRODUCTION.role}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.05rem" },
                color: theme.palette.text.secondary,
                lineHeight: 1.9,
                mb: 4,
                maxWidth: { xs: "100%", md: "100%", lg: "95%" },
              }}
            >
              {FOUNDER_INTRODUCTION.message}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "0.95rem", md: "1rem" },
                color: theme.palette.text.secondary,
                fontStyle: "italic",
              }}
            >
              {FOUNDER_INTRODUCTION.signature}
            </Typography>
          </Grid>

          {/* RIGHT SECTION - IMAGE */}
          <Grid
            item
            xs={12}
            md={12}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                cursor: "pointer",

                // Responsive height + width control
                height: {
                  xs: 300,
                  sm: 300,
                  md: 400,
                  lg: 550,
                  xl: 540,
                },
                width: {
                  xs: "100%",
                  sm: "290px",
                  md: "350px",
                  lg: "550px",
                },
                mt: { xs: 4, sm: 20, md: 15, lg: 0 },
                ml: {
                  xs: 0, // applies only on mobile
                  sm: 0, // no margin on tablets & desktops
                },
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
                },

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0.15), rgba(255,255,255,0))",
                  zIndex: 2,
                },
              }}
            >
              <Box
                component="img"
                src={logoImage}
                alt="KalaKruti Studio Logo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
