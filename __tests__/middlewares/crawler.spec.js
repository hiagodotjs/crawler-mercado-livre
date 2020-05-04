const {
  describe,
  expect,
  test,
} = require('@jest/globals');

const { onSearchProducts } = require('../../src/middlewares/crawler');

describe('onSearchProducts', () => {
  const resMock = {
    status: () => ({
      send: () => ({}),
    }),
    send: () => ({
      status: () => ({}),
    }),
  };

  const nextMock = jest.fn();

  test('Ao receber uma busca inválida, next não deverá ser chamado', () => {
    const reqMock = {
      body: {
        search: null,
        limit: 10,
      },
    };

    onSearchProducts(reqMock, resMock, nextMock);
    expect(nextMock).not.toHaveBeenCalled();
  });

  test('Ao receber um limite inválida, next não deverá ser chamado', () => {
    const reqMock = {
      body: {
        search: 'copo',
        limit: 0,
      },
    };

    onSearchProducts(reqMock, resMock, nextMock);
    expect(nextMock).not.toHaveBeenCalled();
  });

  test('Ao receber busca e limite válidos, next deverá ser chamado', () => {
    const reqMock = {
      body: {
        search: 'copo',
        limit: 10,
      },
    };

    onSearchProducts(reqMock, resMock, nextMock);
    expect(nextMock).toHaveBeenCalled();
  });
});
