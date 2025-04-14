import { ProgramsByLevel } from '../types/programs';
import { Levels } from '../types/elements'
import { useFormContext } from 'react-hook-form';

function getMaxSpins(spinValues) {
  let maxSum = -Infinity;
  let bestPair = [];

  const keys = Object.keys(spinValues);
  
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      const key1 = keys[i];
      const key2 = keys[j];
      const sum = spinValues[key1] + spinValues[key2];

      if (sum > maxSum) {
        maxSum = sum;
        bestPair = [key1, key2];
      }
    }
  }

  return {
    pair: bestPair,
    sum: maxSum
  };
}

function optimizeJumps(jumps) {
  const keys = Object.keys(jumps);
  let bestCombo = null;
  let bestValue = -Infinity;

  // Generate combinations with replacement (up to 2 uses of each key)
  function combinationsWithReplacement(arr, k) {
    if (k === 0) return [[]];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let smaller = combinationsWithReplacement(arr.slice(i), k - 1);
      for (let s of smaller) {
        result.push([arr[i], ...s]);
      }
    }
    return result;
  }

  // Generate permutations of an array
  function* permutations(arr, n = arr.length) {
    if (n <= 1) yield arr.slice();
    else {
      for (let i = 0; i < n; i++) {
        yield* permutations(arr, n - 1);
        const j = n % 2 ? 0 : i;
        [arr[n - 1], arr[j]] = [arr[j], arr[n - 1]];
      }
    }
  }

  const combos = combinationsWithReplacement(keys, 7);

  for (const combo of combos) {
    const count = {};
    let valid = true;
    for (let key of combo) {
      count[key] = (count[key] || 0) + 1;
      if (count[key] > 2) {
        valid = false;
        break;
      }
    }
    if (!valid) continue;

    const seen = new Set();
    for (const perm of permutations(combo)) {
      const permKey = perm.join(',');
      if (seen.has(permKey)) continue;
      seen.add(permKey);

      const triple = perm.slice(0, 3);
      const double = perm.slice(3, 5);
      const singles = perm.slice(5, 7);

      // Check 1Eu constraint
      if (triple.includes('1Eu') && triple[1] !== '1Eu') continue;

      const total = [...triple, ...double, ...singles]
        .reduce((sum, k) => sum + jumps[k], 0);

      if (total > bestValue) {
        bestValue = total;
        bestCombo = {
          triple,
          double,
          singles
        };
      }
    }
  }

  return { bestCombo, bestValue };
}

export default function Results() {
  const methods = useFormContext()
  const { getValues } = methods
  const formValues = getValues()

  const level = formValues.level
  const availableMoves = Levels[level]
  const program = ProgramsByLevel[level]
  
  const pointValueMap = {
    spins: {},
    jumps: {},
    other: {}
  }

  Object.keys(availableMoves.spins).map(key => {
    const spin = availableMoves.spins[key]
    pointValueMap.spins[spin.id] = spin.value[program.spins] * formValues[spin.id]/1000
  })
  Object.keys(availableMoves.jumps).map(key => {
    const jump = availableMoves.jumps[key]
    pointValueMap.jumps[jump.id] = jump.value[program.jumps] * formValues[jump.id]/1000
  })
  Object.keys(availableMoves.other).map(key => {
    const other = availableMoves.other[key]
    pointValueMap.other[other.id] = other.value[program.other] * formValues[other.id]/1000
  })

  console.log(pointValueMap)

  const bestSpins = getMaxSpins(pointValueMap.spins)
  console.log(bestSpins)
  const bestJumps = optimizeJumps(pointValueMap.jumps)
  console.log(bestJumps)

  return (
    <div className="flex">
      
    </div>
  );
}