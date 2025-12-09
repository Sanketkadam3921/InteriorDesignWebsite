import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Container,
  Grid,
  Fade,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const inspirationItems = [
  {
    title: "Living Room",
    image:
      "https://ik.imagekit.io/bowr9614/HomePage_Hero/elegant-modern-living-room-with-gray-sofa.jpg?updatedAt=1764590990093",
  },
  {
    title: "Master Bedroom",
    image:
      "https://ik.imagekit.io/bowr9614/Home%20Inspiration/Inspiration/Master_Bedroom.jpg",
  },

  {
    title: "KalaKruti Studio Designs",
    image:
      "https://ik.imagekit.io/bowr9614/Home%20Inspiration/Inspiration/KalaKruti_Studio_Designs.jpg",
  },
  {
    title: "Kitchen",
    image:
      "https://ik.imagekit.io/bowr9614/HomePage_Hero/Home%20Page%204%20Images%20Below%20Hero%20Section/modern-black-white-kitchen-interior-with-wood-countertops.jpg?updatedAt=1764912728700",
  },
  {
    title: "Wardrobe",
    image:
      "https://ik.imagekit.io/bowr9614/Home%20Inspiration/Inspiration/Wardrobe.jpeg",
  },
  {
    title: "Kids Room",
    image:
      "https://ik.imagekit.io/bowr9614/Home%20Inspiration/Inspiration/Kids_Room.jpeg",
  },
  {
    title: "Home Office",
    image:
      "https://ik.imagekit.io/bowr9614/Home%20Inspiration/Inspiration/Home_Office.jpeg",
  },
  {
    title: "Guest Bedroom",
    image:
      "https://ik.imagekit.io/bowr9614/Home%20Inspiration/Inspiration/Guest_Bedroom.jpg",
  },
  {
    title: "Foyer",
    image:
      "https://ik.imagekit.io/bowr9614/Home%20Inspiration/Inspiration/Foyer.jpeg",
  },
  {
    title: "False Ceiling",
    image:
      "https://ik.imagekit.io/bowr9614/Home%20Inspiration/Inspiration/False_Ceiling.jpeg",
  },
  {
    title: "Dining Room",
    image:
      "https://ik.imagekit.io/bowr9614/Home%20Inspiration/Inspiration/Dinning_Room.jpeg",
  },
  {
    title: "Bathroom",
    image:
      "https://ik.imagekit.io/bowr9614/Home%20Inspiration/Inspiration/Bathroom.jpeg",
  },
];

export default function HomeInspiration() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [startIndex, setStartIndex] = useState(0);
  const [currentInspirationIndex, setCurrentInspirationIndex] = useState(0);
  const [highlightImageIndex, setHighlightImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const itemsPerPage = 6;

  // Auto-change the large highlight image
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setHighlightImageIndex((prevIndex) =>
          prevIndex === inspirationItems.length - 1 ? 0 : prevIndex + 1
        );
        setFadeIn(true);
      }, 300); // Half of transition duration for smooth fade
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerPage < inspirationItems.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const handleMobileNext = () => {
    setCurrentInspirationIndex((prevIndex) =>
      prevIndex === inspirationItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMobilePrev = () => {
    setCurrentInspirationIndex((prevIndex) =>
      prevIndex === 0 ? inspirationItems.length - 1 : prevIndex - 1
    );
  };

  const visibleItems = inspirationItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Box sx={{ py: { xs: 4, md: 10 }, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={700}
          mb={2}
          sx={{
            fontSize: { xs: "1.8rem", md: "3rem" }, // 👈 smaller text for mobile
          }}
        >
          Design ideas to reimagine your space
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          mb={6}
        >
          Explore a curated collection of interiors crafted to spark creativity
          and elevate everyday living.
        </Typography>

        {isMobile ? (
          // Mobile: carousel
          <Box sx={{ position: "relative", width: "100%" }}>
            {/* Inspiration Card */}
            <Fade in={true} timeout={500} key={currentInspirationIndex}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={inspirationItems[currentInspirationIndex].image}
                  alt={inspirationItems[currentInspirationIndex].title}
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <Box
                  sx={{
                    p: 3,
                    background: "#fff",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{
                      color: theme.palette.text.primary,
                      fontSize: "1.3rem",
                    }}
                  >
                    {inspirationItems[currentInspirationIndex].title}
                  </Typography>
                </Box>
              </Box>
            </Fade>

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
                onClick={handleMobilePrev}
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
                {inspirationItems.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor:
                        index === currentInspirationIndex
                          ? theme.palette.primary.main
                          : theme.palette.grey[300],
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => setCurrentInspirationIndex(index)}
                  />
                ))}
              </Box>

              <IconButton
                onClick={handleMobileNext}
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

            {/* Inspiration counter */}
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              sx={{ mt: 1 }}
            >
              {currentInspirationIndex + 1} of {inspirationItems.length}
            </Typography>
          </Box>
        ) : (
          // Desktop: Perfect fit container layout
          <Box sx={{ position: "relative", height: 500 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: 1,
                height: "100%",
                width: "100%",
                transition: "all 0.5s ease-in-out",
              }}
            >
              {visibleItems.map((item, i) => {
                let gridArea;

                // Perfect fit layout for 6 items
                if (i === 0) {
                  gridArea = "1 / 1 / 3 / 3"; // Top-left, spans 2 rows and 2 columns
                } else if (i === 1) {
                  gridArea = "1 / 3 / 2 / 4"; // Top row, 3rd column
                } else if (i === 2) {
                  gridArea = "1 / 4 / 2 / 5"; // Top row, 4th column
                } else if (i === 3) {
                  gridArea = "1 / 5 / 2 / 6"; // Top row, 5th column
                } else if (i === 4) {
                  gridArea = "2 / 3 / 3 / 5"; // Bottom row, spans 2 columns
                } else if (i === 5) {
                  gridArea = "2 / 5 / 3 / 6"; // Bottom row, last column
                }

                // For the large highlight image (i === 0), use auto-changing image
                const displayItem =
                  i === 0 ? inspirationItems[highlightImageIndex] : item;
                const isHighlight = i === 0;

                return (
                  <Fade
                    in={isHighlight ? fadeIn : true}
                    timeout={600}
                    key={`${startIndex}-${i}-${
                      isHighlight ? highlightImageIndex : ""
                    }`}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        gridArea: gridArea,
                        width: "100%",
                        height: "100%",
                        transition: "all 0.5s ease-in-out",
                        animation: i > 0 ? "slideInUp 0.6s ease-out" : "none",
                        animationDelay: `${i * 0.1}s`,
                        "@keyframes slideInUp": {
                          from: {
                            opacity: 0,
                            transform: "translateY(20px)",
                          },
                          to: {
                            opacity: 1,
                            transform: "translateY(0)",
                          },
                        },
                        "&:hover": {
                          transform: "scale(1.02)",
                          zIndex: 2,
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={displayItem.image}
                        alt={displayItem.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          display: "block",
                          transition: "transform 0.5s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background:
                            "linear-gradient(transparent, rgba(0,0,0,0.8))",
                          color: "white",
                          p: 2,
                          display: "flex",
                          alignItems: "flex-end",
                          minHeight: "50px",
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        <Typography
                          fontWeight={600}
                          variant={i === 0 ? "h5" : "h6"}
                          sx={{
                            color: "white",
                            textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                            fontSize: i === 0 ? "1.4rem" : "1rem",
                          }}
                        >
                          {displayItem.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Fade>
                );
              })}
            </Box>

            {/* Navigation Arrows */}
            {startIndex > 0 && (
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: -30,
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  width: 56,
                  height: 56,
                  zIndex: 10, // 👈 keep arrows always on top
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    transform: "translateY(-50%) scale(1.1)",
                    boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <ChevronLeftIcon sx={{ fontSize: 28 }} />
              </IconButton>
            )}

            {startIndex + itemsPerPage < inspirationItems.length && (
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: -30,
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  width: 56,
                  height: 56,
                  zIndex: 10, // 👈 keep arrows above hovered images
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    transform: "translateY(-50%) scale(1.1)",
                    boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <ChevronRightIcon sx={{ fontSize: 28 }} />
              </IconButton>
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
}
