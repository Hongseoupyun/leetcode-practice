// function findDuplicates(str) {
//   const dupes = [];
//   const strArr = str.toLowerCase().split(' ');
//   const wordFreqCounter = {};

//   console.log(strArr)
//   strArr.forEach((word) => {
//     if (!wordFreqCounter[word]) {
//       wordFreqCounter[word] = 1;
//     } else {
//       wordFreqCounter[word] += 1;
//     }
//   });

//   console.log(wordFreqCounter)
//   let allKeys = Object.keys(wordFreqCounter);
//   console.log(allKeys)

//   allKeys.forEach((key) => {
//     if (wordFreqCounter[key] > 1) {
//       dupes.push(key);
//     }
//   });
//   console.log(dupes)
//   return dupes;

// }

const findDuplicates = function (string) {
  let duplicate = [];
  let wordFrequencyCounter = {};
  let stringArray = string.toLowerCase().split(" "); //[ 'hello', 'my', 'name', 'is', 'hello' ];

  stringArray.forEach((word) => {
    wordFrequencyCounter[word]
      ? (wordFrequencyCounter[word] += 1)
      : (wordFrequencyCounter[word] = 1); //{ hello: 2, my: 1, name: 1, is: 1 }
  });

  let allKeys = Object.keys(wordFrequencyCounter); //[ 'hello', 'my', 'name', 'is' ]

  allKeys.forEach((key) => {
    return wordFrequencyCounter[key] > 1 ? duplicate.push(key) : duplicate;
  });

  return duplicate; //["hello"]
};

findDuplicates("Hello my name is hello");
