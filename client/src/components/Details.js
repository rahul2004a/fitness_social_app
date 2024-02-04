import React, { useState } from 'react';
import { Typography, Stack, Button, Snackbar, Alert } from '@mui/material';
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import axios from 'axios';

const Details = ({ exerciseDetail }) => {

  const { bodyPart, gifUrl, name, target, equipment, id } = exerciseDetail;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const addToTask = async () => {
    try {
        const config = {
            headers: {
                // Authorization: Bearer ${user.token},
            },
        };

        const { data } = await axios.post("/api/tasks", {id});
        // console.log(data);
        // setChats(data);
    } catch (error) {
      setSnackbarMessage("Failed to add task!");
      setSnackbarOpen(true);
    }
};

const handleCloseSnackbar = () => {
  setSnackbarOpen(false);
};

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" style={{ borderRadius: '20px' }} />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
        <Button onClick={() => {addToTask()}}
          variant="contained" 
          size="large"
          style={{ backgroundColor: "#0029a3", fontWeight:"600", height:"50px", fontSize:"20px"}}>
          Add to Task
        </Button>
      </Stack>

      <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

    </Stack>
  )
}

export default Details