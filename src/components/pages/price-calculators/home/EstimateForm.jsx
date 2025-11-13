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

// 🔴 Required field styling
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

  const [calcDetails, setCalcDetails] = useState({});
  const [errors, setErrors] = useState({});
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // 🧮 FRONTEND ESTIMATE CALCULATION
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const data = {
      livingRoom: parseInt(searchParams.get("livingRoom")) || 0,
      kitchen: parseInt(searchParams.get("kitchen")) || 0,
      bedroom: parseInt(searchParams.get("bedroom")) || 0,
      bathroom: parseInt(searchParams.get("bathroom")) || 0,
      dining: parseInt(searchParams.get("dining")) || 0,
      packageType: searchParams.get("package"),
      size: searchParams.get("size"),
      bhk: searchParams.get("bhk"),
    };

    setCalcDetails(data);

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
      data.livingRoom * roomPrices.livingRoom +
      data.kitchen * roomPrices.kitchen +
      data.bedroom * roomPrices.bedroom +
      data.bathroom * roomPrices.bathroom +
      data.dining * roomPrices.dining;

    totalPrice *= packageMultipliers[data.packageType] || 1.0;
    totalPrice *= sizeMultipliers[data.size] || 1.0;

    setEstimatedPrice(Math.round(totalPrice));
  }, [location.search]);

  // 🧩 FIELD VALIDATION
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

  // 🧠 Restrict input + validate
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
  const formatCalculationDetails = (details) => {
    return `
BHK: ${details.bhk || "N/A"}
Package: ${details.packageType || "N/A"}
Size: ${details.size || "N/A"}

Rooms:
- Living Room: ${details.livingRoom}
- Kitchen: ${details.kitchen}
- Bedroom: ${details.bedroom}
- Bathroom: ${details.bathroom}
- Dining: ${details.dining}
`;
  };

  // 🚀 WEB3FORMS SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();

    Object.entries(formData).forEach(([key, value]) =>
      validateField(key, value)
    );

    if (!isFormValid()) {
      setToast({
        open: true,
        message: "Please fill all fields correctly.",
        severity: "error",
      });
      return;
    }

    try {
      const formDataToSend = new FormData();

      formDataToSend.append(
        "access_key",
        "1c21fc37-1fc4-4734-a82f-0a647e166aef"
      );
      formDataToSend.append(
        "subject",
        `New Budget Estimate Enquiry from ${formData.name}`
      );

      // User info
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("property_name", formData.propertyName);

      // Estimate
      formDataToSend.append("estimated_price", estimatedPrice);

      // Calculator details
      formDataToSend.append(
        "calculation_details",
        formatCalculationDetails(calcDetails)
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setToast({
          open: true,
          message: "Your estimate has been submitted successfully.",
          severity: "success",
        });

        setTimeout(() => navigate("/"), 2000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      console.error(err);
      setToast({
        open: true,
        message: "Something went wrong. Please try again.",
        severity: "error",
      });
    }
  };

  const handleBack = () => {
    const searchParams = new URLSearchParams(location.search);
    navigate(`/price-calculators/home/calculator/package?${searchParams}`);
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
      </Box>

      <Box sx={{ flex: 1 }} />

      {/* Buttons */}
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

      {/* Toast */}
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
