import React from 'react';
import { Box, Typography } from '@mui/material';
import themeNeutral from '../../../../../themeNeutral';

export default function WhyChooseItem({ title, description, fullWidth = false }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: fullWidth ? 0 : 3 }}>
            <Typography
                sx={{
                    fontSize: '1.5rem',
                    color: themeNeutral.palette.primary.main,
                    mr: 2,
                    fontWeight: 'bold'
                }}
            >
                ✔
            </Typography>
            <Box>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        color: themeNeutral.palette.text.primary,
                        mb: 1,
                        fontSize: '1.1rem'
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                >
                    {description}
                </Typography>
            </Box>
        </Box>
    );
}

