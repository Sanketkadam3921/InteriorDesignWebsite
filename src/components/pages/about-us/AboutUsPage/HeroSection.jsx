import React from "react";
import { Box, Typography } from "@mui/material";
import { HERO_DATA } from "./constants";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "60vh", sm: "70vh", md: "80vh" },
        backgroundImage: `url("${HERO_DATA.backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: HERO_DATA.overlayColor,
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          px: 3,
          maxWidth: "800px",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: "white",
            textShadow: "2px 2px 4px rgba(46, 50, 52, 0.9)",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
          }}
        >
          {HERO_DATA.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "normal",
            color: "white",
            textShadow: "1px 1px 2px rgba(46, 50, 52, 0.9)",
            fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
            lineHeight: 1.4,
          }}
        >
          {HERO_DATA.subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

