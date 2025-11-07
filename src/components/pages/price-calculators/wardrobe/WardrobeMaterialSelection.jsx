import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  FormControlLabel,
  Radio,
  useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const materialOptions = [
  {
    id: "mdf",
    title: "MDF",
    description:
      "Seamless, free of knots, and has high resistance to wear & tear.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    price: "₹₹",
    proTip: "An ideal choice for the cabinets owing to its smooth surface.",
  },
  {
    id: "hdf",
    title: "HDF / HMR",
    description:
      "Sturdy, dense, and has a strong screw-holding capacity — perfect for long-term use.",
    image: "https://images.unsplash.com/photo-1616627562164-e9b1864a6422?w=600",
    price: "₹₹₹",
    proTip: "Perfect for heavy-duty applications with superior durability.",
  },
];

export default function WardrobeMaterialSelection() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMaterial, setSelectedMaterial] = useState("mdf");

  const handleSelect = (materialId) => {
    setSelectedMaterial(materialId);
  };

  const handleNext = () => {
    if (selectedMaterial) {
      const searchParams = new URLSearchParams(location.search);
      const queryParams = new URLSearchParams({
        height: searchParams.get("height"),
        type: searchParams.get("type"),
        finish: searchParams.get("finish"),
        material: selectedMaterial,
      });
      navigate(
        `/price-calculators/wardrobe/calculator/accessories?${queryParams.toString()}`
      );
    }
  };

  const handleBack = () => {
    const searchParams = new URLSearchParams(location.search);
    const queryParams = new URLSearchParams({
      height: searchParams.get("height"),
      type: searchParams.get("type"),
      finish: searchParams.get("finish"),
    });
    navigate(
      `/price-calculators/wardrobe/calculator/finish?${queryParams.toString()}`
    );
  };

  return (
    <Box sx={{ 
      maxWidth: 700, 
      mx: "auto", 
      p: 3,
      display: "flex",
      flexDirection: "column",
      minHeight: "calc(100vh - 200px)",
      pb: 10,
      mb: 8,
    }}>
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
        Select Your Preferred Core Material
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mb: 4,
          color: theme.palette.text.secondary,
        }}
      >
        Choose the material that best fits your needs and budget.
      </Typography>

      <Box
        sx={{
          backgroundColor: theme.palette.primary.light + '25',
          borderRadius: 2,
          p: 3,
          mb: 2,
          border: '1px solid',
          borderColor: theme.palette.primary.light + '40',
        }}
      >
        {/* Material Options */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 3,
          }}
        >
        {materialOptions.map((material) => {
          const isSelected = selectedMaterial === material.id;
          return (
            <Card
              key={material.id}
              onClick={() => handleSelect(material.id)}
              sx={{
                border: "2px solid",
                borderColor: isSelected
                  ? theme.palette.primary.main
                  : theme.palette.grey[300],
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                cursor: "pointer",
                transition: "none",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <CardContent sx={{ p: 0, position: "relative" }}>
                {/* ✅ Radio sync without flicker */}
                <FormControlLabel
                  control={
                    <Radio
                      checked={isSelected}
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        color: theme.palette.primary.main,
                        "&.Mui-checked": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    />
                  }
                  label=""
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    m: 0,
                    zIndex: 1,
                  }}
                />

                <Box sx={{ p: 2.5 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {material.title}
                  </Typography>

                  <Box
                    sx={{
                      height: 120,
                      backgroundImage: `url(${material.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 2,
                      mb: 1.5,
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: theme.palette.text.secondary,
                      lineHeight: 1.5,
                    }}
                  >
                    {material.description}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      color: theme.palette.text.secondary,
                      fontStyle: "italic",
                    }}
                  >
                    {material.proTip}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          );
        })}
        </Box>
      </Box>

      <Box sx={{ flex: 1 }} />

      {/* Navigation Buttons */}
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
          disabled={!selectedMaterial}
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
