import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  useTheme,
  styled,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

// 🔴 Styled TextField — makes default required asterisk red
const RedAsteriskTextField = styled(TextField)({
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },
});

export default function EstimateForm() {
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
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // 🧮 Estimate calculation
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const livingRoom = parseInt(searchParams.get("livingRoom")) || 0;
    const kitchen = parseInt(searchParams.get("kitchen")) || 0;
    const bedroom = parseInt(searchParams.get("bedroom")) || 0;
    const bathroom = parseInt(searchParams.get("bathroom")) || 0;
    const dining = parseInt(searchParams.get("dining")) || 0;
    const packageType = searchParams.get("package");
    const size = searchParams.get("size");

    const roomPrices = {
      livingRoom: 150000,
      kitchen: 200000,
      bedroom: 120000,
      bathroom: 80000,
      dining: 100000,
    };

    const packageMultipliers = {
      essentials: 1.0,
      premium: 1.3,
      luxe: 1.8,
    };

    const sizeMultipliers = {
      small: 0.8,
      large: 1.2,
    };

    let totalPrice =
      livingRoom * roomPrices.livingRoom +
      kitchen * roomPrices.kitchen +
      bedroom * roomPrices.bedroom +
      bathroom * roomPrices.bathroom +
      dining * roomPrices.dining;

    totalPrice *= packageMultipliers[packageType] || 1.0;
    totalPrice *= sizeMultipliers[size] || 1.0;

    setEstimatedPrice(Math.round(totalPrice));
  }, [location.search]);

  // 🧩 Field validation
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

  // 🧠 Input restriction + validation
  const handleInputChange = (field) => (event) => {
    let value = event.target.value;

    // Restrict invalid characters before setting state
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

  const isFormValid = () => {
    return (
      Object.values(formData).every((v) => v.trim() !== "") &&
      Object.values(errors).every((err) => !err)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    // ✅ Success toast
    setToast({
      open: true,
      message: `Thank you ${
        formData.name
      }! Your estimated price is ₹${estimatedPrice.toLocaleString()}. We'll contact you soon!`,
      severity: "success",
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleBack = () => {
    const searchParams = new URLSearchParams(location.search);
    const queryParams = new URLSearchParams({
      bhk: searchParams.get("bhk"),
      size: searchParams.get("size"),
      livingRoom: searchParams.get("livingRoom"),
      kitchen: searchParams.get("kitchen"),
      bedroom: searchParams.get("bedroom"),
      bathroom: searchParams.get("bathroom"),
      dining: searchParams.get("dining"),
    });
    navigate(
      `/price-calculators/home/calculator/package?${queryParams.toString()}`
    );
  };

  return (
    <Box sx={{ maxWidth: 550, mx: "auto", p: 3 }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mb: 1.5,
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
          mb: 3,
          color: theme.palette.text.secondary,
        }}
      >
        Please fill out the details below to receive your estimate.
      </Typography>

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

            {/* Estimated Price Display */}
            <Box
              sx={{
                textAlign: "center",
                p: 2.5,
                mt: 3,
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
                ₹{estimatedPrice.toLocaleString()}
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

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
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
