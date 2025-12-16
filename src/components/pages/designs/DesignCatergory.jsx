import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Breadcrumbs,
  Link,
  useTheme,
} from "@mui/material";
import { ArrowBack, Home } from "@mui/icons-material";
import CategoryFAQ from "../faq/CategoryFAQ";
import { masterBedroomDesigns, masterBedroomConfig } from "./master-bedroom";
import { kitchenDesigns, kitchenConfig } from "./kitchen";
import { bathroomDesigns, bathroomConfig } from "./bathroom";
import { livingroomDesigns, livingroomConfig } from "./living-room";
import { wardrobeDesigns, wardrobeConfig } from "./wardrobe";
import { poojaroomDesigns, poojaroomConfig } from "./pooja-room";
import { tvunitDesigns, tvunitConfig } from "./tv-unit";
import { falseceilingDesigns, falseceilingConfig } from "./false-ceiling";
import { kidsbedroomDesigns, kidsbedroomConfig } from "./kids-bedroom";
import { balconyDesigns, balconyConfig } from "./balcony";
import { diningroomDesigns, diningroomConfig } from "./dining-room";
import { foyerDesigns, foyerConfig } from "./foyer";
import { homeslivspaceDesigns, homeslivspaceConfig } from "./homes-livspace";
import { homeofficeDesigns, homeofficeConfig } from "./home-office";
import { guestbedroomDesigns, guestbedroomConfig } from "./guest-bedroom";
import { windowDesigns, windowConfig } from "./window";
import { flooringDesigns, flooringConfig } from "./flooring";
import { walldecorDesigns, walldecorConfig } from "./wall-decor";
import { wallpaintDesigns, wallpaintConfig } from "./wall-paint";
import { wallpaperDesigns, wallpaperConfig } from "./wallpaper";
import { tileDesigns, tileConfig } from "./tile";
import { studyroomDesigns, studyroomConfig } from "./study-room";
import { kitchensinksDesigns, kitchensinksConfig } from "./kitchen-sinks";
import { spacesavingDesigns, spacesavingConfig } from "./space-saving";
import { doorDesigns, doorConfig } from "./door";
import { staircaseDesigns, staircaseConfig } from "./staircase";
import { crockeryunitDesigns, crockeryunitConfig } from "./crockery-unit";
import { homebarDesigns, homebarConfig } from "./home-bar";

// Comprehensive designs data
const designsData = {
  "master-bedroom": masterBedroomDesigns,
  kitchen: kitchenDesigns,
  bathroom: bathroomDesigns,
  "living-room": livingroomDesigns,
  wardrobe: wardrobeDesigns,
  "pooja-room": poojaroomDesigns,
  "tv-unit": tvunitDesigns,
  "false-ceiling": falseceilingDesigns,
  "kids-bedroom": kidsbedroomDesigns,
  balcony: balconyDesigns,
  "dining-room": diningroomDesigns,
  foyer: foyerDesigns,
  "homes-livspace": homeslivspaceDesigns,
  "home-office": homeofficeDesigns,
  "guest-bedroom": guestbedroomDesigns,
  window: windowDesigns,
  flooring: flooringDesigns,
  "wall-decor": walldecorDesigns,
  "wall-paint": wallpaintDesigns,
  wallpaper: wallpaperDesigns,
  tile: tileDesigns,
  "study-room": studyroomDesigns,
  "kitchen-sinks": kitchensinksDesigns,
  "space-saving": spacesavingDesigns,
  door: doorDesigns,
  staircase: staircaseDesigns,
  "crockery-unit": crockeryunitDesigns,
  "home-bar": homebarDesigns,
};

export default function DesignCategory() {
  const { category } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const designs = designsData[category] || [];
  const categoryDisplayNames = {
    "master-bedroom": masterBedroomConfig.displayName,
    kitchen: kitchenConfig.displayName,
    bathroom: bathroomConfig.displayName,
    "living-room": livingroomConfig.displayName,
    wardrobe: wardrobeConfig.displayName,
    "pooja-room": poojaroomConfig.displayName,
    "tv-unit": tvunitConfig.displayName,
    "false-ceiling": falseceilingConfig.displayName,
    "kids-bedroom": kidsbedroomConfig.displayName,
    balcony: balconyConfig.displayName,
    "dining-room": diningroomConfig.displayName,
    foyer: foyerConfig.displayName,
    "homes-livspace": homeslivspaceConfig.displayName,
    "home-office": homeofficeConfig.displayName,
    "guest-bedroom": guestbedroomConfig.displayName,
    window: windowConfig.displayName,
    flooring: flooringConfig.displayName,
    "wall-decor": walldecorConfig.displayName,
    "wall-paint": wallpaintConfig.displayName,
    wallpaper: wallpaperConfig.displayName,
    tile: tileConfig.displayName,
    "study-room": studyroomConfig.displayName,
    "kitchen-sinks": kitchensinksConfig.displayName,
    "space-saving": spacesavingConfig.displayName,
    door: doorConfig.displayName,
    staircase: staircaseConfig.displayName,
    "crockery-unit": crockeryunitConfig.displayName,
    "home-bar": homebarConfig.displayName,
  };

  const categoryTitle =
    categoryDisplayNames[category] ||
    category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        pt: { xs: 2, sm: 3, md: 4 },
        pb: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Breadcrumbs 
                <Breadcrumbs sx={{ mb: 3 }}>
                    <Link
                        color="inherit"
                        href="/"
                        onClick={(e) => { e.preventDefault(); navigate('/'); }}
                        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                        <Home fontSize="small" />
                        Home
                    </Link>
                    <Link
                        color="inherit"
                        href="/designs"
                        onClick={(e) => { e.preventDefault(); navigate('/designs'); }}
                        sx={{ cursor: 'pointer' }}
                    >
                        Designs
                    </Link>
                    <Typography color="text.primary">{categoryTitle}</Typography>
                </Breadcrumbs>*/}

        {/* Back Button */}
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/designs")}
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
          Back to Designs
        </Button>

        {/* Category Header */}
        <Box sx={{ mb: 4, textAlign: "flex-start" }}>
          <Typography variant="h3" component="h1" gutterBottom>
            {categoryTitle} Designs
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Explore our curated collection of {categoryTitle.toLowerCase()}{" "}
            design concepts
          </Typography>
        </Box>

        {/* Designs Grid */}
        {/* Designs Grid - Updated CSS Grid Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // 1 column on mobile
              sm: "repeat(2, 1fr)", // 2 columns on tablet
              md: "repeat(3, 1fr)", // 3 columns on desktop
            },
            gap: 3, // spacing between cards
            mt: 2,
            width: "100%",
            "& > *": {
              minHeight: "400px",
            },
          }}
        >
          {designs.map((design) => (
            <Card
              key={design.id}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: theme.shadows[8],
                },
              }}
              onClick={() => navigate(`/designs/${category}/${design.id}`)}
            >
              <CardMedia
                component="img"
                height="250"
                image={design.image}
                alt={design.name}
                sx={{
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
                  <Chip
                    label={design.style}
                    size="small"
                    color="primary"
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                  }}
                >
                  {design.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, flexGrow: 1 }}
                >
                  {design.description}
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/designs/${category}/${design.id}`);
                  }}
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    "&:hover": {
                      borderColor: theme.palette.primary.dark,
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        {designs.length === 0 && (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No designs found for this category.
            </Typography>
          </Box>
        )}

        {/* FAQ Section */}
        <CategoryFAQ category={category} />

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            py: 6,
            mt: 4,
            backgroundColor: theme.palette.background.default,
            borderRadius: 2,
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: theme.palette.text.primary }}
          >
            Don't see what you're looking for?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            We can create custom {categoryTitle.toLowerCase()} designs tailored
            to your specific needs and preferences.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/contact")}
            sx={{
              px: 4,
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Request Custom Design
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
