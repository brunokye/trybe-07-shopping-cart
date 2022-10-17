// const fetchProducts = async (query) => {
//   try {
//     const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     const { results } = data;

//     return results;
//   } catch (error) {
//     return (new Error('You must provide an url'));
//   } 
// };

const fetchProducts = async (query) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
