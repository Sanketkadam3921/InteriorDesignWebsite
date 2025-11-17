import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default function ProcessDetailItem({ title, description, hasMilestone }) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: theme.palette.primary.main,
          mt: 1,
          flexShrink: 0,
        }}
      />
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: hasMilestone ? 1 : 0 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: theme.palette.text.primary,
              mb: 1,
              fontSize: "1rem",
            }}
          >
            {title}
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
        <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.5 }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}





