import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Link,
    IconButton,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    Facebook,
    Instagram,
    LinkedIn,
    YouTube,
    Phone,
    Email,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

// Reusable section container
const SectionWrapper = ({ children }) => (
    <Box
        sx={{
            pl: { xs: 0, md: 4, lg: 6 },
            pr: { xs: 0, md: 2 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start', // ✅ always left-aligned
            textAlign: 'left', // ✅ text left-aligned
        }}
    >
        {children}
    </Box>
);

const LinkGroup = ({ title, children }) => {
    const theme = useTheme();
    return (
        <Grid item xs={12} md={2.25}>
            <SectionWrapper>
                <Typography
                    variant="h6"
                    sx={{
                        color: theme.palette.secondary.contrastText,
                        fontWeight: 600,
                        fontSize: { xs: '1.1rem', md: '1.2rem' },
                        mb: 3,
                        letterSpacing: '0.05em',
                    }}
                >
                    {title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {children}
                </Box>
            </SectionWrapper>
        </Grid>
    );
};

const NavLink = ({ to, label }) => {
    const theme = useTheme();
    return (
        <Link
            component={RouterLink}
            to={to}
            sx={{
                color: theme.palette.secondary.contrastText,
                textDecoration: 'none',
                fontSize: { xs: '1rem', md: '1.1rem' },
                opacity: 0.8,
                py: 0.5,
                '&:hover': { opacity: 1, textDecoration: 'underline' },
            }}
        >
            {label}
        </Link>
    );
};

export default function Footer() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // ✅ stack for mobile + tablet

    return (
        <Box component="footer" sx={{ mt: 'auto', position: 'relative', overflow: 'hidden' }}>
            <Box
                sx={{
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.secondary.contrastText,
                    py: { xs: 8, md: 10 },
                    position: 'relative',
                }}
            >
                {/* Decorative SVG */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: -100,
                        left: -80,
                        zIndex: 0,
                        opacity: 0.15,
                    }}
                >
                    <svg width="220" height="230" viewBox="0 0 217 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                            fill="url(#paint0_linear_1179_5)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_1179_5"
                                x1="76.5"
                                y1={281}
                                x2="76.5"
                                y2="1.22829e-05"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor={theme.palette.primary.light} stopOpacity="0.15" />
                                <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                    </svg>
                </Box>

                <Container
                    maxWidth="xl"
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        px: { xs: 3, sm: 4, md: 6 },
                    }}
                >
                    <Grid
                        container
                        spacing={{ xs: 5, md: 6 }}
                        direction={isSmallScreen ? 'column' : 'row'} // ✅ stack for mobile + tablet
                        alignItems="flex-start" // ✅ keep all items left-aligned
                        textAlign="left" // ✅ left text alignment everywhere
                    >
                        {/* Logo + Social Media */}
                        <Grid item xs={12} md={3}>
                            <SectionWrapper>
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

                                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-start' }}>
                                    {[
                                        { icon: <Facebook />, href: 'https://facebook.com' },
                                        { icon: <Instagram />, href: 'https://www.instagram.com/_kalakruti_studio_/' },
                                        { icon: <LinkedIn />, href: 'https://linkedin.com' },
                                        { icon: <YouTube />, href: 'https://youtube.com' },
                                    ].map((item, index) => (
                                        <IconButton
                                            key={index}
                                            component="a"
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                color: theme.palette.secondary.contrastText,
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                    borderColor: theme.palette.primary.main,
                                                },
                                            }}
                                        >
                                            {item.icon}
                                        </IconButton>
                                    ))}
                                </Box>
                            </SectionWrapper>
                        </Grid>

                        {/* Offerings & Inspiration */}
                        <LinkGroup title="OFFERINGS & INSPIRATION">
                            <NavLink to="/offerings" label="Interiors" />
                            <NavLink to="/designs" label="Design Ideas" />
                        </LinkGroup>

                        {/* Tools */}
                        <LinkGroup title="TOOLS">
                            <NavLink to="/price-calculators" label="Price Calculator" />
                            <NavLink to="/enquiries/quote-form" label="Get Quote" />
                        </LinkGroup>

                        {/* Company */}
                        <LinkGroup title="COMPANY">
                            <NavLink to="/how-it-works" label="How it works" />
                            <NavLink to="/faq" label="FAQ" />
                            <NavLink to="/aboutus" label="About Us" />
                            <NavLink to="/projects" label="Our Projects" />
                            <NavLink to="/contact" label="Contact Us" />
                        </LinkGroup>

                        {/* Contact */}
                        <LinkGroup title="CONTACT US">
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Phone sx={{ fontSize: '1.3rem', opacity: 0.8 }} />
                                <Link href="tel:+91-9876543210" sx={linkStyle(theme)}>
                                    +91 9876543210
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Email sx={{ fontSize: '1.3rem', opacity: 0.8 }} />
                                <Link href="mailto:care@kalakruti.com" sx={linkStyle(theme)}>
                                    care@kalakruti.com
                                </Link>
                            </Box>
                        </LinkGroup>
                    </Grid>

                    {/* Copyright */}
                    <Box
                        sx={{
                            borderTop: '1px solid rgba(255,255,255,0.2)',
                            mt: 6,
                            pt: 4,
                            textAlign: 'center', // ✅ left-aligned even in mobile/tablet
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: theme.palette.secondary.contrastText,
                                opacity: 0.8,
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                mb: { xs: 3, md: 0 },
                            }}
                        >
                            © 2025 Kalakruti Studio. All rights reserved.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

// Global reusable link style
const linkStyle = (theme) => ({
    color: theme.palette.secondary.contrastText,
    textDecoration: 'none',
    fontSize: { xs: '1rem', md: '1.1rem' },
    opacity: 0.8,
    '&:hover': { opacity: 1, textDecoration: 'underline' },
});
