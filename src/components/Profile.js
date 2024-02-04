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
          Adam Woodruff, BSc
        </Typography>
        <Typography variant="body1">
        An experienced software developer with a strong emphasis on cybersecurity operations. Specializing in C# and JavaScript, I create secure websites for global companies, handling tens of millions of transactions annually. Committed to integrating best practices into all aspects of development to ensure robust and innovative solutions.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Profile;
