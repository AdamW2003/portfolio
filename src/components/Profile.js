import React from 'react';
import { Avatar, Typography, Button, Grid } from '@mui/material';
import profileImage from '../images/profile.jpg'

const Profile = ({ isMobile }) => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      sx={{
        paddingLeft: isMobile ? '2em' : '5em',
        paddingRight: isMobile ? '2em' : '5em',
      }}
    >
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
        A full stack software developer with a focus in DevSecOps, I excel in dynamic environments, constantly evolving my skills to integrate emerging technologies and best practices. I aim to make poised and impactful contributions in any environment in teams that value innovation and excellence.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Profile;
