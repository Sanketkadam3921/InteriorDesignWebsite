import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, TextField, InputAdornment, Tabs, Tab } from '@mui/material';
import { Search, FilterList } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function DesignList() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTab, setSelectedTab] = useState(0);

    const designCategories = [
        { label: 'All Designs', value: 'all' },
        { label: 'Living Room', value: 'living' },
        { label: 'Bedroom', value: 'bedroom' },
        { label: 'Kitchen', value: 'kitchen' },
        { label: 'Bathroom', value: 'bathroom' },
        { label: 'Office', value: 'office' }
    ];

    const designs = [
        {
            id: 1,
            title: 'Modern Minimalist Living Room',
            category: 'living',
            style: 'Modern',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
            description: 'Clean lines and neutral colors create a serene living space',
            price: '₹2,50,000'
        },
        {
            id: 2,
            title: 'Luxury Master Bedroom',
            category: 'bedroom',
            style: 'Luxury',
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500',
            description: 'Elegant bedroom design with premium finishes and custom furniture',
            price: '₹3,20,000'
        },
        {
            id: 3,
            title: 'Contemporary Kitchen Design',
            category: 'kitchen',
            style: 'Contemporary',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
            description: 'Modern kitchen with smart storage and premium appliances',
            price: '₹4,50,000'
        },
        {
            id: 4,
            title: 'Spa-like Bathroom',
            category: 'bathroom',
            style: 'Spa',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500',
            description: 'Relaxing bathroom design with natural materials and luxury fixtures',
            price: '₹1,80,000'
        },
        {
            id: 5,
            title: 'Home Office Setup',
            category: 'office',
            style: 'Modern',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500',
            description: 'Productive home office with ergonomic furniture and smart lighting',
            price: '₹1,50,000'
        },
        {
            id: 6,
            title: 'Scandinavian Living Room',
            category: 'living',
            style: 'Scandinavian',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
            description: 'Cozy Scandinavian design with natural wood and light colors',
            price: '₹2,20,000'
        }
    ];

    const filteredDesigns = designs.filter(design => {
        const matchesSearch = design.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            design.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedTab === 0 || design.category === designCategories[selectedTab].value;
        return matchesSearch && matchesCategory;
    });

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom textAlign="center">
                Design Gallery
            </Typography>
            <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
                Explore our curated collection of interior design concepts
            </Typography>

            {/* Search Section */}
            <Box sx={{ mb: 4 }}>
                <TextField
                    fullWidth
                    placeholder="Search designs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ mb: 3 }}
                />

                {/* Category Tabs */}
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{ borderBottom: 1, borderColor: 'divider' }}
                >
                    {designCategories.map((category, index) => (
                        <Tab key={category.value} label={category.label} />
                    ))}
                </Tabs>
            </Box>

            {/* Designs Grid */}
            <Grid container spacing={4}>
                {filteredDesigns.map((design) => (
                    <Grid item xs={12} sm={6} md={4} key={design.id}>
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
                            onClick={() => navigate(`/designs/${design.id}`)}
                        >
                            <CardMedia
                                component="img"
                                height="250"
                                image={design.image}
                                alt={design.title}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                    <Chip label={design.style} size="small" color="primary" />
                                    <Chip label={design.price} size="small" variant="outlined" />
                                </Box>
                                <Typography variant="h6" gutterBottom>
                                    {design.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {design.description}
                                </Typography>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/designs/${design.id}`);
                                    }}
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {filteredDesigns.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 8 }}>
                    <Typography variant="h6" color="text.secondary">
                        No designs found matching your criteria.
                    </Typography>
                </Box>
            )}

            {/* CTA Section */}
            <Box sx={{ textAlign: 'center', py: 6, mt: 4, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Don't see what you're looking for?
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    We can create custom designs tailored to your specific needs and preferences.
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/contact')}
                    sx={{ px: 4 }}
                >
                    Request Custom Design
                </Button>
            </Box>
        </Container>
    );
}

