# Nuke Fund

The Nuke Fund is a contract that accumulates ETH from new mints and economic activity, it handles economic transactions related to the fund, and receives and distributes Ethereum (ETH) based on interactions with entities.

## Key Features

- Fund Accumulation: The contract collects ETH through a fallback function and allocates portions to different stakeholders based on predefined rules. The main fund grows as transactions such as minting, trading and forging occur, with a portion of incoming funds being distributed off to the DevFund or the DAO, depending on the state of the airdrop and other conditions.

- Entity Nuking: Entity holders can "nuke" their entities, which involves calculating a "nuke factor" based on the entities age and entropy. This factor determines how much of the fund the entity holder can claim. The claim is limited to prevent any single entity from draining too much of the fund.

- Economic Incentive and Entity Burn: The process provides economic incentives to players  by offering them a substantial return on their entity based on the nuke factor. After claiming their share, the entity is burnt, which permanently removes it from circulation.

- Dynamic Fund Management: The contract ensures that claims are balanced against the total fund size, with a maximum cap on claims (50%) to maintain the fund's longevity and effectiveness.

## Predetermined Rules

### Fund Contributions:
- Whenever ETH is sent to the contract (via its fallback function), a portion is automatically allocated to different stakeholders based on the following rules:

- 10% Developer Share: Of the total ETH received, 10% is earmarked for the DevFund.

- Remaining 90%: This portion is added to the main fund (HoneyPot) which is used for the nuking payouts.

### Dev Share Distribution:
- The distribution of the 10% developer share depends on whether the airdrop has started and whether DAO fund contributions are allowed:

- If the airdrop has not started, the developer's share is transferred directly to the developer's address.

- If the airdrop has started but DAO funds are not allowed, the share is sent to the contract owner.

- If the airdrop has started and DAO funds are allowed, the share is sent to the DAO address.

### Entity Nuking:
- Entity holders can claim a part of the fund by "nuking" their entity. The amount claimable depends on the "nuke factor" of the entity, which is calculated based on:

- Entropy of the Entity: A six digit entity attribute that contributes to calculating its nuke factor e.g (687697).

- Age of the Entity: The time since the entity was created, measured in days.

- The nuke factor influences the proportion of the fund that can be claimed by the entity owner.

### Claim Limits:
- The claim from nuking a entity cannot exceed 50% of the current fund balance, ensuring that the fund remains sustainable and no single claim depletes it excessively.

### Entity Burn:
- After a claim is made, the corresponding entity is burnt, which means it is permanently removed from circulation. 

### Eligibility for Nuking:
- An entity must be at least three days old to be eligible for nuking. This rule prevents immediate claims after acquisition and encourages longer-term holding.


## Code and Functions

There are 3 functions involved in the process of nuking an Entity, "calculateAge, calculateNukeFactor, nuke".

## 1. Function calculateAge

The function calculateAge determines the age of an Entity. It first ensures that the token exists by checking its ownership status. Then, it calculates the number of days since the entity's creation by using the current block timestamp and the token's creation timestamp. The age calculation is adjusted by a performance factor derived from the entity's entropy, and this adjusted age is further normalized to years by dividing by 365. The function returns this calculated age as an integer.

``` 
function calculateAge(uint256 tokenId) public view returns (uint256) {
    require(nftContract.ownerOf(tokenId) != address(0), 'Token does not exist');

    uint256 daysOld = (block.timestamp -
      nftContract.getTokenCreationTimestamp(tokenId)) /
      60 /
      60 /
      24;
    uint256 perfomanceFactor = nftContract.getTokenEntropy(tokenId) % 10;

    uint256 age = (daysOld *
      perfomanceFactor *
      MAX_DENOMINATOR *
      ageMultiplier) / 365; // add 5 digits for decimals
    return age;
  }
``` 

## 2. Function calculateNukeFactor

Calculates the nuke factor of an entity, which influences the claimable amount from the nuke fund. This function ensures the tokens existence, then uses its entropy and age to compute the nuke factor. It divides the tokens entropy by four for an initial value, and adds this to a scaled product of the entities age in days. This resultant nuke factor determines the portion of the fund an entity owner can claim, integrating both the entities unique attributes and its age into the calculation.

``` 
function calculateNukeFactor(uint256 tokenId) public view returns (uint256) {
    require(
      nftContract.ownerOf(tokenId) != address(0),
      'ERC721: operator query for nonexistent token'
    );

    uint256 entropy = nftContract.getTokenEntropy(tokenId);
    uint256 adjustedAge = calculateAge(tokenId);

    uint256 initialNukeFactor = entropy / 4; // calcualte initalNukeFactor based on entropy

    uint256 finalNukeFactor = ((adjustedAge * defaultNukeFactorIncrease) /
      10000) + initialNukeFactor;

    return finalNukeFactor;
  }
``` 

## 3. Function receive

The receive function handles incoming ETH transactions by first calculating and setting aside a 10% developer share of the received amount. The remainder is added to the fund's balance. Depending on the status of the airdrop contract, the developer share is either transferred directly to the developer's address, to the contract owner (if DAO funding isn't allowed), or to the DAO address. The function then logs the transaction with the sender and amount details, and updates the overall fund balance. This systematic distribution and logging ensure transparency and proper allocation of funds based on the contract's operational state.

``` 
receive() external payable {
    uint256 devShare = msg.value / 10; // Calculate developer's share (10%)
    uint256 remainingFund = msg.value - devShare; // Calculate remaining funds to add to the fund

    fund += remainingFund; // Update the fund balance

    if (!airdropContract.airdropStarted()) {
      devAddress.transfer(devShare); // Transfer dev's share
      emit DevShareDistributed(devShare);
    } else if (!airdropContract.daoFundAllowed()) {
      payable(owner()).transfer(devShare);
    } else {
      daoAddress.transfer(devShare); // Transfer dev's share
      emit DevShareDistributed(devShare);
    }

    emit FundReceived(msg.sender, msg.value); // Log the received funds
    emit FundBalanceUpdated(fund); // Update the fund balance
  }
``` 
