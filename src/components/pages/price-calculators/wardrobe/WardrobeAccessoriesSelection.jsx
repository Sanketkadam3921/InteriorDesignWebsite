import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";

const accessoriesOptions = [
  {
    id: "loft",
    title: "Loft",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300",
    price: 15000,
  },
  {
    id: "single-drawer",
    title: "Single Full-size Drawer",
    image: "https://images.unsplash.com/photo-1616627562164-e9b1864a6422?w=300",
    price: 12000,
  },
  {
    id: "half-drawer-1",
    title: "1 Half-drawer",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300",
    price: 8000,
  },
  {
    id: "half-drawer-2",
    title: "2 Half-drawers",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300",
    price: 15000,
  },
  {
    id: "wicker-pullout",
    title: "Wicker Pull-out",
    image: "https://images.unsplash.com/photo-1616627562164-e9b1864a6422?w=300",
    price: 10000,
  },
];

export default function WardrobeAccessoriesSelection() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedAccessories, setSelectedAccessories] = useState(["loft"]);

  const handleAccessoryToggle = (accessoryId) => {
    setSelectedAccessories((prev) =>
      prev.includes(accessoryId)
        ? prev.filter((id) => id !== accessoryId)
        : [...prev, accessoryId]
    );
  };

  const handleNext = () => {
    const searchParams = new URLSearchParams(location.search);
    const queryParams = new URLSearchParams({
      height: searchParams.get("height"),
      type: searchParams.get("type"),
      finish: searchParams.get("finish"),
      material: searchParams.get("material"),
      accessories: selectedAccessories.join(","),
    });
    navigate(
      `/price-calculators/wardrobe/calculator/estimate?${queryParams.toString()}`
    );
  };

  const handleBack = () => {
    const searchParams = new URLSearchParams(location.search);
    const queryParams = new URLSearchParams({
      height: searchParams.get("height"),
      type: searchParams.get("type"),
      finish: searchParams.get("finish"),
      material: searchParams.get("material"),
    });
    navigate(
      `/price-calculators/wardrobe/calculator/material?${queryParams.toString()}`
    );
  };

  const totalAccessoriesPrice = selectedAccessories.reduce((total, id) => {
    const acc = accessoriesOptions.find((a) => a.id === id);
    return total + (acc ? acc.price : 0);
  }, 0);

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
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mb: 1,
          fontWeight: 600,
          color: theme.palette.text.primary,
        }}
      >
        Add Your Preferred Accessories (Optional)
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mb: 4,
          color: theme.palette.text.secondary,
        }}
      >
        Select any additional accessories for your wardrobe.
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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
            mb: 0,
          }}
        >
        {accessoriesOptions.map((accessory) => {
          const isSelected = selectedAccessories.includes(accessory.id);
          return (
            <Card
              key={accessory.id}
              onClick={() => handleAccessoryToggle(accessory.id)}
              sx={{
                border: "2px solid",
                borderColor: isSelected
                  ? theme.palette.primary.main
                  : theme.palette.grey[300],
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                cursor: "pointer",
                position: "relative",
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: theme.palette.primary.main,
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                },
                minHeight: 200,
              }}
            >
              {isSelected && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckIcon sx={{ color: "white", fontSize: 16 }} />
                </Box>
              )}

              <CardContent sx={{ p: 2 }}>
                <Box
                  sx={{
                    height: 120,
                    backgroundImage: `url(${accessory.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    mb: 1.5,
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: theme.palette.text.primary,
                  }}
                >
                  {accessory.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    mt: 1,
                  }}
                >
                  ₹{accessory.price.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
        </Box>
      </Box>

      {/* ✅ Summary Section 
            {selectedAccessories.length > 0 && (
                <Card
                    sx={{
                        backgroundColor: theme.palette.primary.light + "20",
                        border: "1px solid",
                        borderColor: theme.palette.primary.main + "30",
                        mb: 4,
                    }}
                >
                    <CardContent sx={{ p: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: theme.palette.primary.main,
                                mb: 2,
                                textAlign: "center",
                            }}
                        >
                            Selected Accessories
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1,
                                justifyContent: "center",
                                mb: 2,
                            }}
                        >
                            {selectedAccessories.map((id) => {
                                const accessory = accessoriesOptions.find((a) => a.id === id);
                                return (
                                    <Box
                                        key={id}
                                        sx={{
                                            backgroundColor: theme.palette.primary.main,
                                            color: "white",
                                            px: 2,
                                            py: 1,
                                            borderRadius: 2,
                                            fontSize: "0.875rem",
                                        }}
                                    >
                                        {accessory?.title}
                                    </Box>
                                );
                            })}
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: "center",
                                fontWeight: "bold",
                                color: theme.palette.text.primary,
                            }}
                        >
                            Total Accessories: ₹{totalAccessoriesPrice.toLocaleString()}
                        </Typography>
                    </CardContent>
                </Card>
            )}*/}

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
