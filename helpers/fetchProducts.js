const fetchProducts = async (QUERY) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
    const promiseFetch = await fetch(url);
    const results = await promiseFetch.json();

    return results;
  } catch (error) {
    return (new Error('You must provide an url'));
  } 
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
