import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function WardrobeLengthSelection() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [errors, setErrors] = useState({});

  // Generate allowed values for dropdowns
  const getAllowedLengthValues = () => {
    const values = [];
    for (let i = 3; i <= 15; i += 1) {
      values.push(i);
    }
    return values;
  };

  const getAllowedHeightValues = () => {
    const values = [];
    for (let i = 7; i <= 15; i += 0.5) {
      values.push(i);
    }
    return values;
  };

  const allowedLengthValues = getAllowedLengthValues();
  const allowedHeightValues = getAllowedHeightValues();

  const validateInput = (value, field) => {
    if (!value || value.trim() === "") {
      return `${field} is required`;
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
          backgroundColor: theme.palette.primary.light + "25",
          borderRadius: 2,
          p: 3,
          mb: 2,
          border: "1px solid",
          borderColor: theme.palette.primary.light + "40",
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
            <FormControl fullWidth error={!!errors.length} sx={{ mb: 3 }}>
              <InputLabel>Length (feet)</InputLabel>
              <Select
                value={length}
                onChange={handleLengthChange}
                label="Length (feet)"
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  PaperProps: {
                    style: {
                      maxHeight: 300,
                    },
                  },
                  disableAutoFocusItem: true,
                }}
                sx={{
                  borderRadius: 2,
                }}
              >
                {allowedLengthValues.map((value) => (
                  <MenuItem key={value} value={value.toString()}>
                    {value} ft
                  </MenuItem>
                ))}
              </Select>
              {errors.length && (
                <Typography
                  variant="caption"
                  sx={{ color: "error.main", mt: 0.5, ml: 1.75 }}
                >
                  {errors.length}
                </Typography>
              )}
              {!errors.length && (
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", mt: 0.5, ml: 1.75 }}
                >
                  Select the width/length of your wardrobe (Min: 3 ft, Max: 15
                  ft)
                </Typography>
              )}
            </FormControl>

            {/* Height Input */}
            <FormControl fullWidth error={!!errors.height}>
              <InputLabel>Height (feet)</InputLabel>
              <Select
                value={height}
                onChange={handleHeightChange}
                label="Height (feet)"
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  PaperProps: {
                    style: {
                      maxHeight: 300,
                    },
                  },
                  disableAutoFocusItem: true,
                }}
                sx={{
                  borderRadius: 2,
                }}
              >
                {allowedHeightValues.map((value) => (
                  <MenuItem key={value} value={value.toString()}>
                    {value} ft
                  </MenuItem>
                ))}
              </Select>
              {errors.height && (
                <Typography
                  variant="caption"
                  sx={{ color: "error.main", mt: 0.5, ml: 1.75 }}
                >
                  {errors.height}
                </Typography>
              )}
              {!errors.height && (
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", mt: 0.5, ml: 1.75 }}
                >
                  Select the height of your wardrobe (Min: 7 ft, Max: 15 ft)
                </Typography>
              )}
            </FormControl>
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
