import React from "react";
import { Box, Typography } from "@mui/material";
import themeNeutral from "../../../../../themeNeutral";
import { INTRODUCTION_TEXT } from "./constants";

export default function Introduction() {
  return (
    <Box sx={{ mb: 8 }}>
      {/* Title */}
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontSize: { xs: "1.8rem", md: "2.2rem" },
          fontWeight: themeNeutral.typography.h2.fontWeight,
          color: themeNeutral.palette.text.primary,
          textAlign: "center",
          mb: 3,
        }}
      >
        Luxury Interiors Designed for Modern Living
      </Typography>

      {/* Description Text */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", md: "1.15rem" },
          color: themeNeutral.palette.text.secondary,
          lineHeight: 1.8,
          mb: 6,
          maxWidth: { xs: "100%", md: "900px" },
          mx: "auto",
          textAlign: "center",
        }}
      >
        {INTRODUCTION_TEXT}
      </Typography>
    </Box>
  );
}

