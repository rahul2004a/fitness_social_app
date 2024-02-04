import { Box, Typography } from '@mui/material';
import React from 'react'

const ExerciseInstruction = ({ exerciseDetail }) => {
    const { instructions } = exerciseDetail;
    return (
        <Box>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
                Instruction For This Exercise</Typography>
            <ul>
                {instructions?.map((item, id) => (
                    <li key={id}>
                        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C" padding="2px">
                            {item}
                        </Typography>
                    </li>
                ))}
            </ul>
        </Box>
    )
}

export default ExerciseInstruction