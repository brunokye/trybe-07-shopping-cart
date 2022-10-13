require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('1.1 Testa se fetchProducts é uma função', () => {
    const actual = typeof fetchProducts;
    const expected = 'function';
    expect(actual).toBe(expected);
  });

  it('1.2 Executa a função fetchProducts e verifica se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('1.3 Verifica se a função fetch foi chamada com o endpoint correto', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('1.4 Compara o retorno de fetchProducts(\'computador\') com computadorSearch', async () => {
    const actual = await fetchProducts('computador');
    const expected = await computadorSearch;
    expect(actual).toEqual(expected);
  });

  it('1.5 Testa mensagem de erro ao chamar fetchProcuts sem argumento', async () => {
    const actual = await fetchProducts();
    expect(actual).toEqual(new Error('You must provide an url'));
  });
});
