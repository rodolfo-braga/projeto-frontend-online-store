const addCartItemOnClick = (product) => {
  if (!JSON.parse(localStorage.getItem('savedCartItems'))) {
    localStorage.setItem('savedCartItems', JSON.stringify([]));
  }

  const getCartItems = JSON.parse((localStorage.getItem('savedCartItems')));

  localStorage.setItem('savedCartItems', JSON.stringify([...getCartItems, product]));
};

export default addCartItemOnClick;
