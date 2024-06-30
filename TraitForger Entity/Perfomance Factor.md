# Performance Factor

The "performance factor" is a numerical value that adjusts how the "age" of an entity is calculated. This factor is used to modify the standard calculation of time elapsed since the entities creation to reflect additional characteristics or behaviors encoded into the entity itself.

PerformanceFactor is derived from the entropy of the token modulo 10. This means the performance factor can vary between 0 to 9.
This factor modulates the daysOld count, effectively altering the perceived age of the token. If the performance factor is higher, the token ages faster in terms of the age calculation.

### Example of entropy use:

### entropy: 123456
```
Entropy[1] = physicalTrait1 && Role
Entropy[2] = physicalTrait2
Entropy[3] = physicalTrait3
Entropy[4] = physicalTrait4
Entropy[5] = colour1
Entropy[6] = colour2 && ForgePotential
Entropy = initalNukeFactor / 4
Entropy % 10 = performanceFactor
Entropy % 3 ? 0 == Role
```
## Affect on Gameplay

Performance factor adds massive gameplay enchancements to TraitForge. It introduces uniqueness to entities, and acts as contributing factor to the value of entity.

Performance factor allows for competitive scenarios involving PVP. Players lucky enough to mint a high performance factor entity will have faster access higher claim to the NukeFund. Where as lower performance factor holders will be forced to either take lower claims of the NukeFund, or play the long game. 

## Code and Functions

### 1. Function calculateAge

Function calculateAge determines the age of an entity by calculating the days since its creation and adjusting this number with a performance factor derived from the entities entropy. It ensures the entity exists, computes the days old, scales this by the entropy-based performance factor, and converts the result from days to years. The age is then returned as an integer.

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
