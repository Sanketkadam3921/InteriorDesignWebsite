import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { HERO_DATA } from "./constants";

const HeroSectionStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "100vw",
  height: "100vh",
  minHeight: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    height: "80vh",
    minHeight: "500px",
  },
  [theme.breakpoints.down("md")]: {
    height: "70vh",
    minHeight: "400px",
  },
}));

const ImageSection = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url('${HERO_DATA.backgroundImage}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  zIndex: 1,
});

const ImageOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
  zIndex: 2,
});

const TextSection = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 3,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(4),
  maxWidth: "800px",
  margin: "0 auto",
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(3),
    maxWidth: "700px",
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
    maxWidth: "90%",
  },
}));

const LuxuryText = styled(Typography)(({ theme }) => ({
  fontFamily: "serif",
  color: "white",
  textAlign: "center",
  lineHeight: 1.2,
  marginBottom: theme.spacing(4),
  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  [theme.breakpoints.down("lg")]: {
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    marginBottom: theme.spacing(2),
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2, 4),
  borderRadius: "8px",
  fontSize: "1.1rem",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    transform: "translateY(-2px)",
    boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
  },
  transition: "all 0.3s ease",
}));

export default function HeroSection() {
  return (
    <HeroSectionStyled>
      <ImageSection />
      <ImageOverlay />
      <TextSection>
        <LuxuryText
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
            fontWeight: "300",
          }}
        >
          {HERO_DATA.title}
        </LuxuryText>
        <CTAButton component={Link} to={HERO_DATA.ctaLink} size="large">
          {HERO_DATA.ctaText}
        </CTAButton>
      </TextSection>
    </HeroSectionStyled>
  );
}


