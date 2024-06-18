# Nuke Factor 

NukeFactor represents an entities stake in the honeypot. Upon minting, an entity receives a NukeFactor ranging from 1-25%, determined by its inherent entropy. Through engaging gameplay elements like aging and forging, this percentage can be elevated up to a maximum of 50%. As the cornerstone of the TraitForge ecosystem, NukeFactor fuels competition, with players striving to achieve the highest percentage NukeFactor entities.
NukeFactor has two stages. These stages are used to define the initial value of the entities NukeFactor, and the final nuke factor percentage which is the claimable amount from the Nuke Fund.

### Initialnukefactor:

- The initialNukeFactor is computed directly from the entropy of an entity.

{initialNukeFactor} = {entropy}{40}

### Finalnukefactor:

- The finalNukeFactor incorporates the initialNukeFactor and modifies it further by adding a component based on the age of the entity.

- AgeInDays is calculated separately and represents how long the token has been "alive" or active since its creation. The calculation ageInDays * 250 / 10000 effectively scales the age to have a proportionate impact on the NukeFactor (2.5% increase), ensuring that older entity's can have a potentially higher influence or value.

finalNukeFactor = ((adjustedAge * defaultNukeFactorIncrease) / 100000) + initialNukeFactor

## Code and Functions 

### Function calculateNukeFactor

Calculates the nuke factor of an entity, which influences the claimable amount from the nuke fund. The function checks the entity's existence, then uses its entropy and age to compute the "finalNukeFactor". It divides the entities entropy by fourty for an initial value, and adds this to a scaled product of the entity's age in days. This resultant nuke factor determines the portion of the fund an entity owner can claim, integrating both the entity's unique attributes and its age into the calculation.

```
function calculateNukeFactor(uint256 tokenId) public view returns (uint256) {
    require(
      nftContract.ownerOf(tokenId) != address(0),
      'ERC721: operator query for nonexistent token'
    );

    uint256 entropy = nftContract.getTokenEntropy(tokenId);
    uint256 adjustedAge = calculateAge(tokenId);

    uint256 initialNukeFactor = entropy / 40; // calcualte initalNukeFactor based on entropy

    uint256 finalNukeFactor = ((adjustedAge * defaultNukeFactorIncrease) /
      100000) + initialNukeFactor;

    return finalNukeFactor;
  }
```

### Function nuke

The nuke function allows the owner of an entity to claim a portion of the fund based on the entity's finalNukeFactor. First, it verifies that the caller owns the entity and that the entity is eligible to be nuked. The function calculates the entities finalNukeFactor using its entropy and age. The potential claim amount is determined by the finalNukeFactor, capped at 50% of the current fund size. The appropriate claim amount is then transferred to the entity owner, the fund balance is updated, and the entity is burned.

```
function nuke(uint256 tokenId) public whenNotPaused nonReentrant {
    require(
      nftContract.isApprovedOrOwner(msg.sender, tokenId),
      'ERC721: caller is not token owner or approved'
    );
    require(
      nftContract.getApproved(tokenId) == address(this) ||
        nftContract.isApprovedForAll(msg.sender, address(this)),
      'Contract must be approved to transfer the NFT.'
    );
    require(canTokenBeNuked(tokenId), 'Token is not mature yet');

    uint256 finalNukeFactor = calculateNukeFactor(tokenId); // finalNukeFactor has 5 digits
    uint256 potentialClaimAmount = (fund * finalNukeFactor) / MAX_DENOMINATOR; // Calculate the potential claim amount based on the finalNukeFactor
    uint256 maxAllowedClaimAmount = fund / maxAllowedClaimDivisor; // Define a maximum allowed claim amount as 50% of the current fund size

    // Directly assign the value to claimAmount based on the condition, removing the redeclaration
    uint256 claimAmount = finalNukeFactor > nukeFactorMaxParam
      ? maxAllowedClaimAmount
      : potentialClaimAmount;

    fund -= claimAmount; // Deduct the claim amount from the fund

    nftContract.burn(tokenId); // Burn the token
    (bool success, ) = payable(msg.sender).call{ value: claimAmount }('');
    require(success, 'Failed to send Ether');

    emit Nuked(msg.sender, tokenId, claimAmount); // Emit the event with the actual claim amount
    emit FundBalanceUpdated(fund); // Update the fund balance
  }
```
