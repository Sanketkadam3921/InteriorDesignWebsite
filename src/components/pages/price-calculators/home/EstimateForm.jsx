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
  CircularProgress,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { calculateHomeEstimate, submitHomeEstimate } from "../../../../services/api/homeCalculatorApi";

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
  const [loading, setLoading] = useState(false);
  const [calculating, setCalculating] = useState(true);

  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // 🧮 API ESTIMATE CALCULATION
  useEffect(() => {
    const calculateEstimateFromAPI = async () => {
      try {
        setCalculating(true);
        const searchParams = new URLSearchParams(location.search);

        const data = {
          bhk: searchParams.get("bhk"),
          size: searchParams.get("size") || null,
          package: searchParams.get("package"),
          rooms: {
            livingRoom: parseInt(searchParams.get("livingRoom")) || 0,
            kitchen: parseInt(searchParams.get("kitchen")) || 0,
            bedroom: parseInt(searchParams.get("bedroom")) || 0,
            bathroom: parseInt(searchParams.get("bathroom")) || 0,
            dining: parseInt(searchParams.get("dining")) || 0,
          },
        };

        setCalcDetails({
          bhk: data.bhk,
          size: data.size,
          packageType: data.package,
          livingRoom: data.rooms.livingRoom,
          kitchen: data.rooms.kitchen,
          bedroom: data.rooms.bedroom,
          bathroom: data.rooms.bathroom,
          dining: data.rooms.dining,
        });

        const result = await calculateHomeEstimate(data);
        setEstimatedPrice(result.estimatedPrice || 0);
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

  // 🚀 API SUBMISSION
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
      setLoading(true);
      const searchParams = new URLSearchParams(location.search);

      const estimateData = {
        bhk: searchParams.get("bhk"),
        size: searchParams.get("size") || null,
        package: searchParams.get("package"),
        rooms: {
          livingRoom: parseInt(searchParams.get("livingRoom")) || 0,
          kitchen: parseInt(searchParams.get("kitchen")) || 0,
          bedroom: parseInt(searchParams.get("bedroom")) || 0,
          bathroom: parseInt(searchParams.get("bathroom")) || 0,
          dining: parseInt(searchParams.get("dining")) || 0,
        },
        estimatedPrice: estimatedPrice,
      };

      const result = await submitHomeEstimate({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        propertyName: formData.propertyName,
        estimate: estimateData,
      });

      setToast({
        open: true,
        message: result.message || "Your estimate has been submitted successfully.",
        severity: "success",
      });

      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error(err);
      setToast({
        open: true,
        message: err.message || "Something went wrong. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
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

                {calculating ? (
                  <CircularProgress size={24} sx={{ my: 1 }} />
                ) : (
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                    }}
                  >
                    ₹{estimatedPrice.toLocaleString()}
                  </Typography>
                )}

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
          disabled={!isFormValid() || loading || calculating}
          sx={{
            px: 3,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          {loading ? <CircularProgress size={20} /> : "Submit"}
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
