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
    useTheme
} from '@mui/material';
import { ArrowBack, Home, Palette } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function WardrobeFinishes() {
    const navigate = useNavigate();
    const theme = useTheme();

    const finishTypes = [
        {
            id: 1,
            title: "Wood Veneer Finishes",
            description: "Premium wood veneers that bring natural warmth and elegance to your wardrobe.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            features: ["Natural Wood Grain", "Premium Look", "Timeless Appeal"],
            price: "Starting from ₹1,500/sq ft"
        },
        {
            id: 2,
            title: "Laminated Finishes",
            description: "Durable and versatile finishes available in numerous colors and wood grain patterns.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            features: ["Scratch Resistant", "Easy Maintenance", "Wide Color Range"],
            price: "Starting from ₹900/sq ft"
        },
        {
            id: 3,
            title: "High Gloss Finishes",
            description: "Sleek, reflective surfaces that create a modern and luxurious wardrobe appearance.",
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            features: ["High Shine", "Contemporary Style", "Easy Cleaning"],
            price: "Starting from ₹1,800/sq ft"
        },
        {
            id: 4,
            title: "Matte Finishes",
            description: "Soft, non-reflective surfaces that provide a sophisticated and elegant wardrobe look.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            features: ["Fingerprint Resistant", "Modern Aesthetic", "Low Maintenance"],
            price: "Starting from ₹1,200/sq ft"
        }
    ];

    return (
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
                        onClick={() => navigate('/wardrobe/components')}
                    >
                        Wardrobe Components
                    </Link>
                    <Typography color="text.primary">Finishes</Typography>
                </Breadcrumbs>

                {/* Header */}
                <Box sx={{ mb: 4 }}>
                    <Button
                        startIcon={<ArrowBack />}
                        onClick={() => navigate('/wardrobe/components')}
                        sx={{ mb: 2 }}
                    >
                        Back to Wardrobe Components
                    </Button>
                    <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Wardrobe Finishes
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                        Explore our premium range of finishes to create the perfect look for your wardrobe
                    </Typography>
                </Box>

                {/* Finish Types Grid */}
                <Grid container spacing={4}>
                    {finishTypes.map((finish) => (
                        <Grid item xs={12} md={6} key={finish.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={finish.image}
                                    alt={finish.title}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography variant="h5" component="h2" sx={{ mb: 1, fontWeight: 'bold' }}>
                                        {finish.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                                        {finish.description}
                                    </Typography>
                                    
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
                                            Key Features:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {finish.features.map((feature, index) => (
                                                <Chip
                                                    key={index}
                                                    label={feature}
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{ fontSize: '0.75rem' }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                                        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                                            {finish.price}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{ textTransform: 'none' }}
                                        >
                                            Get Quote
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* CTA Section */}
                <Box
                    sx={{
                        mt: 6,
                        p: 4,
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: 2,
                        textAlign: 'center',
                        border: `1px solid ${theme.palette.divider}`
                    }}
                >
                    <Palette sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Want to See Finishes in Person?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Visit our showroom to touch and feel our premium finishes and make the perfect choice for your wardrobe.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate('/enquiries/quote-form')}
                        sx={{ textTransform: 'none', px: 4 }}
                    >
                        Schedule Showroom Visit
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
