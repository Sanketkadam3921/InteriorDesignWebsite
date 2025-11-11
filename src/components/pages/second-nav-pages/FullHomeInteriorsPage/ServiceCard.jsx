import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, useTheme } from "@mui/material";

export default function ServiceCard({ title, description, image, alt }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "400px",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease-in-out",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={alt}
        sx={{ objectFit: "cover" }}
      />
      <CardContent
        sx={{
          p: 2.5,
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: "bold",
              color: theme.palette.text.primary,
              mb: 1,
              fontSize: "1.1rem",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.5, fontSize: "0.9rem" }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

