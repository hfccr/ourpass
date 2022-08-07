import React, { useState, useEffect } from 'react';
import { CreateEventForm } from './CreateEventForm';
import { lit } from '../lit/index';
import { useContractFunction } from '@usedapp/core';
import { zoraContract } from './publishEdition';
import { useEthers } from '@usedapp/core';
import { MintEditionContract } from './MintEditionContract';
import { NFTFullPage, MediaConfiguration } from '@zoralabs/nft-components';
import { Button, Typography, Stack } from '@mui/material';
import { image } from './image';

// const networkInfo = {
//   network: ZDKNetwork.Ethereum,
//   chain: ZDKChain.Rinkeby,
// };

// const API_ENDPOINT = 'https://api.zora.co/graphql';
// const zdkArgs = {
//   endpoint: API_ENDPOINT,
//   networks: [networkInfo],
// };

// const zdk = new ZDK(zdkArgs);

// const zdkStrategyTestnet = new Strategies.ZDKFetchStrategy(Networks.RINKEBY);

export const CreateEvent = () => {
  const pastEdition = localStorage.getItem('editionContractAddress');
  const [editionContractAddress, setEditionContractAddress] = useState(
    pastEdition ? pastEdition : ''
  );
  const [editionMint, setEditionMint] = useState(false);
  const { state, send, events } = useContractFunction(
    zoraContract,
    'createEdition',
    {
      transactionName: 'createEdition',
    }
  );
  const { account, chainId } = useEthers();
  const createEvent = async (event, chain) => {
    console.log(event);
    alert('Saving Signing Condition On Lit Network');
    await lit.publishAllTags([event], chain);
    alert('Signing Condition Saved On Lit Network');
    alert('Saving event on IPFS using NFT.Storage');
    const metadata = await lit.storeEvent(event);
    const ipfsUrl = `https://ipfs.io/${metadata.url.replace(
      'ipfs://',
      'ipfs/'
    )}`;
    alert(ipfsUrl);
    alert(`Creating edition contract for event`);
    const description = { description: event.description, ipfs: metadata.url };
    const receipt = await send(
      `ourpass-${ipfsUrl}`,
      `OP${event.nonce}`,
      1,
      0,
      account,
      account,
      [
        0,
        1,
        0,
        5000000000000,
        0,
        0,
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      ],
      JSON.stringify(description),
      ipfsUrl,
      ipfsUrl
    );
    window.send = send;
    window.state = state;
    window.events = events;
    window.description = { event, metadata };
    console.log(receipt);
  };
  console.log('state', state);
  console.log('send', send);
  console.log('events', events);
  useEffect(() => {
    const { status } = state;
    console.log('STATUS CHECK');
    if (status === 'Success' && events) {
      console.log('SUCCESS');
      console.log('Events', events);
      const editionContractAddress = events[0].args.editionContractAddress;
      setEditionContractAddress(editionContractAddress);
      alert('Edition Contract Created At ' + editionContractAddress);
    }
  }, [state, events]);
  const onEditionMint = async () => {
    // await new Promise((r) => setTimeout(r, 5000));
    alert('Event mint successful', editionContractAddress);
    setEditionMint(true);
    localStorage.setItem('editionContractAddress', editionContractAddress);
    localStorage.setItem('description', JSON.stringify(window.description));
  };
  return (
    <Stack
      direction="row"
      spacing={4}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{ margin: 4 }}
    >
      <div>
        {!editionMint && editionContractAddress && !pastEdition && (
          <MintEditionContract
            address={editionContractAddress}
            account={account}
            onEditionMint={onEditionMint}
          />
        )}
        {!editionMint && !pastEdition && (
          <CreateEventForm
            createEvent={createEvent}
            onEditionMint={onEditionMint}
            account={account}
          />
        )}
        {pastEdition && (
          <>
            <Button
              onClick={() => {
                localStorage.removeItem('editionContractAddress');
                localStorage.removeItem('description');
              }}
            >
              Clear {pastEdition}
            </Button>
            <Typography color="white">
              Showing recently minted contract {pastEdition}
            </Typography>
            <MediaConfiguration networkId={`4`}>
              <NFTFullPage id="1" contract={editionContractAddress} />
            </MediaConfiguration>
          </>
        )}
      </div>
      <div>
        <img src={image} alt="exp" />
      </div>
    </Stack>
  );
};
