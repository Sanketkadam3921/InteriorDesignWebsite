import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Breadcrumbs, Link } from '@mui/material';
import { ArrowBack, LocationOn, CalendarToday, Person } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock project data - in real app, this would come from API
    const project = {
        id: parseInt(id),
        title: 'Modern Apartment Renovation',
        category: 'Residential',
        location: 'Mumbai',
        date: '2024',
        client: 'Mr. & Mrs. Sharma',
        area: '1200 sq ft',
        duration: '3 months',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        description: 'Complete renovation of a 3BHK apartment with modern amenities and smart home features. This project involved transforming a traditional apartment into a contemporary living space that maximizes natural light and functionality.',
        longDescription: 'This comprehensive renovation project involved complete transformation of a 3BHK apartment in Mumbai. The design focused on creating open, airy spaces that maximize natural light while maintaining privacy. Key features include smart home automation, custom built-in storage solutions, and premium finishes throughout. The kitchen was completely redesigned with modern appliances and efficient workflow, while the living area features a seamless indoor-outdoor connection. The master bedroom includes a walk-in closet and en-suite bathroom with luxury fixtures.',
        images: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'
        ],
        features: [
            'Smart Home Automation',
            'Custom Built-in Storage',
            'Premium Finishes',
            'Energy Efficient Lighting',
            'Modern Kitchen Design',
            'Luxury Bathroom Fixtures'
        ]
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Breadcrumbs */}
            <Breadcrumbs sx={{ mb: 3 }}>
                <Link
                    color="inherit"
                    href="/"
                    onClick={(e) => { e.preventDefault(); navigate('/'); }}
                    sx={{ cursor: 'pointer' }}
                >
                    Home
                </Link>
                <Link
                    color="inherit"
                    href="/projects"
                    onClick={(e) => { e.preventDefault(); navigate('/projects'); }}
                    sx={{ cursor: 'pointer' }}
                >
                    Projects
                </Link>
                <Typography color="text.primary">{project.title}</Typography>
            </Breadcrumbs>

            {/* Back Button */}
            <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate('/projects')}
                sx={{ mb: 3 }}
            >
                Back to Projects
            </Button>

            {/* Project Header */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    {project.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mb: 2 }}>
                    <Chip label={project.category} color="primary" />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOn fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                            {project.location}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <CalendarToday fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                            {project.date}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Main Image */}
            <Card sx={{ mb: 4 }}>
                <CardMedia
                    component="img"
                    height="400"
                    image={project.image}
                    alt={project.title}
                />
            </Card>

            {/* Project Details Grid */}
            <Grid container spacing={4} sx={{ mb: 4 }}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" gutterBottom>
                        Project Overview
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {project.description}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {project.longDescription}
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Project Details
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Client
                                    </Typography>
                                    <Typography variant="body1">
                                        {project.client}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Area
                                    </Typography>
                                    <Typography variant="body1">
                                        {project.area}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Duration
                                    </Typography>
                                    <Typography variant="body1">
                                        {project.duration}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Category
                                    </Typography>
                                    <Typography variant="body1">
                                        {project.category}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Features */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Key Features
                </Typography>
                <Grid container spacing={2}>
                    {project.features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="body1">
                                        {feature}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Gallery */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Project Gallery
                </Typography>
                <Grid container spacing={2}>
                    {project.images.map((image, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={image}
                                    alt={`${project.title} - Image ${index + 1}`}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* CTA */}
            <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Interested in a similar project?
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/contact')}
                    sx={{ px: 4 }}
                >
                    Get a Quote
                </Button>
            </Box>
        </Container>
    );
}

