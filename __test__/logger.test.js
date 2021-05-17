'use strict';

const logger = require('../src/middleware/logger');

describe('logger middleware', () => {
  let consoleSpy;
  const req = {
    method: 'get',
    path: 'test',
  };
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log all requests ', () => {
    logger(req, res, next);

    expect(consoleSpy).toHaveBeenCalledWith(req.method, req.path);
    expect(next).toHaveBeenCalledWith();
  });
});
