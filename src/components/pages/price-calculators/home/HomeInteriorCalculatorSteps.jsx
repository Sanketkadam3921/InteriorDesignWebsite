import React from "react";
import {
  Box,
  Container,
  Typography,
  LinearProgress,
  useTheme,
} from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import BHKSelection from "./BHKSelection";
import RoomSelection from "./RoomSelection";
import PackageSelection from "./PackageSelection";
import EstimateForm from "./EstimateForm";

const steps = [
  {
    id: "bhk",
    label: "BHK TYPE",
    path: "/price-calculators/home/calculator/bhk",
  },
  {
    id: "rooms",
    label: "ROOMS",
    path: "/price-calculators/home/calculator/rooms",
  },
  {
    id: "package",
    label: "PACKAGE",
    path: "/price-calculators/home/calculator/package",
  },
  {
    id: "estimate",
    label: "GET QUOTE",
    path: "/price-calculators/home/calculator/estimate",
  },
];

export default function HomeInteriorCalculatorSteps() {
  const theme = useTheme();
  const location = useLocation();

  const getCurrentStepIndex = () => {
    const currentPath = location.pathname;
    return steps.findIndex((step) => currentPath.includes(step.id));
  };

  const currentStepIndex = getCurrentStepIndex();
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: theme.palette.background.default,
        overflowY: "auto",
      }}
    >
      <Container maxWidth="lg">
        {/* Progress Header */}
        <Box
          sx={{
            pt: 3,
            pb: 0,
            position: "relative",
            width: "100%",
            maxWidth: 600,
            mx: "auto",
            mb: 0,
            px: 0,
          }}
        >
          {/* Heading */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: "center",
              color: theme.palette.text.primary,
            }}
          >
            Home Price Calculator
          </Typography>
          {/* Steps */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
            }}
          >
            {steps.map((step, index) => (
              <Box
                key={step.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  flex: 1,
                }}
              >
                {/* Connector Line (except last step) */}
                {index < steps.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16, // vertical center of circle
                      left: "50%",
                      width: "100%",
                      height: 2,
                      backgroundColor:
                        index < currentStepIndex
                          ? theme.palette.primary.main
                          : theme.palette.neutral.lightGray,
                      zIndex: 0,
                    }}
                  />
                )}

                {/* Step Circle */}
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor:
                      index <= currentStepIndex
                        ? theme.palette.primary.main
                        : theme.palette.neutral.lightGray,
                    color:
                      index <= currentStepIndex
                        ? theme.palette.primary.contrastText
                        : theme.palette.text.secondary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                    zIndex: 1,
                  }}
                >
                  {index < currentStepIndex ? "✓" : index + 1}
                </Box>

                {/* Step Label */}
                <Typography
                  variant="caption"
                  sx={{
                    mt: 1,
                    color:
                      index <= currentStepIndex
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary,
                    fontWeight: index <= currentStepIndex ? "bold" : "normal",
                  }}
                >
                  {step.label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Counter */}
        </Box>

        {/* Step Content */}
        <Box sx={{ py: 4 }}>
          <Routes>
            <Route path="bhk" element={<BHKSelection />} />
            <Route path="rooms" element={<RoomSelection />} />
            <Route path="package" element={<PackageSelection />} />
            <Route path="estimate" element={<EstimateForm />} />
          </Routes>
        </Box>
      </Container>
    </Box>
  );
}
