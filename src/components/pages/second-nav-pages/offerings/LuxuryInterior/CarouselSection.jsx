import React, { useState } from "react";
import { Box, Container, Typography, IconButton, styled } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CAROUSEL_DATA } from "./constants";

const CarouselSectionStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(5, 0),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 0),
  },
}));

const CarouselTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "serif",
  color: theme.palette.text.primary,
  textAlign: "center",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

const CarouselSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: "center",
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    fontSize: "0.95rem",
    marginBottom: theme.spacing(4),
  },
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: theme.spacing(0, 4),
  width: "100%",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 2),
    maxWidth: "100%",
  },
}));

const CarouselWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  position: "relative",
  width: "100%",
  maxWidth: "100%",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    gap: theme.spacing(1.5),
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: theme.spacing(1),
    width: "100%",
    maxWidth: "100%",
  },
}));

const SideImage = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "300px",
  borderRadius: "12px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(2px) brightness(0.7)",
  transition: "all 0.3s ease",
  flexShrink: 0,
  [theme.breakpoints.down("lg")]: {
    width: "160px",
    height: "240px",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const CentralImage = styled(Box)(({ theme }) => ({
  width: "400px",
  height: "500px",
  borderRadius: "12px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  border: `3px solid ${theme.palette.secondary.main}`,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
  transition: "all 0.3s ease",
  flexShrink: 0,
  [theme.breakpoints.down("lg")]: {
    width: "320px",
    height: "400px",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    maxWidth: "350px",
    height: "400px",
    margin: "0 auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "300px",
    height: "350px",
    margin: "0 auto",
  },
}));

const NavigationArrow = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.secondary,
  width: "48px",
  height: "48px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  zIndex: 3,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    transform: "scale(1.1)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
  },
  transition: "all 0.3s ease",
  "&.left": {
    left: "10%",
    top: "50%",
    transform: "translateY(-50%)",
    [theme.breakpoints.down("md")]: {
      left: "2%",
      width: "40px",
      height: "40px",
    },
  },
  "&.right": {
    right: "10%",
    top: "50%",
    transform: "translateY(-50%)",
    [theme.breakpoints.down("md")]: {
      right: "2%",
      width: "40px",
      height: "40px",
    },
  },
}));

export default function CarouselSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? CAROUSEL_DATA.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === CAROUSEL_DATA.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <CarouselSectionStyled>
      <Container maxWidth="lg">
        <CarouselTitle
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
            fontWeight: "300",
          }}
        >
          {CAROUSEL_DATA.title}
        </CarouselTitle>

        <CarouselSubtitle
          variant="h6"
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            fontWeight: "400",
          }}
        >
          {CAROUSEL_DATA.subtitle}
        </CarouselSubtitle>

        <CarouselContainer>
          <CarouselWrapper>
            <SideImage
              sx={{
                backgroundImage: `url(${CAROUSEL_DATA.images[currentImageIndex].left})`,
              }}
            />
            <CentralImage
              sx={{
                backgroundImage: `url(${CAROUSEL_DATA.images[currentImageIndex].central})`,
              }}
            />
            <SideImage
              sx={{
                backgroundImage: `url(${CAROUSEL_DATA.images[currentImageIndex].right})`,
              }}
            />

            <NavigationArrow
              className="left"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <ChevronLeftIcon />
            </NavigationArrow>

            <NavigationArrow
              className="right"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRightIcon />
            </NavigationArrow>
          </CarouselWrapper>
        </CarouselContainer>
      </Container>
    </CarouselSectionStyled>
  );
}



