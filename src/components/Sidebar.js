import React from 'react';
import { Grid, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';

const Sidebar = () => {
  const theme = useTheme();

  const onMenuItemClick = (sectionId) => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    } else {
      console.error(`Section with ID "${sectionId}" not found.`);
    }
  };

  return (
    <Grid container fixed position="left" width={250} alignItems="center" justifyContent="center" style={{ backgroundColor: theme.palette.primary.main }}>
      {/* Use theme.palette.primary.main for the background color */}
      <List>
        {/* Separate ListItem components for vertical stacking */}
        <ListItem onClick={() => onMenuItemClick('home')}>
          <ListItemIcon> test1 </ListItemIcon>
        </ListItem>
        <ListItem onClick={() => onMenuItemClick('about')}>
          <ListItemIcon> test2 </ListItemIcon>
        </ListItem>
        <ListItem onClick={() => onMenuItemClick('contact')}>
          <ListItemIcon> test3 </ListItemIcon>
        </ListItem>
      </List>
    </Grid>
  );
};

export default Sidebar;
