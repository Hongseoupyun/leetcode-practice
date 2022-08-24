//make an empty array to store duplicate string
//make an empty object to store sting counts
//make an empty array to store splitted strings
//
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
    wordFrequencyCounter[key] > 1 ? duplicate.push(key) : duplicate;
  });

  return duplicate; //["hello"]
};

findDuplicates("Hello my name is hello");
