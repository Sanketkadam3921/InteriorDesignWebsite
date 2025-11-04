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
import { ArrowBack, Home, Build } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function WardrobeHandles() {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleTypes = [
        {
            id: 1,
            title: "Modern Linear Handles",
            description: "Contemporary linear handles that add sleek sophistication to your wardrobe doors.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            materials: ["Brushed Steel", "Matte Black", "Chrome"],
            price: "Starting from ₹300"
        },
        {
            id: 2,
            title: "Classic Round Knobs",
            description: "Timeless round knobs that provide elegant simplicity and easy operation.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            materials: ["Brass", "Nickel", "Ceramic"],
            price: "Starting from ₹200"
        },
        {
            id: 3,
            title: "Recessed Handles",
            description: "Flush-mounted handles that create a seamless, handle-free appearance.",
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            materials: ["Aluminum", "Stainless Steel", "Powder Coated"],
            price: "Starting from ₹500"
        },
        {
            id: 4,
            title: "Luxury Pull Handles",
            description: "Premium pull handles designed for comfort and style in high-end wardrobes.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            materials: ["Solid Brass", "Antique Bronze", "Polished Chrome"],
            price: "Starting from ₹800"
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
                    <Typography color="text.primary">Handles</Typography>
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
                        Wardrobe Handles
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                        Choose from our premium collection of handles to complete your wardrobe's elegant look
                    </Typography>
                </Box>

                {/* Handle Types Grid */}
                <Grid container spacing={4}>
                    {handleTypes.map((handle) => (
                        <Grid item xs={12} md={6} key={handle.id}>
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
                                    image={handle.image}
                                    alt={handle.title}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography variant="h5" component="h2" sx={{ mb: 1, fontWeight: 'bold' }}>
                                        {handle.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                                        {handle.description}
                                    </Typography>
                                    
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
                                            Available Materials:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {handle.materials.map((material, index) => (
                                                <Chip
                                                    key={index}
                                                    label={material}
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{ fontSize: '0.75rem' }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                                        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                                            {handle.price}
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
                    <Build sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Need Help Choosing the Right Handles?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Our design experts can help you select the perfect handles that complement your wardrobe style and functionality.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate('/enquiries/quote-form')}
                        sx={{ textTransform: 'none', px: 4 }}
                    >
                        Consult Our Experts
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
