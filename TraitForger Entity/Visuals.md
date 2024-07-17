# Visuals 

TraitForge has a unique visual Entity system. It consists of generational progression, colour variation through maturity and an array of parameters providing unique visual distinction between entity's.

### Generational Progression

TraitForge utilises a generational system to diversify the visuals of entities. There are 10 generations, the consensus is the first generation entity starts out as a human (gen 1). Slowly as the generations progress, the entities evolve from a human into a cyborg, ultimately ending up completely mechanical by generation 10.

Slowly these changes will be visual to the players as they acquire higher generation entities. Note that the generation system only changes the visuals of an entity, the game mechanics stay the same.

### Color and Maturity

Color variation is a visual variable responsible for the identification of an entities value. The Entities finalNukeFactor is the variable responsible for the 'maturity/epicness' of the image.

### Physical Variables  

Every entity generation has 4 sets of 10 physical variables.Each digit of the entropy string assigns values as follows: The first digit determines the option index for varOptions1 and is not used for color. The second digit selects the option index for varOptions2 and is also not used for color. The third digit sets the option index for varOptions3 and the color array index for colorOptions3. The fourth digit determines the option index for varOptions4 and the color array index for colorOptions4. The fifth digit specifies the color array index for colorOptions5 and the base color for color2. The sixth digit assigns the color array index for colorOptions6 and the base color for color1.
```
### entropy: 123456
Entropy[1] = varOptions1 && Role
Entropy[2] = varOptions2
Entropy[3] = varOptions3 && colorOptions3
Entropy[4] = varOptions4 && colorOptions4
Entropy[5] = colorOptions5 && color2
Entropy[6] = colorOptions6 && color1
Entropy = initalNukeFactor
Entropy % 10 = performanceFactor
Entropy % 3 ? 0 == Role
```
