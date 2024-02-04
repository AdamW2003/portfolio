import React from 'react';
import { Grid, Link } from '@mui/material';

const Footer = ({ isMobile }) => {
  return (
    <Grid container justifyContent={isMobile ? 'center' : 'flex-end'}>
      <Grid item>
        <Link href="#">@johndoe</Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
