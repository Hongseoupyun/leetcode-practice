//sorting an array with descending orer

let Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (let i = 0; i < Arr.length; i++)
  for (let j = i + 1; j < Arr.length; j++)
    if (Arr[i] < Arr[j]) {
      let x = Arr[i];
      Arr[i] = Arr[j];
      Arr[j] = x;
    }
console.log(Arr);

//sorting an array with descending orer
let Arr2 = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (let i = 0; i < Arr2.length; i++)
  for (let j = i + 1; j < Arr2.length; j++)
    if (Arr[i] > Arr[j]) {
      let x = Arr[i];
      Arr[i] = Arr[j];
      Arr[j] = x;
    }
console.log(Arr2);
