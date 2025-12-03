import React from "react";
import { Card, CardMedia, CardContent, Box, Typography, useTheme } from "@mui/material";

export default function TestimonialCard({ quote, author, location, image }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="Customer testimonial"
          sx={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 12,
            right: 12,
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "white",
              transform: "scale(1.1)",
            },
          }}
        >
          <Box
            sx={{
              width: 0,
              height: 0,
              borderLeft: "12px solid #B28E52",
              borderTop: "8px solid transparent",
              borderBottom: "8px solid transparent",
              marginLeft: "3px",
            }}
          />
        </Box>
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
            mb: 3,
            fontStyle: "italic",
            fontSize: "0.95rem",
          }}
        >
          "{quote}"
        </Typography>
        <Box sx={{ borderTop: "1px solid #eee", pt: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: theme.palette.text.primary,
              mb: 0.5,
              fontSize: "1rem",
            }}
          >
            {author}
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", fontSize: "0.9rem" }}>
            {location}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}










