import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const Intro = () => {
  return (
    <Container maxWidth="xl">
      <Stack spacing={8} alignItems="center">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 4,
          }}
        >
          🌜 🔥 🌛
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: 'md', textAlign: 'center', color: '#fff' }}
        >
          Connect Wallet To Continue
        </Typography>
        <Typography
          variant="h3"
          sx={{ maxWidth: 'md', textAlign: 'center', color: '#fff' }}
        >
          NFT event and pass generation built with zora, NFT.Storage and lit
          protocol
        </Typography>
        <Typography
          variant="h5"
          sx={{ maxWidth: 'md', textAlign: 'center', color: '#fff' }}
        >
          open source & trustless
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 4,
          }}
        >
          🌜 🔥 🌛
        </Typography>
      </Stack>
    </Container>
  );
};
