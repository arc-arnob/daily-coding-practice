const actualInput = [
  {
    name: "abc",
  },
  {
    name: "abc",
  },
  {
    name: "abc",
  },
  {
    name: "bce",
  },
  {
    name: "bced",
  },
  {
    name: "abc",
  },
  {
    name: "abc",
  },
  {
    name: "bced",
  },
  {
    name: "bced",
  },
]
const countUniques = (actualInput) => {
  let previousValue = actualInput[0];
  const output = actualInput.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue.name] && previousValue.name === currentValue.name) {
      accumulator[currentValue.name].count += 1;
    } else {
      if (Object.keys(accumulator).includes(currentValue.name)) {
        accumulator[currentValue.name + '_rep_rm'] = { name: currentValue.name, count: 1 }
        accumulator[currentValue.name + '_rep_rm'].count = 1;
      }
      else {
        accumulator[currentValue.name] = { name: currentValue.name, count: 1 }
      }
    }
    previousValue = currentValue;
    return accumulator;
  }, []);
  const finalOutput = [];
  for (ele in output) {
    finalOutput.push(output[ele]);
  }
  console.log(finalOutput);
}
countUniques(actualInput);

// Expected Output: 
/**
 * [
 *  {
 *  name: abc,
 *  count: 3 
 * }
 * ]
 */