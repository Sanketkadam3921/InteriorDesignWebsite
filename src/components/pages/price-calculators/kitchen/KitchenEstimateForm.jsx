import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  useTheme,
  Snackbar,
  Alert,
  styled,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const RedAsteriskTextField = styled(TextField)({
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },
});

export default function KitchenEstimateForm() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyName: "",
  });

  const [errors, setErrors] = useState({});
  const [estimateData, setEstimateData] = useState(null);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Calculate base price function
  const calculateBasePrice = (layout, A, B, C, packageType) => {
    const packagePrices = {
      essentials: 1200,
      premium: 1800,
      luxe: 2500,
    };

    const layoutMultipliers = {
      "l-shaped": 1.2,
      "u-shaped": 1.5,
      straight: 1.0,
      parallel: 1.1,
    };

    // Standard cabinet height in feet (approximately 2.5 feet)
    const cabinetHeight = 2.5;

    // Calculate linear feet based on layout
    let linearFeet = 0;
    switch (layout) {
      case "straight":
        linearFeet = A;
        break;
      case "l-shaped":
        linearFeet = A + B;
        break;
      case "u-shaped":
        linearFeet = A + B + C;
        break;
      case "parallel":
        linearFeet = A + B;
        break;
      default:
        linearFeet = A;
    }

    const basePricePerSqFt = packagePrices[packageType] || 1800;
    const layoutMultiplier = layoutMultipliers[layout] || 1.0;

    // Calculate area (linear feet * height) and then price
    const area = linearFeet * cabinetHeight;
    const price = area * basePricePerSqFt * layoutMultiplier;

    return Math.round(price);
  };

  // Calculate base and total prices
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const layout = searchParams.get("layout");
    const A = parseFloat(searchParams.get("A")) || 0;
    const B = parseFloat(searchParams.get("B")) || 0;
    const C = parseFloat(searchParams.get("C")) || 0;
    const packageType = searchParams.get("package");

    const totalPrice = calculateBasePrice(layout, A, B, C, packageType);

    setEstimateData({
      layout,
      A,
      B,
      C,
      packageType,
      totalPrice,
    });
  }, [location.search]);

  // 🧩 Validation per field
  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (!/^[A-Za-z\s]+$/.test(value))
          error = "Only letters and spaces allowed";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Enter a valid email address";
        break;
      case "phone":
        if (!value.trim()) error = "Phone number is required";
        else if (!/^[6-9]\d{9}$/.test(value))
          error = "Enter a valid 10-digit Indian number";
        break;
      case "propertyName":
        if (!value.trim()) error = "Property name is required";
        else if (!/^[A-Za-z0-9\s]+$/.test(value))
          error = "Only letters and numbers allowed";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  // 🧠 Restrict invalid characters while typing
  const handleInputChange = (field) => (event) => {
    let value = event.target.value;

    switch (field) {
      case "name":
        value = value.replace(/[^A-Za-z\s]/g, "");
        break;
      case "phone":
        value = value.replace(/\D/g, "").slice(0, 10);
        break;
      case "propertyName":
        value = value.replace(/[^A-Za-z0-9\s]/g, "");
        break;
      default:
        break;
    }

    setFormData((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const isFormValid = () =>
    Object.values(formData).every((v) => v.trim() !== "") &&
    Object.values(errors).every((e) => !e);

  const handleSubmit = (event) => {
    event.preventDefault();

    Object.entries(formData).forEach(([key, value]) =>
      validateField(key, value)
    );

    if (!isFormValid()) {
      setToast({
        open: true,
        message: "Please fill all fields correctly before submitting.",
        severity: "error",
      });
      return;
    }

    setToast({
      open: true,
      message: `Thank you ${
        formData.name
      }! Your kitchen estimate is ₹${estimateData.totalPrice.toLocaleString()}. We will contact you soon.`,
      severity: "success",
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
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
      `/price-calculators/kitchen/calculator/package?${queryParams.toString()}`
    );
  };

  if (!estimateData) return <Box>Loading...</Box>;

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
        Your Estimate Is Almost Ready
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mb: 4,
          color: theme.palette.text.secondary,
        }}
      >
        Please fill out the details below to receive your estimate.
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
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
        <CardContent sx={{ p: 3 }}>
          <form onSubmit={handleSubmit} noValidate>
            <RedAsteriskTextField
              fullWidth
              label="Name"
              value={formData.name}
              onChange={handleInputChange("name")}
              margin="normal"
              required
              size="small"
              error={!!errors.name}
              helperText={errors.name}
            />

            <RedAsteriskTextField
              fullWidth
              label="Email ID"
              type="email"
              value={formData.email}
              onChange={handleInputChange("email")}
              margin="normal"
              required
              size="small"
              error={!!errors.email}
              helperText={errors.email}
            />

            <RedAsteriskTextField
              fullWidth
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange("phone")}
              margin="normal"
              required
              size="small"
              error={!!errors.phone}
              helperText={errors.phone}
            />

            <RedAsteriskTextField
              fullWidth
              label="Property Name"
              value={formData.propertyName}
              onChange={handleInputChange("propertyName")}
              margin="normal"
              required
              size="small"
              error={!!errors.propertyName}
              helperText={errors.propertyName}
            />

            {/* Estimated Price */}
            <Box
              sx={{
                textAlign: "center",
                p: 2,
                mt: 2,
                backgroundColor: theme.palette.primary.light + "20",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.text.secondary, mb: 0.5 }}
              >
                Estimated Price
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                }}
              >
                ₹{estimateData.totalPrice.toLocaleString()}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: theme.palette.text.secondary, mt: 0.5 }}
              >
                *Final price may vary based on requirements
              </Typography>
            </Box>
          </form>
        </CardContent>
      </Card>
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
            fontSize: "0.9rem",
          }}
        >
          Back
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!isFormValid()}
          sx={{
            px: 3,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          Submit
        </Button>
      </Box>

      {/* ✅ Toast Notification */}
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToast({ ...toast, open: false })}
          severity={toast.severity}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
