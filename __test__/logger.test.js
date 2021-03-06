const { describe, beforeEach } = require('@jest/globals');
const logger = require('../src/middleware/logger');


describe('logger middleware', () => {
    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
    afterEach(() => {
        consoleSpy.mockRestore();

    });
    it('should move to the next middleware', () => {
        logger(req, res, next);
        expect(next).toHaveBeenCalledWith();
    });
})