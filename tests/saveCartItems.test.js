const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('3.1 Testa se ao executar saveCartItems com um cartItem, o método localStorage.setItem é chamado', () => {
    saveCartItems('testItem');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('3.2 Testa se o método localStorage.setItem é chamado com dois parâmetros', () => {
    saveCartItems('testItem');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'testItem');
  });
});
