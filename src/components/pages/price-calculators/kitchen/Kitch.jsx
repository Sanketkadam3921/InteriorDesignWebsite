import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Snackbar,
  Alert,
  styled,
  useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

// 🔴 Required field styling
const RedAsteriskTextField = styled(TextField)({
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },
});

export default function KitchenEstimateForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

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

  // ⭐ Calculate modular kitchen price
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

    const cabinetHeight = 2.5; // in feet

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

    const area = linearFeet * cabinetHeight;
    const price = area * basePricePerSqFt * layoutMultiplier;

    return Math.round(price);
  };

  // ⭐ Extract query params and calculate estimate
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const layout = params.get("layout");
    const A = parseFloat(params.get("A")) || 0;
    const B = parseFloat(params.get("B")) || 0;
    const C = parseFloat(params.get("C")) || 0;
    const packageType = params.get("package");

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

  // ⭐ Pretty kitchen details formatting
  const formatKitchenDetails = (details, price, propertyName) => {
    return `
 MODULAR KITCHEN ESTIMATE SUMMARY

 CONFIGURATION
• Layout: ${details.layout || "N/A"}
• Package: ${details.packageType || "N/A"}

 DIMENSIONS (in feet)
• Side A: ${details.A || 0} ft
• Side B: ${details.B || 0} ft
• Side C: ${details.C || 0} ft

 ESTIMATED PRICE
• ₹${price.toLocaleString()}

 PROPERTY
• ${propertyName || "N/A"}
`;
  };

  // ⭐ Validation
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
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  // ⭐ Controlled input handling
  const handleInputChange = (field) => (event) => {
    let value = event.target.value;

    if (field === "name") value = value.replace(/[^A-Za-z\s]/g, "");
    if (field === "phone") value = value.replace(/\D/g, "").slice(0, 10);
    if (field === "propertyName") value = value.replace(/[^A-Za-z0-9\s]/g, "");

    setFormData((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const isFormValid = () =>
    Object.values(formData).every((v) => v.trim() !== "") &&
    Object.values(errors).every((e) => !e);

  // ⭐ Web3Forms submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // validate all
    Object.entries(formData).forEach(([k, v]) => validateField(k, v));

    if (!isFormValid()) {
      setToast({
        open: true,
        message: "Please fill all fields correctly before submitting.",
        severity: "error",
      });
      return;
    }

    try {
      const fd = new FormData();

      fd.append("access_key", "1c21fc37-1fc4-4734-a82f-0a647e166aef");
      fd.append(
        "subject",
        `New Modular Kitchen Estimate from ${formData.name}`
      );

      // user info
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("phone", formData.phone);
      fd.append("property_name", formData.propertyName);

      // price
      fd.append("estimated_price", estimateData.totalPrice);

      // formatted summary
      fd.append(
        "calculation_details",
        formatKitchenDetails(
          estimateData,
          estimateData.totalPrice,
          formData.propertyName
        )
      );

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data.success) {
        setToast({
          open: true,
          message: "Your kitchen estimate has been submitted!",
          severity: "success",
        });

        setTimeout(() => navigate("/"), 2000);
      } else throw new Error("Submission failed");
    } catch (err) {
      setToast({
        open: true,
        message: "Something went wrong. Please try again.",
        severity: "error",
      });
    }
  };

  // ⭐ Navigate back
  const handleBack = () => {
    const params = new URLSearchParams(location.search);
    navigate(`/price-calculators/kitchen/calculator/package?${params}`);
  };

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
        sx={{
          textAlign: "center",
          mb: 1,
          fontWeight: 600,
          color: theme.palette.text.primary,
        }}
      >
        Your Kitchen Estimate Is Ready
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

      {/* Form Card */}
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
                required
                margin="normal"
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
                required
                margin="normal"
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
                required
                margin="normal"
                size="small"
                error={!!errors.phone}
                helperText={errors.phone}
              />

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

              {/* Estimated Price Box */}
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
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Estimated Price
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: theme.palette.primary.main }}
                >
                  ₹{estimateData.totalPrice.toLocaleString()}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{ color: theme.palette.text.secondary }}
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
        <Alert severity={toast.severity} sx={{ width: "100%" }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
