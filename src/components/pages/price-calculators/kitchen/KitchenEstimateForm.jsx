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
  CircularProgress,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { calculateKitchenEstimate } from "../../../../services/api/kitchenCalculatorApi";

// Format number in Indian format
const formatIndianCurrency = (amount) => {
  return amount.toLocaleString("en-IN");
};

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
  const [loading, setLoading] = useState(false);
  const [calculating, setCalculating] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // ⭐ Extract query params and calculate estimate from API
  useEffect(() => {
    const calculateEstimateFromAPI = async () => {
      try {
        setCalculating(true);
        const params = new URLSearchParams(location.search);

        const layout = params.get("layout");
        const AStr = params.get("A");
        const BStr = params.get("B");
        const CStr = params.get("C");
        const packageType = params.get("package");

        // Validate required fields before making API call
        if (!layout || !AStr || !packageType) {
          setCalculating(false);
          return;
        }

        const A = parseFloat(AStr);
        const B = BStr ? parseFloat(BStr) : null;
        const C = CStr ? parseFloat(CStr) : null;

        // Validate A is a valid number
        if (isNaN(A) || A <= 0) {
          setCalculating(false);
          return;
        }

        // Build request payload based on layout requirements
        const requestData = {
          layout,
          A,
          package: packageType,
        };

        // Add B and C based on layout requirements
        // For l-shaped and parallel: B is required
        // For u-shaped: B and C are required
        // For straight: only A is needed
        if (layout === "l-shaped" || layout === "parallel") {
          if (B && !isNaN(B) && B > 0) {
            requestData.B = B;
          } else {
            // B is required for these layouts
            setCalculating(false);
            return;
          }
        } else if (layout === "u-shaped") {
          if (B && !isNaN(B) && B > 0 && C && !isNaN(C) && C > 0) {
            requestData.B = B;
            requestData.C = C;
          } else {
            // B and C are required for u-shaped
            setCalculating(false);
            return;
          }
        }
        // For straight layout, we don't need to add B or C

        console.log("Sending kitchen estimate request:", requestData);
        const result = await calculateKitchenEstimate(requestData);

        setEstimateData({
          layout,
          A,
          B,
          C,
          packageType,
          totalPrice: result.estimatedPrice || 0,
        });
      } catch (error) {
        console.error("Error calculating estimate:", error);
        setToast({
          open: true,
          message:
            error.message || "Error calculating estimate. Please try again.",
          severity: "error",
        });
        // Set default estimate data to prevent rendering issues
        setEstimateData({
          layout: params.get("layout") || "",
          A: parseFloat(params.get("A")) || 0,
          B: parseFloat(params.get("B")) || 0,
          C: parseFloat(params.get("C")) || 0,
          packageType: params.get("package") || "",
          totalPrice: 0,
        });
      } finally {
        setCalculating(false);
      }
    };

    calculateEstimateFromAPI();
  }, [location.search]);

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

  // ⭐ API submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // validate all fields again
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
      setLoading(true);

      const params = new URLSearchParams(location.search);

      const estimatePayload = {
        layout: params.get("layout"),
        A: parseFloat(params.get("A")) || 0,
        B: parseFloat(params.get("B")) || 0,
        C: parseFloat(params.get("C")) || 0,
        package: params.get("package"),
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
Kitchen Estimate Details:

Layout: ${estimatePayload.layout}
A: ${estimatePayload.A}
B: ${estimatePayload.B}
C: ${estimatePayload.C}
Package: ${estimatePayload.package}

Estimated Price: ₹${formatIndianCurrency(estimatePayload.estimatedPrice)}
        `,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error("Web3Forms submission failed");
      }

      setSubmitted(true);

      setToast({
        open: true,
        message: `Your kitchen estimate has been submitted successfully! Estimated Price: ₹${formatIndianCurrency(estimateData.totalPrice)}`,
        severity: "success",
      });
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

  // ⭐ Navigate back
  const handleBack = () => {
    const params = new URLSearchParams(location.search);
    navigate(`/price-calculators/kitchen/calculator/package?${params}`);
  };

  const handleBackToHome = () => {
    navigate("/");
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

              {/* Estimated Price Box - Only shown after submission */}
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
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    Estimated Price
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: theme.palette.primary.main }}
                  >
                    {estimateData?.totalPrice?.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }) || "₹0"}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{ color: theme.palette.text.secondary }}
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

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: submitted ? "center" : "space-between",
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
        {!submitted ? (
          <>
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
          </>
        ) : (
          <Button
            variant="contained"
            onClick={handleBackToHome}
            sx={{
              px: 4,
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Back to Home
          </Button>
        )}
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
