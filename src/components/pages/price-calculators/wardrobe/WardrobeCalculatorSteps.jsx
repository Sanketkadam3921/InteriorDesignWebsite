import React from 'react';
import { Box, Container, Typography, LinearProgress, useTheme } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import WardrobeLengthSelection from './WardrobeLengthSelection';
import WardrobeTypeSelection from './WardrobeTypeSelection';
import WardrobeFinishSelection from './WardrobeFinishSelection';
import WardrobeMaterialSelection from './WardrobeMaterialSelection';
import WardrobeAccessoriesSelection from './WardrobeAccessoriesSelection';
import WardrobeTimelineSelection from './WardrobeTimelineSelection';
import WardrobeEstimateForm from './WardrobeEstimateForm';

const steps = [
    { id: 'length', label: 'LENGTH', path: '/price-calculators/wardrobe/calculator/length' },
    { id: 'type', label: 'TYPE', path: '/price-calculators/wardrobe/calculator/type' },
    { id: 'finish', label: 'FINISH', path: '/price-calculators/wardrobe/calculator/finish' },
    { id: 'material', label: 'MATERIAL', path: '/price-calculators/wardrobe/calculator/material' },
    { id: 'accessories', label: 'ACCESSORIES', path: '/price-calculators/wardrobe/calculator/accessories' },
    { id: 'timeline', label: 'TIMELINE', path: '/price-calculators/wardrobe/calculator/timeline' },
    { id: 'estimate', label: 'GET QUOTE', path: '/price-calculators/wardrobe/calculator/estimate' }
];

export default function WardrobeCalculatorSteps() {
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
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: 3,
                    mb: 2
                }}>


                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        flex: 1,
                        mx: 4,
                        overflowX: 'auto'
                    }}>
                        {steps.map((step, index) => (
                            <Box
                                key={step.id}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flex: '0 0 auto',
                                    minWidth: 'fit-content'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 28,
                                        height: 28,
                                        borderRadius: '50%',
                                        backgroundColor: index <= currentStepIndex
                                            ? theme.palette.primary.main
                                            : theme.palette.neutral.lightGray,
                                        color: index <= currentStepIndex ? theme.palette.primary.contrastText : theme.palette.text.secondary,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        mr: 1
                                    }}
                                >
                                    {index < currentStepIndex ? '✓' : index + 1}
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: index <= currentStepIndex ? 'bold' : 'normal',
                                        color: index <= currentStepIndex
                                            ? theme.palette.primary.main
                                            : theme.palette.text.secondary,
                                        fontSize: '11px',
                                        whiteSpace: 'nowrap',
                                        fontFamily: theme.typography.fontFamily
                                    }}
                                >
                                    {step.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 'bold',
                            color: theme.palette.text.secondary,
                            fontFamily: theme.typography.fontFamily
                        }}
                    >
                        {currentStepIndex + 1}/7
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
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: theme.palette.primary.main
                        }
                    }}
                />

                {/* Step Content */}
                <Box sx={{ py: 4 }}>
                    <Routes>
                        <Route path="length" element={<WardrobeLengthSelection />} />
                        <Route path="type" element={<WardrobeTypeSelection />} />
                        <Route path="finish" element={<WardrobeFinishSelection />} />
                        <Route path="material" element={<WardrobeMaterialSelection />} />
                        <Route path="accessories" element={<WardrobeAccessoriesSelection />} />
                        <Route path="timeline" element={<WardrobeTimelineSelection />} />
                        <Route path="estimate" element={<WardrobeEstimateForm />} />
                    </Routes>
                </Box>
            </Container>
        </Box>
    );
}
