import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from "../components/Exercises";
import Footer from '../components/Footer';

const Home = () => {
  const [exercise, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (

    <Box >
      <HeroBanner />
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
      <Exercises bodyPart={bodyPart} exercise={exercise} setExercises={setExercises} />
      <Footer/>
    </Box>

  )
}

export default Home