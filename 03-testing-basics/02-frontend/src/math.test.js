// import { test } from 'vitest';
import { it, expect } from 'vitest';
import { add } from './math';

it('should summatize all number values in array', () => {
  // arrange
  const numbers = [1, 2, 3];

  // act
  const result = add(numbers);

  // assert
  const expectedResult = numbers.reduce(
    (prevValue, currValue) => prevValue + currValue,
    0
  );

  expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {
  const inputs = [1, 2, 'invalid'];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
  const numbers = ['1', '2', '3'];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, currValue) => +prevValue + +currValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
  const result = add();
});
