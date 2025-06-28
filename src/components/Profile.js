import React from 'react';
import { Avatar, Typography, Grid, Box } from '@mui/material';
import { keyframes } from '@mui/system';
import profileImage from '../images/profile.jpg';

// The keyframes definition remains the same
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

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
        <Box
          sx={(theme) => ({
            position: 'relative',
            width: 136,
            height: 136,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              padding: '4px',
              background: theme.animation.borderGradient,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              animation: `${rotate} 4s linear infinite`,
            },
          })}
        >
          <Avatar
            alt="Adam Woodruff"
            src={profileImage}
            sx={{ 
              width: 128, 
              height: 128,
              position: 'relative', 
              zIndex: 1
            }}
          />
        </Box>
      </Grid>
      <Grid item sx={{ marginLeft: '1em', flex: 1 }}>
        <Typography variant="h4" gutterBottom>
          Adam Woodruff,
        </Typography>
        <Typography variant="body1">
          A dynamic technical professional with a robust background in software, security, and analysis. A proven ability to master new skills and technologies in delivering impactful solutions, bridging the gap between technical infrastructure and business objectives. A person who thrives in dynamic environments that value innovation and excellence.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Profile;