let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if (num % 2 === 0) {
    continue;
  }
  if (num % 3 === 0) {
    console.log(num);
  }
}
