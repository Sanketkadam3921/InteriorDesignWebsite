import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

export default function HomeServices() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const handleNext = () => {
    setCurrentServiceIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentServiceIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const services = [
    {
      title: "Modular Interiors",
      image:
        "https://ik.imagekit.io/bowr9614/4ImagesBelowHero/Modular%20Interiors.JPG",
      path: "/offerings/modular-interiors",
    },
    {
      title: "Full Home Interiors",
      image:
        "https://ik.imagekit.io/bowr9614/4ImagesBelowHero/Full%20Home%20Interiors.JPG",
      path: "/designs/full-home-interiors",
    },
    {
      title: "Luxury Interiors",
      image:
        "https://ik.imagekit.io/bowr9614/4ImagesBelowHero/Luxury%20Interiors.JPG",
      path: "/designs/luxury-interiors",
    },
    {
      title: "Renovations",
      image: "https://ik.imagekit.io/bowr9614/4ImagesBelowHero/Renovation.JPG",
      path: "/renovations",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", py: { xs: 4, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Main heading */}
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: { xs: 2, md: 4 },
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          Complete design solutions for homes & workspaces
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: { xs: 4, md: 8 }, px: { xs: 2, md: 0 } }}
        >
          From residential interiors to professional commercial spaces, we
          manage everything from layout planning to final styling with quality
          and consistency.
        </Typography>

        {/* Service items */}
        {isMobile ? (
          // Mobile view (carousel)
          <Box sx={{ position: "relative", width: "100%" }}>
            {/* Service Card */}
            <Box
              onClick={() => navigate(services[currentServiceIndex].path)}
              sx={{
                backgroundColor: "#fff",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Box
                component="img"
                src={services[currentServiceIndex].image}
                alt={services[currentServiceIndex].title}
                sx={{
                  width: "100%",
                  height: 250,
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  p: 3,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    {services[currentServiceIndex].title}
                  </Typography>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(services[currentServiceIndex].path);
                    }}
                    sx={{
                      color: "primary.main",
                      "&:hover": { backgroundColor: "transparent" },
                      p: 0,
                    }}
                  >
                    <ChevronRightIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Box>

            {/* Navigation Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 3,
                gap: 2,
              }}
            >
              <IconButton
                onClick={handlePrev}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                <ArrowBackIcon />
              </IconButton>

              {/* Dots indicator */}
              <Box sx={{ display: "flex", gap: 1 }}>
                {services.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor:
                        index === currentServiceIndex
                          ? theme.palette.primary.main
                          : theme.palette.grey[300],
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => setCurrentServiceIndex(index)}
                  />
                ))}
              </Box>

              <IconButton
                onClick={handleNext}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>

            {/* Service counter */}
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              sx={{ mt: 1 }}
            >
              {currentServiceIndex + 1} of {services.length}
            </Typography>
          </Box>
        ) : (
          // Desktop view (grid layout)
          <Box
            sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                onClick={() => navigate(service.path)}
                sx={{
                  flex: "0 0 23%",
                  backgroundColor: "#fff",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={600}>
                      {service.title}
                    </Typography>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(service.path);
                      }}
                      sx={{
                        color: "primary.main",
                        "&:hover": { backgroundColor: "transparent" },
                        p: 0,
                      }}
                    >
                      <ChevronRightIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
