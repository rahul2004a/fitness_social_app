import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => (<>
  <Stack direction="row" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'space-between' }} px="20px" >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '250px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      spacing={6}
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #0029a3' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      <Link to="/tasks" style={{ textDecoration: 'none', color: '#3A1212' }}>Tasks</Link>
      <Link to='' style={{ textDecoration: 'none', color: '#3A1212' }}>Posts</Link>
      <Avatar>H</Avatar>
    </Stack>
  </Stack>
  <hr style={{ color: 'gray', border: 'none', height: '1px', backgroundColor: 'gray', margin: '15px 0' }} />

</>
);

export default Navbar;