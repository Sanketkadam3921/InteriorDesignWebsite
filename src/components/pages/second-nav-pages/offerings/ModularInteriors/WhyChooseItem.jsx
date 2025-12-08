import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import themeNeutral from '../../../../../themeNeutral';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SpeedIcon from '@mui/icons-material/Speed';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

// Icon mapping
const iconMap = {
    DesignServices: DesignServicesIcon,
    Speed: SpeedIcon,
    SpaceDashboard: SpaceDashboardIcon,
    PriceCheck: PriceCheckIcon,
};

export default function WhyChooseItem({ title, icon, iconUrl }) {
    const IconComponent = iconMap[icon] || DesignServicesIcon;
    const isImageIcon = !!iconUrl;

    return (
        <Card
            sx={{
                height: '100%',
                minHeight: { xs: '180px', sm: '200px', md: '220px' },
                maxHeight: { xs: '180px', sm: '200px', md: '220px' },
                width: '100%',
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
            <CardContent 
                sx={{ 
                    p: { xs: 3, sm: 3.5, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    height: '100%',
                }}
            >
                <Box
                    sx={{
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {isImageIcon ? (
                        <Box
                            component="img"
                            src={iconUrl}
                            alt={title}
                            sx={{
                                width: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                                height: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                                objectFit: 'contain',
                            }}
                        />
                    ) : (
                        <IconComponent
                            sx={{
                                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                                color: themeNeutral.palette.primary.main,
                            }}
                        />
                    )}
                </Box>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        fontWeight: 'bold',
                        color: themeNeutral.palette.text.primary,
                        textAlign: 'center',
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        lineHeight: 1.4,
                    }}
                >
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}

