# Visuals 

TraitForge has a unqiue visual Entity system. It consists of generational progression, colour variation through maturity and an array of parameters providing unique visual distinction between entity's.

### Generational Progression

TraitForge utilises a generational system to diversify the visuals of entities. There are 10 generations, the consensus is the first generation entity starts out as a human (gen 1). Slowly as the generations progress, the entities evolve from a human into a cyborg, ultimately ending up completely mechanical by generation 10.

Slowly these changes will be visual to the players as they acquire higher generation entities. Note that the generation system only changes the visuals of an entity, the game mechanics stay the same.

### Color and Maturity

Color variation is a visual variable responsible for the identification of an entities value. The Entities finalNukeFactor is the variable responsible for the 'maturity/epicness' of the image.

### Physical Variables  

Every entity generation has 4 sets of 10 physical varbiables. These variables are dervied from an entity's entropy digits [1-2-3-4-5]. These physical traits include hairstyles, clothing, specticals like glasses, tattoos and earings. Collectively these variables provide the unique design to each entity, not a single entity will be the same by design. 
```
### entropy: 123456
Entropy[1] = physicalTrait1 && Role
Entropy[2] = physicalTrait2
Entropy[3] = physicalTrait3
Entropy[4] = physicalTrait4
Entropy[5] = colour1 && ForgePotential
Entropy[6] = colour2 
Entropy = initalNukeFactor
Entropy % 10 = performanceFactor
Entropy % 3 ? 0 == Role
```
