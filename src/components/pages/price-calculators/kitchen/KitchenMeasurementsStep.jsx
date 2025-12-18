import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function KitchenMeasurementsStep() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const layout = searchParams.get("layout"); // straight, parallel, l-shaped, u-shaped

  const [measurements, setMeasurements] = useState({});
  const [errors, setErrors] = useState({});

  // Define which dimensions to show based on layout
  const getDimensions = () => {
    switch (layout) {
      case "straight":
        return ["A"];
      case "parallel":
        return ["A", "B"];
      case "l-shaped":
        return ["A", "B"];
      case "u-shaped":
        return ["A", "B", "C"];
      default:
        return [];
    }
  };

  const dimensionLabels = {
    A: "Dimension A (ft)",
    B: "Dimension B (ft)",
    C: "Dimension C (ft)",
  };

  // Generate allowed values for dropdown (3 to 20 feet in 0.5 increments)
  const getAllowedValues = () => {
    const values = [];
    for (let i = 3; i <= 20; i += 1) {
      values.push(i);
    }
    return values;
  };

  const allowedValues = getAllowedValues();

  const handleInputChange = (field) => (event) => {
    const value = event.target.value;
    setMeasurements((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error as user selects
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateMeasurements = () => {
    const newErrors = {};
    getDimensions().forEach((dim) => {
      if (!measurements[dim]) {
        newErrors[dim] = `${dim} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateMeasurements()) {
      const queryParams = new URLSearchParams({ layout });
      getDimensions().forEach((dim) => {
        queryParams.set(dim, measurements[dim]);
      });
      navigate(
        `/price-calculators/kitchen/calculator/package?${queryParams.toString()}`
      );
    }
  };

  const handleBack = () => {
    navigate(`/price-calculators/kitchen/calculator/layout`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get layout diagram based on selected layout
  const getLayoutDiagram = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
          p: { xs: 2, sm: 3, md: 4 },
          backgroundColor: theme.palette.background.default,
          borderRadius: 2,
          minHeight: { xs: 200, sm: 240, md: 280 },
          overflow: "hidden",
        }}
      >
        {layout === "l-shaped" && (
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", sm: 280, md: 320 },
              maxWidth: "100%",
              height: { xs: 180, sm: 200, md: 240 },
            }}
          >
            {/* L-shaped counter */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: { xs: "62.5%", sm: 200 },
                height: { xs: 40, sm: 60, md: 80 },
                backgroundColor: theme.palette.primary.light,
                border: { xs: "2px solid", sm: "3px solid" },
                borderColor: theme.palette.primary.main,
                borderRadius: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: { xs: 40, sm: 60, md: 80 },
                left: 0,
                width: { xs: "25%", sm: 80 },
                height: { xs: 90, sm: 100, md: 120 },
                backgroundColor: theme.palette.primary.light,
                border: { xs: "2px solid", sm: "3px solid" },
                borderColor: theme.palette.primary.main,
                borderTop: "none",
                borderRadius: 1,
              }}
            />

            {/* Dimension A (horizontal) */}
            <Typography
              variant="subtitle2"
              sx={{
                position: "absolute",
                top: { xs: -15, sm: -18, md: -20 },
                left: { xs: "31.25%", sm: 100 },
                transform: "translateX(-50%)",
                fontWeight: 700,
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.default,
                px: { xs: 0.5, sm: 1 },
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              }}
            >
              A
            </Typography>

            {/* Dimension B (vertical) */}
            <Typography
              variant="subtitle2"
              sx={{
                position: "absolute",
                left: { xs: -15, sm: -18, md: -20 },
                top: { xs: 85, sm: 110, md: 140 },
                transform: "translateY(-50%)",
                fontWeight: 700,
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.default,
                px: { xs: 0.5, sm: 1 },
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              }}
            >
              B
            </Typography>
          </Box>
        )}

        {layout === "straight" && (
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", sm: 280, md: 320 },
              maxWidth: "100%",
              height: { xs: 100, sm: 120, md: 140 },
            }}
          >
            {/* Straight counter */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                width: "100%",
                height: { xs: 50, sm: 60, md: 80 },
                backgroundColor: theme.palette.primary.light,
                border: { xs: "2px solid", sm: "3px solid" },
                borderColor: theme.palette.primary.main,
                borderRadius: 1,
              }}
            />

            {/* Dimension A */}
            <Typography
              variant="subtitle2"
              sx={{
                position: "absolute",
                top: { xs: 5, sm: 8, md: 10 },
                left: "50%",
                transform: "translateX(-50%)",
                fontWeight: 700,
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.default,
                px: { xs: 0.5, sm: 1 },
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              }}
            >
              A
            </Typography>
          </Box>
        )}

        {layout === "u-shaped" && (
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", sm: 280, md: 320 },
              maxWidth: "100%",
              height: { xs: 180, sm: 200, md: 240 },
            }}
          >
            {/* U-shaped counter - three sections */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: { xs: "25%", sm: 80 },
                height: { xs: 150, sm: 170, md: 200 },
                backgroundColor: theme.palette.primary.light,
                border: { xs: "2px solid", sm: "3px solid" },
                borderColor: theme.palette.primary.main,
                borderRadius: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: { xs: "25%", sm: 80 },
                width: { xs: "50%", sm: 160 },
                height: { xs: 50, sm: 60, md: 80 },
                backgroundColor: theme.palette.primary.light,
                border: { xs: "2px solid", sm: "3px solid" },
                borderColor: theme.palette.primary.main,
                borderLeft: "none",
                borderRadius: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: { xs: "25%", sm: 80 },
                height: { xs: 150, sm: 170, md: 200 },
                backgroundColor: theme.palette.primary.light,
                border: { xs: "2px solid", sm: "3px solid" },
                borderColor: theme.palette.primary.main,
                borderLeft: "none",
                borderRadius: 1,
              }}
            />

            {/* Dimension A (left) */}
            <Typography
              variant="subtitle2"
              sx={{
                position: "absolute",
                left: { xs: -15, sm: -18, md: -20 },
                top: { xs: 75, sm: 85, md: 100 },
                transform: "translateY(-50%)",
                fontWeight: 700,
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.default,
                px: { xs: 0.5, sm: 1 },
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              }}
            >
              A
            </Typography>

            {/* Dimension B (top) */}
            <Typography
              variant="subtitle2"
              sx={{
                position: "absolute",
                top: { xs: -15, sm: -18, md: -20 },
                left: { xs: "50%", sm: 160 },
                transform: "translateX(-50%)",
                fontWeight: 700,
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.default,
                px: { xs: 0.5, sm: 1 },
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              }}
            >
              B
            </Typography>

            {/* Dimension C (right) */}
            <Typography
              variant="subtitle2"
              sx={{
                position: "absolute",
                right: { xs: -15, sm: -18, md: -20 },
                top: { xs: 75, sm: 85, md: 100 },
                transform: "translateY(-50%)",
                fontWeight: 700,
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.default,
                px: { xs: 0.5, sm: 1 },
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              }}
            >
              C
            </Typography>
          </Box>
        )}

        {layout === "parallel" && (
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", sm: 280, md: 320 },
              maxWidth: "100%",
              height: { xs: 160, sm: 180, md: 220 },
            }}
          >
            {/* Two parallel counters */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: { xs: 50, sm: 60, md: 80 },
                backgroundColor: theme.palette.primary.light,
                border: { xs: "2px solid", sm: "3px solid" },
                borderColor: theme.palette.primary.main,
                borderRadius: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: { xs: 50, sm: 60, md: 80 },
                backgroundColor: theme.palette.primary.light,
                border: { xs: "2px solid", sm: "3px solid" },
                borderColor: theme.palette.primary.main,
                borderRadius: 1,
              }}
            />

            {/* Dimension A (top) */}
            <Typography
              variant="subtitle2"
              sx={{
                position: "absolute",
                top: { xs: -15, sm: -18, md: -20 },
                left: "50%",
                transform: "translateX(-50%)",
                fontWeight: 700,
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.default,
                px: { xs: 0.5, sm: 1 },
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              }}
            >
              A
            </Typography>

            {/* Dimension B (bottom) */}
            <Typography
              variant="subtitle2"
              sx={{
                position: "absolute",
                bottom: { xs: -15, sm: -18, md: -20 },
                left: "50%",
                transform: "translateX(-50%)",
                fontWeight: 700,
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.default,
                px: { xs: 0.5, sm: 1 },
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              }}
            >
              B
            </Typography>
          </Box>
        )}
      </Box>
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
        Now review the measurements for accuracy
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mb: 4,
          color: theme.palette.text.secondary,
        }}
      >
        Based on your selected layout (
        <strong style={{ textTransform: "capitalize" }}>
          {layout?.replace("-", " ")}
        </strong>
        ), please provide the following dimensions in feet.
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
        {/* Layout Diagram */}
        {layout && getLayoutDiagram()}

        {/* Dimension Inputs */}
        <Card sx={{ mb: 0, mt: 3, p: 3, boxShadow: 2 }}>
          <Grid container spacing={3} justifyContent="center">
            {getDimensions().map((dim) => (
              <Grid item xs={12} sm={6} md={4} key={dim}>
                <FormControl fullWidth error={!!errors[dim]}>
                  <InputLabel>{dimensionLabels[dim]}</InputLabel>
                  <Select
                    value={measurements[dim] || ""}
                    onChange={handleInputChange(dim)}
                    label={dimensionLabels[dim]}
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
                    {allowedValues.map((value) => (
                      <MenuItem key={value} value={value.toString()}>
                        {value} ft
                      </MenuItem>
                    ))}
                  </Select>
                  {errors[dim] && (
                    <Typography
                      variant="caption"
                      sx={{ color: "error.main", mt: 0.5, ml: 1.75 }}
                    >
                      {errors[dim]}
                    </Typography>
                  )}
                  {!errors[dim] && (
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", mt: 0.5, ml: 1.75 }}
                    >
                      Select the dimension of your kitchen (Min: 3 ft, Max: 20
                      ft)
                    </Typography>
                  )}
                </FormControl>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Box>

      {/* Info Tip 
            <Box
                sx={{
                    backgroundColor: theme.palette.info.light || "#e3f2fd",
                    p: 3,
                    borderRadius: 2,
                    mb: 4,
                    border: `1px solid ${theme.palette.info.main || "#2196f3"}`,
                }}
            >
                <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                    <strong>💡 Tip:</strong> Measure from wall to wall for each section of your
                    kitchen layout. Standard sizes have been set for convenience, but you can adjust as needed.
                    {layout === 'l-shaped' && ' For L-shaped layouts, A and B represent the two connected walls.'}
                    {layout === 'u-shaped' && ' For U-shaped layouts, A, B, and C represent the three walls.'}
                    {layout === 'parallel' && ' For parallel layouts, A and B represent the two opposite walls.'}
                </Typography>
            </Box>*/}

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
