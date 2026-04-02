import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Tooltip, Zoom, Chip, Divider, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import RiskData from '../modules/RiskData.json';

const RiskHeatMap = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedRisk, setSelectedRisk] = useState(null);

  const levels = [1, 2, 3, 4, 5];
  const labels = {
    1: { prob: 'Rare', imp: 'Negligible' },
    2: { prob: 'Unlikely', imp: 'Minor' },
    3: { prob: 'Possible', imp: 'Moderate' },
    4: { prob: 'Likely', imp: 'Major' },
    5: { prob: 'Almost Certain', imp: 'Catastrophic' }
  };

  const getCellColor = (prob, imp) => {
    const score = prob * imp;
    if (score >= 15) return '#ff4d4d'; // Critical
    if (score >= 9) return '#ffa31a';  // High
    if (score >= 4) return '#ffd11a';  // Medium
    return '#86b300';                  // Low
  };

  const risksInCell = (prob, imp) => {
    return RiskData.filter(r => r.probability === prob && r.impact === imp);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h1" align="center" gutterBottom>
        Risk Analysis & Mitigation
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 6, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
        A strategic visualization of risks identified and mitigated across technical, operational, and strategic environments. 
        Select a risk indicator to view mitigation strategies.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Heat Map Grid */}
        <Grid item xs={12} md={7}>
          <Box sx={{ position: 'relative', width: '100%', pt: '100%' }}>
            {/* Impact Axis Title (Y) */}
            <Box sx={{ 
              position: 'absolute', 
              left: -50, 
              top: '40%', 
              transform: 'translateY(-50%) rotate(-90deg)', 
              display: { xs: 'none', md: 'block' },
              whiteSpace: 'nowrap'
            }}>
              <Typography variant="caption" sx={{ fontWeight: 'bold', borderBottom: `2px solid ${theme.palette.divider}`, pb: 0.5 }}>
                ← IMPACT →
              </Typography>
            </Box>

            <Box sx={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0,
              display: 'grid',
              gridTemplateColumns: '40px repeat(5, 1fr)',
              gridTemplateRows: 'repeat(5, 1fr) 40px',
              gap: 1
            }}>
              {/* Impact Axis Labels (Y) */}
              {levels.slice().reverse().map(l => (
                <React.Fragment key={`y-${l}`}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="caption" sx={{ transform: 'rotate(-90deg)', fontWeight: 'bold' }}>
                      {labels[l].imp}
                    </Typography>
                  </Box>
                  {levels.map(p => {
                    const cellRisks = risksInCell(p, l);
                    return (
                      <Paper
                        key={`${p}-${l}`}
                        elevation={0}
                        sx={{
                          backgroundColor: getCellColor(p, l),
                          opacity: 0.8,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 1,
                          position: 'relative',
                          transition: 'all 0.2s',
                          '&:hover': { opacity: 1, transform: 'scale(1.02)', zIndex: 10 }
                        }}
                      >
                        {cellRisks.map((risk, idx) => (
                          <motion.div
                            key={risk.id}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setSelectedRisk(risk)}
                            style={{
                              width: '24px',
                              height: '24px',
                              backgroundColor: 'white',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                              margin: '2px',
                              border: selectedRisk?.id === risk.id ? `3px solid ${theme.palette.secondary.main}` : 'none'
                            }}
                          >
                            <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'black' }}>
                              {risk.id}
                            </Typography>
                          </motion.div>
                        ))}
                      </Paper>
                    );
                  })}
                </React.Fragment>
              ))}

              {/* Probability Axis Labels (X) */}
              <Box /> {/* Corner spacer */}
              {levels.map(l => (
                <Box key={`x-${l}`} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                    {labels[l].prob}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
             <Typography variant="caption" sx={{ fontWeight: 'bold', borderBottom: `2px solid ${theme.palette.divider}`, pb: 0.5 }}>
               ← PROBABILITY →
             </Typography>
          </Box>
        </Grid>

        {/* Info Panel */}
        <Grid item xs={12} md={5}>
          <AnimatePresence mode="wait">
            {selectedRisk ? (
              <motion.div
                key={selectedRisk.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Paper sx={{ 
                  p: 4, 
                  height: '100%', 
                  minHeight: 300, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 2, 
                  borderRadius: theme.borderRadius || 2,
                  backgroundColor: theme.palette.primary.main,
                  border: `1px solid ${theme.palette.divider}`,
                  boxShadow: 'none'
                }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Typography variant="h5" color="secondary" sx={{ fontWeight: 'bold' }}>
                      {selectedRisk.title}
                    </Typography>
                    <Chip 
                      label={selectedRisk.category} 
                      size="small" 
                      sx={{ 
                        backgroundColor: selectedRisk.category === 'Technical' ? theme.palette.secondary.main : theme.palette.tertiary.main,
                        color: selectedRisk.category === 'Technical' ? theme.palette.secondary.contrastText : theme.palette.tertiary.contrastText,
                        fontWeight: 'bold'
                      }}
                    />
                  </Box>
                  
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    Context: {selectedRisk.context}
                  </Typography>

                  <Divider sx={{ borderColor: theme.palette.divider }} />

                  <Box>
                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
                      Assessment
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1, color: theme.palette.text.primary }}>
                      <strong>Probability:</strong> {labels[selectedRisk.probability].prob} ({selectedRisk.probability}/5)
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                      <strong>Impact:</strong> {labels[selectedRisk.impact].imp} ({selectedRisk.impact}/5)
                    </Typography>
                  </Box>

                  <Box sx={{ 
                    mt: 2, 
                    p: 2, 
                    backgroundColor: theme.palette.tertiary.main, 
                    borderRadius: theme.borderRadius || 1, 
                    borderLeft: `4px solid ${theme.palette.secondary.main}` 
                  }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.tertiary.contrastText }}>
                      Mitigation Strategy
                    </Typography>
                    <Typography variant="body2" sx={{ fontStyle: 'italic', color: theme.palette.tertiary.contrastText }}>
                      "{selectedRisk.mitigation}"
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            ) : (
              <Box sx={{ 
                height: '100%', 
                minHeight: 300, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: `2px dashed ${theme.palette.divider}`,
                borderRadius: theme.borderRadius || 2,
                p: 4,
                textAlign: 'center',
                color: 'text.secondary',
                backgroundColor: 'rgba(255,255,255,0.05)'
              }}>
                <Typography variant="h6">Select a risk indicator on the heat map</Typography>
                <Typography variant="body2">Click a numbered dot to see detailed assessment and mitigation strategies from across my professional background.</Typography>
              </Box>
            )}
          </AnimatePresence>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RiskHeatMap;
