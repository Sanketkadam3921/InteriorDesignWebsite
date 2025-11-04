import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Card,
    useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function KitchenMeasurementsStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const layout = searchParams.get("layout"); // straight, parallel, l-shaped, u-shaped

    const [measurements, setMeasurements] = useState({});
    const [errors, setErrors] = useState({});

    // Define which dimensions to show based on layout
    const getDimensions = () => {
        switch (layout) {
            case "straight":
                return ["A"];
            case "parallel":
                return ["A", "B"];
            case "l-shaped":
                return ["A", "B"];
            case "u-shaped":
                return ["A", "B", "C"];
            default:
                return [];
        }
    };

    const dimensionLabels = {
        A: "Dimension A (ft)",
        B: "Dimension B (ft)",
        C: "Dimension C (ft)",
    };

    const handleInputChange = (field) => (event) => {
        const value = event.target.value;
        setMeasurements((prev) => ({
            ...prev,
            [field]: value,
        }));

        // Clear error as user types
        if (errors[field]) {
            setErrors((prev) => ({
                ...prev,
                [field]: "",
            }));
        }
    };

    const validateMeasurements = () => {
        const newErrors = {};
        getDimensions().forEach((dim) => {
            const value = parseFloat(measurements[dim]);
            if (!measurements[dim] || isNaN(value) || value <= 0) {
                newErrors[dim] = `${dim} is required and must be greater than 0`;
            } else if (value < 3) {
                newErrors[dim] = `Minimum 3 feet required`;
            } else if (value > 20) {
                newErrors[dim] = `Maximum 20 feet allowed`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateMeasurements()) {
            const queryParams = new URLSearchParams({ layout });
            getDimensions().forEach((dim) => {
                queryParams.set(dim, measurements[dim]);
            });
            navigate(`/price-calculators/kitchen/calculator/package?${queryParams.toString()}`);
        }
    };

    const handleBack = () => {
        navigate(`/price-calculators/kitchen/calculator/layout`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Get layout diagram based on selected layout
    const getLayoutDiagram = () => {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 4,
                p: 4,
                backgroundColor: theme.palette.background.default,
                borderRadius: 2,
                minHeight: 280
            }}>
                {layout === 'l-shaped' && (
                    <Box sx={{ position: 'relative', width: 320, height: 240 }}>
                        {/* L-shaped counter */}
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: 200,
                            height: 80,
                            backgroundColor: theme.palette.primary.light,
                            border: `3px solid ${theme.palette.primary.main}`,
                            borderRadius: 1
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            top: 80,
                            left: 0,
                            width: 80,
                            height: 120,
                            backgroundColor: theme.palette.primary.light,
                            border: `3px solid ${theme.palette.primary.main}`,
                            borderTop: 'none',
                            borderRadius: 1
                        }} />

                        {/* Dimension A (horizontal) */}
                        <Box sx={{
                            position: 'absolute',
                            top: -35,
                            left: 0,
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box sx={{
                                width: '100%',
                                height: 2,
                                backgroundColor: theme.palette.text.secondary,
                                position: 'relative',
                                '&::before, &::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: 2,
                                    height: 12,
                                    backgroundColor: theme.palette.text.secondary,
                                    top: -5
                                },
                                '&::before': { left: 0 },
                                '&::after': { right: 0 }
                            }} />
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    position: 'absolute',
                                    top: -20,
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    backgroundColor: theme.palette.background.default,
                                    px: 1,
                                    fontSize: '1rem'
                                }}
                            >
                                A
                            </Typography>
                        </Box>

                        {/* Dimension B (vertical) */}
                        <Box sx={{
                            position: 'absolute',
                            left: -45,
                            top: 80,
                            height: 120,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box sx={{
                                height: '100%',
                                width: 2,
                                backgroundColor: theme.palette.text.secondary,
                                position: 'relative',
                                '&::before, &::after': {
                                    content: '""',
                                    position: 'absolute',
                                    height: 2,
                                    width: 12,
                                    backgroundColor: theme.palette.text.secondary,
                                    left: -5
                                },
                                '&::before': { top: 0 },
                                '&::after': { bottom: 0 }
                            }} />
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    position: 'absolute',
                                    left: -20,
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    backgroundColor: theme.palette.background.default,
                                    px: 1,
                                    fontSize: '1rem'
                                }}
                            >
                                B
                            </Typography>
                        </Box>
                    </Box>
                )}

                {layout === 'straight' && (
                    <Box sx={{ position: 'relative', width: 320, height: 140 }}>
                        {/* Straight counter */}
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            transform: 'translateY(-50%)',
                            width: '100%',
                            height: 80,
                            backgroundColor: theme.palette.primary.light,
                            border: `3px solid ${theme.palette.primary.main}`,
                            borderRadius: 1
                        }} />

                        {/* Dimension A */}
                        <Box sx={{
                            position: 'absolute',
                            top: 10,
                            left: 0,
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box sx={{
                                width: '100%',
                                height: 2,
                                backgroundColor: theme.palette.text.secondary,
                                position: 'relative',
                                '&::before, &::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: 2,
                                    height: 12,
                                    backgroundColor: theme.palette.text.secondary,
                                    top: -5
                                },
                                '&::before': { left: 0 },
                                '&::after': { right: 0 }
                            }} />
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    position: 'absolute',
                                    top: -20,
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    backgroundColor: theme.palette.background.default,
                                    px: 1,
                                    fontSize: '1rem'
                                }}
                            >
                                A
                            </Typography>
                        </Box>
                    </Box>
                )}

                {layout === 'u-shaped' && (
                    <Box sx={{ position: 'relative', width: 320, height: 240 }}>
                        {/* U-shaped counter - three sections */}
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: 80,
                            height: 200,
                            backgroundColor: theme.palette.primary.light,
                            border: `3px solid ${theme.palette.primary.main}`,
                            borderRadius: 1
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 80,
                            width: 160,
                            height: 80,
                            backgroundColor: theme.palette.primary.light,
                            border: `3px solid ${theme.palette.primary.main}`,
                            borderLeft: 'none',
                            borderRadius: 1
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: 80,
                            height: 200,
                            backgroundColor: theme.palette.primary.light,
                            border: `3px solid ${theme.palette.primary.main}`,
                            borderLeft: 'none',
                            borderRadius: 1
                        }} />

                        {/* Dimension A (left) */}
                        <Box sx={{
                            position: 'absolute',
                            left: -45,
                            top: 0,
                            height: 200,
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Box sx={{
                                height: '100%',
                                width: 2,
                                backgroundColor: theme.palette.text.secondary,
                                position: 'relative',
                                '&::before, &::after': {
                                    content: '""',
                                    position: 'absolute',
                                    height: 2,
                                    width: 12,
                                    backgroundColor: theme.palette.text.secondary,
                                    left: -5
                                },
                                '&::before': { top: 0 },
                                '&::after': { bottom: 0 }
                            }} />
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    position: 'absolute',
                                    left: -20,
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    backgroundColor: theme.palette.background.default,
                                    px: 1,
                                    fontSize: '1rem'
                                }}
                            >
                                A
                            </Typography>
                        </Box>

                        {/* Dimension B (top) */}
                        <Box sx={{
                            position: 'absolute',
                            top: -35,
                            left: 80,
                            width: 160,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box sx={{
                                width: '100%',
                                height: 2,
                                backgroundColor: theme.palette.text.secondary,
                                position: 'relative',
                                '&::before, &::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: 2,
                                    height: 12,
                                    backgroundColor: theme.palette.text.secondary,
                                    top: -5
                                },
                                '&::before': { left: 0 },
                                '&::after': { right: 0 }
                            }} />
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    position: 'absolute',
                                    top: -20,
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    backgroundColor: theme.palette.background.default,
                                    px: 1,
                                    fontSize: '1rem'
                                }}
                            >
                                B
                            </Typography>
                        </Box>

                        {/* Dimension C (right) */}
                        <Box sx={{
                            position: 'absolute',
                            right: -45,
                            top: 0,
                            height: 200,
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Box sx={{
                                height: '100%',
                                width: 2,
                                backgroundColor: theme.palette.text.secondary,
                                position: 'relative',
                                '&::before, &::after': {
                                    content: '""',
                                    position: 'absolute',
                                    height: 2,
                                    width: 12,
                                    backgroundColor: theme.palette.text.secondary,
                                    left: -5
                                },
                                '&::before': { top: 0 },
                                '&::after': { bottom: 0 }
                            }} />
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    position: 'absolute',
                                    left: -20,
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    backgroundColor: theme.palette.background.default,
                                    px: 1,
                                    fontSize: '1rem'
                                }}
                            >
                                C
                            </Typography>
                        </Box>
                    </Box>
                )}

                {layout === 'parallel' && (
                    <Box sx={{ position: 'relative', width: 320, height: 220 }}>
                        {/* Two parallel counters */}
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: 80,
                            backgroundColor: theme.palette.primary.light,
                            border: `3px solid ${theme.palette.primary.main}`,
                            borderRadius: 1
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: 80,
                            backgroundColor: theme.palette.primary.light,
                            border: `3px solid ${theme.palette.primary.main}`,
                            borderRadius: 1
                        }} />

                        {/* Dimension A (top) */}
                        <Box sx={{
                            position: 'absolute',
                            top: -35,
                            left: 0,
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box sx={{
                                width: '100%',
                                height: 2,
                                backgroundColor: theme.palette.text.secondary,
                                position: 'relative',
                                '&::before, &::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: 2,
                                    height: 12,
                                    backgroundColor: theme.palette.text.secondary,
                                    top: -5
                                },
                                '&::before': { left: 0 },
                                '&::after': { right: 0 }
                            }} />
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    position: 'absolute',
                                    top: -20,
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    backgroundColor: theme.palette.background.default,
                                    px: 1,
                                    fontSize: '1rem'
                                }}
                            >
                                A
                            </Typography>
                        </Box>

                        {/* Dimension B (bottom) */}
                        <Box sx={{
                            position: 'absolute',
                            bottom: -35,
                            left: 0,
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box sx={{
                                width: '100%',
                                height: 2,
                                backgroundColor: theme.palette.text.secondary,
                                position: 'relative',
                                '&::before, &::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: 2,
                                    height: 12,
                                    backgroundColor: theme.palette.text.secondary,
                                    top: -5
                                },
                                '&::before': { left: 0 },
                                '&::after': { right: 0 }
                            }} />
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    position: 'absolute',
                                    top: -20,
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    backgroundColor: theme.palette.background.default,
                                    px: 1,
                                    fontSize: '1rem'
                                }}
                            >
                                B
                            </Typography>
                        </Box>
                    </Box>
                )}
            </Box>
        );
    };

    return (
        <Box sx={{ maxWidth: 900, mx: "auto", p: 3 }}>
            {/* Title */}
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    mb: 2,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                }}
            >
                Now review the measurements for accuracy
            </Typography>

            {/* Subtitle */}
            <Typography
                variant="body1"
                sx={{
                    textAlign: "center",
                    mb: 4,
                    color: theme.palette.text.secondary,
                    maxWidth: 600,
                    mx: "auto",
                }}
            >
                Based on your selected layout (
                <strong style={{ textTransform: "capitalize" }}>{layout?.replace('-', ' ')}</strong>
                ), please provide the following dimensions in feet.
            </Typography>

            {/* Layout Diagram */}
            {layout && getLayoutDiagram()}

            {/* Dimension Inputs */}
            <Card sx={{ mb: 4, p: 3, boxShadow: 2 }}>
                <Grid container spacing={3} justifyContent="center">
                    {getDimensions().map((dim) => (
                        <Grid item xs={12} sm={6} md={4} key={dim}>
                            <TextField
                                fullWidth
                                label={dimensionLabels[dim]}
                                type="number"
                                value={measurements[dim] || ""}
                                onChange={handleInputChange(dim)}
                                error={!!errors[dim]}
                                helperText={errors[dim]}
                                inputProps={{ min: 0, step: 0.1 }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                    }
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Card>

            {/* Info Tip 
            <Box
                sx={{
                    backgroundColor: theme.palette.info.light || "#e3f2fd",
                    p: 3,
                    borderRadius: 2,
                    mb: 4,
                    border: `1px solid ${theme.palette.info.main || "#2196f3"}`,
                }}
            >
                <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                    <strong>💡 Tip:</strong> Measure from wall to wall for each section of your
                    kitchen layout. Standard sizes have been set for convenience, but you can adjust as needed.
                    {layout === 'l-shaped' && ' For L-shaped layouts, A and B represent the two connected walls.'}
                    {layout === 'u-shaped' && ' For U-shaped layouts, A, B, and C represent the three walls.'}
                    {layout === 'parallel' && ' For parallel layouts, A and B represent the two opposite walls.'}
                </Typography>
            </Box>*/}

            {/* Navigation Buttons */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
                    pt: 3,
                    borderTop: "1px solid",
                    borderColor: "divider",
                }}
            >
                <Button
                    variant="text"
                    onClick={handleBack}
                    sx={{
                        color: theme.palette.primary.main,
                        textTransform: "uppercase",
                        fontWeight: 600,
                    }}
                >
                    BACK
                </Button>

                <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                        px: 5,
                        py: 1.5,
                        textTransform: "uppercase",
                        fontWeight: 600,

                    }}
                >
                    NEXT
                </Button>
            </Box>
        </Box>
    );
}