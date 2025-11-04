import React from 'react';
import {
    Box,
    Typography,
    Container,
    Breadcrumbs,
    styled,
    Card,
    CardMedia,
    CardContent
} from '@mui/material';
import { Link } from 'react-router-dom';
import themeNeutral from '../../../../themeNeutral';

// Styled components for custom styling
const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '70vh',
    minHeight: '400px',
    backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
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
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
    },
}));

export default function LearnMore() {
    return (
        <Box>
            {/* Hero Section */}
            <HeroSection>
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
                        variant="h1"
                        component="h1"
                        sx={{
                            fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' },
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                            mb: 4,
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        }}
                    >
                        Learn More About Our Services
                    </Typography>

                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            fontWeight: '400',
                            lineHeight: 1.6,
                            color: 'white',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                            maxWidth: '600px',
                            mx: 'auto',
                        }}
                    >
                        Discover how we can transform your space with our comprehensive interior design solutions
                    </Typography>
                </Box>
            </HeroSection>

            {/* Main Content Section */}
            <Container maxWidth="lg" sx={{ py: 6 }}>
                {/* Breadcrumb Navigation */}
                <Box sx={{ mb: 4 }}>
                    <Breadcrumbs
                        separator="/"
                        aria-label="breadcrumb"
                        sx={{
                            '& .MuiBreadcrumbs-separator': {
                                color: '#666',
                            },
                        }}
                    >
                        <Link
                            to="/"
                            style={{
                                textDecoration: 'none',
                                color: themeNeutral.palette.primary.main,
                                fontSize: '14px',
                                fontWeight: '500',
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            to="/offerings"
                            style={{
                                textDecoration: 'none',
                                color: themeNeutral.palette.primary.main,
                                fontSize: '14px',
                                fontWeight: '500',
                            }}
                        >
                            Offerings
                        </Link>
                        <Typography
                            sx={{
                                color: themeNeutral.palette.text.primary,
                                fontSize: '14px',
                                fontWeight: '500',
                            }}
                        >
                            Learn More
                        </Typography>
                    </Breadcrumbs>
                </Box>

                {/* Main Content */}
                <Box sx={{ maxWidth: '100%' }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            fontWeight: 'bold',
                            color: themeNeutral.palette.text.primary,
                            lineHeight: 1.2,
                            mb: 3,
                        }}
                    >
                        Everything You Need to Know
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.1rem',
                            color: themeNeutral.palette.text.secondary,
                            lineHeight: 1.6,
                            maxWidth: '900px',
                            mb: 4,
                        }}
                    >
                        At KalaKruti, we believe in creating spaces that reflect your personality and lifestyle.
                        Our comprehensive approach to interior design ensures that every project is completed
                        with attention to detail and quality craftsmanship.
                    </Typography>
                </Box>

                {/* What we offer section */}
                <Box sx={{
                    mt: 8,
                    backgroundColor: '#f8f9fa',
                    borderRadius: 2,
                    p: 4
                }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontSize: { xs: '1.8rem', md: '2.2rem' },
                            fontWeight: 'bold',
                            color: '#505B5F',
                            mb: 4
                        }}
                    >
                        What we offer
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: 3,
                            justifyContent: 'center',
                            alignItems: 'stretch',
                            flexWrap: { xs: 'wrap', md: 'nowrap' },
                            '& > *': {
                                flex: '1 1 300px',
                                maxWidth: '350px',
                                minWidth: '280px'
                            }
                        }}
                    >
                        {/* Service Card 1 - Design */}
                        <Card
                            sx={{
                                height: '400px',
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Interior Design"
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ p: 2.5, height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#505B5F',
                                            mb: 1,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Interior Design
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.5, fontSize: '0.9rem', mb: 2 }}
                                    >
                                        Expert design consultation and space planning to create your dream home.
                                    </Typography>
                                    <Typography
                                        component={Link}
                                        to="/designs"
                                        sx={{
                                            color: themeNeutral.palette.primary.main,
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            }
                                        }}
                                    >
                                        Learn more →
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Service Card 2 - Construction */}
                        <Card
                            sx={{
                                height: '400px',
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Construction & Installation"
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ p: 2.5, height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#505B5F',
                                            mb: 1,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Construction & Installation
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.5, fontSize: '0.9rem', mb: 2 }}
                                    >
                                        Professional construction and installation services for all your interior needs.
                                    </Typography>
                                    <Typography
                                        component={Link}
                                        to="/contact"
                                        sx={{
                                            color: themeNeutral.palette.primary.main,
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            }
                                        }}
                                    >
                                        Learn more →
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Service Card 3 - Kitchen */}
                        <Card
                            sx={{
                                height: '400px',
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Kitchen Design"
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ p: 2.5, height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#505B5F',
                                            mb: 1,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Kitchen Design
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.5, fontSize: '0.9rem', mb: 2 }}
                                    >
                                        Modern kitchen designs with premium materials and smart storage solutions.
                                    </Typography>
                                    <Typography
                                        component={Link}
                                        to="/designs/kitchen"
                                        sx={{
                                            color: themeNeutral.palette.primary.main,
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            }
                                        }}
                                    >
                                        Learn more →
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Description below cards */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            color: '#666',
                            lineHeight: 1.3,
                            mt: 4,
                            textAlign: 'left',
                            maxWidth: '100%'
                        }}
                    >
                        Does your project scope require services like electrical or plumbing? We'll take care of it. Happen to need services beyond the scope of your project? With KalaKruti's excellent partner network it's easy to find the right people for your job.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
