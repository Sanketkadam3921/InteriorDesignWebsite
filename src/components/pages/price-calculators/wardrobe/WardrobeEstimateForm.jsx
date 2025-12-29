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

// Format number in Indian format
const formatIndianCurrency = (amount) => {
  return amount.toLocaleString("en-IN");
};

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
        if (!value.trim()) {
          error = "Email is required";
        } else {
          const email = value.trim();
          // Basic format check: username@domain.tld
          const basicEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!basicEmailRegex.test(email)) {
            error = "Enter a valid email address";
          } else {
            // Check allowed TLDs
            const allowedTLDs = [".com", ".in", ".org", ".net", ".co.in", ".gov.in"];
            const emailLower = email.toLowerCase();
            const hasAllowedTLD = allowedTLDs.some((tld) =>
              emailLower.endsWith(tld)
            );
            if (!hasAllowedTLD) {
              error =
                "Only .com, .in, .org, .net, .co.in, .gov.in emails are allowed";
            } else {
              // Check characters before @ (only letters, numbers, ., _, %, +, -)
              const localPart = email.split("@")[0];
              const localPartRegex = /^[a-zA-Z0-9._%+-]+$/;
              if (!localPartRegex.test(localPart)) {
                error = "Enter a valid email address";
              }
            }
          }
        }
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
      case "email":
        value = value.replace(/\s/g, ""); // Remove spaces
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
          access_key: "2cc4a7da-4b04-41e6-80d9-a1ae8efb4013",

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
Estimated Price: ₹${formatIndianCurrency(estimatePayload.estimatedPrice)}
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
        message: `Your estimate has been submitted successfully! Estimated Price: ₹${formatIndianCurrency(
          estimatedPrice
        )}`,
        severity: "success",
      });
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
        Your Wardrobe Estimate Is Ready
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mb: 4,
          color: theme.palette.text.secondary,
        }}
      >
        Please fill out the details below.
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
              onBlur={() => validateField("email", formData.email)}
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
