// import { test } from 'vitest';
import { it, expect } from 'vitest';
import { add } from './math';

it('should summatize all number values in array', () => {
  // arrange
  const numbers = [1, 2, 3];

  // act
  const result = add([1, 2, 3]);

  // assert
  const expectedResult = numbers.reduce(
    (prevValue, currValue) => prevValue + currValue,
    0
  );

  expect(result).toBe(expectedResult);
});
