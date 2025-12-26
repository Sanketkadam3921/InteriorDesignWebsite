import React from "react";
import { Box, Typography, Button, Container, Grid, styled } from "@mui/material";
import { Link } from "react-router-dom";
import themeNeutral from "../../../../../themeNeutral";
import { LUXURY_DESCRIPTION_DATA } from "./constants";

const SecondSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0),
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(5, 0),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 0),
  },
}));

const FleurDeLisIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  left: "50%",
  transform: "translateX(-50%)",
  width: "24px",
  height: "24px",
  background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23B8860B'%3E%3Cpath d='M12 2L13.5 6.5L18 8L13.5 9.5L12 14L10.5 9.5L6 8L10.5 6.5L12 2Z'/%3E%3C/svg%3E") no-repeat center`,
  backgroundSize: "contain",
  zIndex: 2,
}));

const TextColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

const LuxuryHeadline = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  lineHeight: 1.2,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.8,
  marginBottom: theme.spacing(4),
  fontSize: { xs: "1rem", md: "1.15rem" },
  maxWidth: { xs: "100%", md: "900px" },
  mx: "auto",
}));

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2, 4),
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    transform: "translateY(-2px)",
    boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
  },
  transition: "all 0.3s ease",
}));

export default function LuxuryDescription() {
  return (
    <SecondSection>
      <FleurDeLisIcon />
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid item xs={12}>
            <TextColumn>
              <LuxuryHeadline
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  fontWeight: themeNeutral.typography.h2.fontWeight,
                  color: themeNeutral.palette.text.primary,
                }}
              >
                {LUXURY_DESCRIPTION_DATA.headline.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < LUXURY_DESCRIPTION_DATA.headline.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </LuxuryHeadline>
              <DescriptionText
                variant="body1"
                sx={{
                  color: themeNeutral.palette.text.secondary,
                }}
              >
                {LUXURY_DESCRIPTION_DATA.description}
              </DescriptionText>
              <ContactButton component={Link} to={LUXURY_DESCRIPTION_DATA.ctaLink} size="large">
                {LUXURY_DESCRIPTION_DATA.ctaText}
              </ContactButton>
            </TextColumn>
          </Grid>
        </Grid>
      </Container>
    </SecondSection>
  );
}

