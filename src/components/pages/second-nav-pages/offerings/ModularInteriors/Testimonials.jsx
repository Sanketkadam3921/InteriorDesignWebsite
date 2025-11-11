import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import themeNeutral from '../../../../../themeNeutral';
import { TESTIMONIALS } from './constants';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
    return (
        <Container maxWidth="lg" sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}>
            <Box sx={{
                backgroundColor: '#f8f9fa',
                borderRadius: 2,
                p: 4,
                mb: 3
            }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontSize: { xs: '1.4rem', md: '1.8rem' },
                            fontWeight: themeNeutral.typography.h2.fontWeight,
                            color: themeNeutral.palette.text.primary,
                            mb: 2
                        }}
                    >
                        Here's what our homeowners have to say
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        gap: 4,
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        flexWrap: { xs: 'wrap', md: 'nowrap' },
                        '& > *': {
                            flex: { xs: '1 1 100%', sm: '1 1 300px' },
                            maxWidth: { xs: '100%', sm: '400px' },
                            minWidth: { xs: '280px', sm: '280px' }
                        }
                    }}
                >
                    {TESTIMONIALS.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            quote={testimonial.quote}
                            name={testimonial.name}
                            location={testimonial.location}
                            image={testimonial.image}
                        />
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

