'use strict';

const validator = require('../src/middleware/validator');

describe('validator middleware', () => {
  let req = {
    method: 'get',
    query: {
      name: 'wesam',
    },
  };
  const res = {};
  const next = jest.fn();

  it('should call next middleware', () => {
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });

  it('should throw an error', () => {
    req = {
      method: 'get',
      query: {},
    };

    expect(() => validator(req, res, next)).toThrow('No name was specified');
  });
});
