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

const PriceBadge = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '16px',
    left: '16px',
    backgroundColor: 'rgba(139, 69, 19, 0.9)',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '600',
    zIndex: 2,
}));

const RoomTypeOverlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
    padding: '20px 16px 16px',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    zIndex: 2,
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

// Styled components for Kitchen Triangle section
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

const KitchenElement = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '50%',
    border: '2px solid #ddd',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const TriangleLine = styled(Box)(({ theme }) => ({
    position: 'absolute',
    height: '2px',
    backgroundColor: '#ff4444',
    transformOrigin: 'left center',
}));

const TriangleTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    fontWeight: '600',
    color: theme.palette.text.primary,
    textAlign: 'center',
}));

// Hero Component for Kitchen
function KitchenHero() {
    const theme = useTheme();
    const navigate = useNavigate();

    const image =
        "https://t4.ftcdn.net/jpg/06/72/27/85/360_F_672278558_CzgG5hvJNm1YCXpT08p86G4kBjEwWehI.jpg";

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
                    Discover Your KalaKruti Kitchen
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/price-calculators/kitchen")}
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

// Kitchen Calculator Intro Component
function KitchenCalculatorIntro() {
    const theme = useTheme();
    const navigate = useNavigate();

    const breadcrumb = [
        { label: "Home", path: "/" },
        { label: "Kitchen", path: "/kitchen" },
        { label: "Know Your Kitchen" },
    ];

    const kitchenStyles = [
        {
            title: "Aarambh",
            description: "A pocket-friendly range with everything you need for a new beginning.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200",
        },
        {
            title: "Premium",
            description: "Elegant and sleek finishes on modular products that are sure to make your home stand out.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200",
        },
        {
            title: "Semi-modular",
            description: "Reinforced with aluminium this range allows easy insta countertops. Flexibility at its best.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200",
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
                    The KalaKruti kitchen range
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
                    Start off your journey, selecting from our amazing range of kitchens with varying styles, offerings and budgets.
                </Typography>

                {/* Kitchen Styles Section */}
                <Box sx={{ mt: 6 }}>
                    {/* Kitchen Styles Grid */}
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                        gap: 3
                    }}>
                        {kitchenStyles.map((style, index) => (
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

// Kitchen features data
const kitchenFeatures = [
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
        description: 'on all kitchens.',
        icon: SecurityIcon,
    },
    {
        id: 6,
        title: '45-day Delivery*',
        description: 'with KalaKruti Move-in Guarantee.',
        icon: LocalShippingIcon,
    },
];

// Why Choose Kitchen Component
function WhyChooseKitchen() {
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
                    Why choose a KalaKruti kitchen?
                </Typography>

                {/* Feature Cards Grid */}
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                    gap: 1,
                    justifyContent: "center"
                }}>
                    {kitchenFeatures.map((feature) => {
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

// Kitchen layout slider data
const kitchenSliderData = [
    {
        id: 1,
        layoutType: 'L-shaped Kitchen',
        image: 'https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2023-1696420252-fyaIE/3d-team-1696502648-Ru2UT/kitchen-1696506472-V5dsP/ki23-1700569767-yzZVo.jpg',
        description: '2 adjoining countertops with corner spaces.'
    },
    {
        id: 2,
        layoutType: 'U-shaped Kitchen',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/QC/XK/RC/19100161/u-shape-kitchen-gylonised-steel-kitchen-.jpg',
        description: '3 connected walls of cabinets with an open entrance.'
    },
    {
        id: 3,
        layoutType: 'Straight',
        image: 'https://images.woodenstreet.de/image/data/167056588519.jpg',
        description: 'Cabinets placed in a single line.'
    }
];

// Kitchen Slider Section Component
function KitchenSliderSection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => {
            const nextSlide = prev + 1;
            if (nextSlide >= kitchenSliderData.length) {
                setTimeout(() => {
                    setCurrentSlide(0);
                }, 0);
                return kitchenSliderData.length;
            }
            return nextSlide;
        });
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => {
            if (prev === 0) {
                return kitchenSliderData.length - 1;
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
                        Know your kitchen layout
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
                        Understanding a kitchen layout is the first step to planning a perfect kitchen. Your kitchen would have one of the following layouts.
                    </Typography>
                </Box>

                {/* Slider */}
                <SliderContainer>
                    <SliderTrack
                        sx={{
                            transform: `translateX(-${(currentSlide + 2) * 370}px)`,
                            transition: currentSlide === kitchenSliderData.length ? 'none' : 'transform 0.3s ease-in-out',
                        }}
                    >
                        {/* Multiple duplicate cards at the beginning to fill viewport */}
                        <SliderCard>
                            <CardImageContainer
                                sx={{
                                    backgroundImage: `url(${kitchenSliderData[kitchenSliderData.length - 1].image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                            <CardTextContainer>
                                <CardTitle>
                                    {kitchenSliderData[kitchenSliderData.length - 1].layoutType}
                                </CardTitle>
                                <CardDescription>
                                    {kitchenSliderData[kitchenSliderData.length - 1].description}
                                </CardDescription>
                            </CardTextContainer>
                        </SliderCard>

                        <SliderCard>
                            <CardImageContainer
                                sx={{
                                    backgroundImage: `url(${kitchenSliderData[kitchenSliderData.length - 2].image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                            <CardTextContainer>
                                <CardTitle>
                                    {kitchenSliderData[kitchenSliderData.length - 2].layoutType}
                                </CardTitle>
                                <CardDescription>
                                    {kitchenSliderData[kitchenSliderData.length - 2].description}
                                </CardDescription>
                            </CardTextContainer>
                        </SliderCard>

                        {kitchenSliderData.map((item) => (
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
                                    backgroundImage: `url(${kitchenSliderData[0].image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                            <CardTextContainer>
                                <CardTitle>
                                    {kitchenSliderData[0].layoutType}
                                </CardTitle>
                                <CardDescription>
                                    {kitchenSliderData[0].description}
                                </CardDescription>
                            </CardTextContainer>
                        </SliderCard>

                        <SliderCard>
                            <CardImageContainer
                                sx={{
                                    backgroundImage: `url(${kitchenSliderData[1].image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                            <CardTextContainer>
                                <CardTitle>
                                    {kitchenSliderData[1].layoutType}
                                </CardTitle>
                                <CardDescription>
                                    {kitchenSliderData[1].description}
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

// Kitchen triangle data
const kitchenTriangleData = [
    {
        id: 1,
        title: 'U-shaped Kitchen',
        layout: 'u-shaped',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnnhA7weI_lW9M456yfpEvFQ0LzWWJxqFcg&s'
    },
    {
        id: 2,
        title: 'L-shaped Kitchen',
        layout: 'l-shaped',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqAF3PAcu5PRZ8YPit3h9vAQJCcaKR965DQ&s'
    },
    {
        id: 3,
        title: 'Island Kitchen',
        layout: 'island',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcUYvAeS3E2136KylKxgMwdR5f3NexK56rBg&s'
    }
];

// Kitchen Triangle Section Component
function KitchenTriangleSection() {
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
                    Approach to kitchen design
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
                    The kitchen triangle allows easy movement between the cooking, cleaning and storage zones allowing for an easy and stress-free kitchen experience.
                </Typography>

                {/* Triangle Cards Grid */}
                <Grid container spacing={3} justifyContent="center">
                    {kitchenTriangleData.map((layout) => (
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
                    Your kitchen goes through a lot. Superior quality materials at the core ensure it lasts a lifetime.
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

    const shutterFinishes = [
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

    const countertopsData = [
        {
            id: 1,
            title: "Granite",
            description: "Low maintenance and durable.",
            image: "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2024/08/magnific-tu8RhHSaS0oFKZWS8grn-Kitchen-with-waterfall-countertops-1024x574.jpg?width=900"
        },
        {
            id: 2,
            title: "Quartz",
            description: "Tough, gives a polished look and comes in different colours.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWWW8w4RAohuZxaE6bOAXOrcLRR6pLCHhns60FhvIX1q21_R3JzI-Y1z-3b66BTAQ58M&usqp=CAU"
        },
        {
            id: 3,
            title: "Solid Surfaces",
            description: "Non-porous, doesn't stain and is easy to maintain.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWWW8w4RAohuZxaE6bOAXOrcLRR6pLCHhns60FhvIX1q21_R3JzI-Y1z-3b66BTAQ58M&usqp=CAU"
        }
    ];

    const handlesData = [
        {
            id: 1,
            title: "Regular Handles",
            description: "Low-maintenance and easy to use. These come in linear and classic designs.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5c3TNko52RUMZxP2Yls7gFrd-X0gtmE_XHw&s"
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
        setCurrentSlide((prev) => (prev + 1) % shutterFinishes.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + shutterFinishes.length) % shutterFinishes.length);
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
                    Give your kitchen a distinct look as per your wants. Choose from multiple finishes, handles and backsplashes.
                </Typography>

                {/* Shutter Finishes Section */}
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
                            Shutter Finishes
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
                            {shutterFinishes.map((finish) => (
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
                                    width: `${shutterFinishes.length * 100}%`
                                }}>
                                    {shutterFinishes.map((finish) => (
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
                                {shutterFinishes.map((_, index) => (
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

                {/* Countertops and Backsplashes Section */}
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
                            Countertops and Backsplashes
                        </Typography>
                        <Button
                            variant="text"
                            onClick={() => navigate("/designs/kitchen")}
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
                            {countertopsData.map((countertop) => (
                                <Box
                                    key={countertop.id}
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
                                        src={countertop.image}
                                        alt={countertop.title}
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
                                            {countertop.title}
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
                                            {countertop.description}
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
                                    width: `${countertopsData.length * 100}%`
                                }}>
                                    {countertopsData.map((countertop) => (
                                        <Box
                                            key={countertop.id}
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
                                                    src={countertop.image}
                                                    alt={countertop.title}
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
                                                        {countertop.title}
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
                                                        {countertop.description}
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
                                {countertopsData.map((_, index) => (
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

// Kitchen Design Steps Component
function KitchenDesignSteps() {
    const theme = useTheme();
    const navigate = useNavigate();

    const steps = [
        {
            icon: "https://cdn-icons-png.flaticon.com/128/3638/3638360.png",
            title: "Choose your kitchen size",
            description: "Select the size of your kitchen to help us understand the scope of work.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/5436/5436184.png",
            title: "Pick your kitchen style",
            description: "Choose from modern, traditional, or contemporary kitchen designs.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/1442/1442912.png",
            title: "Select cabinet materials",
            description: "Choose the materials and finishes that match your lifestyle and budget.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/489/489870.png",
            title: "Get your estimate",
            description: "Receive a detailed estimate for your dream kitchen renovation.",
        },
    ];

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.default,
                textAlign: "left",
            }}
        >
            <Container maxWidth="lg">
                {/* Heading */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 5,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "1.8rem", md: "2.2rem" },
                        fontFamily: theme.typography.fontFamily,
                        textAlign: "left"
                    }}
                >
                    Design your kitchen in 4 simple steps
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
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate("/price-calculators/kitchen")}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            textTransform: "none",
                            fontWeight: 600,
                            borderRadius: 10,
                            px: 4,
                            py: 1.5,
                            fontFamily: theme.typography.fontFamily,
                            "&:hover": {
                                backgroundColor: theme.palette.primary.dark,
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        Get Free Kitchen Estimate
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

// Kitchen Styles Carousel Component
function KitchenStylesCarousel() {
    const theme = useTheme();
    const navigate = useNavigate();

    const kitchenStyles = [
        {
            title: "Aarambh",
            description: "A pocket-friendly range with everything you need for a new beginning.",
            image: "https://img.freepik.com/premium-photo/white-contemporary-kitchen-with-glossy-paneling-green-white-walls-with-wine-rack-builtin-appliances-3d-rendering_295714-6742.jpg?semt=ais_hybrid&w=740&q=80",
        },
        {
            title: "Premium",
            description: "Elegant and sleek finishes on modular products that are sure to make your home stand out.",
            image: "https://images.jdmagicbox.com/quickquotes/images_main/t-shape-3d-modular-kitchen-grey-and-blue-2224134328-3ogmgffg.jpg",
        },
        {
            title: "Semi-modular",
            description: "Reinforced with aluminium this range allows easy insta countertops. Flexibility at its best.",
            image: "https://images.jdmagicbox.com/quickquotes/images_main/v-shape-3d-modular-kitchen-brown-and-white-2224135174-vwv5bagn.jpg",
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
                            Kitchen Styles for Every Home
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            sx={{
                                fontSize: "1.1rem",
                                fontFamily: theme.typography.fontFamily,
                            }}
                        >
                            Choose your preferred kitchen style and get instant design estimates
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() => navigate("/price-calculators/kitchen")}
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

                {/* Kitchen Styles Grid */}
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                    gap: 3
                }}>
                    {kitchenStyles.map((style, index) => (
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
            </Container>
        </Box>
    );
}


// Kitchen FAQs Component
function KitchenFAQs() {
    const theme = useTheme();

    const kitchenFAQs = [
        {
            id: 'kitchen-faq-1',
            question: 'How accurate is the kitchen design calculator?',
            answer: 'Our kitchen design calculator uses current market rates and material costs to provide accurate estimates. While the calculator gives you a reliable ballpark figure, the final quote may vary based on specific site conditions and custom requirements.',
        },
        {
            id: 'kitchen-faq-2',
            question: 'What factors does the calculator consider for kitchen pricing?',
            answer: 'The calculator considers kitchen size, style preferences, cabinet materials, countertop options, hardware, and additional features like backsplash and lighting. Each factor is weighted according to current market rates.',
        },
        {
            id: 'kitchen-faq-3',
            question: 'Can I customize my kitchen design after getting the estimate?',
            answer: 'Absolutely! You can modify your selections and get updated estimates. Our flexible approach allows you to adjust materials, finishes, or add/remove features. Simply update your preferences or discuss changes with our design team.',
        },
        {
            id: 'kitchen-faq-4',
            question: 'How long does a kitchen renovation take?',
            answer: 'Kitchen renovation timelines typically range from 3-6 weeks depending on the scope of work. The calculator will provide an estimated timeline based on your selected options and requirements.',
        },
        {
            id: 'kitchen-faq-5',
            question: 'Does the estimate include installation and labor?',
            answer: 'Yes, the estimate includes design, materials, labor, and installation services. Additional services like electrical work, plumbing modifications, or structural changes may incur extra charges.',
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
                    Kitchen Design FAQs
                </Typography>
            </Box>

            {/* FAQ Accordions */}
            <Box sx={{ width: '100%' }}>
                {kitchenFAQs.map((faq) => (
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
                    Our kitchen design experts are here to help you with any specific
                    questions about your kitchen renovation project.
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

// Main KnowYourKitchen Component
export default function KnowYourKitchen() {
    return (
        <div style={{ overflowX: "hidden", width: "100%" }}>
            <KitchenHero />
            <KitchenCalculatorIntro />
            <WhyChooseKitchen />
            <KitchenSliderSection />
            <KitchenTriangleSection />
            <CoreMaterialsSection />
            <AestheticsSection />
            <KitchenDesignSteps />
            <KitchenFAQs />
        </div>
    );
}