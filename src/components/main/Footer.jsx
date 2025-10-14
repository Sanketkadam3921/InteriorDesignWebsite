import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Link,
    IconButton,
    useTheme
} from '@mui/material';
import {
    Facebook,
    Instagram,
    LinkedIn,
    YouTube,
    Phone,
    Email
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
    const theme = useTheme();

    return (
        <Box component="footer" sx={{ mt: 'auto' }}>
            {/* Main Footer */}
            <Box
                sx={{
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.secondary.contrastText,
                    py: { xs: 8, md: 10 },
                }}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                        px: { xs: 3, sm: 6, md: 10, lg: 15 },
                    }}
                >
                    <Grid container spacing={6}>
                        {/* LOGO + SOCIAL MEDIA */}
                        <Grid item xs={12} md={2.4}>
                            <Box sx={{ mb: 5 }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        fontWeight: 'bold',
                                        fontSize: { xs: '2.2rem', md: '2.5rem' },
                                        letterSpacing: '0.1em',
                                        mb: 1,
                                    }}
                                >
                                    KALAKRUTI
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        fontSize: { xs: '1.1rem', md: '1.2rem' },
                                        letterSpacing: '0.2em',
                                        opacity: 0.8,
                                    }}
                                >
                                    STUDIO
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                                <IconButton
                                    component="a"
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                                    }}
                                >
                                    <Facebook />
                                </IconButton>
                                <IconButton
                                    component="a"
                                    href="https://www.instagram.com/_kalakruti_studio_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                                    }}
                                >
                                    <Instagram />
                                </IconButton>
                                <IconButton
                                    component="a"
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                                    }}
                                >
                                    <LinkedIn />
                                </IconButton>
                                <IconButton
                                    component="a"
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                                    }}
                                >
                                    <YouTube />
                                </IconButton>
                            </Box>
                        </Grid>

                        {/* OFFERINGS & INSPIRATION */}
                        <Grid item xs={12} sm={6} md={2.4}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.secondary.contrastText,
                                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                                    fontWeight: 600,
                                    mb: 3,
                                    letterSpacing: '0.05em',
                                }}
                            >
                                OFFERINGS & INSPIRATION
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Link
                                    component={RouterLink}
                                    to="/offerings"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' },
                                    }}
                                >
                                    Interiors
                                </Link>
                                <Link
                                    component={RouterLink}
                                    to="/designs"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' },
                                    }}
                                >
                                    Design Ideas
                                </Link>
                            </Box>
                        </Grid>

                        {/* COMPANY */}
                        <Grid item xs={12} sm={6} md={2.4}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.secondary.contrastText,
                                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                                    fontWeight: 600,
                                    mb: 3,
                                    letterSpacing: '0.05em',
                                }}
                            >
                                COMPANY
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Link component={RouterLink} to="/how-it-works" sx={linkStyle(theme)}>
                                    How it works
                                </Link>
                                <Link component={RouterLink} to="/faq" sx={linkStyle(theme)}>
                                    FAQ
                                </Link>
                                <Link component={RouterLink} to="/aboutus" sx={linkStyle(theme)}>
                                    About Us
                                </Link>
                                <Link component={RouterLink} to="/projects" sx={linkStyle(theme)}>
                                    Our Projects
                                </Link>
                                <Link component={RouterLink} to="/contact" sx={linkStyle(theme)}>
                                    Contact Us
                                </Link>
                            </Box>
                        </Grid>

                        {/* TOOLS */}
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.secondary.contrastText,
                                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                                    fontWeight: 600,
                                    mb: 3,
                                    letterSpacing: '0.05em',
                                }}
                            >
                                TOOLS
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Link
                                    component={RouterLink}
                                    to="/price-calculators"
                                    sx={linkStyle(theme)}
                                >
                                    Price Calculator
                                </Link>
                                <Link
                                    component={RouterLink}
                                    to="/enquiries/quote-form"
                                    sx={linkStyle(theme)}
                                >
                                    Get Quote
                                </Link>
                            </Box>
                        </Grid>

                        {/* CONTACT US */}
                        <Grid item xs={12} sm={6} md={2.8}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.secondary.contrastText,
                                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                                    fontWeight: 600,
                                    mb: 3,
                                    letterSpacing: '0.05em',
                                }}
                            >
                                CONTACT US
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Phone sx={{ fontSize: '1.3rem', opacity: 0.8 }} />
                                    <Link
                                        href="tel:+91-9876543210"
                                        sx={linkStyle(theme)}
                                    >
                                        +91-9876543210
                                    </Link>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Email sx={{ fontSize: '1.3rem', opacity: 0.8 }} />
                                    <Link
                                        href="mailto:care@kalakruti.com"
                                        sx={linkStyle(theme)}
                                    >
                                        care@kalakruti.com
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* COPYRIGHT */}
                    <Box
                        sx={{
                            borderTop: 1,
                            borderColor: 'rgba(255,255,255,0.2)',
                            mt: 6,
                            pt: 5,
                            textAlign: 'center',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: theme.palette.secondary.contrastText,
                                opacity: 0.8,
                                fontSize: { xs: '0.9rem', md: '1rem' },
                            }}
                        >
                            © 2024 Kalakruti Studio. All rights reserved.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

// Helper for consistent link styling
const linkStyle = (theme) => ({
    color: theme.palette.secondary.contrastText,
    textDecoration: 'none',
    fontSize: { xs: '1rem', md: '1.1rem' },
    opacity: 0.8,
    py: 0.5,
    '&:hover': { opacity: 1, textDecoration: 'underline' },
});
