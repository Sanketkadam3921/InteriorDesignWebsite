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

  // 💰 Calculate estimated price
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const height = searchParams.get("height");
    const type = searchParams.get("type");
    const finish = searchParams.get("finish");
    const material = searchParams.get("material");
    const accessories = searchParams.get("accessories");

    const heightPrices = {
      "4ft": 80000,
      "6ft": 120000,
      "7ft": 150000,
      "9ft": 200000,
    };

    const typeMultipliers = {
      sliding: 1.0,
      swing: 0.9,
    };

    const finishMultipliers = {
      laminate: 1.0,
      membrane: 1.3,
      acrylic: 1.8,
    };

    const materialMultipliers = {
      mdf: 1.0,
      hdf: 1.2,
    };

    const accessoriesPrices = {
      loft: 15000,
      "single-drawer": 12000,
      "half-drawer-1": 8000,
      "half-drawer-2": 15000,
      "wicker-pullout": 10000,
    };

    let totalPrice = heightPrices[height] || 150000;
    totalPrice *= typeMultipliers[type] || 1.0;
    totalPrice *= finishMultipliers[finish] || 1.0;
    totalPrice *= materialMultipliers[material] || 1.0;

    if (accessories) {
      const selectedAccessories = accessories.split(",");
      selectedAccessories.forEach((a) => {
        if (accessoriesPrices[a]) totalPrice += accessoriesPrices[a];
      });
    }

    const finalPrice = Math.round(totalPrice);
    setEstimatedPrice(finalPrice);
    setEstimateData({
      height,
      type,
      finish,
      material,
      accessories,
      totalPrice: finalPrice,
    });
  }, [location.search]);

  // 🧩 Validation rules
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

  // 📨 Handle Submit
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
      }! Your wardrobe estimate is ₹${estimatedPrice.toLocaleString()}. We will contact you soon.`,
      severity: "success",
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleBack = () => {
    const searchParams = new URLSearchParams(location.search);
    const queryParams = new URLSearchParams({
      height: searchParams.get("height"),
      type: searchParams.get("type"),
      finish: searchParams.get("finish"),
      material: searchParams.get("material"),
      accessories: searchParams.get("accessories"),
    });
    navigate(
      `/price-calculators/wardrobe/calculator/timeline?${queryParams.toString()}`
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

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: 2,
          borderTop: "1px solid",
          borderColor: "divider",
          position: "sticky",
          bottom: 0,
          backgroundColor: theme.palette.background.default,
          pb: 2,
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
