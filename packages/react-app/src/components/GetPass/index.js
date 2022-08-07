import { Typography, Container, Stack } from '@mui/material';
import React from 'react';
import { ContractCard } from './ContractCard';
import { image } from './image';

export const GetPass = () => {
  const contract = localStorage.getItem('editionContractAddress');
  const description = localStorage.getItem('description');
  let descriptionObject;
  if (description) {
    descriptionObject = JSON.parse(description);
  }
  return (
    <Container sx={{ margin: 5 }}>
      <Stack
        direction="row"
        spacing={4}
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ margin: 4 }}
      >
        {contract && description && (
          <ContractCard description={descriptionObject} contract={contract} />
        )}
        {!contract && <Typography>No Events Found</Typography>}
        <div>
          <img src={image} alt="exp" />
        </div>
      </Stack>
    </Container>
  );
};
