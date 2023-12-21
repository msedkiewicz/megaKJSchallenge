const arr = [15, 2, 3, 21, 4, 6, 102, 2048, 666];

counter = 0;
for (let j = 0; j < arr.length; j++) {
  for (let i = 0; i < arr.length - 1 - j; i++) {
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

let arr2 = [];

for (let i = 0; i < 1000; i++) {
  arr2.push(Math.ceil(Math.random() * 1000));
}

counter = 0;
for (let j = 0; j < arr2.length; j++) {
  for (let i = 0; i < arr2.length - 1 - j; i++) {
    counter++;
    if (arr2[i] > arr2[i + 1]) {
      const temp = arr2[i];
      arr2[i] = arr2[i + 1];
      arr2[i + 1] = temp;
    }
  }
}

console.log(arr2);
console.log(arr2.length, counter);
