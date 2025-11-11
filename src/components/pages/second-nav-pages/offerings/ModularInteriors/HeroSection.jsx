import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import themeNeutral from '../../../../../themeNeutral';
import { HERO_DATA } from './constants';

const HeroSectionStyled = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '70vh',
    minHeight: '500px',
    backgroundImage: `url('${HERO_DATA.backgroundImage}')`,
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

export default function HeroSection() {
    return (
        <HeroSectionStyled>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    color: 'white',
                    maxWidth: { xs: '100%', md: '800px' },
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
                        mb: 2,
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    }}
                >
                    {HERO_DATA.title}
                </Typography>
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        fontSize: { xs: '1rem', md: '1.3rem', lg: '1.5rem' },
                        fontWeight: 400,
                        lineHeight: 1.4,
                        mb: 4,
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    }}
                >
                    {HERO_DATA.subtitle}
                </Typography>

                <Button
                    component={Link}
                    to={HERO_DATA.buttonLink}
                    variant="contained"
                    size="medium"
                    sx={{
                        backgroundColor: themeNeutral.palette.primary.main,
                        color: themeNeutral.palette.primary.contrastText,
                        textTransform: 'none',
                        fontWeight: themeNeutral.typography.button.fontWeight,
                        px: { xs: 3, md: 4 },
                        py: { xs: 1.5, md: 2 },
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        borderRadius: themeNeutral.components.MuiButton.styleOverrides.root.borderRadius,
                        boxShadow: '0 4px 16px rgba(80, 91, 95, 0.3)',
                        '&:hover': {
                            backgroundColor: themeNeutral.palette.primary.dark,
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 20px rgba(80, 91, 95, 0.4)',
                        },
                        transition: themeNeutral.components.MuiButton.styleOverrides.root.transition,
                    }}
                >
                    {HERO_DATA.buttonText}
                </Button>
            </Box>
        </HeroSectionStyled>
    );
}

