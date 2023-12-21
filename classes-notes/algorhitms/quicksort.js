const elements = [4, 3, 5, 2, 78, 45, 1];

const swap = (arr, first, second) => {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

const quicksort = (arr, low, high) => {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, high);
  }
};

const partition = (arr, low, high) => {
  const pivotValue = arr[high];
  let j = low;

  for (let i = low; i < high; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, j, i);
      j++;
    }
    swap(arr, j, high);
    return j;
  }
};

quicksort(elements, 0, elements.length - 1);
console.log(elements);
