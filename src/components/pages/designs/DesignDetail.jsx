import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  Stack,
  Modal,
  IconButton,
} from "@mui/material";
import {
  ArrowBack,
  CheckCircle,
  LocalShipping,
  Security,
  Close,
  ZoomIn,
  ZoomOut,
  FitScreen,
} from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";

import { masterBedroomDesignDetails } from "./master-bedroom";
import { kitchenDesignDetails } from "./kitchen/kitchenData";
import { bathroomDesignDetails } from "./bathroom";
import { livingroomDesignDetails } from "./living-room/living-roomData";
import { wardrobeDesignDetails } from "./wardrobe";
import { poojaroomDesignDetails } from "./pooja-room";
import { tvunitDesignDetails } from "./tv-unit";
import { falseceilingDesignDetails } from "./false-ceiling";
import { kidsbedroomDesignDetails } from "./kids-bedroom";
import { balconyDesignDetails } from "./balcony";
import { diningroomDesignDetails } from "./dining-room";
import { foyerDesignDetails } from "./foyer";
import { homeslivspaceDesignDetails } from "./homes-livspace";
import { homeofficeDesignDetails } from "./home-office";
import { guestbedroomDesignDetails } from "./guest-bedroom";
import { windowDesignDetails } from "./window";
import { flooringDesignDetails } from "./flooring";
import { walldecorDesignDetails } from "./wall-decor";
import { wallpaintDesignDetails } from "./wall-paint";
import { wallpaperDesignDetails } from "./wallpaper";
import { tileDesignDetails } from "./tile";
import { studyroomDesignDetails } from "./study-room";
import { kitchensinksDesignDetails } from "./kitchen-sinks";
import { spacesavingDesignDetails } from "./space-saving";
import { doorDesignDetails } from "./door";
import { staircaseDesignDetails } from "./staircase";
import { crockeryunitDesignDetails } from "./crockery-unit";
import { homebarDesignDetails } from "./home-bar";

export default function DesignDetail() {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const [imagePreviewOpen, setImagePreviewOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      e.preventDefault();
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((prev) => Math.max(0.5, Math.min(3, prev + delta)));
  };

  const handleTouchStart = (e) => {
    if (zoom > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && zoom > 1 && e.touches.length === 1) {
      e.preventDefault();
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleCloseModal = () => {
    setImagePreviewOpen(false);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // Data source
  const designsData = {
    "master-bedroom": masterBedroomDesignDetails,
    kitchen: kitchenDesignDetails,
    bathroom: bathroomDesignDetails,
    "living-room": livingroomDesignDetails,
    wardrobe: wardrobeDesignDetails,
    "pooja-room": poojaroomDesignDetails,
    "tv-unit": tvunitDesignDetails,
    "false-ceiling": falseceilingDesignDetails,
    "kids-bedroom": kidsbedroomDesignDetails,
    balcony: balconyDesignDetails,
    "dining-room": diningroomDesignDetails,
    foyer: foyerDesignDetails,
    "homes-livspace": homeslivspaceDesignDetails,
    "home-office": homeofficeDesignDetails,
    "guest-bedroom": guestbedroomDesignDetails,
    window: windowDesignDetails,
    flooring: flooringDesignDetails,
    "wall-decor": walldecorDesignDetails,
    "wall-paint": wallpaintDesignDetails,
    wallpaper: wallpaperDesignDetails,
    tile: tileDesignDetails,
    "study-room": studyroomDesignDetails,
    "kitchen-sinks": kitchensinksDesignDetails,
    "space-saving": spacesavingDesignDetails,
    door: doorDesignDetails,
    staircase: staircaseDesignDetails,
    "crockery-unit": crockeryunitDesignDetails,
    "home-bar": homebarDesignDetails,
  };

  const design = designsData[category]?.[id] || {
    id,
    title: "Design Not Found",
    description: "This design could not be found.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    ],
    specifications: {},
    sections: [],
  };

  const consistentContainer = {
    maxWidth: "xl",
    sx: {
      px: { xs: 2, sm: 3, md: 4 },
    },
  };

  if (design.title === "Design Not Found") {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
          pt: { xs: 2, sm: 3, md: 4 },
          pb: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Container {...consistentContainer} sx={{ textAlign: "center" }}>
          <Typography variant="h4" color="error" gutterBottom>
            Design not found
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate(`/designs/${category}`)}
            startIcon={<ArrowBack />}
          >
            Back to Design Category
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        pt: { xs: 2, sm: 3, md: 4 },
        pb: { xs: 4, sm: 6, md: 8 },
        // Reduce bottom padding for iPad Pro (1024px width)
        "@media (min-width: 900px) and (max-width: 1200px)": {
          pb: 0,
        },
      }}
    >
      {/* 🧭 Back Button */}
      <Container {...consistentContainer}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(`/designs/${category}`)}
          sx={{
            mb: 4,
            px: 0,
            color: theme.palette.text.secondary,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
              color: theme.palette.text.primary,
            },
            fontWeight: 500,
            textTransform: "none",
            fontSize: "1rem",
          }}
        >
          Back to Design Category
        </Button>
      </Container>

      {/* 🖼️ Image and Content Layout */}
      <Container {...consistentContainer}>
        <Box
          sx={{
            mb: 6,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "stretch",
            // Use column layout for iPad Pro (same as iPad Mini/Air)
            "@media (min-width: 900px) and (max-width: 1200px)": {
              mb: 2,
              flexDirection: "column",
            },
            // Use row layout for larger desktop screens
            "@media (min-width: 1200px)": {
              flexDirection: "row",
            },
          }}
        >
          {/* Left Side - Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              flexShrink: 0,
              order: { xs: 1, md: 1 },
              // Full width for iPad Pro
              "@media (min-width: 900px) and (max-width: 1200px)": {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "400px", md: "600px" },
                minHeight: { xs: "400px", md: "600px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                backgroundColor: theme.palette.grey[100],
                cursor: "pointer",
                // Adjust height for iPad Pro
                "@media (min-width: 900px) and (max-width: 1200px)": {
                  height: "500px",
                  minHeight: "500px",
                },
              }}
              onClick={() => {
                setSelectedImage(design.images?.[0] || design.image);
                setImagePreviewOpen(true);
              }}
            >
              <Box
                component="img"
                src={`${
                  design.images?.[0] || design.image
                }?w=1200&fit=crop&auto=format`}
                alt={design.title}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Box>
          </Box>

          {/* Right Side - Title and Description */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              flexShrink: 0,
              order: { xs: 2, md: 2 },
              display: "flex",
              flexDirection: "column",
              // Full width for iPad Pro
              "@media (min-width: 900px) and (max-width: 1200px)": {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                py: { xs: 2, md: 0 },
                pl: { xs: 0, md: 2 },
                // Remove left padding for iPad Pro
                "@media (min-width: 900px) and (max-width: 1200px)": {
                  pl: 0,
                  py: 2,
                },
              }}
            >
              <Typography
                variant="h3"
                fontWeight={700}
                gutterBottom
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                  color: theme.palette.text.primary,
                  mb: 3,
                }}
              >
                {design.title}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  fontWeight: 400,
                  mb: 2,
                }}
              >
                {design.description}
              </Typography>

              {/* Design Points Section */}
              {design.specifications &&
                Object.keys(design.specifications).length > 0 && (
                  <Box sx={{ mb: 3 }}>
                    <Stack spacing={2}>
                      {/* Style */}
                      {design.specifications.style && (
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.text.primary,
                              mb: 1,
                              fontSize: { xs: "1rem", md: "1.1rem" },
                            }}
                          >
                            Style
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.primary,
                              fontWeight: 400,
                              fontSize: { xs: "0.875rem", md: "0.9375rem" },
                            }}
                          >
                            {design.specifications.style}
                          </Typography>
                        </Box>
                      )}

                      {/* Color */}
                      {(design.specifications.colorScheme ||
                        design.specifications.color) && (
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.text.primary,
                              mb: 1,
                              fontSize: { xs: "1rem", md: "1.1rem" },
                            }}
                          >
                            Colors
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.primary,
                              fontWeight: 400,
                              fontSize: { xs: "0.875rem", md: "0.9375rem" },
                            }}
                          >
                            {design.specifications.colorScheme ||
                              design.specifications.color}
                          </Typography>
                        </Box>
                      )}

                      {/* Materials */}
                      {design.specifications.materials && (
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.text.primary,
                              mb: 1,
                              fontSize: { xs: "1rem", md: "1.1rem" },
                            }}
                          >
                            Materials
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.primary,
                              fontWeight: 400,
                              fontSize: { xs: "0.875rem", md: "0.9375rem" },
                            }}
                          >
                            {design.specifications.materials}
                          </Typography>
                        </Box>
                      )}

                      {/* Area of Application - Only for Wallpaper */}
                      {design.category === "wallpaper" &&
                        design.specifications.areaOfApplication && (
                          <Box>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 1,
                                fontSize: { xs: "1rem", md: "1.1rem" },
                              }}
                            >
                              Area of Application
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: theme.palette.text.primary,
                                fontWeight: 400,
                                fontSize: { xs: "0.875rem", md: "0.9375rem" },
                              }}
                            >
                              {design.specifications.areaOfApplication}
                            </Typography>
                          </Box>
                        )}

                      {/* Hardware - Only for Door */}
                      {design.category === "door" &&
                        design.specifications.hardware && (
                          <Box>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 1,
                                fontSize: { xs: "1rem", md: "1.1rem" },
                              }}
                            >
                              Hardware
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: theme.palette.text.primary,
                                fontWeight: 400,
                                fontSize: { xs: "0.875rem", md: "0.9375rem" },
                              }}
                            >
                              {design.specifications.hardware}
                            </Typography>
                          </Box>
                        )}

                      {/* Finish - Only for Door */}
                      {design.category === "door" &&
                        design.specifications.finish && (
                          <Box>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 1,
                                fontSize: { xs: "1rem", md: "1.1rem" },
                              }}
                            >
                              Finish
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: theme.palette.text.primary,
                                fontWeight: 400,
                                fontSize: { xs: "0.875rem", md: "0.9375rem" },
                              }}
                            >
                              {design.specifications.finish}
                            </Typography>
                          </Box>
                        )}

                      {/* Panel Finish - Only for False Ceiling */}
                      {design.category === "false-ceiling" &&
                        design.specifications.panelFinish && (
                          <Box>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 1,
                                fontSize: { xs: "1rem", md: "1.1rem" },
                              }}
                            >
                              Panel Finish
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: theme.palette.text.primary,
                                fontWeight: 400,
                                fontSize: { xs: "0.875rem", md: "0.9375rem" },
                              }}
                            >
                              {design.specifications.panelFinish}
                            </Typography>
                          </Box>
                        )}

                      {/* Lightings */}
                      {design.specifications.lighting && (
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.text.primary,
                              mb: 1,
                              fontSize: { xs: "1rem", md: "1.1rem" },
                            }}
                          >
                            Lightings
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.primary,
                              fontWeight: 400,
                              fontSize: { xs: "0.875rem", md: "0.9375rem" },
                            }}
                          >
                            {design.specifications.lighting}
                          </Typography>
                        </Box>
                      )}

                      {/* Furniture */}
                      {design.specifications.furniture && (
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.text.primary,
                              mb: 1,
                              fontSize: { xs: "1rem", md: "1.1rem" },
                            }}
                          >
                            Furniture
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.primary,
                              fontWeight: 400,
                              fontSize: { xs: "0.875rem", md: "0.9375rem" },
                            }}
                          >
                            {design.specifications.furniture}
                          </Typography>
                        </Box>
                      )}
                    </Stack>
                  </Box>
                )}
            </Box>
          </Box>
        </Box>
      </Container>

      {/* 🧱 Design Details 
            
            {design.sections && design.sections.length > 0 && (
                <Container {...consistentContainer}>
                    <Card
                        sx={{
                            p: { xs: 3, md: 4 },
                            borderRadius: 3,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight={700}
                            sx={{ mb: 3, color: theme.palette.text.primary }}
                        >
                            Design Details
                        </Typography>

                        {design.sections.map((section, index) => (
                            <Box key={index} sx={{ mb: 4 }}>
                                <Typography
                                    variant="h6"
                                    fontWeight={600}
                                    sx={{ mb: 2, color: theme.palette.text.primary }}
                                >
                                    {section.title}
                                </Typography>
                                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                    {section.items.map((item, itemIndex) => (
                                        <Box component="li" key={itemIndex} sx={{ mb: 1 }}>
                                            <Typography
                                                variant="body1"
                                                sx={{ lineHeight: 1.6, color: "text.secondary" }}
                                            >
                                                {item}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Card>
                </Container>
            )}
            */}

      {/* 💎 Trust Indicators */}

      {/* 🖼️ Image Preview Modal with Zoom */}
      <Modal
        open={imagePreviewOpen}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none",
            overflow: "hidden",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 10,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <Close />
          </IconButton>

          {/* Zoom Controls */}
          <Box
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <IconButton
              onClick={handleZoomIn}
              disabled={zoom >= 3}
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
                "&:disabled": {
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  color: "rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              <ZoomIn />
            </IconButton>
            <IconButton
              onClick={handleZoomOut}
              disabled={zoom <= 0.5}
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
                "&:disabled": {
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  color: "rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              <ZoomOut />
            </IconButton>
            <IconButton
              onClick={handleResetZoom}
              disabled={zoom === 1}
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
                "&:disabled": {
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  color: "rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              <FitScreen />
            </IconButton>
          </Box>

          {/* Zoom Indicator */}
          {zoom !== 1 && (
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                px: 2,
                py: 1,
                borderRadius: 1,
                fontSize: "0.875rem",
              }}
            >
              {Math.round(zoom * 100)}%
            </Box>
          )}

          {/* Image Container */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={selectedImage || design.images?.[0] || design.image}
              alt={design.title}
              sx={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                width: "auto",
                height: "auto",
                display: "block",
                objectFit: "contain",
                transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
                transformOrigin: "center center",
                transition: isDragging ? "none" : "transform 0.1s ease-out",
                userSelect: "none",
                WebkitUserDrag: "none",
              }}
            />
          </Box>
        </Box>
      </Modal>

      {/* 🧭 CTA Section */}
      <Container
        {...consistentContainer}
        sx={{
          // Reduce margin bottom for iPad Pro (1024px width)
          "@media (min-width: 900px) and (max-width: 1200px)": {
            mb: 0,
            mt: 1,
            pb: 0,
          },
        }}
      >
        <Card
          sx={{
            p: 4,
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            textAlign: "center",
            // Reduce padding for iPad Pro
            "@media (min-width: 900px) and (max-width: 1200px)": {
              p: 3,
              mb: 0,
            },
          }}
        >
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Want to customize this design?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            We can adapt this design to fit your space, preferences, and budget.
            Talk to our experts today.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
            onClick={() => navigate("/contact")}
          >
            Request Customization
          </Button>
        </Card>
      </Container>
    </Box>
  );
}
