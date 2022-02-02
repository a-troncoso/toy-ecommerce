export const genUpdatedCart = (operation, { cart, product }) => {
  let updatedCart;

  if (operation === "add") updatedCart = addProductToCart({ cart, product });
  else if (operation === "remove")
    updatedCart = removeProductToCart({ cart, product });

  return updatedCart;
};

const addProductToCart = ({ cart, product }) => {
  const alreadyAddedToCart = cart.find((p) => p.tail === product.tail);
  if (alreadyAddedToCart)
    return cart.map((p) => {
      if (p.tail === product.tail) return { ...p, quantity: p.quantity + 1 };
      return p;
    });
  else return [...cart, { ...product, quantity: 1 }];
};

const removeProductToCart = ({ cart, product }) => {
  const alreadyAddedToCart = cart.find((p) => p.tail === product.tail);
  if (alreadyAddedToCart) {
    if (alreadyAddedToCart.quantity > 1)
      return cart.map((p) => {
        if (p.tail === product.tail) return { ...p, quantity: p.quantity - 1 };
        return p;
      });
    else return cart.filter((p) => p.tail !== product.tail);
  } else return cart;
};

export const calculateSubtotalAmount = (products) =>
  products.reduce((acc, p) => acc + p.price * p.quantity, 0);
