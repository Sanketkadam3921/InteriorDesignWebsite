import React, { useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Radio,
    useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const kitchenLayouts = [
    {
        id: "l-shaped",
        title: "L-shaped",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
    },
    {
        id: "u-shaped",
        title: "U-shaped",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
    },
    {
        id: "straight",
        title: "Straight",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
    },
    {
        id: "parallel",
        title: "Parallel",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
    },
];

export default function KitchenLayoutStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedLayout, setSelectedLayout] = useState("");

    const handleNext = () => {
        if (selectedLayout) {
            const queryParams = new URLSearchParams({ layout: selectedLayout });
            navigate(`/price-calculators/kitchen/calculator/measurements?${queryParams.toString()}`);
        }
    };

    const handleBack = () => {
        navigate("/price-calculators/kitchen");
    };

    return (
        <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
            {/* Title */}
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    mb: 1.5,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                }}
            >
                Select Your Kitchen Layout
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    textAlign: "center",
                    mb: 3,
                    color: theme.palette.text.secondary,
                }}
            >
                Choose your kitchen layout to proceed with your estimate.
            </Typography>

            {/* Layout Grid */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                    gap: 2.5,
                }}
            >
                {kitchenLayouts.map((layout) => {
                    const isSelected = selectedLayout === layout.id;
                    return (
                        <Card
                            key={layout.id}
                            onClick={() => setSelectedLayout(layout.id)}
                            sx={{
                                position: "relative",
                                borderRadius: 2,
                                border: "2px solid",
                                borderColor: isSelected
                                    ? theme.palette.primary.main
                                    : theme.palette.grey[300],
                                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                                backgroundColor: isSelected
                                    ? theme.palette.primary.light + "10"
                                    : theme.palette.background.paper,
                                cursor: "pointer",
                                transition: "none",
                            }}
                        >
                            <CardContent sx={{ p: 2 }}>
                                <Box
                                    sx={{
                                        height: 150,
                                        backgroundImage: `url(${layout.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        borderRadius: 1,
                                        border: "1px solid",
                                        borderColor: theme.palette.divider,
                                        mb: 1.5,
                                    }}
                                />

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        px: 1,
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                        }}
                                    >
                                        {layout.title}
                                    </Typography>

                                    {/* Fixed-position radio (no jump issue) */}
                                    <Box sx={{ minWidth: 36, display: "flex", justifyContent: "center" }}>
                                        <Radio
                                            checked={isSelected}
                                            onChange={() => setSelectedLayout(layout.id)}
                                            value={layout.id}
                                            sx={{
                                                color: theme.palette.primary.main,
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    );
                })}
            </Box>

            {/* Navigation Buttons */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
                    pt: 2,
                    borderTop: "1px solid",
                    borderColor: "divider",
                }}
            >
                <Button
                    variant="text"
                    onClick={handleBack}
                    sx={{
                        color: theme.palette.primary.main,
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                    }}
                >
                    Back
                </Button>

                <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={!selectedLayout}
                    sx={{
                        px: 3,
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                    }}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
}
