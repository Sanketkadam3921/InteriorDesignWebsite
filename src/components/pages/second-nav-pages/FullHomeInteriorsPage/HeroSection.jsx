import React from "react";
import { Box, Typography, Button, useTheme, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { HERO_DATA } from "./constants";

const HeroSectionStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "70vh",
  minHeight: "500px",
  backgroundImage: `url('${HERO_DATA.backgroundImage}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
}));

export default function HeroSection() {
  const theme = useTheme();

  return (
    <HeroSectionStyled>
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          maxWidth: "800px",
          px: { xs: 2, sm: 3, md: 4 },
          mx: "auto",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem", lg: "3rem" },
            fontWeight: "bold",
            lineHeight: 1.2,
            mb: 4,
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            textAlign: "center",
            wordWrap: "break-word",
            hyphens: "auto",
          }}
        >
          {HERO_DATA.title}
        </Typography>

        <Button
          component={Link}
          to={HERO_DATA.ctaLink}
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
            textTransform: "uppercase",
            fontWeight: "bold",
            px: { xs: 3, md: 4 },
            py: { xs: 1.5, md: 2 },
            fontSize: { xs: "0.9rem", md: "1rem" },
            borderRadius: "50px",
            boxShadow: `0 4px 16px ${theme.palette.primary.main}30`,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              transform: "translateY(-2px)",
              boxShadow: `0 6px 20px ${theme.palette.primary.main}40`,
            },
            transition: "all 0.3s ease-in-out",
          }}
        >
          {HERO_DATA.ctaText}
        </Button>
      </Box>
    </HeroSectionStyled>
  );
}






