import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import themeNeutral from '../../../../../themeNeutral';
import { SERVICES } from './constants';
import ServiceCard from './ServiceCard';

export default function WhatWeOffer() {
    return (
        <Box sx={{ mt: 8, mb: 8 }}>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    fontWeight: themeNeutral.typography.h2.fontWeight,
                    color: themeNeutral.palette.text.primary,
                    mb: 6,
                    textAlign: 'center'
                }}
            >
                What We Offer
            </Typography>

            <Grid container spacing={4}>
                {SERVICES.map((service) => (
                    <Grid item xs={12} md={6} key={service.id}>
                        <ServiceCard
                            title={service.title}
                            image={service.image}
                            alt={service.alt}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

