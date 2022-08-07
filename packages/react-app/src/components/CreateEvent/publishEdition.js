import { utils } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { zoraAbi } from './editionAbi';

export const ZoraNFTCreatorProxy_ADDRESS_RINKEBY =
  '0x2d2acD205bd6d9D0B3E79990e093768375AD3a30';
export const zoraInterface = new utils.Interface(zoraAbi.abi);
console.log('Utils created');
export const zoraContract = new Contract(
  ZoraNFTCreatorProxy_ADDRESS_RINKEBY,
  zoraInterface
);
console.log('Contract Created');
