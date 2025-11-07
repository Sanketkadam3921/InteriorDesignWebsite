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

const timelineOptions = [
    {
        id: "6months",
        label: "Within 6 months",
        value: "6months",
        description: "You’re ready to start your project soon — we’ll help you plan efficiently.",
    },
    {
        id: "after6months",
        label: "After 6 months",
        value: "after6months",
        description: "You’re planning ahead — let’s design now and execute when the time’s right.",
    },
    {
        id: "norequirement",
        label: "No requirement",
        value: "norequirement",
        description: "You’re just exploring options for now — we’ll keep it light and informative.",
    },
];

export default function WardrobeTimelineSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedTimeline, setSelectedTimeline] = useState("6months");

    const handleSelect = (value) => {
        setSelectedTimeline(value);
    };

    const handleNext = () => {
        if (selectedTimeline) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                height: searchParams.get("height"),
                type: searchParams.get("type"),
                finish: searchParams.get("finish"),
                material: searchParams.get("material"),
                accessories: searchParams.get("accessories"),
                timeline: selectedTimeline,
            });
            navigate(
                `/price-calculators/wardrobe/calculator/estimate?${queryParams.toString()}`
            );
        }
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            height: searchParams.get("height"),
            type: searchParams.get("type"),
            finish: searchParams.get("finish"),
            material: searchParams.get("material"),
            accessories: searchParams.get("accessories"),
        });
        navigate(
            `/price-calculators/wardrobe/calculator/accessories?${queryParams.toString()}`
        );
    };

    return (
        <Box sx={{ 
            maxWidth: 700, 
            mx: "auto", 
            p: 3,
            display: "flex",
            flexDirection: "column",
            minHeight: "calc(100vh - 200px)",
            pb: 10,
        }}>
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    mb: 1,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                }}
            >
                When will you require our services?
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    textAlign: "center",
                    mb: 4,
                    color: theme.palette.text.secondary,
                }}
            >
                Let us know your timeline to better assist you.
            </Typography>

            <Box
                sx={{
                    backgroundColor: theme.palette.primary.light + '25',
                    borderRadius: 2,
                    p: 3,
                    mb: 2,
                    border: '1px solid',
                    borderColor: theme.palette.primary.light + '40',
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr" },
                        gap: 2,
                    }}
                >
                {timelineOptions.map((option) => {
                    const isSelected = selectedTimeline === option.value;
                    return (
                        <Card
                            key={option.id}
                            onClick={() => handleSelect(option.value)}
                            sx={{
                                border: "2px solid",
                                borderColor: isSelected
                                    ? theme.palette.primary.main
                                    : theme.palette.grey[300],
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 2,
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                                "&:hover": {
                                    borderColor: theme.palette.primary.main,
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                },
                            }}
                        >
                            <CardContent sx={{ p: 3, position: "relative" }}>
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
                                    label={
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 600,
                                                ml: 1,
                                                color: theme.palette.text.primary,
                                            }}
                                        >
                                            {option.label}
                                        </Typography>
                                    }
                                    sx={{
                                        m: 0,
                                        width: "100%",
                                        alignItems: "flex-start",
                                    }}
                                />

                                <Typography
                                    variant="body2"
                                    sx={{
                                        mt: 1,
                                        ml: 4.5,
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {option.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
                </Box>
            </Box>

            <Box sx={{ flex: 1 }} />

            {/* Navigation */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: 2,
                    borderTop: "1px solid",
                    borderColor: "divider",
                    position: "sticky",
                    bottom: 0,
                    backgroundColor: theme.palette.background.default,
                    pb: 2,
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
                    disabled={!selectedTimeline}
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
