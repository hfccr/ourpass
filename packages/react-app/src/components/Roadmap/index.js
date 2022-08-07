import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function Roadmap() {
  const dense = false;
  const secondary = false;
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752, margin: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography color="white" variant="h3">
            Add support for Google Pass and Apple Pass
          </Typography>
          <Typography color="white" variant="h3">
            Add guest market
          </Typography>
          <Typography color="white" variant="h3">
            Allow full lit conditions
          </Typography>
          <Typography color="white" variant="h3">
            Allow event managers to send metadata
          </Typography>
          <Typography color="white" variant="h3">
            Add alerts for pass refresh
          </Typography>
          <Typography color="white" variant="h3">
            Add PKP APIs for authentication
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
