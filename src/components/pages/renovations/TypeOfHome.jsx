import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const TypeOfHome = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;

  const homeTypes = [
    {
      title: "1 BHK",
      image:
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=80",
      description: "Compact living with smart design solutions",
    },
    {
      title: "2 BHK",
      image:
        "https://imgs.search.brave.com/F5GNSNnRCxtCLGkwfS0b4gSykA_8Juy6fcX9Y8mlejQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/NjE2MjQxMy9waG90/by9vcGVuLXBsYW4t/bGl2aW5nLXNwYWNl/LWluLXJlc2lkZW50/aWFsLWhvdXNlLXdp/dGgtbmF0dXJhbC1s/aWdodC1hbmQtcmV0/cm8tZnVybml0dXJl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz11RjFvMTdFazJt/OWktX0RpMVlVVHUt/Z3JuMU5fOEttM0d0/dzducnVaaGdnPQ",
      description: "Perfect balance of space and functionality",
    },
    {
      title: "3 BHK",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      description: "Spacious family living with modern amenities",
    },
    {
      title: "4 BHK",
      image:
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=80",
      description: "Luxury living with premium finishes",
    },
    {
      title: "5+ BHK",
      image:
        "https://imgs.search.brave.com/nQS4MerwLK7hFX0gxBOCBxU2nzPjXxCvZix2vHVEUdc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/MDcxNzUzMi9waG90/by9tb2Rlcm4taG9t/ZS1pbnRlcmlvci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/dS1iQ2FVVVc1MFpf/RnprUUo3SkJEbUxm/U05GdERIbGlEcGwx/ckcwTVhDQT0",
      description: "Ultimate luxury and personalized spaces",
    },
  ];

  const maxIndex = homeTypes.length - cardsToShow;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 600,
              mb: 2,
            }}
          >
            Renovations for Every Type of Home
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "1.1rem",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Superior finishes, trendy designs, and quality modules for the
            perfect revamp.
          </Typography>
        </Box>

        {/* Carousel */}
        <Box sx={{ position: "relative", px: { xs: 0, md: 6 } }}>
          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: "absolute",
              left: { xs: -16, md: -8 },
              top: "45%",
              transform: "translateY(-50%)",
              zIndex: 2,
              backgroundColor: "white",
              boxShadow: 2,
              width: 48,
              height: 48,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
                boxShadow: 4,
              },
            }}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: -16, md: -8 },
              top: "45%",
              transform: "translateY(-50%)",
              zIndex: 2,
              backgroundColor: "white",
              boxShadow: 2,
              width: 48,
              height: 48,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
                boxShadow: 4,
              },
            }}
          >
            <ChevronRight />
          </IconButton>

          {/* Cards Container */}
          <Box sx={{ overflow: "hidden" }}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                transition: "transform 0.6s ease-in-out",
                transform: `translateX(-${
                  currentIndex * (100 / cardsToShow)
                }%)`,
              }}
            >
              {homeTypes.map((home, index) => (
                <Card
                  key={index}
                  sx={{
                    minWidth: `calc(${100 / cardsToShow}% - ${
                      (3 * (cardsToShow - 1)) / cardsToShow
                    }rem)`,
                    flex: `0 0 calc(${100 / cardsToShow}% - ${
                      (3 * (cardsToShow - 1)) / cardsToShow
                    }rem)`,
                    overflow: "hidden",
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 8,
                    },
                  }}
                >
                  {/* Card Image */}
                  <Box
                    sx={{
                      height: 250,
                      backgroundImage: `url(${home.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                      transition: "transform 0.5s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />

                  {/* Card Content */}
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        mb: 1,
                      }}
                    >
                      {home.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 3,
                        minHeight: 40,
                      }}
                    >
                      {home.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Dots Indicator */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mt: 4,
            }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor:
                    index === currentIndex
                      ? theme.palette.primary.main
                      : "#D0D0D0",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    transform: "scale(1.3)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TypeOfHome;
