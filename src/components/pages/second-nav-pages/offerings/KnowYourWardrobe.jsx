import React, { useState } from "react";
import { Box, Container, Typography, Button, useTheme, IconButton, Card, styled, Accordion, AccordionSummary, AccordionDetails, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AcUnitIcon from '@mui/icons-material/AcUnit';

// Styled components for slider
const SliderContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
}));

const SliderTrack = styled(Box)(({ theme }) => ({
    display: 'flex',
    transition: 'transform 0.3s ease-in-out',
    gap: '20px',
}));

const SliderCard = styled(Card)(({ theme }) => ({
    minWidth: '350px',
    height: '380px',
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
    },
}));

const SliderNavigation = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'white',
    color: theme.palette.text.primary,
    width: '48px',
    height: '48px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    zIndex: 3,
    '&:hover': {
        backgroundColor: '#f5f5f5',
        transform: 'translateY(-50%) scale(1.05)',
    },
}));

const SliderNavigationLeft = styled(SliderNavigation)(({ theme }) => ({
    left: '10px',
}));

const SliderNavigationRight = styled(SliderNavigation)(({ theme }) => ({
    right: '10px',
}));

const CardImageContainer = styled(Box)(({ theme }) => ({
    flex: '0 0 70%',
    position: 'relative',
    overflow: 'hidden',
}));

const CardTextContainer = styled(Box)(({ theme }) => ({
    flex: '0 0 30%',
    padding: '20px 16px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

const CardTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '8px',
    textAlign: 'left',
}));

const CardDescription = styled(Typography)(({ theme }) => ({
    fontSize: '0.9rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.4,
    textAlign: 'left',
}));

// Styled components for Why Choose section
const FeatureCard = styled(Card)(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #d1d5db',
    height: '280px',
    minHeight: '280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    },
}));

const FeatureIconContainer = styled(Box)(({ theme }) => ({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
    position: 'relative',
    border: '1px solid #d1d5db',
    flexShrink: 0,
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
    fontSize: '2.5rem',
    color: theme.palette.primary.main,
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    fontWeight: '600',
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: '6px',
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
    fontSize: '0.9rem',
    color: theme.palette.text.secondary,
    textAlign: 'center',
    lineHeight: 1.4,
}));

// Styled components for Wardrobe Triangle section
const TriangleCard = styled(Card)(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #d1d5db',
    height: '320px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    },
}));

const TriangleDiagram = styled(Box)(({ theme }) => ({
    width: '200px',
    height: '200px',
    position: 'relative',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    margin: '0 auto 16px',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}));

const TriangleTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    fontWeight: '600',
    color: theme.palette.text.primary,
    textAlign: 'center',
}));

// Hero Component for Wardrobe
function WardrobeHero() {
    const theme = useTheme();
    const navigate = useNavigate();

    const image =
        "https://greentechinteriors.in/wp-content/uploads/2023/08/wardrobe-design-scaled.jpg";

    return (
        <Box
            sx={{
                position: "relative",
                height: { xs: "60vh", md: "80vh" },
                overflow: "hidden",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        color: theme.palette.text.light,
                        fontFamily: theme.typography.fontFamily,
                        fontSize: { xs: "2rem", md: "3rem" }
                    }}
                >
                    Discover Your KalaKruti Wardrobe
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/price-calculators/wardrobe")}
                    sx={{
                        px: 4,
                        py: 2,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        borderRadius: 10,
                        textTransform: "none",
                        fontWeight: 600,
                        fontFamily: theme.typography.fontFamily,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                            transform: 'translateY(-2px)'
                        }
                    }}
                >
                    Talk To Our Designer
                </Button>
            </Container>
        </Box>
    );
}

// Wardrobe Calculator Intro Component
function WardrobeCalculatorIntro() {
    const theme = useTheme();
    const navigate = useNavigate();

    const wardrobeStyles = [
        {
            title: "Aarambh",
            description: "A pocket-friendly range with everything you need for a new beginning.",
            image: "https://static.vecteezy.com/system/resources/previews/038/079/741/large_2x/modern-wardrobe-display-and-storage-for-interior-laundry-room-3d-illustration-photo.jpg",
        },
        {
            title: "Premium",
            description: "Elegant and sleek finishes on modular products that are sure to make your home stand out.",
            image: "https://static.vecteezy.com/system/resources/previews/038/079/741/large_2x/modern-wardrobe-display-and-storage-for-interior-laundry-room-3d-illustration-photo.jpg",
        },
        {
            title: "Semi-modular",
            description: "Reinforced with aluminium this range allows easy insta countertops. Flexibility at its best.",
            image: "https://greentechinteriors.in/wp-content/uploads/2023/08/wardrobe-design-scaled.jpg",
        },
    ];

    return (
        <Box sx={{
            py: { xs: 6, md: 10 },
            textAlign: "left",
            backgroundColor: theme.palette.background.paper,
            px: { xs: 2, md: 4 }
        }}>
            <Container maxWidth="lg" sx={{ px: 0 }}>
                {/* Title */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "1.8rem", md: "2.4rem" },
                        fontFamily: theme.typography.fontFamily,
                        textAlign: "left"
                    }}
                >
                    The KalaKruti wardrobe range
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        color: theme.palette.text.secondary,
                        mb: 6,
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        fontFamily: theme.typography.fontFamily,
                        maxWidth: 700,
                        textAlign: "left"
                    }}
                >
                    Start off your journey, selecting from our amazing range of wardrobes with varying styles, offerings and budgets.
                </Typography>

                {/* Wardrobe Styles Section */}
                <Box sx={{ mt: 6 }}>
                    {/* Wardrobe Styles Grid */}
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                        gap: 3
                    }}>
                        {wardrobeStyles.map((style, index) => (
                            <Box
                                key={index}
                                sx={{
                                    borderRadius: 4,
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                    overflow: "hidden",
                                    backgroundColor: theme.palette.background.paper,
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={style.image}
                                    alt={style.title}
                                    sx={{
                                        height: 240,
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                                <Box sx={{ p: 3, textAlign: "left" }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight={600}
                                        color="text.primary"
                                        sx={{ mb: 1, textAlign: "left" }}
                                    >
                                        {style.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.6, textAlign: "left" }}
                                    >
                                        {style.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

// Wardrobe features data
const wardrobeFeatures = [
    {
        id: 1,
        title: 'DuraBuild Cabinets',
        description: 'with soft-closing hinges and sturdy build.',
        icon: StarIcon,
    },
    {
        id: 2,
        title: 'AquaBloc Technology',
        description: 'repels moisture from entering the core.',
        icon: WaterDropIcon,
    },
    {
        id: 3,
        title: 'AntiBubble Technology',
        description: 'for a smooth and seamless finish.',
        icon: BubbleChartIcon,
    },
    {
        id: 4,
        title: 'Precision Engineered Manufacturing',
        description: 'with an automated process for error-free cabinets.',
        icon: PrecisionManufacturingIcon,
    },
    {
        id: 5,
        title: 'Flat 10 year warranty*',
        description: 'on all wardrobes.',
        icon: SecurityIcon,
    },
    {
        id: 6,
        title: '45-day Delivery*',
        description: 'with KalaKruti Move-in Guarantee.',
        icon: LocalShippingIcon,
    },
];

// Why Choose Wardrobe Component
function WhyChooseWardrobe() {
    const theme = useTheme();

    return (
        <Box sx={{
            py: { xs: 6, md: 10 },
            backgroundColor: '#f8f9fa',
            textAlign: "center"
        }}>
            <Container maxWidth="lg">
                {/* Title */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 6,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "1.8rem", md: "2.4rem" },
                        fontFamily: theme.typography.fontFamily,
                        textAlign: "center"
                    }}
                >
                    Why choose a KalaKruti wardrobe?
                </Typography>

                {/* Feature Cards Grid */}
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                    gap: 1,
                    justifyContent: "center"
                }}>
                    {wardrobeFeatures.map((feature) => {
                        const IconComponent = feature.icon;
                        return (
                            <FeatureCard key={feature.id} sx={{ width: '100%' }}>
                                <FeatureIconContainer>
                                    <FeatureIcon>
                                        <IconComponent />
                                    </FeatureIcon>
                                </FeatureIconContainer>
                                <FeatureTitle>
                                    {feature.title}
                                </FeatureTitle>
                                <FeatureDescription>
                                    {feature.description}
                                </FeatureDescription>
                            </FeatureCard>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
}

// Wardrobe layout slider data
const wardrobeSliderData = [
    {
        id: 1,
        layoutType: 'Walk-in Wardrobe',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCuvtKD2-se3-13ISi2Ju3mcPtiCjtlMoczTzrnBWkeNayCMmo3WEqv4sgvx4j6y1_yw&usqp=CAU',
        description: 'Spacious wardrobe with dedicated dressing area.'
    },
    {
        id: 2,
        layoutType: 'Built-in Wardrobe',
        image: 'https://i.pinimg.com/736x/82/0e/b6/820eb60db0aa9fe6ef29071ed88d91fd.jpg',
        description: 'Custom-fitted wardrobe integrated into your room.'
    },
    {
        id: 3,
        layoutType: 'Freestanding Wardrobe',
        image: 'https://www.meblefurniture.com/cdn/shop/products/White3_7e5f4bea-554e-46bb-8e32-b078e620aa1a_1400x.png?v=1670904063',
        description: 'Portable wardrobe that can be moved as needed.'
    }
];

// Wardrobe Slider Section Component
function WardrobeSliderSection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => {
            const nextSlide = prev + 1;
            if (nextSlide >= wardrobeSliderData.length) {
                setTimeout(() => {
                    setCurrentSlide(0);
                }, 0);
                return wardrobeSliderData.length;
            }
            return nextSlide;
        });
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => {
            if (prev === 0) {
                return wardrobeSliderData.length - 1;
            }
            return prev - 1;
        });
    };

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: theme.palette.background.default }}>
            <Container maxWidth="lg">
                {/* Title and Description */}
                <Box sx={{ mb: 6, textAlign: "left" }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: theme.palette.text.primary,
                            fontSize: { xs: "1.8rem", md: "2.4rem" },
                            fontFamily: theme.typography.fontFamily,
                            textAlign: "left"
                        }}
                    >
                        Know your wardrobe layout
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.1rem',
                            color: theme.palette.text.secondary,
                            lineHeight: 1.6,
                            textAlign: "left",
                            width: '100%'
                        }}
                    >
                        Understanding a wardrobe layout is the first step to planning a perfect wardrobe. Your wardrobe would have one of the following layouts.
                    </Typography>
                </Box>

                {/* Slider */}
                <SliderContainer>
                    <SliderTrack
                        sx={{
                            transform: `translateX(-${(currentSlide + 2) * 370}px)`,
                            transition: currentSlide === wardrobeSliderData.length ? 'none' : 'transform 0.3s ease-in-out',
                        }}
                    >
                        {/* Multiple duplicate cards at the beginning to fill viewport */}
                        <SliderCard>
                            <CardImageContainer
                                sx={{
                                    backgroundImage: `url(${wardrobeSliderData[wardrobeSliderData.length - 1].image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                            <CardTextContainer>
                                <CardTitle>
                                    {wardrobeSliderData[wardrobeSliderData.length - 1].layoutType}
                                </CardTitle>
                                <CardDescription>
                                    {wardrobeSliderData[wardrobeSliderData.length - 1].description}
                                </CardDescription>
                            </CardTextContainer>
                        </SliderCard>

                        <SliderCard>
                            <CardImageContainer
                                sx={{
                                    backgroundImage: `url(${wardrobeSliderData[wardrobeSliderData.length - 2].image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                            <CardTextContainer>
                                <CardTitle>
                                    {wardrobeSliderData[wardrobeSliderData.length - 2].layoutType}
                                </CardTitle>
                                <CardDescription>
                                    {wardrobeSliderData[wardrobeSliderData.length - 2].description}
                                </CardDescription>
                            </CardTextContainer>
                        </SliderCard>

                        {wardrobeSliderData.map((item) => (
                            <SliderCard key={item.id}>
                                <CardImageContainer
                                    sx={{
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                />
                                <CardTextContainer>
                                    <CardTitle>
                                        {item.layoutType}
                                    </CardTitle>
                                    <CardDescription>
                                        {item.description}
                                    </CardDescription>
                                </CardTextContainer>
                            </SliderCard>
                        ))}

                        {/* Multiple duplicate cards at the end to fill viewport */}
                        <SliderCard>
                            <CardImageContainer
                                sx={{
                                    backgroundImage: `url(${wardrobeSliderData[0].image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                            <CardTextContainer>
                                <CardTitle>
                                    {wardrobeSliderData[0].layoutType}
                                </CardTitle>
                                <CardDescription>
                                    {wardrobeSliderData[0].description}
                                </CardDescription>
                            </CardTextContainer>
                        </SliderCard>

                        <SliderCard>
                            <CardImageContainer
                                sx={{
                                    backgroundImage: `url(${wardrobeSliderData[1].image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                            <CardTextContainer>
                                <CardTitle>
                                    {wardrobeSliderData[1].layoutType}
                                </CardTitle>
                                <CardDescription>
                                    {wardrobeSliderData[1].description}
                                </CardDescription>
                            </CardTextContainer>
                        </SliderCard>
                    </SliderTrack>

                    <SliderNavigationLeft onClick={handlePrevSlide}>
                        <ArrowBackIosIcon />
                    </SliderNavigationLeft>

                    <SliderNavigationRight onClick={handleNextSlide}>
                        <ArrowForwardIosIcon />
                    </SliderNavigationRight>
                </SliderContainer>

            </Container>
        </Box>
    );
}

// Wardrobe approach data
const wardrobeApproachData = [
    {
        id: 1,
        title: 'Walk-in Wardrobe',
        layout: 'walk-in',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnnhA7weI_lW9M456yfpEvFQ0LzWWJxqFcg&s'
    },
    {
        id: 2,
        title: 'Built-in Wardrobe',
        layout: 'built-in',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqAF3PAcu5PRZ8YPit3h9vAQJCcaKR965DQ&s'
    },
    {
        id: 3,
        title: 'Freestanding Wardrobe',
        layout: 'freestanding',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcUYvAeS3E2136KylKxgMwdR5f3NexK56rBg&s'
    }
];

// Wardrobe Approach Section Component
function WardrobeApproachSection() {
    const theme = useTheme();

    return (
        <Box sx={{
            py: { xs: 6, md: 10 },
            backgroundColor: 'white',
            textAlign: "left"
        }}>
            <Container maxWidth="lg">
                {/* Title */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "1.8rem", md: "2.4rem" },
                        fontFamily: theme.typography.fontFamily,
                        textAlign: "left"
                    }}
                >
                    Approach to wardrobe design
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.1rem',
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        textAlign: "left",
                        width: '100%',
                        mb: 6
                    }}
                >
                    The wardrobe design allows easy organization between hanging, folding and storage zones allowing for an organized and stress-free wardrobe experience.
                </Typography>

                {/* Approach Cards Grid */}
                <Grid container spacing={3} justifyContent="center">
                    {wardrobeApproachData.map((layout) => (
                        <Grid item xs={12} sm={6} md={4} key={layout.id} sx={{ display: 'flex' }}>
                            <TriangleCard sx={{ width: '100%' }}>
                                <TriangleDiagram
                                    sx={{
                                        backgroundImage: `url(${layout.image})`,
                                    }}
                                />
                                <TriangleTitle>
                                    {layout.title}
                                </TriangleTitle>
                            </TriangleCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

// Core Materials Section Component
function CoreMaterialsSection() {
    const theme = useTheme();

    const materials = [
        {
            id: 1,
            title: "Engineered Wood - MDF, HDF-HMR, PB",
            description: "Lightweight, budget-friendly with a varying range of load and screw-holding capacities.",
            image: "https://www.decorpot.com/images/blogimage1673680941hdf-board.jpg"
        },
        {
            id: 2,
            title: "Plywood - MR, BWR, BWP",
            description: "High strength, termite-resistant and low on emission.",
            image: "https://5.imimg.com/data5/SELLER/Default/2023/5/308975228/AY/VA/VE/100035043/bwp-plywood-250x250.webp"
        }
    ];

    return (
        <Box sx={{
            py: { xs: 6, md: 10 },
            backgroundColor: '#f8f9fa',
            textAlign: "left"
        }}>
            <Container maxWidth="lg">
                {/* Title */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "1.8rem", md: "2.4rem" },
                        fontFamily: theme.typography.fontFamily,
                        textAlign: "left"
                    }}
                >
                    Core materials we use
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.1rem',
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        textAlign: "left",
                        width: '100%',
                        mb: 6
                    }}
                >
                    Your wardrobe goes through a lot. Superior quality materials at the core ensure it lasts a lifetime.
                </Typography>

                {/* Materials Grid */}
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                    gap: 3
                }}>
                    {materials.map((material) => (
                        <Box
                            key={material.id}
                            sx={{
                                borderRadius: 4,
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                overflow: "hidden",
                                backgroundColor: theme.palette.background.paper,
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                height: '400px', // Fixed height
                                display: 'flex',
                                flexDirection: 'column',
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={material.image}
                                alt={material.title}
                                sx={{
                                    height: 240,
                                    width: "100%",
                                    objectFit: "cover",
                                }}
                            />
                            <Box sx={{
                                p: 3,
                                textAlign: "left",
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <Typography
                                    variant="h6"
                                    fontWeight={600}
                                    color="text.primary"
                                    sx={{
                                        mb: 1,
                                        textAlign: "left",
                                        fontSize: '1.1rem',
                                        fontFamily: theme.typography.fontFamily,
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word',
                                        hyphens: 'auto',
                                        lineHeight: 1.3
                                    }}
                                >
                                    {material.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        lineHeight: 1.6,
                                        textAlign: "left",
                                        fontSize: '0.95rem',
                                        fontFamily: theme.typography.fontFamily,
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word',
                                        hyphens: 'auto',
                                        flex: 1
                                    }}
                                >
                                    {material.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

// Aesthetics Section Component
function AestheticsSection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const wardrobeFinishes = [
        {
            id: 1,
            title: "Elite Laminate",
            description: "Modern trends meet tactile textures and designs.",
            image: "https://www.imovr.com/cdn/shop/files/BW-Bella-Walnut-Swatch-WEB-750px.jpg?v=1752959282&width=1920"
        },
        {
            id: 2,
            title: "Classic Laminate",
            description: "Scratch, moisture, and stain resistant.",
            image: "https://shop.renolit.com/out/pictures/master/product/1/RENOLIT%203D%20Thermolaminates%20Stone%20Grey%20Modern%20Ash%20Classic%20S4040030944%2072dpi.jpg"
        },
        {
            id: 3,
            title: "Membrane",
            description: "Comes with grooves and is stain-resistant.",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/7/CM/TJ/DV/11587497/3d-carving-membrane-doors-500x500.png"
        }
    ];

    const handlesData = [
        {
            id: 1,
            title: "Regular Handles",
            description: "Low-maintenance and easy to use. These come in linear and classic designs.",
            image: "https://t4.ftcdn.net/jpg/14/76/09/01/360_F_1476090111_4b7XVgYwYux9SMOJzUYGNFpHO6miGztc.jpg"
        },
        {
            id: 2,
            title: "Edge Profile",
            description: "Placed along the edges, it gives an illusion of being handle-less.",
            image: "https://dashboard.ebco.in/wp-content/uploads/nc/catalog/Aluminium-Profile-for-Wardrobe-Sliding/Wardrobe_Edge_Profile2.jpg"
        },
        {
            id: 3,
            title: "Gola",
            description: "Attached to the seamless look.",
            image: "https://i.pinimg.com/originals/13/bf/6a/13bf6afbec607f6632c3e29d23c849ef.png"
        }
    ];

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % wardrobeFinishes.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + wardrobeFinishes.length) % wardrobeFinishes.length);
    };

    return (
        <Box sx={{
            py: { xs: 6, md: 10 },
            backgroundColor: 'white',
            textAlign: "left"
        }}>
            <Container maxWidth="lg">
                {/* Main Title */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "1.8rem", md: "2.4rem" },
                        fontFamily: theme.typography.fontFamily,
                        textAlign: "left"
                    }}
                >
                    Aesthetics that add elegance
                </Typography>

                {/* Subtitle */}
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.1rem',
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        textAlign: "left",
                        width: '100%',
                        mb: 6
                    }}
                >
                    Give your wardrobe a distinct look as per your wants. Choose from multiple finishes, handles and storage solutions.
                </Typography>

                {/* Wardrobe Finishes Section */}
                <Box sx={{ mt: 6 }}>
                    {/* Section Header */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 4
                    }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                                fontSize: { xs: "1.4rem", md: "1.6rem" },
                                fontFamily: theme.typography.fontFamily,
                                textAlign: "left"
                            }}
                        >
                            Wardrobe Finishes
                        </Typography>
                        <Button
                            variant="text"
                            onClick={() => navigate("/kitchen/components/finishes")}
                            sx={{
                                color: theme.palette.primary.main,
                                textTransform: "none",
                                fontWeight: 600,
                                fontSize: '1rem',
                                fontFamily: theme.typography.fontFamily,
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    textDecoration: 'underline'
                                }
                            }}
                        >
                            Explore →
                        </Button>
                    </Box>

                    {/* Carousel Container */}
                    <Box sx={{ position: 'relative' }}>
                        {/* Desktop Grid View */}
                        <Box sx={{
                            display: { xs: 'none', md: 'grid' },
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: 3,
                            justifyContent: "center"
                        }}>
                            {wardrobeFinishes.map((finish) => (
                                <Box
                                    key={finish.id}
                                    sx={{
                                        borderRadius: 4,
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                        overflow: "hidden",
                                        backgroundColor: theme.palette.background.paper,
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                        height: '400px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                        },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={finish.image}
                                        alt={finish.title}
                                        sx={{
                                            height: 240,
                                            width: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Box sx={{
                                        p: 3,
                                        textAlign: "left",
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Typography
                                            variant="h6"
                                            fontWeight={600}
                                            color="text.primary"
                                            sx={{
                                                mb: 1,
                                                textAlign: "left",
                                                fontSize: '1.1rem',
                                                fontFamily: theme.typography.fontFamily,
                                                wordWrap: 'break-word',
                                                overflowWrap: 'break-word',
                                                hyphens: 'auto',
                                                lineHeight: 1.3
                                            }}
                                        >
                                            {finish.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                lineHeight: 1.6,
                                                textAlign: "left",
                                                fontSize: '0.95rem',
                                                fontFamily: theme.typography.fontFamily,
                                                wordWrap: 'break-word',
                                                overflowWrap: 'break-word',
                                                hyphens: 'auto',
                                                flex: 1
                                            }}
                                        >
                                            {finish.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        {/* Mobile Slider View */}
                        <Box sx={{
                            display: { xs: 'block', md: 'none' },
                            position: 'relative'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                overflow: 'hidden',
                                borderRadius: '12px'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    transform: `translateX(-${currentSlide * 100}%)`,
                                    transition: 'transform 0.3s ease-in-out',
                                    width: `${wardrobeFinishes.length * 100}%`
                                }}>
                                    {wardrobeFinishes.map((finish) => (
                                        <Box
                                            key={finish.id}
                                            sx={{
                                                width: '100%',
                                                flexShrink: 0,
                                                px: 1
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    borderRadius: 4,
                                                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                                    overflow: "hidden",
                                                    backgroundColor: theme.palette.background.paper,
                                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                    height: '350px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    "&:hover": {
                                                        transform: "translateY(-6px)",
                                                        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                                    },
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={finish.image}
                                                    alt={finish.title}
                                                    sx={{
                                                        height: 200,
                                                        width: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                                <Box sx={{
                                                    p: 2.5,
                                                    textAlign: "left",
                                                    flex: 1,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Typography
                                                        variant="h6"
                                                        fontWeight={600}
                                                        color="text.primary"
                                                        sx={{
                                                            mb: 1,
                                                            textAlign: "left",
                                                            fontSize: '1rem',
                                                            fontFamily: theme.typography.fontFamily,
                                                            wordWrap: 'break-word',
                                                            overflowWrap: 'break-word',
                                                            hyphens: 'auto',
                                                            lineHeight: 1.3
                                                        }}
                                                    >
                                                        {finish.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                        sx={{
                                                            lineHeight: 1.5,
                                                            textAlign: "left",
                                                            fontSize: '0.9rem',
                                                            fontFamily: theme.typography.fontFamily,
                                                            wordWrap: 'break-word',
                                                            overflowWrap: 'break-word',
                                                            hyphens: 'auto',
                                                            flex: 1
                                                        }}
                                                    >
                                                        {finish.description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                            {/* Mobile Navigation Arrows */}
                            <IconButton
                                onClick={handlePrevSlide}
                                sx={{
                                    position: 'absolute',
                                    left: 8,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'white',
                                    color: theme.palette.text.primary,
                                    width: '40px',
                                    height: '40px',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                    zIndex: 3,
                                    '&:hover': {
                                        backgroundColor: '#f5f5f5',
                                        transform: 'translateY(-50%) scale(1.05)',
                                    },
                                }}
                            >
                                <ArrowBackIosIcon fontSize="small" />
                            </IconButton>

                            <IconButton
                                onClick={handleNextSlide}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'white',
                                    color: theme.palette.text.primary,
                                    width: '40px',
                                    height: '40px',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                    zIndex: 3,
                                    '&:hover': {
                                        backgroundColor: '#f5f5f5',
                                        transform: 'translateY(-50%) scale(1.05)',
                                    },
                                }}
                            >
                                <ArrowForwardIosIcon fontSize="small" />
                            </IconButton>

                            {/* Mobile Dots Indicator */}
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: 2,
                                gap: 1
                            }}>
                                {wardrobeFinishes.map((_, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: '50%',
                                            backgroundColor: index === currentSlide
                                                ? theme.palette.primary.main
                                                : theme.palette.grey[300],
                                            cursor: 'pointer',
                                            transition: 'background-color 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: theme.palette.primary.main,
                                            }
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Handles Section */}
                <Box sx={{ mt: 8 }}>
                    {/* Section Header */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 4
                    }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                                fontSize: { xs: "1.4rem", md: "1.6rem" },
                                fontFamily: theme.typography.fontFamily,
                                textAlign: "left"
                            }}
                        >
                            Handles
                        </Typography>
                        <Button
                            variant="text"
                            onClick={() => navigate("/kitchen/components/handles")}
                            sx={{
                                color: theme.palette.primary.main,
                                textTransform: "none",
                                fontWeight: 600,
                                fontSize: '1rem',
                                fontFamily: theme.typography.fontFamily,
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    textDecoration: 'underline'
                                }
                            }}
                        >
                            Explore →
                        </Button>
                    </Box>

                    {/* Carousel Container */}
                    <Box sx={{ position: 'relative' }}>
                        {/* Desktop Grid View */}
                        <Box sx={{
                            display: { xs: 'none', md: 'grid' },
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: 3,
                            justifyContent: "center"
                        }}>
                            {handlesData.map((handle) => (
                                <Box
                                    key={handle.id}
                                    sx={{
                                        borderRadius: 4,
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                        overflow: "hidden",
                                        backgroundColor: theme.palette.background.paper,
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                        height: '400px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                        },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={handle.image}
                                        alt={handle.title}
                                        sx={{
                                            height: 240,
                                            width: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Box sx={{
                                        p: 3,
                                        textAlign: "left",
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Typography
                                            variant="h6"
                                            fontWeight={600}
                                            color="text.primary"
                                            sx={{
                                                mb: 1,
                                                textAlign: "left",
                                                fontSize: '1.1rem',
                                                fontFamily: theme.typography.fontFamily,
                                                wordWrap: 'break-word',
                                                overflowWrap: 'break-word',
                                                hyphens: 'auto',
                                                lineHeight: 1.3
                                            }}
                                        >
                                            {handle.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                lineHeight: 1.6,
                                                textAlign: "left",
                                                fontSize: '0.95rem',
                                                fontFamily: theme.typography.fontFamily,
                                                wordWrap: 'break-word',
                                                overflowWrap: 'break-word',
                                                hyphens: 'auto',
                                                flex: 1
                                            }}
                                        >
                                            {handle.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        {/* Mobile Slider View */}
                        <Box sx={{
                            display: { xs: 'block', md: 'none' },
                            position: 'relative'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                overflow: 'hidden',
                                borderRadius: '12px'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    transform: `translateX(-${currentSlide * 100}%)`,
                                    transition: 'transform 0.3s ease-in-out',
                                    width: `${handlesData.length * 100}%`
                                }}>
                                    {handlesData.map((handle) => (
                                        <Box
                                            key={handle.id}
                                            sx={{
                                                width: '100%',
                                                flexShrink: 0,
                                                px: 1
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    borderRadius: 4,
                                                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                                    overflow: "hidden",
                                                    backgroundColor: theme.palette.background.paper,
                                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                    height: '350px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    "&:hover": {
                                                        transform: "translateY(-6px)",
                                                        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                                    },
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={handle.image}
                                                    alt={handle.title}
                                                    sx={{
                                                        height: 200,
                                                        width: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                                <Box sx={{
                                                    p: 2.5,
                                                    textAlign: "left",
                                                    flex: 1,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Typography
                                                        variant="h6"
                                                        fontWeight={600}
                                                        color="text.primary"
                                                        sx={{
                                                            mb: 1,
                                                            textAlign: "left",
                                                            fontSize: '1rem',
                                                            fontFamily: theme.typography.fontFamily,
                                                            wordWrap: 'break-word',
                                                            overflowWrap: 'break-word',
                                                            hyphens: 'auto',
                                                            lineHeight: 1.3
                                                        }}
                                                    >
                                                        {handle.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                        sx={{
                                                            lineHeight: 1.5,
                                                            textAlign: "left",
                                                            fontSize: '0.9rem',
                                                            fontFamily: theme.typography.fontFamily,
                                                            wordWrap: 'break-word',
                                                            overflowWrap: 'break-word',
                                                            hyphens: 'auto',
                                                            flex: 1
                                                        }}
                                                    >
                                                        {handle.description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                            {/* Mobile Navigation Arrows */}
                            <IconButton
                                onClick={handlePrevSlide}
                                sx={{
                                    position: 'absolute',
                                    left: 8,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'white',
                                    color: theme.palette.text.primary,
                                    width: '40px',
                                    height: '40px',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                    zIndex: 3,
                                    '&:hover': {
                                        backgroundColor: '#f5f5f5',
                                        transform: 'translateY(-50%) scale(1.05)',
                                    },
                                }}
                            >
                                <ArrowBackIosIcon fontSize="small" />
                            </IconButton>

                            <IconButton
                                onClick={handleNextSlide}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'white',
                                    color: theme.palette.text.primary,
                                    width: '40px',
                                    height: '40px',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                    zIndex: 3,
                                    '&:hover': {
                                        backgroundColor: '#f5f5f5',
                                        transform: 'translateY(-50%) scale(1.05)',
                                    },
                                }}
                            >
                                <ArrowForwardIosIcon fontSize="small" />
                            </IconButton>

                            {/* Mobile Dots Indicator */}
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: 2,
                                gap: 1
                            }}>
                                {handlesData.map((_, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: '50%',
                                            backgroundColor: index === currentSlide
                                                ? theme.palette.primary.main
                                                : theme.palette.grey[300],
                                            cursor: 'pointer',
                                            transition: 'background-color 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: theme.palette.primary.main,
                                            }
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

// Wardrobe Design Steps Component
function WardrobeDesignSteps() {
    const theme = useTheme();
    const navigate = useNavigate();

    const steps = [
        {
            icon: "https://cdn-icons-png.flaticon.com/128/3638/3638360.png",
            title: "Choose your wardrobe size",
            description: "Select the size and dimensions of your wardrobe to help us understand the scope of work.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/5436/5436184.png",
            title: "Pick your wardrobe style",
            description: "Choose from modern, traditional, or contemporary wardrobe designs.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/1442/1442912.png",
            title: "Select storage solutions",
            description: "Choose the storage options and organization systems that match your lifestyle.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/489/489870.png",
            title: "Get your estimate",
            description: "Receive a detailed estimate for your dream wardrobe renovation.",
        },
    ];

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.default,
                textAlign: "center",
            }}
        >
            <Container maxWidth="lg">
                {/* Heading */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "1.8rem", md: "2.2rem" },
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    Design your wardrobe in 4 simple steps
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{
                        color: theme.palette.text.secondary,
                        mb: 6,
                        fontSize: "1.1rem",
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    It's that simple and convenient!
                </Typography>

                {/* Steps */}
                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, justifyContent: "center", alignItems: "stretch" }}>
                    {steps.map((step, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                flex: 1,
                                maxWidth: { xs: "100%", md: "250px" }
                            }}
                        >
                            {/* Icon */}
                            <Box
                                sx={{
                                    position: "relative",
                                    mb: 2,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={step.icon}
                                    alt={step.title}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: theme.palette.background.paper,
                                        border: `1px solid ${theme.palette.neutral?.lightGray || theme.palette.grey[300]}`,
                                        borderRadius: "50%",
                                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                                        p: 2,
                                    }}
                                />
                            </Box>

                            {/* Title */}
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    mb: 1,
                                    fontFamily: theme.typography.fontFamily,
                                    textAlign: "center"
                                }}
                            >
                                {step.title}
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    maxWidth: 250,
                                    lineHeight: 1.6,
                                    fontFamily: theme.typography.fontFamily,
                                    textAlign: "center"
                                }}
                            >
                                {step.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Button */}
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/price-calculators/wardrobe")}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: 10,
                        px: 4,
                        py: 1.5,
                        mt: 6,
                        fontFamily: theme.typography.fontFamily,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                            transform: "translateY(-2px)",
                        },
                    }}
                >
                    Get Free Wardrobe Estimate
                </Button>
            </Container>
        </Box>
    );
}

// Wardrobe Styles Carousel Component
function WardrobeStylesCarousel() {
    const theme = useTheme();
    const navigate = useNavigate();

    const wardrobeStyles = [
        {
            title: "Modern Wardrobe",
            description: "Sleek designs with clean lines and contemporary finishes for a minimalist look.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200",
        },
        {
            title: "Traditional Wardrobe",
            description: "Classic designs with warm wood finishes and timeless elegance.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200",
        },
        {
            title: "Contemporary Wardrobe",
            description: "Blend of modern and traditional elements for a balanced aesthetic.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200",
        },
    ];

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, background: theme.palette.background.default }}>
            <Container maxWidth="lg">
                {/* Heading Section */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        mb: 6,
                        gap: 2,
                    }}
                >
                    <Box>
                        <Typography
                            variant="h4"
                            fontWeight={700}
                            color="text.primary"
                            sx={{
                                mb: 1,
                                fontSize: { xs: "1.8rem", md: "2.2rem" },
                                fontFamily: theme.typography.fontFamily,
                            }}
                        >
                            Wardrobe Styles for Every Home
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            sx={{
                                fontSize: "1.1rem",
                                fontFamily: theme.typography.fontFamily,
                            }}
                        >
                            Choose your preferred wardrobe style and get instant design estimates
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() => navigate("/price-calculators/wardrobe")}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            textTransform: "none",
                            fontWeight: 600,
                            borderRadius: 3,
                            px: 4,
                            py: 1.5,
                            fontFamily: theme.typography.fontFamily,
                            boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
                            "&:hover": {
                                backgroundColor: theme.palette.primary.dark,
                                transform: "translateY(-2px)",
                                boxShadow: `0 6px 16px ${theme.palette.primary.main}40`,
                            },
                        }}
                    >
                        Get Started
                    </Button>
                </Box>

                {/* Wardrobe Styles Grid */}
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                    gap: 3
                }}>
                    {wardrobeStyles.map((style, index) => (
                        <Box
                            key={index}
                            sx={{
                                borderRadius: 4,
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                overflow: "hidden",
                                backgroundColor: theme.palette.background.paper,
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={style.image}
                                alt={style.title}
                                sx={{
                                    height: 240,
                                    width: "100%",
                                    objectFit: "cover",
                                }}
                            />
                            <Box sx={{ p: 3 }}>
                                <Typography
                                    variant="h6"
                                    fontWeight={600}
                                    color="text.primary"
                                    sx={{ mb: 1 }}
                                >
                                    {style.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.6 }}
                                >
                                    {style.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

// Wardrobe Calculator How It Works Component
function WardrobeCalculatorHowItWorks() {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        maxWidth: 700,
                        mx: "auto",
                        textAlign: "left",
                    }}
                >
                    {/* Title */}
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: theme.palette.text.primary,
                            fontSize: { xs: "1.8rem", md: "2.2rem" },
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        How Does The Wardrobe Design Calculator Work
                    </Typography>

                    {/* Description */}
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 4,
                            lineHeight: 1.8,
                            fontSize: { xs: "1rem", md: "1.1rem" },
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        Our wardrobe design calculator calculates the cost considering the size of your wardrobe,
                        style preferences, storage solutions, and additional features to get an accurate cost estimate.
                        By answering these questions, we'll be able to understand your wardrobe renovation requirements.
                    </Typography>

                    {/* Section: Wardrobe Size */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 0.5,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        Wardrobe Size
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 3,
                            lineHeight: 1.8,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        The size of your wardrobe determines the amount of materials needed and the complexity
                        of the design. This helps us provide accurate pricing for your wardrobe renovation.
                    </Typography>

                    {/* Section: Style Selection */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 0.5,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        Style Selection
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 3,
                            lineHeight: 1.8,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        Choose from modern, traditional, or contemporary styles. Each style has different
                        material requirements and design elements that affect the overall cost.
                    </Typography>

                    {/* Section: Storage Solutions */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 0.5,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        Storage Solutions
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 5,
                            lineHeight: 1.8,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        Select storage options like hanging rods, shelves, drawers, and organization systems
                        that match your storage needs and lifestyle preferences. Our calculator will adjust the estimate accordingly.
                    </Typography>

                    {/* Calculate Now Link */}
                    <Button
                        variant="contained"
                        onClick={() => navigate("/price-calculators/wardrobe")}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            fontWeight: 600,
                            fontSize: "1rem",
                            textTransform: "none",
                            px: 4,
                            py: 1.5,
                            fontFamily: theme.typography.fontFamily,
                            "&:hover": {
                                backgroundColor: theme.palette.primary.dark,
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        Calculate Now →
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

// Wardrobe FAQs Component
function WardrobeFAQs() {
    const theme = useTheme();

    const wardrobeFAQs = [
        {
            id: 'wardrobe-faq-1',
            question: 'How accurate is the wardrobe design calculator?',
            answer: 'Our wardrobe design calculator uses current market rates and material costs to provide accurate estimates. While the calculator gives you a reliable ballpark figure, the final quote may vary based on specific site conditions and custom requirements.',
        },
        {
            id: 'wardrobe-faq-2',
            question: 'What factors does the calculator consider for wardrobe pricing?',
            answer: 'The calculator considers wardrobe size, style preferences, storage solutions, materials, finishes, hardware, and additional features like lighting and mirrors. Each factor is weighted according to current market rates.',
        },
        {
            id: 'wardrobe-faq-3',
            question: 'Can I customize my wardrobe design after getting the estimate?',
            answer: 'Absolutely! You can modify your selections and get updated estimates. Our flexible approach allows you to adjust materials, finishes, storage options, or add/remove features. Simply update your preferences or discuss changes with our design team.',
        },
        {
            id: 'wardrobe-faq-4',
            question: 'How long does a wardrobe renovation take?',
            answer: 'Wardrobe renovation timelines typically range from 2-4 weeks depending on the scope of work. The calculator will provide an estimated timeline based on your selected options and requirements.',
        },
        {
            id: 'wardrobe-faq-5',
            question: 'Does the estimate include installation and labor?',
            answer: 'Yes, the estimate includes design, materials, labor, and installation services. Additional services like electrical work for lighting or structural modifications may incur extra charges.',
        },
    ];

    return (
        <Box sx={{
            mt: 8,
            px: { xs: 2, md: 20 },
            backgroundColor: theme.palette.background.paper
        }}>
            {/* Title Section */}
            <Box sx={{ textAlign: 'left', mb: 4 }}>
                <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        fontFamily: theme.typography.fontFamily,
                        fontSize: { xs: "2rem", md: "2.5rem" }
                    }}
                >
                    Wardrobe Design FAQs
                </Typography>
            </Box>

            {/* FAQ Accordions */}
            <Box sx={{ width: '100%' }}>
                {wardrobeFAQs.map((faq) => (
                    <Accordion
                        key={faq.id}
                        sx={{
                            mb: 2,
                            '&:before': { display: 'none' },
                            boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                            borderRadius: 14,
                            backgroundColor: theme.palette.background.paper,
                            '&:hover': {
                                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMore sx={{ color: theme.palette.primary.main }} />}
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                '&:hover': {
                                    backgroundColor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    fontFamily: theme.typography.fontFamily
                                }}
                            >
                                {faq.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor: theme.palette.background.default,
                                borderTop: `1px solid ${theme.palette.divider}`,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.7,
                                    color: theme.palette.text.secondary,
                                    fontFamily: theme.typography.fontFamily
                                }}
                            >
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>

            {/* Contact CTA */}
            <Box sx={{ textAlign: 'center', py: 6, mt: 4 }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        color: theme.palette.text.primary,
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    Still have questions?
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 3,
                        maxWidth: 600,
                        mx: 'auto',
                        color: theme.palette.text.secondary,
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    Our wardrobe design experts are here to help you with any specific
                    questions about your wardrobe renovation project.
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        borderColor: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText
                        }
                    }}
                    onClick={() => (window.location.href = '/contact')}
                >
                    Contact Us
                </Button>
            </Box>
        </Box>
    );
}

// Main KnowYourWardrobe Component
export default function KnowYourWardrobe() {
    return (
        <div style={{ overflowX: "hidden", width: "100%" }}>
            <WardrobeHero />
            <WardrobeCalculatorIntro />
            <WhyChooseWardrobe />
            <WardrobeSliderSection />
            <WardrobeApproachSection />
            <CoreMaterialsSection />
            <AestheticsSection />
            <WardrobeDesignSteps />
            <WardrobeFAQs />
        </div>
    );
}