import React, { useState, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Typography, useMediaQuery } from '@mui/material';

const PortfolioSearch = ({ skills }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const maxSkillsToShow = 25;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedCategory('All');
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const uniqueCategories = useMemo(() => {
    // Extract unique categories from skills object
    const categoriesSet = new Set(Object.keys(skills));
    return ['All', ...categoriesSet];
  }, [skills]);

  const flattenSkills = useMemo(() => {
    // Flatten the skills object into an array of objects
    return Object.entries(skills).flatMap(([category, labels]) =>
      labels.map((label) => ({ label, category }))
    );
  }, [skills]);

  const filteredSkills = flattenSkills
    .filter((skill) =>
      (selectedCategory === 'All' ||
        (skill.category && skill.category.toLowerCase() === selectedCategory.toLowerCase())) &&
      skill.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, isMobile ? maxSkillsToShow : flattenSkills.length);

  const showMoreSkillsMessage =
    flattenSkills.length > maxSkillsToShow && !searchTerm ? (
      <Typography sx={{ textAlign: 'center', color: '#888', marginTop: '8px' }}>
        {`+${flattenSkills.length - maxSkillsToShow} more skills`}
      </Typography>
    ) : null;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <TextField
        label="Search..."
        variant="filled"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {!isMobile && (
        <ButtonGroup
          variant="contained"
          color="tertiary"
          aria-label="skill categories"
          mt={2}
          style={{ margin: '8px 0' }}
        >
          {uniqueCategories.map((category, index) => (
            <Button
              key={index}
              onClick={() => handleCategoryChange(category)}
              variant="contained"
              color={selectedCategory === category ? 'primary' : 'tertiary'}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      )}

      <Box mt={2} width="100%" display="flex" flexWrap="wrap" justifyContent="center">
        {filteredSkills.map((skill, index) => (
          <Chip key={index} label={skill.label} m={5} sx={{ margin: '0.1em' }} />
        ))}
      </Box>

      {isMobile && showMoreSkillsMessage}
    </Box>
  );
};

export default PortfolioSearch;
