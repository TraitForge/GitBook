# TRAIT Token Airdrop

TraitForge will receive an airdrop of $TRAIT tokens, which can be initiated at any time. Each instance of direct minting or forging to mint is recorded in the Airdrop Contract, along with the entropy of the minted entity. This process establishes a comprehensive tracking system for the total number of entities minted by each player and their corresponding entropy. In the event that a player 'nukes' an entity, the entropy allocated by that entity is removed. The cumulative entropy accrued by a player determines their final share of the airdrop. It is anticipated that the airdrop will be initiated within the first year of gameplay to facilitate a broader distribution of $TRAIT tokens.

Up until the Airdrop is called, only Devs can withdraw Dev Fund dividends. This will pay for bootstrap dev costs. 
For 30 days after the Airdrop is called, all DAO Fund rewards are accumulated and cannot be withdrawn by Devs. All ETH accumulated, as well as the 10% supply of TRAIT, is then deposited into a Uniswap liquidity pool, and the LP tokens are locked. Anyone can call this function, and as soon as it is called, the tokens are unlocked and available for trading. 

## Airdrop Allocation below:
### $TRAIT supply 1Billion 

```
50% (500Million) Players
15% (150Million) DevFund 
15% (150Million) kol’s/partners
10% (100Million) Airdrop to referrals
10% (100Million) Initial market liquidity
```
## Equations for Airdrop
### Player Total Entropy (PTE):
For each player, sum up the entropy values of all their NFTs. If a player has 5 NFTs, and each NFT has an entropy which is a six-digit number, their PTE would be the sum of these five entropy values.
```
PTEi =Ei1 +Ei2 +Ei3 +Ei4 +Ei5
```
### Total Entropy (TE):
This is the sum of all players’ PTEs.
```
TE=∑i=1n PTE
```
### Player’s Token Allocation:
To find the number of tokens  that a player  receives from the airdrop.
```
Ti =(PTEi TE )×500,000,000
```




