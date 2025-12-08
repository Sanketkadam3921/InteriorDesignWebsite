import React from "react";
import { Box, Container, Typography, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { UNIQUE_FEATURES_DATA } from "./constants";
import FeatureItem from "./FeatureItem";

const UniqueSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(5, 0),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 0),
  },
}));

const UniqueTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "serif",
  color: theme.palette.text.primary,
  textAlign: "center",
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    marginBottom: theme.spacing(4),
  },
}));

const FeaturesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(4),
  maxWidth: "1200px",
  margin: "0 auto",
  padding: theme.spacing(0, 4),
  width: "100%",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(3),
    maxWidth: "100%",
    padding: theme.spacing(0, 2),
  },
  [theme.breakpoints.between("sm", "md")]: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: theme.spacing(2),
    padding: theme.spacing(0, 2),
  },
}));

const UniqueButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2, 4),
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "none",
  marginTop: theme.spacing(4),
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    transform: "translateY(-2px)",
    boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
  },
  transition: "all 0.3s ease",
}));

export default function UniqueFeatures() {
  return (
    <UniqueSection>
      <Container maxWidth="lg">
        <UniqueTitle
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
            fontWeight: "300",
          }}
        >
          {UNIQUE_FEATURES_DATA.title}
        </UniqueTitle>

        <FeaturesContainer>
          {UNIQUE_FEATURES_DATA.features.map((feature) => (
            <FeatureItem key={feature.id} icon={feature.icon} text={feature.text} />
          ))}
        </FeaturesContainer>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <UniqueButton component={Link} to={UNIQUE_FEATURES_DATA.ctaLink} size="large">
            {UNIQUE_FEATURES_DATA.ctaText}
          </UniqueButton>
        </Box>
      </Container>
    </UniqueSection>
  );
}












