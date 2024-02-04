import React from 'react';
import { Avatar, Typography, Button, Grid } from '@mui/material';
import profileImage from '../images/profile.jpg'

const Profile = () => {
  return (
    <Grid container direction="row" alignItems="center" sx={{ paddingLeft: '5em', paddingRight: '5em' }}>
      <Grid item>
        <Avatar
          alt="Adam Woodruff"
          src={profileImage}
          sx={{ width: 128, height: 128 }}
        />
      </Grid>
      <Grid item sx={{ marginLeft: '1em' }}>
        <Typography variant="h4" gutterBottom>
          Adam Woodruff
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Profile;
