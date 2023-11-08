export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "kernel_"
            },
            {
                "type": "address",
                "name": "stopPolicy_"
            },
            {
                "type": "address",
                "name": "guardPolicy_"
            },
            {
                "type": "address",
                "name": "fallbackHandler_"
            },
            {
                "type": "address",
                "name": "safeProxyFactory_"
            },
            {
                "type": "address",
                "name": "safeSingleton_"
            }
        ]
    },
    {
        "type": "error",
        "name": "FactoryPolicy_InvalidSafeThreshold",
        "inputs": [
            {
                "type": "uint256",
                "name": "threshold"
            },
            {
                "type": "uint256",
                "name": "owners"
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
        "type": "event",
        "anonymous": false,
        "name": "RentalSafeDeployment",
        "inputs": [
            {
                "type": "address",
                "name": "safe",
                "indexed": false
            },
            {
                "type": "address[]",
                "name": "owners"
            },
            {
                "type": "uint256",
                "name": "threshold",
                "indexed": false
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
        "name": "deployRentalSafe",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "owners"
            },
            {
                "type": "uint256",
                "name": "threshold"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "safe"
            }
        ]
    },
    {
        "type": "function",
        "name": "fallbackHandler",
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
        "name": "guardPolicy",
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
        "name": "initializeRentalSafe",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_stopPolicy"
            },
            {
                "type": "address",
                "name": "_guardPolicy"
            }
        ],
        "outputs": []
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
        "name": "safeProxyFactory",
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
        "name": "safeSingleton",
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
        "name": "stopPolicy",
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
