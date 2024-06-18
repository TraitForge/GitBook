# Entropy 

The traits per Entity are derived from “Entropy” a 6-digit random number associated with each Entity. The entropy is established at the genesis of the game and cannot be changed. Role is either “Forger” or “Merger”, with a 2:1 bias towards Mergers. Forge Potential dictates how many times an Entity can forge before becoming infertile *till reset* (10% of the population is infertile (0 Forge Potential). Performance Factor dictates how quickly an Entity matures. Initial Nuke Factor dictates the starting Nuke Factor for each Entity. 

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

Entropy is set into uint256 slots, with each slot able to contain a 78 digit number - or 13 concatenated entropies. Thus 770 slots are needed to contain 10,000 entropies. Genesis entropies are seeded using blockhash. Setting all 770 uint256 slots cost 15m gas, and due to contract & block size limits, this cannot be set in contract initialisation. Instead a function writes in entropy in 3 passes after the contract is deployed and remain immutable after this.

There is a certain entropy, “999999” which is referred to as “the Golden God”, since it has perfect parameters and will exceed all other entities if played correctly. The Golden God is scanned for and is kept out of the first 2 passes, but is deliberately set in the final pass (at some random point). The Golden God should be the most valuable entity. A function is built to read entropy for each entity, as well as convert to entity traits at any point in time. The Golden God entropies' position changes every generation. 

## Code and Functions

### Function writeBatchEntropy's

Functions writeEntropyBatch1, writeEntropyBatch2, and writeEntropyBatch3 entropy values are initialized in three stages to manage gas costs. Each stage, handled by the batches populates portions of the entropySlots array with pseudo-random values. Batch 1 initializes the first 256 slots, Batch 2 the next 256, and Batch 3 the remaining slots up to 770. For each index, a pseudo-random value is generated using the formula:

(uint256(keccak256(abi.encodePacked(block.number, i)))mod10 78)

These values are then stored in the entropySlots array, ensuring none are equal to 999999. This method, updating the lastInitializedIndex after each batch, distributes the gas costs over multiple transactions to save on gas fee's.

```
function writeEntropyBatch1() public {
    require(lastInitializedIndex < batchSize1, 'Batch 1 already initialized.');

    uint256 endIndex = lastInitializedIndex + batchSize1; // calculate the end index for the batch
    unchecked {
      for (uint256 i = lastInitializedIndex; i < endIndex; i++) {
        uint256 pseudoRandomValue = uint256(
          keccak256(abi.encodePacked(block.number, i))
        ) % uint256(10) ** 78; // generate a  pseudo-random value using block number and index
        require(pseudoRandomValue != 999999, 'Invalid value, retry.');
        entropySlots[i] = pseudoRandomValue; // store the value in the slots array
      }
    }
    lastInitializedIndex = endIndex;
  }

  // second batch initialization
  function writeEntropyBatch2() public {
    require(
      lastInitializedIndex >= batchSize1 && lastInitializedIndex < batchSize2,
      'Batch 2 not ready or already initialized.'
    );

    uint256 endIndex = lastInitializedIndex + batchSize1;
    unchecked {
      for (uint256 i = lastInitializedIndex; i < endIndex; i++) {
        uint256 pseudoRandomValue = uint256(
          keccak256(abi.encodePacked(block.number, i))
        ) % uint256(10) ** 78;
        require(pseudoRandomValue != 999999, 'Invalid value, retry.');
        entropySlots[i] = pseudoRandomValue;
      }
    }
    lastInitializedIndex = endIndex;
  }

  // allows setting a specific entropy slot with a value
  function writeEntropyBatch3() public {
    require(
      lastInitializedIndex >= batchSize2 && lastInitializedIndex < maxSlotIndex,
      'Batch 3 not ready or already completed.'
    );
    unchecked {
      for (uint256 i = lastInitializedIndex; i < maxSlotIndex; i++) {
        uint256 pseudoRandomValue = uint256(
          keccak256(abi.encodePacked(block.number, i))
        ) % uint256(10) ** 78;
        entropySlots[i] = pseudoRandomValue;
      }
    }
    lastInitializedIndex = maxSlotIndex;
  }
```

### Function "initializeAlphaIndices" and "getEntropy"

The specific entropy value 999999 is placed randomly to add an element of unpredictability. This is achieved through the initializeAlphaIndices function, which determines random selection points for the slot index and number index where 999999 will be placed. The function generates a hash using the block hash of the previous block and the current block's timestamp. This hash value is then used to calculate the slotIndexSelectionPoint and numberIndexSelectionPoint. The slot index is derived as( ( % 258) + 512), ensuring it falls within the higher range of the array, while the number index is simply  % 13. This ensures that each time the function is called, a new and unpredictable position is selected for placing the 999999 entropy value.

```
function getEntropy(
    uint256 slotIndex,
    uint256 numberIndex
  ) private view returns (uint256) {
    require(slotIndex <= maxSlotIndex, 'Slot index out of bounds.');

    if (
      slotIndex == slotIndexSelectionPoint &&
      numberIndex == numberIndexSelectionPoint
    ) {
      return 999999;
    }

    uint256 position = numberIndex * 6; // calculate the position for slicing the entropy value
    require(position <= 72, 'Position calculation error');

    uint256 slotValue = entropySlots[slotIndex]; // slice the required [art of the entropy value
    uint256 entropy = (slotValue / (10 ** (72 - position))) % 1000000; // adjust the entropy value based on the number of digits
    uint256 paddedEntropy = entropy * (10 ** (6 - numberOfDigits(entropy)));

    return paddedEntropy; // return the caculated entropy value
  }
```

```
function initializeAlphaIndices() public onlyOwner {
    uint256 hashValue = uint256(
      keccak256(abi.encodePacked(blockhash(block.number - 1), block.timestamp))
    );

    uint256 slotIndexSelection = (hashValue % 258) + 512;
    uint256 numberIndexSelection = hashValue % 13;

    slotIndexSelectionPoint = slotIndexSelection;
    numberIndexSelectionPoint = numberIndexSelection;
  }
```

### Write Entropy Batches

The functions writeEntropyBatch1, writeEntropyBatch2, and writeEntropyBatch3 are designed to initialize entropy slots in a smart contract in three sequential batches. The writeEntropyBatch1 function starts by ensuring that the last initialized index is less than the batch size before generating pseudo-random values for each slot using the block number and the current index, storing the values unless they equal 999999. The writeEntropyBatch2 function continues this process for the second batch, checking that the last initialized index falls within the appropriate range, and similarly generates and stores pseudo-random values. Finally, the writeEntropyBatch3 function completes the initialization by handling the remaining slots, verifying the index range for the third batch, and populating the slots with pseudo-random values up to the maximum slot index. Each function ensures a smooth progression through the batches without re-initialization or overlap, maintaining unique values in the entropy slots.

```
function writeEntropyBatch1() public {
    require(lastInitializedIndex < batchSize1, 'Batch 1 already initialized.');

    uint256 endIndex = lastInitializedIndex + batchSize1; // calculate the end index for the batch
    unchecked {
      for (uint256 i = lastInitializedIndex; i < endIndex; i++) {
        uint256 pseudoRandomValue = uint256(
          keccak256(abi.encodePacked(block.number, i))
        ) % uint256(10) ** 78; // generate a  pseudo-random value using block number and index
        require(pseudoRandomValue != 999999, 'Invalid value, retry.');
        entropySlots[i] = pseudoRandomValue; // store the value in the slots array
      }
    }
    lastInitializedIndex = endIndex;
  }

  // second batch initialization
  function writeEntropyBatch2() public {
    require(
      lastInitializedIndex >= batchSize1 && lastInitializedIndex < batchSize2,
      'Batch 2 not ready or already initialized.'
    );

    uint256 endIndex = lastInitializedIndex + batchSize1;
    unchecked {
      for (uint256 i = lastInitializedIndex; i < endIndex; i++) {
        uint256 pseudoRandomValue = uint256(
          keccak256(abi.encodePacked(block.number, i))
        ) % uint256(10) ** 78;
        require(pseudoRandomValue != 999999, 'Invalid value, retry.');
        entropySlots[i] = pseudoRandomValue;
      }
    }
    lastInitializedIndex = endIndex;
  }

  // allows setting a specific entropy slot with a value
  function writeEntropyBatch3() public {
    require(
      lastInitializedIndex >= batchSize2 && lastInitializedIndex < maxSlotIndex,
      'Batch 3 not ready or already completed.'
    );
    unchecked {
      for (uint256 i = lastInitializedIndex; i < maxSlotIndex; i++) {
        uint256 pseudoRandomValue = uint256(
          keccak256(abi.encodePacked(block.number, i))
        ) % uint256(10) ** 78;
        entropySlots[i] = pseudoRandomValue;
      }
    }
    lastInitializedIndex = maxSlotIndex;
  }
```

### Function initializeAlphaIndices

The initializeAlphaIndices function sets specific indices within the entropy array for generating special entropy values. Restricted to the contract owner, it generates two indices: slotIndexSelectionPoint and numberIndexSelectionPoint. These indices are computed using a hash derived from the previous block hash and the current block timestamp, ensuring pseudo-randomness. The slotIndexSelectionPointdesignates a specific slot in the array, while the numberIndexSelectionPoint specifies an index within that slot, enabling the contract to produce unique entropy values for other contracts.

```
function initializeAlphaIndices() public onlyOwner {
    uint256 hashValue = uint256(
      keccak256(abi.encodePacked(blockhash(block.number - 1), block.timestamp))
    );

    uint256 slotIndexSelection = (hashValue % 258) + 512;
    uint256 numberIndexSelection = hashValue % 13;

    slotIndexSelectionPoint = slotIndexSelection;
    numberIndexSelectionPoint = numberIndexSelection;
  }
```

### Function getEntropy

The getEntropy function calculates an entropy value based on a given slot and number index. It first verifies that the provided slot index is within bounds. If the slot and number indices match the predefined selection points, a special value of 999999 is returned. Otherwise, it computes the position for slicing the entropy value from the selected slot in the entropySlots array. The entropy value is then derived by extracting and adjusting a portion of the slot value, ensuring it fits within a specific digit range. This function returns the adjusted entropy value, which is used for generating pseudo-random values in the contract.

```
function getEntropy(
    uint256 slotIndex,
    uint256 numberIndex
  ) private view returns (uint256) {
    require(slotIndex <= maxSlotIndex, 'Slot index out of bounds.');

    if (
      slotIndex == slotIndexSelectionPoint &&
      numberIndex == numberIndexSelectionPoint
    ) {
      return 999999;
    }

    uint256 position = numberIndex * 6; // calculate the position for slicing the entropy value
    require(position <= 72, 'Position calculation error');

    uint256 slotValue = entropySlots[slotIndex]; // slice the required [art of the entropy value
    uint256 entropy = (slotValue / (10 ** (72 - position))) % 1000000; // adjust the entropy value based on the number of digits
    uint256 paddedEntropy = entropy * (10 ** (6 - numberOfDigits(entropy)));

    return paddedEntropy; // return the caculated entropy value
  }
```
