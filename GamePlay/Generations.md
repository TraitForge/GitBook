# Generations

TraitForge has 10 generations, the inital mint upon game launch is gen1, this will increase as the game is played, to gens 2, 3 ect. Each generation holds a pre-determined array of 10,000 entities. The Mint fee for each generation is the same as Gen 1 (starts at 0.005, incrementing by 0.00025 ETH and ends at 2.5 ETH after 10,000). 
Each generation has a new "TraitForger" character image. This allows players to easily identify entity generations while providing a diverse visual experience to the gameplay. Generation count is increased upon the minting of an entity or the creation of new entities through forging. 


## Code and Functions 

1. Generation Management Variables

These variables track the current generation number, the total circulation of tokens across all generations, and the count of tokens minted in each generation.


``` 
uint256 public currentGeneration = 1;
uint256 public totalGenerationCirculation = 0;
mapping(uint256 => uint256) public generationMintCounts;
```

2. Function _incrementGeneration()

This function increments the generation number and resets the mint count for the new generation, ensuring the token cap per generation is enforced.

``` 
function _incrementGeneration() private {
    require(
        generationMintCounts[currentGeneration] >= MAX_TOKENS_PER_GEN,
        'Generation limit not yet reached'
    );
    currentGeneration++;
    generationMintCounts[currentGeneration] = 0;
    emit GenerationIncremented(currentGeneration);
}
``` 

Other relevant generation advancement code can be found in "forging" and the "_mintInternal" functions. In the  "forging" function when a new entity is forged and created it is added to the circulation of the next generation. 
Function "_mintInternal" has logic to increment the current generation upon a mint and track the entity count through generations.

``` 
 // Update generation and circulation
    currentGeneration++;
    totalGenerationCirculation++;
``` 
``` 
function _mintInternal(address to, uint256 mintPrice) internal {
    if (generationMintCounts[currentGeneration] >= MAX_TOKENS_PER_GEN) {
      _incrementGeneration();
    }
``` 
