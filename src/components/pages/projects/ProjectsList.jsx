import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, TextField, InputAdornment } from '@mui/material';
import { Search, LocationOn, CalendarToday } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function ProjectsList() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Residential', 'Commercial', 'Office', 'Retail'];

    const projects = [
        {
            id: 1,
            title: 'Modern Apartment Renovation',
            category: 'Residential',
            location: 'Mumbai',
            date: '2024',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
            description: 'Complete renovation of a 3BHK apartment with modern amenities and smart home features.'
        },
        {
            id: 2,
            title: 'Corporate Office Design',
            category: 'Commercial',
            location: 'Delhi',
            date: '2024',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500',
            description: 'Contemporary office space designed for productivity and employee well-being.'
        },
        {
            id: 3,
            title: 'Luxury Villa Interior',
            category: 'Residential',
            location: 'Bangalore',
            date: '2023',
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500',
            description: 'High-end villa interior with premium finishes and custom furniture.'
        },
        {
            id: 4,
            title: 'Restaurant Design',
            category: 'Retail',
            location: 'Pune',
            date: '2023',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500',
            description: 'Modern restaurant design with focus on customer experience and ambiance.'
        },
        {
            id: 5,
            title: 'Tech Startup Office',
            category: 'Office',
            location: 'Hyderabad',
            date: '2024',
            image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500',
            description: 'Innovative office design for a growing tech startup with flexible workspaces.'
        },
        {
            id: 6,
            title: 'Family Home Makeover',
            category: 'Residential',
            location: 'Chennai',
            date: '2023',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
            description: 'Complete home transformation for a family of four with functional design.'
        }
    ];

    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom textAlign="center">
                Our Projects
            </Typography>
            <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
                Explore our portfolio of successful interior design projects
            </Typography>

            {/* Search and Filter Section */}
            <Box sx={{ mb: 4 }}>
                <TextField
                    fullWidth
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ mb: 2 }}
                />

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                    {categories.map((category) => (
                        <Chip
                            key={category}
                            label={category}
                            clickable
                            color={selectedCategory === category ? 'primary' : 'default'}
                            onClick={() => setSelectedCategory(category)}
                        />
                    ))}
                </Box>
            </Box>

            {/* Projects Grid */}
            <Grid container spacing={4}>
                {filteredProjects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
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
                            onClick={() => navigate(`/projects/${project.id}`)}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={project.image}
                                alt={project.title}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                    <Chip label={project.category} size="small" color="primary" />
                                </Box>
                                <Typography variant="h6" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {project.description}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                    <LocationOn fontSize="small" color="action" />
                                    <Typography variant="body2" color="text.secondary">
                                        {project.location}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <CalendarToday fontSize="small" color="action" />
                                    <Typography variant="body2" color="text.secondary">
                                        {project.date}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {filteredProjects.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 8 }}>
                    <Typography variant="h6" color="text.secondary">
                        No projects found matching your criteria.
                    </Typography>
                </Box>
            )}
        </Container>
    );
}

