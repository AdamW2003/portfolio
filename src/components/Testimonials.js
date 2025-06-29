import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import testimonialData from '../modules/TestimonialData.json'; 

const Testimonials = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          What Others Say
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {testimonialData.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 2,
                  background: (theme) => `linear-gradient(145deg, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
                }}
              >
                <Box>
                  <FormatQuoteIcon color="secondary" fontSize="large" sx={{ mb: 1 }}/>
                  <Typography 
                    variant="body1" 
                    sx={{ fontStyle: 'italic', mb: 2 }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'right', mt: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    - {testimonial.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.title}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;