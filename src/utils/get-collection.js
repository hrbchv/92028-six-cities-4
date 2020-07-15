export const getUnicCollection = (array, key) => {
  let collection = new Set();
  array.forEach((item) => collection.add(item[key]));
  return Array.from(collection);
};

export const getFilteredCollection = (array, key, filterName) => {
  return array.filter((item) => item[key] === filterName);
};
