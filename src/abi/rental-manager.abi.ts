export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_admin"
            }
        ]
    },
    {
        "type": "error",
        "name": "ECDSAInvalidSignature",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ECDSAInvalidSignatureLength",
        "inputs": [
            {
                "type": "uint256",
                "name": "length"
            }
        ]
    },
    {
        "type": "error",
        "name": "ECDSAInvalidSignatureS",
        "inputs": [
            {
                "type": "bytes32",
                "name": "s"
            }
        ]
    },
    {
        "type": "error",
        "name": "MerkleProofInvalidMultiproof",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ModuleDewhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "module",
                "indexed": true
            },
            {
                "type": "address",
                "name": "dewhitelister",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ModuleWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "module",
                "indexed": true
            },
            {
                "type": "address",
                "name": "whitelister",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RentalStarted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "seaportOrderHash",
                "indexed": true
            },
            {
                "type": "address",
                "name": "renterWallet",
                "indexed": true
            },
            {
                "type": "address",
                "name": "lender",
                "indexed": true
            },
            {
                "type": "address",
                "name": "collection",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": false
            },
            {
                "type": "address",
                "name": "fulfiller",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "rentEndTimestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RentalStopped",
        "inputs": [
            {
                "type": "bytes32",
                "name": "seaportOrderHash",
                "indexed": true
            },
            {
                "type": "address",
                "name": "renterWallet",
                "indexed": true
            },
            {
                "type": "address",
                "name": "lender",
                "indexed": true
            },
            {
                "type": "address",
                "name": "collection",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": false
            },
            {
                "type": "address",
                "name": "stopper",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "admin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "assetIdToSeaportOrderHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "assetId"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "seaportOrderHash"
            }
        ]
    },
    {
        "type": "function",
        "name": "dewhitelistModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "module"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "domainSeparator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRentPayloadHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "payload",
                "components": [
                    {
                        "type": "tuple",
                        "name": "fulfillment",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "fulfiller"
                            },
                            {
                                "type": "address",
                                "name": "recipient"
                            },
                            {
                                "type": "uint256",
                                "name": "rentDurationInSeconds"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "proposal",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "maxRentDurationInSeconds"
                            },
                            {
                                "type": "uint256",
                                "name": "minRentDurationInSeconds"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "merkleRootUpdate",
                        "components": [
                            {
                                "type": "bytes32",
                                "name": "root"
                            },
                            {
                                "type": "uint256",
                                "name": "nonce"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "expiration"
                    },
                    {
                        "type": "address",
                        "name": "intendedFulfiller"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "getStopRentPayloadHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "payload",
                "components": [
                    {
                        "type": "bytes32[]",
                        "name": "merkleProof"
                    },
                    {
                        "type": "tuple",
                        "name": "rental",
                        "components": [
                            {
                                "type": "address",
                                "name": "lender"
                            },
                            {
                                "type": "address",
                                "name": "renter"
                            },
                            {
                                "type": "address",
                                "name": "rentedItem"
                            },
                            {
                                "type": "uint256",
                                "name": "rentedItemId"
                            },
                            {
                                "type": "uint256",
                                "name": "endTimestamp"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "merkleRootUpdate",
                        "components": [
                            {
                                "type": "bytes32",
                                "name": "root"
                            },
                            {
                                "type": "uint256",
                                "name": "nonce"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "expiration"
                    },
                    {
                        "type": "address",
                        "name": "intendedFulfiller"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "isRentedOut",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "collection"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "isWhitelistedModule",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "module"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "isWhitelisted"
            }
        ]
    },
    {
        "type": "function",
        "name": "relayBatch",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "recipients"
            },
            {
                "type": "address[]",
                "name": "items"
            },
            {
                "type": "uint256[]",
                "name": "itemIds"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "relayBatchRentals",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "address",
                        "name": "lender"
                    },
                    {
                        "type": "address",
                        "name": "renter"
                    },
                    {
                        "type": "address",
                        "name": "rentedItem"
                    },
                    {
                        "type": "uint256",
                        "name": "rentedItemId"
                    },
                    {
                        "type": "uint256",
                        "name": "endTimestamp"
                    }
                ],
                "name": "rentals"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "rentFromZone",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "payload",
                "components": [
                    {
                        "type": "tuple",
                        "name": "fulfillment",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "fulfiller"
                            },
                            {
                                "type": "address",
                                "name": "recipient"
                            },
                            {
                                "type": "uint256",
                                "name": "rentDurationInSeconds"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "proposal",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "maxRentDurationInSeconds"
                            },
                            {
                                "type": "uint256",
                                "name": "minRentDurationInSeconds"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "merkleRootUpdate",
                        "components": [
                            {
                                "type": "bytes32",
                                "name": "root"
                            },
                            {
                                "type": "uint256",
                                "name": "nonce"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "expiration"
                    },
                    {
                        "type": "address",
                        "name": "intendedFulfiller"
                    }
                ]
            },
            {
                "type": "bytes32",
                "name": "seaportOrderHash"
            },
            {
                "type": "bytes32",
                "name": "seaportZoneHash"
            },
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "uint8",
                        "name": "itemType"
                    },
                    {
                        "type": "address",
                        "name": "token"
                    },
                    {
                        "type": "uint256",
                        "name": "identifier"
                    },
                    {
                        "type": "uint256",
                        "name": "amount"
                    }
                ],
                "name": "offer"
            },
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "uint8",
                        "name": "itemType"
                    },
                    {
                        "type": "address",
                        "name": "token"
                    },
                    {
                        "type": "uint256",
                        "name": "identifier"
                    },
                    {
                        "type": "uint256",
                        "name": "amount"
                    },
                    {
                        "type": "address",
                        "name": "recipient"
                    }
                ],
                "name": "consideration"
            },
            {
                "type": "address",
                "name": "seaportFulfiller"
            },
            {
                "type": "address",
                "name": "offerer"
            },
            {
                "type": "bytes",
                "name": "signature"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "rentalFactory",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "renterWalletToMerkleRoot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "renterWallet"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "merkleRoot"
            }
        ]
    },
    {
        "type": "function",
        "name": "renterWalletToMerkleRootNonce",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "renterWallet"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "merkleRootNonce"
            }
        ]
    },
    {
        "type": "function",
        "name": "setRentalFactory",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "factory"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setSigner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newSigner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setZone",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newZone"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "signer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "stopRent",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "payload",
                "components": [
                    {
                        "type": "bytes32[]",
                        "name": "merkleProof"
                    },
                    {
                        "type": "tuple",
                        "name": "rental",
                        "components": [
                            {
                                "type": "address",
                                "name": "lender"
                            },
                            {
                                "type": "address",
                                "name": "renter"
                            },
                            {
                                "type": "address",
                                "name": "rentedItem"
                            },
                            {
                                "type": "uint256",
                                "name": "rentedItemId"
                            },
                            {
                                "type": "uint256",
                                "name": "endTimestamp"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "merkleRootUpdate",
                        "components": [
                            {
                                "type": "bytes32",
                                "name": "root"
                            },
                            {
                                "type": "uint256",
                                "name": "nonce"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "expiration"
                    },
                    {
                        "type": "address",
                        "name": "intendedFulfiller"
                    }
                ]
            },
            {
                "type": "bytes",
                "name": "signature"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "stopRentBatch",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "payload",
                "components": [
                    {
                        "type": "bytes32[]",
                        "name": "merkleProof"
                    },
                    {
                        "type": "bool[]",
                        "name": "proofFlags"
                    },
                    {
                        "type": "tuple[]",
                        "components": [
                            {
                                "type": "address",
                                "name": "lender"
                            },
                            {
                                "type": "address",
                                "name": "renter"
                            },
                            {
                                "type": "address",
                                "name": "rentedItem"
                            },
                            {
                                "type": "uint256",
                                "name": "rentedItemId"
                            },
                            {
                                "type": "uint256",
                                "name": "endTimestamp"
                            }
                        ],
                        "name": "rentals"
                    },
                    {
                        "type": "tuple",
                        "name": "merkleRootUpdate",
                        "components": [
                            {
                                "type": "bytes32",
                                "name": "root"
                            },
                            {
                                "type": "uint256",
                                "name": "nonce"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "expiration"
                    },
                    {
                        "type": "address",
                        "name": "intendedFulfiller"
                    }
                ]
            },
            {
                "type": "bytes",
                "name": "signature"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferAdmin",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newAdmin"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "whitelistModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "module"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "zone",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    }
]
