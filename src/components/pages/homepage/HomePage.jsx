import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';
import HomeServices from './HomepageServices';
import HomePageFeatured from './HomePageFeatured';
import HomeInspiration from './HomeInspiration';
import WhyChooseUs from './WhyChoose'; // ✅ new component
import Estimate from './Estimate';
import ThemeTest from '../../common/ThemeTest';
import FeaturedProjectsList from '../projects/FeaturedProjectsList';
export default function HomePage() {
    return (
        <Box>
            <Hero />
            <HomeServices />
            <HomeInspiration />
            <WhyChooseUs />   {/* ✅ add it here */}
            <Estimate />
            <HomePageFeatured />
        </Box>
    );
}
