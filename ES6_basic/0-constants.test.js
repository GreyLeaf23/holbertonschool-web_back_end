/* eslint-disable */
import { taskFirst, getLast, taskNext } from './0-constants';

describe('ES6_basic/0-constants', () => {
    it('should return a constant', () => {
        expect(taskFirst()).toEqual('I prefer const when i can.');
    });

    it('should return a constant', () => {
        expect(getLast()).toEqual(' is okay');
    });

    it('should return a constant', () => {
        expect(taskNext()).toEqual('But sometimes let is okay');
    });
    });
