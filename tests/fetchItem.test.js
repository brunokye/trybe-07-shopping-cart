require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('2.1 Testa se fetchItem é uma função', () => {
    const actual = typeof fetchItem;
    const expected = 'function';
    expect(actual).toBe(expected);
  });

  it('2.2 Executa a função fetchItem e verifica se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('2.3 Verifica se a função fetch foi chamada com o endpoint correto', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('2.4 Compara o retorno de fetchItem(\'MLB1615760527\') com item', async () => {
    const actual = await fetchItem('MLB1615760527');
    const expected = item;
    expect(actual).toEqual(expected);
  });

  it('2.5 Testa mensagem de erro ao chamar fetchItem sem argumento', async () => {
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
