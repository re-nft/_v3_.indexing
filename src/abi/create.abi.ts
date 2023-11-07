export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "kernel_"
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
        "name": "ItemTypeNotSupported",
        "inputs": []
    },
    {
        "type": "error",
        "name": "KernelAdapter_OnlyKernel",
        "inputs": [
            {
                "type": "address",
                "name": "caller_"
            }
        ]
    },
    {
        "type": "error",
        "name": "OrderTypeNotSupported",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Policy_ModuleDoesNotExist",
        "inputs": [
            {
                "type": "bytes5",
                "name": "keycode_"
            }
        ]
    },
    {
        "type": "error",
        "name": "Policy_OnlyRole",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role_"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RentalOrderStarted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "orderHash",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "emittedExtraData",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "seaportOrderHash",
                "indexed": false
            },
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "uint8",
                        "name": "itemType"
                    },
                    {
                        "type": "uint8",
                        "name": "settleTo"
                    },
                    {
                        "type": "address",
                        "name": "token"
                    },
                    {
                        "type": "uint256",
                        "name": "amount"
                    },
                    {
                        "type": "uint256",
                        "name": "identifier"
                    }
                ],
                "name": "items"
            },
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "address",
                        "name": "target"
                    },
                    {
                        "type": "uint256",
                        "name": "itemIndex"
                    },
                    {
                        "type": "bytes",
                        "name": "extraData"
                    }
                ],
                "name": "hooks"
            },
            {
                "type": "address",
                "name": "lender",
                "indexed": true
            },
            {
                "type": "address",
                "name": "renter",
                "indexed": true
            },
            {
                "type": "address",
                "name": "rentalWallet",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "endTimestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SeaportCompatibleContractDeployed",
        "inputs": []
    },
    {
        "type": "function",
        "name": "ESCRW",
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
        "name": "STORE",
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
        "name": "changeKernel",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newKernel_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "configureDependencies",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes5[]",
                "name": "dependencies"
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
        "name": "getOrderMetadataHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "metadata",
                "components": [
                    {
                        "type": "uint8",
                        "name": "orderType"
                    },
                    {
                        "type": "uint256",
                        "name": "rentDuration"
                    },
                    {
                        "type": "tuple[]",
                        "components": [
                            {
                                "type": "address",
                                "name": "target"
                            },
                            {
                                "type": "uint256",
                                "name": "itemIndex"
                            },
                            {
                                "type": "bytes",
                                "name": "extraData"
                            }
                        ],
                        "name": "hooks"
                    },
                    {
                        "type": "bytes",
                        "name": "emittedExtraData"
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
                                "type": "address",
                                "name": "recipient"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "metadata",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "orderType"
                            },
                            {
                                "type": "uint256",
                                "name": "rentDuration"
                            },
                            {
                                "type": "tuple[]",
                                "components": [
                                    {
                                        "type": "address",
                                        "name": "target"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "itemIndex"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "extraData"
                                    }
                                ],
                                "name": "hooks"
                            },
                            {
                                "type": "bytes",
                                "name": "emittedExtraData"
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
        "name": "getRentalOrderHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "order",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "seaportOrderHash"
                    },
                    {
                        "type": "tuple[]",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "itemType"
                            },
                            {
                                "type": "uint8",
                                "name": "settleTo"
                            },
                            {
                                "type": "address",
                                "name": "token"
                            },
                            {
                                "type": "uint256",
                                "name": "amount"
                            },
                            {
                                "type": "uint256",
                                "name": "identifier"
                            }
                        ],
                        "name": "items"
                    },
                    {
                        "type": "tuple[]",
                        "components": [
                            {
                                "type": "address",
                                "name": "target"
                            },
                            {
                                "type": "uint256",
                                "name": "itemIndex"
                            },
                            {
                                "type": "bytes",
                                "name": "extraData"
                            }
                        ],
                        "name": "hooks"
                    },
                    {
                        "type": "uint8",
                        "name": "orderType"
                    },
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
                        "name": "rentalWallet"
                    },
                    {
                        "type": "uint256",
                        "name": "startTimestamp"
                    },
                    {
                        "type": "uint256",
                        "name": "endTimestamp"
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
        "name": "getSeaportMetadata",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "uint256",
                        "name": "id"
                    },
                    {
                        "type": "bytes",
                        "name": "metadata"
                    }
                ],
                "name": "schemas"
            }
        ]
    },
    {
        "type": "function",
        "name": "isActive",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "kernel",
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
        "name": "requestPermissions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "bytes5",
                        "name": "keycode"
                    },
                    {
                        "type": "bytes4",
                        "name": "funcSelector"
                    }
                ],
                "name": "requests"
            }
        ]
    },
    {
        "type": "function",
        "name": "setActiveStatus",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "activate_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
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
        "name": "validateOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "zoneParams",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "orderHash"
                    },
                    {
                        "type": "address",
                        "name": "fulfiller"
                    },
                    {
                        "type": "address",
                        "name": "offerer"
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
                        "type": "bytes",
                        "name": "extraData"
                    },
                    {
                        "type": "bytes32[]",
                        "name": "orderHashes"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "endTime"
                    },
                    {
                        "type": "bytes32",
                        "name": "zoneHash"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes4",
                "name": "validOrderMagicValue"
            }
        ]
    }
]
