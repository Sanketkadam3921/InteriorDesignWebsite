import React from "react";
import { Container, Typography, useTheme } from "@mui/material";
import { INTRODUCTION_DATA } from "./constants";

export default function Introduction() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ pt: 6, pb: 2, px: { xs: 2, md: 4 } }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: "bold",
          color: theme.palette.text.primary,
          mb: 2,
          lineHeight: 1.2,
        }}
      >
        {INTRODUCTION_DATA.title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          color: theme.palette.text.secondary,
          lineHeight: 1.6,
          mb: 0,
          maxWidth: "1000px",
        }}
      >
        {INTRODUCTION_DATA.description}
      </Typography>
    </Container>
  );
}

