import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto-mono/300.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/500.css';
import '@fontsource/roboto-mono/700.css';
import '@fontsource/plus-jakarta-sans';
import '@fontsource/ibm-plex-sans';

import './index.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { DAppProvider, Rinkeby } from '@usedapp/core';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Change this to your own Infura project id: https://infura.io/register
const INFURA_PROJECT_ID = '79020b8b09224b78b36b0a278dc1d061';
const config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: 'https://rinkeby.infura.io/v3/' + INFURA_PROJECT_ID,
  },
};

// You should replace this url with your own and put it into a .env file
// See all subgraphs: https://thegraph.com/explorer/
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app',
});

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
