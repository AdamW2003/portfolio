import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const PortfolioSearch = ({ skills }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter skills based on the case-insensitive search term
  const filteredSkills = skills.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={4}
    >
      <TextField
        label="Search Skills"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <Box mt={2} width="100%" display="flex" flexWrap="wrap" justifyContent="center">
        {filteredSkills.map((skill, index) => (
          <Chip key={index} label={skill} m={5} sx={{ margin: "0.1em" }} />
        ))}
      </Box>
    </Box>
  );
};

export default PortfolioSearch;
