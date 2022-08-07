import React, { useState, useEffect } from 'react';
import { useContractFunction } from '@usedapp/core';
import { editionContractAbi } from './editionContractAbi';
import { utils } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { Typography } from '@mui/material';

const abi = editionContractAbi.abi;
const zoraInterface = new utils.Interface(abi);

export const MintEditionContract = ({ address, onEditionMint, account }) => {
  const zoraContract = new Contract(address, zoraInterface);
  const { state, send, events } = useContractFunction(
    zoraContract,
    'adminMint',
    {
      transactionName: 'adminMint',
    }
  );
  console.log('em state', state);
  console.log('em send', send);
  console.log('em events', events);
  useEffect(() => {
    const createEvent = async () => {
      alert(`Minting edition contract for event`);
      const receipt = await send(account, 1);
      console.log(receipt);
    };
    createEvent();
  }, []);
  useEffect(() => {
    const { status } = state;
    if (status === 'Success') {
      onEditionMint();
    }
  }, [state, events, onEditionMint]);
  return <Typography variant="h4" color="white"></Typography>;
};
