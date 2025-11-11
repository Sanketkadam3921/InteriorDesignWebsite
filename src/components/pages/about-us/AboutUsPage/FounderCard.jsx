import React from "react";
import { Card, CardContent, Typography, Avatar, Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function FounderCard({ name, role, description, image, borderColor }) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        },
      }}
    >
      <CardContent sx={{ p: 4, textAlign: "center" }}>
        <Avatar
          src={image}
          sx={{
            width: 120,
            height: 120,
            mx: "auto",
            mb: 3,
            border: "4px solid",
            borderColor: borderColor,
          }}
        />
        <Typography
          variant="h5"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            mb: 1,
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "primary.main",
            fontWeight: "medium",
            mb: 2,
          }}
        >
          {role}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <IconButton
            size="small"
            sx={{ color: "neutral.darkGray" }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{ color: "neutral.darkGray" }}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

