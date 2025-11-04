import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DesignCategories() {
    const navigate = useNavigate();

    const categories = [
        {
            id: 'living',
            title: 'Living Room',
            description: 'Create inviting and comfortable living spaces for relaxation and entertainment',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
            count: 24,
            popular: true
        },
        {
            id: 'bedroom',
            title: 'Bedroom',
            description: 'Design peaceful and restful bedrooms that promote better sleep and relaxation',
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500',
            count: 18,
            popular: true
        },
        {
            id: 'kitchen',
            title: 'Kitchen',
            description: 'Functional and beautiful kitchens that make cooking a pleasure',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
            count: 15,
            popular: false
        },
        {
            id: 'bathroom',
            title: 'Bathroom',
            description: 'Luxurious and practical bathroom designs for daily comfort',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500',
            count: 12,
            popular: false
        },
        {
            id: 'office',
            title: 'Home Office',
            description: 'Productive workspaces designed for focus and creativity',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500',
            count: 8,
            popular: true
        },
        {
            id: 'dining',
            title: 'Dining Room',
            description: 'Elegant dining spaces for memorable meals and gatherings',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500',
            count: 10,
            popular: false
        }
    ];

    return (
        <Container maxWidth="lg" sx={{
            py: { xs: 0, sm: 0, md: 4 },
        }}
        >
            <Typography variant="h3" component="h1" gutterBottom textAlign="center">
                Design Categories
            </Typography>
            <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
                Explore our design categories and find inspiration for your space
            </Typography>

            {/* Popular Categories */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom>
                    Popular Categories
                </Typography>
                <Grid container spacing={4}>
                    {categories.filter(cat => cat.popular).map((category) => (
                        <Grid item xs={12} sm={6} md={4} key={category.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: 4,
                                        transition: 'all 0.3s ease-in-out'
                                    }
                                }}
                                onClick={() => navigate(`/designs?category=${category.id}`)}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={category.image}
                                    alt={category.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom>
                                        {category.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {category.description}
                                    </Typography>
                                    <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                                        {category.count} designs available
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/designs?category=${category.id}`);
                                        }}
                                    >
                                        View Designs
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* All Categories */}
            <Box>
                <Typography variant="h4" gutterBottom>
                    All Categories
                </Typography>
                <Grid container spacing={3}>
                    {categories.map((category) => (
                        <Grid item xs={12} sm={6} md={4} key={category.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: 2,
                                        transition: 'all 0.3s ease-in-out'
                                    }
                                }}
                                onClick={() => navigate(`/designs?category=${category.id}`)}
                            >
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={category.image}
                                    alt={category.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom>
                                        {category.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                        {category.description}
                                    </Typography>
                                    <Typography variant="body2" color="primary">
                                        {category.count} designs
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* CTA Section */}
            <Box sx={{ textAlign: 'center', py: 6, mt: 6, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Need Help Choosing?
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Our design experts can help you choose the perfect style for your space.
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/contact')}
                    sx={{ px: 4 }}
                >
                    Get Design Consultation
                </Button>
            </Box>
        </Container>
    );
}

