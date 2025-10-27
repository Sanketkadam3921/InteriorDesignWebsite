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
    Link,
    ImageList,
    ImageListItem,
    CardMedia
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
    Home,
    LocationOn
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

    if (!design || design.title === 'Design Not Found') {
        return (
            <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
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
        );
    }

    return (
        <Container maxWidth="xl" sx={{ py: 6 }}>
            {/* Back Button */}
            <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate(`/designs/${category}`)}
                sx={{ mb: 4, px: 0 }}
            >
                Back to Design Category
            </Button>

            {/* Design Title */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
                    {design.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {design.description}
                </Typography>
            </Box>

            {/* ----------- ImageList Collage Section ----------- */}
            <Box sx={{ position: "relative", mb: 6 }}>
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
                                srcSet={`${img}?w=600&fit=crop&auto=format&dpr=2 2x`}
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

                {/* Floating "See All" Button */}
                <Button
                    variant="contained"
                    size="medium"
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
                        letterSpacing: "0.5px",
                        fontSize: "0.85rem",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                        "&:hover": {
                            backgroundColor: "rgba(0,0,0,0.9)",
                            transform: "translateY(-2px)",
                        },
                        transition: "all 0.25s ease-in-out",
                    }}
                >
                    See All
                </Button>
            </Box>

            {/* ----------- Design Details Section ----------- */}
            <Box sx={{ mt: 8 }}>
                <Grid container spacing={4}>
                    {/* Left Section */}
                    <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{ display: "flex", flexDirection: "column", gap: 4 }}
                    >
                        {/* Card 1 - Design Overview */}
                        <Card
                            sx={{
                                p: 4,
                                borderRadius: 3,
                                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                            }}
                        >
                            <Typography variant="h4" fontWeight={700} gutterBottom>
                                {design.title}
                            </Typography>

                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                sx={{ mb: 2 }}
                            >
                                {design.description}
                            </Typography>

                            {/* Chips */}
                            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                                <Chip label={design.style} color="success" variant="outlined" />
                                {design.price && (
                                    <Chip label={design.price} color="primary" variant="outlined" />
                                )}
                            </Box>

                            {/* Design Info Grid */}
                            <Grid container spacing={2} sx={{ mb: 3 }}>
                                {design.specifications?.area && (
                                    <Grid item xs={6} sm={4}>
                                        <Typography variant="body2" color="text.secondary">
                                            Area
                                        </Typography>
                                        <Typography variant="body1" fontWeight={600}>
                                            {design.specifications.area}
                                        </Typography>
                                    </Grid>
                                )}
                                <Grid item xs={6} sm={4}>
                                    <Typography variant="body2" color="text.secondary">
                                        Style
                                    </Typography>
                                    <Typography variant="body1" fontWeight={600}>
                                        {design.style}
                                    </Typography>
                                </Grid>
                                {design.specifications?.materials && (
                                    <Grid item xs={6} sm={4}>
                                        <Typography variant="body2" color="text.secondary">
                                            Materials
                                        </Typography>
                                        <Typography variant="body1" fontWeight={600}>
                                            {design.specifications.materials}
                                        </Typography>
                                    </Grid>
                                )}
                            </Grid>

                            {/* CTA Button */}
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    mb: 1,
                                    fontWeight: 600,
                                    px: 3,
                                    borderRadius: "25px",
                                    textTransform: "uppercase",
                                }}
                                onClick={() => navigate("/contact")}
                            >
                                Get This Design
                            </Button>
                        </Card>

                        {/* Card 2 - Specifications */}
                        {Object.keys(design.specifications || {}).length > 0 && (
                            <Card
                                sx={{
                                    p: 4,
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

                                {Object.entries(design.specifications || {}).map(([key, value]) => (
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
                        )}

                        {/* Card 3 - Design Sections */}
                        {design.sections && design.sections.length > 0 && (
                            <Card
                                sx={{
                                    p: 4,
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
                                                        sx={{
                                                            lineHeight: 1.6,
                                                            color: "text.secondary",
                                                        }}
                                                    >
                                                        {item}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                ))}
                            </Card>
                        )}
                    </Grid>

                    {/* Right Sidebar (currently unused) */}
                    <Grid item xs={12} md={4}></Grid>
                </Grid>
            </Box>

            {/* Trust Indicators */}
            <Box sx={{ mt: 8, mb: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
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
                        <Security color="info" fontSize="small" />
                        <Typography variant="body2">Secure Payment</Typography>
                    </Box>
                </Stack>
            </Box>

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
        </Container>
    );
}