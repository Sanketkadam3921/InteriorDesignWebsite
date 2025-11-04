import React from 'react';
import { Box, Button, Typography, Card, CardContent, useTheme } from '@mui/material';

export default function ThemeTest() {
    const theme = useTheme();

    return (
        <Box sx={{ p: 4, backgroundColor: theme.palette.background.default }}>
            <Typography variant="h3" color="primary" gutterBottom>
                Theme Test Component
            </Typography>

            <Typography variant="h5" color="secondary" gutterBottom>
                Secondary Color Test
            </Typography>

            <Typography variant="body1" color="text.primary" gutterBottom>
                Primary text color should be Davy's gray (#505B5F)
            </Typography>

            <Typography variant="body2" color="text.secondary" gutterBottom>
                Secondary text color should be Cadet gray (#92A3AB)
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, my: 3 }}>
                <Button variant="contained" color="primary">
                    Primary Button (Lion Gold)
                </Button>
                <Button variant="outlined" color="primary">
                    Outlined Button
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary Button
                </Button>
            </Box>

            <Card sx={{ maxWidth: 400, my: 2 }}>
                <CardContent>
                    <Typography variant="h6" color="primary">
                        Card Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This card should have the theme's styling applied.
                    </Typography>
                </CardContent>
            </Card>

            <Box sx={{
                p: 2,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                borderRadius: 2,
                my: 2
            }}>
                <Typography variant="h6">
                    Primary Color Box: {theme.palette.primary.main}
                </Typography>
            </Box>

            <Box sx={{
                p: 2,
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
                borderRadius: 2,
                my: 2
            }}>
                <Typography variant="h6">
                    Secondary Color Box: {theme.palette.secondary.main}
                </Typography>
            </Box>
        </Box>
    );
}

