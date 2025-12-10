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
  CircularProgress,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import {
  calculateWardrobeEstimate,
  submitWardrobeEstimate,
} from "../../../../services/api/wardrobeCalculatorApi";

// 🔴 Red asterisk for required fields
const RedAsteriskTextField = styled(TextField)({
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },
});

export default function WardrobeEstimateForm() {
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
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [estimateData, setEstimateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [calculating, setCalculating] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // 💰 Calculate Estimated Price from API
  useEffect(() => {
    const calculateEstimateFromAPI = async () => {
      try {
        setCalculating(true);
        const searchParams = new URLSearchParams(location.search);

        const length = parseFloat(searchParams.get("length"));
        const height = parseFloat(searchParams.get("height"));
        const type = searchParams.get("type");
        const packageType = searchParams.get("package");

        const result = await calculateWardrobeEstimate({
          length,
          height,
          type,
          package: packageType,
        });

        const finalAmount = result.estimatedPrice || 0;
        setEstimatedPrice(finalAmount);
        setEstimateData({
          length,
          height,
          type,
          package: packageType,
          totalPrice: finalAmount,
        });
      } catch (error) {
        console.error("Error calculating estimate:", error);
        setToast({
          open: true,
          message: "Error calculating estimate. Please try again.",
          severity: "error",
        });
      } finally {
        setCalculating(false);
      }
    };

    calculateEstimateFromAPI();
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

  // Restrict invalid characters while typing
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

  const isFormValid = () =>
    Object.values(formData).every((v) => v.trim() !== "") &&
    Object.values(errors).every((err) => !err);

  // 📨 SUBMIT TO API
  const handleSubmit = async (event) => {
    event.preventDefault();

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
      setLoading(true);

      const searchParams = new URLSearchParams(location.search);

      const estimatePayload = {
        length: parseFloat(searchParams.get("length")),
        height: parseFloat(searchParams.get("height")),
        type: searchParams.get("type"),
        package: searchParams.get("package"),
        estimatedPrice: estimateData.totalPrice,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "1c21fc37-1fc4-4734-a82f-0a647e166aef",

          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          propertyName: formData.propertyName,

          message: `
Wardrobe Estimate Details:
Length: ${estimatePayload.length}
Height: ${estimatePayload.height}
Type: ${estimatePayload.type}
Package: ${estimatePayload.package}
Estimated Price: ₹${estimatePayload.estimatedPrice}
        `,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);

      setToast({
        open: true,
        message: `Your estimate has been submitted successfully! Estimated Price: ₹${estimatedPrice.toLocaleString()}`,
        severity: "success",
      });

      setTimeout(() => navigate("/"), 10000);
    } catch (error) {
      console.error(error);
      setToast({
        open: true,
        message: "Something went wrong. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    const params = new URLSearchParams(location.search);
    navigate(
      `/price-calculators/wardrobe/calculator/package?${params.toString()}`
    );
  };

  if (calculating) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!estimateData) return <Box>Loading...</Box>;

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
        sx={{ textAlign: "center", mb: 1, fontWeight: 600 }}
      >
        Your Estimate Is Almost Ready
      </Typography>

      <Typography
        variant="body2"
        sx={{ textAlign: "center", mb: 4, color: "text.secondary" }}
      >
        Please fill out the details below.
      </Typography>

      <Card
        sx={{
          borderRadius: 2,
          border: "1px solid",
          borderColor: theme.palette.grey[300],
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <form onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <RedAsteriskTextField
              fullWidth
              label="Name"
              value={formData.name}
              onChange={handleInputChange("name")}
              required
              margin="normal"
              size="small"
              error={!!errors.name}
              helperText={errors.name}
            />

            {/* Email */}
            <RedAsteriskTextField
              fullWidth
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange("email")}
              required
              margin="normal"
              size="small"
              error={!!errors.email}
              helperText={errors.email}
            />

            {/* Phone */}
            <RedAsteriskTextField
              fullWidth
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange("phone")}
              required
              margin="normal"
              size="small"
              error={!!errors.phone}
              helperText={errors.phone}
            />

            {/* Property */}
            <RedAsteriskTextField
              fullWidth
              label="Property Name"
              value={formData.propertyName}
              onChange={handleInputChange("propertyName")}
              required
              margin="normal"
              size="small"
              error={!!errors.propertyName}
              helperText={errors.propertyName}
            />

            {/* Price box - Only shown after submission */}
            {submitted && (
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  mt: 2,
                  backgroundColor: theme.palette.primary.light + "20",
                  borderRadius: 2,
                }}
              >
                <Typography variant="subtitle2">Estimated Price</Typography>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  ₹{estimatedPrice.toLocaleString()}
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  *Final price may vary based on requirements
                </Typography>
              </Box>
            )}
          </form>
        </CardContent>
      </Card>

      {/* Buttons */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          maxWidth: 700,
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          p: 3,
          borderTop: "1px solid #ddd",
          backgroundColor: "background.default",
        }}
      >
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>

        <Button
          variant="contained"
          disabled={!isFormValid() || loading || calculating}
          onClick={handleSubmit}
        >
          {loading ? <CircularProgress size={20} /> : "Submit"}
        </Button>
      </Box>

      {/* Toast */}
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
      >
        <Alert severity={toast.severity}>{toast.message}</Alert>
      </Snackbar>
    </Box>
  );
}
