import React from 'react';
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
    Divider,
    IconButton,
    Stack,
    Breadcrumbs,
    Link
} from '@mui/material';
import {
    ArrowBack,
    Favorite,
    Share,
    ShoppingCart,
    Star,
    CheckCircle,
    LocalShipping,
    CreditCard,
    Security,
    Home
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { masterBedroomDesignDetails } from './master-bedroom';
import { kitchenDesignDetails } from './kitchen/kitchenData';
import { bathroomDesignDetails } from './bathroom';
import { livingroomDesignDetails } from './living-room/living-roomData';
import { wardrobeDesignDetails } from './wardrobe';
import { poojaroomDesignDetails } from './pooja-room';
import { tvunitDesignDetails } from './tv-unit';
import { falseceilingDesignDetails } from './false-ceiling';
import { kidsbedroomDesignDetails } from './kids-bedroom';
import { balconyDesignDetails } from './balcony';
import { diningroomDesignDetails } from './dining-room';
import { foyerDesignDetails } from './foyer';
import { homeslivspaceDesignDetails } from './homes-livspace';
import { homeofficeDesignDetails } from './home-office';
import { guestbedroomDesignDetails } from './guest-bedroom';
import { windowDesignDetails } from './window';
import { flooringDesignDetails } from './flooring';
import { walldecorDesignDetails } from './wall-decor';
import { wallpaintDesignDetails } from './wall-paint';
import { wallpaperDesignDetails } from './wallpaper';
import { tileDesignDetails } from './tile';
import { studyroomDesignDetails } from './study-room';
import { kitchensinksDesignDetails } from './kitchen-sinks';
import { spacesavingDesignDetails } from './space-saving';
import { doorDesignDetails } from './door';
import { staircaseDesignDetails } from './staircase';
import { crockeryunitDesignDetails } from './crockery-unit';
import { homebarDesignDetails } from './home-bar';

export default function DesignDetail() {
    const { category, id } = useParams();
    const navigate = useNavigate();
    const theme = useTheme();

    // Comprehensive design data - in real app, this would come from API
    const designsData = {
        "master-bedroom": masterBedroomDesignDetails,
        "kitchen": kitchenDesignDetails,
        "bathroom": bathroomDesignDetails,
        "living-room": livingroomDesignDetails,
        "wardrobe": wardrobeDesignDetails,
        "pooja-room": poojaroomDesignDetails,
        "tv-unit": tvunitDesignDetails,
        "false-ceiling": falseceilingDesignDetails,
        "kids-bedroom": kidsbedroomDesignDetails,
        "balcony": balconyDesignDetails,
        "dining-room": diningroomDesignDetails,
        "foyer": foyerDesignDetails,
        "homes-livspace": homeslivspaceDesignDetails,
        "home-office": homeofficeDesignDetails,
        "guest-bedroom": guestbedroomDesignDetails,
        "window": windowDesignDetails,
        "flooring": flooringDesignDetails,
        "wall-decor": walldecorDesignDetails,
        "wall-paint": wallpaintDesignDetails,
        "wallpaper": wallpaperDesignDetails,
        "tile": tileDesignDetails,
        "study-room": studyroomDesignDetails,
        "kitchen-sinks": kitchensinksDesignDetails,
        "space-saving": spacesavingDesignDetails,
        "door": doorDesignDetails,
        "staircase": staircaseDesignDetails,
        "crockery-unit": crockeryunitDesignDetails,
        "home-bar": homebarDesignDetails,
    };

    const design = designsData[category]?.[id] || {
        id: id,
        title: 'Design Not Found',
        category: category,
        style: 'Unknown',
        price: 'N/A',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        description: 'This design could not be found.',
        images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'],
        specifications: {},
        sections: [],
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                height: "100vh",
                overflow: "hidden",
            }}
        >
            {/* Left Side - Fixed Image */}
            <Box
                sx={{
                    flex: 1,
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    overflow: "hidden",
                }}
            >
                <img
                    src={design.image}
                    alt={design.title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>

            {/* Right Side - Scrollable Details */}
            <Box
                sx={{
                    flex: 1,
                    overflowY: "auto",
                    p: { xs: 3, md: 5 },
                    bgcolor: theme.palette.background.default,
                    borderLeft: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => navigate(`/designs/${category}`)}
                    sx={{ mb: 2, px: 0 }}
                >
                    Back
                </Button>

                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    {design.title}
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
                    <Chip
                        label={design.style}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                        }}
                    />
                    {design.price && (
                        <Chip
                            label={design.price}
                            variant="outlined"
                            sx={{
                                borderColor: theme.palette.secondary.main,
                                color: theme.palette.secondary.main,
                            }}
                        />
                    )}
                </Box>

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.8 }}
                >
                    {design.description}
                </Typography>

                <Divider sx={{ my: 3 }} />

                {/* Specifications */}
                {Object.keys(design.specifications || {}).length > 0 && (
                    <>
                        <Typography variant="h6" gutterBottom>
                            Design Details:
                        </Typography>
                        {Object.entries(design.specifications || {}).map(([key, value]) => (
                            <Box key={key} sx={{ mb: 1 }}>
                                <Typography variant="body2" color="text.secondary">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                                </Typography>
                                <Typography variant="body1">{value}</Typography>
                            </Box>
                        ))}
                        <Divider sx={{ my: 3 }} />
                    </>
                )}


                U
                {/* Dynamic Sections */}
                {design.sections?.map((section, i) => (
                    <Box key={i} sx={{ mb: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            {section.title}
                        </Typography>
                        <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                            {section.items?.map((item, index) => (
                                <li key={index}>
                                    <Typography variant="body1" sx={{ mb: 0.5 }}>
                                        {item}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </Box>
                ))}

                <Divider sx={{ my: 3 }} />

                {/* Trust Indicators */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Why Choose KalaKruti?
                    </Typography>
                    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <CheckCircle color="success" fontSize="small" />
                            <Typography variant="body2">5 Year Warranty</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <LocalShipping color="primary" fontSize="small" />
                            <Typography variant="body2">Free Installation</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <CreditCard color="secondary" fontSize="small" />
                            <Typography variant="body2">EMI Available</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Security color="info" fontSize="small" />
                            <Typography variant="body2">Secure Payment</Typography>
                        </Box>
                    </Stack>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Action Buttons 
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        justifyContent: "flex-start",
                        flexWrap: "wrap",
                        mb: 4,
                    }}
                >
                    <Button
                        variant="contained"
                        startIcon={<ShoppingCart />}
                        size="large"
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            "&:hover": { backgroundColor: theme.palette.primary.dark },
                        }}
                    >
                        Get This Design
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<Favorite />}
                        size="large"
                        sx={{
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                            "&:hover": {
                                borderColor: theme.palette.primary.dark,
                                backgroundColor: theme.palette.action.hover,
                            },
                        }}
                    >
                        Save to Favorites
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<Share />}
                        size="large"
                        sx={{
                            borderColor: theme.palette.secondary.main,
                            color: theme.palette.secondary.main,
                            "&:hover": {
                                borderColor: theme.palette.secondary.dark,
                                backgroundColor: theme.palette.action.hover,
                            },
                        }}
                    >
                        Share
                    </Button>
                </Box>*/}

                {/* CTA */}
                <Card sx={{ p: 3, boxShadow: 2 }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Want to customize this design?
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2 }}
                        >
                            We can adapt this design to fit your specific space and
                            requirements.
                        </Typography>
                        <Button
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                "&:hover": { backgroundColor: theme.palette.primary.dark },
                            }}
                            onClick={() => navigate("/contact")}
                        >
                            Request Customization
                        </Button>
                    </CardContent>
                </Card>

                <Box sx={{ height: "5rem" }} /> {/* footer spacing */}
            </Box>
        </Box>
    );
}