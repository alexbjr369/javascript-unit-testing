export function transformToNumber(value) {
  // return NaN; woul break the tests
  return +value;
}

export function cleanNumbers(numberValues) {
  const number = [];

  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers;
}
