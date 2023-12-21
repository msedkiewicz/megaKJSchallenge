const swap = (arr, first, second) => {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};
