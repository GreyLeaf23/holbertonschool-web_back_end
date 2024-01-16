import { taskFirst, getLast, taskNext } from './0-constants';

describe('0-constants.js', () => {
  it('taskFirst function', () => {
    expect.assertions(1);
    const expectedResult = 'I prefer const when i can.';
    const result = taskFirst();
    expect(result).toBe(expectedResult);
  });

  it('getLast function', () => {
    expect.assertions(1);
    const expectedResult = ' is okay';
    const result = getLast();
    expect(result).toBe(expectedResult);
  });

  it('taskNext function', () => {
    expect.assertions(1);
    const expectedResult = 'But sometimes let is okay';
    const result = taskNext();
    expect(result).toBe(expectedResult);
  });
});
