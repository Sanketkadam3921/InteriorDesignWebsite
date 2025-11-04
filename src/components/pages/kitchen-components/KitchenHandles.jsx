import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    Chip,
    Breadcrumbs,
    Link,
    useTheme,
    styled
} from '@mui/material';
import { ArrowBack, Home, Kitchen } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Styled components for hero section
const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '50vh',
    minHeight: '250px',
    backgroundImage: `url('https://www.decorpot.com/images/1788613151everything-you-need-to-know-about-modular-kitchen-handle-designs.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
}));

export default function KitchenHandles() {
    const navigate = useNavigate();
    const theme = useTheme();

    const handlesData = [
        {
            id: 1,
            title: "Modern Chrome Handles",
            description: "Sleek chrome handles with contemporary design for modern kitchen aesthetics.",
            image: "https://i.pinimg.com/474x/8a/6c/5d/8a6c5d84192697c29d98a1d457164ad3.jpg",
            tags: ["Modern", "Chrome"],
        },
        {
            id: 2,
            title: "Classic Brass Knobs",
            description: "Traditional brass knobs that add warmth and elegance to your kitchen cabinets.",
            image: "https://www.doorandcabinethardware.com.au/wp-content/uploads/2016/10/Bar-Cabinet-Handles.jpg",
            tags: ["Classic", "Brass"],
        },
        {
            id: 3,
            title: "Minimalist Black Handles",
            description: "Clean black handles with minimalist design for contemporary kitchen spaces.",
            image: "https://i.pinimg.com/474x/8a/6c/5d/8a6c5d84192697c29d98a1d457164ad3.jpg",
            tags: ["Minimalist", "Black"],
        },
        {
            id: 4,
            title: "Vintage Copper Pulls",
            description: "Antique-style copper pulls that bring character and charm to your kitchen.",
            image: "https://img-new.cgtrader.com/items/4252515/3ff973f505/large/handles-for-kitchen-cabinets-or-furniture-doors-drawer-3d-model-3d-model-3ff973f505.webp",
            tags: ["Vintage", "Copper"],
        },
        {
            id: 5,
            title: "Stainless Steel Bars",
            description: "Durable stainless steel bar handles perfect for high-traffic kitchen areas.",
            image: "https://www.modelplusmodel.com/images/detailed/3/mpm_p01_02.jpg",
            tags: ["Stainless Steel", "Durable"],
        },
        {
            id: 6,
            title: "Wooden Knobs",
            description: "Natural wooden knobs that add organic warmth to your kitchen design.",
            image: "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2630147-original/short-base-unit.jpg",
            tags: ["Wooden", "Natural"],
        }
    ];

    const sectionDescription = 'Explore our carefully curated collection of kitchen handles and knobs that combine functionality with style. From modern chrome to classic brass, find the perfect finishing touch for your kitchen cabinets.';

    return (
        <Box>
            {/* Hero Section */}
            <HeroSection>
                {/* Main Content */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        textAlign: 'center',
                        color: 'white',
                        maxWidth: '800px',
                        px: { xs: 3, md: 4 },
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' },
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                            mb: 3,
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                        }}
                    >
                        Kitchen Handles
                    </Typography>

                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            fontWeight: 400,
                            lineHeight: 1.4,
                            mb: 4,
                            color: 'white',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                            maxWidth: '600px',
                            mx: 'auto',
                        }}
                    >
                        Explore a wide range of tastefully designed handles and knobs.
                    </Typography>
                </Box>
            </HeroSection>

            {/* Main Content */}
            <Box sx={{ pt: 2, pb: 4 }}>
                <Container maxWidth="lg">
                    {/* Breadcrumbs */}
                    <Breadcrumbs sx={{ mb: 3 }}>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => navigate('/')}
                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                        >
                            <Home fontSize="small" />
                            Home
                        </Link>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => navigate('/offerings')}
                        >
                            Offerings
                        </Link>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => navigate('/kitchen/components')}
                        >
                            Kitchen Components
                        </Link>
                        <Typography color="text.primary">Handles</Typography>
                    </Breadcrumbs>

                    {/* Section Title */}
                    <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: theme.palette.text.primary, fontSize: { xs: '1.3rem', md: '1.5rem' } }}>
                        Kitchen Handles & Knobs
                    </Typography>

                    {/* Section Description */}
                    <Typography variant="body1" sx={{ mb: 4, color: theme.palette.text.secondary, lineHeight: 1.6, maxWidth: '800px' }}>
                        {sectionDescription}
                    </Typography>

                    {/* Handles Grid */}
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 3,
                        justifyContent: { xs: 'center', md: 'flex-start' }
                    }}>
                        {handlesData.map((handle) => (
                            <Card
                                key={handle.id}
                                onClick={() => navigate(`/kitchen/components/handles/${handle.id}`)}
                                sx={{
                                    width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' },
                                    maxWidth: '350px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: 'white',
                                    borderRadius: 2,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                    }
                                }}
                            >
                                <Box sx={{
                                    height: '200px',
                                    overflow: 'hidden',
                                    borderRadius: '8px 8px 0 0'
                                }}>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image={handle.image}
                                        alt={handle.title}
                                        sx={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            mb: 1.5,
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem',
                                            color: theme.palette.text.primary,
                                            lineHeight: 1.3
                                        }}
                                    >
                                        {handle.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mb: 2,
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.4,
                                            flexGrow: 1
                                        }}
                                    >
                                        {handle.description}
                                    </Typography>

                                    <Box sx={{ mb: 2 }}>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {handle.tags.map((tag, index) => (
                                                <Chip
                                                    key={index}
                                                    label={tag}
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{
                                                        fontSize: '0.7rem',
                                                        height: '24px',
                                                        backgroundColor: '#f5f5f5',
                                                        borderColor: '#e0e0e0',
                                                        color: theme.palette.text.secondary,
                                                        '& .MuiChip-label': {
                                                            px: 1
                                                        }
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>


                </Container>
            </Box>
        </Box>
    );
}
