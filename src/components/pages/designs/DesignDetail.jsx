import React from "react";
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
} from "@mui/material";
import {
  ArrowBack,
  CheckCircle,
  LocalShipping,
  Security,
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
          }}
        >
          {/* Left Side - Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              flexShrink: 0,
              order: { xs: 1, md: 1 },
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

              {/* Design Points Section */}
              {design.specifications && Object.keys(design.specifications).length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Stack spacing={2}>
                    {/* Colors */}
                    {(design.specifications.colorScheme || design.specifications.color) && (
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.secondary,
                            mb: 1,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            fontSize: "0.75rem",
                          }}
                        >
                          Colors
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {(design.specifications.colorScheme || design.specifications.color)
                            .split(/[,&]/)
                            .map((color, index) => (
                              <Chip
                                key={index}
                                label={color.trim()}
                                size="small"
                                sx={{
                                  backgroundColor: theme.palette.grey[100],
                                  color: theme.palette.text.primary,
                                  fontWeight: 500,
                                }}
                              />
                            ))}
                        </Box>
                      </Box>
                    )}

                    {/* Style */}
                    {design.specifications.style && (
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.secondary,
                            mb: 1,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            fontSize: "0.75rem",
                          }}
                        >
                          Style
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                          }}
                        >
                          {design.specifications.style}
                        </Typography>
                      </Box>
                    )}

                    {/* Materials */}
                    {design.specifications.materials && (
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.secondary,
                            mb: 1,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            fontSize: "0.75rem",
                          }}
                        >
                          Materials
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                          }}
                        >
                          {design.specifications.materials}
                        </Typography>
                      </Box>
                    )}

                    {/* Area */}
                    {design.specifications.area && (
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.secondary,
                            mb: 1,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            fontSize: "0.75rem",
                          }}
                        >
                          Area
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                          }}
                        >
                          {design.specifications.area}
                        </Typography>
                      </Box>
                    )}

                    {/* Lighting */}
                    {design.specifications.lighting && (
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.secondary,
                            mb: 1,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            fontSize: "0.75rem",
                          }}
                        >
                          Lighting
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
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
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.secondary,
                            mb: 1,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            fontSize: "0.75rem",
                          }}
                        >
                          Furniture
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                          }}
                        >
                          {design.specifications.furniture}
                        </Typography>
                      </Box>
                    )}
                  </Stack>
                </Box>
              )}

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                {design.description}
              </Typography>
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

      {/* 🧭 CTA Section */}
      <Container {...consistentContainer}>
        <Card
          sx={{
            p: 4,
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            textAlign: "center",
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
