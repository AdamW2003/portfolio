import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import TimelineData from '../modules/TimelineData.json';

const DashboardTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Parse dates and find range
  // Today is April 1, 2026 as per session context
  const parseDate = (d) => (d === "Present" ? new Date(2026, 3, 1) : new Date(d));
  
  const timelineWithDates = TimelineData.map(item => ({
    ...item,
    start: parseDate(item.startDate),
    end: parseDate(item.endDate)
  }));

  const minDate = new Date(Math.min(...timelineWithDates.map(item => item.start)));
  // Max date is either the latest end date or "Present"
  const maxDate = new Date(Math.max(...timelineWithDates.map(item => item.end)));
  
  // Add some padding to the top for "Present" indicators if needed
  maxDate.setMonth(maxDate.getMonth() + 2);

  const totalMonths = (maxDate.getFullYear() - minDate.getFullYear()) * 12 + (maxDate.getMonth() - minDate.getMonth());

  const getRelativePosition = (date) => {
    const months = (date.getFullYear() - minDate.getFullYear()) * 12 + (date.getMonth() - minDate.getMonth());
    return (months / totalMonths) * 100;
  };

  // Generate year labels
  const years = [];
  for (let y = minDate.getFullYear(); y <= maxDate.getFullYear(); y++) {
    years.push(y);
  }

  return (
    <Box sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      
      <Box sx={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: 1000, 
        height: isMobile ? 500 : 700, 
        mt: 4,
        display: 'flex',
        px: isMobile ? 2 : 4
      }}>
        {/* Date Axis */}
        <Box sx={{ 
          position: 'relative', 
          height: '100%', 
          width: 40,
          display: 'flex', 
          flexDirection: 'column-reverse', 
          justifyContent: 'space-between',
          borderRight: `2px solid ${theme.palette.divider}`,
          mr: 2
        }}>
          {years.map(year => (
            <Box key={year} sx={{ 
              position: 'absolute', 
              bottom: `${getRelativePosition(new Date(year, 0, 1))}%`,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              pr: 1
            }}>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                {year}
              </Typography>
              <Box sx={{ 
                position: 'absolute', 
                right: -2, 
                width: 8, 
                height: 2, 
                backgroundColor: theme.palette.divider 
              }} />
            </Box>
          ))}
        </Box>

        {/* Tracks Container */}
        <Box sx={{ 
          flexGrow: 1, 
          height: '100%', 
          display: 'flex', 
          justifyContent: 'space-around',
          position: 'relative'
        }}>
          {timelineWithDates.map((item, index) => {
            const startPos = getRelativePosition(item.start);
            const endPos = getRelativePosition(item.end);
            const isPresent = item.endDate === "Present";
            
            return (
              <Box key={item.id} sx={{ 
                position: 'relative', 
                height: '100%', 
                width: '100%',
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center'
              }}>
                {/* The Line */}
                <motion.div
                  initial={{ height: 0, bottom: `${startPos}%` }}
                  whileInView={{ height: `${endPos - startPos}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                  style={{ 
                    position: 'absolute',
                    left: '50%',
                    width: isMobile ? '4px' : '6px',
                    backgroundColor: theme.palette.secondary.main,
                    transform: 'translateX(-50%)',
                    borderRadius: '3px',
                    boxShadow: `0 0 10px ${theme.palette.secondary.main}44`
                  }}
                >
                  {/* Start Dot */}
                  <Box sx={{ 
                    position: 'absolute',
                    bottom: -6,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: isMobile ? 12 : 16,
                    height: isMobile ? 12 : 16,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.secondary.main,
                    border: `3px solid ${theme.palette.primary.main}`,
                  }} />

                  {/* End Indicator */}
                  {!isPresent ? (
                    <Box sx={{ 
                      position: 'absolute',
                      top: -6,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: isMobile ? 12 : 16,
                      height: isMobile ? 12 : 16,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.secondary.main,
                      border: `3px solid ${theme.palette.primary.main}`,
                    }} />
                  ) : (
                    <Box sx={{ 
                      position: 'absolute',
                      top: -10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '8px solid transparent',
                      borderRight: '8px solid transparent',
                      borderBottom: `15px solid ${theme.palette.secondary.main}`,
                    }} />
                  )}
                </motion.div>

                {/* Label/Content */}
                <Box sx={{ 
                  position: 'absolute',
                  bottom: `${(startPos + endPos) / 2}%`,
                  left: isMobile ? '55%' : '60%',
                  width: isMobile ? '100px' : '180px',
                  transform: 'translateY(50%)',
                  pointerEvents: 'none'
                }}>
                  <Tooltip title={item.description2 || item.description1} arrow>
                    <Box sx={{ pointerEvents: 'auto', cursor: 'help' }}>
                      <Typography variant="subtitle2" sx={{ 
                        fontWeight: 'bold', 
                        lineHeight: 1.1,
                        fontSize: isMobile ? '0.75rem' : '0.9rem',
                        color: theme.palette.text.primary,
                        textShadow: `0 0 5px ${theme.palette.primary.main}`
                      }}>
                        {item.title}
                      </Typography>
                      {!isMobile && (
                        <Typography variant="caption" display="block" sx={{ 
                          color: 'text.secondary',
                          lineHeight: 1.1,
                          mt: 0.5
                        }}>
                          {item.description1}
                        </Typography>
                      )}
                      <Typography variant="caption" sx={{ 
                        fontWeight: 'bold', 
                        color: theme.palette.secondary.main,
                        fontSize: '0.7rem'
                      }}>
                        {item.startDate.split('-')[0]} - {item.endDate === "Present" ? "Present" : item.endDate.split('-')[0]}
                      </Typography>
                    </Box>
                  </Tooltip>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardTimeline;
