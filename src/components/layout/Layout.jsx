import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Header from '../main/Header';
import Footer from '../main/Footer';

export default function Layout() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();
    
    // Check if current path is a price calculator page
    const isPriceCalculatorPage = location.pathname.includes('/price-calculators/') && 
                                  location.pathname.includes('/calculator/');

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                height: isPriceCalculatorPage ? '100vh' : 'auto',
                overflowX: 'hidden', // ✅ Prevent any horizontal scroll or shift
                width: '100%',
                overflow: isPriceCalculatorPage ? 'hidden' : 'auto',
            }}
        >
            <Header />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    pt: isMobile ? '60px' : '70px', // ✅ Reduced to match new header height
                    pb: isMobile ? '0px' : 0,
                    overflowX: 'hidden',
                    height: isPriceCalculatorPage 
                        ? isMobile 
                            ? 'calc(100vh - 60px)' 
                            : 'calc(100vh - 70px)' 
                        : 'auto',
                    overflowY: isPriceCalculatorPage ? 'auto' : 'visible',
                }}
            >

                <Outlet />
            </Box>

            {!isPriceCalculatorPage && <Footer />}
        </Box>
    );
}
