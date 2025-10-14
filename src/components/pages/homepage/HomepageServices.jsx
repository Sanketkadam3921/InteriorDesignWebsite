import React from 'react';
import {
    Container,
    Typography,
    Box,
    IconButton,
    useTheme,
    useMediaQuery
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

export default function HomeServices() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const services = [
        {
            title: 'Modular Interiors',
            description: 'Functional kitchen, wardrobe and storage',
            image: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&auto=format&fit=crop&q=60',
            path: '/offerings/modular-interiors',
        },
        {
            title: 'Full Home Interiors',
            description: 'Turnkey interior solutions for your home',
            image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500&auto=format&fit=crop&q=60',
            path: '/designs/full-home-interiors',
        },
        {
            title: 'Luxury Interiors',
            description: 'Tailored interiors that redefine elegance',
            image: 'https://plus.unsplash.com/premium_photo-1661902934269-17eaf4b04f9f?q=80&w=996&auto=format&fit=crop',
            path: '/designs/luxury-interiors',
        },
        {
            title: 'Renovations',
            description: 'Expert solutions to upgrade your home',
            image: 'https://images.unsplash.com/photo-1618832515490-e181c4794a45?q=80&w=1470&auto=format&fit=crop',
            path: '/renovations',
        },
    ];

    return (
        <Box sx={{ backgroundColor: '#f9f9f9', py: { xs: 4, md: 12 } }}>
            <Container maxWidth="lg">
                {/* Main heading */}
                <Typography
                    variant="h3"
                    component="h2"
                    textAlign="center"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        mb: { xs: 2, md: 4 },
                        fontSize: { xs: '1.8rem', md: '2.5rem' },
                    }}
                >
                    One-stop shop for all things interiors
                </Typography>

                {/* Subheading */}
                <Typography
                    variant="h6"
                    textAlign="center"
                    color="text.secondary"
                    sx={{ mb: { xs: 4, md: 8 }, px: { xs: 2, md: 0 } }}
                >
                    Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office.
                    With a wide range of furniture & decor, we have your back from start to finish.
                </Typography>

                {/* Service items */}
                {isMobile ? (
                    // Mobile view (horizontal scroll)
                    <Box
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            gap: 2,
                            scrollSnapType: 'x mandatory',
                            paddingBottom: 1,
                            '&::-webkit-scrollbar': { display: 'none' },
                        }}
                    >
                        {services.map((service, index) => (
                            <Box
                                key={index}
                                onClick={() => navigate(service.path)}
                                sx={{
                                    flex: '0 0 75%',
                                    scrollSnapAlign: 'start',
                                    backgroundColor: '#fff',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={service.image}
                                    alt={service.title}
                                    sx={{
                                        width: '100%',
                                        height: 150,
                                        objectFit: 'cover',
                                    }}
                                />
                                <Box
                                    sx={{
                                        p: 2,
                                        flexGrow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography color="text.secondary" variant="body2">
                                            {service.description}
                                        </Typography>
                                        <IconButton
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(service.path);
                                            }}
                                            sx={{
                                                color: 'primary.main',
                                                '&:hover': { backgroundColor: 'transparent' },
                                                p: 0,
                                            }}
                                        >
                                            <ChevronRightIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    // Desktop view (grid layout)
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                        {services.map((service, index) => (
                            <Box
                                key={index}
                                onClick={() => navigate(service.path)}
                                sx={{
                                    flex: '0 0 23%',
                                    backgroundColor: '#fff',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={service.image}
                                    alt={service.title}
                                    sx={{
                                        width: '100%',
                                        height: 200,
                                        objectFit: 'cover',
                                    }}
                                />
                                <Box
                                    sx={{
                                        p: 3,
                                        flexGrow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography color="text.secondary">
                                            {service.description}
                                        </Typography>
                                        <IconButton
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(service.path);
                                            }}
                                            sx={{
                                                color: 'primary.main',
                                                '&:hover': { backgroundColor: 'transparent' },
                                                p: 0,
                                            }}
                                        >
                                            <ChevronRightIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                )}
            </Container>
        </Box>
    );
}
