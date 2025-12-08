import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function WardrobeLengthSelection() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [errors, setErrors] = useState({});

  const validateInput = (value, field) => {
    const numValue = parseFloat(value);
    if (!value || value.trim() === "") {
      return `${field} is required`;
    }
    if (isNaN(numValue) || numValue <= 0) {
      return `${field} must be a positive number`;
    }
    
    // Field-specific validation
    if (field === "Length") {
      if (numValue < 3) {
        return `Length must be at least 3 feet`;
      }
      if (numValue > 15) {
        return `Length cannot exceed 15 feet`;
      }
    } else if (field === "Height") {
      if (numValue < 7) {
        return `Height must be at least 7 feet`;
      }
      if (numValue > 15) {
        return `Height cannot exceed 15 feet`;
      }
    }
    
    return "";
  };

  const handleLengthChange = (event) => {
    const value = event.target.value;
    setLength(value);
    const error = validateInput(value, "Length");
    setErrors((prev) => ({ ...prev, length: error }));
  };

  const handleHeightChange = (event) => {
    const value = event.target.value;
    setHeight(value);
    const error = validateInput(value, "Height");
    setErrors((prev) => ({ ...prev, height: error }));
  };

  const handleNext = () => {
    const lengthError = validateInput(length, "Length");
    const heightError = validateInput(height, "Height");
    
    setErrors({ length: lengthError, height: heightError });
    
    if (!lengthError && !heightError) {
      const queryParams = new URLSearchParams({
        length: length,
        height: height,
      });
      navigate(
        `/price-calculators/wardrobe/calculator/type?${queryParams.toString()}`
      );
    }
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
        Enter Wardrobe Dimensions
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mb: 4,
          color: theme.palette.text.secondary,
        }}
      >
        Please provide the length and height of your wardrobe in feet
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
        <Card
          sx={{
            borderRadius: 2,
            border: "1px solid",
            borderColor: theme.palette.grey[300],
            mb: 2,
          }}
        >
          <CardContent sx={{ p: 3 }}>
            {/* Length Input */}
            <TextField
              fullWidth
              label="Length (feet)"
              type="number"
              value={length}
              onChange={handleLengthChange}
              error={!!errors.length}
              helperText={errors.length || "Enter the width/length of your wardrobe (Min: 3 ft, Max: 15 ft)"}
              inputProps={{ min: 3, max: 15, step: 0.1 }}
              sx={{ mb: 3 }}
            />

            {/* Height Input */}
            <TextField
              fullWidth
              label="Height (feet)"
              type="number"
              value={height}
              onChange={handleHeightChange}
              error={!!errors.height}
              helperText={errors.height || "Enter the height of your wardrobe (Min: 7 ft, Max: 15 ft)"}
              inputProps={{ min: 7, max: 15, step: 0.1 }}
            />
          </CardContent>
        </Card>
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
          onClick={() => navigate("/")}
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
          disabled={!length || !height || !!errors.length || !!errors.height}
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
