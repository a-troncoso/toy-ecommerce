import { getRandomInt } from "@/utils/number";

export const processProducts = (productList) =>
  productList.map((product) => processProduct(product));

export const processProduct = (product) => ({
  ...product,
  price: getRandomInt(1000, 100000, { multiplier: 10 }),
});

export const genFeaturedProducts = (products) =>
  [...Array(4)].map(() => products[getRandomInt(0, products.length - 1)]);
