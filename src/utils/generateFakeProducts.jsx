import { faker } from "@faker-js/faker";

const generateFakeProducts = () => {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price({ min: 1000, max: 50000, symbol: "$" }),
    image: faker.image.urlLoremFlickr({
      width: 400,
      height: 400,
      category: "fashion",
    }),
    stars: faker.number.int({ min: 0, max: 5 }),
    reviews: faker.number.int({ min: 10, max: 1200 }),
  };
};

export const dataArray = (totalProducts = 10) => {
  const allProducts = [];

  for (let i = 0; i < totalProducts; i++) {
    allProducts.push(generateFakeProducts());
  }
  return allProducts;
};
