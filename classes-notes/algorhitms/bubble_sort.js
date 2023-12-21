const arr = [15, 2, 3, 21, 4, 6];

counter = 0;
for (let j = 0; j < arr.length; j++) {
  for (let i = 0; i < arr.length - 1; i++) {
    counter++;
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
}

console.log(arr);
console.log(arr.length, counter);
