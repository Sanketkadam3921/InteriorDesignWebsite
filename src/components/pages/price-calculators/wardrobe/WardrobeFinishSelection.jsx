import React, { useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    FormControlLabel,
    Radio,
    useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const finishOptions = [
    {
        id: "laminate",
        title: "Standard - Laminate",
        description:
            "Looking for a seamless finish that sits well with every interior? This one’s for you.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
        price: "₹₹",
        proTip:
            "An affordable finish that’s durable and works well with most interiors.",
    },
    {
        id: "membrane",
        title: "Premium - Membrane",
        description:
            "Get a magazine-like look that requires low maintenance and offers smooth edges.",
        image: "https://images.unsplash.com/photo-1616627562164-e9b1864a6422?w=600",
        price: "₹₹₹",
        proTip:
            "A perfect balance between elegance and durability with minimal upkeep.",
    },
    {
        id: "acrylic",
        title: "Luxe - Acrylic",
        description:
            "High-end finish with superior durability, mirror-like gloss, and rich color.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
        price: "₹₹₹₹",
        proTip:
            "If you want a modern, glossy, and premium look — acrylic is your best choice.",
    },
];

export default function WardrobeFinishSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedFinish, setSelectedFinish] = useState("laminate");

    const handleSelect = (finishId) => {
        setSelectedFinish(finishId);
    };

    const handleNext = () => {
        if (selectedFinish) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                height: searchParams.get("height"),
                type: searchParams.get("type"),
                finish: selectedFinish,
            });
            navigate(
                `/price-calculators/wardrobe/calculator/material?${queryParams.toString()}`
            );
        }
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            height: searchParams.get("height"),
            type: searchParams.get("type"),
        });
        navigate(
            `/price-calculators/wardrobe/calculator/type?${queryParams.toString()}`
        );
    };

    return (
        <Box sx={{ maxWidth: 900, mx: "auto", p: 3 }}>
            {/* Header */}
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    mb: 1.5,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                }}
            >
                Select Your Preferred Finish
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    textAlign: "center",
                    mb: 4,
                    color: theme.palette.text.secondary,
                    maxWidth: 600,
                    mx: "auto",
                }}
            >
                Choose a wardrobe finish that matches your interior theme and budget.
            </Typography>

            {/* Finish Options */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                    gap: 3,
                }}
            >
                {finishOptions.map((finish) => {
                    const isSelected = selectedFinish === finish.id;
                    return (
                        <Card
                            key={finish.id}
                            onClick={() => handleSelect(finish.id)}
                            sx={{
                                position: "relative",
                                border: "2px solid",
                                borderColor: isSelected
                                    ? theme.palette.primary.main
                                    : theme.palette.grey[300],
                                backgroundColor: isSelected
                                    ? theme.palette.primary.light + "10"
                                    : theme.palette.background.paper,
                                borderRadius: 2,
                                cursor: "pointer",
                                transition: "none",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                            }}
                        >
                            <CardContent sx={{ p: 0, position: "relative" }}>
                                {/* ✅ Manual Radio (No flicker) */}
                                <FormControlLabel
                                    control={
                                        <Radio
                                            checked={isSelected}
                                            onClick={(e) => e.stopPropagation()}
                                            sx={{
                                                color: theme.palette.primary.main,
                                                "&.Mui-checked": {
                                                    color: theme.palette.primary.main,
                                                },
                                            }}
                                        />
                                    }
                                    label=""
                                    sx={{
                                        position: "absolute",
                                        top: 12,
                                        right: 12,
                                        m: 0,
                                        zIndex: 1,
                                    }}
                                />

                                <Box sx={{ p: 2.5 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 1,
                                            color: theme.palette.text.primary,
                                        }}
                                    >
                                        {finish.title}
                                    </Typography>

                                    <Box
                                        sx={{
                                            height: 160,
                                            backgroundImage: `url(${finish.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            borderRadius: 2,
                                            mb: 2,
                                        }}
                                    />

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mb: 1,
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {finish.description}
                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: "block",
                                            color: theme.palette.text.secondary,
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {finish.proTip}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    );
                })}
            </Box>

            {/* Navigation */}
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
                    }}
                >
                    Back
                </Button>

                <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={!selectedFinish}
                    sx={{
                        px: 4,
                        textTransform: "none",
                        fontWeight: 600,
                    }}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
}
