import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { WalletButton } from '../WalletButton';

export function AppHeader() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar color="secondary">
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            🌜 ourpass 🌛
          </Typography>
          <WalletButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
