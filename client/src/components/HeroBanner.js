import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/herobb.png';

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
            <Typography color="#0029a3" fontSize="60px" fontWeight="600">
                Fitness Tasker
            </Typography>

            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
                Empower, Engage<br />and Evolve
            </Typography>

            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="25px" mb={2}>
                Check out the most effective Exercises
            </Typography>

            <Stack>
                <a href="#exercises" style={{ marginTop: '35px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#0029a3', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
            </Stack>

            <Typography fontWeight={600} color="#0029a3" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
                Exercise
            </Typography>

            <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />

        </Box>
    )
}

export default HeroBanner