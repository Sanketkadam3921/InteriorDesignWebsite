import React from "react";
import { Paper, Box, Typography, useTheme } from "@mui/material";

export default function ProcessStepCard({
  stepNumber,
  title,
  description,
  duration,
  payment,
  hasMilestone,
  hasBorder,
}) {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: 3,
        backgroundColor: hasBorder
          ? theme.palette.background.paper
          : "white",
        borderLeft: hasBorder
          ? `4px solid ${theme.palette.primary.main}`
          : "none",
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "relative",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: theme.palette.primary.main,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
            mb: 2,
          }}
        >
          {stepNumber}
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: theme.palette.text.primary,
            mb: 1,
            fontSize: { xs: "0.95rem", md: "1rem" },
          }}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: "0.8rem", md: "0.85rem" },
              lineHeight: 1.5,
            }}
          >
            {description}
          </Typography>
        )}
        {duration && (
          <Typography variant="body2" sx={{ color: "#666", mb: 1, mt: 1 }}>
            {duration}
          </Typography>
        )}
        {payment && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <Typography variant="body2" sx={{ color: "#666" }}>
              {payment}
            </Typography>
            {hasMilestone && (
              <Box
                sx={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "12px",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                MILESTONE
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Paper>
  );
}

