# Aging

The ageing mechanic is a vital game mechanic for the TraitForge ecosystem, boosting the PVP aspect of TraitForge. Aging provides a core gameplay mechanic for the influence of the value of TraitForge Entities, creating a broader playstyle for players to engage with. 

## Aging Mechanic of Entities

Every Entity ages by blocktime from their mint date, at a speed proportional to their Performance Factor (determined by entropy). 
The fastest should mature fully after 30 days, with the slowest taking almost 2 years. Full maturity simply means their Nuke Factor is computed to be the maximum of 50%. 
Mature Entities would be extremely lucrative to forge with or nuke, as they would be able to claim 50% of the Nuke Fund.

## Code and Functions 

### 1. Function getTokenCreationTimestamp(uint256 tokenId)

This function retrieves the creation timestamp of an Entity based on its tokenId. It ensures the entity exists by checking if it has an owner. If the token doesn't exist, it reverts with an error. This timestamp is essential for calculating the age of the Entity and other time-dependent attributes.

```
function getTokenCreationTimestamp(
    uint256 tokenId
  ) public view returns (uint256) {
    require(
      ownerOf(tokenId) != address(0),
      'ERC721: query for nonexistent token'
    );
    return tokenCreationTimestamps[tokenId];
  }
```

### 2. Function getTokenAge(uint256 tokenId)

Calculates and returns the age of an NFT in seconds format. This function uses the creation timestamp obtained from getTokenCreationTimestamp and subtracts it from the current block timestamp (block.timestamp). It also checks that the token exists before performing the calculation.

```
 function getTokenAge(uint256 tokenId) public view returns (uint256) {
    require(
      ownerOf(tokenId) != address(0),
      'ERC721: query for nonexistent token'
    );
    return block.timestamp - tokenCreationTimestamps[tokenId];
  }
```

### 3. Function calculateAge

The calculateAge function computes the age of an entity by ensuring it exists. It calculates the number of days since the token's creation and adjusts this based on a performance factor derived from the entities entropy. The age is calculated by converting the adjusted days into years. This function combines the actual elapsed time since the entity's creation with an element influenced by the entity's unique properties, returning the age as an integer value in years.

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
