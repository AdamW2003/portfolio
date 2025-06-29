import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Chip,
  useTheme,
  useMediaQuery,
  Grow,
} from '@mui/material';
import skillsList from '../modules/SkillsList.json'; 

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`skill-tabpanel-${index}`}
      aria-labelledby={`skill-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `skill-tab-${index}`,
    'aria-controls': `skill-tabpanel-${index}`,
  };
}

const SkillsPortfolio = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const skillCategories = Object.keys(skillsList);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', my: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Skill categories"
          variant={isMobile ? 'scrollable' : 'fullWidth'}
          centered={!isMobile}
          scrollButtons="auto"
          indicatorColor="secondary" 
        >
          {skillCategories.map((category, index) => (
            <Tab 
              label={category} 
              {...a11yProps(index)} 
              key={index} 
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                '&.Mui-selected': {
                  color: 'text.primary',
                  fontWeight: 700,
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      {skillCategories.map((category, index) => (
        <TabPanel value={value} index={index} key={index}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
            {skillsList[category].map((skill, skillIndex) => (
              <Grow in={true} key={skillIndex} style={{ transitionDelay: `${skillIndex * 50}ms` }}>
                <Chip
                  label={skill}
                  sx={{
                    fontSize: '1rem',
                    padding: '1.2em 1em',
                    fontWeight: 500,
                    // Apply the gradient and shadow to match the Paper component
                    background: (theme) => `linear-gradient(145deg, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
                    boxShadow: (theme) => theme.shadows[3],
                    // Ensure text color is readable against the new background
                    color: 'text.primary',
                    border: 'none', // Remove the default border for a cleaner look
                  }}
                />
              </Grow>
            ))}
          </Box>
        </TabPanel>
      ))}
    </Box>
  );
};

export default SkillsPortfolio;
