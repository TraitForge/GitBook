# Role

The roles of forger and merger are key to the evolving ecosytem of TraitForge. The two roles provide the game with the unique ability for entities to forge with each-other to create offspring entities. These offspring entities carry the averaged traits of it's parents.

Entities generated in the initial mint are split by modulus of 3, creating a population 1/3 forgers and 2/3 mergers. Forgers can list themselves for a fee and Mergers pay the fee in order to mint the next generation Entity. Next generation Entities can be sold, forged again or nuked.
```
### entropy: 123456
Entropy[1] = physicalTrait1 && Role
Entropy[2] = physicalTrait2
Entropy[3] = physicalTrait3
Entropy[4] = physicalTrait4
Entropy[5] = colour1
Entropy[6] = colour2 && ForgePotential
Entropy = initalNukeFactor / 4
Entropy % 10 = performanceFactor
Entropy % 3 ? 0 == isForger
```
## Functions and code

### Function deriveTokenParameters

The role is determined by taking the modulus of the entropy with 3, resulting in a value of 0, 1, or 2. The boolean isForger is set to true if role equals 0, indicating that there is a one-third chance for isForger to be true. This logic directly influences whether the entity is considered a "forger" based on the derived role value.

### Function listForForging

To determine if the token is a forger based on entropy.

```
bool isForger = (entropy % 3) == 0; 
    require(isForger, 'Only forgers can list for forging');
```
