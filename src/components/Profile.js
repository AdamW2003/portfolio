import React from 'react';
import { Avatar, Typography, Button, Grid } from '@mui/material';
import profileImage from '../images/profile.jpg'

const Profile = () => {
  return (
    <Grid container direction="row" alignItems="center" sx={{ paddingLeft: '5em', paddingRight: '5em' }}>
      <Grid item sx={{ paddingLeft: '1em' }}>
        <Avatar
          alt="Adam Woodruff"
          src={profileImage}
          sx={{ width: 128, height: 128 }}
        />
      </Grid>
      <Grid item sx={{ marginLeft: '1em' }}>
        <Typography variant="h4" gutterBottom>
          Adam Woodruff,
        </Typography>
        <Typography variant="body1">
        I am a versatile Full Stack Developer whose core competencies lie in C#, JavaScript, and Python. My passion lies in crafting robust, efficient, and scalable solutions across the technology stack with an emphasis on DevOps and DevSecOps.         </Typography>
      </Grid>
    </Grid>
  );
};

export default Profile;
