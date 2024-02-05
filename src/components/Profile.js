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
          Adam Woodruff, BSc, 
        </Typography>
        <Typography variant="body1">
        A seasoned software developer deeply entrenched in the realm of DevSecOps, I boast a wealth of experience in designing and managing secure web applications across diverse frameworks. Proficient in C#, JavaScript, Python, PHP, and SQL, I specialize in the development and maintenance of resilient web solutions for global enterprises, managing tens of millions of transaction volumes annually where reliability is paramount. My unwavering commitment to cybersecurity is ingrained in every aspect of my work, ensuring that best practices are seamlessly integrated into the development process for innovative and fortified solutions.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Profile;
