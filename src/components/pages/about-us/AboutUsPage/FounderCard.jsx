import React from "react";
import {
  Card,
  CardContent,
  Typography,
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
  socialLinks,
}) {
  const theme = useTheme();

  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Card
      sx={{
        height: "100%",
        width: {
          xs: "100%",
          sm: "335px",
          md: "450px",
          lg: "550px",
        },
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
        <Box
          sx={{
            width: {
              xs: 180,
              sm: 200,
              md: 220,
              lg: 250,
            },
            height: {
              xs: 180,
              sm: 200,
              md: 220,
              lg: 250,
            },
            mx: "auto",
            mb: 3,
            borderRadius: "50%",
            overflow: "hidden",
            border: `4px solid ${borderColor || theme.palette.primary.main}`,
            boxShadow: theme.shadows[4],
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: `2px solid ${theme.palette.background.paper}`,
              boxSizing: "border-box",
            },
          }}
        >
          <Box
            component="img"
            src={image}
            alt={name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>

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
          {socialLinks?.map((link, index) => {
            if (link.platform === "linkedin" && link.url) {
              return (
                <IconButton
                  key={index}
                  size="small"
                  sx={{ color: theme.palette.primary.main }}
                  onClick={() => handleSocialClick(link.url)}
                >
                  <LinkedInIcon />
                </IconButton>
              );
            }
            if (link.platform === "instagram" && link.url) {
              return (
                <IconButton
                  key={index}
                  size="small"
                  sx={{ color: theme.palette.primary.main }}
                  onClick={() => handleSocialClick(link.url)}
                >
                  <InstagramIcon />
                </IconButton>
              );
            }
            return null;
          })}
        </Box>
      </CardContent>
    </Card>
  );
}
