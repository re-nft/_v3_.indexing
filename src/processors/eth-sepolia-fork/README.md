# README

To properly index anvil forked chain you need to perform a two-step processor initialization.

## Archive Processor

First, you engage archive indexer to quickly index everything in the range `startBlock` to `toBlock`. This is important. If you do not use archive processor you would have to wait a consideratble amount of time polling `anvil` (think 30 minutes and more). So this step is essential to simply speed up indexing. **Note, that if you fork at a recent block number, it may not be available in archive yet**. Squid team mentioned they updated archive daily. At worst, you might need to wait a day if you want to fork a recent block number.

Your archive processor is initialized with: `sqd process:eth-sepolia-fork:archive`.

## Chain Processor

Once you have indexed historical transacations in the above step, your state is consistent and you are ready to start indexing from `anvil`.

Your chain processor is initialized with: `sqd process:eth-sepolia-fork:chain`.

## Indexing Forked Chain

We have combined the above two steps into one command for convenience:

`sqd process:eth-sepolia-fork`

## Potential Gotchas

In the future, this may or may not cause an issue: https://github.com/re-nft/v3-indexing/pull/6#discussion_r1356654395.
