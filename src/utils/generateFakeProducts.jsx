import { faker } from "@faker-js/faker";

const generateFakeProducts = (brandName) => {
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
    brand:brandName,
  };
};

export const dataArray = (totalProducts = 10) => {
  const allProducts = [];

  const brands = [];

  for(let i = 0; i < 5; i++){
    brands.push(faker.company.name());
  }

  for (let i = 0; i < totalProducts; i++) {
    allProducts.push(generateFakeProducts(brands[i % brands.length]));
  }
  return allProducts;
};
