import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Radio,
  useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const kitchenLayouts = [
  {
    id: "l-shaped",
    title: "L-shaped",
    image:
      "https://ik.imagekit.io/bowr9614/Packages/Kitchen/L%20Shaped%20Modern%20Modular%20Kitchen%20Delights%20for%20Stylish%20Living%20_%20333k+%20Inspiring%20Lifestyle%20Ideas.jpg?updatedAt=1765347628621",
  },
  {
    id: "u-shaped",
    title: "U-shaped",
    image:
      "https://ik.imagekit.io/bowr9614/Packages/Kitchen/U%20shaped%20KItchen.jpg?updatedAt=1765347608975",
  },
  {
    id: "straight",
    title: "Straight",
    image:
      "https://ik.imagekit.io/bowr9614/Packages/Kitchen/Straight%20Kitc%20hen.jpg?updatedAt=1765347608712",
  },
  {
    id: "parallel",
    title: "Parallel",
    image:
      "https://ik.imagekit.io/bowr9614/Packages/Kitchen/Parallel%20Kitchen.jpg?updatedAt=1765347609057",
  },
];

export default function KitchenLayoutStep() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLayout, setSelectedLayout] = useState("");

  const handleNext = () => {
    if (selectedLayout) {
      const queryParams = new URLSearchParams({ layout: selectedLayout });
      navigate(
        `/price-calculators/kitchen/calculator/measurements?${queryParams.toString()}`
      );
    }
  };

  const handleBack = () => {
    navigate("/");
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
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mb: 1,
          fontWeight: 600,
          color: theme.palette.text.primary,
        }}
      >
        Select Your Kitchen Layout
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mb: 4,
          color: theme.palette.text.secondary,
        }}
      >
        Choose your kitchen layout to proceed with your estimate.
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
        {/* Layout Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { 
              xs: "1fr", 
              sm: "repeat(2, 1fr)", 
              md: "repeat(2, 1fr)" 
            },
            gap: 2.5,
          }}
        >
          {kitchenLayouts.map((layout) => {
            const isSelected = selectedLayout === layout.id;
            return (
              <Card
                key={layout.id}
                onClick={() => setSelectedLayout(layout.id)}
                sx={{
                  position: "relative",
                  borderRadius: 2,
                  border: "2px solid",
                  borderColor: isSelected
                    ? theme.palette.primary.main
                    : theme.palette.grey[300],
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  backgroundColor: theme.palette.background.paper,
                  cursor: "pointer",
                  transition: "none",
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box
                    sx={{
                      height: 150,
                      backgroundImage: `url(${layout.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 1,
                      border: "1px solid",
                      borderColor: theme.palette.divider,
                      mb: 1.5,
                    }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      px: 1,
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {layout.title}
                    </Typography>

                    {/* Fixed-position radio (no jump issue) */}
                    <Box
                      sx={{
                        minWidth: 36,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Radio
                        checked={isSelected}
                        onChange={() => setSelectedLayout(layout.id)}
                        value={layout.id}
                        sx={{
                          color: theme.palette.primary.main,
                        }}
                      />
                    </Box>
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
          variant="outlined"
          onClick={handleBack}
          sx={{
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
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
          disabled={!selectedLayout}
          sx={{
            px: 3,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
