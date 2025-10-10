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
import { useNavigate } from "react-router-dom";

const heightOptions = [
    { id: "4ft", label: "4 ft", value: "4ft" },
    { id: "6ft", label: "6 ft", value: "6ft" },
    { id: "7ft", label: "7 ft", value: "7ft" },
    { id: "9ft", label: "9 ft", value: "9ft" },
];

export default function WardrobeLengthSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [selectedHeight, setSelectedHeight] = useState("7ft");

    const handleHeightChange = (event) => {
        setSelectedHeight(event.target.value);
    };

    const handleNext = () => {
        if (selectedHeight) {
            const queryParams = new URLSearchParams({
                height: selectedHeight,
            });
            navigate(
                `/price-calculators/wardrobe/calculator/type?${queryParams.toString()}`
            );
        }
    };

    return (
        <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
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
                What is the height of your wardrobe?
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    textAlign: "center",
                    mb: 4,
                    color: theme.palette.text.secondary,
                }}
            >
                Want to know more?{" "}
                <Typography
                    component="span"
                    sx={{
                        color: theme.palette.primary.main,
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: 500,
                    }}
                >
                    Check here
                </Typography>
            </Typography>

            {/* Info Banner */}
            <Box
                sx={{
                    backgroundColor: theme.palette.warning.light + "40",
                    border: `1px solid ${theme.palette.warning.main}40`,
                    borderRadius: 2,
                    p: 2,
                    mb: 4,
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        color: theme.palette.warning.dark,
                        fontWeight: 500,
                    }}
                >
                    Standard height has been set for your convenience
                </Typography>
            </Box>

            {/* Height Options */}
            <FormControl component="fieldset" sx={{ width: "100%" }}>
                <RadioGroup
                    value={selectedHeight}
                    onChange={handleHeightChange}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        flexWrap: "wrap",
                    }}
                >
                    {heightOptions.map((option) => {
                        const isSelected = selectedHeight === option.value;
                        return (
                            <Card
                                key={option.id}
                                onClick={() => setSelectedHeight(option.value)}
                                sx={{
                                    flex: "0 0 calc(25% - 12px)",
                                    minWidth: 130,
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
                                <CardContent sx={{ p: 2, textAlign: "center" }}>
                                    <FormControlLabel
                                        value={option.value}
                                        control={
                                            <Radio
                                                checked={isSelected}
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
                                                variant="subtitle1"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: theme.palette.text.primary,
                                                }}
                                            >
                                                {option.label}
                                            </Typography>
                                        }
                                        sx={{
                                            justifyContent: "center",
                                            m: 0,
                                            width: "100%",
                                        }}
                                    />
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
                    onClick={() => navigate("/price-calculators/wardrobe")}
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
                    disabled={!selectedHeight}
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
