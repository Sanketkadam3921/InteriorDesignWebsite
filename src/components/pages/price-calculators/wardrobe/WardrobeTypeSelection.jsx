import React, { useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const wardrobeTypes = [
    {
        id: "sliding",
        title: "Sliding",
        description:
            "Movable doors that slide horizontally along a metal rail and save floor space. Ideal for compact rooms that still want a sleek, modern look.",
        image:
            "https://images.unsplash.com/photo-1616627562164-e9b1864a6422?w=600",
    },
    {
        id: "swing",
        title: "Swing",
        description:
            "Doors that swing out to open, giving better visibility and storage space. A classic, cost-effective choice that’s easy to maintain.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
    },
];

export default function WardrobeTypeSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedType, setSelectedType] = useState("");

    const handleNext = () => {
        if (selectedType) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                height: searchParams.get("height"),
                type: selectedType,
            });
            navigate(
                `/price-calculators/wardrobe/calculator/finish?${queryParams.toString()}`
            );
        }
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            height: searchParams.get("height"),
        });
        navigate(
            `/price-calculators/wardrobe/calculator/length?${queryParams.toString()}`
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
                Select the Type of Wardrobe
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
                Choose the wardrobe style that suits your room’s layout and storage
                needs.
            </Typography>

            {/* Wardrobe Type Options */}
            <FormControl component="fieldset" sx={{ width: "100%" }}>
                <RadioGroup
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                        gap: 3,
                    }}
                >
                    {wardrobeTypes.map((type) => {
                        const isSelected = selectedType === type.id;
                        return (
                            <Card
                                key={type.id}
                                onClick={() => setSelectedType(type.id)}
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
                                    transition: "none",
                                    cursor: "pointer",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                                }}
                            >
                                <CardContent sx={{ p: 0 }}>
                                    {/* Radio */}
                                    <FormControlLabel
                                        value={type.id}
                                        control={
                                            <Radio
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
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                mb: 1.5,
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: 600, color: theme.palette.text.primary }}
                                            >
                                                {type.title}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ color: theme.palette.primary.main }}
                                            >
                                                {type.price}
                                            </Typography>
                                        </Box>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                mb: 2,
                                                color: theme.palette.text.secondary,
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            {type.description}
                                        </Typography>

                                        <Box
                                            sx={{
                                                height: 180,
                                                backgroundImage: `url(${type.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                borderRadius: 2,
                                            }}
                                        />
                                    </Box>
                                </CardContent>
                            </Card>
                        );
                    })}
                </RadioGroup>
            </FormControl>

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
                    disabled={!selectedType}
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
