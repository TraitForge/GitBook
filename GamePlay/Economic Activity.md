# Economic Activity

## Introduction 
TraitForges economic system is complex and functions heavily on player activity and community engagement. To enhance the PVP experience, 100% of all mint fees go into the Nuke Fund. 10% of every transaction e.g. (Forge Fees/Sales and mint fees) are then distributed from the Nuke Fund into the Dev fund or Dao Fund, depending on if the airdrop has started. Users can choose to pay the list fees of the Forgers to mint Gen 2+ entity's, or mint directly, and pay the Nuke Fund. In this way, Forgers capture 90% of the “mint potential” of their offspring, and will be incentivised to forge instead of Nuke. This means each Entity retains value all the time, since their on-market value is a reflection of their monetary potential. 

As gameplay increases and the Nuke Fund rises, Entities should accumulate constant value until they die or are nuked. The value of a Merger, whilst they have to pay-to-play, is a reflection of their potential offspring as well, since they acquire the Gen 2+ entity, not the Forger. Furthermore entities can be listed on a marketplace to be sold for a custom set ETH fee by the owner. 

## Contract Breakdown

Economic activity can be broken down across these contracts: EntityForging, EntityTrading, NukeFund, Airdrop, DevFund and TraitForgeNft.

## Token Creation and Sales (TraitForgeNft Contract)

- Minting Entities: Users can mint tokens at a price that increases with each mint within the current generation. This creates an economic incentive to mint earlier in each generation cycle.

- Revenue Distribution: Minting fees are collected and part of these fees may be distributed to the NukeFund based on certain conditions, facilitating a transfer of funds into a broader economic pool managed by the NukeFund.

## Forging (EntityForging Contract)

- Listing for Forging: Owners of entities can list their entities for forging if they meet certain entropy-derived conditions. Listing involves setting a fee that merger owners must pay to forge with the listed entity.

- Forging Transactions: When a breeding transaction occurs, the forging fee is divided between the NukeFund (10% as a development fee) and the entity owner (90%).

## EntityTrading

- Entity Listing and Sale: Allows entity owners to list tokens for sale, ensuring ownership and contract approval, and transfers entities to the contract upon listing.

- Buying Entities: Facilitates purchasing listed entities by verifying the payment amount, transferring a portion to the NukeFund, and delivering the entity to the buyer.

- NukeFund Contributions: Automatically directs 10% of each sale to the NukeFund, with the ability for the contract owner to set the NukeFund address.

## Fund Management (NukeFund Contract)

- Fund Accumulation: The fund accumulates ETH through various channels, including direct payments and portions of fees from forging and trading.

- Developer and DAO Payments: A portion of the funds received (e.g., 10% of incoming payments) is distributed to either the developers addresses or a DAO, depending on certain conditions such as whether an airdrop has started.

- Nuking Entities: Entity owners can "nuke" their entities, a process where an entity is burned in exchange for a payout from the fund, based on the tokens age and its entropy-derived "nuke factor". This mechanism provides a sink for tokens and an incentive for users to hold entities longer.

## Airdrops and Additional Mechanics (Airdrop contract)

- Airdrop Initiatives: Linked airdrop contracts can influence the behavior of other operations, such as whether additional amounts are added or subtracted during certain actions (e.g., during entity burns in the minting process).

- Incentives and User Engagement: By introducing mechanics like airdrops and nuking, the system encourages continued user engagement and investment in the ecosystem, driving both speculative and participatory economic activity.

## DevFund Contract
Reward Accumulation and Distribution:

- The contract collects funds through its receive function and automatically calculates rewards to distribute among registered developers.

- The reward per developer is calculated based on the total incoming funds divided by the number of registered developers (totalDevCount). This means that as more funds are received, the rewards are evenly distributed among all registered developers.
