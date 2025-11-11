import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  IconButton,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function FounderCard({
  name,
  role,
  description,
  image,
  borderColor,
}) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 4,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[4],
        transition: "0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: theme.shadows[10],
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
            border: `4px solid ${borderColor || theme.palette.primary.main}`,
            boxShadow: theme.shadows[3],
          }}
        />

        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "bold",
            mb: 1,
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 500,
            mb: 2,
          }}
        >
          {role}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.7,
            mb: 3,
          }}
        >
          {description}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
