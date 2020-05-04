const {
  describe,
  expect,
  test,
} = require('@jest/globals');

const { errorThrower, sendError } = require('../../src/utils/errorHandler');

describe('errorThrower', () => {
  test('Deverá explodir um erro com a mensagem e status passados', () => {
    const expectedMessage = 'Não autorizado';
    const expectedStatus = 401;
    try {
      errorThrower(expectedMessage, expectedStatus);
    } catch (error) {
      expect(error.message).toBe(expectedMessage);
      expect(error.status).toBe(expectedStatus);
    }
  });
});

describe('sendError', () => {
  const resMock = {
    status: jest.fn(),
  };

  const send = jest.fn();

  resMock.status.mockReturnValue({
    send,
  });

  const errorMock = {
    message: 'Não autorizado',
    status: 401,
  };

  test('Deverá responder a requisição com o objeto de erro passado', () => {
    sendError(errorMock, resMock);
    expect(resMock.status).toHaveBeenLastCalledWith(errorMock.status);
    expect(send).toHaveBeenLastCalledWith({
      error: errorMock.message,
    });
  });
});
