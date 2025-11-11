import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Chip,
    useTheme,
    Stack,
    ImageList,
    ImageListItem,
} from "@mui/material";
import {
    ArrowBack,
    CheckCircle,
    LocalShipping,
    Security,
    ArrowForward,
} from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";

import { masterBedroomDesignDetails } from "./master-bedroom";
import { kitchenDesignDetails } from "./kitchen/kitchenData";
import { bathroomDesignDetails } from "./bathroom";
import { livingroomDesignDetails } from "./living-room/living-roomData";
import { wardrobeDesignDetails } from "./wardrobe";
import { poojaroomDesignDetails } from "./pooja-room";
import { tvunitDesignDetails } from "./tv-unit";
import { falseceilingDesignDetails } from "./false-ceiling";
import { kidsbedroomDesignDetails } from "./kids-bedroom";
import { balconyDesignDetails } from "./balcony";
import { diningroomDesignDetails } from "./dining-room";
import { foyerDesignDetails } from "./foyer";
import { homeslivspaceDesignDetails } from "./homes-livspace";
import { homeofficeDesignDetails } from "./home-office";
import { guestbedroomDesignDetails } from "./guest-bedroom";
import { windowDesignDetails } from "./window";
import { flooringDesignDetails } from "./flooring";
import { walldecorDesignDetails } from "./wall-decor";
import { wallpaintDesignDetails } from "./wall-paint";
import { wallpaperDesignDetails } from "./wallpaper";
import { tileDesignDetails } from "./tile";
import { studyroomDesignDetails } from "./study-room";
import { kitchensinksDesignDetails } from "./kitchen-sinks";
import { spacesavingDesignDetails } from "./space-saving";
import { doorDesignDetails } from "./door";
import { staircaseDesignDetails } from "./staircase";
import { crockeryunitDesignDetails } from "./crockery-unit";
import { homebarDesignDetails } from "./home-bar";

export default function DesignDetail() {
    const { category, id } = useParams();
    const navigate = useNavigate();
    const theme = useTheme();

    // Data source
    const designsData = {
        "master-bedroom": masterBedroomDesignDetails,
        kitchen: kitchenDesignDetails,
        bathroom: bathroomDesignDetails,
        "living-room": livingroomDesignDetails,
        wardrobe: wardrobeDesignDetails,
        "pooja-room": poojaroomDesignDetails,
        "tv-unit": tvunitDesignDetails,
        "false-ceiling": falseceilingDesignDetails,
        "kids-bedroom": kidsbedroomDesignDetails,
        balcony: balconyDesignDetails,
        "dining-room": diningroomDesignDetails,
        foyer: foyerDesignDetails,
        "homes-livspace": homeslivspaceDesignDetails,
        "home-office": homeofficeDesignDetails,
        "guest-bedroom": guestbedroomDesignDetails,
        window: windowDesignDetails,
        flooring: flooringDesignDetails,
        "wall-decor": walldecorDesignDetails,
        "wall-paint": wallpaintDesignDetails,
        wallpaper: wallpaperDesignDetails,
        tile: tileDesignDetails,
        "study-room": studyroomDesignDetails,
        "kitchen-sinks": kitchensinksDesignDetails,
        "space-saving": spacesavingDesignDetails,
        door: doorDesignDetails,
        staircase: staircaseDesignDetails,
        "crockery-unit": crockeryunitDesignDetails,
        "home-bar": homebarDesignDetails,
    };

    const design = designsData[category]?.[id] || {
        id,
        title: "Design Not Found",
        description: "This design could not be found.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
        ],
        specifications: {},
        sections: [],
    };

    const consistentContainer = {
        maxWidth: "xl",
        sx: {
            px: { xs: 2, sm: 3, md: 4 },
        },
    };

    if (design.title === "Design Not Found") {
        return (
            <Box sx={{
                minHeight: '100vh',
                backgroundColor: theme.palette.background.default,
                pt: { xs: 2, sm: 3, md: 4 },
                pb: { xs: 4, sm: 6, md: 8 }
            }}>
                <Container {...consistentContainer} sx={{ textAlign: "center" }}>
                    <Typography variant="h4" color="error" gutterBottom>
                        Design not found
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate(`/designs/${category}`)}
                        startIcon={<ArrowBack />}
                    >
                        Back to Design Category
                    </Button>
                </Container>
            </Box>
        );
    }

    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default,
            pt: { xs: 2, sm: 3, md: 4 },
            pb: { xs: 4, sm: 6, md: 8 }
        }}>
            {/* 🧭 Back Button + Title */}
            <Container {...consistentContainer}>
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => navigate(`/designs/${category}`)}
                    sx={{
                        mb: 4,
                        px: 0,
                        color: theme.palette.text.secondary,
                        '&:hover': {
                            backgroundColor: theme.palette.action.hover,
                            color: theme.palette.text.primary,
                        },
                        fontWeight: 500,
                        textTransform: 'none',
                        fontSize: '1rem'
                    }}
                >
                    Back to Design Category
                </Button>

                <Typography variant="h3" fontWeight={700} gutterBottom>
                    {design.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {design.description}
                </Typography>
            </Container>

            {/* 🖼️ Image Gallery */}
            <Container {...consistentContainer}>
                <Box sx={{ position: "relative" }}>
                    <ImageList
                        variant="masonry"
                        cols={3}
                        gap={8}
                        sx={{
                            borderRadius: 2,
                            overflow: "hidden",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                        }}
                    >
                        {(design.images || [design.image]).slice(0, 6).map((img, idx) => (
                            <ImageListItem key={idx}>
                                <img
                                    src={`${img}?w=600&fit=crop&auto=format`}
                                    alt={`${design.title}-${idx}`}
                                    loading="lazy"
                                    style={{
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        transition: "transform 0.3s ease-in-out",
                                    }}
                                    onClick={() =>
                                        navigate(`/designs/${category}/${id}/gallery`)
                                    }
                                    onMouseOver={(e) =>
                                        (e.currentTarget.style.transform = "scale(1.02)")
                                    }
                                    onMouseOut={(e) =>
                                        (e.currentTarget.style.transform = "scale(1)")
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>

                    <Button
                        variant="contained"
                        endIcon={<ArrowForward />}
                        onClick={() =>
                            navigate(`/designs/${category}/${id}/gallery`)
                        }
                        sx={{
                            position: "absolute",
                            bottom: 20,
                            right: 30,
                            backgroundColor: "rgba(0,0,0,0.7)",
                            color: "#fff",
                            borderRadius: "25px",
                            px: 3,
                            py: 1,
                            fontWeight: 600,
                            textTransform: "uppercase",
                            fontSize: "0.85rem",
                            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
                        }}
                    >
                        See All
                    </Button>
                </Box>
            </Container>

            {/* 📋 Specifications */}
            {Object.keys(design.specifications || {}).length > 0 && (
                <Container {...consistentContainer}>
                    <Card
                        sx={{
                            p: { xs: 3, md: 4 },
                            borderRadius: 3,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight={700}
                            sx={{ mb: 3, color: theme.palette.text.primary }}
                        >
                            Specifications
                        </Typography>
                        {Object.entries(design.specifications).map(([key, value]) => (
                            <Box key={key} sx={{ mb: 2 }}>
                                <Typography variant="body2" color="text.secondary">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                                </Typography>
                                <Typography variant="body1" fontWeight={500}>
                                    {value}
                                </Typography>
                            </Box>
                        ))}
                    </Card>
                </Container>
            )}

            {/* 🧱 Design Details 
            
            {design.sections && design.sections.length > 0 && (
                <Container {...consistentContainer}>
                    <Card
                        sx={{
                            p: { xs: 3, md: 4 },
                            borderRadius: 3,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight={700}
                            sx={{ mb: 3, color: theme.palette.text.primary }}
                        >
                            Design Details
                        </Typography>

                        {design.sections.map((section, index) => (
                            <Box key={index} sx={{ mb: 4 }}>
                                <Typography
                                    variant="h6"
                                    fontWeight={600}
                                    sx={{ mb: 2, color: theme.palette.text.primary }}
                                >
                                    {section.title}
                                </Typography>
                                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                    {section.items.map((item, itemIndex) => (
                                        <Box component="li" key={itemIndex} sx={{ mb: 1 }}>
                                            <Typography
                                                variant="body1"
                                                sx={{ lineHeight: 1.6, color: "text.secondary" }}
                                            >
                                                {item}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Card>
                </Container>
            )}
            */}
            

            {/* 💎 Trust Indicators */}
            

            {/* 🧭 CTA Section */}
            <Container {...consistentContainer}>
                <Card
                    sx={{
                        p: 4,
                        borderRadius: 3,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h6" gutterBottom fontWeight={700}>
                        Want to customize this design?
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                    >
                        We can adapt this design to fit your space, preferences, and budget.
                        Talk to our experts today.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: "30px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                        }}
                        onClick={() => navigate("/contact")}
                    >
                        Request Customization
                    </Button>
                </Card>
            </Container>
        </Box>
    );
}
