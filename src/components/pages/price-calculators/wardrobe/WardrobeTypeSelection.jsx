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
                length: searchParams.get("length"),
                height: searchParams.get("height"),
                type: selectedType,
            });
            navigate(
                `/price-calculators/wardrobe/calculator/package?${queryParams.toString()}`
            );
        }
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            length: searchParams.get("length"),
            height: searchParams.get("height"),
        });
        navigate(
            `/price-calculators/wardrobe/calculator/length?${queryParams.toString()}`
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
            mb: 8,
        }}>
            {/* Header */}
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    mb: 1,
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
                }}
            >
                Choose the wardrobe style that suits your room's layout and storage
                needs.
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
                                    backgroundColor: theme.palette.background.paper,
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
                                        <Typography
                                            variant="h6"
                                            sx={{ 
                                                fontWeight: 600, 
                                                color: theme.palette.text.primary,
                                                mb: 1.5,
                                            }}
                                        >
                                            {type.title}
                                        </Typography>

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
                                                height: 140,
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
            </Box>

            <Box sx={{ flex: 1 }} />

            {/* Navigation */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    maxWidth: 700,
                    mx: "auto",
                    pt: 2,
                    pb: 2,
                    px: 3,
                    borderTop: "1px solid",
                    borderColor: "divider",
                    backgroundColor: theme.palette.background.default,
                    zIndex: 1000,
                    boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
                }}
            >
                <Button
                    variant="outlined"
                    onClick={handleBack}
                    sx={{
                        color: theme.palette.primary.main,
                        borderColor: theme.palette.primary.main,
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": {
                            borderColor: theme.palette.primary.dark,
                            backgroundColor: theme.palette.primary.light + "15",
                        },
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
