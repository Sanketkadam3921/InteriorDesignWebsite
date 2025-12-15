import React from "react";
import { Box, Container, Typography, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { QUADRANT_DATA } from "./constants";
import QuadrantItem from "./QuadrantItem";

const QuadrantSectionStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(8, 0),
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(5, 0),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 0),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "serif",
  color: theme.palette.text.primary,
  textAlign: "center",
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    marginBottom: theme.spacing(4),
  },
}));

const QuadrantContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1100px",
  margin: "0 auto",
  padding: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

const QuadrantGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: theme.spacing(2.5),
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

const ConsultationButton = styled(Button)(({ theme }) => ({
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

export default function QuadrantSection() {
  return (
    <QuadrantSectionStyled>
      <Container maxWidth="lg">
        <SectionTitle
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
            fontWeight: "300",
          }}
        >
          {QUADRANT_DATA.title}
        </SectionTitle>

        <QuadrantContainer>
          <QuadrantGrid>
            {QUADRANT_DATA.quadrants.map((quadrant) => (
              <QuadrantItem
                key={quadrant.id}
                title={quadrant.title}
                description={quadrant.description}
              />
            ))}
          </QuadrantGrid>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <ConsultationButton
              component={Link}
              to={QUADRANT_DATA.ctaLink}
              size="large"
            >
              {QUADRANT_DATA.ctaText}
            </ConsultationButton>
          </Box>
        </QuadrantContainer>
      </Container>
    </QuadrantSectionStyled>
  );
}
