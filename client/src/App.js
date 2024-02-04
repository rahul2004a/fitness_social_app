import React from 'react'
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import TaskPage from './pages/TaskPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1650px' } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/' element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/tasks" element={<TaskPage/>}/>
      </Routes>
    </Box>
  )
}

export default App