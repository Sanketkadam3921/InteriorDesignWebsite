import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  FormControl,
  Radio,
  useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

// Image mapping based on wardrobe type
const wardrobePackageImages = {
  swing: {
    basic:
      "https://ik.imagekit.io/bowr9614/Packages/kitchen_new/SwingWardrobe/SwingBasic.jpg?updatedAt=1766046864766",
    premium:
      "https://ik.imagekit.io/bowr9614/Packages/kitchen_new/SwingWardrobe/SwingPremium.jpeg?updatedAt=1766046864815",
    luxury:
      "https://ik.imagekit.io/bowr9614/Packages/kitchen_new/SwingWardrobe/SwingLuxury.jpeg?updatedAt=1766046864716",
  },
  sliding: {
    basic:
      "https://ik.imagekit.io/bowr9614/Packages/kitchen_new/SlidingWardrobe/Slidingwardrobebasic.jpeg?updatedAt=1766046839676",
    premium:
      "https://ik.imagekit.io/bowr9614/Packages/kitchen_new/SlidingWardrobe/slidingwardrobepremium.jpeg?updatedAt=1766046840046",
    luxury:
      "https://ik.imagekit.io/bowr9614/Packages/kitchen_new/SlidingWardrobe/SlidingwwardrobeLuxury.jpeg?updatedAt=1766046840479",
  },
};

const wardrobePackagesBase = [
  {
    id: "basic",
    title: "Essentials",
    priceRange: "₹1,200 - ₹2,000",
    priceRangeSwing: "₹1,000 - ₹1,800",
    pricePerSqft: "per sqft",
    features: ["Low cost", "Basic units", "Standard finish"],
  },
  {
    id: "premium",
    title: "Premium",
    priceRange: "₹2,000 - ₹3,500",
    priceRangeSwing: "₹1,800 - ₹3,000",
    pricePerSqft: "per sqft",
    features: ["Mid cost", "Premium units", "Premium finish"],
  },
  {
    id: "luxury",
    title: "Luxury",
    priceRange: "₹3,500 - ₹5,500",
    priceRangeSwing: "₹3,000 - ₹5,000",
    pricePerSqft: "per sqft",
    features: ["High cost", "Luxury units", "Elite finish"],
  },
];

export default function WardrobePackageSelection() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState("premium");

  const searchParams = new URLSearchParams(location.search);
  const wardrobeType = searchParams.get("type") || "sliding"; // "sliding" or "swing"

  // Create wardrobe packages with images based on wardrobe type
  const wardrobePackages = useMemo(() => {
    const images = wardrobePackageImages[wardrobeType] || wardrobePackageImages.sliding;
    return wardrobePackagesBase.map((pkg) => ({
      ...pkg,
      image: images[pkg.id] || images.basic, // Fallback to basic if image not found
    }));
  }, [wardrobeType]);

  const handleNext = () => {
    const queryParams = new URLSearchParams({
      length: searchParams.get("length"),
      height: searchParams.get("height"),
      type: searchParams.get("type"),
      package: selectedPackage,
    });
    navigate(
      `/price-calculators/wardrobe/calculator/estimate?${queryParams.toString()}`
    );
  };

  const handleBack = () => {
    const queryParams = new URLSearchParams({
      length: searchParams.get("length"),
      height: searchParams.get("height"),
      type: searchParams.get("type"),
    });
    navigate(
      `/price-calculators/wardrobe/calculator/type?${queryParams.toString()}`
    );
  };

  return (
    <Box
      sx={{
        maxWidth: 700,
        mx: "auto",
        p: 3,
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 200px)",
        pb: 10,
        mb: 8,
      }}
    >
      {/* Header */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mb: 1,
          fontWeight: 600,
          color: theme.palette.text.primary,
        }}
      >
        Select Your Wardrobe Package
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mb: 4,
          color: theme.palette.text.secondary,
        }}
      >
        Choose the wardrobe package that matches your needs and budget.
      </Typography>

      <Box
        sx={{
          backgroundColor: theme.palette.primary.light + "25",
          borderRadius: 2,
          p: 3,
          mb: 2,
          border: "1px solid",
          borderColor: theme.palette.primary.light + "40",
        }}
      >
        {/* Package Cards */}
        <FormControl fullWidth>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 2,
            }}
          >
            {wardrobePackages.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;
              const priceRange =
                wardrobeType === "swing" ? pkg.priceRangeSwing : pkg.priceRange;

              return (
                <Card
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  sx={{
                    position: "relative",
                    borderRadius: 2,
                    border: isSelected
                      ? `2px solid ${theme.palette.primary.main}`
                      : "1px solid",
                    borderColor: isSelected
                      ? theme.palette.primary.main
                      : theme.palette.grey[300],
                    boxShadow: isSelected
                      ? "0 4px 10px rgba(0,0,0,0.08)"
                      : "0 1px 3px rgba(0,0,0,0.05)",
                    cursor: "pointer",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                      }}
                    >
                      <Radio
                        checked={isSelected}
                        onChange={() => setSelectedPackage(pkg.id)}
                        value={pkg.id}
                        sx={{
                          color: theme.palette.primary.main,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 1,
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                      }}
                    >
                      {pkg.title}
                    </Typography>

                    {/* Price Range */}

                    {/* Image */}
                    <Box
                      sx={{
                        height: 140,
                        backgroundImage: `url(${pkg.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: 2,
                        mb: 2,
                      }}
                    />

                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      {pkg.features.map((feature, index) => (
                        <Box
                          key={index}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Box
                            sx={{
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              backgroundColor: theme.palette.primary.main,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mr: 1.5,
                            }}
                          >
                            <Typography
                              variant="caption"
                              sx={{ color: "white", fontSize: "10px" }}
                            >
                              ✓
                            </Typography>
                          </Box>
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </FormControl>
      </Box>

      <Box sx={{ flex: 1 }} />

      {/* Navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          maxWidth: 700,
          mx: "auto",
          pt: 2,
          pb: 2,
          px: 3,
          borderTop: "1px solid",
          borderColor: "divider",
          backgroundColor: theme.palette.background.default,
          zIndex: 1000,
          boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleBack}
          sx={{
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              borderColor: theme.palette.primary.dark,
              backgroundColor: theme.palette.primary.light + "15",
            },
          }}
        >
          Back
        </Button>

        <Button
          variant="contained"
          onClick={handleNext}
          sx={{
            px: 4,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
