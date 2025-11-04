import React from 'react';
import { Box, Container, Typography, LinearProgress, useTheme } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import BHKSelection from './BHKSelection';
import RoomSelection from './RoomSelection';
import PackageSelection from './PackageSelection';
import EstimateForm from './EstimateForm';

const steps = [
    { id: 'bhk', label: 'BHK TYPE', path: '/price-calculators/home/calculator/bhk' },
    { id: 'rooms', label: 'ROOMS TO DESIGN', path: '/price-calculators/home/calculator/rooms' },
    { id: 'package', label: 'PACKAGE', path: '/price-calculators/home/calculator/package' },
    { id: 'estimate', label: 'GET QUOTE', path: '/price-calculators/home/calculator/estimate' }
];

export default function HomeInteriorCalculatorSteps() {
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
                        flexWrap: "wrap", // ✅ allows wrapping on small screens
                        gap: { xs: 2, md: 0 }, // ✅ add spacing when wrapped
                    }}
                >
                    {/* Left Title */}


                    {/* Steps */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            flex: 1,
                            mx: { xs: 0, md: 4 },
                            overflowX: { xs: "auto", md: "visible" }, // ✅ scrolls horizontally on mobile
                            scrollbarWidth: "none", // ✅ hides scrollbar (Firefox)
                            "&::-webkit-scrollbar": { display: "none" }, // ✅ hides scrollbar (Chrome/Safari)
                        }}
                    >
                        {steps.map((step, index) => (
                            <Box
                                key={step.id}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexShrink: 0, // ✅ prevents shrinking on scroll
                                    pr: 2,
                                }}
                            >
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
                                        mr: 1,
                                    }}
                                >
                                    {index < currentStepIndex ? "✓" : index + 1}
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: index <= currentStepIndex ? "bold" : "normal",
                                        color:
                                            index <= currentStepIndex
                                                ? theme.palette.primary.main
                                                : theme.palette.text.secondary,
                                        fontSize: "12px",
                                        whiteSpace: "nowrap", // ✅ prevents text wrapping
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
