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

  // ⭐ FORMAT FOR EMAIL MESSAGE
  const formatCalculationDetails = (data) => {
    const accessoriesList = data.accessories
      ? data.accessories.split(",").join(", ")
      : "None";

    return `
Wardrobe Estimate Details

Height: ${data.height}
Type: ${data.type}
Finish: ${data.finish}
Material: ${data.material}
Accessories: ${accessoriesList}

Final Price: ₹${data.totalPrice.toLocaleString()}
    `;
  };

  // 💰 Calculate Estimated Price
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
      const selected = accessories.split(",");
      selected.forEach((a) => {
        if (accessoriesPrices[a]) totalPrice += accessoriesPrices[a];
      });
    }

    const finalAmount = Math.round(totalPrice);

    setEstimatedPrice(finalAmount);
    setEstimateData({
      height,
      type,
      finish,
      material,
      accessories,
      totalPrice: finalAmount,
    });
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

  // 📨 SUBMIT TO WEB3FORMS
  const handleSubmit = async (event) => {
    event.preventDefault();

    // re-validate before submit
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
        `New Wardrobe Estimate from ${formData.name}`
      );

      // user details
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("property_name", formData.propertyName);

      // price
      formDataToSend.append("estimated_price", estimateData.totalPrice);

      // details
      formDataToSend.append(
        "calculation_details",
        formatCalculationDetails(estimateData)
      );

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();

      if (data.success) {
        setToast({
          open: true,
          message: "Your wardrobe estimate has been submitted successfully!",
          severity: "success",
        });

        setTimeout(() => navigate("/"), 2000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setToast({
        open: true,
        message: "Something went wrong. Please try again.",
        severity: "error",
      });
    }
  };

  const handleBack = () => {
    const params = new URLSearchParams(location.search);
    navigate(
      `/price-calculators/wardrobe/calculator/accessories?${params.toString()}`
    );
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

            {/* Price box */}
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
          disabled={!isFormValid()}
          onClick={handleSubmit}
        >
          Submit
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
