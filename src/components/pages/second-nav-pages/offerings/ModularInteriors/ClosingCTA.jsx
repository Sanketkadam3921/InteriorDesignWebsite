import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import themeNeutral from '../../../../../themeNeutral';
import { CLOSING_CTA } from './constants';

export default function ClosingCTA() {
    return (
        <Box sx={{
            mt: 8,
            mb: 8,
            textAlign: 'center',
            py: { xs: 4, md: 6 },
            px: { xs: 2, md: 4 },
            backgroundColor: themeNeutral.palette.primary.light + '10',
            borderRadius: 3
        }}>
            <Typography
                variant="h3"
                component="h2"
                sx={{
                    fontSize: { xs: '1.6rem', md: '2rem' },
                    fontWeight: 700,
                    color: themeNeutral.palette.text.primary,
                    mb: 3
                }}
            >
                {CLOSING_CTA.title}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: themeNeutral.palette.text.secondary,
                    lineHeight: 1.8,
                    maxWidth: '800px',
                    mx: 'auto',
                    mb: 4
                }}
            >
                {CLOSING_CTA.description}
            </Typography>
            <Button
                component={Link}
                to={CLOSING_CTA.buttonLink}
                variant="contained"
                size="large"
                sx={{
                    backgroundColor: themeNeutral.palette.primary.main,
                    color: themeNeutral.palette.primary.contrastText,
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    borderRadius: 2,
                    boxShadow: '0 4px 16px rgba(80, 91, 95, 0.3)',
                    '&:hover': {
                        backgroundColor: themeNeutral.palette.primary.dark,
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(80, 91, 95, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                }}
            >
                {CLOSING_CTA.buttonText}
            </Button>
        </Box>
    );
}

