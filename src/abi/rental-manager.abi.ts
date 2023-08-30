export const ABI_JSON = [
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
