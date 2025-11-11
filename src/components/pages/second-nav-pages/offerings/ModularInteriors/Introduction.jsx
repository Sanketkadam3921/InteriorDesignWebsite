import React from 'react';
import { Typography } from '@mui/material';
import themeNeutral from '../../../../../themeNeutral';
import { INTRODUCTION_TEXT } from './constants';

export default function Introduction() {
    return (
        <Typography
            variant="body1"
            sx={{
                fontSize: { xs: '1rem', md: '1.15rem' },
                color: themeNeutral.palette.text.secondary,
                lineHeight: 1.8,
                mb: 6,
                maxWidth: { xs: '100%', md: '900px' },
                mx: 'auto',
                textAlign: 'center'
            }}
        >
            {INTRODUCTION_TEXT}
        </Typography>
    );
}

