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
        "type": "error",
        "name": "ReclaimerPackage_OnlyDelegateCallAllowed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ReclaimerPackage_OnlyRentalSafeAllowed",
        "inputs": [
            {
                "type": "address",
                "name": "reclaimer"
            }
        ]
    },
    {
        "type": "error",
        "name": "Shared_DisabledHook",
        "inputs": [
            {
                "type": "address",
                "name": "hook"
            }
        ]
    },
    {
        "type": "error",
        "name": "Shared_NonRentalHookItem",
        "inputs": [
            {
                "type": "uint256",
                "name": "itemIndex"
            }
        ]
    },
    {
        "type": "error",
        "name": "Shared_OrderTypeNotSupported",
        "inputs": [
            {
                "type": "uint8",
                "name": "orderType"
            }
        ]
    },
    {
        "type": "error",
        "name": "StopPolicy_CannotStopOrder",
        "inputs": [
            {
                "type": "uint256",
                "name": "timestamp"
            },
            {
                "type": "address",
                "name": "stopper"
            }
        ]
    },
    {
        "type": "error",
        "name": "StopPolicy_ReclaimFailed",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RentalOrderStopped",
        "inputs": [
            {
                "type": "bytes32",
                "name": "seaportOrderHash",
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
        "name": "reclaimRentalOrder",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "rentalOrder",
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
        "outputs": []
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
        "name": "setFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "feeNumerator"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "skim",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "stopRent",
        "constant": false,
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
        "outputs": []
    },
    {
        "type": "function",
        "name": "stopRentBatch",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
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
                ],
                "name": "orders"
            }
        ],
        "outputs": []
    }
]
