# Forge Potential 

Forge Potential is an entities ability to forge and create new entities with players. The [5] digit in an entity's entropy is it's ability to forge based off of entropy. Each entity may have the ability to forge 0-9 times depending on its Forge Potential.

### Can you gain merge Potential?

An Entities Forge Potential is determined by the [5] digit in entropy, when forging, this number is tracked by a mapping tallying of current merges specific to tokenIds with their entropy.
Once an Entity has used all of its ForgePotential for the year it will return an error "ForgePotential limit reached, forge failed" for example. This is effectively rendering the Entity infertile for a period of time. 
To regain the lost ForgePotential a player must simply wait 1 year. The game has intergrated a timestamp from mint that will reset the mapping count back to the [5] digit entropy number once 1 year has been passed in blocks. The function resposible for this is "_resetBreedingCountIfNeeded".

### entropy: 123456
```
Entropy[1] = physicalTrait1 && Role
Entropy[2] = physicalTrait2
Entropy[3] = physicalTrait3
Entropy[4] = physicalTrait4
Entropy[5] = colour1 && ForgePotential
Entropy[6] = colour2 
Entropy = initalNukeFactor / 4
Entropy % 10 = performanceFactor
Entropy % 3 ? 0 == Role
```
### How does mergePotential affect gameplay? 

Having a capped limit on forge potential allows for strategic gameplay. Encouraging players to forge their entities within a 1 year period to fully utilise them. Allowing a reset of forge potential increases economic market flow and incentivises long term gameplay.

## Code and Functions

### 1. Function _resetForgingCountIfNeeded (entityForging Contract)

Function _resetForgingCountIfNeeded checks if a year has passed since the last forging count reset for an Entity and, if so, recalculates the count based on the Entities entropy. The new count, termed forge potential, is derived by scaling the entropy and using its modulus. The breeding count is then updated to this value, and the reset timestamp is set to the current time, ensuring the breeding settings reflect the Entity's unique characteristics annually.

```
  function _resetForgingCountIfNeeded(uint256 tokenId) private {
    uint256 oneYear = oneYearInDays;
    if (lastForgeResetTimestamp[tokenId] == 0) {
      lastForgeResetTimestamp[tokenId] = block.timestamp;
    } else if (block.timestamp >= lastForgeResetTimestamp[tokenId] + oneYear) {
      forgingCounts[tokenId] = 0; // Reset to the forge potential
      lastForgeResetTimestamp[tokenId] = block.timestamp;
    }
  }
```

### 2. Function listForForging (entityForging Contract)

Function checks if an Entity qualifies as a "forger" based on its entropy. It uses the condition entropy modulo 3 must be zero for the Entity to be listed for forging. If the Entity does not meet this check, the operation is blocked with an error message "(isForger, 'Only forgers can list for breeding');".

```
   function listForForging(
    uint256 tokenId,
    uint256 fee
  ) public whenNotPaused nonReentrant {
    require(!listings[tokenId].isListed, 'Token is already listed for forging');
    require(
      nftContract.ownerOf(tokenId) == msg.sender,
      'Caller must own the token'
    );
    require(
      fee >= minimumListFee,
      'Fee should be higher than minimum listing fee'
    );

    _resetForgingCountIfNeeded(tokenId);

    uint256 entropy = nftContract.getTokenEntropy(tokenId); // Retrieve entropy for tokenId
    uint8 forgePotential = uint8((entropy / 10) % 10); // Extract the 5th digit from the entropy
    require(
      forgePotential > 0 && forgingCounts[tokenId] <= forgePotential,
      'Entity has reached its forging limit'
    );

    bool isForger = (entropy % 3) == 0; // Determine if the token is a forger based on entropy
    require(isForger, 'Only forgers can list for forging');

    listings[tokenId] = Listing(msg.sender, tokenId, true, fee);
    listedTokenIds[listingCount] = tokenId;
    listingCount++;

    emit ListedForForging(tokenId, fee);
  }
```

