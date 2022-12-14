export const editionContractAbi = {
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract IZoraFeeManager",
          "name": "_zoraFeeManager",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_zoraERC721TransferHelper",
          "type": "address"
        },
        {
          "internalType": "contract FactoryUpgradeGate",
          "name": "_factoryUpgradeGate",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "Access_MissingRoleOrAdmin",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Access_OnlyAdmin",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Access_WithdrawNotAllowed",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "proposedAddress",
          "type": "address"
        }
      ],
      "name": "Admin_InvalidUpgradeAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Admin_UnableToFinalizeNotOpenEdition",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalToCurrentOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApproveToCaller",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BalanceQueryForZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintZeroQuantity",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Mint_SoldOut",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnerQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Presale_Inactive",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Presale_MerkleNotApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Presale_TooManyForAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Purchase_TooManyForAddress",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "correctPrice",
          "type": "uint256"
        }
      ],
      "name": "Purchase_WrongPrice",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Sale_Inactive",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "maxRoyaltyBPS",
          "type": "uint16"
        }
      ],
      "name": "Setup_RoyaltyPercentageTooHigh",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferFromIncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToNonERC721ReceiverImplementer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "URIQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Withdraw_FundsSendFailure",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beacon",
          "type": "address"
        }
      ],
      "name": "BeaconUpgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "source",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "FundsReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "changedBy",
          "type": "address"
        }
      ],
      "name": "FundsRecipientChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "numberOfMints",
          "type": "uint256"
        }
      ],
      "name": "OpenMintFinalized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "pricePerToken",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "firstPurchasedTokenId",
          "type": "uint256"
        }
      ],
      "name": "Sale",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "changedBy",
          "type": "address"
        }
      ],
      "name": "SalesConfigChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MINTER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "SALES_MANAGER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        }
      ],
      "name": "adminMint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "recipients",
          "type": "address[]"
        }
      ],
      "name": "adminMintAirdrop",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "config",
      "outputs": [
        {
          "internalType": "contract IMetadataRenderer",
          "name": "metadataRenderer",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "editionSize",
          "type": "uint64"
        },
        {
          "internalType": "uint16",
          "name": "royaltyBPS",
          "type": "uint16"
        },
        {
          "internalType": "address payable",
          "name": "fundsRecipient",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractVersion",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "finalizeOpenEdition",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_contractName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_contractSymbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_initialOwner",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_fundsRecipient",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "_editionSize",
          "type": "uint64"
        },
        {
          "internalType": "uint16",
          "name": "_royaltyBPS",
          "type": "uint16"
        },
        {
          "components": [
            {
              "internalType": "uint104",
              "name": "publicSalePrice",
              "type": "uint104"
            },
            {
              "internalType": "uint32",
              "name": "maxSalePurchasePerAddress",
              "type": "uint32"
            },
            {
              "internalType": "uint64",
              "name": "publicSaleStart",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "publicSaleEnd",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "presaleStart",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "presaleEnd",
              "type": "uint64"
            },
            {
              "internalType": "bytes32",
              "name": "presaleMerkleRoot",
              "type": "bytes32"
            }
          ],
          "internalType": "struct IERC721Drop.SalesConfiguration",
          "name": "_salesConfig",
          "type": "tuple"
        },
        {
          "internalType": "contract IMetadataRenderer",
          "name": "_metadataRenderer",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_metadataRendererInit",
          "type": "bytes"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "isAdmin",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftOwner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "metadataRenderer",
      "outputs": [
        {
          "internalType": "contract IMetadataRenderer",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "minter",
          "type": "address"
        }
      ],
      "name": "mintedPerAddress",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "totalMints",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "presaleMints",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "publicMints",
              "type": "uint256"
            }
          ],
          "internalType": "struct IERC721Drop.AddressMintDetails",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "presaleMintsByAddress",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "proxiableUUID",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        }
      ],
      "name": "purchase",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxQuantity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pricePerToken",
          "type": "uint256"
        },
        {
          "internalType": "bytes32[]",
          "name": "merkleProof",
          "type": "bytes32[]"
        }
      ],
      "name": "purchasePresale",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_salePrice",
          "type": "uint256"
        }
      ],
      "name": "royaltyInfo",
      "outputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "royaltyAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "saleDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "publicSaleActive",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "presaleActive",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "publicSalePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "publicSaleStart",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "publicSaleEnd",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "presaleStart",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "presaleEnd",
              "type": "uint64"
            },
            {
              "internalType": "bytes32",
              "name": "presaleMerkleRoot",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "maxSalePurchasePerAddress",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalMinted",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxSupply",
              "type": "uint256"
            }
          ],
          "internalType": "struct IERC721Drop.SaleDetails",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "salesConfig",
      "outputs": [
        {
          "internalType": "uint104",
          "name": "publicSalePrice",
          "type": "uint104"
        },
        {
          "internalType": "uint32",
          "name": "maxSalePurchasePerAddress",
          "type": "uint32"
        },
        {
          "internalType": "uint64",
          "name": "publicSaleStart",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "publicSaleEnd",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "presaleStart",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "presaleEnd",
          "type": "uint64"
        },
        {
          "internalType": "bytes32",
          "name": "presaleMerkleRoot",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "newRecipientAddress",
          "type": "address"
        }
      ],
      "name": "setFundsRecipient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "setOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint104",
          "name": "publicSalePrice",
          "type": "uint104"
        },
        {
          "internalType": "uint32",
          "name": "maxSalePurchasePerAddress",
          "type": "uint32"
        },
        {
          "internalType": "uint64",
          "name": "publicSaleStart",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "publicSaleEnd",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "presaleStart",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "presaleEnd",
          "type": "uint64"
        },
        {
          "internalType": "bytes32",
          "name": "presaleMerkleRoot",
          "type": "bytes32"
        }
      ],
      "name": "setSaleConfiguration",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        }
      ],
      "name": "upgradeTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "upgradeToAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "zoraFeeForAmount",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "zoraFeeManager",
      "outputs": [
        {
          "internalType": "contract IZoraFeeManager",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
  "bytecode": {
    "object": "0x610160604052306080527ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc960c0527f5ebbf78043a2215b522b1366a193ec74dd1f54e441e841a87b9653246a9c49a660e0523480156200005e57600080fd5b5060405162005599380380620055998339810160408190526200008191620001b7565b600760a052600054610100900460ff16620000a35760005460ff1615620000ad565b620000ad62000171565b620001155760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff1615801562000138576000805461ffff19166101011790555b6001600160a01b038085166101405283811661010052821661012052801562000167576000805461ff00191690555b505050506200020b565b600062000189306200018f60201b62002da21760201c565b15905090565b6001600160a01b03163b151590565b6001600160a01b0381168114620001b457600080fd5b50565b600080600060608486031215620001cd57600080fd5b8351620001da816200019e565b6020850151909350620001ed816200019e565b604085015190925062000200816200019e565b809150509250925092565b60805160a05160c05160e0516101005161012051610140516152ed620002ac6000396000818161094e01526125030152600061344001526000612453015260008181610a7801528181610e370152818161177d01526119ad015260008181610a2401528181611f8b01526122bd015260006108dd01526000818161153d015281816115d301528181611b5901528181611bef0152611ce601526152ed6000f3fe6080604052600436106103225760003560e01c80636352211e116101a5578063b8ae5a2c116100ec578063e58306f911610095578063ee37be391161006f578063ee37be3914610aef578063efef39a114610b0f578063faff3c7014610b22578063ffdb716314610b4257600080fd5b8063e58306f914610a9a578063e8a3d48514610aba578063e985e9c514610acf57600080fd5b8063d5391393116100c6578063d539139314610a12578063d547741f14610a46578063e26bd34314610a6657600080fd5b8063b8ae5a2c14610990578063c87b56dd146109b0578063d445b978146109d057600080fd5b806395d89b411161014e578063a22cb46511610128578063a22cb4651461091c578063b6eb9c861461093c578063b88d4fde1461097057600080fd5b806395d89b41146108b1578063a0a8e460146108c6578063a217fddf1461090757600080fd5b806379502c551161017f57806379502c55146107ce5780638da5cb5b1461085557806391d148541461086a57600080fd5b80636352211e1461076f578063703199701461078f57806370a08231146107ae57600080fd5b80632a55205a1161026957806341e96eb1116102125780634f1ef286116101ec5780634f1ef2861461071957806352d1902d1461072c57806361fea7681461074157600080fd5b806341e96eb1146106c457806342842e0e146106d957806342966c68146106f957600080fd5b806336568abe1161024357806336568abe1461066f5780633659cfe61461068f5780633ccfd60b146106af57600080fd5b80632a55205a146105ee5780632f2ff15d1461062d5780633474a4a61461064d57600080fd5b806318160ddd116102cb578063248a9ca3116102a5578063248a9ca31461058a57806324d7806c146105bb57806325024a2b146105db57600080fd5b806318160ddd146104545780631d2c0b381461047b57806323b872dd1461056a57600080fd5b8063095ea7b3116102fc578063095ea7b3146103f257806310a7eb5d1461041457806313af40351461043457600080fd5b806301ffc9a71461036357806306fdde0314610398578063081812fc146103ba57600080fd5b3661035e5760405134815233907f8e47b87b0ef542cdfa1659c551d88bad38aa7f452d2bbb349ab7530dfec8be8f9060200160405180910390a2005b600080fd5b34801561036f57600080fd5b5061038361037e36600461478d565b610b62565b60405190151581526020015b60405180910390f35b3480156103a457600080fd5b506103ad610c57565b60405161038f9190614802565b3480156103c657600080fd5b506103da6103d5366004614815565b610ce9565b6040516001600160a01b03909116815260200161038f565b3480156103fe57600080fd5b5061041261040d366004614853565b610d46565b005b34801561042057600080fd5b5061041261042f36600461487f565b610e06565b34801561044057600080fd5b5061041261044f36600461487f565b610f28565b34801561046057600080fd5b5060665460655403600019015b60405190815260200161038f565b34801561048757600080fd5b50610162546101635461016454610511926cffffffffffffffffffffffffff8116926d0100000000000000000000000000820463ffffffff16927101000000000000000000000000000000000090920467ffffffffffffffff9081169281831692680100000000000000008104831692700100000000000000000000000000000000909104169087565b604080516cffffffffffffffffffffffffff909816885263ffffffff909616602088015267ffffffffffffffff948516958701959095529183166060860152821660808501521660a083015260c082015260e00161038f565b34801561057657600080fd5b5061041261058536600461489c565b610f9c565b34801561059657600080fd5b5061046d6105a5366004614815565b600090815261012d602052604090206001015490565b3480156105c757600080fd5b506103836105d636600461487f565b610fa7565b61046d6105e9366004614922565b610fe7565b3480156105fa57600080fd5b5061060e610609366004614983565b6112c1565b604080516001600160a01b03909316835260208301919091520161038f565b34801561063957600080fd5b506104126106483660046149a5565b611330565b34801561065957600080fd5b50610662611356565b60405161038f91906149d5565b34801561067b57600080fd5b5061041261068a3660046149a5565b6114a6565b34801561069b57600080fd5b506104126106aa36600461487f565b611532565b3480156106bb57600080fd5b506104126116cd565b3480156106d057600080fd5b5061041261197c565b3480156106e557600080fd5b506104126106f436600461489c565b611b28565b34801561070557600080fd5b50610412610714366004614815565b611b43565b610412610727366004614b7e565b611b4e565b34801561073857600080fd5b5061046d611cd9565b34801561074d57600080fd5b5061046d61075c36600461487f565b6101656020526000908152604090205481565b34801561077b57600080fd5b506103da61078a366004614815565b611d9e565b34801561079b57600080fd5b50610160546001600160a01b03166103da565b3480156107ba57600080fd5b5061046d6107c936600461487f565b611db0565b3480156107da57600080fd5b506101605461016154610815916001600160a01b0380821692600160a01b830467ffffffffffffffff1692600160e01b900461ffff16911684565b604080516001600160a01b03958616815267ffffffffffffffff909416602085015261ffff9092169183019190915291909116606082015260800161038f565b34801561086157600080fd5b506103da611e18565b34801561087657600080fd5b506103836108853660046149a5565b600091825261012d602090815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156108bd57600080fd5b506103ad611e32565b3480156108d257600080fd5b5060405163ffffffff7f000000000000000000000000000000000000000000000000000000000000000016815260200161038f565b34801561091357600080fd5b5061046d600081565b34801561092857600080fd5b50610412610937366004614bdc565b611e41565b34801561094857600080fd5b506103da7f000000000000000000000000000000000000000000000000000000000000000081565b34801561097c57600080fd5b5061041261098b366004614c0a565b611ef0565b34801561099c57600080fd5b5061046d6109ab366004614c76565b611f5a565b3480156109bc57600080fd5b506103ad6109cb366004614815565b6120d8565b3480156109dc57600080fd5b506109f06109eb36600461487f565b6121a4565b604080518251815260208084015190820152918101519082015260600161038f565b348015610a1e57600080fd5b5061046d7f000000000000000000000000000000000000000000000000000000000000000081565b348015610a5257600080fd5b50610412610a613660046149a5565b612266565b348015610a7257600080fd5b5061046d7f000000000000000000000000000000000000000000000000000000000000000081565b348015610aa657600080fd5b5061046d610ab5366004614853565b61228c565b348015610ac657600080fd5b506103ad6123c3565b348015610adb57600080fd5b50610383610aea366004614cb8565b61244f565b348015610afb57600080fd5b5061060e610b0a366004614815565b6124c4565b61046d610b1d366004614815565b612597565b348015610b2e57600080fd5b50610412610b3d366004614ded565b6127f8565b348015610b4e57600080fd5b50610412610b5d366004614edc565b612bda565b6000610b6d82612db1565b80610bb957507f8da5cb5b000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b80610c0557507f2a55205a000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b80610c5157507fde8379b6000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b606060678054610c6690614f5b565b80601f0160208091040260200160405190810160405280929190818152602001828054610c9290614f5b565b8015610cdf5780601f10610cb457610100808354040283529160200191610cdf565b820191906000526020600020905b815481529060010190602001808311610cc257829003601f168201915b5050505050905090565b6000610cf482612e07565b610d2a576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506000908152606b60205260409020546001600160a01b031690565b6000610d5182611d9e565b9050806001600160a01b0316836001600160a01b03161415610d9f576040517f943f7b8c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336001600160a01b03821614801590610dbf5750610dbd813361244f565b155b15610df6576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e01838383612e40565b505050565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a663960205260409020547f00000000000000000000000000000000000000000000000000000000000000009060ff16158015610e825750600081815261012d6020908152604080832033845290915290205460ff16155b15610ec1576040517fcee8157c000000000000000000000000000000000000000000000000000000008152600481018290526024015b60405180910390fd5b61016180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0384169081179091556040513391907f70a7ea5c664ab9c21baf3da59bb2f1e1ca33557b08a0031fab4f17076744995190600090a35050565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a6639602052604090205460ff16610f90576040517f02bd6bd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f9981612eb4565b50565b610e01838383612f2a565b6001600160a01b03811660009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a6639602052604081205460ff16610c51565b6000600260fb54141561103c5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610eb8565b600260fb55610160548690600160a01b900467ffffffffffffffff166110656065546000190190565b61106f9083614fde565b11156110a7576040517f717c513000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110af6131ac565b6110e5576040517f95ed3c1a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111578484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505061016454604080513360208201529081018c9052606081018b90529092506080019050604051602081830303815290604052805190602001206131fd565b61118d576040517f85b70e5200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111978786614ff6565b34146111dc576111a78786614ff6565b6040517f6a1c179e000000000000000000000000000000000000000000000000000000008152600401610eb891815260200190565b3360009081526101656020526040812080548992906111fc908490614fde565b9091555050336000908152610165602052604090205486101561124b576040517fa7b32bb100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112553388613213565b60008761126061324b565b61126a9190615015565b90508588336001600160a01b03167f4e26b0356a15833a75d497ecc40ebbb716b99466ed0dba9454f1fff451e25a90846040516112a991815260200190565b60405180910390a4600160fb55979650505050505050565b6101615460009081906001600160a01b03166112ed575050610161546001600160a01b03166000611329565b61016154610160546001600160a01b03909116906127109061131a90600160e01b900461ffff1686614ff6565b611324919061502c565b915091505b9250929050565b600082815261012d602052604090206001015461134c8161325c565b610e018383613266565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101919091526040518061016001604052806113c361330a565b151581526020016113d26131ac565b15158152610162546cffffffffffffffffffffffffff8116602083015267ffffffffffffffff710100000000000000000000000000000000008204811660408401526101635480821660608501526801000000000000000081048216608085015270010000000000000000000000000000000090041660a08301526101645460c083015263ffffffff6d01000000000000000000000000009091041660e0820152610100016114846065546000190190565b815261016054600160a01b900467ffffffffffffffff16602090910152919050565b6001600160a01b03811633146115245760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610eb8565b61152e8282613351565b5050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156115d15760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610eb8565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661162c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146116a85760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610eb8565b6116b1816133d6565b60408051600080825260208201909252610f9991839190613567565b600260fb5414156117205760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610eb8565b600260fb553347600080611733836124c4565b6001600160a01b03861660009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a66396020526040902054919350915060ff161580156117c557507f0000000000000000000000000000000000000000000000000000000000000000600090815261012d602090815260408083206001600160a01b038816845290915290205460ff16155b80156117e35750816001600160a01b0316846001600160a01b031614155b80156117fe5750610161546001600160a01b03858116911614155b15611835576040517f1dab829b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156118dc576000826001600160a01b0316826203345090604051600060405180830381858888f193505050503d806000811461188e576040519150601f19603f3d011682016040523d82523d6000602084013e611893565b606091505b50509050806118ce576040517f39debd5b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6118d88285615015565b9350505b610161546040516000916001600160a01b0316906203345090869084818181858888f193505050503d8060008114611930576040519150601f19603f3d011682016040523d82523d6000602084013e611935565b606091505b5050905080611970576040517f39debd5b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050600160fb55505050565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a663960205260409020547f00000000000000000000000000000000000000000000000000000000000000009060ff161580156119f85750600081815261012d6020908152604080832033845290915290205460ff16155b15611a32576040517fcee8157c00000000000000000000000000000000000000000000000000000000815260048101829052602401610eb8565b61016054600160a01b900467ffffffffffffffff90811614611a80576040517fe742c08400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60655460001901610160805467ffffffffffffffff92909216600160a01b027fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff909216919091179055611ad03390565b61016054604051600160a01b90910467ffffffffffffffff1681526001600160a01b0391909116907fb6cc1e876b8d7479c8afe025a58658b0f3c3ec5bd0f28cb4261326b162069bf89060200160405180910390a250565b610e0183838360405180602001604052806000815250611ef0565b610f99816001613707565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415611bed5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610eb8565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611c487f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614611cc45760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610eb8565b611ccd826133d6565b61152e82826001613567565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614611d795760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610eb8565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6000611da98261395e565b5192915050565b60006001600160a01b038216611df2576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506001600160a01b03166000908152606a602052604090205467ffffffffffffffff1690565b6000611e2d61015f546001600160a01b031690565b905090565b606060688054610c6690614f5b565b6001600160a01b038216331415611e84576040517fb06307db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336000818152606c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b611efb848484612f2a565b6001600160a01b0383163b15158015611f1d5750611f1b84848484613aa0565b155b15611f54576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a663960205260408120547f00000000000000000000000000000000000000000000000000000000000000009060ff16158015611fd65750600081815261012d6020908152604080832033845290915290205460ff16155b15612010576040517fcee8157c00000000000000000000000000000000000000000000000000000000815260048101829052602401610eb8565b610160548390600160a01b900467ffffffffffffffff166120346065546000190190565b61203e9083614fde565b1115612076576040517f717c513000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606554808581015b808310156120c4576120b9888884860381811061209d5761209d615067565b90506020020160208101906120b2919061487f565b6001613213565b60019092019161207e565b506120cd61324b565b979650505050505050565b60606120e382612e07565b612119576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610160546040517fc87b56dd000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b039091169063c87b56dd90602401600060405180830381865afa15801561217c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c519190810190615096565b6121c860405180606001604052806000815260200160008152602001600081525090565b6040518060600160405280612209846001600160a01b03166000908152606a602052604090205467ffffffffffffffff680100000000000000009091041690565b81526001600160a01b03841660008181526101656020908152604080832054828601819052938352606a909152908190205492019168010000000000000000900467ffffffffffffffff1661225e9190615015565b905292915050565b600082815261012d60205260409020600101546122828161325c565b610e018383613351565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a663960205260408120547f00000000000000000000000000000000000000000000000000000000000000009060ff161580156123085750600081815261012d6020908152604080832033845290915290205460ff16155b15612342576040517fcee8157c00000000000000000000000000000000000000000000000000000000815260048101829052602401610eb8565b610160548390600160a01b900467ffffffffffffffff166123666065546000190190565b6123709083614fde565b11156123a8576040517f717c513000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6123b28585613213565b6123ba61324b565b95945050505050565b61016054604080517fe8a3d48500000000000000000000000000000000000000000000000000000000815290516060926001600160a01b03169163e8a3d4859160048083019260009291908290030181865afa158015612427573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611e2d9190810190615096565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316141561249357506001610c51565b6001600160a01b038084166000908152606c602090815260408083209386168352929052205460ff165b9392505050565b6040517f2e0c16490000000000000000000000000000000000000000000000000000000081523060048201526000908190819081906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632e0c16499060240160408051808303816000875af115801561254b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061256f9190615104565b9092509050816127106125828388614ff6565b61258c919061502c565b935093505050915091565b6000600260fb5414156125ec5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610eb8565b600260fb55610160548290600160a01b900467ffffffffffffffff166126156065546000190190565b61261f9083614fde565b1115612657576040517f717c513000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61265f61330a565b612695576040517ff12dcc7f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610162546cffffffffffffffffffffffffff166126b28482614ff6565b34146126c2576111a78482614ff6565b610162546d0100000000000000000000000000900463ffffffff161580159061274e5750610162543360009081526101656020908152604080832054606a909252909120546d010000000000000000000000000090920463ffffffff1691869068010000000000000000900467ffffffffffffffff166127429190614fde565b61274c9190615015565b115b15612785576040517f220ae94c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61278f3385613213565b60008461279a61324b565b6127a49190615015565b90508185336001600160a01b03167f4e26b0356a15833a75d497ecc40ebbb716b99466ed0dba9454f1fff451e25a90846040516127e391815260200190565b60405180910390a4600160fb55949350505050565b600054610100900460ff166128135760005460ff1615612817565b303b155b6128895760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610eb8565b600054610100900460ff161580156128c857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b6128d28a8a613beb565b6128da613c72565b6128e2613cf1565b6128ed600089613d76565b6128f688612eb4565b61016054611388600160e01b90910461ffff161115612945576040517f6680e9820000000000000000000000000000000000000000000000000000000081526113886004820152602401610eb8565b8351610162805460208701516040808901516cffffffffffffffffffffffffff9095167fffffffffffffffffffffffffffffff0000000000000000000000000000000000909316929092176d010000000000000000000000000063ffffffff90921691909102177fffffffffffffff0000000000000000ffffffffffffffffffffffffffffffffff167101000000000000000000000000000000000067ffffffffffffffff948516021790915560608601516101638054608089015160a08a01519386167fffffffffffffffffffffffffffffffff00000000000000000000000000000000909216919091176801000000000000000091861691909102177fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff167001000000000000000000000000000000009285169290920291909117905560c08601516101645561016080546001600160a01b038781167fffff000000000000000000000000000000000000000000000000000000000000909216600160a01b958c16959095027fffff0000ffffffffffffffff000000000000000000000000000000000000000016949094178117600160e01b61ffff8b16021790915561016180547fffffffffffffffffffffffff000000000000000000000000000000000000000016938b1693909317909255517f856a7ffa00000000000000000000000000000000000000000000000000000000815263856a7ffa90612b6d908590600401614802565b600060405180830381600087803b158015612b8757600080fd5b505af1158015612b9b573d6000803e3d6000fd5b505050508015612bce57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50505050505050505050565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a6639602052604090205460ff16612c42576040517f02bd6bd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61016280546cffffffffffffffffffffffffff89167fffffffffffffffffffffffffffffff0000000000000000000000000000000000909116176d010000000000000000000000000063ffffffff891602177fffffffffffffff0000000000000000ffffffffffffffffffffffffffffffffff167101000000000000000000000000000000000067ffffffffffffffff888116919091029190911790915561016380548683167fffffffffffffffffffffffffffffffff00000000000000000000000000000000909116176801000000000000000086841602177fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff1670010000000000000000000000000000000092851692909202919091179055610164819055336001600160a01b03167fc1ff5e4744ac8dd2b8027a10e3723b165975297501c71c4e7dcb8796d96375db60405160405180910390a250505050505050565b6001600160a01b03163b151590565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b000000000000000000000000000000000000000000000000000000001480610c515750610c5182613d80565b600081600111158015612e1b575060655482105b8015610c51575050600090815260696020526040902054600160e01b900460ff161590565b6000828152606b602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b61015f546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a361015f80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6000612f358261395e565b9050836001600160a01b031681600001516001600160a01b031614612f86576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000336001600160a01b0386161480612fa45750612fa4853361244f565b80612fbf575033612fb484610ce9565b6001600160a01b0316145b905080612ff8576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038416613038576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61304460008487612e40565b6001600160a01b038581166000908152606a6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000080821667ffffffffffffffff92831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652606990945282852080547fffffffff0000000000000000000000000000000000000000000000000000000016909417600160a01b42909216919091021783558701808452922080549193909116613161576065548214613161578054602086015167ffffffffffffffff16600160a01b027fffffffff000000000000000000000000000000000000000000000000000000009091166001600160a01b038a16171781555b50505082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050505050565b61016354600090426801000000000000000090910467ffffffffffffffff1611801590611e2d575050610163544270010000000000000000000000000000000090910467ffffffffffffffff161190565b60008261320a8584613e63565b14949350505050565b6000600882116132235781613226565b60085b90506132328382613ed7565b61323c8183615015565b91505060008111613213575050565b60006001606554611e2d9190615015565b610f998133614079565b600082815261012d602090815260408083206001600160a01b038516845290915290205460ff1661152e57600082815261012d602090815260408083206001600160a01b03851684529091529020805460ff191660011790556132c63390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61016254600090427101000000000000000000000000000000000090910467ffffffffffffffff1611801590611e2d575050610163544267ffffffffffffffff9091161190565b600082815261012d602090815260408083206001600160a01b038516845290915290205460ff161561152e57600082815261012d602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a6639602052604090205460ff1661343e576040517f02bd6bd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663739958338261349f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381865afa158015613502573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906135269190615132565b610f99576040517fef2bf7d40000000000000000000000000000000000000000000000000000000081526001600160a01b0382166004820152602401610eb8565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561359a57610e01836140fa565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156135f4575060408051601f3d908101601f191682019092526135f19181019061514f565b60015b6136665760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610eb8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146136fb5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610eb8565b50610e018383836141d0565b60006137128361395e565b80519091508215613791576000336001600160a01b038316148061373b575061373b823361244f565b8061375657503361374b86610ce9565b6001600160a01b0316145b90508061378f576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b61379d60008583612e40565b6001600160a01b038082166000818152606a60209081526040808320805470010000000000000000000000000000000060001967ffffffffffffffff8084169190910181167fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000841681178390048216600190810183169093027fffffffffffffffff0000000000000000ffffffffffffffff0000000000000000909416179290921783558b8652606990945282852080547fffffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffff42909316600160a01b027fffffffff000000000000000000000000000000000000000000000000000000009091169097179690961716600160e01b178555918901808452922080549194909116613913576065548214613913578054602087015167ffffffffffffffff16600160a01b027fffffffff000000000000000000000000000000000000000000000000000000009091166001600160a01b038716171781555b5050604051869250600091506001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a450506066805460010190555050565b6040805160608101825260008082526020820181905291810191909152818060011115801561398e575060655481105b15613a6e57600081815260696020908152604091829020825160608101845290546001600160a01b0381168252600160a01b810467ffffffffffffffff1692820192909252600160e01b90910460ff16151591810182905290613a6c5780516001600160a01b031615613a02579392505050565b5060001901600081815260696020908152604091829020825160608101845290546001600160a01b038116808352600160a01b820467ffffffffffffffff1693830193909352600160e01b900460ff1615159281019290925215613a67579392505050565b613a02565b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f150b7a020000000000000000000000000000000000000000000000000000000081526000906001600160a01b0385169063150b7a0290613aee903390899088908890600401615168565b6020604051808303816000875af1925050508015613b29575060408051601f3d908101601f19168201909252613b26918101906151a4565b60015b613b9d573d808015613b57576040519150601f19603f3d011682016040523d82523d6000602084013e613b5c565b606091505b508051613b95576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050949350505050565b600054610100900460ff16613c685760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610eb8565b61152e82826141f5565b600054610100900460ff16613cef5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610eb8565b565b600054610100900460ff16613d6e5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610eb8565b613cef6142a3565b61152e8282613266565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480613e1357507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b80610c5157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610c51565b600081815b8451811015613ecf576000858281518110613e8557613e85615067565b60200260200101519050808311613eab5760008381526020829052604090209250613ebc565b600081815260208490526040902092505b5080613ec7816151c1565b915050613e68565b509392505050565b6065546001600160a01b038316613f1a576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81613f51576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b0383166000818152606a6020908152604080832080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000811667ffffffffffffffff8083168a018116918217680100000000000000007fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000090941690921783900481168a01811690920217909155858452606990925290912080547fffffffff0000000000000000000000000000000000000000000000000000000016909217600160a01b4290921691909102179055808083015b6040516001830192906001600160a01b038716906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a48082141561402c5750606555505050565b600082815261012d602090815260408083206001600160a01b038516845290915290205460ff1661152e576140b8816001600160a01b03166014614327565b6140c3836020614327565b6040516020016140d49291906151dc565b60408051601f198184030181529082905262461bcd60e51b8252610eb891600401614802565b6001600160a01b0381163b6141775760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610eb8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6141d983614550565b6000825111806141e65750805b15610e0157611f548383614590565b600054610100900460ff166142725760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610eb8565b81516142859060679060208501906146c6565b5080516142999060689060208401906146c6565b5060016065555050565b600054610100900460ff166143205760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610eb8565b600160fb55565b60606000614336836002614ff6565b614341906002614fde565b67ffffffffffffffff81111561435957614359614aa0565b6040519080825280601f01601f191660200182016040528015614383576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106143ba576143ba615067565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061441d5761441d615067565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000614459846002614ff6565b614464906001614fde565b90505b6001811115614501577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106144a5576144a5615067565b1a60f81b8282815181106144bb576144bb615067565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c936144fa8161525d565b9050614467565b5083156124bd5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610eb8565b614559816140fa565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b61460f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610eb8565b600080846001600160a01b03168460405161462a9190615274565b600060405180830381855af49150503d8060008114614665576040519150601f19603f3d011682016040523d82523d6000602084013e61466a565b606091505b50915091506123ba8282604051806060016040528060278152602001615291602791396060831561469c5750816124bd565b8251156146ac5782518084602001fd5b8160405162461bcd60e51b8152600401610eb89190614802565b8280546146d290614f5b565b90600052602060002090601f0160209004810192826146f4576000855561473a565b82601f1061470d57805160ff191683800117855561473a565b8280016001018555821561473a579182015b8281111561473a57825182559160200191906001019061471f565b5061474692915061474a565b5090565b5b80821115614746576000815560010161474b565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610f9957600080fd5b60006020828403121561479f57600080fd5b81356124bd8161475f565b60005b838110156147c55781810151838201526020016147ad565b83811115611f545750506000910152565b600081518084526147ee8160208601602086016147aa565b601f01601f19169290920160200192915050565b6020815260006124bd60208301846147d6565b60006020828403121561482757600080fd5b5035919050565b6001600160a01b0381168114610f9957600080fd5b803561484e8161482e565b919050565b6000806040838503121561486657600080fd5b82356148718161482e565b946020939093013593505050565b60006020828403121561489157600080fd5b81356124bd8161482e565b6000806000606084860312156148b157600080fd5b83356148bc8161482e565b925060208401356148cc8161482e565b929592945050506040919091013590565b60008083601f8401126148ef57600080fd5b50813567ffffffffffffffff81111561490757600080fd5b6020830191508360208260051b850101111561132957600080fd5b60008060008060006080868803121561493a57600080fd5b853594506020860135935060408601359250606086013567ffffffffffffffff81111561496657600080fd5b614972888289016148dd565b969995985093965092949392505050565b6000806040838503121561499657600080fd5b50508035926020909101359150565b600080604083850312156149b857600080fd5b8235915060208301356149ca8161482e565b809150509250929050565b815115158152610160810160208301516149f3602084018215159052565b50604083015160408301526060830151614a19606084018267ffffffffffffffff169052565b506080830151614a35608084018267ffffffffffffffff169052565b5060a0830151614a5160a084018267ffffffffffffffff169052565b5060c0830151614a6d60c084018267ffffffffffffffff169052565b5060e083810151908301526101008084015190830152610120808401519083015261014092830151929091019190915290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715614af857614af8614aa0565b604052919050565b600067ffffffffffffffff821115614b1a57614b1a614aa0565b50601f01601f191660200190565b600082601f830112614b3957600080fd5b8135614b4c614b4782614b00565b614acf565b818152846020838601011115614b6157600080fd5b816020850160208301376000918101602001919091529392505050565b60008060408385031215614b9157600080fd5b8235614b9c8161482e565b9150602083013567ffffffffffffffff811115614bb857600080fd5b614bc485828601614b28565b9150509250929050565b8015158114610f9957600080fd5b60008060408385031215614bef57600080fd5b8235614bfa8161482e565b915060208301356149ca81614bce565b60008060008060808587031215614c2057600080fd5b8435614c2b8161482e565b93506020850135614c3b8161482e565b925060408501359150606085013567ffffffffffffffff811115614c5e57600080fd5b614c6a87828801614b28565b91505092959194509250565b60008060208385031215614c8957600080fd5b823567ffffffffffffffff811115614ca057600080fd5b614cac858286016148dd565b90969095509350505050565b60008060408385031215614ccb57600080fd5b8235614cd68161482e565b915060208301356149ca8161482e565b803567ffffffffffffffff8116811461484e57600080fd5b803561ffff8116811461484e57600080fd5b80356cffffffffffffffffffffffffff8116811461484e57600080fd5b803563ffffffff8116811461484e57600080fd5b600060e08284031215614d5357600080fd5b60405160e0810181811067ffffffffffffffff82111715614d7657614d76614aa0565b604052905080614d8583614d10565b8152614d9360208401614d2d565b6020820152614da460408401614ce6565b6040820152614db560608401614ce6565b6060820152614dc660808401614ce6565b6080820152614dd760a08401614ce6565b60a082015260c083013560c08201525092915050565b60008060008060008060008060006101e08a8c031215614e0c57600080fd5b893567ffffffffffffffff80821115614e2457600080fd5b614e308d838e01614b28565b9a5060208c0135915080821115614e4657600080fd5b614e528d838e01614b28565b9950614e6060408d01614843565b9850614e6e60608d01614843565b9750614e7c60808d01614ce6565b9650614e8a60a08d01614cfe565b9550614e998d60c08e01614d41565b9450614ea86101a08d01614843565b93506101c08c0135915080821115614ebf57600080fd5b50614ecc8c828d01614b28565b9150509295985092959850929598565b600080600080600080600060e0888a031215614ef757600080fd5b614f0088614d10565b9650614f0e60208901614d2d565b9550614f1c60408901614ce6565b9450614f2a60608901614ce6565b9350614f3860808901614ce6565b9250614f4660a08901614ce6565b915060c0880135905092959891949750929550565b600181811c90821680614f6f57607f821691505b60208210811415614fa9577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115614ff157614ff1614faf565b500190565b600081600019048311821515161561501057615010614faf565b500290565b60008282101561502757615027614faf565b500390565b600082615062577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156150a857600080fd5b815167ffffffffffffffff8111156150bf57600080fd5b8201601f810184136150d057600080fd5b80516150de614b4782614b00565b8181528560208385010111156150f357600080fd5b6123ba8260208301602086016147aa565b6000806040838503121561511757600080fd5b82516151228161482e565b6020939093015192949293505050565b60006020828403121561514457600080fd5b81516124bd81614bce565b60006020828403121561516157600080fd5b5051919050565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261519a60808301846147d6565b9695505050505050565b6000602082840312156151b657600080fd5b81516124bd8161475f565b60006000198214156151d5576151d5614faf565b5060010190565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516152148160178501602088016147aa565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516152518160288401602088016147aa565b01602801949350505050565b60008161526c5761526c614faf565b506000190190565b600082516152868184602087016147aa565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212202a4c013bdacf2021814f9c2460acfd9e8fe965eb59ed668ab0545ee6a01b522f64736f6c634300080a0033",
    "sourceMap": "2296:49669:35:-:0;;;1332:4:13;1289:48;;2871:19:35;2832:58;;2942:26;2896:72;;5827:323;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2520:1;346:19:54;;2369:13:12;;;;;;;:48;;2405:12;;;;2404:13;2369:48;;;2385:16;:14;:16::i;:::-;2361:107;;;;-1:-1:-1;;;2361:107:12;;995:2:68;2361:107:12;;;977:21:68;1034:2;1014:18;;;1007:30;1073:34;1053:18;;;1046:62;-1:-1:-1;;;1124:18:68;;;1117:44;1178:19;;2361:107:12;;;;;;;;2479:19;2502:13;;;;;;2501:14;2525:98;;;;2559:13;:20;;-1:-1:-1;;2593:19:12;;;;;2525:98;-1:-1:-1;;;;;5999:32:35;;::::1;;::::0;6041:52;;::::1;;::::0;6103:40;::::1;;::::0;2645:66:12;;;;2695:5;2679:21;;-1:-1:-1;;2679:21:12;;;2645:66;2080:637;5827:323:35;;;2296:49669;;3037:123:12;3085:4;3109:44;3147:4;3109:29;;;;;:44;;:::i;:::-;3108:45;3101:52;;3037:123;:::o;1186:320:18:-;-1:-1:-1;;;;;1476:19:18;;:23;;;1186:320::o;14:148:68:-;-1:-1:-1;;;;;106:31:68;;96:42;;86:70;;152:1;149;142:12;86:70;14:148;:::o;167:621::-;306:6;314;322;375:2;363:9;354:7;350:23;346:32;343:52;;;391:1;388;381:12;343:52;423:9;417:16;442:48;484:5;442:48;:::i;:::-;559:2;544:18;;538:25;509:5;;-1:-1:-1;572:50:68;538:25;572:50;:::i;:::-;693:2;678:18;;672:25;641:7;;-1:-1:-1;706:50:68;672:25;706:50;:::i;:::-;775:7;765:17;;;167:621;;;;;:::o;793:410::-;2296:49669:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436106103225760003560e01c80636352211e116101a5578063b8ae5a2c116100ec578063e58306f911610095578063ee37be391161006f578063ee37be3914610aef578063efef39a114610b0f578063faff3c7014610b22578063ffdb716314610b4257600080fd5b8063e58306f914610a9a578063e8a3d48514610aba578063e985e9c514610acf57600080fd5b8063d5391393116100c6578063d539139314610a12578063d547741f14610a46578063e26bd34314610a6657600080fd5b8063b8ae5a2c14610990578063c87b56dd146109b0578063d445b978146109d057600080fd5b806395d89b411161014e578063a22cb46511610128578063a22cb4651461091c578063b6eb9c861461093c578063b88d4fde1461097057600080fd5b806395d89b41146108b1578063a0a8e460146108c6578063a217fddf1461090757600080fd5b806379502c551161017f57806379502c55146107ce5780638da5cb5b1461085557806391d148541461086a57600080fd5b80636352211e1461076f578063703199701461078f57806370a08231146107ae57600080fd5b80632a55205a1161026957806341e96eb1116102125780634f1ef286116101ec5780634f1ef2861461071957806352d1902d1461072c57806361fea7681461074157600080fd5b806341e96eb1146106c457806342842e0e146106d957806342966c68146106f957600080fd5b806336568abe1161024357806336568abe1461066f5780633659cfe61461068f5780633ccfd60b146106af57600080fd5b80632a55205a146105ee5780632f2ff15d1461062d5780633474a4a61461064d57600080fd5b806318160ddd116102cb578063248a9ca3116102a5578063248a9ca31461058a57806324d7806c146105bb57806325024a2b146105db57600080fd5b806318160ddd146104545780631d2c0b381461047b57806323b872dd1461056a57600080fd5b8063095ea7b3116102fc578063095ea7b3146103f257806310a7eb5d1461041457806313af40351461043457600080fd5b806301ffc9a71461036357806306fdde0314610398578063081812fc146103ba57600080fd5b3661035e5760405134815233907f8e47b87b0ef542cdfa1659c551d88bad38aa7f452d2bbb349ab7530dfec8be8f9060200160405180910390a2005b600080fd5b34801561036f57600080fd5b5061038361037e36600461478d565b610b62565b60405190151581526020015b60405180910390f35b3480156103a457600080fd5b506103ad610c57565b60405161038f9190614802565b3480156103c657600080fd5b506103da6103d5366004614815565b610ce9565b6040516001600160a01b03909116815260200161038f565b3480156103fe57600080fd5b5061041261040d366004614853565b610d46565b005b34801561042057600080fd5b5061041261042f36600461487f565b610e06565b34801561044057600080fd5b5061041261044f36600461487f565b610f28565b34801561046057600080fd5b5060665460655403600019015b60405190815260200161038f565b34801561048757600080fd5b50610162546101635461016454610511926cffffffffffffffffffffffffff8116926d0100000000000000000000000000820463ffffffff16927101000000000000000000000000000000000090920467ffffffffffffffff9081169281831692680100000000000000008104831692700100000000000000000000000000000000909104169087565b604080516cffffffffffffffffffffffffff909816885263ffffffff909616602088015267ffffffffffffffff948516958701959095529183166060860152821660808501521660a083015260c082015260e00161038f565b34801561057657600080fd5b5061041261058536600461489c565b610f9c565b34801561059657600080fd5b5061046d6105a5366004614815565b600090815261012d602052604090206001015490565b3480156105c757600080fd5b506103836105d636600461487f565b610fa7565b61046d6105e9366004614922565b610fe7565b3480156105fa57600080fd5b5061060e610609366004614983565b6112c1565b604080516001600160a01b03909316835260208301919091520161038f565b34801561063957600080fd5b506104126106483660046149a5565b611330565b34801561065957600080fd5b50610662611356565b60405161038f91906149d5565b34801561067b57600080fd5b5061041261068a3660046149a5565b6114a6565b34801561069b57600080fd5b506104126106aa36600461487f565b611532565b3480156106bb57600080fd5b506104126116cd565b3480156106d057600080fd5b5061041261197c565b3480156106e557600080fd5b506104126106f436600461489c565b611b28565b34801561070557600080fd5b50610412610714366004614815565b611b43565b610412610727366004614b7e565b611b4e565b34801561073857600080fd5b5061046d611cd9565b34801561074d57600080fd5b5061046d61075c36600461487f565b6101656020526000908152604090205481565b34801561077b57600080fd5b506103da61078a366004614815565b611d9e565b34801561079b57600080fd5b50610160546001600160a01b03166103da565b3480156107ba57600080fd5b5061046d6107c936600461487f565b611db0565b3480156107da57600080fd5b506101605461016154610815916001600160a01b0380821692600160a01b830467ffffffffffffffff1692600160e01b900461ffff16911684565b604080516001600160a01b03958616815267ffffffffffffffff909416602085015261ffff9092169183019190915291909116606082015260800161038f565b34801561086157600080fd5b506103da611e18565b34801561087657600080fd5b506103836108853660046149a5565b600091825261012d602090815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156108bd57600080fd5b506103ad611e32565b3480156108d257600080fd5b5060405163ffffffff7f000000000000000000000000000000000000000000000000000000000000000016815260200161038f565b34801561091357600080fd5b5061046d600081565b34801561092857600080fd5b50610412610937366004614bdc565b611e41565b34801561094857600080fd5b506103da7f000000000000000000000000000000000000000000000000000000000000000081565b34801561097c57600080fd5b5061041261098b366004614c0a565b611ef0565b34801561099c57600080fd5b5061046d6109ab366004614c76565b611f5a565b3480156109bc57600080fd5b506103ad6109cb366004614815565b6120d8565b3480156109dc57600080fd5b506109f06109eb36600461487f565b6121a4565b604080518251815260208084015190820152918101519082015260600161038f565b348015610a1e57600080fd5b5061046d7f000000000000000000000000000000000000000000000000000000000000000081565b348015610a5257600080fd5b50610412610a613660046149a5565b612266565b348015610a7257600080fd5b5061046d7f000000000000000000000000000000000000000000000000000000000000000081565b348015610aa657600080fd5b5061046d610ab5366004614853565b61228c565b348015610ac657600080fd5b506103ad6123c3565b348015610adb57600080fd5b50610383610aea366004614cb8565b61244f565b348015610afb57600080fd5b5061060e610b0a366004614815565b6124c4565b61046d610b1d366004614815565b612597565b348015610b2e57600080fd5b50610412610b3d366004614ded565b6127f8565b348015610b4e57600080fd5b50610412610b5d366004614edc565b612bda565b6000610b6d82612db1565b80610bb957507f8da5cb5b000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b80610c0557507f2a55205a000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b80610c5157507fde8379b6000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b606060678054610c6690614f5b565b80601f0160208091040260200160405190810160405280929190818152602001828054610c9290614f5b565b8015610cdf5780601f10610cb457610100808354040283529160200191610cdf565b820191906000526020600020905b815481529060010190602001808311610cc257829003601f168201915b5050505050905090565b6000610cf482612e07565b610d2a576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506000908152606b60205260409020546001600160a01b031690565b6000610d5182611d9e565b9050806001600160a01b0316836001600160a01b03161415610d9f576040517f943f7b8c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336001600160a01b03821614801590610dbf5750610dbd813361244f565b155b15610df6576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e01838383612e40565b505050565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a663960205260409020547f00000000000000000000000000000000000000000000000000000000000000009060ff16158015610e825750600081815261012d6020908152604080832033845290915290205460ff16155b15610ec1576040517fcee8157c000000000000000000000000000000000000000000000000000000008152600481018290526024015b60405180910390fd5b61016180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0384169081179091556040513391907f70a7ea5c664ab9c21baf3da59bb2f1e1ca33557b08a0031fab4f17076744995190600090a35050565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a6639602052604090205460ff16610f90576040517f02bd6bd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f9981612eb4565b50565b610e01838383612f2a565b6001600160a01b03811660009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a6639602052604081205460ff16610c51565b6000600260fb54141561103c5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610eb8565b600260fb55610160548690600160a01b900467ffffffffffffffff166110656065546000190190565b61106f9083614fde565b11156110a7576040517f717c513000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110af6131ac565b6110e5576040517f95ed3c1a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111578484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505061016454604080513360208201529081018c9052606081018b90529092506080019050604051602081830303815290604052805190602001206131fd565b61118d576040517f85b70e5200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111978786614ff6565b34146111dc576111a78786614ff6565b6040517f6a1c179e000000000000000000000000000000000000000000000000000000008152600401610eb891815260200190565b3360009081526101656020526040812080548992906111fc908490614fde565b9091555050336000908152610165602052604090205486101561124b576040517fa7b32bb100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112553388613213565b60008761126061324b565b61126a9190615015565b90508588336001600160a01b03167f4e26b0356a15833a75d497ecc40ebbb716b99466ed0dba9454f1fff451e25a90846040516112a991815260200190565b60405180910390a4600160fb55979650505050505050565b6101615460009081906001600160a01b03166112ed575050610161546001600160a01b03166000611329565b61016154610160546001600160a01b03909116906127109061131a90600160e01b900461ffff1686614ff6565b611324919061502c565b915091505b9250929050565b600082815261012d602052604090206001015461134c8161325c565b610e018383613266565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101919091526040518061016001604052806113c361330a565b151581526020016113d26131ac565b15158152610162546cffffffffffffffffffffffffff8116602083015267ffffffffffffffff710100000000000000000000000000000000008204811660408401526101635480821660608501526801000000000000000081048216608085015270010000000000000000000000000000000090041660a08301526101645460c083015263ffffffff6d01000000000000000000000000009091041660e0820152610100016114846065546000190190565b815261016054600160a01b900467ffffffffffffffff16602090910152919050565b6001600160a01b03811633146115245760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610eb8565b61152e8282613351565b5050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156115d15760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610eb8565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661162c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146116a85760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610eb8565b6116b1816133d6565b60408051600080825260208201909252610f9991839190613567565b600260fb5414156117205760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610eb8565b600260fb553347600080611733836124c4565b6001600160a01b03861660009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a66396020526040902054919350915060ff161580156117c557507f0000000000000000000000000000000000000000000000000000000000000000600090815261012d602090815260408083206001600160a01b038816845290915290205460ff16155b80156117e35750816001600160a01b0316846001600160a01b031614155b80156117fe5750610161546001600160a01b03858116911614155b15611835576040517f1dab829b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156118dc576000826001600160a01b0316826203345090604051600060405180830381858888f193505050503d806000811461188e576040519150601f19603f3d011682016040523d82523d6000602084013e611893565b606091505b50509050806118ce576040517f39debd5b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6118d88285615015565b9350505b610161546040516000916001600160a01b0316906203345090869084818181858888f193505050503d8060008114611930576040519150601f19603f3d011682016040523d82523d6000602084013e611935565b606091505b5050905080611970576040517f39debd5b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050600160fb55505050565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a663960205260409020547f00000000000000000000000000000000000000000000000000000000000000009060ff161580156119f85750600081815261012d6020908152604080832033845290915290205460ff16155b15611a32576040517fcee8157c00000000000000000000000000000000000000000000000000000000815260048101829052602401610eb8565b61016054600160a01b900467ffffffffffffffff90811614611a80576040517fe742c08400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60655460001901610160805467ffffffffffffffff92909216600160a01b027fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff909216919091179055611ad03390565b61016054604051600160a01b90910467ffffffffffffffff1681526001600160a01b0391909116907fb6cc1e876b8d7479c8afe025a58658b0f3c3ec5bd0f28cb4261326b162069bf89060200160405180910390a250565b610e0183838360405180602001604052806000815250611ef0565b610f99816001613707565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415611bed5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610eb8565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611c487f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614611cc45760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610eb8565b611ccd826133d6565b61152e82826001613567565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614611d795760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610eb8565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6000611da98261395e565b5192915050565b60006001600160a01b038216611df2576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506001600160a01b03166000908152606a602052604090205467ffffffffffffffff1690565b6000611e2d61015f546001600160a01b031690565b905090565b606060688054610c6690614f5b565b6001600160a01b038216331415611e84576040517fb06307db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336000818152606c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b611efb848484612f2a565b6001600160a01b0383163b15158015611f1d5750611f1b84848484613aa0565b155b15611f54576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a663960205260408120547f00000000000000000000000000000000000000000000000000000000000000009060ff16158015611fd65750600081815261012d6020908152604080832033845290915290205460ff16155b15612010576040517fcee8157c00000000000000000000000000000000000000000000000000000000815260048101829052602401610eb8565b610160548390600160a01b900467ffffffffffffffff166120346065546000190190565b61203e9083614fde565b1115612076576040517f717c513000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606554808581015b808310156120c4576120b9888884860381811061209d5761209d615067565b90506020020160208101906120b2919061487f565b6001613213565b60019092019161207e565b506120cd61324b565b979650505050505050565b60606120e382612e07565b612119576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610160546040517fc87b56dd000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b039091169063c87b56dd90602401600060405180830381865afa15801561217c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c519190810190615096565b6121c860405180606001604052806000815260200160008152602001600081525090565b6040518060600160405280612209846001600160a01b03166000908152606a602052604090205467ffffffffffffffff680100000000000000009091041690565b81526001600160a01b03841660008181526101656020908152604080832054828601819052938352606a909152908190205492019168010000000000000000900467ffffffffffffffff1661225e9190615015565b905292915050565b600082815261012d60205260409020600101546122828161325c565b610e018383613351565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a663960205260408120547f00000000000000000000000000000000000000000000000000000000000000009060ff161580156123085750600081815261012d6020908152604080832033845290915290205460ff16155b15612342576040517fcee8157c00000000000000000000000000000000000000000000000000000000815260048101829052602401610eb8565b610160548390600160a01b900467ffffffffffffffff166123666065546000190190565b6123709083614fde565b11156123a8576040517f717c513000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6123b28585613213565b6123ba61324b565b95945050505050565b61016054604080517fe8a3d48500000000000000000000000000000000000000000000000000000000815290516060926001600160a01b03169163e8a3d4859160048083019260009291908290030181865afa158015612427573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611e2d9190810190615096565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316141561249357506001610c51565b6001600160a01b038084166000908152606c602090815260408083209386168352929052205460ff165b9392505050565b6040517f2e0c16490000000000000000000000000000000000000000000000000000000081523060048201526000908190819081906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632e0c16499060240160408051808303816000875af115801561254b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061256f9190615104565b9092509050816127106125828388614ff6565b61258c919061502c565b935093505050915091565b6000600260fb5414156125ec5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610eb8565b600260fb55610160548290600160a01b900467ffffffffffffffff166126156065546000190190565b61261f9083614fde565b1115612657576040517f717c513000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61265f61330a565b612695576040517ff12dcc7f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610162546cffffffffffffffffffffffffff166126b28482614ff6565b34146126c2576111a78482614ff6565b610162546d0100000000000000000000000000900463ffffffff161580159061274e5750610162543360009081526101656020908152604080832054606a909252909120546d010000000000000000000000000090920463ffffffff1691869068010000000000000000900467ffffffffffffffff166127429190614fde565b61274c9190615015565b115b15612785576040517f220ae94c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61278f3385613213565b60008461279a61324b565b6127a49190615015565b90508185336001600160a01b03167f4e26b0356a15833a75d497ecc40ebbb716b99466ed0dba9454f1fff451e25a90846040516127e391815260200190565b60405180910390a4600160fb55949350505050565b600054610100900460ff166128135760005460ff1615612817565b303b155b6128895760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610eb8565b600054610100900460ff161580156128c857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b6128d28a8a613beb565b6128da613c72565b6128e2613cf1565b6128ed600089613d76565b6128f688612eb4565b61016054611388600160e01b90910461ffff161115612945576040517f6680e9820000000000000000000000000000000000000000000000000000000081526113886004820152602401610eb8565b8351610162805460208701516040808901516cffffffffffffffffffffffffff9095167fffffffffffffffffffffffffffffff0000000000000000000000000000000000909316929092176d010000000000000000000000000063ffffffff90921691909102177fffffffffffffff0000000000000000ffffffffffffffffffffffffffffffffff167101000000000000000000000000000000000067ffffffffffffffff948516021790915560608601516101638054608089015160a08a01519386167fffffffffffffffffffffffffffffffff00000000000000000000000000000000909216919091176801000000000000000091861691909102177fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff167001000000000000000000000000000000009285169290920291909117905560c08601516101645561016080546001600160a01b038781167fffff000000000000000000000000000000000000000000000000000000000000909216600160a01b958c16959095027fffff0000ffffffffffffffff000000000000000000000000000000000000000016949094178117600160e01b61ffff8b16021790915561016180547fffffffffffffffffffffffff000000000000000000000000000000000000000016938b1693909317909255517f856a7ffa00000000000000000000000000000000000000000000000000000000815263856a7ffa90612b6d908590600401614802565b600060405180830381600087803b158015612b8757600080fd5b505af1158015612b9b573d6000803e3d6000fd5b505050508015612bce57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50505050505050505050565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a6639602052604090205460ff16612c42576040517f02bd6bd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61016280546cffffffffffffffffffffffffff89167fffffffffffffffffffffffffffffff0000000000000000000000000000000000909116176d010000000000000000000000000063ffffffff891602177fffffffffffffff0000000000000000ffffffffffffffffffffffffffffffffff167101000000000000000000000000000000000067ffffffffffffffff888116919091029190911790915561016380548683167fffffffffffffffffffffffffffffffff00000000000000000000000000000000909116176801000000000000000086841602177fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff1670010000000000000000000000000000000092851692909202919091179055610164819055336001600160a01b03167fc1ff5e4744ac8dd2b8027a10e3723b165975297501c71c4e7dcb8796d96375db60405160405180910390a250505050505050565b6001600160a01b03163b151590565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b000000000000000000000000000000000000000000000000000000001480610c515750610c5182613d80565b600081600111158015612e1b575060655482105b8015610c51575050600090815260696020526040902054600160e01b900460ff161590565b6000828152606b602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b61015f546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a361015f80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6000612f358261395e565b9050836001600160a01b031681600001516001600160a01b031614612f86576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000336001600160a01b0386161480612fa45750612fa4853361244f565b80612fbf575033612fb484610ce9565b6001600160a01b0316145b905080612ff8576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038416613038576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61304460008487612e40565b6001600160a01b038581166000908152606a6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000080821667ffffffffffffffff92831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652606990945282852080547fffffffff0000000000000000000000000000000000000000000000000000000016909417600160a01b42909216919091021783558701808452922080549193909116613161576065548214613161578054602086015167ffffffffffffffff16600160a01b027fffffffff000000000000000000000000000000000000000000000000000000009091166001600160a01b038a16171781555b50505082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050505050565b61016354600090426801000000000000000090910467ffffffffffffffff1611801590611e2d575050610163544270010000000000000000000000000000000090910467ffffffffffffffff161190565b60008261320a8584613e63565b14949350505050565b6000600882116132235781613226565b60085b90506132328382613ed7565b61323c8183615015565b91505060008111613213575050565b60006001606554611e2d9190615015565b610f998133614079565b600082815261012d602090815260408083206001600160a01b038516845290915290205460ff1661152e57600082815261012d602090815260408083206001600160a01b03851684529091529020805460ff191660011790556132c63390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61016254600090427101000000000000000000000000000000000090910467ffffffffffffffff1611801590611e2d575050610163544267ffffffffffffffff9091161190565b600082815261012d602090815260408083206001600160a01b038516845290915290205460ff161561152e57600082815261012d602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b3360009081527fa581b17bfc4d6578e300cafbf34fd2dc1fef0270d8c73f88a99dcde2859a6639602052604090205460ff1661343e576040517f02bd6bd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663739958338261349f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381865afa158015613502573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906135269190615132565b610f99576040517fef2bf7d40000000000000000000000000000000000000000000000000000000081526001600160a01b0382166004820152602401610eb8565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561359a57610e01836140fa565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156135f4575060408051601f3d908101601f191682019092526135f19181019061514f565b60015b6136665760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610eb8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146136fb5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610eb8565b50610e018383836141d0565b60006137128361395e565b80519091508215613791576000336001600160a01b038316148061373b575061373b823361244f565b8061375657503361374b86610ce9565b6001600160a01b0316145b90508061378f576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b61379d60008583612e40565b6001600160a01b038082166000818152606a60209081526040808320805470010000000000000000000000000000000060001967ffffffffffffffff8084169190910181167fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000841681178390048216600190810183169093027fffffffffffffffff0000000000000000ffffffffffffffff0000000000000000909416179290921783558b8652606990945282852080547fffffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffff42909316600160a01b027fffffffff000000000000000000000000000000000000000000000000000000009091169097179690961716600160e01b178555918901808452922080549194909116613913576065548214613913578054602087015167ffffffffffffffff16600160a01b027fffffffff000000000000000000000000000000000000000000000000000000009091166001600160a01b038716171781555b5050604051869250600091506001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a450506066805460010190555050565b6040805160608101825260008082526020820181905291810191909152818060011115801561398e575060655481105b15613a6e57600081815260696020908152604091829020825160608101845290546001600160a01b0381168252600160a01b810467ffffffffffffffff1692820192909252600160e01b90910460ff16151591810182905290613a6c5780516001600160a01b031615613a02579392505050565b5060001901600081815260696020908152604091829020825160608101845290546001600160a01b038116808352600160a01b820467ffffffffffffffff1693830193909352600160e01b900460ff1615159281019290925215613a67579392505050565b613a02565b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f150b7a020000000000000000000000000000000000000000000000000000000081526000906001600160a01b0385169063150b7a0290613aee903390899088908890600401615168565b6020604051808303816000875af1925050508015613b29575060408051601f3d908101601f19168201909252613b26918101906151a4565b60015b613b9d573d808015613b57576040519150601f19603f3d011682016040523d82523d6000602084013e613b5c565b606091505b508051613b95576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050949350505050565b600054610100900460ff16613c685760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610eb8565b61152e82826141f5565b600054610100900460ff16613cef5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610eb8565b565b600054610100900460ff16613d6e5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610eb8565b613cef6142a3565b61152e8282613266565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480613e1357507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b80610c5157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610c51565b600081815b8451811015613ecf576000858281518110613e8557613e85615067565b60200260200101519050808311613eab5760008381526020829052604090209250613ebc565b600081815260208490526040902092505b5080613ec7816151c1565b915050613e68565b509392505050565b6065546001600160a01b038316613f1a576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81613f51576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b0383166000818152606a6020908152604080832080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000811667ffffffffffffffff8083168a018116918217680100000000000000007fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000090941690921783900481168a01811690920217909155858452606990925290912080547fffffffff0000000000000000000000000000000000000000000000000000000016909217600160a01b4290921691909102179055808083015b6040516001830192906001600160a01b038716906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a48082141561402c5750606555505050565b600082815261012d602090815260408083206001600160a01b038516845290915290205460ff1661152e576140b8816001600160a01b03166014614327565b6140c3836020614327565b6040516020016140d49291906151dc565b60408051601f198184030181529082905262461bcd60e51b8252610eb891600401614802565b6001600160a01b0381163b6141775760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610eb8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6141d983614550565b6000825111806141e65750805b15610e0157611f548383614590565b600054610100900460ff166142725760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610eb8565b81516142859060679060208501906146c6565b5080516142999060689060208401906146c6565b5060016065555050565b600054610100900460ff166143205760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610eb8565b600160fb55565b60606000614336836002614ff6565b614341906002614fde565b67ffffffffffffffff81111561435957614359614aa0565b6040519080825280601f01601f191660200182016040528015614383576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106143ba576143ba615067565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061441d5761441d615067565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000614459846002614ff6565b614464906001614fde565b90505b6001811115614501577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106144a5576144a5615067565b1a60f81b8282815181106144bb576144bb615067565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c936144fa8161525d565b9050614467565b5083156124bd5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610eb8565b614559816140fa565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b61460f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610eb8565b600080846001600160a01b03168460405161462a9190615274565b600060405180830381855af49150503d8060008114614665576040519150601f19603f3d011682016040523d82523d6000602084013e61466a565b606091505b50915091506123ba8282604051806060016040528060278152602001615291602791396060831561469c5750816124bd565b8251156146ac5782518084602001fd5b8160405162461bcd60e51b8152600401610eb89190614802565b8280546146d290614f5b565b90600052602060002090601f0160209004810192826146f4576000855561473a565b82601f1061470d57805160ff191683800117855561473a565b8280016001018555821561473a579182015b8281111561473a57825182559160200191906001019061471f565b5061474692915061474a565b5090565b5b80821115614746576000815560010161474b565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610f9957600080fd5b60006020828403121561479f57600080fd5b81356124bd8161475f565b60005b838110156147c55781810151838201526020016147ad565b83811115611f545750506000910152565b600081518084526147ee8160208601602086016147aa565b601f01601f19169290920160200192915050565b6020815260006124bd60208301846147d6565b60006020828403121561482757600080fd5b5035919050565b6001600160a01b0381168114610f9957600080fd5b803561484e8161482e565b919050565b6000806040838503121561486657600080fd5b82356148718161482e565b946020939093013593505050565b60006020828403121561489157600080fd5b81356124bd8161482e565b6000806000606084860312156148b157600080fd5b83356148bc8161482e565b925060208401356148cc8161482e565b929592945050506040919091013590565b60008083601f8401126148ef57600080fd5b50813567ffffffffffffffff81111561490757600080fd5b6020830191508360208260051b850101111561132957600080fd5b60008060008060006080868803121561493a57600080fd5b853594506020860135935060408601359250606086013567ffffffffffffffff81111561496657600080fd5b614972888289016148dd565b969995985093965092949392505050565b6000806040838503121561499657600080fd5b50508035926020909101359150565b600080604083850312156149b857600080fd5b8235915060208301356149ca8161482e565b809150509250929050565b815115158152610160810160208301516149f3602084018215159052565b50604083015160408301526060830151614a19606084018267ffffffffffffffff169052565b506080830151614a35608084018267ffffffffffffffff169052565b5060a0830151614a5160a084018267ffffffffffffffff169052565b5060c0830151614a6d60c084018267ffffffffffffffff169052565b5060e083810151908301526101008084015190830152610120808401519083015261014092830151929091019190915290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715614af857614af8614aa0565b604052919050565b600067ffffffffffffffff821115614b1a57614b1a614aa0565b50601f01601f191660200190565b600082601f830112614b3957600080fd5b8135614b4c614b4782614b00565b614acf565b818152846020838601011115614b6157600080fd5b816020850160208301376000918101602001919091529392505050565b60008060408385031215614b9157600080fd5b8235614b9c8161482e565b9150602083013567ffffffffffffffff811115614bb857600080fd5b614bc485828601614b28565b9150509250929050565b8015158114610f9957600080fd5b60008060408385031215614bef57600080fd5b8235614bfa8161482e565b915060208301356149ca81614bce565b60008060008060808587031215614c2057600080fd5b8435614c2b8161482e565b93506020850135614c3b8161482e565b925060408501359150606085013567ffffffffffffffff811115614c5e57600080fd5b614c6a87828801614b28565b91505092959194509250565b60008060208385031215614c8957600080fd5b823567ffffffffffffffff811115614ca057600080fd5b614cac858286016148dd565b90969095509350505050565b60008060408385031215614ccb57600080fd5b8235614cd68161482e565b915060208301356149ca8161482e565b803567ffffffffffffffff8116811461484e57600080fd5b803561ffff8116811461484e57600080fd5b80356cffffffffffffffffffffffffff8116811461484e57600080fd5b803563ffffffff8116811461484e57600080fd5b600060e08284031215614d5357600080fd5b60405160e0810181811067ffffffffffffffff82111715614d7657614d76614aa0565b604052905080614d8583614d10565b8152614d9360208401614d2d565b6020820152614da460408401614ce6565b6040820152614db560608401614ce6565b6060820152614dc660808401614ce6565b6080820152614dd760a08401614ce6565b60a082015260c083013560c08201525092915050565b60008060008060008060008060006101e08a8c031215614e0c57600080fd5b893567ffffffffffffffff80821115614e2457600080fd5b614e308d838e01614b28565b9a5060208c0135915080821115614e4657600080fd5b614e528d838e01614b28565b9950614e6060408d01614843565b9850614e6e60608d01614843565b9750614e7c60808d01614ce6565b9650614e8a60a08d01614cfe565b9550614e998d60c08e01614d41565b9450614ea86101a08d01614843565b93506101c08c0135915080821115614ebf57600080fd5b50614ecc8c828d01614b28565b9150509295985092959850929598565b600080600080600080600060e0888a031215614ef757600080fd5b614f0088614d10565b9650614f0e60208901614d2d565b9550614f1c60408901614ce6565b9450614f2a60608901614ce6565b9350614f3860808901614ce6565b9250614f4660a08901614ce6565b915060c0880135905092959891949750929550565b600181811c90821680614f6f57607f821691505b60208210811415614fa9577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115614ff157614ff1614faf565b500190565b600081600019048311821515161561501057615010614faf565b500290565b60008282101561502757615027614faf565b500390565b600082615062577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156150a857600080fd5b815167ffffffffffffffff8111156150bf57600080fd5b8201601f810184136150d057600080fd5b80516150de614b4782614b00565b8181528560208385010111156150f357600080fd5b6123ba8260208301602086016147aa565b6000806040838503121561511757600080fd5b82516151228161482e565b6020939093015192949293505050565b60006020828403121561514457600080fd5b81516124bd81614bce565b60006020828403121561516157600080fd5b5051919050565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261519a60808301846147d6565b9695505050505050565b6000602082840312156151b657600080fd5b81516124bd8161475f565b60006000198214156151d5576151d5614faf565b5060010190565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516152148160178501602088016147aa565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516152518160288401602088016147aa565b01602801949350505050565b60008161526c5761526c614faf565b506000190190565b600082516152868184602087016147aa565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212202a4c013bdacf2021814f9c2460acfd9e8fe965eb59ed668ab0545ee6a01b522f64736f6c634300080a0033",
    "sourceMap": "2296:49669:35:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;332:36:51;;358:9;160:25:68;;346:10:51;;332:36;;148:2:68;133:18;332:36:51;;;;;;;2296:49669:35;;;;;51475:488;;;;;;;;;;-1:-1:-1;51475:488:35;;;;;:::i;:::-;;:::i;:::-;;;889:14:68;;882:22;864:41;;852:2;837:18;51475:488:35;;;;;;;;6589:98:0;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;8056:200::-;;;;;;;;;;-1:-1:-1;8056:200:0;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;2075:55:68;;;2057:74;;2045:2;2030:18;8056:200:0;1911:226:68;7622:373:0;;;;;;;;;;-1:-1:-1;7622:373:0;;;;;:::i;:::-;;:::i;:::-;;38945:312:35;;;;;;;;;;-1:-1:-1;38945:312:35;;;;;:::i;:::-;;:::i;33501:89::-;;;;;;;;;;-1:-1:-1;33501:89:35;;;;;:::i;:::-;;:::i;2779:306:0:-;;;;;;;;;;-1:-1:-1;3038:12:0;;3022:13;;:28;-1:-1:-1;;3022:46:0;2779:306;;;160:25:68;;;148:2;133:18;2779:306:0;14:177:68;298:49:50;;;;;;;;;;-1:-1:-1;298:49:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3714:28:68;3702:41;;;3684:60;;3792:10;3780:23;;;3775:2;3760:18;;3753:51;3823:18;3877:15;;;3857:18;;;3850:43;;;;3929:15;;;3924:2;3909:18;;3902:43;3982:15;;3976:3;3961:19;;3954:44;4035:15;4029:3;4014:19;;4007:44;4082:3;4067:19;;4060:35;3671:3;3656:19;298:49:50;3379:722:68;8895:164:0;;;;;;;;;;-1:-1:-1;8895:164:0;;;;;:::i;:::-;;:::i;4721:129:4:-;;;;;;;;;;-1:-1:-1;4721:129:4;;;;;:::i;:::-;4795:7;4821:12;;;:6;:12;;;;;:22;;;;4721:129;8314:117:35;;;;;;;;;;-1:-1:-1;8314:117:35;;;;;:::i;:::-;;:::i;23000:1352::-;;;;;;:::i;:::-;;:::i;9871:391::-;;;;;;;;;;-1:-1:-1;9871:391:35;;;;;:::i;:::-;;:::i;:::-;;;;-1:-1:-1;;;;;6398:55:68;;;6380:74;;6485:2;6470:18;;6463:34;;;;6353:18;9871:391:35;6206:297:68;5100:145:4;;;;;;;;;;-1:-1:-1;5100:145:4;;;;;:::i;:::-;;:::i;10362:815:35:-;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;6117:214:4:-;;;;;;;;;;-1:-1:-1;6117:214:4;;;;;:::i;:::-;;:::i;3315:197:13:-;;;;;;;;;;-1:-1:-1;3315:197:13;;;;;:::i;:::-;;:::i;45235:1130:35:-;;;;;;;;;;;;;:::i;49651:346::-;;;;;;;;;;;;;:::i;9125:179:0:-;;;;;;;;;;-1:-1:-1;9125:179:0;;;;;:::i;:::-;;:::i;9692:75:35:-;;;;;;;;;;-1:-1:-1;9692:75:35;;;;;:::i;:::-;;:::i;3761:222:13:-;;;;;;:::i;:::-;;:::i;3004:131::-;;;;;;;;;;;;;:::i;437:56:50:-;;;;;;;;;;-1:-1:-1;437:56:50;;;;;:::i;:::-;;;;;;;;;;;;;;6404:123:0;;;;;;;;;;-1:-1:-1;6404:123:0;;;;;:::i;:::-;;:::i;50790:136:35:-;;;;;;;;;;-1:-1:-1;50895:6:35;:23;-1:-1:-1;;;;;50895:23:35;50790:136;;3920:203:0;;;;;;;;;;-1:-1:-1;3920:203:0;;;;;:::i;:::-;;:::i;216:39:50:-;;;;;;;;;;-1:-1:-1;216:39:50;;;;;;-1:-1:-1;;;;;216:39:50;;;;-1:-1:-1;;;216:39:50;;;;;-1:-1:-1;;;216:39:50;;;;;;;;;;;;-1:-1:-1;;;;;10362:15:68;;;10344:34;;10426:18;10414:31;;;10409:2;10394:18;;10387:59;10494:6;10482:19;;;10462:18;;;10455:47;;;;10538:15;;;;10533:2;10518:18;;10511:43;10270:3;10255:19;216:39:50;10014:546:68;50350:159:35;;;;;;;;;;;;;:::i;3203:145:4:-;;;;;;;;;;-1:-1:-1;3203:145:4;;;;;:::i;:::-;3289:4;3312:12;;;:6;:12;;;;;;;;-1:-1:-1;;;;;3312:29:4;;;;;;;;;;;;;;;3203:145;6751:102:0;;;;;;;;;;;;;:::i;221:87:54:-;;;;;;;;;;-1:-1:-1;221:87:54;;10739:10:68;294:9:54;10727:23:68;10709:42;;10697:2;10682:18;221:87:54;10565:192:68;2324:49:4;;;;;;;;;;-1:-1:-1;2324:49:4;2369:4;2324:49;;8323:282:0;;;;;;;;;;-1:-1:-1;8323:282:0;;;;;:::i;:::-;;:::i;3231:47:35:-;;;;;;;;;;;;;;;9370:359:0;;;;;;;;;;-1:-1:-1;9370:359:0;;;;;:::i;:::-;;:::i;30996:561:35:-;;;;;;;;;;-1:-1:-1;30996:561:35;;;;;:::i;:::-;;:::i;51070:295::-;;;;;;;;;;-1:-1:-1;51070:295:35;;;;;:::i;:::-;;:::i;11283:447::-;;;;;;;;;;-1:-1:-1;11283:447:35;;;;;:::i;:::-;;:::i;:::-;;;;12875:13:68;;12857:32;;12945:4;12933:17;;;12927:24;12905:20;;;12898:54;12996:17;;;12990:24;12968:20;;;12961:54;12845:2;12830:18;11283:447:35;12639:382:68;2832:58:35;;;;;;;;;;;;;;;5479:147:4;;;;;;;;;;-1:-1:-1;5479:147:4;;;;;:::i;:::-;;:::i;2896:72:35:-;;;;;;;;;;;;;;;27424:257;;;;;;;;;;-1:-1:-1;27424:257:35;;;;;:::i;:::-;;:::i;50609:122::-;;;;;;;;;;;;;:::i;11960:307::-;;;;;;;;;;-1:-1:-1;11960:307:35;;;;;:::i;:::-;;:::i;12380:282::-;;;;;;;;;;-1:-1:-1;12380:282:35;;;;;:::i;:::-;;:::i;16490:1159::-;;;;;;:::i;:::-;;:::i;6905:1276::-;;;;;;;;;;-1:-1:-1;6905:1276:35;;;;;:::i;:::-;;:::i;35795:1159::-;;;;;;;;;;-1:-1:-1;35795:1159:35;;;;;:::i;:::-;;:::i;51475:488::-;51696:4;51735:36;51759:11;51735:23;:36::i;:::-;:93;;;-1:-1:-1;51787:26:35;:41;;;;51735:93;:161;;;-1:-1:-1;51844:37:35;:52;;;;51735:161;:221;;;-1:-1:-1;51912:29:35;:44;;;;51735:221;51716:240;51475:488;-1:-1:-1;;51475:488:35:o;6589:98:0:-;6643:13;6675:5;6668:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6589:98;:::o;8056:200::-;8124:7;8148:16;8156:7;8148;:16::i;:::-;8143:64;;8173:34;;;;;;;;;;;;;;8143:64;-1:-1:-1;8225:24:0;;;;:15;:24;;;;;;-1:-1:-1;;;;;8225:24:0;;8056:200::o;7622:373::-;7694:13;7710:35;7737:7;7710:26;:35::i;:::-;7694:51;;7765:5;-1:-1:-1;;;;;7759:11:0;:2;-1:-1:-1;;;;;7759:11:0;;7755:48;;;7779:24;;;;;;;;;;;;;;7755:48;929:10:19;-1:-1:-1;;;;;7818:21:0;;;;;;:63;;-1:-1:-1;7844:37:0;7861:5;929:10:19;11960:307:35;:::i;7844:37:0:-;7843:38;7818:63;7814:136;;;7904:35;;;;;;;;;;;;;;7814:136;7960:28;7969:2;7973:7;7982:5;7960:8;:28::i;:::-;7684:311;7622:373;;:::o;38945:312:35:-;4027:10;2369:4:4;3312:29;;;:12;;:29;:12;:29;;;39050:18:35;;3312:29:4;;3998:40:35;:82;;;;-1:-1:-1;3289:4:4;3312:12;;;:6;:12;;;;;;;;4069:10:35;3312:29:4;;;;;;;;;;4054:26:35;3998:82;3981:173;;;4112:31;;;;;;;;160:25:68;;;133:18;;4112:31:35;;;;;;;;3981:173;39136:21;:43;;;::::1;-1:-1:-1::0;;;;;39136:43:35;::::1;::::0;;::::1;::::0;;;39194:56:::1;::::0;929:10:19;;39136:43:35;39194:56:::1;::::0;-1:-1:-1;;39194:56:35::1;38945:312:::0;;:::o;33501:89::-;3728:10;2369:4:4;3312:29;;;:12;;:29;:12;:29;;;;;3695:96:35;;3762:18;;;;;;;;;;;;;;3695:96;33564:19:::1;33574:8;33564:9;:19::i;:::-;33501:89:::0;:::o;8895:164:0:-;9024:28;9034:4;9040:2;9044:7;9024:9;:28::i;8314:117:35:-;-1:-1:-1;;;;;3312:29:4;;8368:4:35;3312:29:4;;;:12;;:29;:12;:29;;;;;8391:33:35;3203:145:4;23000:1352:35;23286:7;1815:1:14;2569:7;;:19;;2561:63;;;;-1:-1:-1;;;2561:63:14;;17841:2:68;2561:63:14;;;17823:21:68;17880:2;17860:18;;;17853:30;17919:33;17899:18;;;17892:61;17970:18;;2561:63:14;17639:355:68;2561:63:14;1815:1;2699:7;:18;4318:6:35::1;:18:::0;23233:8;;-1:-1:-1;;;4318:18:35;::::1;;;4301:14;3402:13:0::0;;-1:-1:-1;;3402:31:0;;3173:277;4301:14:35::1;4290:25;::::0;:8;:25:::1;:::i;:::-;:46;4286:98;;;4359:14;;;;;;;;;;;;;;4286:98;4884:16:::2;:14;:16::i;:::-;4879:73;;4923:18;;;;;;;;;;;;;;4879:73;23327:285:::3;23374:11;;23327:285;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::3;::::0;;;;-1:-1:-1;;23403:29:35;;23530:50:::3;::::0;;23541:10:::3;23530:50;::::0;::::3;18523:74:68::0;18613:18;;;18606:34;;;18656:18;;;18649:34;;;23403:29:35;;-1:-1:-1;18496:18:68;;;-1:-1:-1;23530:50:35::3;;;;;;;;;;;;23450:148;;;;;;23327:29;:285::i;:::-;23309:373;;23644:27;;;;;;;;;;;;;;23309:373;23709:24;23725:8:::0;23709:13;:24:::3;:::i;:::-;23696:9;:37;23692:120;;23776:24;23792:8:::0;23776:13;:24:::3;:::i;:::-;23756:45;;;;;;;;;160:25:68::0;;148:2;133:18;;14:177;23692:120:35::3;929:10:19::0;23822:35:35::3;::::0;;;:21:::3;:35;::::0;;;;:47;;23861:8;;23822:35;:47:::3;::::0;23861:8;;23822:47:::3;:::i;:::-;::::0;;;-1:-1:-1;;929:10:19;23883:35:35::3;::::0;;;:21:::3;:35;::::0;;;;;:49;-1:-1:-1;23879:114:35::3;;;23955:27;;;;;;;;;;;;;;23879:114;24003:33;929:10:19::0;24027:8:35::3;24003:9;:33::i;:::-;24046:26;24098:8;24075:20;:18;:20::i;:::-;:31;;;;:::i;:::-;24046:60:::0;-1:-1:-1;24230:13:35;24193:8;929:10:19;-1:-1:-1;;;;;24122:187:35::3;;24280:18;24122:187;;;;160:25:68::0;;148:2;133:18;;14:177;24122:187:35::3;;;;;;;;1772:1:14::0;2872:7;:22;24327:18:35;23000:1352;-1:-1:-1;;;;;;;23000:1352:35:o;9871:391::-;10044:21;;9985:16;;;;-1:-1:-1;;;;;10044:21:35;10040:99;;-1:-1:-1;;10103:21:35;;-1:-1:-1;;;;;10103:21:35;;10095:33;;10040:99;10169:21;;:6;10218:17;-1:-1:-1;;;;;10169:21:35;;;;10239:6;;10205:30;;-1:-1:-1;;;10218:17:35;;;;10205:10;:30;:::i;:::-;10204:41;;;;:::i;:::-;10148:107;;;;9871:391;;;;;;:::o;5100:145:4:-;4795:7;4821:12;;;:6;:12;;;;;:22;;;2802:16;2813:4;2802:10;:16::i;:::-;5213:25:::1;5224:4;5230:7;5213:10;:25::i;10362:815:35:-:0;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10497:673:35;;;;;;;;10557:19;:17;:19::i;:::-;10497:673;;;;;;10609:16;:14;:16::i;:::-;10497:673;;;;10660:11;:27;;;;10497:673;;;;10722:27;;;;;;10497:673;;;;10782:25;;;;;10497:673;;;;10839:24;;;;;10497:673;;;;10893:22;;;;10497:673;;;;10952:29;;10497:673;;;;11118:37;;;;;;10497:673;;;;10660:27;10497:673;11012:14;3402:13:0;;-1:-1:-1;;3402:31:0;;3173:277;11012:14:35;10497:673;;11055:6;:18;-1:-1:-1;;;11055:18:35;;;;10497:673;;;;;10478:692;;-1:-1:-1;10362:815:35:o;6117:214:4:-;-1:-1:-1;;;;;6212:23:4;;929:10:19;6212:23:4;6204:83;;;;-1:-1:-1;;;6204:83:4;;19538:2:68;6204:83:4;;;19520:21:68;19577:2;19557:18;;;19550:30;19616:34;19596:18;;;19589:62;19687:17;19667:18;;;19660:45;19722:19;;6204:83:4;19336:411:68;6204:83:4;6298:26;6310:4;6316:7;6298:11;:26::i;:::-;6117:214;;:::o;3315:197:13:-;1889:4;-1:-1:-1;;;;;1898:6:13;1881:23;;;1873:80;;;;-1:-1:-1;;;1873:80:13;;19954:2:68;1873:80:13;;;19936:21:68;19993:2;19973:18;;;19966:30;20032:34;20012:18;;;20005:62;20103:14;20083:18;;;20076:42;20135:19;;1873:80:13;19752:408:68;1873:80:13;1995:6;-1:-1:-1;;;;;1971:30:13;:20;1292:66:10;1642:65;-1:-1:-1;;;;;1642:65:10;;1563:151;1971:20:13;-1:-1:-1;;;;;1971:30:13;;1963:87;;;;-1:-1:-1;;;1963:87:13;;20367:2:68;1963:87:13;;;20349:21:68;20406:2;20386:18;;;20379:30;20445:34;20425:18;;;20418:62;20516:14;20496:18;;;20489:42;20548:19;;1963:87:13;20165:408:68;1963:87:13;3398:36:::1;3416:17;3398;:36::i;:::-;3485:12;::::0;;3495:1:::1;3485:12:::0;;;::::1;::::0;::::1;::::0;;;3444:61:::1;::::0;3466:17;;3485:12;3444:21:::1;:61::i;45235:1130:35:-:0;1815:1:14;2569:7;;:19;;2561:63;;;;-1:-1:-1;;;2561:63:14;;17841:2:68;2561:63:14;;;17823:21:68;17880:2;17860:18;;;17853:30;17919:33;17899:18;;;17892:61;17970:18;;2561:63:14;17639:355:68;2561:63:14;1815:1;2699:7;:18;929:10:19;45369:21:35::1;45287:14;::::0;45450:45:::1;45369:21:::0;45450:16:::1;:45::i;:::-;-1:-1:-1::0;;;;;3312:29:4;;2369:4:::1;3312:29:::0;;;:12;;:29;:12;:29;;;45400:95:35;;-1:-1:-1;45400:95:35;-1:-1:-1;3312:29:4;;45523:36:35::1;:88;;;;-1:-1:-1::0;45584:18:35::1;3289:4:4::0;3312:12;;;:6;:12;;;;;;;;-1:-1:-1;;;;;3312:29:4;;;;;;;;;;;;45575:36:35::1;45523:88;:126;;;;;45637:12;-1:-1:-1::0;;;;;45627:22:35::1;:6;-1:-1:-1::0;;;;;45627:22:35::1;;;45523:126;:173;;;;-1:-1:-1::0;45675:21:35;;-1:-1:-1;;;;;45665:31:35;;::::1;45675:21:::0;::::1;45665:31;;45523:173;45506:260;;;45728:27;;;;;;;;;;;;;;45506:260;45807:11:::0;;45803:301:::1;;45835:15;45856:12;-1:-1:-1::0;;;;;45856:17:35::1;45898:7;2781;45856:110;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;45834:132;;;45985:10;45980:84;;46022:27;;;;;;;;;;;;;;45980:84;46077:16;46086:7:::0;46077:16;::::1;:::i;:::-;;;45820:284;45803:301;46166:21:::0;;:105:::1;::::0;46143:17:::1;::::0;-1:-1:-1;;;;;46166:21:35::1;::::0;2781:7:::1;::::0;46213:5;;46143:17;46166:105;46143:17;46166:105;46213:5;46166:21;2781:7;46166:105:::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;46142:129;;;46286:12;46281:78;;46321:27;;;;;;;;;;;;;;46281:78;-1:-1:-1::0;;1772:1:14;2872:7;:22;-1:-1:-1;;;45235:1130:35:o;49651:346::-;4027:10;2369:4:4;3312:29;;;:12;;:29;:12;:29;;;49723:18:35;;3312:29:4;;3998:40:35;:82;;;;-1:-1:-1;3289:4:4;3312:12;;;:6;:12;;;;;;;;4069:10:35;3312:29:4;;;;;;;;;;4054:26:35;3998:82;3981:173;;;4112:31;;;;;;;;160:25:68;;;133:18;;4112:31:35;14:177:68;3981:173:35;49761:6:::1;:18:::0;-1:-1:-1;;;49761:18:35;::::1;49783:16;49761:18:::0;;::::1;:38;49757:114;;49822:38;;;;;;;;;;;;;;49757:114;3402:13:0::0;;-1:-1:-1;;3402:31:0;49881:6:35::1;:43:::0;;::::1;::::0;;;::::1;-1:-1:-1::0;;;49881:43:35::1;::::0;;;::::1;::::0;;;::::1;::::0;;49957:12:::1;929:10:19::0;;850:96;49957:12:35::1;49971:6;:18:::0;49939:51:::1;::::0;-1:-1:-1;;;49971:18:35;;::::1;;;20933:50:68::0;;-1:-1:-1;;;;;49939:51:35;;;::::1;::::0;::::1;::::0;20921:2:68;20906:18;49939:51:35::1;;;;;;;49651:346:::0;:::o;9125:179:0:-;9258:39;9275:4;9281:2;9285:7;9258:39;;;;;;;;;;;;:16;:39::i;9692:75:35:-;9740:20;9746:7;9755:4;9740:5;:20::i;3761:222:13:-;1889:4;-1:-1:-1;;;;;1898:6:13;1881:23;;;1873:80;;;;-1:-1:-1;;;1873:80:13;;19954:2:68;1873:80:13;;;19936:21:68;19993:2;19973:18;;;19966:30;20032:34;20012:18;;;20005:62;20103:14;20083:18;;;20076:42;20135:19;;1873:80:13;19752:408:68;1873:80:13;1995:6;-1:-1:-1;;;;;1971:30:13;:20;1292:66:10;1642:65;-1:-1:-1;;;;;1642:65:10;;1563:151;1971:20:13;-1:-1:-1;;;;;1971:30:13;;1963:87;;;;-1:-1:-1;;;1963:87:13;;20367:2:68;1963:87:13;;;20349:21:68;20406:2;20386:18;;;20379:30;20445:34;20425:18;;;20418:62;20516:14;20496:18;;;20489:42;20548:19;;1963:87:13;20165:408:68;1963:87:13;3878:36:::1;3896:17;3878;:36::i;:::-;3924:52;3946:17;3965:4;3971;3924:21;:52::i;3004:131::-:0;3082:7;2324:4;-1:-1:-1;;;;;2333:6:13;2316:23;;2308:92;;;;-1:-1:-1;;;2308:92:13;;21196:2:68;2308:92:13;;;21178:21:68;21235:2;21215:18;;;21208:30;21274:34;21254:18;;;21247:62;21345:26;21325:18;;;21318:54;21389:19;;2308:92:13;20994:420:68;2308:92:13;-1:-1:-1;1292:66:10::1;3004:131:13::0;:::o;6404:123:0:-;6468:7;6494:21;6507:7;6494:12;:21::i;:::-;:26;;6404:123;-1:-1:-1;;6404:123:0:o;3920:203::-;3984:7;-1:-1:-1;;;;;4007:19:0;;4003:60;;4035:28;;;;;;;;;;;;;;4003:60;-1:-1:-1;;;;;;4088:19:0;;;;;:12;:19;;;;;:27;;;;3920:203::o;50350:159:35:-;50459:7;50489:13;573:6:52;;-1:-1:-1;;;;;573:6:52;;501:85;50489:13:35;50482:20;;50350:159;:::o;6751:102:0:-;6807:13;6839:7;6832:14;;;;;:::i;8323:282::-;-1:-1:-1;;;;;8421:24:0;;929:10:19;8421:24:0;8417:54;;;8454:17;;;;;;;;;;;;;;8417:54;929:10:19;8482:32:0;;;;:18;:32;;;;;;;;-1:-1:-1;;;;;8482:42:0;;;;;;;;;;;;:53;;-1:-1:-1;;8482:53:0;;;;;;;;;;8550:48;;864:41:68;;;8482:42:0;;929:10:19;8550:48:0;;837:18:68;8550:48:0;;;;;;;8323:282;;:::o;9370:359::-;9531:28;9541:4;9547:2;9551:7;9531:9;:28::i;:::-;-1:-1:-1;;;;;9573:13:0;;1476:19:18;:23;;9573:76:0;;;;;9593:56;9624:4;9630:2;9634:7;9643:5;9593:30;:56::i;:::-;9592:57;9573:76;9569:154;;;9672:40;;;;;;;;;;;;;;9569:154;9370:359;;;;:::o;30996:561:35:-;4027:10;31182:7;3312:29:4;;;:12;;:29;:12;:29;;;31111:11:35;;3312:29:4;;3998:40:35;:82;;;;-1:-1:-1;3289:4:4;3312:12;;;:6;:12;;;;;;;;4069:10:35;3312:29:4;;;;;;;;;;4054:26:35;3998:82;3981:173;;;4112:31;;;;;;;;160:25:68;;;133:18;;4112:31:35;14:177:68;3981:173:35;4318:6:::1;:18:::0;31146:10;;-1:-1:-1;;;4318:18:35;::::1;;;4301:14;3402:13:0::0;;-1:-1:-1;;3402:31:0;;3173:277;4301:14:35::1;4290:25;::::0;:8;:25:::1;:::i;:::-;:46;4286:98;;;4359:14;;;;;;;;;;;;;;4286:98;31220:13:::2;::::0;;31338:24;;::::2;31300:204;31387:5;31380:4;:12;31300:204;;;31449:40;31459:10;;31477:7;31470:4;:14;31459:26;;;;;;;:::i;:::-;;;;;;;;;;;;;;:::i;:::-;31487:1;31449:9;:40::i;:::-;31410:6;::::0;;::::2;::::0;31300:204:::2;;;;31530:20;:18;:20::i;:::-;31523:27:::0;30996:561;-1:-1:-1;;;;;;;30996:561:35:o;51070:295::-;51167:13;51201:16;51209:7;51201;:16::i;:::-;51196:104;;51240:49;;;;;;;;;;;;;;51196:104;51317:6;:23;:41;;;;;;;;160:25:68;;;-1:-1:-1;;;;;51317:23:35;;;;:32;;133:18:68;;51317:41:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;51317:41:35;;;;;;;;;;;;:::i;11283:447::-;11389:37;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;11389:37:35;11461:262;;;;;;;;11687:21;11701:6;-1:-1:-1;;;;;4295:19:0;4261:7;4295:19;;;:12;:19;;;;;:32;;;;;;;;4200:135;11687:21:35;11461:262;;-1:-1:-1;;;;;11524:29:35;;;;;;:21;11461:262;11524:29;;;;;;;;11461:262;;;;;;11628:29;;;4295:12:0;:19;;;;;;;:32;11461:262:35;;;4295:32:0;;;;;11584:73:35;;;;:::i;:::-;11461:262;;11442:281;11283:447;-1:-1:-1;;11283:447:35:o;5479:147:4:-;4795:7;4821:12;;;:6;:12;;;;;:22;;;2802:16;2813:4;2802:10;:16::i;:::-;5593:26:::1;5605:4;5611:7;5593:11;:26::i;27424:257:35:-:0;4027:10;27583:7;3312:29:4;;;:12;;:29;:12;:29;;;27521:11:35;;3312:29:4;;3998:40:35;:82;;;;-1:-1:-1;3289:4:4;3312:12;;;:6;:12;;;;;;;;4069:10:35;3312:29:4;;;;;;;;;;4054:26:35;3998:82;3981:173;;;4112:31;;;;;;;;160:25:68;;;133:18;;4112:31:35;14:177:68;3981:173:35;4318:6:::1;:18:::0;27556:8;;-1:-1:-1;;;4318:18:35;::::1;;;4301:14;3402:13:0::0;;-1:-1:-1;;3402:31:0;;3173:277;4301:14:35::1;4290:25;::::0;:8;:25:::1;:::i;:::-;:46;4286:98;;;4359:14;;;;;;;;;;;;;;4286:98;27606:30:::2;27616:9;27627:8;27606:9;:30::i;:::-;27654:20;:18;:20::i;:::-;27647:27:::0;27424:257;-1:-1:-1;;;;;27424:257:35:o;50609:122::-;50687:6;:23;:37;;;;;;;;50655:13;;-1:-1:-1;;;;;50687:23:35;;:35;;:37;;;;;:23;;:37;;;;;;;:23;:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;50687:37:35;;;;;;;;;;;;:::i;11960:307::-;12104:4;12140:24;-1:-1:-1;;;;;12128:36:35;:8;-1:-1:-1;;;;;12128:36:35;;12124:78;;;-1:-1:-1;12187:4:35;12180:11;;12124:78;-1:-1:-1;;;;;8791:25:0;;;8768:4;8791:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;12218:42:35;12211:49;11960:307;-1:-1:-1;;;11960:307:35:o;12380:282::-;12537:65;;;;;12596:4;12537:65;;;2057:74:68;12454:15:35;;;;;;;;-1:-1:-1;;;;;12537:14:35;:50;;;;2030:18:68;;12537:65:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12494:108;;-1:-1:-1;12494:108:35;-1:-1:-1;12494:108:35;12648:6;12632:12;12494:108;12632:6;:12;:::i;:::-;12631:23;;;;:::i;:::-;12612:43;;;;;;12380:282;;;:::o;16490:1159::-;16658:7;1815:1:14;2569:7;;:19;;2561:63;;;;-1:-1:-1;;;2561:63:14;;17841:2:68;2561:63:14;;;17823:21:68;17880:2;17860:18;;;17853:30;17919:33;17899:18;;;17892:61;17970:18;;2561:63:14;17639:355:68;2561:63:14;1815:1;2699:7;:18;4318:6:35::1;:18:::0;16602:8;;-1:-1:-1;;;4318:18:35;::::1;;;4301:14;3402:13:0::0;;-1:-1:-1;;3402:31:0;;3173:277;4301:14:35::1;4290:25;::::0;:8;:25:::1;:::i;:::-;:46;4286:98;;;4359:14;;;;;;;;;;;;;;4286:98;5058:19:::2;:17;:19::i;:::-;5053:73;;5100:15;;;;;;;;;;;;;;5053:73;16701:11:::3;:27:::0;::::3;;16756:20;16768:8:::0;16701:27;16756:20:::3;:::i;:::-;16743:9;:33;16739:112;;16819:20;16831:8:::0;16819:9;:20:::3;:::i;16739:112::-;17006:11;:37:::0;;;::::3;;;:42:::0;;::::3;::::0;:218:::3;;-1:-1:-1::0;17187:11:35::3;:37:::0;929:10:19;17187:37:35::3;17137:35:::0;;;:21:::3;:35;::::0;;;;;;;;4295:12:0;:19;;;;;;:32;17187:37:35;;;::::3;;;::::0;17110:8;;4295:32:0;;;;;17064:54:35::3;;;;:::i;:::-;:108;;;;:::i;:::-;:160;17006:218;16989:306;;;17256:28;;;;;;;;;;;;;;16989:306;17305:33;929:10:19::0;17329:8:35::3;17305:9;:33::i;:::-;17348:26;17400:8;17377:20;:18;:20::i;:::-;:31;;;;:::i;:::-;17348:60:::0;-1:-1:-1;17532:9:35;17495:8;929:10:19;-1:-1:-1;;;;;17424:183:35::3;;17578:18;17424:183;;;;160:25:68::0;;148:2;133:18;;14:177;17424:183:35::3;;;;;;;;1772:1:14::0;2872:7;:22;17624:18:35;16490:1159;-1:-1:-1;;;;16490:1159:35:o;6905:1276::-;2369:13:12;;;;;;;:48;;2405:12;;;;2404:13;2369:48;;;3147:4;1476:19:18;:23;2385:16:12;2361:107;;;;-1:-1:-1;;;2361:107:12;;22775:2:68;2361:107:12;;;22757:21:68;22814:2;22794:18;;;22787:30;22853:34;22833:18;;;22826:62;22924:16;22904:18;;;22897:44;22958:19;;2361:107:12;22573:410:68;2361:107:12;2479:19;2502:13;;;;;;2501:14;2525:98;;;;2559:13;:20;;2593:19;;;;;;2525:98;7327:46:35::1;7342:13;7357:15;7327:14;:46::i;:::-;7415:22;:20;:22::i;:::-;7481:24;:22;:24::i;:::-;7547:45;2369:4:4;7578:13:35::0;7547:10:::1;:45::i;:::-;7663:24;7673:13;7663:9;:24::i;:::-;7702:6;:17:::0;3351:5:::1;-1:-1:-1::0;;;7702:17:35;;::::1;:35;:17;:35;7698:120;;;7760:47;::::0;::::1;::::0;;3351:5:::1;7760:47;::::0;::::1;23132:38:68::0;23105:18;;7760:47:35::1;22988:188:68::0;7698:120:35::1;7858:26:::0;;:11:::1;:26:::0;;::::1;::::0;::::1;::::0;::::1;::::0;;::::1;::::0;::::1;::::0;;::::1;::::0;;;;;;;;;::::1;::::0;;::::1;::::0;;;::::1;;::::0;::::1;::::0;::::1;::::0;;::::1;;;::::0;;;::::1;::::0;::::1;::::0;;;;::::1;::::0;::::1;::::0;::::1;::::0;::::1;::::0;;;::::1;::::0;;;;;;;;;;;::::1;::::0;;;::::1;;::::0;::::1;::::0;;;::::1;::::0;;;::::1;::::0;;;::::1;::::0;;::::1;::::0;::::1;::::0;;;7929:6:::1;:33:::0;;-1:-1:-1;;;;;7972:43:35;;::::1;8025:31:::0;;;;-1:-1:-1;;;7929:33:35;;::::1;::::0;;;::::1;8025:31:::0;;;;;;;;-1:-1:-1;;;8025:31:35::1;::::0;::::1;;;::::0;;;8066:21;:39;;7972:43;8066:39:::1;::::0;;::::1;::::0;;;::::1;::::0;;;8115:59;;;;:36:::1;::::0;:59:::1;::::0;8152:21;;-1:-1:-1;8115:59:35::1;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;2649:14:12::0;2645:66;;;2695:5;2679:21;;;;;;2645:66;2080:637;6905:1276:35;;;;;;;;;:::o;35795:1159::-;3728:10;2369:4:4;3312:29;;;:12;;:29;:12;:29;;;;;3695:96:35;;3762:18;;;;;;;;;;;;;;3695:96;36520:11:::1;:45:::0;;::::1;::::0;::::1;36575:65:::0;;;;;;::::1;::::0;::::1;;;36650:45:::0;::::1;::::0;::::1;::::0;;::::1;::::0;;;::::1;::::0;;;::::1;::::0;;;36705:25;:41;;;;::::1;36756:39:::0;;;;;;;;::::1;;;36805:35:::0;::::1;::::0;;;::::1;::::0;;;::::1;::::0;;;::::1;::::0;;36850:29;:49;;;929:10:19;-1:-1:-1;;;;;36915:32:35::1;;;;;;;;;;;35795:1159:::0;;;;;;;:::o;1186:320:18:-;-1:-1:-1;;;;;1476:19:18;;:23;;;1186:320::o;2903:213:4:-;2988:4;3011:58;;;3026:43;3011:58;;:98;;;3073:36;3097:11;3073:23;:36::i;9975:172:0:-;10032:4;10074:7;5486:1:35;10055:26:0;;:53;;;;;10095:13;;10085:7;:23;10055:53;:85;;;;-1:-1:-1;;10113:20:0;;;;:11;:20;;;;;:27;-1:-1:-1;;;10113:27:0;;;;10112:28;;9975:172::o;18959:189::-;19069:24;;;;:15;:24;;;;;;:29;;;;-1:-1:-1;;;;;19069:29:0;;;;;;;;;19113:28;;19069:24;;19113:28;;;;;;;18959:189;;;:::o;592:139:52:-;676:6;;655:40;;-1:-1:-1;;;;;655:40:52;;;;676:6;;655:40;;676:6;;655:40;705:6;:19;;;;-1:-1:-1;;;;;705:19:52;;;;;;;;;;592:139::o;14034:2082:0:-;14144:35;14182:21;14195:7;14182:12;:21::i;:::-;14144:59;;14240:4;-1:-1:-1;;;;;14218:26:0;:13;:18;;;-1:-1:-1;;;;;14218:26:0;;14214:67;;14253:28;;;;;;;;;;;;;;14214:67;14292:22;929:10:19;-1:-1:-1;;;;;14318:20:0;;;;:72;;-1:-1:-1;14354:36:0;14371:4;929:10:19;11960:307:35;:::i;14354:36:0:-;14318:124;;;-1:-1:-1;929:10:19;14406:20:0;14418:7;14406:11;:20::i;:::-;-1:-1:-1;;;;;14406:36:0;;14318:124;14292:151;;14459:17;14454:66;;14485:35;;;;;;;;;;;;;;14454:66;-1:-1:-1;;;;;14534:16:0;;14530:52;;14559:23;;;;;;;;;;;;;;14530:52;14698:35;14715:1;14719:7;14728:4;14698:8;:35::i;:::-;-1:-1:-1;;;;;15023:18:0;;;;;;;:12;:18;;;;;;;;:31;;;;;;;;;;-1:-1:-1;;15023:31:0;;;;;;;15068:16;;;;;;;;;:29;;;;;;;;-1:-1:-1;15068:29:0;;;;;;;;;;;15146:20;;;:11;:20;;;;;;15180:18;;15212:49;;;;;-1:-1:-1;;;15245:15:0;15212:49;;;;;;;;;;15531:11;;15590:24;;;;;15632:13;;15146:20;;15590:24;;15632:13;15628:377;;15839:13;;15824:11;:28;15820:171;;15876:20;;15944:28;;;;15918:54;;-1:-1:-1;;;15918:54:0;;;;;-1:-1:-1;;;;;15876:20:0;;15918:54;;;;15820:171;14999:1016;;;16049:7;16045:2;-1:-1:-1;;;;;16030:27:0;16039:4;-1:-1:-1;;;;;16030:27:0;;;;;;;;;;;14134:1982;;14034:2082;;;:::o;4408:190:35:-;4492:24;;4457:4;;4520:15;4492:24;;;;;;:43;;;;:99;;-1:-1:-1;;4551:22:35;;4576:15;4551:22;;;;;;:40;;4408:190::o;1165:184:22:-;1286:4;1338;1309:25;1322:5;1329:4;1309:12;:25::i;:::-;:33;;1165:184;-1:-1:-1;;;;1165:184:22:o;17948:315:35:-;18033:14;2687:1;18050:8;:30;:95;;18137:8;18050:95;;;2687:1;18050:95;18033:112;;18159:33;18170:2;18184:6;18159:5;:33::i;:::-;18206:18;18218:6;18206:18;;:::i;:::-;;;18019:216;18254:1;18243:8;:12;18016:241;;17948:315;;:::o;5235:103::-;5288:7;5330:1;5314:13;;:17;;;;:::i;3642:103:4:-;3708:30;3719:4;929:10:19;3708::4;:30::i;7574:233::-;3289:4;3312:12;;;:6;:12;;;;;;;;-1:-1:-1;;;;;3312:29:4;;;;;;;;;;;;7652:149;;7695:12;;;;:6;:12;;;;;;;;-1:-1:-1;;;;;7695:29:4;;;;;;;;;:36;;-1:-1:-1;;7695:36:4;7727:4;7695:36;;;7777:12;929:10:19;;850:96;7777:12:4;-1:-1:-1;;;;;7750:40:4;7768:7;-1:-1:-1;;;;;7750:40:4;7762:4;7750:40;;;;;;;;;;7574:233;;:::o;4604:199:35:-;4691:11;:27;4656:4;;4722:15;4691:27;;;;;;:46;;;;:105;;-1:-1:-1;;4753:25:35;;4781:15;4753:25;;;;:43;;4604:199::o;7932:234:4:-;3289:4;3312:12;;;:6;:12;;;;;;;;-1:-1:-1;;;;;3312:29:4;;;;;;;;;;;;8011:149;;;8085:5;8053:12;;;:6;:12;;;;;;;;-1:-1:-1;;;;;8053:29:4;;;;;;;;;;:37;;-1:-1:-1;;8053:37:4;;;8109:40;929:10:19;;8053:12:4;;8109:40;;8085:5;8109:40;7932:234;;:::o;8614:383:35:-;3728:10;2369:4:4;3312:29;;;:12;;:29;:12;:29;;;;;3695:96:35;;3762:18;;;;;;;;;;;;;;3695:96;8752:18:::1;-1:-1:-1::0;;;;;8752:37:35::1;;8818:17;8867:20;1292:66:10::0;1642:65;-1:-1:-1;;;;;1642:65:10;;1563:151;8867:20:35::1;8752:150;::::0;;::::1;::::0;;;;;;-1:-1:-1;;;;;23657:15:68;;;8752:150:35::1;::::0;::::1;23639:34:68::0;23709:15;;23689:18;;;23682:43;23551:18;;8752:150:35::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8734:257;;8934:46;::::0;::::1;::::0;;-1:-1:-1;;;;;2075:55:68;;8934:46:35::1;::::0;::::1;2057:74:68::0;2030:18;;8934:46:35::1;1911:226:68::0;2938:974:10;951:66;3384:59;;;3380:526;;;3459:37;3478:17;3459:18;:37::i;3380:526::-;3560:17;-1:-1:-1;;;;;3531:61:10;;:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3531:63:10;;;;;;;;-1:-1:-1;;3531:63:10;;;;;;;;;;;;:::i;:::-;;;3527:302;;3758:56;;-1:-1:-1;;;3758:56:10;;24377:2:68;3758:56:10;;;24359:21:68;24416:2;24396:18;;;24389:30;24455:34;24435:18;;;24428:62;24526:16;24506:18;;;24499:44;24560:19;;3758:56:10;24175:410:68;3527:302:10;1292:66;3644:28;;3636:82;;;;-1:-1:-1;;;3636:82:10;;24792:2:68;3636:82:10;;;24774:21:68;24831:2;24811:18;;;24804:30;24870:34;24850:18;;;24843:62;24941:11;24921:18;;;24914:39;24970:19;;3636:82:10;24590:405:68;3636:82:10;3595:138;3842:53;3860:17;3879:4;3885:9;3842:17;:53::i;16493:2355:0:-;16572:35;16610:21;16623:7;16610:12;:21::i;:::-;16657:18;;16572:59;;-1:-1:-1;16686:284:0;;;;16719:22;929:10:19;-1:-1:-1;;;;;16745:20:0;;;;:76;;-1:-1:-1;16785:36:0;16802:4;929:10:19;11960:307:35;:::i;16785:36:0:-;16745:132;;;-1:-1:-1;929:10:19;16841:20:0;16853:7;16841:11;:20::i;:::-;-1:-1:-1;;;;;16841:36:0;;16745:132;16719:159;;16898:17;16893:66;;16924:35;;;;;;;;;;;;;;16893:66;16705:265;16686:284;17093:35;17110:1;17114:7;17123:4;17093:8;:35::i;:::-;-1:-1:-1;;;;;17452:18:0;;;17418:31;17452:18;;;:12;:18;;;;;;;;17484:24;;17522:29;-1:-1:-1;;17484:24:0;;;;;;;;;;;;;;;17522:29;;;;;17507:1;17522:29;;;;;;;;;;;;;;;;;;;17681:20;;;:11;:20;;;;;;17715;;17812:22;17782:15;17749:49;;;-1:-1:-1;;;17749:49:0;;;;;;;;;;;;17812:22;-1:-1:-1;;;17812:22:0;;;18100:11;;;18159:24;;;;;18201:13;;17452:18;;18159:24;;18201:13;18197:377;;18408:13;;18393:11;:28;18389:171;;18445:20;;18513:28;;;;18487:54;;-1:-1:-1;;;18487:54:0;;;;;-1:-1:-1;;;;;18445:20:0;;18487:54;;;;18389:171;-1:-1:-1;;18599:35:0;;18626:7;;-1:-1:-1;18622:1:0;;-1:-1:-1;;;;;;18599:35:0;;;;;18622:1;;18599:35;-1:-1:-1;;18817:12:0;:14;;;;;;-1:-1:-1;;16493:2355:0:o;5263:1084::-;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;5373:7:0;;5486:1:35;5419:23:0;;:47;;;;;5453:13;;5446:4;:20;5419:47;5415:868;;;5486:31;5520:17;;;:11;:17;;;;;;;;;5486:51;;;;;;;;;-1:-1:-1;;;;;5486:51:0;;;;-1:-1:-1;;;5486:51:0;;;;;;;;;;;-1:-1:-1;;;5486:51:0;;;;;;;;;;;;;;5555:714;;5604:14;;-1:-1:-1;;;;;5604:28:0;;5600:99;;5667:9;5263:1084;-1:-1:-1;;;5263:1084:0:o;5600:99::-;-1:-1:-1;;;6035:6:0;6079:17;;;;:11;:17;;;;;;;;;6067:29;;;;;;;;;-1:-1:-1;;;;;6067:29:0;;;;;-1:-1:-1;;;6067:29:0;;;;;;;;;;;-1:-1:-1;;;6067:29:0;;;;;;;;;;;;;6126:28;6122:107;;6193:9;5263:1084;-1:-1:-1;;;5263:1084:0:o;6122:107::-;5996:255;;;5468:815;5415:868;6309:31;;;;;;;;;;;;;;19629:672;19807:83;;;;;19787:4;;-1:-1:-1;;;;;19807:47:0;;;;;:83;;929:10:19;;19869:4:0;;19875:7;;19884:5;;19807:83;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;19807:83:0;;;;;;;;-1:-1:-1;;19807:83:0;;;;;;;;;;;;:::i;:::-;;;19803:492;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;20060:13:0;;20056:229;;20105:40;;;;;;;;;;;;;;20056:229;20245:6;20239:13;20230:6;20226:2;20222:15;20215:38;19803:492;19936:66;;19946:56;19936:66;;-1:-1:-1;19629:672:0;;;;;;:::o;2109:151::-;2952:13:12;;;;;;;2944:69;;;;-1:-1:-1;;;2944:69:12;;25973:2:68;2944:69:12;;;25955:21:68;26012:2;25992:18;;;25985:30;26051:34;26031:18;;;26024:62;26122:13;26102:18;;;26095:41;26153:19;;2944:69:12;25771:407:68;2944:69:12;2213:40:0::1;2238:5;2245:7;2213:24;:40::i;2025:65:4:-:0;2952:13:12;;;;;;;2944:69;;;;-1:-1:-1;;;2944:69:12;;25973:2:68;2944:69:12;;;25955:21:68;26012:2;25992:18;;;25985:30;26051:34;26031:18;;;26024:62;26122:13;26102:18;;;26095:41;26153:19;;2944:69:12;25771:407:68;2944:69:12;2025:65:4:o;1853:111:14:-;2952:13:12;;;;;;;2944:69;;;;-1:-1:-1;;;2944:69:12;;25973:2:68;2944:69:12;;;25955:21:68;26012:2;25992:18;;;25985:30;26051:34;26031:18;;;26024:62;26122:13;26102:18;;;26095:41;26153:19;;2944:69:12;25771:407:68;2944:69:12;1923:34:14::1;:32;:34::i;6970:110:4:-:0;7048:25;7059:4;7065:7;7048:10;:25::i;3517:344:0:-;3641:4;3676:51;;;3691:36;3676:51;;:126;;-1:-1:-1;3743:59:0;;;3758:44;3743:59;3676:126;:178;;;-1:-1:-1;1183:36:23;1168:51;;;;3818:36:0;1060:166:23;1700:662:22;1783:7;1825:4;1783:7;1839:488;1863:5;:12;1859:1;:16;1839:488;;;1896:20;1919:5;1925:1;1919:8;;;;;;;;:::i;:::-;;;;;;;1896:31;;1961:12;1945;:28;1941:376;;2436:13;2484:15;;;2519:4;2512:15;;;2565:4;2549:21;;2071:57;;1941:376;;;2436:13;2484:15;;;2519:4;2512:15;;;2565:4;2549:21;;2245:57;;1941:376;-1:-1:-1;1877:3:22;;;;:::i;:::-;;;;1839:488;;;-1:-1:-1;2343:12:22;1700:662;-1:-1:-1;;;1700:662:22:o;12645:1147:0:-;12732:13;;-1:-1:-1;;;;;12759:16:0;;12755:48;;12784:19;;;;;;;;;;;;;;12755:48;12817:13;12813:44;;12839:18;;;;;;;;;;;;;;12813:44;-1:-1:-1;;;;;13200:16:0;;;;;;:12;:16;;;;;;;;:44;;13258:49;;;13200:44;;;;;;;;13258:49;;;;13200:44;;;;;;;13258:49;;;;;;;;;;;;;;;;13322:25;;;:11;:25;;;;;;:35;;13371:66;;;;;-1:-1:-1;;;13421:15:0;13371:66;;;;;;;;;;13322:25;13515:23;;;13553:110;13579:40;;13604:14;;;;;-1:-1:-1;;;;;13579:40:0;;;13596:1;;13579:40;;13596:1;;13579:40;13658:3;13642:12;:19;;13553:110;;-1:-1:-1;13677:13:0;:28;7684:311;7622:373;;:::o;4026:514:4:-;3289:4;3312:12;;;:6;:12;;;;;;;;-1:-1:-1;;;;;3312:29:4;;;;;;;;;;;;4109:425;;4297:52;4336:7;-1:-1:-1;;;;;4297:52:4;4346:2;4297:30;:52::i;:::-;4420:49;4459:4;4466:2;4420:30;:49::i;:::-;4204:287;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;4204:287:4;;;;;;;;;;-1:-1:-1;;;4152:371:4;;;;;;;:::i;1805:281:10:-;-1:-1:-1;;;;;1476:19:18;;;1878:106:10;;;;-1:-1:-1;;;1878:106:10;;27376:2:68;1878:106:10;;;27358:21:68;27415:2;27395:18;;;27388:30;27454:34;27434:18;;;27427:62;27525:15;27505:18;;;27498:43;27558:19;;1878:106:10;27174:409:68;1878:106:10;1292:66;1994:85;;;;-1:-1:-1;;;;;1994:85:10;;;;;;;;;;1805:281::o;2478:288::-;2616:29;2627:17;2616:10;:29::i;:::-;2673:1;2659:4;:11;:15;:28;;;;2678:9;2659:28;2655:105;;;2703:46;2725:17;2744:4;2703:21;:46::i;2266:202:0:-;2952:13:12;;;;;;;2944:69;;;;-1:-1:-1;;;2944:69:12;;25973:2:68;2944:69:12;;;25955:21:68;26012:2;25992:18;;;25985:30;26051:34;26031:18;;;26024:62;26122:13;26102:18;;;26095:41;26153:19;;2944:69:12;25771:407:68;2944:69:12;2380:13:0;;::::1;::::0;:5:::1;::::0;:13:::1;::::0;::::1;::::0;::::1;:::i;:::-;-1:-1:-1::0;2403:17:0;;::::1;::::0;:7:::1;::::0;:17:::1;::::0;::::1;::::0;::::1;:::i;:::-;-1:-1:-1::0;5486:1:35;2430:13:0::1;:31:::0;-1:-1:-1;;2266:202:0:o;1970:109:14:-;2952:13:12;;;;;;;2944:69;;;;-1:-1:-1;;;2944:69:12;;25973:2:68;2944:69:12;;;25955:21:68;26012:2;25992:18;;;25985:30;26051:34;26031:18;;;26024:62;26122:13;26102:18;;;26095:41;26153:19;;2944:69:12;25771:407:68;2944:69:12;1772:1:14::1;2050:7;:22:::0;1970:109::o;1599:441:21:-;1674:13;1699:19;1731:10;1735:6;1731:1;:10;:::i;:::-;:14;;1744:1;1731:14;:::i;:::-;1721:25;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1721:25:21;;1699:47;;1756:15;:6;1763:1;1756:9;;;;;;;;:::i;:::-;;;;:15;;;;;;;;;;;1781;:6;1788:1;1781:9;;;;;;;;:::i;:::-;;;;:15;;;;;;;;;;-1:-1:-1;1811:9:21;1823:10;1827:6;1823:1;:10;:::i;:::-;:14;;1836:1;1823:14;:::i;:::-;1811:26;;1806:132;1843:1;1839;:5;1806:132;;;1877:12;1890:5;1898:3;1890:11;1877:25;;;;;;;:::i;:::-;;;;1865:6;1872:1;1865:9;;;;;;;;:::i;:::-;;;;:37;;;;;;;;;;-1:-1:-1;1926:1:21;1916:11;;;;;1846:3;;;:::i;:::-;;;1806:132;;;-1:-1:-1;1955:10:21;;1947:55;;;;-1:-1:-1;;;1947:55:21;;27991:2:68;1947:55:21;;;27973:21:68;;;28010:18;;;28003:30;28069:34;28049:18;;;28042:62;28121:18;;1947:55:21;27789:356:68;2192:152:10;2258:37;2277:17;2258:18;:37::i;:::-;2310:27;;-1:-1:-1;;;;;2310:27:10;;;;;;;;2192:152;:::o;7088:455::-;7171:12;-1:-1:-1;;;;;1476:19:18;;;7195:88:10;;;;-1:-1:-1;;;7195:88:10;;28352:2:68;7195:88:10;;;28334:21:68;28391:2;28371:18;;;28364:30;28430:34;28410:18;;;28403:62;28501:8;28481:18;;;28474:36;28527:19;;7195:88:10;28150:402:68;7195:88:10;7354:12;7368:23;7395:6;-1:-1:-1;;;;;7395:19:10;7415:4;7395:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7353:67;;;;7437:99;7473:7;7482:10;7437:99;;;;;;;;;;;;;;;;;6768:12:18;6796:7;6792:516;;;-1:-1:-1;6826:10:18;6819:17;;6792:516;6937:17;;:21;6933:365;;7131:10;7125:17;7191:15;7178:10;7174:2;7170:19;7163:44;6933:365;7270:12;7263:20;;-1:-1:-1;;;7263:20:18;;;;;;;;:::i;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;196:177:68;281:66;274:5;270:78;263:5;260:89;250:117;;363:1;360;353:12;378:245;436:6;489:2;477:9;468:7;464:23;460:32;457:52;;;505:1;502;495:12;457:52;544:9;531:23;563:30;587:5;563:30;:::i;916:258::-;988:1;998:113;1012:6;1009:1;1006:13;998:113;;;1088:11;;;1082:18;1069:11;;;1062:39;1034:2;1027:10;998:113;;;1129:6;1126:1;1123:13;1120:48;;;-1:-1:-1;;1164:1:68;1146:16;;1139:27;916:258::o;1179:317::-;1221:3;1259:5;1253:12;1286:6;1281:3;1274:19;1302:63;1358:6;1351:4;1346:3;1342:14;1335:4;1328:5;1324:16;1302:63;:::i;:::-;1410:2;1398:15;-1:-1:-1;;1394:88:68;1385:98;;;;1485:4;1381:109;;1179:317;-1:-1:-1;;1179:317:68:o;1501:220::-;1650:2;1639:9;1632:21;1613:4;1670:45;1711:2;1700:9;1696:18;1688:6;1670:45;:::i;1726:180::-;1785:6;1838:2;1826:9;1817:7;1813:23;1809:32;1806:52;;;1854:1;1851;1844:12;1806:52;-1:-1:-1;1877:23:68;;1726:180;-1:-1:-1;1726:180:68:o;2142:154::-;-1:-1:-1;;;;;2221:5:68;2217:54;2210:5;2207:65;2197:93;;2286:1;2283;2276:12;2301:134;2369:20;;2398:31;2369:20;2398:31;:::i;:::-;2301:134;;;:::o;2440:315::-;2508:6;2516;2569:2;2557:9;2548:7;2544:23;2540:32;2537:52;;;2585:1;2582;2575:12;2537:52;2624:9;2611:23;2643:31;2668:5;2643:31;:::i;:::-;2693:5;2745:2;2730:18;;;;2717:32;;-1:-1:-1;;;2440:315:68:o;2760:255::-;2827:6;2880:2;2868:9;2859:7;2855:23;2851:32;2848:52;;;2896:1;2893;2886:12;2848:52;2935:9;2922:23;2954:31;2979:5;2954:31;:::i;4106:456::-;4183:6;4191;4199;4252:2;4240:9;4231:7;4227:23;4223:32;4220:52;;;4268:1;4265;4258:12;4220:52;4307:9;4294:23;4326:31;4351:5;4326:31;:::i;:::-;4376:5;-1:-1:-1;4433:2:68;4418:18;;4405:32;4446:33;4405:32;4446:33;:::i;:::-;4106:456;;4498:7;;-1:-1:-1;;;4552:2:68;4537:18;;;;4524:32;;4106:456::o;4934:367::-;4997:8;5007:6;5061:3;5054:4;5046:6;5042:17;5038:27;5028:55;;5079:1;5076;5069:12;5028:55;-1:-1:-1;5102:20:68;;5145:18;5134:30;;5131:50;;;5177:1;5174;5167:12;5131:50;5214:4;5206:6;5202:17;5190:29;;5274:3;5267:4;5257:6;5254:1;5250:14;5242:6;5238:27;5234:38;5231:47;5228:67;;;5291:1;5288;5281:12;5306:642;5419:6;5427;5435;5443;5451;5504:3;5492:9;5483:7;5479:23;5475:33;5472:53;;;5521:1;5518;5511:12;5472:53;5557:9;5544:23;5534:33;;5614:2;5603:9;5599:18;5586:32;5576:42;;5665:2;5654:9;5650:18;5637:32;5627:42;;5720:2;5709:9;5705:18;5692:32;5747:18;5739:6;5736:30;5733:50;;;5779:1;5776;5769:12;5733:50;5818:70;5880:7;5871:6;5860:9;5856:22;5818:70;:::i;:::-;5306:642;;;;-1:-1:-1;5306:642:68;;-1:-1:-1;5907:8:68;;5792:96;5306:642;-1:-1:-1;;;5306:642:68:o;5953:248::-;6021:6;6029;6082:2;6070:9;6061:7;6057:23;6053:32;6050:52;;;6098:1;6095;6088:12;6050:52;-1:-1:-1;;6121:23:68;;;6191:2;6176:18;;;6163:32;;-1:-1:-1;5953:248:68:o;6508:315::-;6576:6;6584;6637:2;6625:9;6616:7;6612:23;6608:32;6605:52;;;6653:1;6650;6643:12;6605:52;6689:9;6676:23;6666:33;;6749:2;6738:9;6734:18;6721:32;6762:31;6787:5;6762:31;:::i;:::-;6812:5;6802:15;;;6508:315;;;;;:::o;6828:1219::-;7049:13;;698;691:21;679:34;;7020:3;7005:19;;7121:4;7113:6;7109:17;7103:24;7136:51;7181:4;7170:9;7166:20;7152:12;698:13;691:21;679:34;;628:91;7136:51;;7243:4;7235:6;7231:17;7225:24;7218:4;7207:9;7203:20;7196:54;7299:4;7291:6;7287:17;7281:24;7314:55;7363:4;7352:9;7348:20;7332:14;3348:18;3337:30;3325:43;;3272:102;7314:55;;7418:4;7410:6;7406:17;7400:24;7433:55;7482:4;7471:9;7467:20;7451:14;3348:18;3337:30;3325:43;;3272:102;7433:55;;7537:4;7529:6;7525:17;7519:24;7552:55;7601:4;7590:9;7586:20;7570:14;3348:18;3337:30;3325:43;;3272:102;7552:55;;7656:4;7648:6;7644:17;7638:24;7671:55;7720:4;7709:9;7705:20;7689:14;3348:18;3337:30;3325:43;;3272:102;7671:55;-1:-1:-1;7782:4:68;7770:17;;;7764:24;7742:20;;;7735:54;7808:6;7856:15;;;7850:22;7830:18;;;7823:50;7892:6;7940:15;;;7934:22;7914:18;;;7907:50;7976:6;8024:15;;;8018:22;7998:18;;;;7991:50;;;;6828:1219;:::o;8052:184::-;8104:77;8101:1;8094:88;8201:4;8198:1;8191:15;8225:4;8222:1;8215:15;8241:334;8312:2;8306:9;8368:2;8358:13;;-1:-1:-1;;8354:86:68;8342:99;;8471:18;8456:34;;8492:22;;;8453:62;8450:88;;;8518:18;;:::i;:::-;8554:2;8547:22;8241:334;;-1:-1:-1;8241:334:68:o;8580:245::-;8628:4;8661:18;8653:6;8650:30;8647:56;;;8683:18;;:::i;:::-;-1:-1:-1;8740:2:68;8728:15;-1:-1:-1;;8724:88:68;8814:4;8720:99;;8580:245::o;8830:462::-;8872:5;8925:3;8918:4;8910:6;8906:17;8902:27;8892:55;;8943:1;8940;8933:12;8892:55;8979:6;8966:20;9010:48;9026:31;9054:2;9026:31;:::i;:::-;9010:48;:::i;:::-;9083:2;9074:7;9067:19;9129:3;9122:4;9117:2;9109:6;9105:15;9101:26;9098:35;9095:55;;;9146:1;9143;9136:12;9095:55;9211:2;9204:4;9196:6;9192:17;9185:4;9176:7;9172:18;9159:55;9259:1;9234:16;;;9252:4;9230:27;9223:38;;;;9238:7;8830:462;-1:-1:-1;;;8830:462:68:o;9297:455::-;9374:6;9382;9435:2;9423:9;9414:7;9410:23;9406:32;9403:52;;;9451:1;9448;9441:12;9403:52;9490:9;9477:23;9509:31;9534:5;9509:31;:::i;:::-;9559:5;-1:-1:-1;9615:2:68;9600:18;;9587:32;9642:18;9631:30;;9628:50;;;9674:1;9671;9664:12;9628:50;9697:49;9738:7;9729:6;9718:9;9714:22;9697:49;:::i;:::-;9687:59;;;9297:455;;;;;:::o;10762:118::-;10848:5;10841:13;10834:21;10827:5;10824:32;10814:60;;10870:1;10867;10860:12;10885:382;10950:6;10958;11011:2;10999:9;10990:7;10986:23;10982:32;10979:52;;;11027:1;11024;11017:12;10979:52;11066:9;11053:23;11085:31;11110:5;11085:31;:::i;:::-;11135:5;-1:-1:-1;11192:2:68;11177:18;;11164:32;11205:30;11164:32;11205:30;:::i;11527:665::-;11622:6;11630;11638;11646;11699:3;11687:9;11678:7;11674:23;11670:33;11667:53;;;11716:1;11713;11706:12;11667:53;11755:9;11742:23;11774:31;11799:5;11774:31;:::i;:::-;11824:5;-1:-1:-1;11881:2:68;11866:18;;11853:32;11894:33;11853:32;11894:33;:::i;:::-;11946:7;-1:-1:-1;12000:2:68;11985:18;;11972:32;;-1:-1:-1;12055:2:68;12040:18;;12027:32;12082:18;12071:30;;12068:50;;;12114:1;12111;12104:12;12068:50;12137:49;12178:7;12169:6;12158:9;12154:22;12137:49;:::i;:::-;12127:59;;;11527:665;;;;;;;:::o;12197:437::-;12283:6;12291;12344:2;12332:9;12323:7;12319:23;12315:32;12312:52;;;12360:1;12357;12350:12;12312:52;12400:9;12387:23;12433:18;12425:6;12422:30;12419:50;;;12465:1;12462;12455:12;12419:50;12504:70;12566:7;12557:6;12546:9;12542:22;12504:70;:::i;:::-;12593:8;;12478:96;;-1:-1:-1;12197:437:68;-1:-1:-1;;;;12197:437:68:o;13026:388::-;13094:6;13102;13155:2;13143:9;13134:7;13130:23;13126:32;13123:52;;;13171:1;13168;13161:12;13123:52;13210:9;13197:23;13229:31;13254:5;13229:31;:::i;:::-;13279:5;-1:-1:-1;13336:2:68;13321:18;;13308:32;13349:33;13308:32;13349:33;:::i;13737:171::-;13804:20;;13864:18;13853:30;;13843:41;;13833:69;;13898:1;13895;13888:12;13913:159;13980:20;;14040:6;14029:18;;14019:29;;14009:57;;14062:1;14059;14052:12;14077:182;14145:20;;14205:28;14194:40;;14184:51;;14174:79;;14249:1;14246;14239:12;14264:163;14331:20;;14391:10;14380:22;;14370:33;;14360:61;;14417:1;14414;14407:12;14432:850;14497:5;14545:4;14533:9;14528:3;14524:19;14520:30;14517:50;;;14563:1;14560;14553:12;14517:50;14596:2;14590:9;14638:4;14630:6;14626:17;14709:6;14697:10;14694:22;14673:18;14661:10;14658:34;14655:62;14652:88;;;14720:18;;:::i;:::-;14756:2;14749:22;14789:6;-1:-1:-1;14789:6:68;14819:29;14838:9;14819:29;:::i;:::-;14811:6;14804:45;14882:37;14915:2;14904:9;14900:18;14882:37;:::i;:::-;14877:2;14869:6;14865:15;14858:62;14953:37;14986:2;14975:9;14971:18;14953:37;:::i;:::-;14948:2;14940:6;14936:15;14929:62;15024:37;15057:2;15046:9;15042:18;15024:37;:::i;:::-;15019:2;15011:6;15007:15;15000:62;15096:38;15129:3;15118:9;15114:19;15096:38;:::i;:::-;15090:3;15082:6;15078:16;15071:64;15169:38;15202:3;15191:9;15187:19;15169:38;:::i;:::-;15163:3;15155:6;15151:16;15144:64;15270:3;15259:9;15255:19;15242:33;15236:3;15228:6;15224:16;15217:59;;14432:850;;;;:::o;15287:1282::-;15515:6;15523;15531;15539;15547;15555;15563;15571;15579;15632:3;15620:9;15611:7;15607:23;15603:33;15600:53;;;15649:1;15646;15639:12;15600:53;15689:9;15676:23;15718:18;15759:2;15751:6;15748:14;15745:34;;;15775:1;15772;15765:12;15745:34;15798:49;15839:7;15830:6;15819:9;15815:22;15798:49;:::i;:::-;15788:59;;15900:2;15889:9;15885:18;15872:32;15856:48;;15929:2;15919:8;15916:16;15913:36;;;15945:1;15942;15935:12;15913:36;15968:51;16011:7;16000:8;15989:9;15985:24;15968:51;:::i;:::-;15958:61;;16038:38;16072:2;16061:9;16057:18;16038:38;:::i;:::-;16028:48;;16095:38;16129:2;16118:9;16114:18;16095:38;:::i;:::-;16085:48;;16152:38;16185:3;16174:9;16170:19;16152:38;:::i;:::-;16142:48;;16209:38;16242:3;16231:9;16227:19;16209:38;:::i;:::-;16199:48;;16266:66;16324:7;16318:3;16307:9;16303:19;16266:66;:::i;:::-;16256:76;;16351:39;16385:3;16374:9;16370:19;16351:39;:::i;:::-;16341:49;;16443:3;16432:9;16428:19;16415:33;16399:49;;16473:2;16463:8;16460:16;16457:36;;;16489:1;16486;16479:12;16457:36;;16512:51;16555:7;16544:8;16533:9;16529:24;16512:51;:::i;:::-;16502:61;;;15287:1282;;;;;;;;;;;:::o;16574:618::-;16682:6;16690;16698;16706;16714;16722;16730;16783:3;16771:9;16762:7;16758:23;16754:33;16751:53;;;16800:1;16797;16790:12;16751:53;16823:29;16842:9;16823:29;:::i;:::-;16813:39;;16871:37;16904:2;16893:9;16889:18;16871:37;:::i;:::-;16861:47;;16927:37;16960:2;16949:9;16945:18;16927:37;:::i;:::-;16917:47;;16983:37;17016:2;17005:9;17001:18;16983:37;:::i;:::-;16973:47;;17039:38;17072:3;17061:9;17057:19;17039:38;:::i;:::-;17029:48;;17096:38;17129:3;17118:9;17114:19;17096:38;:::i;:::-;17086:48;;17181:3;17170:9;17166:19;17153:33;17143:43;;16574:618;;;;;;;;;;:::o;17197:437::-;17276:1;17272:12;;;;17319;;;17340:61;;17394:4;17386:6;17382:17;17372:27;;17340:61;17447:2;17439:6;17436:14;17416:18;17413:38;17410:218;;;17484:77;17481:1;17474:88;17585:4;17582:1;17575:15;17613:4;17610:1;17603:15;17410:218;;17197:437;;;:::o;17999:184::-;18051:77;18048:1;18041:88;18148:4;18145:1;18138:15;18172:4;18169:1;18162:15;18188:128;18228:3;18259:1;18255:6;18252:1;18249:13;18246:39;;;18265:18;;:::i;:::-;-1:-1:-1;18301:9:68;;18188:128::o;18694:228::-;18734:7;18860:1;-1:-1:-1;;18788:74:68;18785:1;18782:81;18777:1;18770:9;18763:17;18759:105;18756:131;;;18867:18;;:::i;:::-;-1:-1:-1;18907:9:68;;18694:228::o;18927:125::-;18967:4;18995:1;18992;18989:8;18986:34;;;19000:18;;:::i;:::-;-1:-1:-1;19037:9:68;;18927:125::o;19057:274::-;19097:1;19123;19113:189;;19158:77;19155:1;19148:88;19259:4;19256:1;19249:15;19287:4;19284:1;19277:15;19113:189;-1:-1:-1;19316:9:68;;19057:274::o;21419:184::-;21471:77;21468:1;21461:88;21568:4;21565:1;21558:15;21592:4;21589:1;21582:15;21608:635;21688:6;21741:2;21729:9;21720:7;21716:23;21712:32;21709:52;;;21757:1;21754;21747:12;21709:52;21790:9;21784:16;21823:18;21815:6;21812:30;21809:50;;;21855:1;21852;21845:12;21809:50;21878:22;;21931:4;21923:13;;21919:27;-1:-1:-1;21909:55:68;;21960:1;21957;21950:12;21909:55;21989:2;21983:9;22014:48;22030:31;22058:2;22030:31;:::i;22014:48::-;22085:2;22078:5;22071:17;22125:7;22120:2;22115;22111;22107:11;22103:20;22100:33;22097:53;;;22146:1;22143;22136:12;22097:53;22159:54;22210:2;22205;22198:5;22194:14;22189:2;22185;22181:11;22159:54;:::i;22248:320::-;22335:6;22343;22396:2;22384:9;22375:7;22371:23;22367:32;22364:52;;;22412:1;22409;22402:12;22364:52;22444:9;22438:16;22463:31;22488:5;22463:31;:::i;:::-;22558:2;22543:18;;;;22537:25;22513:5;;22537:25;;-1:-1:-1;;;22248:320:68:o;23736:245::-;23803:6;23856:2;23844:9;23835:7;23831:23;23827:32;23824:52;;;23872:1;23869;23862:12;23824:52;23904:9;23898:16;23923:28;23945:5;23923:28;:::i;23986:184::-;24056:6;24109:2;24097:9;24088:7;24084:23;24080:32;24077:52;;;24125:1;24122;24115:12;24077:52;-1:-1:-1;24148:16:68;;23986:184;-1:-1:-1;23986:184:68:o;25000:512::-;25194:4;-1:-1:-1;;;;;25304:2:68;25296:6;25292:15;25281:9;25274:34;25356:2;25348:6;25344:15;25339:2;25328:9;25324:18;25317:43;;25396:6;25391:2;25380:9;25376:18;25369:34;25439:3;25434:2;25423:9;25419:18;25412:31;25460:46;25501:3;25490:9;25486:19;25478:6;25460:46;:::i;:::-;25452:54;25000:512;-1:-1:-1;;;;;;25000:512:68:o;25517:249::-;25586:6;25639:2;25627:9;25618:7;25614:23;25610:32;25607:52;;;25655:1;25652;25645:12;25607:52;25687:9;25681:16;25706:30;25730:5;25706:30;:::i;26183:195::-;26222:3;-1:-1:-1;;26246:5:68;26243:77;26240:103;;;26323:18;;:::i;:::-;-1:-1:-1;26370:1:68;26359:13;;26183:195::o;26383:786::-;26794:25;26789:3;26782:38;26764:3;26849:6;26843:13;26865:62;26920:6;26915:2;26910:3;26906:12;26899:4;26891:6;26887:17;26865:62;:::i;:::-;26991:19;26986:2;26946:16;;;26978:11;;;26971:40;27036:13;;27058:63;27036:13;27107:2;27099:11;;27092:4;27080:17;;27058:63;:::i;:::-;27141:17;27160:2;27137:26;;26383:786;-1:-1:-1;;;;26383:786:68:o;27588:196::-;27627:3;27655:5;27645:39;;27664:18;;:::i;:::-;-1:-1:-1;;;27700:78:68;;27588:196::o;28557:274::-;28686:3;28724:6;28718:13;28740:53;28786:6;28781:3;28774:4;28766:6;28762:17;28740:53;:::i;:::-;28809:16;;;;;28557:274;-1:-1:-1;;28557:274:68:o",
    "linkReferences": {},
    "immutableReferences": {
      "4390": [
        {
          "start": 5437,
          "length": 32
        },
        {
          "start": 5587,
          "length": 32
        },
        {
          "start": 7001,
          "length": 32
        },
        {
          "start": 7151,
          "length": 32
        },
        {
          "start": 7398,
          "length": 32
        }
      ],
      "6455": [
        {
          "start": 2596,
          "length": 32
        },
        {
          "start": 8075,
          "length": 32
        },
        {
          "start": 8893,
          "length": 32
        }
      ],
      "6460": [
        {
          "start": 2680,
          "length": 32
        },
        {
          "start": 3639,
          "length": 32
        },
        {
          "start": 6013,
          "length": 32
        },
        {
          "start": 6573,
          "length": 32
        }
      ],
      "6463": [
        {
          "start": 9299,
          "length": 32
        }
      ],
      "6467": [
        {
          "start": 13376,
          "length": 32
        }
      ],
      "6471": [
        {
          "start": 2382,
          "length": 32
        },
        {
          "start": 9475,
          "length": 32
        }
      ],
      "9459": [
        {
          "start": 2269,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "DEFAULT_ADMIN_ROLE()": "a217fddf",
    "MINTER_ROLE()": "d5391393",
    "SALES_MANAGER_ROLE()": "e26bd343",
    "adminMint(address,uint256)": "e58306f9",
    "adminMintAirdrop(address[])": "b8ae5a2c",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "burn(uint256)": "42966c68",
    "config()": "79502c55",
    "contractURI()": "e8a3d485",
    "contractVersion()": "a0a8e460",
    "finalizeOpenEdition()": "41e96eb1",
    "getApproved(uint256)": "081812fc",
    "getRoleAdmin(bytes32)": "248a9ca3",
    "grantRole(bytes32,address)": "2f2ff15d",
    "hasRole(bytes32,address)": "91d14854",
    "initialize(string,string,address,address,uint64,uint16,(uint104,uint32,uint64,uint64,uint64,uint64,bytes32),address,bytes)": "faff3c70",
    "isAdmin(address)": "24d7806c",
    "isApprovedForAll(address,address)": "e985e9c5",
    "metadataRenderer()": "70319970",
    "mintedPerAddress(address)": "d445b978",
    "name()": "06fdde03",
    "owner()": "8da5cb5b",
    "ownerOf(uint256)": "6352211e",
    "presaleMintsByAddress(address)": "61fea768",
    "proxiableUUID()": "52d1902d",
    "purchase(uint256)": "efef39a1",
    "purchasePresale(uint256,uint256,uint256,bytes32[])": "25024a2b",
    "renounceRole(bytes32,address)": "36568abe",
    "revokeRole(bytes32,address)": "d547741f",
    "royaltyInfo(uint256,uint256)": "2a55205a",
    "safeTransferFrom(address,address,uint256)": "42842e0e",
    "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
    "saleDetails()": "3474a4a6",
    "salesConfig()": "1d2c0b38",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setFundsRecipient(address)": "10a7eb5d",
    "setOwner(address)": "13af4035",
    "setSaleConfiguration(uint104,uint32,uint64,uint64,uint64,uint64,bytes32)": "ffdb7163",
    "supportsInterface(bytes4)": "01ffc9a7",
    "symbol()": "95d89b41",
    "tokenURI(uint256)": "c87b56dd",
    "totalSupply()": "18160ddd",
    "transferFrom(address,address,uint256)": "23b872dd",
    "upgradeTo(address)": "3659cfe6",
    "upgradeToAndCall(address,bytes)": "4f1ef286",
    "withdraw()": "3ccfd60b",
    "zoraFeeForAmount(uint256)": "ee37be39",
    "zoraFeeManager()": "b6eb9c86"
  },
  "ast": {
    "absolutePath": "/Users/iain/zora/zora-nft-contracts/src/ERC721Drop.sol",
    "id": 7602,
    "exportedSymbols": {
      "AccessControlUpgradeable": [
        3677
      ],
      "ERC721AUpgradeable": [
        1398
      ],
      "ERC721Drop": [
        7601
      ],
      "ERC721DropStorageV1": [
        9144
      ],
      "FactoryUpgradeGate": [
        7765
      ],
      "FundsReceiver": [
        9165
      ],
      "IERC165Upgradeable": [
        5412
      ],
      "IERC2981Upgradeable": [
        3893
      ],
      "IERC721AUpgradeable": [
        1469
      ],
      "IERC721Drop": [
        8397
      ],
      "IMetadataRenderer": [
        8444
      ],
      "IOwnable": [
        8460
      ],
      "IZoraFeeManager": [
        8500
      ],
      "MerkleProofUpgradeable": [
        5356
      ],
      "OwnableSkeleton": [
        9199
      ],
      "ReentrancyGuardUpgradeable": [
        4554
      ],
      "UUPSUpgradeable": [
        4495
      ],
      "Version": [
        9479
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:51934:35",
    "nodes": [
      {
        "id": 6386,
        "nodeType": "PragmaDirective",
        "src": "32:24:35",
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".10"
        ]
      },
      {
        "id": 6388,
        "nodeType": "ImportDirective",
        "src": "699:78:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/lib/ERC721A-Upgradeable/contracts/ERC721AUpgradeable.sol",
        "file": "erc721a-upgradeable/ERC721AUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 1399,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6387,
              "name": "ERC721AUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "707:18:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6390,
        "nodeType": "ImportDirective",
        "src": "778:80:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/lib/ERC721A-Upgradeable/contracts/IERC721AUpgradeable.sol",
        "file": "erc721a-upgradeable/IERC721AUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 1470,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6389,
              "name": "IERC721AUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "786:19:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6393,
        "nodeType": "ImportDirective",
        "src": "859:127:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/lib/openzeppelin-contracts-upgradeable/contracts/interfaces/IERC2981Upgradeable.sol",
        "file": "@openzeppelin/contracts-upgradeable/interfaces/IERC2981Upgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 3894,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6391,
              "name": "IERC2981Upgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "867:19:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 6392,
              "name": "IERC165Upgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "888:18:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6395,
        "nodeType": "ImportDirective",
        "src": "987:113:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/lib/openzeppelin-contracts-upgradeable/contracts/access/AccessControlUpgradeable.sol",
        "file": "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 3678,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6394,
              "name": "AccessControlUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "995:24:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6397,
        "nodeType": "ImportDirective",
        "src": "1101:119:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/lib/openzeppelin-contracts-upgradeable/contracts/security/ReentrancyGuardUpgradeable.sol",
        "file": "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 4555,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6396,
              "name": "ReentrancyGuardUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1109:26:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6399,
        "nodeType": "ImportDirective",
        "src": "1221:121:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/lib/openzeppelin-contracts-upgradeable/contracts/utils/cryptography/MerkleProofUpgradeable.sol",
        "file": "@openzeppelin/contracts-upgradeable/utils/cryptography/MerkleProofUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 5357,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6398,
              "name": "MerkleProofUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1229:22:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6401,
        "nodeType": "ImportDirective",
        "src": "1343:100:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/UUPSUpgradeable.sol",
        "file": "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 4496,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6400,
              "name": "UUPSUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1351:15:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6403,
        "nodeType": "ImportDirective",
        "src": "1445:65:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/src/interfaces/IZoraFeeManager.sol",
        "file": "./interfaces/IZoraFeeManager.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 8501,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6402,
              "name": "IZoraFeeManager",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1453:15:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6405,
        "nodeType": "ImportDirective",
        "src": "1511:69:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/src/interfaces/IMetadataRenderer.sol",
        "file": "./interfaces/IMetadataRenderer.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 8445,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6404,
              "name": "IMetadataRenderer",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1519:17:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6407,
        "nodeType": "ImportDirective",
        "src": "1581:57:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/src/interfaces/IERC721Drop.sol",
        "file": "./interfaces/IERC721Drop.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 8398,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6406,
              "name": "IERC721Drop",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1589:11:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6409,
        "nodeType": "ImportDirective",
        "src": "1639:51:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/src/interfaces/IOwnable.sol",
        "file": "./interfaces/IOwnable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 8461,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6408,
              "name": "IOwnable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1647:8:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6411,
        "nodeType": "ImportDirective",
        "src": "1692:60:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/src/utils/OwnableSkeleton.sol",
        "file": "./utils/OwnableSkeleton.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 9200,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6410,
              "name": "OwnableSkeleton",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1700:15:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6413,
        "nodeType": "ImportDirective",
        "src": "1753:56:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/src/utils/FundsReceiver.sol",
        "file": "./utils/FundsReceiver.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 9166,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6412,
              "name": "FundsReceiver",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1761:13:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6415,
        "nodeType": "ImportDirective",
        "src": "1810:44:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/src/utils/Version.sol",
        "file": "./utils/Version.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 9480,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6414,
              "name": "Version",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1818:7:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6417,
        "nodeType": "ImportDirective",
        "src": "1855:60:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/src/FactoryUpgradeGate.sol",
        "file": "./FactoryUpgradeGate.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 7766,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6416,
              "name": "FactoryUpgradeGate",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1863:18:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6419,
        "nodeType": "ImportDirective",
        "src": "1916:70:35",
        "absolutePath": "/Users/iain/zora/zora-nft-contracts/src/storage/ERC721DropStorageV1.sol",
        "file": "./storage/ERC721DropStorageV1.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7602,
        "sourceUnit": 9145,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6418,
              "name": "ERC721DropStorageV1",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "src": "1924:19:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 7601,
        "nodeType": "ContractDefinition",
        "src": "2296:49669:35",
        "nodes": [
          {
            "id": 6445,
            "nodeType": "VariableDeclaration",
            "src": "2639:49:35",
            "constant": true,
            "documentation": {
              "id": 6442,
              "nodeType": "StructuredDocumentation",
              "src": "2554:80:35",
              "text": "@dev This is the max mint batch size for the optimized ERC721A mint contract"
            },
            "mutability": "constant",
            "name": "MAX_MINT_BATCH_SIZE",
            "nameLocation": "2665:19:35",
            "scope": 7601,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 6443,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2639:7:35",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "38",
              "id": 6444,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2687:1:35",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_8_by_1",
                "typeString": "int_const 8"
              },
              "value": "8"
            },
            "visibility": "internal"
          },
          {
            "id": 6449,
            "nodeType": "VariableDeclaration",
            "src": "2732:56:35",
            "constant": true,
            "documentation": {
              "id": 6446,
              "nodeType": "StructuredDocumentation",
              "src": "2695:32:35",
              "text": "@dev Gas limit to send funds"
            },
            "mutability": "constant",
            "name": "FUNDS_SEND_GAS_LIMIT",
            "nameLocation": "2758:20:35",
            "scope": 7601,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 6447,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2732:7:35",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "3231305f303030",
              "id": 6448,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2781:7:35",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_210000_by_1",
                "typeString": "int_const 210000"
              },
              "value": "210_000"
            },
            "visibility": "internal"
          },
          {
            "id": 6455,
            "nodeType": "VariableDeclaration",
            "src": "2832:58:35",
            "constant": false,
            "documentation": {
              "id": 6450,
              "nodeType": "StructuredDocumentation",
              "src": "2795:32:35",
              "text": "@notice Access control roles"
            },
            "functionSelector": "d5391393",
            "mutability": "immutable",
            "name": "MINTER_ROLE",
            "nameLocation": "2857:11:35",
            "scope": 7601,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 6451,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2832:7:35",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "4d494e544552",
                  "id": 6453,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "2881:8:35",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_f0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc9",
                    "typeString": "literal_string \"MINTER\""
                  },
                  "value": "MINTER"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_f0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc9",
                    "typeString": "literal_string \"MINTER\""
                  }
                ],
                "id": 6452,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "2871:9:35",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 6454,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "2871:19:35",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "id": 6460,
            "nodeType": "VariableDeclaration",
            "src": "2896:72:35",
            "constant": false,
            "functionSelector": "e26bd343",
            "mutability": "immutable",
            "name": "SALES_MANAGER_ROLE",
            "nameLocation": "2921:18:35",
            "scope": 7601,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 6456,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2896:7:35",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "53414c45535f4d414e41474552",
                  "id": 6458,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "2952:15:35",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_5ebbf78043a2215b522b1366a193ec74dd1f54e441e841a87b9653246a9c49a6",
                    "typeString": "literal_string \"SALES_MANAGER\""
                  },
                  "value": "SALES_MANAGER"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_5ebbf78043a2215b522b1366a193ec74dd1f54e441e841a87b9653246a9c49a6",
                    "typeString": "literal_string \"SALES_MANAGER\""
                  }
                ],
                "id": 6457,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "2942:9:35",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 6459,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "2942:26:35",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "id": 6463,
            "nodeType": "VariableDeclaration",
            "src": "3038:51:35",
            "constant": false,
            "documentation": {
              "id": 6461,
              "nodeType": "StructuredDocumentation",
              "src": "2975:58:35",
              "text": "@dev ZORA V3 transfer helper address for auto-approval"
            },
            "mutability": "immutable",
            "name": "zoraERC721TransferHelper",
            "nameLocation": "3065:24:35",
            "scope": 7601,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 6462,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "3038:7:35",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 6467,
            "nodeType": "VariableDeclaration",
            "src": "3130:56:35",
            "constant": false,
            "documentation": {
              "id": 6464,
              "nodeType": "StructuredDocumentation",
              "src": "3096:29:35",
              "text": "@dev Factory upgrade gate"
            },
            "mutability": "immutable",
            "name": "factoryUpgradeGate",
            "nameLocation": "3168:18:35",
            "scope": 7601,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_FactoryUpgradeGate_$7765",
              "typeString": "contract FactoryUpgradeGate"
            },
            "typeName": {
              "id": 6466,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 6465,
                "name": "FactoryUpgradeGate",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 7765,
                "src": "3130:18:35"
              },
              "referencedDeclaration": 7765,
              "src": "3130:18:35",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_FactoryUpgradeGate_$7765",
                "typeString": "contract FactoryUpgradeGate"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 6471,
            "nodeType": "VariableDeclaration",
            "src": "3231:47:35",
            "constant": false,
            "documentation": {
              "id": 6468,
              "nodeType": "StructuredDocumentation",
              "src": "3193:33:35",
              "text": "@dev Zora Fee Manager address"
            },
            "functionSelector": "b6eb9c86",
            "mutability": "immutable",
            "name": "zoraFeeManager",
            "nameLocation": "3264:14:35",
            "scope": 7601,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IZoraFeeManager_$8500",
              "typeString": "contract IZoraFeeManager"
            },
            "typeName": {
              "id": 6470,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 6469,
                "name": "IZoraFeeManager",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 8500,
                "src": "3231:15:35"
              },
              "referencedDeclaration": 8500,
              "src": "3231:15:35",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IZoraFeeManager_$8500",
                "typeString": "contract IZoraFeeManager"
              }
            },
            "visibility": "public"
          },
          {
            "id": 6475,
            "nodeType": "VariableDeclaration",
            "src": "3317:39:35",
            "constant": true,
            "documentation": {
              "id": 6472,
              "nodeType": "StructuredDocumentation",
              "src": "3285:27:35",
              "text": "@notice Max royalty BPS"
            },
            "mutability": "constant",
            "name": "MAX_ROYALTY_BPS",
            "nameLocation": "3333:15:35",
            "scope": 7601,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint16",
              "typeString": "uint16"
            },
            "typeName": {
              "id": 6473,
              "name": "uint16",
              "nodeType": "ElementaryTypeName",
              "src": "3317:6:35",
              "typeDescriptions": {
                "typeIdentifier": "t_uint16",
                "typeString": "uint16"
              }
            },
            "value": {
              "hexValue": "35305f3030",
              "id": 6474,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3351:5:35",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5000_by_1",
                "typeString": "int_const 5000"
              },
              "value": "50_00"
            },
            "visibility": "internal"
          },
          {
            "id": 6479,
            "nodeType": "EventDefinition",
            "src": "3363:52:35",
            "anonymous": false,
            "name": "SalesConfigChanged",
            "nameLocation": "3369:18:35",
            "parameters": {
              "id": 6478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6477,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "changedBy",
                  "nameLocation": "3404:9:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6479,
                  "src": "3388:25:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6476,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3388:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3387:27:35"
            }
          },
          {
            "id": 6485,
            "nodeType": "EventDefinition",
            "src": "3421:105:35",
            "anonymous": false,
            "name": "FundsRecipientChanged",
            "nameLocation": "3427:21:35",
            "parameters": {
              "id": 6484,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6481,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newAddress",
                  "nameLocation": "3474:10:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6485,
                  "src": "3458:26:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6480,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3458:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6483,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "changedBy",
                  "nameLocation": "3510:9:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6485,
                  "src": "3494:25:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6482,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3494:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3448:77:35"
            }
          },
          {
            "id": 6491,
            "nodeType": "EventDefinition",
            "src": "3532:71:35",
            "anonymous": false,
            "name": "OpenMintFinalized",
            "nameLocation": "3538:17:35",
            "parameters": {
              "id": 6490,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6487,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "3572:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6491,
                  "src": "3556:22:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6486,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3556:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6489,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "numberOfMints",
                  "nameLocation": "3588:13:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6491,
                  "src": "3580:21:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6488,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3580:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3555:47:35"
            }
          },
          {
            "id": 6507,
            "nodeType": "ModifierDefinition",
            "src": "3664:145:35",
            "body": {
              "id": 6506,
              "nodeType": "Block",
              "src": "3685:124:35",
              "statements": [
                {
                  "condition": {
                    "id": 6499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3699:40:35",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 6495,
                          "name": "DEFAULT_ADMIN_ROLE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3380,
                          "src": "3708:18:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "expression": {
                            "id": 6496,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "3728:3:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 6497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "3728:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 6494,
                        "name": "hasRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3432,
                        "src": "3700:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address) view returns (bool)"
                        }
                      },
                      "id": 6498,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3700:39:35",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6504,
                  "nodeType": "IfStatement",
                  "src": "3695:96:35",
                  "trueBody": {
                    "id": 6503,
                    "nodeType": "Block",
                    "src": "3741:50:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 6500,
                            "name": "Access_OnlyAdmin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8197,
                            "src": "3762:16:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 6501,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3762:18:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6502,
                        "nodeType": "RevertStatement",
                        "src": "3755:25:35"
                      }
                    ]
                  }
                },
                {
                  "id": 6505,
                  "nodeType": "PlaceholderStatement",
                  "src": "3801:1:35"
                }
              ]
            },
            "documentation": {
              "id": 6492,
              "nodeType": "StructuredDocumentation",
              "src": "3609:50:35",
              "text": "@notice Only allow for users with admin access"
            },
            "name": "onlyAdmin",
            "nameLocation": "3673:9:35",
            "parameters": {
              "id": 6493,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3682:2:35"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6533,
            "nodeType": "ModifierDefinition",
            "src": "3932:240:35",
            "body": {
              "id": 6532,
              "nodeType": "Block",
              "src": "3971:201:35",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 6524,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 6517,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "3998:40:35",
                      "subExpression": {
                        "arguments": [
                          {
                            "id": 6513,
                            "name": "DEFAULT_ADMIN_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3380,
                            "src": "4007:18:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "expression": {
                              "id": 6514,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4027:3:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 6515,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4027:10:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 6512,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3432,
                          "src": "3999:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 6516,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3999:39:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 6523,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "4054:26:35",
                      "subExpression": {
                        "arguments": [
                          {
                            "id": 6519,
                            "name": "role",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6510,
                            "src": "4063:4:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "expression": {
                              "id": 6520,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4069:3:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 6521,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4069:10:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 6518,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3432,
                          "src": "4055:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 6522,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4055:25:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3998:82:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6530,
                  "nodeType": "IfStatement",
                  "src": "3981:173:35",
                  "trueBody": {
                    "id": 6529,
                    "nodeType": "Block",
                    "src": "4091:63:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 6526,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6510,
                              "src": "4138:4:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 6525,
                            "name": "Access_MissingRoleOrAdmin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8202,
                            "src": "4112:25:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_bytes32_$returns$__$",
                              "typeString": "function (bytes32) pure"
                            }
                          },
                          "id": 6527,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4112:31:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6528,
                        "nodeType": "RevertStatement",
                        "src": "4105:38:35"
                      }
                    ]
                  }
                },
                {
                  "id": 6531,
                  "nodeType": "PlaceholderStatement",
                  "src": "4164:1:35"
                }
              ]
            },
            "documentation": {
              "id": 6508,
              "nodeType": "StructuredDocumentation",
              "src": "3815:112:35",
              "text": "@notice Only a given role has access or admin\n @param role role to check for alongside the admin role"
            },
            "name": "onlyRoleOrAdmin",
            "nameLocation": "3941:15:35",
            "parameters": {
              "id": 6511,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6510,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3965:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6533,
                  "src": "3957:12:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6509,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3957:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3956:14:35"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6552,
            "nodeType": "ModifierDefinition",
            "src": "4235:167:35",
            "body": {
              "id": 6551,
              "nodeType": "Block",
              "src": "4276:126:35",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6544,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 6541,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 6538,
                        "name": "quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6536,
                        "src": "4290:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 6539,
                          "name": "_totalMinted",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 127,
                          "src": "4301:12:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                            "typeString": "function () view returns (uint256)"
                          }
                        },
                        "id": 6540,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4301:14:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4290:25:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "id": 6542,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9134,
                        "src": "4318:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                          "typeString": "struct IERC721Drop.Configuration storage ref"
                        }
                      },
                      "id": 6543,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "editionSize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8262,
                      "src": "4318:18:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "4290:46:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6549,
                  "nodeType": "IfStatement",
                  "src": "4286:98:35",
                  "trueBody": {
                    "id": 6548,
                    "nodeType": "Block",
                    "src": "4338:46:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 6545,
                            "name": "Mint_SoldOut",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8225,
                            "src": "4359:12:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 6546,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4359:14:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6547,
                        "nodeType": "RevertStatement",
                        "src": "4352:21:35"
                      }
                    ]
                  }
                },
                {
                  "id": 6550,
                  "nodeType": "PlaceholderStatement",
                  "src": "4394:1:35"
                }
              ]
            },
            "documentation": {
              "id": 6534,
              "nodeType": "StructuredDocumentation",
              "src": "4178:52:35",
              "text": "@notice Allows user to mint tokens at a quantity"
            },
            "name": "canMintTokens",
            "nameLocation": "4244:13:35",
            "parameters": {
              "id": 6537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6536,
                  "mutability": "mutable",
                  "name": "quantity",
                  "nameLocation": "4266:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6552,
                  "src": "4258:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6535,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4258:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4257:18:35"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6570,
            "nodeType": "FunctionDefinition",
            "src": "4408:190:35",
            "body": {
              "id": 6569,
              "nodeType": "Block",
              "src": "4463:135:35",
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 6567,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 6561,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 6557,
                          "name": "salesConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9138,
                          "src": "4492:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                            "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                          }
                        },
                        "id": 6558,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "presaleStart",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8284,
                        "src": "4492:24:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<=",
                      "rightExpression": {
                        "expression": {
                          "id": 6559,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "4520:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 6560,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "4520:15:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4492:43:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 6566,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 6562,
                          "name": "salesConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9138,
                          "src": "4551:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                            "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                          }
                        },
                        "id": 6563,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "presaleEnd",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8287,
                        "src": "4551:22:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "expression": {
                          "id": 6564,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "4576:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 6565,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "4576:15:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4551:40:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4492:99:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 6556,
                  "id": 6568,
                  "nodeType": "Return",
                  "src": "4473:118:35"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_presaleActive",
            "nameLocation": "4417:14:35",
            "parameters": {
              "id": 6553,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4431:2:35"
            },
            "returnParameters": {
              "id": 6556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6555,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6570,
                  "src": "4457:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6554,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4457:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4456:6:35"
            },
            "scope": 7601,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6588,
            "nodeType": "FunctionDefinition",
            "src": "4604:199:35",
            "body": {
              "id": 6587,
              "nodeType": "Block",
              "src": "4662:141:35",
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 6585,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 6579,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 6575,
                          "name": "salesConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9138,
                          "src": "4691:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                            "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                          }
                        },
                        "id": 6576,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "publicSaleStart",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8278,
                        "src": "4691:27:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<=",
                      "rightExpression": {
                        "expression": {
                          "id": 6577,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "4722:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 6578,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "4722:15:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4691:46:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 6584,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 6580,
                          "name": "salesConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9138,
                          "src": "4753:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                            "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                          }
                        },
                        "id": 6581,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "publicSaleEnd",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8281,
                        "src": "4753:25:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "expression": {
                          "id": 6582,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "4781:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 6583,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "4781:15:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4753:43:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4691:105:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 6574,
                  "id": 6586,
                  "nodeType": "Return",
                  "src": "4672:124:35"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_publicSaleActive",
            "nameLocation": "4613:17:35",
            "parameters": {
              "id": 6571,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4630:2:35"
            },
            "returnParameters": {
              "id": 6574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6573,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6588,
                  "src": "4656:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6572,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4656:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4655:6:35"
            },
            "scope": 7601,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6601,
            "nodeType": "ModifierDefinition",
            "src": "4840:130:35",
            "body": {
              "id": 6600,
              "nodeType": "Block",
              "src": "4869:101:35",
              "statements": [
                {
                  "condition": {
                    "id": 6593,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "4883:17:35",
                    "subExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 6591,
                        "name": "_presaleActive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6570,
                        "src": "4884:14:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                          "typeString": "function () view returns (bool)"
                        }
                      },
                      "id": 6592,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4884:16:35",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6598,
                  "nodeType": "IfStatement",
                  "src": "4879:73:35",
                  "trueBody": {
                    "id": 6597,
                    "nodeType": "Block",
                    "src": "4902:50:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 6594,
                            "name": "Presale_Inactive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8214,
                            "src": "4923:16:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 6595,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4923:18:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6596,
                        "nodeType": "RevertStatement",
                        "src": "4916:25:35"
                      }
                    ]
                  }
                },
                {
                  "id": 6599,
                  "nodeType": "PlaceholderStatement",
                  "src": "4962:1:35"
                }
              ]
            },
            "documentation": {
              "id": 6589,
              "nodeType": "StructuredDocumentation",
              "src": "4809:26:35",
              "text": "@notice Presale active"
            },
            "name": "onlyPresaleActive",
            "nameLocation": "4849:17:35",
            "parameters": {
              "id": 6590,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4866:2:35"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6614,
            "nodeType": "ModifierDefinition",
            "src": "5011:133:35",
            "body": {
              "id": 6613,
              "nodeType": "Block",
              "src": "5043:101:35",
              "statements": [
                {
                  "condition": {
                    "id": 6606,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "5057:20:35",
                    "subExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 6604,
                        "name": "_publicSaleActive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6588,
                        "src": "5058:17:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                          "typeString": "function () view returns (bool)"
                        }
                      },
                      "id": 6605,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5058:19:35",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6611,
                  "nodeType": "IfStatement",
                  "src": "5053:73:35",
                  "trueBody": {
                    "id": 6610,
                    "nodeType": "Block",
                    "src": "5079:47:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 6607,
                            "name": "Sale_Inactive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8211,
                            "src": "5100:13:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 6608,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5100:15:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6609,
                        "nodeType": "RevertStatement",
                        "src": "5093:22:35"
                      }
                    ]
                  }
                },
                {
                  "id": 6612,
                  "nodeType": "PlaceholderStatement",
                  "src": "5136:1:35"
                }
              ]
            },
            "documentation": {
              "id": 6602,
              "nodeType": "StructuredDocumentation",
              "src": "4976:30:35",
              "text": "@notice Public sale active"
            },
            "name": "onlyPublicSaleActive",
            "nameLocation": "5020:20:35",
            "parameters": {
              "id": 6603,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5040:2:35"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6625,
            "nodeType": "FunctionDefinition",
            "src": "5235:103:35",
            "body": {
              "id": 6624,
              "nodeType": "Block",
              "src": "5297:41:35",
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6622,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 6620,
                      "name": "_currentIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "5314:13:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 6621,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5330:1:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "5314:17:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 6619,
                  "id": 6623,
                  "nodeType": "Return",
                  "src": "5307:24:35"
                }
              ]
            },
            "documentation": {
              "id": 6615,
              "nodeType": "StructuredDocumentation",
              "src": "5150:80:35",
              "text": "@notice Getter for last minted token ID (gets next token id and subtracts 1)"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_lastMintedTokenId",
            "nameLocation": "5244:18:35",
            "parameters": {
              "id": 6616,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5262:2:35"
            },
            "returnParameters": {
              "id": 6619,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6618,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6625,
                  "src": "5288:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6617,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5288:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5287:9:35"
            },
            "scope": 7601,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6635,
            "nodeType": "FunctionDefinition",
            "src": "5403:91:35",
            "body": {
              "id": 6634,
              "nodeType": "Block",
              "src": "5469:25:35",
              "statements": [
                {
                  "expression": {
                    "hexValue": "31",
                    "id": 6632,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5486:1:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1_by_1",
                      "typeString": "int_const 1"
                    },
                    "value": "1"
                  },
                  "functionReturnParameters": 6631,
                  "id": 6633,
                  "nodeType": "Return",
                  "src": "5479:8:35"
                }
              ]
            },
            "baseFunctions": [
              98
            ],
            "documentation": {
              "id": 6626,
              "nodeType": "StructuredDocumentation",
              "src": "5344:54:35",
              "text": "@notice Start token ID for minting (1-100 vs 0-99)"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_startTokenId",
            "nameLocation": "5412:13:35",
            "overrides": {
              "id": 6628,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "5442:8:35"
            },
            "parameters": {
              "id": 6627,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5425:2:35"
            },
            "returnParameters": {
              "id": 6631,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6630,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6635,
                  "src": "5460:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6629,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5460:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5459:9:35"
            },
            "scope": 7601,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6662,
            "nodeType": "FunctionDefinition",
            "src": "5827:323:35",
            "body": {
              "id": 6661,
              "nodeType": "Block",
              "src": "5989:161:35",
              "statements": [
                {
                  "expression": {
                    "id": 6651,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6649,
                      "name": "zoraFeeManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6471,
                      "src": "5999:14:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IZoraFeeManager_$8500",
                        "typeString": "contract IZoraFeeManager"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6650,
                      "name": "_zoraFeeManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6639,
                      "src": "6016:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IZoraFeeManager_$8500",
                        "typeString": "contract IZoraFeeManager"
                      }
                    },
                    "src": "5999:32:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IZoraFeeManager_$8500",
                      "typeString": "contract IZoraFeeManager"
                    }
                  },
                  "id": 6652,
                  "nodeType": "ExpressionStatement",
                  "src": "5999:32:35"
                },
                {
                  "expression": {
                    "id": 6655,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6653,
                      "name": "zoraERC721TransferHelper",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6463,
                      "src": "6041:24:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6654,
                      "name": "_zoraERC721TransferHelper",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6641,
                      "src": "6068:25:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6041:52:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 6656,
                  "nodeType": "ExpressionStatement",
                  "src": "6041:52:35"
                },
                {
                  "expression": {
                    "id": 6659,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6657,
                      "name": "factoryUpgradeGate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6467,
                      "src": "6103:18:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_FactoryUpgradeGate_$7765",
                        "typeString": "contract FactoryUpgradeGate"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6658,
                      "name": "_factoryUpgradeGate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6644,
                      "src": "6124:19:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_FactoryUpgradeGate_$7765",
                        "typeString": "contract FactoryUpgradeGate"
                      }
                    },
                    "src": "6103:40:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_FactoryUpgradeGate_$7765",
                      "typeString": "contract FactoryUpgradeGate"
                    }
                  },
                  "id": 6660,
                  "nodeType": "ExpressionStatement",
                  "src": "6103:40:35"
                }
              ]
            },
            "documentation": {
              "id": 6636,
              "nodeType": "StructuredDocumentation",
              "src": "5500:322:35",
              "text": "@notice Global constructor ?????these variables will not change with further proxy deploys\n @dev Marked as an initializer to prevent storage being used of base implementation. Can only be init'd by a proxy.\n @param _zoraFeeManager Zora Fee Manager\n @param _zoraERC721TransferHelper Transfer helper"
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "id": 6647,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 6646,
                  "name": "initializer",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 4333,
                  "src": "5977:11:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "5977:11:35"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 6645,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6639,
                  "mutability": "mutable",
                  "name": "_zoraFeeManager",
                  "nameLocation": "5864:15:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6662,
                  "src": "5848:31:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IZoraFeeManager_$8500",
                    "typeString": "contract IZoraFeeManager"
                  },
                  "typeName": {
                    "id": 6638,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6637,
                      "name": "IZoraFeeManager",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 8500,
                      "src": "5848:15:35"
                    },
                    "referencedDeclaration": 8500,
                    "src": "5848:15:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IZoraFeeManager_$8500",
                      "typeString": "contract IZoraFeeManager"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6641,
                  "mutability": "mutable",
                  "name": "_zoraERC721TransferHelper",
                  "nameLocation": "5897:25:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6662,
                  "src": "5889:33:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6640,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5889:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6644,
                  "mutability": "mutable",
                  "name": "_factoryUpgradeGate",
                  "nameLocation": "5951:19:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6662,
                  "src": "5932:38:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_FactoryUpgradeGate_$7765",
                    "typeString": "contract FactoryUpgradeGate"
                  },
                  "typeName": {
                    "id": 6643,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6642,
                      "name": "FactoryUpgradeGate",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7765,
                      "src": "5932:18:35"
                    },
                    "referencedDeclaration": 7765,
                    "src": "5932:18:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_FactoryUpgradeGate_$7765",
                      "typeString": "contract FactoryUpgradeGate"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5838:138:35"
            },
            "returnParameters": {
              "id": 6648,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5989:0:35"
            },
            "scope": 7601,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 6753,
            "nodeType": "FunctionDefinition",
            "src": "6905:1276:35",
            "body": {
              "id": 6752,
              "nodeType": "Block",
              "src": "7292:889:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6689,
                        "name": "_contractName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6665,
                        "src": "7342:13:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 6690,
                        "name": "_contractSymbol",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6667,
                        "src": "7357:15:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 6688,
                      "name": "__ERC721A_init",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66,
                      "src": "7327:14:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory)"
                      }
                    },
                    "id": 6691,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7327:46:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6692,
                  "nodeType": "ExpressionStatement",
                  "src": "7327:46:35"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 6693,
                      "name": "__AccessControl_init",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3359,
                      "src": "7415:20:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 6694,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7415:22:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6695,
                  "nodeType": "ExpressionStatement",
                  "src": "7415:22:35"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 6696,
                      "name": "__ReentrancyGuard_init",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4518,
                      "src": "7481:22:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 6697,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7481:24:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6698,
                  "nodeType": "ExpressionStatement",
                  "src": "7481:24:35"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6700,
                        "name": "DEFAULT_ADMIN_ROLE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3380,
                        "src": "7558:18:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 6701,
                        "name": "_initialOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6669,
                        "src": "7578:13:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 6699,
                      "name": "_setupRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3580,
                      "src": "7547:10:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 6702,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7547:45:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6703,
                  "nodeType": "ExpressionStatement",
                  "src": "7547:45:35"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6705,
                        "name": "_initialOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6669,
                        "src": "7673:13:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 6704,
                      "name": "_setOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9198,
                      "src": "7663:9:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 6706,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7663:24:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6707,
                  "nodeType": "ExpressionStatement",
                  "src": "7663:24:35"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    },
                    "id": 6711,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 6708,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9134,
                        "src": "7702:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                          "typeString": "struct IERC721Drop.Configuration storage ref"
                        }
                      },
                      "id": 6709,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "royaltyBPS",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8265,
                      "src": "7702:17:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint16",
                        "typeString": "uint16"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 6710,
                      "name": "MAX_ROYALTY_BPS",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6475,
                      "src": "7722:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint16",
                        "typeString": "uint16"
                      }
                    },
                    "src": "7702:35:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6717,
                  "nodeType": "IfStatement",
                  "src": "7698:120:35",
                  "trueBody": {
                    "id": 6716,
                    "nodeType": "Block",
                    "src": "7739:79:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 6713,
                              "name": "MAX_ROYALTY_BPS",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6475,
                              "src": "7791:15:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint16",
                                "typeString": "uint16"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint16",
                                "typeString": "uint16"
                              }
                            ],
                            "id": 6712,
                            "name": "Setup_RoyaltyPercentageTooHigh",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8236,
                            "src": "7760:30:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint16_$returns$__$",
                              "typeString": "function (uint16) pure"
                            }
                          },
                          "id": 6714,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7760:47:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6715,
                        "nodeType": "RevertStatement",
                        "src": "7753:54:35"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 6720,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6718,
                      "name": "salesConfig",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9138,
                      "src": "7858:11:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                        "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6719,
                      "name": "_salesConfig",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6678,
                      "src": "7872:12:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SalesConfiguration_$8291_memory_ptr",
                        "typeString": "struct IERC721Drop.SalesConfiguration memory"
                      }
                    },
                    "src": "7858:26:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                      "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                    }
                  },
                  "id": 6721,
                  "nodeType": "ExpressionStatement",
                  "src": "7858:26:35"
                },
                {
                  "expression": {
                    "id": 6726,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 6722,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9134,
                        "src": "7929:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                          "typeString": "struct IERC721Drop.Configuration storage ref"
                        }
                      },
                      "id": 6724,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "editionSize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8262,
                      "src": "7929:18:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6725,
                      "name": "_editionSize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6673,
                      "src": "7950:12:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "7929:33:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "id": 6727,
                  "nodeType": "ExpressionStatement",
                  "src": "7929:33:35"
                },
                {
                  "expression": {
                    "id": 6732,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 6728,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9134,
                        "src": "7972:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                          "typeString": "struct IERC721Drop.Configuration storage ref"
                        }
                      },
                      "id": 6730,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "metadataRenderer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8259,
                      "src": "7972:23:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IMetadataRenderer_$8444",
                        "typeString": "contract IMetadataRenderer"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6731,
                      "name": "_metadataRenderer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6681,
                      "src": "7998:17:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IMetadataRenderer_$8444",
                        "typeString": "contract IMetadataRenderer"
                      }
                    },
                    "src": "7972:43:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IMetadataRenderer_$8444",
                      "typeString": "contract IMetadataRenderer"
                    }
                  },
                  "id": 6733,
                  "nodeType": "ExpressionStatement",
                  "src": "7972:43:35"
                },
                {
                  "expression": {
                    "id": 6738,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 6734,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9134,
                        "src": "8025:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                          "typeString": "struct IERC721Drop.Configuration storage ref"
                        }
                      },
                      "id": 6736,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "royaltyBPS",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8265,
                      "src": "8025:17:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint16",
                        "typeString": "uint16"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6737,
                      "name": "_royaltyBPS",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6675,
                      "src": "8045:11:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint16",
                        "typeString": "uint16"
                      }
                    },
                    "src": "8025:31:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "id": 6739,
                  "nodeType": "ExpressionStatement",
                  "src": "8025:31:35"
                },
                {
                  "expression": {
                    "id": 6744,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 6740,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9134,
                        "src": "8066:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                          "typeString": "struct IERC721Drop.Configuration storage ref"
                        }
                      },
                      "id": 6742,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "fundsRecipient",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8268,
                      "src": "8066:21:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6743,
                      "name": "_fundsRecipient",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6671,
                      "src": "8090:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "8066:39:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 6745,
                  "nodeType": "ExpressionStatement",
                  "src": "8066:39:35"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6749,
                        "name": "_metadataRendererInit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6683,
                        "src": "8152:21:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 6746,
                        "name": "_metadataRenderer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6681,
                        "src": "8115:17:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IMetadataRenderer_$8444",
                          "typeString": "contract IMetadataRenderer"
                        }
                      },
                      "id": 6748,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "initializeWithData",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8443,
                      "src": "8115:36:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) external"
                      }
                    },
                    "id": 6750,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8115:59:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6751,
                  "nodeType": "ExpressionStatement",
                  "src": "8115:59:35"
                }
              ]
            },
            "documentation": {
              "id": 6663,
              "nodeType": "StructuredDocumentation",
              "src": "6156:744:35",
              "text": "@dev Create a new drop contract\n  @param _contractName Contract name\n  @param _contractSymbol Contract symbol\n  @param _initialOwner User that owns and can mint the edition, gets royalty and sales payouts and can update the base url if needed.\n  @param _fundsRecipient Wallet/user that receives funds from sale\n  @param _editionSize Number of editions that can be minted in total. If 0, unlimited editions can be minted.\n  @param _royaltyBPS BPS of the royalty set on the contract. Can be 0 for no royalty.\n  @param _salesConfig New sales config to set upon init\n  @param _metadataRenderer Renderer contract to use\n  @param _metadataRendererInit Renderer data initial contract"
            },
            "functionSelector": "faff3c70",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 6686,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 6685,
                  "name": "initializer",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 4333,
                  "src": "7280:11:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "7280:11:35"
              }
            ],
            "name": "initialize",
            "nameLocation": "6914:10:35",
            "parameters": {
              "id": 6684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6665,
                  "mutability": "mutable",
                  "name": "_contractName",
                  "nameLocation": "6948:13:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6753,
                  "src": "6934:27:35",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6664,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6934:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6667,
                  "mutability": "mutable",
                  "name": "_contractSymbol",
                  "nameLocation": "6985:15:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6753,
                  "src": "6971:29:35",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6666,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6971:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6669,
                  "mutability": "mutable",
                  "name": "_initialOwner",
                  "nameLocation": "7018:13:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6753,
                  "src": "7010:21:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6668,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7010:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6671,
                  "mutability": "mutable",
                  "name": "_fundsRecipient",
                  "nameLocation": "7057:15:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6753,
                  "src": "7041:31:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 6670,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7041:15:35",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6673,
                  "mutability": "mutable",
                  "name": "_editionSize",
                  "nameLocation": "7089:12:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6753,
                  "src": "7082:19:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 6672,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "7082:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6675,
                  "mutability": "mutable",
                  "name": "_royaltyBPS",
                  "nameLocation": "7118:11:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6753,
                  "src": "7111:18:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 6674,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "7111:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6678,
                  "mutability": "mutable",
                  "name": "_salesConfig",
                  "nameLocation": "7165:12:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6753,
                  "src": "7139:38:35",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_SalesConfiguration_$8291_memory_ptr",
                    "typeString": "struct IERC721Drop.SalesConfiguration"
                  },
                  "typeName": {
                    "id": 6677,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6676,
                      "name": "SalesConfiguration",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 8291,
                      "src": "7139:18:35"
                    },
                    "referencedDeclaration": 8291,
                    "src": "7139:18:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage_ptr",
                      "typeString": "struct IERC721Drop.SalesConfiguration"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6681,
                  "mutability": "mutable",
                  "name": "_metadataRenderer",
                  "nameLocation": "7205:17:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6753,
                  "src": "7187:35:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IMetadataRenderer_$8444",
                    "typeString": "contract IMetadataRenderer"
                  },
                  "typeName": {
                    "id": 6680,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6679,
                      "name": "IMetadataRenderer",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 8444,
                      "src": "7187:17:35"
                    },
                    "referencedDeclaration": 8444,
                    "src": "7187:17:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IMetadataRenderer_$8444",
                      "typeString": "contract IMetadataRenderer"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6683,
                  "mutability": "mutable",
                  "name": "_metadataRendererInit",
                  "nameLocation": "7245:21:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6753,
                  "src": "7232:34:35",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 6682,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7232:5:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6924:348:35"
            },
            "returnParameters": {
              "id": 6687,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7292:0:35"
            },
            "scope": 7601,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 6767,
            "nodeType": "FunctionDefinition",
            "src": "8314:117:35",
            "body": {
              "id": 6766,
              "nodeType": "Block",
              "src": "8374:57:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6762,
                        "name": "DEFAULT_ADMIN_ROLE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3380,
                        "src": "8399:18:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 6763,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6756,
                        "src": "8419:4:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 6761,
                      "name": "hasRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3432,
                      "src": "8391:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                        "typeString": "function (bytes32,address) view returns (bool)"
                      }
                    },
                    "id": 6764,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8391:33:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 6760,
                  "id": 6765,
                  "nodeType": "Return",
                  "src": "8384:40:35"
                }
              ]
            },
            "baseFunctions": [
              8396
            ],
            "documentation": {
              "id": 6754,
              "nodeType": "StructuredDocumentation",
              "src": "8187:122:35",
              "text": "@dev Getter for admin role associated with the contract to handle metadata\n @return boolean if address is admin"
            },
            "functionSelector": "24d7806c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isAdmin",
            "nameLocation": "8323:7:35",
            "parameters": {
              "id": 6757,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6756,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "8339:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6767,
                  "src": "8331:12:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6755,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8331:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8330:14:35"
            },
            "returnParameters": {
              "id": 6760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6759,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6767,
                  "src": "8368:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6758,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8368:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8367:6:35"
            },
            "scope": 7601,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6790,
            "nodeType": "FunctionDefinition",
            "src": "8614:383:35",
            "body": {
              "id": 6789,
              "nodeType": "Block",
              "src": "8724:273:35",
              "statements": [
                {
                  "condition": {
                    "id": 6782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "8751:151:35",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 6778,
                          "name": "newImplementation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6770,
                          "src": "8818:17:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 6779,
                            "name": "_getImplementation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3953,
                            "src": "8867:18:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                              "typeString": "function () view returns (address)"
                            }
                          },
                          "id": 6780,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8867:20:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "id": 6776,
                          "name": "factoryUpgradeGate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6467,
                          "src": "8752:18:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_FactoryUpgradeGate_$7765",
                            "typeString": "contract FactoryUpgradeGate"
                          }
                        },
                        "id": 6777,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isValidUpgradePath",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7698,
                        "src": "8752:37:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (address,address) view external returns (bool)"
                        }
                      },
                      "id": 6781,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [
                        "_newImpl",
                        "_currentImpl"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "8752:150:35",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6788,
                  "nodeType": "IfStatement",
                  "src": "8734:257:35",
                  "trueBody": {
                    "id": 6787,
                    "nodeType": "Block",
                    "src": "8913:78:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 6784,
                              "name": "newImplementation",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6770,
                              "src": "8962:17:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 6783,
                            "name": "Admin_InvalidUpgradeAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8241,
                            "src": "8934:27:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 6785,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8934:46:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6786,
                        "nodeType": "RevertStatement",
                        "src": "8927:53:35"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              4489
            ],
            "documentation": {
              "id": 6768,
              "nodeType": "StructuredDocumentation",
              "src": "8437:172:35",
              "text": "@notice Connects this contract to the factory upgrade gate\n @param newImplementation proposed new upgrade implementation\n @dev Only can be called by admin"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 6774,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 6773,
                  "name": "onlyAdmin",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6507,
                  "src": "8710:9:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "8710:9:35"
              }
            ],
            "name": "_authorizeUpgrade",
            "nameLocation": "8623:17:35",
            "overrides": {
              "id": 6772,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "8693:8:35"
            },
            "parameters": {
              "id": 6771,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6770,
                  "mutability": "mutable",
                  "name": "newImplementation",
                  "nameLocation": "8649:17:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6790,
                  "src": "8641:25:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6769,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8641:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8640:27:35"
            },
            "returnParameters": {
              "id": 6775,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8724:0:35"
            },
            "scope": 7601,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6802,
            "nodeType": "FunctionDefinition",
            "src": "9692:75:35",
            "body": {
              "id": 6801,
              "nodeType": "Block",
              "src": "9730:37:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6797,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6793,
                        "src": "9746:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 6798,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9755:4:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 6796,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1106,
                        1288
                      ],
                      "referencedDeclaration": 1288,
                      "src": "9740:5:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_bool_$returns$__$",
                        "typeString": "function (uint256,bool)"
                      }
                    },
                    "id": 6799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9740:20:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6800,
                  "nodeType": "ExpressionStatement",
                  "src": "9740:20:35"
                }
              ]
            },
            "documentation": {
              "id": 6791,
              "nodeType": "StructuredDocumentation",
              "src": "9604:83:35",
              "text": "@param tokenId Token ID to burn\n @notice User burn function for token id"
            },
            "functionSelector": "42966c68",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "burn",
            "nameLocation": "9701:4:35",
            "parameters": {
              "id": 6794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6793,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "9714:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6802,
                  "src": "9706:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6792,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9706:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9705:17:35"
            },
            "returnParameters": {
              "id": 6795,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9730:0:35"
            },
            "scope": 7601,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 6841,
            "nodeType": "FunctionDefinition",
            "src": "9871:391:35",
            "body": {
              "id": 6840,
              "nodeType": "Block",
              "src": "10030:232:35",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 6821,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 6815,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9134,
                        "src": "10044:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                          "typeString": "struct IERC721Drop.Configuration storage ref"
                        }
                      },
                      "id": 6816,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "fundsRecipient",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8268,
                      "src": "10044:21:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 6819,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10077:1:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 6818,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10069:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 6817,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10069:7:35",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 6820,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10069:10:35",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10044:35:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6828,
                  "nodeType": "IfStatement",
                  "src": "10040:99:35",
                  "trueBody": {
                    "id": 6827,
                    "nodeType": "Block",
                    "src": "10081:58:35",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "expression": {
                                "id": 6822,
                                "name": "config",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9134,
                                "src": "10103:6:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                                  "typeString": "struct IERC721Drop.Configuration storage ref"
                                }
                              },
                              "id": 6823,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "fundsRecipient",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8268,
                              "src": "10103:21:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "hexValue": "30",
                              "id": 6824,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10126:1:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "id": 6825,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "10102:26:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_payable_$_t_rational_0_by_1_$",
                            "typeString": "tuple(address payable,int_const 0)"
                          }
                        },
                        "functionReturnParameters": 6814,
                        "id": 6826,
                        "nodeType": "Return",
                        "src": "10095:33:35"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "components": [
                      {
                        "expression": {
                          "id": 6829,
                          "name": "config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9134,
                          "src": "10169:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                            "typeString": "struct IERC721Drop.Configuration storage ref"
                          }
                        },
                        "id": 6830,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "fundsRecipient",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8268,
                        "src": "10169:21:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 6837,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 6834,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 6831,
                                "name": "_salePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6807,
                                "src": "10205:10:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "expression": {
                                  "id": 6832,
                                  "name": "config",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9134,
                                  "src": "10218:6:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                                    "typeString": "struct IERC721Drop.Configuration storage ref"
                                  }
                                },
                                "id": 6833,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "royaltyBPS",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8265,
                                "src": "10218:17:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint16",
                                  "typeString": "uint16"
                                }
                              },
                              "src": "10205:30:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 6835,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "10204:32:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "31305f303030",
                          "id": 6836,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10239:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000_by_1",
                            "typeString": "int_const 10000"
                          },
                          "value": "10_000"
                        },
                        "src": "10204:41:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 6838,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "10155:100:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_payable_$_t_uint256_$",
                      "typeString": "tuple(address payable,uint256)"
                    }
                  },
                  "functionReturnParameters": 6814,
                  "id": 6839,
                  "nodeType": "Return",
                  "src": "10148:107:35"
                }
              ]
            },
            "baseFunctions": [
              3892
            ],
            "documentation": {
              "id": 6803,
              "nodeType": "StructuredDocumentation",
              "src": "9773:93:35",
              "text": "@dev Get royalty information for token\n @param _salePrice Sale price for the token"
            },
            "functionSelector": "2a55205a",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "royaltyInfo",
            "nameLocation": "9880:11:35",
            "overrides": {
              "id": 6809,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "9959:8:35"
            },
            "parameters": {
              "id": 6808,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6805,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6841,
                  "src": "9892:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6804,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9892:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6807,
                  "mutability": "mutable",
                  "name": "_salePrice",
                  "nameLocation": "9909:10:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6841,
                  "src": "9901:18:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6806,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9901:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9891:29:35"
            },
            "returnParameters": {
              "id": 6814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6811,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "9993:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6841,
                  "src": "9985:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6810,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9985:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6813,
                  "mutability": "mutable",
                  "name": "royaltyAmount",
                  "nameLocation": "10011:13:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6841,
                  "src": "10003:21:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6812,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10003:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9984:41:35"
            },
            "scope": 7601,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6875,
            "nodeType": "FunctionDefinition",
            "src": "10362:815:35",
            "body": {
              "id": 6874,
              "nodeType": "Block",
              "src": "10468:709:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 6850,
                          "name": "_publicSaleActive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6588,
                          "src": "10557:17:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 6851,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10557:19:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 6852,
                          "name": "_presaleActive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6570,
                          "src": "10609:14:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 6853,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10609:16:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "expression": {
                          "id": 6854,
                          "name": "salesConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9138,
                          "src": "10660:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                            "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                          }
                        },
                        "id": 6855,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "publicSalePrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8272,
                        "src": "10660:27:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint104",
                          "typeString": "uint104"
                        }
                      },
                      {
                        "expression": {
                          "id": 6856,
                          "name": "salesConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9138,
                          "src": "10722:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                            "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                          }
                        },
                        "id": 6857,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "publicSaleStart",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8278,
                        "src": "10722:27:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      {
                        "expression": {
                          "id": 6858,
                          "name": "salesConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9138,
                          "src": "10782:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                            "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                          }
                        },
                        "id": 6859,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "publicSaleEnd",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8281,
                        "src": "10782:25:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      {
                        "expression": {
                          "id": 6860,
                          "name": "salesConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9138,
                          "src": "10839:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                            "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                          }
                        },
                        "id": 6861,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "presaleStart",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8284,
                        "src": "10839:24:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      {
                        "expression": {
                          "id": 6862,
                          "name": "salesConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9138,
                          "src": "10893:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                            "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                          }
                        },
                        "id": 6863,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "presaleEnd",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8287,
                        "src": "10893:22:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      {
                        "expression": {
                          "id": 6864,
                          "name": "salesConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9138,
                          "src": "10952:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                            "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                          }
                        },
                        "id": 6865,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "presaleMerkleRoot",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8290,
                        "src": "10952:29:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 6866,
                          "name": "_totalMinted",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 127,
                          "src": "11012:12:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                            "typeString": "function () view returns (uint256)"
                          }
                        },
                        "id": 6867,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11012:14:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 6868,
                          "name": "config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9134,
                          "src": "11055:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                            "typeString": "struct IERC721Drop.Configuration storage ref"
                          }
                        },
                        "id": 6869,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "editionSize",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8262,
                        "src": "11055:18:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      {
                        "expression": {
                          "id": 6870,
                          "name": "salesConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9138,
                          "src": "11118:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                            "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                          }
                        },
                        "id": 6871,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "maxSalePurchasePerAddress",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8275,
                        "src": "11118:37:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_uint104",
                          "typeString": "uint104"
                        },
                        {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        },
                        {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        },
                        {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        },
                        {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        },
                        {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      ],
                      "expression": {
                        "id": 6848,
                        "name": "IERC721Drop",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8397,
                        "src": "10497:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IERC721Drop_$8397_$",
                          "typeString": "type(contract IERC721Drop)"
                        }
                      },
                      "id": 6849,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "SaleDetails",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8314,
                      "src": "10497:23:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_SaleDetails_$8314_storage_ptr_$",
                        "typeString": "type(struct IERC721Drop.SaleDetails storage pointer)"
                      }
                    },
                    "id": 6872,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [
                      "publicSaleActive",
                      "presaleActive",
                      "publicSalePrice",
                      "publicSaleStart",
                      "publicSaleEnd",
                      "presaleStart",
                      "presaleEnd",
                      "presaleMerkleRoot",
                      "totalMinted",
                      "maxSupply",
                      "maxSalePurchasePerAddress"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "10497:673:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SaleDetails_$8314_memory_ptr",
                      "typeString": "struct IERC721Drop.SaleDetails memory"
                    }
                  },
                  "functionReturnParameters": 6847,
                  "id": 6873,
                  "nodeType": "Return",
                  "src": "10478:692:35"
                }
              ]
            },
            "baseFunctions": [
              8354
            ],
            "documentation": {
              "id": 6842,
              "nodeType": "StructuredDocumentation",
              "src": "10268:89:35",
              "text": "@notice Sale details\n @return IERC721Drop.SaleDetails sale information details"
            },
            "functionSelector": "3474a4a6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "saleDetails",
            "nameLocation": "10371:11:35",
            "parameters": {
              "id": 6843,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10382:2:35"
            },
            "returnParameters": {
              "id": 6847,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6846,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6875,
                  "src": "10432:30:35",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_SaleDetails_$8314_memory_ptr",
                    "typeString": "struct IERC721Drop.SaleDetails"
                  },
                  "typeName": {
                    "id": 6845,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6844,
                      "name": "IERC721Drop.SaleDetails",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 8314,
                      "src": "10432:23:35"
                    },
                    "referencedDeclaration": 8314,
                    "src": "10432:23:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SaleDetails_$8314_storage_ptr",
                      "typeString": "struct IERC721Drop.SaleDetails"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10431:32:35"
            },
            "scope": 7601,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6903,
            "nodeType": "FunctionDefinition",
            "src": "11283:447:35",
            "body": {
              "id": 6902,
              "nodeType": "Block",
              "src": "11432:298:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "id": 6887,
                          "name": "presaleMintsByAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9143,
                          "src": "11524:21:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 6889,
                        "indexExpression": {
                          "id": 6888,
                          "name": "minter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6878,
                          "src": "11546:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "11524:29:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 6896,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 6891,
                              "name": "minter",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6878,
                              "src": "11598:6:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 6890,
                            "name": "_numberMinted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 203,
                            "src": "11584:13:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 6892,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11584:21:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 6893,
                            "name": "presaleMintsByAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9143,
                            "src": "11628:21:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 6895,
                          "indexExpression": {
                            "id": 6894,
                            "name": "minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6878,
                            "src": "11650:6:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "11628:29:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "11584:73:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 6898,
                            "name": "minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6878,
                            "src": "11701:6:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 6897,
                          "name": "_numberMinted",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 203,
                          "src": "11687:13:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view returns (uint256)"
                          }
                        },
                        "id": 6899,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11687:21:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 6885,
                        "name": "IERC721Drop",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8397,
                        "src": "11461:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IERC721Drop_$8397_$",
                          "typeString": "type(contract IERC721Drop)"
                        }
                      },
                      "id": 6886,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "AddressMintDetails",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8324,
                      "src": "11461:30:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_AddressMintDetails_$8324_storage_ptr_$",
                        "typeString": "type(struct IERC721Drop.AddressMintDetails storage pointer)"
                      }
                    },
                    "id": 6900,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [
                      "presaleMints",
                      "publicMints",
                      "totalMints"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "11461:262:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressMintDetails_$8324_memory_ptr",
                      "typeString": "struct IERC721Drop.AddressMintDetails memory"
                    }
                  },
                  "functionReturnParameters": 6884,
                  "id": 6901,
                  "nodeType": "Return",
                  "src": "11442:281:35"
                }
              ]
            },
            "baseFunctions": [
              8363
            ],
            "documentation": {
              "id": 6876,
              "nodeType": "StructuredDocumentation",
              "src": "11183:95:35",
              "text": "@dev Number of NFTs the user has minted per address\n @param minter to get counts for"
            },
            "functionSelector": "d445b978",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintedPerAddress",
            "nameLocation": "11292:16:35",
            "overrides": {
              "id": 6880,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "11363:8:35"
            },
            "parameters": {
              "id": 6879,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6878,
                  "mutability": "mutable",
                  "name": "minter",
                  "nameLocation": "11317:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6903,
                  "src": "11309:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6877,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11309:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11308:16:35"
            },
            "returnParameters": {
              "id": 6884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6883,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6903,
                  "src": "11389:37:35",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressMintDetails_$8324_memory_ptr",
                    "typeString": "struct IERC721Drop.AddressMintDetails"
                  },
                  "typeName": {
                    "id": 6882,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6881,
                      "name": "IERC721Drop.AddressMintDetails",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 8324,
                      "src": "11389:30:35"
                    },
                    "referencedDeclaration": 8324,
                    "src": "11389:30:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressMintDetails_$8324_storage_ptr",
                      "typeString": "struct IERC721Drop.AddressMintDetails"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11388:39:35"
            },
            "scope": 7601,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6929,
            "nodeType": "FunctionDefinition",
            "src": "11960:307:35",
            "body": {
              "id": 6928,
              "nodeType": "Block",
              "src": "12114:153:35",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 6917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 6915,
                      "name": "operator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6908,
                      "src": "12128:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 6916,
                      "name": "zoraERC721TransferHelper",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6463,
                      "src": "12140:24:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "12128:36:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6921,
                  "nodeType": "IfStatement",
                  "src": "12124:78:35",
                  "trueBody": {
                    "id": 6920,
                    "nodeType": "Block",
                    "src": "12166:36:35",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "74727565",
                          "id": 6918,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12187:4:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 6914,
                        "id": 6919,
                        "nodeType": "Return",
                        "src": "12180:11:35"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6924,
                        "name": "nftOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6906,
                        "src": "12241:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 6925,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6908,
                        "src": "12251:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 6922,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "12218:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_ERC721Drop_$7601_$",
                          "typeString": "type(contract super ERC721Drop)"
                        }
                      },
                      "id": 6923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "isApprovedForAll",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 531,
                      "src": "12218:22:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                        "typeString": "function (address,address) view returns (bool)"
                      }
                    },
                    "id": 6926,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12218:42:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 6914,
                  "id": 6927,
                  "nodeType": "Return",
                  "src": "12211:49:35"
                }
              ]
            },
            "baseFunctions": [
              531
            ],
            "documentation": {
              "id": 6904,
              "nodeType": "StructuredDocumentation",
              "src": "11736:219:35",
              "text": "@dev Setup auto-approval for Zora v3 access to sell NFT\n      Still requires approval for module\n @param nftOwner owner of the nft\n @param operator operator wishing to transfer/burn/etc the NFTs"
            },
            "functionSelector": "e985e9c5",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "11969:16:35",
            "overrides": {
              "id": 6911,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 6910,
                  "name": "ERC721AUpgradeable",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1398,
                  "src": "12067:18:35"
                }
              ],
              "src": "12058:28:35"
            },
            "parameters": {
              "id": 6909,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6906,
                  "mutability": "mutable",
                  "name": "nftOwner",
                  "nameLocation": "11994:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6929,
                  "src": "11986:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6905,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11986:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6908,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "12012:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6929,
                  "src": "12004:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6907,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12004:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11985:36:35"
            },
            "returnParameters": {
              "id": 6914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6913,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6929,
                  "src": "12104:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6912,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12104:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12103:6:35"
            },
            "scope": 7601,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 6961,
            "nodeType": "FunctionDefinition",
            "src": "12380:282:35",
            "body": {
              "id": 6960,
              "nodeType": "Block",
              "src": "12484:178:35",
              "statements": [
                {
                  "assignments": [
                    6940,
                    6942
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6940,
                      "mutability": "mutable",
                      "name": "recipient",
                      "nameLocation": "12511:9:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 6960,
                      "src": "12495:25:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      },
                      "typeName": {
                        "id": 6939,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "12495:15:35",
                        "stateMutability": "payable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 6942,
                      "mutability": "mutable",
                      "name": "bps",
                      "nameLocation": "12530:3:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 6960,
                      "src": "12522:11:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6941,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12522:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6950,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 6947,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "12596:4:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC721Drop_$7601",
                              "typeString": "contract ERC721Drop"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC721Drop_$7601",
                              "typeString": "contract ERC721Drop"
                            }
                          ],
                          "id": 6946,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12588:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 6945,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12588:7:35",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 6948,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12588:13:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 6943,
                        "name": "zoraFeeManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6471,
                        "src": "12537:14:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IZoraFeeManager_$8500",
                          "typeString": "contract IZoraFeeManager"
                        }
                      },
                      "id": 6944,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getZORAWithdrawFeesBPS",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8499,
                      "src": "12537:50:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$_t_address_payable_$_t_uint256_$",
                        "typeString": "function (address) external returns (address payable,uint256)"
                      }
                    },
                    "id": 6949,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12537:65:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_payable_$_t_uint256_$",
                      "typeString": "tuple(address payable,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12494:108:35"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 6951,
                        "name": "recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6940,
                        "src": "12620:9:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 6957,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 6954,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 6952,
                                "name": "amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6932,
                                "src": "12632:6:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 6953,
                                "name": "bps",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6942,
                                "src": "12641:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "12632:12:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 6955,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "12631:14:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "31305f303030",
                          "id": 6956,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12648:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000_by_1",
                            "typeString": "int_const 10000"
                          },
                          "value": "10_000"
                        },
                        "src": "12631:23:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 6958,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "12619:36:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_payable_$_t_uint256_$",
                      "typeString": "tuple(address payable,uint256)"
                    }
                  },
                  "functionReturnParameters": 6938,
                  "id": 6959,
                  "nodeType": "Return",
                  "src": "12612:43:35"
                }
              ]
            },
            "documentation": {
              "id": 6930,
              "nodeType": "StructuredDocumentation",
              "src": "12273:102:35",
              "text": "@dev Gets the zora fee for amount of withdraw\n @param amount amount of funds to get fee for"
            },
            "functionSelector": "ee37be39",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "zoraFeeForAmount",
            "nameLocation": "12389:16:35",
            "parameters": {
              "id": 6933,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6932,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "12414:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 6961,
                  "src": "12406:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6931,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12406:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12405:16:35"
            },
            "returnParameters": {
              "id": 6938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6935,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6961,
                  "src": "12454:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 6934,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12454:15:35",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6937,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6961,
                  "src": "12471:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6936,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12471:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12453:26:35"
            },
            "scope": 7601,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 7045,
            "nodeType": "FunctionDefinition",
            "src": "16490:1159:35",
            "body": {
              "id": 7044,
              "nodeType": "Block",
              "src": "16671:978:35",
              "statements": [
                {
                  "assignments": [
                    6977
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6977,
                      "mutability": "mutable",
                      "name": "salePrice",
                      "nameLocation": "16689:9:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 7044,
                      "src": "16681:17:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6976,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "16681:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6980,
                  "initialValue": {
                    "expression": {
                      "id": 6978,
                      "name": "salesConfig",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9138,
                      "src": "16701:11:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                        "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                      }
                    },
                    "id": 6979,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "publicSalePrice",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 8272,
                    "src": "16701:27:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint104",
                      "typeString": "uint104"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16681:47:35"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6986,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 6981,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "16743:3:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 6982,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "16743:9:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 6985,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 6983,
                        "name": "salePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6977,
                        "src": "16756:9:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "id": 6984,
                        "name": "quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6964,
                        "src": "16768:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "16756:20:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16743:33:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6994,
                  "nodeType": "IfStatement",
                  "src": "16739:112:35",
                  "trueBody": {
                    "id": 6993,
                    "nodeType": "Block",
                    "src": "16778:73:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 6990,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 6988,
                                "name": "salePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6977,
                                "src": "16819:9:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 6989,
                                "name": "quantity",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6964,
                                "src": "16831:8:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "16819:20:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 6987,
                            "name": "Purchase_WrongPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8222,
                            "src": "16799:19:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$__$",
                              "typeString": "function (uint256) pure"
                            }
                          },
                          "id": 6991,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16799:41:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6992,
                        "nodeType": "RevertStatement",
                        "src": "16792:48:35"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 7013,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      },
                      "id": 6998,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 6995,
                          "name": "salesConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9138,
                          "src": "17006:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                            "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                          }
                        },
                        "id": 6996,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "maxSalePurchasePerAddress",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8275,
                        "src": "17006:37:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 6997,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "17047:1:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "17006:42:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 7012,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 7009,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 7004,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 7000,
                                  "name": "_msgSender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4985,
                                  "src": "17078:10:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                    "typeString": "function () view returns (address)"
                                  }
                                },
                                "id": 7001,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "17078:12:35",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 6999,
                              "name": "_numberMinted",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 203,
                              "src": "17064:13:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view returns (uint256)"
                              }
                            },
                            "id": 7002,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "17064:27:35",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 7003,
                            "name": "quantity",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6964,
                            "src": "17110:8:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "17064:54:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 7005,
                            "name": "presaleMintsByAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9143,
                            "src": "17137:21:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 7008,
                          "indexExpression": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 7006,
                              "name": "_msgSender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4985,
                              "src": "17159:10:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                "typeString": "function () view returns (address)"
                              }
                            },
                            "id": 7007,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "17159:12:35",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "17137:35:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "17064:108:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "expression": {
                          "id": 7010,
                          "name": "salesConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9138,
                          "src": "17187:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                            "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                          }
                        },
                        "id": 7011,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "maxSalePurchasePerAddress",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8275,
                        "src": "17187:37:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "src": "17064:160:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "17006:218:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7018,
                  "nodeType": "IfStatement",
                  "src": "16989:306:35",
                  "trueBody": {
                    "id": 7017,
                    "nodeType": "Block",
                    "src": "17235:60:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 7014,
                            "name": "Purchase_TooManyForAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8228,
                            "src": "17256:26:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 7015,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "17256:28:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7016,
                        "nodeType": "RevertStatement",
                        "src": "17249:35:35"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7020,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4985,
                          "src": "17315:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 7021,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "17315:12:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 7022,
                        "name": "quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6964,
                        "src": "17329:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 7019,
                      "name": "_mintNFTs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7077,
                      "src": "17305:9:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 7023,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17305:33:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7024,
                  "nodeType": "ExpressionStatement",
                  "src": "17305:33:35"
                },
                {
                  "assignments": [
                    7026
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7026,
                      "mutability": "mutable",
                      "name": "firstMintedTokenId",
                      "nameLocation": "17356:18:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 7044,
                      "src": "17348:26:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7025,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "17348:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 7031,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7030,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 7027,
                        "name": "_lastMintedTokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6625,
                        "src": "17377:18:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 7028,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17377:20:35",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 7029,
                      "name": "quantity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6964,
                      "src": "17400:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17377:31:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "17348:60:35"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7035,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4985,
                          "src": "17459:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 7036,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "17459:12:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 7037,
                        "name": "quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6964,
                        "src": "17495:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 7038,
                        "name": "salePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6977,
                        "src": "17532:9:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 7039,
                        "name": "firstMintedTokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7026,
                        "src": "17578:18:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 7032,
                        "name": "IERC721Drop",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8397,
                        "src": "17424:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IERC721Drop_$8397_$",
                          "typeString": "type(contract IERC721Drop)"
                        }
                      },
                      "id": 7034,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "Sale",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8255,
                      "src": "17424:16:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256,uint256)"
                      }
                    },
                    "id": 7040,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [
                      "to",
                      "quantity",
                      "pricePerToken",
                      "firstPurchasedTokenId"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "17424:183:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7041,
                  "nodeType": "EmitStatement",
                  "src": "17419:188:35"
                },
                {
                  "expression": {
                    "id": 7042,
                    "name": "firstMintedTokenId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7026,
                    "src": "17624:18:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 6975,
                  "id": 7043,
                  "nodeType": "Return",
                  "src": "17617:25:35"
                }
              ]
            },
            "baseFunctions": [
              8332
            ],
            "documentation": {
              "id": 6962,
              "nodeType": "StructuredDocumentation",
              "src": "16365:120:35",
              "text": "@dev This allows the user to purchase a edition edition\nat the given price in the contract."
            },
            "functionSelector": "efef39a1",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 6967,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 6966,
                  "name": "nonReentrant",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 4548,
                  "src": "16567:12:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "16567:12:35"
              },
              {
                "arguments": [
                  {
                    "id": 6969,
                    "name": "quantity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6964,
                    "src": "16602:8:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 6970,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 6968,
                  "name": "canMintTokens",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6552,
                  "src": "16588:13:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "16588:23:35"
              },
              {
                "id": 6972,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 6971,
                  "name": "onlyPublicSaleActive",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6614,
                  "src": "16620:20:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "16620:20:35"
              }
            ],
            "name": "purchase",
            "nameLocation": "16499:8:35",
            "parameters": {
              "id": 6965,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6964,
                  "mutability": "mutable",
                  "name": "quantity",
                  "nameLocation": "16516:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7045,
                  "src": "16508:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6963,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16508:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16507:18:35"
            },
            "returnParameters": {
              "id": 6975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6974,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7045,
                  "src": "16658:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6973,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16658:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16657:9:35"
            },
            "scope": 7601,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7077,
            "nodeType": "FunctionDefinition",
            "src": "17948:315:35",
            "body": {
              "id": 7076,
              "nodeType": "Block",
              "src": "18006:257:35",
              "statements": [
                {
                  "body": {
                    "id": 7071,
                    "nodeType": "Block",
                    "src": "18019:216:35",
                    "statements": [
                      {
                        "assignments": [
                          7054
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 7054,
                            "mutability": "mutable",
                            "name": "toMint",
                            "nameLocation": "18041:6:35",
                            "nodeType": "VariableDeclaration",
                            "scope": 7071,
                            "src": "18033:14:35",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 7053,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "18033:7:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 7061,
                        "initialValue": {
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 7057,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 7055,
                              "name": "quantity",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7050,
                              "src": "18050:8:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "id": 7056,
                              "name": "MAX_MINT_BATCH_SIZE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6445,
                              "src": "18061:19:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "18050:30:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseExpression": {
                            "id": 7059,
                            "name": "quantity",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7050,
                            "src": "18137:8:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 7060,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "Conditional",
                          "src": "18050:95:35",
                          "trueExpression": {
                            "id": 7058,
                            "name": "MAX_MINT_BATCH_SIZE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6445,
                            "src": "18099:19:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "18033:112:35"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 7063,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7048,
                              "src": "18170:2:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 7064,
                              "name": "toMint",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7054,
                              "src": "18184:6:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 7062,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 924,
                            "src": "18159:5:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 7065,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [
                            "to",
                            "quantity"
                          ],
                          "nodeType": "FunctionCall",
                          "src": "18159:33:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7066,
                        "nodeType": "ExpressionStatement",
                        "src": "18159:33:35"
                      },
                      {
                        "expression": {
                          "id": 7069,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 7067,
                            "name": "quantity",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7050,
                            "src": "18206:8:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 7068,
                            "name": "toMint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7054,
                            "src": "18218:6:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "18206:18:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 7070,
                        "nodeType": "ExpressionStatement",
                        "src": "18206:18:35"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7074,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 7072,
                      "name": "quantity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7050,
                      "src": "18243:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 7073,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "18254:1:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "18243:12:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7075,
                  "nodeType": "DoWhileStatement",
                  "src": "18016:241:35"
                }
              ]
            },
            "documentation": {
              "id": 7046,
              "nodeType": "StructuredDocumentation",
              "src": "17655:288:35",
              "text": "@notice Function to mint NFTs\n @dev (important: Does not enforce max supply limit, enforce that limit earlier)\n @dev This batches in size of 8 as per recommended by ERC721A creators\n @param to address to mint NFTs to\n @param quantity number of NFTs to mint"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mintNFTs",
            "nameLocation": "17957:9:35",
            "parameters": {
              "id": 7051,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7048,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "17975:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7077,
                  "src": "17967:10:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7047,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17967:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7050,
                  "mutability": "mutable",
                  "name": "quantity",
                  "nameLocation": "17987:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7077,
                  "src": "17979:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7049,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17979:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17966:30:35"
            },
            "returnParameters": {
              "id": 7052,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "18006:0:35"
            },
            "scope": 7601,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 7178,
            "nodeType": "FunctionDefinition",
            "src": "23000:1352:35",
            "body": {
              "id": 7177,
              "nodeType": "Block",
              "src": "23299:1053:35",
              "statements": [
                {
                  "condition": {
                    "id": 7114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "23326:286:35",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 7101,
                          "name": "merkleProof",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7087,
                          "src": "23374:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_calldata_ptr",
                            "typeString": "bytes32[] calldata"
                          }
                        },
                        {
                          "expression": {
                            "id": 7102,
                            "name": "salesConfig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9138,
                            "src": "23403:11:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                              "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                            }
                          },
                          "id": 7103,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "presaleMerkleRoot",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8290,
                          "src": "23403:29:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 7107,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "23541:3:35",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 7108,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "src": "23541:10:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "id": 7109,
                                  "name": "maxQuantity",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7082,
                                  "src": "23553:11:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "id": 7110,
                                  "name": "pricePerToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7084,
                                  "src": "23566:13:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "id": 7105,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "23530:3:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 7106,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encode",
                                "nodeType": "MemberAccess",
                                "src": "23530:10:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 7111,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "23530:50:35",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 7104,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "23450:9:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 7112,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "23450:148:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_calldata_ptr",
                            "typeString": "bytes32[] calldata"
                          },
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "expression": {
                          "id": 7099,
                          "name": "MerkleProofUpgradeable",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5356,
                          "src": "23327:22:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_MerkleProofUpgradeable_$5356_$",
                            "typeString": "type(library MerkleProofUpgradeable)"
                          }
                        },
                        "id": 7100,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "verify",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5287,
                        "src": "23327:29:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_array$_t_bytes32_$dyn_memory_ptr_$_t_bytes32_$_t_bytes32_$returns$_t_bool_$",
                          "typeString": "function (bytes32[] memory,bytes32,bytes32) pure returns (bool)"
                        }
                      },
                      "id": 7113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "23327:285:35",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7119,
                  "nodeType": "IfStatement",
                  "src": "23309:373:35",
                  "trueBody": {
                    "id": 7118,
                    "nodeType": "Block",
                    "src": "23623:59:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 7115,
                            "name": "Presale_MerkleNotApproved",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8217,
                            "src": "23644:25:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 7116,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "23644:27:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7117,
                        "nodeType": "RevertStatement",
                        "src": "23637:34:35"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 7120,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "23696:3:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 7121,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "23696:9:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 7124,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 7122,
                        "name": "pricePerToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7084,
                        "src": "23709:13:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "id": 7123,
                        "name": "quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7080,
                        "src": "23725:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "23709:24:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "23696:37:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7133,
                  "nodeType": "IfStatement",
                  "src": "23692:120:35",
                  "trueBody": {
                    "id": 7132,
                    "nodeType": "Block",
                    "src": "23735:77:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 7129,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 7127,
                                "name": "pricePerToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7084,
                                "src": "23776:13:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 7128,
                                "name": "quantity",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7080,
                                "src": "23792:8:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "23776:24:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 7126,
                            "name": "Purchase_WrongPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8222,
                            "src": "23756:19:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$__$",
                              "typeString": "function (uint256) pure"
                            }
                          },
                          "id": 7130,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "23756:45:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7131,
                        "nodeType": "RevertStatement",
                        "src": "23749:52:35"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 7139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 7134,
                        "name": "presaleMintsByAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9143,
                        "src": "23822:21:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 7137,
                      "indexExpression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7135,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4985,
                          "src": "23844:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 7136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "23844:12:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "23822:35:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 7138,
                      "name": "quantity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7080,
                      "src": "23861:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "23822:47:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7140,
                  "nodeType": "ExpressionStatement",
                  "src": "23822:47:35"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "id": 7141,
                        "name": "presaleMintsByAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9143,
                        "src": "23883:21:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 7144,
                      "indexExpression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7142,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4985,
                          "src": "23905:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 7143,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "23905:12:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "23883:35:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 7145,
                      "name": "maxQuantity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7082,
                      "src": "23921:11:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "23883:49:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7151,
                  "nodeType": "IfStatement",
                  "src": "23879:114:35",
                  "trueBody": {
                    "id": 7150,
                    "nodeType": "Block",
                    "src": "23934:59:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 7147,
                            "name": "Presale_TooManyForAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8231,
                            "src": "23955:25:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 7148,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "23955:27:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7149,
                        "nodeType": "RevertStatement",
                        "src": "23948:34:35"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7153,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4985,
                          "src": "24013:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 7154,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "24013:12:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 7155,
                        "name": "quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7080,
                        "src": "24027:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 7152,
                      "name": "_mintNFTs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7077,
                      "src": "24003:9:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 7156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "24003:33:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7157,
                  "nodeType": "ExpressionStatement",
                  "src": "24003:33:35"
                },
                {
                  "assignments": [
                    7159
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7159,
                      "mutability": "mutable",
                      "name": "firstMintedTokenId",
                      "nameLocation": "24054:18:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 7177,
                      "src": "24046:26:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7158,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "24046:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 7164,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 7160,
                        "name": "_lastMintedTokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6625,
                        "src": "24075:18:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 7161,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "24075:20:35",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 7162,
                      "name": "quantity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7080,
                      "src": "24098:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "24075:31:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "24046:60:35"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7168,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4985,
                          "src": "24157:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 7169,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "24157:12:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 7170,
                        "name": "quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7080,
                        "src": "24193:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 7171,
                        "name": "pricePerToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7084,
                        "src": "24230:13:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 7172,
                        "name": "firstMintedTokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7159,
                        "src": "24280:18:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 7165,
                        "name": "IERC721Drop",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8397,
                        "src": "24122:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IERC721Drop_$8397_$",
                          "typeString": "type(contract IERC721Drop)"
                        }
                      },
                      "id": 7167,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "Sale",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8255,
                      "src": "24122:16:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256,uint256)"
                      }
                    },
                    "id": 7173,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [
                      "to",
                      "quantity",
                      "pricePerToken",
                      "firstPurchasedTokenId"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "24122:187:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7174,
                  "nodeType": "EmitStatement",
                  "src": "24117:192:35"
                },
                {
                  "expression": {
                    "id": 7175,
                    "name": "firstMintedTokenId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7159,
                    "src": "24327:18:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7098,
                  "id": 7176,
                  "nodeType": "Return",
                  "src": "24320:25:35"
                }
              ]
            },
            "baseFunctions": [
              8347
            ],
            "documentation": {
              "id": 7078,
              "nodeType": "StructuredDocumentation",
              "src": "22697:298:35",
              "text": "@notice Merkle-tree based presale purchase function\n @param quantity quantity to purchase\n @param maxQuantity max quantity that can be purchased via merkle proof #\n @param pricePerToken price that each token is purchased at\n @param merkleProof proof for presale mint"
            },
            "functionSelector": "25024a2b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 7090,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7089,
                  "name": "nonReentrant",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 4548,
                  "src": "23198:12:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "23198:12:35"
              },
              {
                "arguments": [
                  {
                    "id": 7092,
                    "name": "quantity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7080,
                    "src": "23233:8:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 7093,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7091,
                  "name": "canMintTokens",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6552,
                  "src": "23219:13:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "23219:23:35"
              },
              {
                "id": 7095,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7094,
                  "name": "onlyPresaleActive",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6601,
                  "src": "23251:17:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "23251:17:35"
              }
            ],
            "name": "purchasePresale",
            "nameLocation": "23009:15:35",
            "parameters": {
              "id": 7088,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7080,
                  "mutability": "mutable",
                  "name": "quantity",
                  "nameLocation": "23042:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7178,
                  "src": "23034:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7079,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23034:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7082,
                  "mutability": "mutable",
                  "name": "maxQuantity",
                  "nameLocation": "23068:11:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7178,
                  "src": "23060:19:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7081,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23060:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7084,
                  "mutability": "mutable",
                  "name": "pricePerToken",
                  "nameLocation": "23097:13:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7178,
                  "src": "23089:21:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7083,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23089:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7087,
                  "mutability": "mutable",
                  "name": "merkleProof",
                  "nameLocation": "23139:11:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7178,
                  "src": "23120:30:35",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_calldata_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7085,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "23120:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 7086,
                    "nodeType": "ArrayTypeName",
                    "src": "23120:9:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23024:132:35"
            },
            "returnParameters": {
              "id": 7098,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7097,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7178,
                  "src": "23286:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7096,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23286:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23285:9:35"
            },
            "scope": 7601,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7203,
            "nodeType": "FunctionDefinition",
            "src": "27424:257:35",
            "body": {
              "id": 7202,
              "nodeType": "Block",
              "src": "27596:85:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 7195,
                        "name": "recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7181,
                        "src": "27616:9:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 7196,
                        "name": "quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7183,
                        "src": "27627:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 7194,
                      "name": "_mintNFTs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7077,
                      "src": "27606:9:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 7197,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "27606:30:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7198,
                  "nodeType": "ExpressionStatement",
                  "src": "27606:30:35"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 7199,
                      "name": "_lastMintedTokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6625,
                      "src": "27654:18:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 7200,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "27654:20:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7193,
                  "id": 7201,
                  "nodeType": "Return",
                  "src": "27647:27:35"
                }
              ]
            },
            "baseFunctions": [
              8379
            ],
            "documentation": {
              "id": 7179,
              "nodeType": "StructuredDocumentation",
              "src": "27310:109:35",
              "text": "@notice Mint admin\n @param recipient recipient to mint to\n @param quantity quantity to mint"
            },
            "functionSelector": "e58306f9",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 7186,
                    "name": "MINTER_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6455,
                    "src": "27521:11:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 7187,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7185,
                  "name": "onlyRoleOrAdmin",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6533,
                  "src": "27505:15:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "27505:28:35"
              },
              {
                "arguments": [
                  {
                    "id": 7189,
                    "name": "quantity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7183,
                    "src": "27556:8:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 7190,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7188,
                  "name": "canMintTokens",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6552,
                  "src": "27542:13:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "27542:23:35"
              }
            ],
            "name": "adminMint",
            "nameLocation": "27433:9:35",
            "parameters": {
              "id": 7184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7181,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "27451:9:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7203,
                  "src": "27443:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7180,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27443:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7183,
                  "mutability": "mutable",
                  "name": "quantity",
                  "nameLocation": "27470:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7203,
                  "src": "27462:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7182,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27462:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27442:37:35"
            },
            "returnParameters": {
              "id": 7193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7192,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7203,
                  "src": "27583:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7191,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27583:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27582:9:35"
            },
            "scope": 7601,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7257,
            "nodeType": "FunctionDefinition",
            "src": "30996:561:35",
            "body": {
              "id": 7256,
              "nodeType": "Block",
              "src": "31195:362:35",
              "statements": [
                {
                  "assignments": [
                    7221
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7221,
                      "mutability": "mutable",
                      "name": "atId",
                      "nameLocation": "31213:4:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 7256,
                      "src": "31205:12:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7220,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "31205:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 7223,
                  "initialValue": {
                    "id": 7222,
                    "name": "_currentIndex",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 25,
                    "src": "31220:13:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "31205:28:35"
                },
                {
                  "assignments": [
                    7225
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7225,
                      "mutability": "mutable",
                      "name": "startAt",
                      "nameLocation": "31251:7:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 7256,
                      "src": "31243:15:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7224,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "31243:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 7227,
                  "initialValue": {
                    "id": 7226,
                    "name": "atId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7221,
                    "src": "31261:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "31243:22:35"
                },
                {
                  "id": 7252,
                  "nodeType": "UncheckedBlock",
                  "src": "31276:238:35",
                  "statements": [
                    {
                      "body": {
                        "id": 7250,
                        "nodeType": "Block",
                        "src": "31431:73:35",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "baseExpression": {
                                    "id": 7242,
                                    "name": "recipients",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7207,
                                    "src": "31459:10:35",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                      "typeString": "address[] calldata"
                                    }
                                  },
                                  "id": 7246,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 7245,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 7243,
                                      "name": "atId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 7221,
                                      "src": "31470:4:35",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "id": 7244,
                                      "name": "startAt",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 7225,
                                      "src": "31477:7:35",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "31470:14:35",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "31459:26:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "hexValue": "31",
                                  "id": 7247,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "31487:1:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  }
                                ],
                                "id": 7241,
                                "name": "_mintNFTs",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7077,
                                "src": "31449:9:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                  "typeString": "function (address,uint256)"
                                }
                              },
                              "id": 7248,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "31449:40:35",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 7249,
                            "nodeType": "ExpressionStatement",
                            "src": "31449:40:35"
                          }
                        ]
                      },
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 7237,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 7235,
                          "name": "atId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7221,
                          "src": "31380:4:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 7236,
                          "name": "endAt",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7229,
                          "src": "31387:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "31380:12:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 7251,
                      "initializationExpression": {
                        "assignments": [
                          7229
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 7229,
                            "mutability": "mutable",
                            "name": "endAt",
                            "nameLocation": "31330:5:35",
                            "nodeType": "VariableDeclaration",
                            "scope": 7251,
                            "src": "31322:13:35",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 7228,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "31322:7:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 7234,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 7233,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 7230,
                            "name": "atId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7221,
                            "src": "31338:4:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "expression": {
                              "id": 7231,
                              "name": "recipients",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7207,
                              "src": "31345:10:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                "typeString": "address[] calldata"
                              }
                            },
                            "id": 7232,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "31345:17:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "31338:24:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "31322:40:35"
                      },
                      "loopExpression": {
                        "expression": {
                          "id": 7239,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "31410:6:35",
                          "subExpression": {
                            "id": 7238,
                            "name": "atId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7221,
                            "src": "31410:4:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 7240,
                        "nodeType": "ExpressionStatement",
                        "src": "31410:6:35"
                      },
                      "nodeType": "ForStatement",
                      "src": "31300:204:35"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 7253,
                      "name": "_lastMintedTokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6625,
                      "src": "31530:18:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 7254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "31530:20:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7219,
                  "id": 7255,
                  "nodeType": "Return",
                  "src": "31523:27:35"
                }
              ]
            },
            "baseFunctions": [
              8388
            ],
            "documentation": {
              "id": 7204,
              "nodeType": "StructuredDocumentation",
              "src": "30841:150:35",
              "text": "@dev This mints multiple editions to the given list of addresses.\n @param recipients list of addresses to send the newly minted editions to"
            },
            "functionSelector": "b8ae5a2c",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 7211,
                    "name": "MINTER_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6455,
                    "src": "31111:11:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 7212,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7210,
                  "name": "onlyRoleOrAdmin",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6533,
                  "src": "31095:15:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "31095:28:35"
              },
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 7214,
                      "name": "recipients",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7207,
                      "src": "31146:10:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                        "typeString": "address[] calldata"
                      }
                    },
                    "id": 7215,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "src": "31146:17:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 7216,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7213,
                  "name": "canMintTokens",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6552,
                  "src": "31132:13:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "31132:32:35"
              }
            ],
            "name": "adminMintAirdrop",
            "nameLocation": "31005:16:35",
            "overrides": {
              "id": 7209,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "31078:8:35"
            },
            "parameters": {
              "id": 7208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7207,
                  "mutability": "mutable",
                  "name": "recipients",
                  "nameLocation": "31041:10:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7257,
                  "src": "31022:29:35",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7205,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "31022:7:35",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 7206,
                    "nodeType": "ArrayTypeName",
                    "src": "31022:9:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31021:31:35"
            },
            "returnParameters": {
              "id": 7219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7218,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7257,
                  "src": "31182:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7217,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31182:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31181:9:35"
            },
            "scope": 7601,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7270,
            "nodeType": "FunctionDefinition",
            "src": "33501:89:35",
            "body": {
              "id": 7269,
              "nodeType": "Block",
              "src": "33554:36:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 7266,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7260,
                        "src": "33574:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7265,
                      "name": "_setOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9198,
                      "src": "33564:9:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 7267,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "33564:19:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7268,
                  "nodeType": "ExpressionStatement",
                  "src": "33564:19:35"
                }
              ]
            },
            "documentation": {
              "id": 7258,
              "nodeType": "StructuredDocumentation",
              "src": "33409:87:35",
              "text": "@dev Set new owner for royalties / opensea\n @param newOwner new owner to set"
            },
            "functionSelector": "13af4035",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 7263,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7262,
                  "name": "onlyAdmin",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6507,
                  "src": "33544:9:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "33544:9:35"
              }
            ],
            "name": "setOwner",
            "nameLocation": "33510:8:35",
            "parameters": {
              "id": 7261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7260,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "33527:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7270,
                  "src": "33519:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7259,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "33519:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33518:18:35"
            },
            "returnParameters": {
              "id": 7264,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33554:0:35"
            },
            "scope": 7601,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 7338,
            "nodeType": "FunctionDefinition",
            "src": "35795:1159:35",
            "body": {
              "id": 7337,
              "nodeType": "Block",
              "src": "36078:876:35",
              "statements": [
                {
                  "expression": {
                    "id": 7294,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 7290,
                        "name": "salesConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9138,
                        "src": "36520:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                          "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                        }
                      },
                      "id": 7292,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "publicSalePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8272,
                      "src": "36520:27:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint104",
                        "typeString": "uint104"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7293,
                      "name": "publicSalePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7273,
                      "src": "36550:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint104",
                        "typeString": "uint104"
                      }
                    },
                    "src": "36520:45:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint104",
                      "typeString": "uint104"
                    }
                  },
                  "id": 7295,
                  "nodeType": "ExpressionStatement",
                  "src": "36520:45:35"
                },
                {
                  "expression": {
                    "id": 7300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 7296,
                        "name": "salesConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9138,
                        "src": "36575:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                          "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                        }
                      },
                      "id": 7298,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "maxSalePurchasePerAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8275,
                      "src": "36575:37:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7299,
                      "name": "maxSalePurchasePerAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7275,
                      "src": "36615:25:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "src": "36575:65:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "id": 7301,
                  "nodeType": "ExpressionStatement",
                  "src": "36575:65:35"
                },
                {
                  "expression": {
                    "id": 7306,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 7302,
                        "name": "salesConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9138,
                        "src": "36650:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                          "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                        }
                      },
                      "id": 7304,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "publicSaleStart",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8278,
                      "src": "36650:27:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7305,
                      "name": "publicSaleStart",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7277,
                      "src": "36680:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "36650:45:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "id": 7307,
                  "nodeType": "ExpressionStatement",
                  "src": "36650:45:35"
                },
                {
                  "expression": {
                    "id": 7312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 7308,
                        "name": "salesConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9138,
                        "src": "36705:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                          "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                        }
                      },
                      "id": 7310,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "publicSaleEnd",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8281,
                      "src": "36705:25:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7311,
                      "name": "publicSaleEnd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7279,
                      "src": "36733:13:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "36705:41:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "id": 7313,
                  "nodeType": "ExpressionStatement",
                  "src": "36705:41:35"
                },
                {
                  "expression": {
                    "id": 7318,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 7314,
                        "name": "salesConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9138,
                        "src": "36756:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                          "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                        }
                      },
                      "id": 7316,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "presaleStart",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8284,
                      "src": "36756:24:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7317,
                      "name": "presaleStart",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7281,
                      "src": "36783:12:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "36756:39:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "id": 7319,
                  "nodeType": "ExpressionStatement",
                  "src": "36756:39:35"
                },
                {
                  "expression": {
                    "id": 7324,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 7320,
                        "name": "salesConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9138,
                        "src": "36805:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                          "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                        }
                      },
                      "id": 7322,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "presaleEnd",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8287,
                      "src": "36805:22:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7323,
                      "name": "presaleEnd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7283,
                      "src": "36830:10:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "36805:35:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "id": 7325,
                  "nodeType": "ExpressionStatement",
                  "src": "36805:35:35"
                },
                {
                  "expression": {
                    "id": 7330,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 7326,
                        "name": "salesConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9138,
                        "src": "36850:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SalesConfiguration_$8291_storage",
                          "typeString": "struct IERC721Drop.SalesConfiguration storage ref"
                        }
                      },
                      "id": 7328,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "presaleMerkleRoot",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8290,
                      "src": "36850:29:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7329,
                      "name": "presaleMerkleRoot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7285,
                      "src": "36882:17:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "36850:49:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 7331,
                  "nodeType": "ExpressionStatement",
                  "src": "36850:49:35"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7333,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4985,
                          "src": "36934:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 7334,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "36934:12:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7332,
                      "name": "SalesConfigChanged",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6479,
                      "src": "36915:18:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 7335,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "36915:32:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7336,
                  "nodeType": "EmitStatement",
                  "src": "36910:37:35"
                }
              ]
            },
            "documentation": {
              "id": 7271,
              "nodeType": "StructuredDocumentation",
              "src": "35694:42:35",
              "text": "@dev This sets the sales configuration"
            },
            "functionSelector": "ffdb7163",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 7288,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7287,
                  "name": "onlyAdmin",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6507,
                  "src": "36068:9:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "36068:9:35"
              }
            ],
            "name": "setSaleConfiguration",
            "nameLocation": "35804:20:35",
            "parameters": {
              "id": 7286,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7273,
                  "mutability": "mutable",
                  "name": "publicSalePrice",
                  "nameLocation": "35842:15:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7338,
                  "src": "35834:23:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint104",
                    "typeString": "uint104"
                  },
                  "typeName": {
                    "id": 7272,
                    "name": "uint104",
                    "nodeType": "ElementaryTypeName",
                    "src": "35834:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint104",
                      "typeString": "uint104"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7275,
                  "mutability": "mutable",
                  "name": "maxSalePurchasePerAddress",
                  "nameLocation": "35874:25:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7338,
                  "src": "35867:32:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7274,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "35867:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7277,
                  "mutability": "mutable",
                  "name": "publicSaleStart",
                  "nameLocation": "35916:15:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7338,
                  "src": "35909:22:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 7276,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "35909:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7279,
                  "mutability": "mutable",
                  "name": "publicSaleEnd",
                  "nameLocation": "35948:13:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7338,
                  "src": "35941:20:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 7278,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "35941:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7281,
                  "mutability": "mutable",
                  "name": "presaleStart",
                  "nameLocation": "35978:12:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7338,
                  "src": "35971:19:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 7280,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "35971:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7283,
                  "mutability": "mutable",
                  "name": "presaleEnd",
                  "nameLocation": "36007:10:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7338,
                  "src": "36000:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 7282,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "36000:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7285,
                  "mutability": "mutable",
                  "name": "presaleMerkleRoot",
                  "nameLocation": "36035:17:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7338,
                  "src": "36027:25:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7284,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "36027:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "35824:234:35"
            },
            "returnParameters": {
              "id": 7289,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "36078:0:35"
            },
            "scope": 7601,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7360,
            "nodeType": "FunctionDefinition",
            "src": "38945:312:35",
            "body": {
              "id": 7359,
              "nodeType": "Block",
              "src": "39074:183:35",
              "statements": [
                {
                  "expression": {
                    "id": 7351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 7347,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9134,
                        "src": "39136:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                          "typeString": "struct IERC721Drop.Configuration storage ref"
                        }
                      },
                      "id": 7349,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "fundsRecipient",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8268,
                      "src": "39136:21:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 7350,
                      "name": "newRecipientAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7341,
                      "src": "39160:19:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "39136:43:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 7352,
                  "nodeType": "ExpressionStatement",
                  "src": "39136:43:35"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 7354,
                        "name": "newRecipientAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7341,
                        "src": "39216:19:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7355,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4985,
                          "src": "39237:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 7356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "39237:12:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7353,
                      "name": "FundsRecipientChanged",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6485,
                      "src": "39194:21:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 7357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "39194:56:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7358,
                  "nodeType": "EmitStatement",
                  "src": "39189:61:35"
                }
              ]
            },
            "documentation": {
              "id": 7339,
              "nodeType": "StructuredDocumentation",
              "src": "38834:106:35",
              "text": "@notice Set a different funds recipient\n @param newRecipientAddress new funds recipient address"
            },
            "functionSelector": "10a7eb5d",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 7344,
                    "name": "SALES_MANAGER_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6460,
                    "src": "39050:18:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 7345,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7343,
                  "name": "onlyRoleOrAdmin",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6533,
                  "src": "39034:15:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "39034:35:35"
              }
            ],
            "name": "setFundsRecipient",
            "nameLocation": "38954:17:35",
            "parameters": {
              "id": 7342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7341,
                  "mutability": "mutable",
                  "name": "newRecipientAddress",
                  "nameLocation": "38988:19:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7360,
                  "src": "38972:35:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 7340,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "38972:15:35",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "38971:37:35"
            },
            "returnParameters": {
              "id": 7346,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "39074:0:35"
            },
            "scope": 7601,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7457,
            "nodeType": "FunctionDefinition",
            "src": "45235:1130:35",
            "body": {
              "id": 7456,
              "nodeType": "Block",
              "src": "45277:1088:35",
              "statements": [
                {
                  "assignments": [
                    7367
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7367,
                      "mutability": "mutable",
                      "name": "sender",
                      "nameLocation": "45295:6:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 7456,
                      "src": "45287:14:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 7366,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "45287:7:35",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 7370,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 7368,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4985,
                      "src": "45304:10:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 7369,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "45304:12:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "45287:29:35"
                },
                {
                  "assignments": [
                    7372
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7372,
                      "mutability": "mutable",
                      "name": "funds",
                      "nameLocation": "45361:5:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 7456,
                      "src": "45353:13:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7371,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "45353:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 7378,
                  "initialValue": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 7375,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -28,
                          "src": "45377:4:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC721Drop_$7601",
                            "typeString": "contract ERC721Drop"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_ERC721Drop_$7601",
                            "typeString": "contract ERC721Drop"
                          }
                        ],
                        "id": 7374,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "45369:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 7373,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "45369:7:35",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 7376,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "45369:13:35",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 7377,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "balance",
                    "nodeType": "MemberAccess",
                    "src": "45369:21:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "45353:37:35"
                },
                {
                  "assignments": [
                    7380,
                    7382
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7380,
                      "mutability": "mutable",
                      "name": "feeRecipient",
                      "nameLocation": "45417:12:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 7456,
                      "src": "45401:28:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      },
                      "typeName": {
                        "id": 7379,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "45401:15:35",
                        "stateMutability": "payable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 7382,
                      "mutability": "mutable",
                      "name": "zoraFee",
                      "nameLocation": "45439:7:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 7456,
                      "src": "45431:15:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7381,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "45431:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 7386,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 7384,
                        "name": "funds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7372,
                        "src": "45480:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 7383,
                      "name": "zoraFeeForAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6961,
                      "src": "45450:16:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_address_payable_$_t_uint256_$",
                        "typeString": "function (uint256) returns (address payable,uint256)"
                      }
                    },
                    "id": 7385,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "45450:45:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_payable_$_t_uint256_$",
                      "typeString": "tuple(address payable,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "45400:95:35"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 7406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 7401,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 7397,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 7391,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "45523:36:35",
                          "subExpression": {
                            "arguments": [
                              {
                                "id": 7388,
                                "name": "DEFAULT_ADMIN_ROLE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3380,
                                "src": "45532:18:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "id": 7389,
                                "name": "sender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7367,
                                "src": "45552:6:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 7387,
                              "name": "hasRole",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3432,
                              "src": "45524:7:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                                "typeString": "function (bytes32,address) view returns (bool)"
                              }
                            },
                            "id": 7390,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "45524:35:35",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "id": 7396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "45575:36:35",
                          "subExpression": {
                            "arguments": [
                              {
                                "id": 7393,
                                "name": "SALES_MANAGER_ROLE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6460,
                                "src": "45584:18:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "id": 7394,
                                "name": "sender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7367,
                                "src": "45604:6:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 7392,
                              "name": "hasRole",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3432,
                              "src": "45576:7:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                                "typeString": "function (bytes32,address) view returns (bool)"
                              }
                            },
                            "id": 7395,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "45576:35:35",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "45523:88:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&&",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 7400,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 7398,
                          "name": "sender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7367,
                          "src": "45627:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "id": 7399,
                          "name": "feeRecipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7380,
                          "src": "45637:12:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "45627:22:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "45523:126:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 7405,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 7402,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7367,
                        "src": "45665:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "expression": {
                          "id": 7403,
                          "name": "config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9134,
                          "src": "45675:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                            "typeString": "struct IERC721Drop.Configuration storage ref"
                          }
                        },
                        "id": 7404,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "fundsRecipient",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8268,
                        "src": "45675:21:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "45665:31:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "45523:173:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7411,
                  "nodeType": "IfStatement",
                  "src": "45506:260:35",
                  "trueBody": {
                    "id": 7410,
                    "nodeType": "Block",
                    "src": "45707:59:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 7407,
                            "name": "Access_WithdrawNotAllowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8205,
                            "src": "45728:25:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 7408,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "45728:27:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7409,
                        "nodeType": "RevertStatement",
                        "src": "45721:34:35"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 7412,
                      "name": "zoraFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7382,
                      "src": "45807:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 7413,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "45817:1:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "45807:11:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7437,
                  "nodeType": "IfStatement",
                  "src": "45803:301:35",
                  "trueBody": {
                    "id": 7436,
                    "nodeType": "Block",
                    "src": "45820:284:35",
                    "statements": [
                      {
                        "assignments": [
                          7416,
                          null
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 7416,
                            "mutability": "mutable",
                            "name": "successFee",
                            "nameLocation": "45840:10:35",
                            "nodeType": "VariableDeclaration",
                            "scope": 7436,
                            "src": "45835:15:35",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "typeName": {
                              "id": 7415,
                              "name": "bool",
                              "nodeType": "ElementaryTypeName",
                              "src": "45835:4:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "visibility": "internal"
                          },
                          null
                        ],
                        "id": 7424,
                        "initialValue": {
                          "arguments": [
                            {
                              "hexValue": "",
                              "id": 7422,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "45963:2:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                "typeString": "literal_string \"\""
                              },
                              "value": ""
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                "typeString": "literal_string \"\""
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                  "typeString": "literal_string \"\""
                                }
                              ],
                              "expression": {
                                "id": 7417,
                                "name": "feeRecipient",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7380,
                                "src": "45856:12:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "id": 7418,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "call",
                              "nodeType": "MemberAccess",
                              "src": "45856:17:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                              }
                            },
                            "id": 7421,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "names": [
                              "value",
                              "gas"
                            ],
                            "nodeType": "FunctionCallOptions",
                            "options": [
                              {
                                "id": 7419,
                                "name": "zoraFee",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7382,
                                "src": "45898:7:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 7420,
                                "name": "FUNDS_SEND_GAS_LIMIT",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6449,
                                "src": "45928:20:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "src": "45856:106:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$gasvalue",
                              "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                            }
                          },
                          "id": 7423,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "45856:110:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                            "typeString": "tuple(bool,bytes memory)"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "45834:132:35"
                      },
                      {
                        "condition": {
                          "id": 7426,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "45984:11:35",
                          "subExpression": {
                            "id": 7425,
                            "name": "successFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7416,
                            "src": "45985:10:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 7431,
                        "nodeType": "IfStatement",
                        "src": "45980:84:35",
                        "trueBody": {
                          "id": 7430,
                          "nodeType": "Block",
                          "src": "45997:67:35",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 7427,
                                  "name": "Withdraw_FundsSendFailure",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8208,
                                  "src": "46022:25:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 7428,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "46022:27:35",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 7429,
                              "nodeType": "RevertStatement",
                              "src": "46015:34:35"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 7434,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 7432,
                            "name": "funds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7372,
                            "src": "46077:5:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 7433,
                            "name": "zoraFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7382,
                            "src": "46086:7:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "46077:16:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 7435,
                        "nodeType": "ExpressionStatement",
                        "src": "46077:16:35"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    7439,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7439,
                      "mutability": "mutable",
                      "name": "successFunds",
                      "nameLocation": "46148:12:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 7456,
                      "src": "46143:17:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 7438,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "46143:4:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 7448,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "",
                        "id": 7446,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "46268:2:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "expression": {
                            "id": 7440,
                            "name": "config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9134,
                            "src": "46166:6:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                              "typeString": "struct IERC721Drop.Configuration storage ref"
                            }
                          },
                          "id": 7441,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "fundsRecipient",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8268,
                          "src": "46166:21:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 7442,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "46166:26:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 7445,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value",
                        "gas"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 7443,
                          "name": "funds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7372,
                          "src": "46213:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 7444,
                          "name": "FUNDS_SEND_GAS_LIMIT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6449,
                          "src": "46237:20:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "46166:101:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$gasvalue",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 7447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "46166:105:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "46142:129:35"
                },
                {
                  "condition": {
                    "id": 7450,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "46285:13:35",
                    "subExpression": {
                      "id": 7449,
                      "name": "successFunds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7439,
                      "src": "46286:12:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7455,
                  "nodeType": "IfStatement",
                  "src": "46281:78:35",
                  "trueBody": {
                    "id": 7454,
                    "nodeType": "Block",
                    "src": "46300:59:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 7451,
                            "name": "Withdraw_FundsSendFailure",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8208,
                            "src": "46321:25:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 7452,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "46321:27:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7453,
                        "nodeType": "RevertStatement",
                        "src": "46314:34:35"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 7361,
              "nodeType": "StructuredDocumentation",
              "src": "45159:71:35",
              "text": "@notice This withdraws ETH from the contract to the contract owner."
            },
            "functionSelector": "3ccfd60b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 7364,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7363,
                  "name": "nonReentrant",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 4548,
                  "src": "45264:12:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "45264:12:35"
              }
            ],
            "name": "withdraw",
            "nameLocation": "45244:8:35",
            "parameters": {
              "id": 7362,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "45252:2:35"
            },
            "returnParameters": {
              "id": 7365,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "45277:0:35"
            },
            "scope": 7601,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7495,
            "nodeType": "FunctionDefinition",
            "src": "49651:346:35",
            "body": {
              "id": 7494,
              "nodeType": "Block",
              "src": "49747:250:35",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    },
                    "id": 7471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 7464,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9134,
                        "src": "49761:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                          "typeString": "struct IERC721Drop.Configuration storage ref"
                        }
                      },
                      "id": 7465,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "editionSize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8262,
                      "src": "49761:18:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 7468,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "49788:6:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            },
                            "typeName": {
                              "id": 7467,
                              "name": "uint64",
                              "nodeType": "ElementaryTypeName",
                              "src": "49788:6:35",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            }
                          ],
                          "id": 7466,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "49783:4:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 7469,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "49783:12:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint64",
                          "typeString": "type(uint64)"
                        }
                      },
                      "id": 7470,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "49783:16:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "49761:38:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7476,
                  "nodeType": "IfStatement",
                  "src": "49757:114:35",
                  "trueBody": {
                    "id": 7475,
                    "nodeType": "Block",
                    "src": "49801:70:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 7472,
                            "name": "Admin_UnableToFinalizeNotOpenEdition",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8244,
                            "src": "49822:36:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 7473,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "49822:38:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7474,
                        "nodeType": "RevertStatement",
                        "src": "49815:45:35"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 7485,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 7477,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9134,
                        "src": "49881:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                          "typeString": "struct IERC721Drop.Configuration storage ref"
                        }
                      },
                      "id": 7479,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "editionSize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8262,
                      "src": "49881:18:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 7482,
                            "name": "_totalMinted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 127,
                            "src": "49909:12:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 7483,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "49909:14:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 7481,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "49902:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint64_$",
                          "typeString": "type(uint64)"
                        },
                        "typeName": {
                          "id": 7480,
                          "name": "uint64",
                          "nodeType": "ElementaryTypeName",
                          "src": "49902:6:35",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 7484,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "49902:22:35",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "49881:43:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "id": 7486,
                  "nodeType": "ExpressionStatement",
                  "src": "49881:43:35"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7488,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4985,
                          "src": "49957:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 7489,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "49957:12:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 7490,
                          "name": "config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9134,
                          "src": "49971:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                            "typeString": "struct IERC721Drop.Configuration storage ref"
                          }
                        },
                        "id": 7491,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "editionSize",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8262,
                        "src": "49971:18:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      ],
                      "id": 7487,
                      "name": "OpenMintFinalized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6491,
                      "src": "49939:17:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 7492,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "49939:51:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7493,
                  "nodeType": "EmitStatement",
                  "src": "49934:56:35"
                }
              ]
            },
            "documentation": {
              "id": 7458,
              "nodeType": "StructuredDocumentation",
              "src": "49586:60:35",
              "text": "@notice Admin function to finalize and open edition sale"
            },
            "functionSelector": "41e96eb1",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 7461,
                    "name": "SALES_MANAGER_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6460,
                    "src": "49723:18:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 7462,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 7460,
                  "name": "onlyRoleOrAdmin",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6533,
                  "src": "49707:15:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "49707:35:35"
              }
            ],
            "name": "finalizeOpenEdition",
            "nameLocation": "49660:19:35",
            "parameters": {
              "id": 7459,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "49679:2:35"
            },
            "returnParameters": {
              "id": 7463,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "49747:0:35"
            },
            "scope": 7601,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7509,
            "nodeType": "FunctionDefinition",
            "src": "50350:159:35",
            "body": {
              "id": 7508,
              "nodeType": "Block",
              "src": "50472:37:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 7504,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "50489:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_ERC721Drop_$7601_$",
                          "typeString": "type(contract super ERC721Drop)"
                        }
                      },
                      "id": 7505,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9183,
                      "src": "50489:11:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 7506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "50489:13:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 7503,
                  "id": 7507,
                  "nodeType": "Return",
                  "src": "50482:20:35"
                }
              ]
            },
            "baseFunctions": [
              8369,
              9183
            ],
            "documentation": {
              "id": 7496,
              "nodeType": "StructuredDocumentation",
              "src": "50262:83:35",
              "text": "@notice Simple override for owner interface.\n @return user owner address"
            },
            "functionSelector": "8da5cb5b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "owner",
            "nameLocation": "50359:5:35",
            "overrides": {
              "id": 7500,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 7498,
                  "name": "OwnableSkeleton",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 9199,
                  "src": "50412:15:35"
                },
                {
                  "id": 7499,
                  "name": "IERC721Drop",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 8397,
                  "src": "50429:11:35"
                }
              ],
              "src": "50403:38:35"
            },
            "parameters": {
              "id": 7497,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "50364:2:35"
            },
            "returnParameters": {
              "id": 7503,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7502,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7509,
                  "src": "50459:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7501,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "50459:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "50458:9:35"
            },
            "scope": 7601,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 7521,
            "nodeType": "FunctionDefinition",
            "src": "50609:122:35",
            "body": {
              "id": 7520,
              "nodeType": "Block",
              "src": "50670:61:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "expression": {
                          "id": 7515,
                          "name": "config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9134,
                          "src": "50687:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                            "typeString": "struct IERC721Drop.Configuration storage ref"
                          }
                        },
                        "id": 7516,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "metadataRenderer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8259,
                        "src": "50687:23:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IMetadataRenderer_$8444",
                          "typeString": "contract IMetadataRenderer"
                        }
                      },
                      "id": 7517,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "contractURI",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8438,
                      "src": "50687:35:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () view external returns (string memory)"
                      }
                    },
                    "id": 7518,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "50687:37:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7514,
                  "id": 7519,
                  "nodeType": "Return",
                  "src": "50680:44:35"
                }
              ]
            },
            "documentation": {
              "id": 7510,
              "nodeType": "StructuredDocumentation",
              "src": "50515:89:35",
              "text": "@notice Contract URI Getter, proxies to metadataRenderer\n @return Contract URI"
            },
            "functionSelector": "e8a3d485",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contractURI",
            "nameLocation": "50618:11:35",
            "parameters": {
              "id": 7511,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "50629:2:35"
            },
            "returnParameters": {
              "id": 7514,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7513,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7521,
                  "src": "50655:13:35",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7512,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "50655:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "50654:15:35"
            },
            "scope": 7601,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7534,
            "nodeType": "FunctionDefinition",
            "src": "50790:136:35",
            "body": {
              "id": 7533,
              "nodeType": "Block",
              "src": "50860:66:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 7529,
                          "name": "config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9134,
                          "src": "50895:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                            "typeString": "struct IERC721Drop.Configuration storage ref"
                          }
                        },
                        "id": 7530,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "metadataRenderer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8259,
                        "src": "50895:23:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IMetadataRenderer_$8444",
                          "typeString": "contract IMetadataRenderer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IMetadataRenderer_$8444",
                          "typeString": "contract IMetadataRenderer"
                        }
                      ],
                      "id": 7528,
                      "name": "IMetadataRenderer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8444,
                      "src": "50877:17:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IMetadataRenderer_$8444_$",
                        "typeString": "type(contract IMetadataRenderer)"
                      }
                    },
                    "id": 7531,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "50877:42:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IMetadataRenderer_$8444",
                      "typeString": "contract IMetadataRenderer"
                    }
                  },
                  "functionReturnParameters": 7527,
                  "id": 7532,
                  "nodeType": "Return",
                  "src": "50870:49:35"
                }
              ]
            },
            "documentation": {
              "id": 7522,
              "nodeType": "StructuredDocumentation",
              "src": "50737:48:35",
              "text": "@notice Getter for metadataRenderer contract"
            },
            "functionSelector": "70319970",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "metadataRenderer",
            "nameLocation": "50799:16:35",
            "parameters": {
              "id": 7523,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "50815:2:35"
            },
            "returnParameters": {
              "id": 7527,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7526,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7534,
                  "src": "50841:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IMetadataRenderer_$8444",
                    "typeString": "contract IMetadataRenderer"
                  },
                  "typeName": {
                    "id": 7525,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 7524,
                      "name": "IMetadataRenderer",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 8444,
                      "src": "50841:17:35"
                    },
                    "referencedDeclaration": 8444,
                    "src": "50841:17:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IMetadataRenderer_$8444",
                      "typeString": "contract IMetadataRenderer"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "50840:19:35"
            },
            "scope": 7601,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7561,
            "nodeType": "FunctionDefinition",
            "src": "51070:295:35",
            "body": {
              "id": 7560,
              "nodeType": "Block",
              "src": "51186:179:35",
              "statements": [
                {
                  "condition": {
                    "id": 7546,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "51200:17:35",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 7544,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7537,
                          "src": "51209:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 7543,
                        "name": "_exists",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 628,
                        "src": "51201:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (uint256) view returns (bool)"
                        }
                      },
                      "id": 7545,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "51201:16:35",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7553,
                  "nodeType": "IfStatement",
                  "src": "51196:104:35",
                  "trueBody": {
                    "id": 7552,
                    "nodeType": "Block",
                    "src": "51219:81:35",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 7547,
                              "name": "IERC721AUpgradeable",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1469,
                              "src": "51240:19:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC721AUpgradeable_$1469_$",
                                "typeString": "type(contract IERC721AUpgradeable)"
                              }
                            },
                            "id": 7549,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "URIQueryForNonexistentToken",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1446,
                            "src": "51240:47:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 7550,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "51240:49:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7551,
                        "nodeType": "RevertStatement",
                        "src": "51233:56:35"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 7557,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7537,
                        "src": "51350:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "expression": {
                          "id": 7554,
                          "name": "config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9134,
                          "src": "51317:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Configuration_$8269_storage",
                            "typeString": "struct IERC721Drop.Configuration storage ref"
                          }
                        },
                        "id": 7555,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "metadataRenderer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8259,
                        "src": "51317:23:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IMetadataRenderer_$8444",
                          "typeString": "contract IMetadataRenderer"
                        }
                      },
                      "id": 7556,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "tokenURI",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8433,
                      "src": "51317:32:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) view external returns (string memory)"
                      }
                    },
                    "id": 7558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "51317:41:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7542,
                  "id": 7559,
                  "nodeType": "Return",
                  "src": "51310:48:35"
                }
              ]
            },
            "baseFunctions": [
              402
            ],
            "documentation": {
              "id": 7535,
              "nodeType": "StructuredDocumentation",
              "src": "50932:133:35",
              "text": "@notice Token URI Getter, proxies to metadataRenderer\n @param tokenId id of token to get URI for\n @return Token URI"
            },
            "functionSelector": "c87b56dd",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tokenURI",
            "nameLocation": "51079:8:35",
            "overrides": {
              "id": 7539,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "51141:8:35"
            },
            "parameters": {
              "id": 7538,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7537,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "51096:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7561,
                  "src": "51088:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7536,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "51088:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "51087:17:35"
            },
            "returnParameters": {
              "id": 7542,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7541,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7561,
                  "src": "51167:13:35",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7540,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "51167:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "51166:15:35"
            },
            "scope": 7601,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 7600,
            "nodeType": "FunctionDefinition",
            "src": "51475:488:35",
            "body": {
              "id": 7599,
              "nodeType": "Block",
              "src": "51706:257:35",
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 7597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 7590,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 7583,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 7575,
                              "name": "interfaceId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7564,
                              "src": "51759:11:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              }
                            ],
                            "expression": {
                              "id": 7573,
                              "name": "super",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -25,
                              "src": "51735:5:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_super$_ERC721Drop_$7601_$",
                                "typeString": "type(contract super ERC721Drop)"
                              }
                            },
                            "id": 7574,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "supportsInterface",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3413,
                            "src": "51735:23:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                              "typeString": "function (bytes4) view returns (bool)"
                            }
                          },
                          "id": 7576,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "51735:36:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          },
                          "id": 7582,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 7578,
                                  "name": "IOwnable",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8460,
                                  "src": "51792:8:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IOwnable_$8460_$",
                                    "typeString": "type(contract IOwnable)"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_type$_t_contract$_IOwnable_$8460_$",
                                    "typeString": "type(contract IOwnable)"
                                  }
                                ],
                                "id": 7577,
                                "name": "type",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -27,
                                "src": "51787:4:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                  "typeString": "function () pure"
                                }
                              },
                              "id": 7579,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "51787:14:35",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_meta_type_t_contract$_IOwnable_$8460",
                                "typeString": "type(contract IOwnable)"
                              }
                            },
                            "id": 7580,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "interfaceId",
                            "nodeType": "MemberAccess",
                            "src": "51787:26:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 7581,
                            "name": "interfaceId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7564,
                            "src": "51817:11:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "src": "51787:41:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "51735:93:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 7589,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 7585,
                                "name": "IERC2981Upgradeable",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3893,
                                "src": "51849:19:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC2981Upgradeable_$3893_$",
                                  "typeString": "type(contract IERC2981Upgradeable)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_contract$_IERC2981Upgradeable_$3893_$",
                                  "typeString": "type(contract IERC2981Upgradeable)"
                                }
                              ],
                              "id": 7584,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "51844:4:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 7586,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "51844:25:35",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_contract$_IERC2981Upgradeable_$3893",
                              "typeString": "type(contract IERC2981Upgradeable)"
                            }
                          },
                          "id": 7587,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "interfaceId",
                          "nodeType": "MemberAccess",
                          "src": "51844:37:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 7588,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7564,
                          "src": "51885:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "51844:52:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "51735:161:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "id": 7596,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 7592,
                              "name": "IERC721Drop",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8397,
                              "src": "51917:11:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC721Drop_$8397_$",
                                "typeString": "type(contract IERC721Drop)"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_type$_t_contract$_IERC721Drop_$8397_$",
                                "typeString": "type(contract IERC721Drop)"
                              }
                            ],
                            "id": 7591,
                            "name": "type",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -27,
                            "src": "51912:4:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 7593,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "51912:17:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_meta_type_t_contract$_IERC721Drop_$8397",
                            "typeString": "type(contract IERC721Drop)"
                          }
                        },
                        "id": 7594,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberName": "interfaceId",
                        "nodeType": "MemberAccess",
                        "src": "51912:29:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "id": 7595,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7564,
                        "src": "51945:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "src": "51912:44:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "51735:221:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 7572,
                  "id": 7598,
                  "nodeType": "Return",
                  "src": "51716:240:35"
                }
              ]
            },
            "baseFunctions": [
              158,
              3413,
              5411
            ],
            "documentation": {
              "id": 7562,
              "nodeType": "StructuredDocumentation",
              "src": "51371:99:35",
              "text": "@notice ERC165 supports interface\n @param interfaceId interface id to check if supported"
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "51484:17:35",
            "overrides": {
              "id": 7569,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 7566,
                  "name": "IERC165Upgradeable",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5412,
                  "src": "51580:18:35"
                },
                {
                  "id": 7567,
                  "name": "ERC721AUpgradeable",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1398,
                  "src": "51612:18:35"
                },
                {
                  "id": 7568,
                  "name": "AccessControlUpgradeable",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3677,
                  "src": "51644:24:35"
                }
              ],
              "src": "51558:120:35"
            },
            "parameters": {
              "id": 7565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7564,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "51509:11:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 7600,
                  "src": "51502:18:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 7563,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "51502:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "51501:20:35"
            },
            "returnParameters": {
              "id": 7572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7571,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7600,
                  "src": "51696:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7570,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "51696:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "51695:6:35"
            },
            "scope": 7601,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 6421,
              "name": "ERC721AUpgradeable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1398,
              "src": "2323:18:35"
            },
            "id": 6422,
            "nodeType": "InheritanceSpecifier",
            "src": "2323:18:35"
          },
          {
            "baseName": {
              "id": 6423,
              "name": "UUPSUpgradeable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 4495,
              "src": "2347:15:35"
            },
            "id": 6424,
            "nodeType": "InheritanceSpecifier",
            "src": "2347:15:35"
          },
          {
            "baseName": {
              "id": 6425,
              "name": "IERC2981Upgradeable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3893,
              "src": "2368:19:35"
            },
            "id": 6426,
            "nodeType": "InheritanceSpecifier",
            "src": "2368:19:35"
          },
          {
            "baseName": {
              "id": 6427,
              "name": "ReentrancyGuardUpgradeable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 4554,
              "src": "2393:26:35"
            },
            "id": 6428,
            "nodeType": "InheritanceSpecifier",
            "src": "2393:26:35"
          },
          {
            "baseName": {
              "id": 6429,
              "name": "AccessControlUpgradeable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3677,
              "src": "2425:24:35"
            },
            "id": 6430,
            "nodeType": "InheritanceSpecifier",
            "src": "2425:24:35"
          },
          {
            "baseName": {
              "id": 6431,
              "name": "IERC721Drop",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8397,
              "src": "2455:11:35"
            },
            "id": 6432,
            "nodeType": "InheritanceSpecifier",
            "src": "2455:11:35"
          },
          {
            "baseName": {
              "id": 6433,
              "name": "OwnableSkeleton",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9199,
              "src": "2472:15:35"
            },
            "id": 6434,
            "nodeType": "InheritanceSpecifier",
            "src": "2472:15:35"
          },
          {
            "baseName": {
              "id": 6435,
              "name": "FundsReceiver",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9165,
              "src": "2493:13:35"
            },
            "id": 6436,
            "nodeType": "InheritanceSpecifier",
            "src": "2493:13:35"
          },
          {
            "arguments": [
              {
                "hexValue": "37",
                "id": 6438,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "2520:1:35",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_7_by_1",
                  "typeString": "int_const 7"
                },
                "value": "7"
              }
            ],
            "baseName": {
              "id": 6437,
              "name": "Version",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9479,
              "src": "2512:7:35"
            },
            "id": 6439,
            "nodeType": "InheritanceSpecifier",
            "src": "2512:10:35"
          },
          {
            "baseName": {
              "id": 6440,
              "name": "ERC721DropStorageV1",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9144,
              "src": "2528:19:35"
            },
            "id": 6441,
            "nodeType": "InheritanceSpecifier",
            "src": "2528:19:35"
          }
        ],
        "canonicalName": "ERC721Drop",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 6420,
          "nodeType": "StructuredDocumentation",
          "src": "1988:307:35",
          "text": " @notice ZORA NFT Base contract for Drops and Editions\n @dev For drops: assumes 1. linear mint order, 2. max number of mints needs to be less than max_uint64\n       (if you have more than 18 quintillion linear mints you should probably not be using this contract)\n @author iain@zora.co"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          7601,
          9144,
          9479,
          9165,
          9199,
          8460,
          8397,
          3677,
          4554,
          3893,
          4495,
          4275,
          3906,
          1398,
          1469,
          4715,
          4688,
          5400,
          5412,
          3750,
          5000,
          4359
        ],
        "name": "ERC721Drop",
        "nameLocation": "2305:10:35",
        "scope": 7602,
        "usedErrors": [
          1410,
          1413,
          1416,
          1419,
          1422,
          1425,
          1428,
          1431,
          1434,
          1437,
          1440,
          1443,
          1446,
          8197,
          8202,
          8205,
          8208,
          8211,
          8214,
          8217,
          8222,
          8225,
          8228,
          8231,
          8236,
          8241,
          8244
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 35
};