import React from "react";
import { Box, Typography } from "@mui/material";
import themeNeutral from "../../../themeNeutral";

const INTRODUCTION_TEXT =
  "Our Home Renovations offering brings intelligent design and smart engineering together to create spaces that are elegant, durable, and effortlessly functional. Whether it's your home, office, or a commercial space, our renovation solutions are crafted to simplify your life while enhancing the aesthetics of every corner.";

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
        Home Renovations Designed for Modern Living
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

