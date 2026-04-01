import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip, Button, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BlogData from '../modules/BlogData.json';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpen = (post) => setSelectedPost(post);
  const handleClose = () => setSelectedPost(null);

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h1" sx={{ textAlign: 'center', mb: 4 }}>
        Blog
      </Typography>
      <Grid container spacing={3}>
        {BlogData.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="caption" color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="h5" component="h2" sx={{ my: 1 }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                  {post.summary}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                  {post.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" />
                  ))}
                </Box>
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  onClick={() => handleOpen(post)}
                  fullWidth
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={Boolean(selectedPost)}
        onClose={handleClose}
        aria-labelledby="blog-post-title"
        aria-describedby="blog-post-content"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '80%', md: '600px' },
          maxHeight: '80vh',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          overflowY: 'auto',
          backgroundColor: '#f5f5f5' // Matches primary light color
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          {selectedPost && (
            <>
              <Typography variant="caption" color="text.secondary">
                {selectedPost.date}
              </Typography>
              <Typography id="blog-post-title" variant="h4" component="h2" sx={{ mb: 2 }}>
                {selectedPost.title}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 3 }}>
                {selectedPost.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" />
                ))}
              </Box>
              <Typography id="blog-post-content" variant="body1">
                {selectedPost.content}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Blog;
