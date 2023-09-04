export const ABI_JSON = [
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
                "type": "address",
                "name": "rentalManager",
                "indexed": false
            },
            {
                "type": "address",
                "name": "guard",
                "indexed": false
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "nonce",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "deployedSafes",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "safe"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "nonce"
            }
        ]
    }
]
