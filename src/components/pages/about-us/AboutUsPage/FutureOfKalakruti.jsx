import React from "react";
import { Box, Container, Typography, useTheme, Paper } from "@mui/material";
import { FUTURE_DATA } from "./constants";

export default function FutureOfKalakruti() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 4, md: 7 },
        background: `linear-gradient(180deg, ${theme.palette.grey[100]} 0%, ${theme.palette.background.default} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 5, md: 7 },
            opacity: 0,
            transform: "translateY(20px)",
            animation: "fadeInUp 1s ease forwards",
            "@keyframes fadeInUp": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: "1.9rem", md: "2.6rem" },
              fontWeight: 800,
              color: theme.palette.text.primary,
              mb: 2,
              position: "relative",
              display: "inline-block",

              "&::after": {
                content: '""',
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: "-10px",
                width: "70px",
                height: "4px",
                borderRadius: "2px",
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            {FUTURE_DATA.title}
          </Typography>
        </Box>

        {/* Description Box */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            background: theme.palette.background.paper,
            boxShadow: "0 8px 30px rgba(0,0,0,0.07)",
            backdropFilter: "blur(8px)",

            opacity: 0,
            transform: "translateY(30px)",
            animation: "fadeInUp 1.2s ease forwards",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.05rem", md: "1.2rem" },
              color: theme.palette.text.secondary,
              lineHeight: 1.85,
              whiteSpace: "pre-line",
              textAlign: "center",
              fontWeight: 400,
              display: "flex",
            }}
          >
            {FUTURE_DATA.description}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}










