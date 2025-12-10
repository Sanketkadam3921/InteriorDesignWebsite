import React, { useState } from "react";
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

const kitchenPackages = [
  {
    id: "essentials",
    title: "Essentials",
    priceRange: "₹1,500 - ₹2,500",
    pricePerSqft: "per sqft",
    features: ["Low cost", "Basic units", "Standard finish"],
    image:
      "https://ik.imagekit.io/bowr9614/Packages/Kitchen/Basic%20Kitchen.jpg?updatedAt=1765347608500",
  },
  {
    id: "premium",
    title: "Premium",
    priceRange: "₹2,500 - ₹4,000",
    pricePerSqft: "per sqft",
    features: ["Mid cost", "Premium units", "Premium finish"],
    image:
      "https://ik.imagekit.io/bowr9614/Packages/Kitchen/Premium%20KItchen.jpg?updatedAt=1765347608878",
  },
  {
    id: "luxe",
    title: "Luxury",
    priceRange: "₹4,000 - ₹6,000",
    pricePerSqft: "per sqft",
    features: ["High cost", "Luxury units", "Elite finish"],
    image:
      "https://ik.imagekit.io/bowr9614/Packages/Kitchen/Luxery%20Kitchen.jpg?updatedAt=1765347608880",
  },
];

export default function KitchenPackageSelection() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState("premium");

  const handleNext = () => {
    const searchParams = new URLSearchParams(location.search);
    const queryParams = new URLSearchParams({
      layout: searchParams.get("layout"),
      A: searchParams.get("A"),
      B: searchParams.get("B"),
      C: searchParams.get("C"),
      package: selectedPackage,
    });
    navigate(
      `/price-calculators/kitchen/calculator/estimate?${queryParams.toString()}`
    );
  };

  const handleBack = () => {
    const searchParams = new URLSearchParams(location.search);
    const queryParams = new URLSearchParams({
      layout: searchParams.get("layout"),
      A: searchParams.get("A"),
      B: searchParams.get("B"),
      C: searchParams.get("C"),
    });
    navigate(
      `/price-calculators/kitchen/calculator/measurements?${queryParams.toString()}`
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
        Select Your Kitchen Package
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mb: 4,
          color: theme.palette.text.secondary,
        }}
      >
        Choose the kitchen package that matches your needs and budget.
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
                md: "repeat(3, 1fr)" 
              },
              gap: 2,
            }}
          >
            {kitchenPackages.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;
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
