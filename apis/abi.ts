export const abi = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_campaignId',
        type: 'bytes32'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenType',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'tokenAddress',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        internalType: 'struct GrowlightVault.TokenInfo[]',
        name: '_tokens',
        type: 'tuple[]'
      },
      {
        internalType: 'uint256[]',
        name: '_maxTokenAmounts',
        type: 'uint256[]'
      },
      {
        internalType: 'bool',
        name: '_createIfNotExists',
        type: 'bool'
      }
    ],
    name: 'addToken',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'campaignId',
            type: 'bytes32'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'tokenType',
                type: 'uint256'
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              }
            ],
            internalType: 'struct GrowlightVault.TokenInfo[]',
            name: 'tokens',
            type: 'tuple[]'
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256'
          },
          {
            internalType: 'bytes',
            name: 'signature',
            type: 'bytes'
          }
        ],
        internalType: 'struct GrowlightVault.ClaimTokenParam[]',
        name: '_params',
        type: 'tuple[]'
      }
    ],
    name: 'batchClaimToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
  // {
  //   inputs: [
  //     {
  //       internalType: 'bytes32',
  //       name: '_campaignId',
  //       type: 'bytes32'
  //     },
  //     {
  //       components: [
  //         {
  //           internalType: 'uint256',
  //           name: 'tokenType',
  //           type: 'uint256'
  //         },
  //         {
  //           internalType: 'address',
  //           name: 'tokenAddress',
  //           type: 'address'
  //         },
  //         {
  //           internalType: 'uint256',
  //           name: 'amount',
  //           type: 'uint256'
  //         }
  //       ],
  //       internalType: 'struct GrowlightVault.TokenInfo[]',
  //       name: '_tokens',
  //       type: 'tuple[]'
  //     },
  //     {
  //       internalType: 'uint256',
  //       name: '_nonce',
  //       type: 'uint256'
  //     },
  //     {
  //       internalType: 'bytes',
  //       name: '_signature',
  //       type: 'bytes'
  //     }
  //   ],
  //   name: 'claimToken',
  //   outputs: [],
  //   stateMutability: 'nonpayable',
  //   type: 'function'
  // }
];

export const erc20TokenContractAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sp ender',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
];
