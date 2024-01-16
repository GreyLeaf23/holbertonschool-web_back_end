import { taskFirst, getLast, taskNext } from './0-constants';

describe('eS6_basic/0-constants.js', () => {
  describe('taskFirst()', () => {
    it("should return 'I prefer const when I can.'", () => {
      expect(taskFirst()).toBe('I prefer const when I can.');
    });
  });

  describe('getLast()', () => {
    it("should return ' is okay'", () => {
      expect(getLast()).toBe(" is okay");
    });
  });

  describe('taskNext()', () => {
    it("should return 'But sometimes let is okay'", () => {
      expect(taskNext()).toBe("But sometimes let is okay");
    });
  });
});
