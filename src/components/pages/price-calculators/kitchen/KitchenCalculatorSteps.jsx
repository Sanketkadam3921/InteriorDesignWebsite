import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import KitchenLayoutStep from './KitchenLayoutStep';
import KitchenMeasurementsStep from './KitchenMeasurementsStep';
import KitchenPackageStep from './KitchenPackageStep';
import KitchenEstimateForm from './KitchenEstimateForm';

const steps = [
    { id: 'layout', label: 'LAYOUT', path: '/price-calculators/kitchen/calculator/layout' },
    { id: 'measurements', label: 'MEASUREMENTS', path: '/price-calculators/kitchen/calculator/measurements' },
    { id: 'package', label: 'PACKAGE', path: '/price-calculators/kitchen/calculator/package' },
    { id: 'estimate', label: 'GET QUOTE', path: '/price-calculators/kitchen/calculator/estimate' }
];

export default function KitchenCalculatorSteps() {
    const theme = useTheme();
    const location = useLocation();

    const getCurrentStepIndex = () => {
        const currentPath = location.pathname;
        return steps.findIndex(step => currentPath.includes(step.id));
    };

    const currentStepIndex = getCurrentStepIndex();

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
                        Kitchen Price Calculator
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
                    <Typography
                        variant="body2"
                        sx={{
                            mt: 2,
                            textAlign: "center",
                            fontWeight: "bold",
                            color: theme.palette.text.secondary,
                        }}
                    >
                        {currentStepIndex + 1}/{steps.length}
                    </Typography>
                </Box>

                {/* Step Content */}
                <Box sx={{ py: 4 }}>
                    <Routes>
                        <Route index element={<Navigate to="layout" replace />} />
                        <Route path="layout" element={<KitchenLayoutStep />} />
                        <Route path="measurements" element={<KitchenMeasurementsStep />} />
                        <Route path="package" element={<KitchenPackageStep />} />
                        <Route path="estimate" element={<KitchenEstimateForm />} />
                    </Routes>
                </Box>
            </Container>
        </Box>
    );
}
