const translationMap = {
  Figure: "Figuras",
  Card: "Cartas",
  Yarn: "Tejidos",
  Band: "Pulseras",
};

export const processCategories = (categoryList) =>
  [{ name: "Todos", key: "all", type: "all" }].concat(
    categoryList.map((category) => processCategory(category))
  );

export const processCategory = (category) => ({
  ...category,
  type: category.name,
  name: translationMap[category.name],
});
