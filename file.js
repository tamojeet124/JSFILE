function findCombinations(array, target) {
  const combinations = [];
  const seen = new Map();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];

    if (seen.has(complement)) {
      const complementIndices = seen.get(complement);
      complementIndices.forEach(index => {
        combinations.push([array[i], array[index]]);
      });
    }

    if (!seen.has(array[i])) {
      seen.set(array[i], []);
    }
    seen.get(array[i]).push(i);
  }

  return combinations;
}

function mergeAndSort(array) {
  return array.sort((a, b) => a - b);
}

function findDoubleCombinations(array, doubleTarget) {
  const combinations = [];
  const seen = new Map();

  for (let i = 0; i < array.length; i++) {
    const complement = doubleTarget - array[i];

    if (seen.has(complement)) {
      const complementIndices = seen.get(complement);
      complementIndices.forEach(index => {
        combinations.push([...array[i], ...array[index]]);
      });
    }

    if (!seen.has(array[i])) {
      seen.set(array[i], []);
    }
    seen.get(array[i]).push(i);
  }

  return combinations;
}

const input = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;
const doubleTarget = target * 2;

const combinations1 = findCombinations(input, target);
const mergedArray = mergeAndSort([].concat(...combinations1));
const combinations2 = findDoubleCombinations(mergedArray, doubleTarget);

console.log('First Combination For', target + ':', combinations1);
console.log('Merge Into a single Array:', mergedArray);
console.log('Second Combination For', doubleTarget + ':', combinations2);
