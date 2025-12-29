import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import themeNeutral from '../../../../../themeNeutral';

export default function ServiceCard({ title, image, alt }) {
    return (
        <Card
            sx={{
                height: '100%',
                width: '100%',
                maxWidth: {
                    xs: 250,
                    sm: 280,
                    md: 300,
                },
                minWidth: {
                    xs: 250,
                    sm: 280,
                    md: 300,
                },
                margin: '0 auto', // Centers the card within Grid item
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                },
            }}
        >
            <CardMedia
                component="img"
                image={image}
                alt={alt}
                sx={{ 
                    width: {
                        xs: 250,
                        sm: 280,
                        md: 300,
                    },
                    height: {
                        xs: 250,
                        sm: 280,
                        md: 300,
                    },
                    minWidth: {
                        xs: 250,
                        sm: 280,
                        md: 300,
                    },
                    maxWidth: {
                        xs: 250,
                        sm: 280,
                        md: 300,
                    },
                    minHeight: {
                        xs: 250,
                        sm: 280,
                        md: 300,
                    },
                    maxHeight: {
                        xs: 250,
                        sm: 280,
                        md: 300,
                    },
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    backgroundColor: themeNeutral.palette.grey[200],
                    margin: '0 auto',
                }}
            />
            <CardContent sx={{ p: 3 }}>
                <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                        fontWeight: 'bold',
                        color: themeNeutral.palette.text.primary,
                        mb: 1.5,
                        fontSize: '1.3rem'
                    }}
                >
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}

