import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Hero = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'relative',
                height: '70vh',
                minHeight: '500px',
                backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1682597000374-9cfb5a0bdf98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    zIndex: 1,
                },
            }}
        >
            <Container sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={{ maxWidth: '600px', color: 'white' }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            fontWeight: 700,
                            mb: 2,
                            color: 'white',
                        }}
                    >
                        Home Renovations You'll Love
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.2rem',
                            mb: 4,
                            color: 'rgba(255,255,255,0.9)',
                            lineHeight: 1.6,
                        }}
                    >
                        Celebrate the special moments of life with a space that is forever yours.
                        From getting married to cherishing the joy of having a baby, mark these
                        moments by giving your home a fresh makeover it deserves.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            px: 4,
                            py: 2,
                            fontSize: '1.1rem',
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                                transform: 'translateY(-2px)',
                            },
                        }}
                    >
                        BOOK FREE CONSULTATION
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
