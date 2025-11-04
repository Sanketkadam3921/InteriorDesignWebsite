import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FeaturedProjectsCarousel from '../../common/FeaturedProjectsCarousel';

export default function HomePageFeatured() {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
            <Container maxWidth="xl">
                {/* Section Title */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '1.8rem', md: '3rem' },
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                        }}
                    >
                        Featured Projects
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{
                            maxWidth: 600,
                            margin: '0 auto',
                            lineHeight: 1.6,
                        }}
                    >
                        Discover our most exceptional projects showcasing the pinnacle of interior design excellence.
                    </Typography>
                </Box>

                {/* Featured Projects Carousel */}
                <FeaturedProjectsCarousel />

                {/* View All Projects Button */}
                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button
                        variant="outlined"
                        size="large"
                        onClick={() => navigate('/projects')}
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            borderRadius: '25px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                            '&:hover': {
                                borderColor: theme.palette.primary.dark,
                                backgroundColor: theme.palette.action.hover,
                            },
                        }}
                    >
                        View All Projects
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
