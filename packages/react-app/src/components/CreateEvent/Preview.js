import React from 'react';
import { NFTFullPage } from '@zoralabs/nft-components';

export const Preview = ({ tokenId }) => {
  return <NFTFullPage id={`${tokenId}`} />;
};
