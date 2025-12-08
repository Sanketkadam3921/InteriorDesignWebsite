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
import { calculateHomeEstimate } from "../../../../services/api/homeCalculatorApi";

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
  const [priceRange, setPriceRange] = useState(null);
  const [loading, setLoading] = useState(false);
  const [calculating, setCalculating] = useState(true);
  const [submitted, setSubmitted] = useState(false);

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
        const bhk = searchParams.get("bhk");

        // Default room counts based on BHK type
        const defaultRooms = {
          "1bhk": {
            livingRoom: 1,
            kitchen: 1,
            bedroom: 1,
            bathroom: 1,
            dining: 0,
          },
          "2bhk": {
            livingRoom: 1,
            kitchen: 1,
            bedroom: 2,
            bathroom: 2,
            dining: 0,
          },
          "3bhk": {
            livingRoom: 1,
            kitchen: 1,
            bedroom: 3,
            bathroom: 2,
            dining: 1,
          },
          "4bhk": {
            livingRoom: 1,
            kitchen: 1,
            bedroom: 4,
            bathroom: 3,
            dining: 1,
          },
          "5bhk": {
            livingRoom: 1,
            kitchen: 1,
            bedroom: 5,
            bathroom: 4,
            dining: 1,
          },
        };

        const rooms = defaultRooms[bhk] || defaultRooms["2bhk"];

        const data = {
          bhk: bhk,
          size: null, // Size removed for 3BHK and 4BHK
          package: searchParams.get("package"),
          rooms: rooms,
        };

        setCalcDetails({
          bhk: data.bhk,
          size: data.size,
          packageType: data.package,
          livingRoom: rooms.livingRoom,
          kitchen: rooms.kitchen,
          bedroom: rooms.bedroom,
          bathroom: rooms.bathroom,
          dining: rooms.dining,
        });

        const result = await calculateHomeEstimate(data);
        setEstimatedPrice(result.estimatedPrice || 0);
        setPriceRange(result.priceRange || null);
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
      const bhk = searchParams.get("bhk");

      // Default room counts based on BHK type
      const defaultRooms = {
        "1bhk": {
          livingRoom: 1,
          kitchen: 1,
          bedroom: 1,
          bathroom: 1,
          dining: 0,
        },
        "2bhk": {
          livingRoom: 1,
          kitchen: 1,
          bedroom: 2,
          bathroom: 2,
          dining: 0,
        },
        "3bhk": {
          livingRoom: 1,
          kitchen: 1,
          bedroom: 3,
          bathroom: 2,
          dining: 1,
        },
        "4bhk": {
          livingRoom: 1,
          kitchen: 1,
          bedroom: 4,
          bathroom: 3,
          dining: 1,
        },
        "5bhk": {
          livingRoom: 1,
          kitchen: 1,
          bedroom: 5,
          bathroom: 4,
          dining: 1,
        },
      };

      const rooms = defaultRooms[bhk] || defaultRooms["2bhk"];

      const estimateData = {
        bhk: bhk,
        package: searchParams.get("package"),
        livingRoom: rooms.livingRoom,
        kitchen: rooms.kitchen,
        bedroom: rooms.bedroom,
        bathroom: rooms.bathroom,
        dining: rooms.dining,
        estimatedPrice: estimatedPrice,
        priceRange: priceRange,
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
Home Interior Estimate Details:

BHK: ${estimateData.bhk}
Package: ${estimateData.package}

Rooms:
Living Room: ${estimateData.livingRoom}
Kitchen: ${estimateData.kitchen}
Bedroom: ${estimateData.bedroom}
Bathroom: ${estimateData.bathroom}
Dining: ${estimateData.dining}

Estimated Price: ₹${estimatedPrice.toLocaleString()}
Price Range: ${priceRange?.displayRange || "N/A"}
        `,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error("Web3Forms submission failed");
      }

      setSubmitted(true);

      const priceDisplay = priceRange?.displayRange
        ? priceRange.displayRange
        : `₹${estimatedPrice.toLocaleString()}`;

      setToast({
        open: true,
        message: `Your estimate has been submitted successfully! Estimated Price: ${priceDisplay}`,
        severity: "success",
      });

      setTimeout(() => navigate("/"), 10000);
    } catch (err) {
      console.error(err);
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

              {/* Estimated Price Range - Only shown after submission */}
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
                  <Typography
                    variant="subtitle2"
                    sx={{ color: theme.palette.text.secondary, mb: 0.5 }}
                  >
                    Estimated Price Range
                  </Typography>

                  {priceRange && priceRange.displayRange ? (
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                      }}
                    >
                      ₹{priceRange.displayRange}
                    </Typography>
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
              )}
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
