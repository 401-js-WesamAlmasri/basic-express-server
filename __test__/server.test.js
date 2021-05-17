'use strict';

const supertest = require('supertest');
const server = require('../src/server');

const request = supertest(server.app);

describe('server', () => {
  it('should get 404 status error on a bad route', async () => {
    const notFoundResponse = {
      status: 404,
      message: 'Page Not Found',
    };

    const response = await request.get('/foo');

    expect(response.status).toBe(404);
    expect(response.body).toEqual(notFoundResponse);
  });

  it('should get 404 status error on a bad method', async () => {
    const notFoundResponse = {
      status: 404,
      message: 'Page Not Found',
    };

    const postResponse = await request.post('/person');
    const putResponse = await request.put('/person');
    const patchResponse = await request.patch('/person');
    const deleteResponse = await request.delete('/person');

    expect(postResponse.status).toBe(404);
    expect(postResponse.body).toEqual(notFoundResponse);

    expect(putResponse.status).toBe(404);
    expect(putResponse.body).toEqual(notFoundResponse);

    expect(patchResponse.status).toBe(404);
    expect(patchResponse.body).toEqual(notFoundResponse);

    expect(deleteResponse.status).toBe(404);
    expect(deleteResponse.body).toEqual(notFoundResponse);
  });

  it('should get 500 status error if no name in the query string', async () => {
    const errorResponse = {
      status: 500,
      message: 'No name was specified',
    };

    const response = await request.get('/person');

    expect(response.status).toBe(500);
    expect(response.body).toEqual(errorResponse);
  });

  it('should get 200 status code and correct output object if the name is in the query string', async () => {
    const successResponse = {
      name: 'wesam',
    };

    const response = await request.get('/person?name=wesam');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(successResponse);
  });
});
