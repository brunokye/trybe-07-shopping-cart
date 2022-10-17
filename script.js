const getCart = document.querySelector('.cart__items');
const loadingContainer = document.querySelector('.loading-container');
const priceText = document.createElement('span');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const calculatePrice = () => {
  const cartItems = document.querySelectorAll('.cart__item');
  const priceContainer = document.querySelector('.price-container');
  let total = 0;

  cartItems.forEach((element) => {
    total += Number(element.innerHTML.split('$')[1]);
  });

  priceText.className = 'total-price';
  priceText.innerText = `Valor Total: R$ ${Math.round((total + Number.EPSILON) * 100) / 100}`;
  priceContainer.appendChild(priceText);
};

const cartItemClickListener = ({ target }) => {
  target.remove();
  calculatePrice();
};

const cartItemClickClear = () => { 
  getCart.innerText = '';
  priceText.innerText = ''; 
};

const listClear = () => {
  const getButtonClear = document.querySelector('.empty-cart');
  getButtonClear.addEventListener('click', cartItemClickClear);
};

const addLoading = () => {
  const loadingText = document.createElement('span');

  loadingText.className = 'loading';
  loadingText.innerText = 'carregando...';
  loadingContainer.appendChild(loadingText);
};

const removeLoading = () => {
  loadingContainer.innerHTML = '';
};

 const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');

  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);

  return li;
};

const itemId = async ({ target }) => {
  const getId = target.parentNode.firstChild.innerText;

  addLoading();
  await fetchItem(getId).then((element) => getCart.appendChild(createCartItemElement(element)));
  calculatePrice();
  removeLoading();
};

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  const getButtonAdd = document.querySelectorAll('.item__add');
  getButtonAdd.forEach((element) => element.addEventListener('click', itemId));

  return section;
};

const itemList = async () => {
  const getList = await fetchProducts('computador').then(({ results }) => results);
  const getItems = document.querySelector('.items');

  getList.forEach((element) => {
    getItems.appendChild(createProductItemElement(element));
  });
  
  removeLoading();
};

window.onload = () => { 
  addLoading();
  itemList();
  listClear();
};
