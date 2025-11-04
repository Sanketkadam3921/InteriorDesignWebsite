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
import { ArrowBack, Home, Checkroom } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function WardrobeCabinets() {
    const navigate = useNavigate();
    const theme = useTheme();

    const cabinetTypes = [
        {
            id: 1,
            title: "Walk-in Wardrobes",
            description: "Spacious walk-in wardrobes designed to maximize storage and organization.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            features: ["Hanging Space", "Shoe Storage", "Accessory Drawers"],
            price: "Starting from ₹45,000"
        },
        {
            id: 2,
            title: "Built-in Wardrobes",
            description: "Custom-built wardrobes that seamlessly integrate with your room design.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            features: ["Space Efficient", "Custom Sizing", "Integrated Lighting"],
            price: "Starting from ₹35,000"
        },
        {
            id: 3,
            title: "Sliding Wardrobes",
            description: "Space-saving sliding door wardrobes perfect for modern bedrooms.",
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            features: ["Space Saving", "Smooth Sliding", "Mirror Options"],
            price: "Starting from ₹28,000"
        },
        {
            id: 4,
            title: "Modular Wardrobes",
            description: "Flexible modular systems that can be customized and reconfigured as needed.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            features: ["Modular Design", "Easy Assembly", "Expandable"],
            price: "Starting from ₹22,000"
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
                    <Typography color="text.primary">Cabinets</Typography>
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
                        Wardrobe Cabinets
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                        Discover our premium range of wardrobe cabinets designed for optimal storage and style
                    </Typography>
                </Box>

                {/* Cabinet Types Grid */}
                <Grid container spacing={4}>
                    {cabinetTypes.map((cabinet) => (
                        <Grid item xs={12} md={6} key={cabinet.id}>
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
                                    image={cabinet.image}
                                    alt={cabinet.title}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography variant="h5" component="h2" sx={{ mb: 1, fontWeight: 'bold' }}>
                                        {cabinet.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                                        {cabinet.description}
                                    </Typography>
                                    
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
                                            Key Features:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {cabinet.features.map((feature, index) => (
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
                                            {cabinet.price}
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
                    <Checkroom sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Ready to Design Your Dream Wardrobe?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Our expert designers will help you create the perfect wardrobe solution for your space and storage needs.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate('/enquiries/quote-form')}
                        sx={{ textTransform: 'none', px: 4 }}
                    >
                        Start Your Wardrobe Design
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
