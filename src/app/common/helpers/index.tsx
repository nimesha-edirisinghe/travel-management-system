export const removeItemFromArray = (array, item) => {
  const index = array.indexOf(item);
  if (index >= 0) {
    const list = array;
    list.splice(index, 1);
    return [...list];
  }
  return array;
};
