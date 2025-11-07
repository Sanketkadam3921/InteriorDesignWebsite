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
    price: "₹₹",
    description:
      "Affordable modular kitchens that bring both utility and simplicity to your home.",
    features: [
      "Essential storage units",
      "Budget-friendly materials",
      "Simple and functional designs",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: "premium",
    title: "Premium",
    price: "₹₹₹",
    description:
      "Modern kitchens designed for comfort, convenience, and long-lasting quality.",
    features: [
      "Premium finishes and fittings",
      "Soft-close mechanisms",
      "Optimized storage design",
    ],
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
  },
  {
    id: "luxe",
    title: "Luxe",
    price: "₹₹₹₹",
    description:
      "High-end kitchen interiors featuring luxury materials and expert craftsmanship.",
    features: [
      "Top-tier materials",
      "Custom luxury finishes",
      "Imported accessories",
      "Dedicated kitchen designer",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
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
    <Box sx={{ maxWidth: 700, mx: "auto", p: 3 }}>
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

      {/* Package Cards */}
      <FormControl fullWidth>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
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
                      mb: 2.5,
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                    }}
                  >
                    {pkg.title}
                  </Typography>

                  {/* Image */}
                  <Box
                    sx={{
                      height: 180,
                      backgroundImage: `url(${pkg.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 2,
                      mb: 2.5,
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

      {/* Navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
          pt: 2,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Button
          variant="text"
          onClick={handleBack}
          sx={{
            color: theme.palette.primary.main,
            textTransform: "none",
            fontWeight: 600,
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
