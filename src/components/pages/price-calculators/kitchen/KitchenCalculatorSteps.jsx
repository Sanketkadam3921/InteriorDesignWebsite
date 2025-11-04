import React from 'react';
import { Box, Container, Typography, LinearProgress, useTheme } from '@mui/material';
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
    const progress = ((currentStepIndex + 1) / steps.length) * 100;

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
            <Container maxWidth="lg">
                {/* Progress Header */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        py: 3,
                        mb: 2,
                        flexWrap: "wrap", // ✅ Allows stacking on smaller screens
                        gap: { xs: 2, md: 0 }, // ✅ Adds spacing when wrapped
                    }}
                >


                    {/* Steps Section */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            flex: 1,
                            mx: { xs: 0, md: 4 },
                            overflowX: { xs: "auto", md: "visible" }, // ✅ Enables scroll on mobile
                            scrollbarWidth: "none", // ✅ Hide scrollbar (Firefox)
                            "&::-webkit-scrollbar": { display: "none" }, // ✅ Hide scrollbar (Chrome/Safari)
                        }}
                    >
                        {steps.map((step, index) => (
                            <Box
                                key={step.id}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexShrink: 0,
                                    pr: 2, // ✅ Keeps spacing between steps
                                    minWidth: "fit-content",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 28,
                                        height: 28,
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
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                        mr: 1,
                                        flexShrink: 0,
                                    }}
                                >
                                    {index < currentStepIndex ? "✓" : index + 1}
                                </Box>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight:
                                            index <= currentStepIndex ? "bold" : "normal",
                                        color:
                                            index <= currentStepIndex
                                                ? theme.palette.primary.main
                                                : theme.palette.text.secondary,
                                        fontSize: "11px",
                                        whiteSpace: "nowrap",
                                        fontFamily: theme.typography.fontFamily,
                                    }}
                                >
                                    {step.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Right Counter */}
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: "bold",
                            color: theme.palette.text.secondary,
                            fontFamily: theme.typography.fontFamily,
                            flexShrink: 0,
                        }}
                    >
                        {currentStepIndex + 1}/4
                    </Typography>
                </Box>

                {/* Progress Bar */}
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                        height: 4,
                        borderRadius: 2,
                        backgroundColor: theme.palette.neutral.lightGray,
                        "& .MuiLinearProgress-bar": {
                            backgroundColor: theme.palette.primary.main,
                        },
                    }}
                />



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
