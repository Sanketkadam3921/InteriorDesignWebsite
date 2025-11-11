import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function TimelineItem({ year, title, description }) {
  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            backgroundColor: "secondary.dark",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 3,
            flexShrink: 0,
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            {year}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

