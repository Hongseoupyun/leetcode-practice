
function findDuplicates(str) {
  const dupes = [];
  const strLowerCase = str.toLowerCase();
  const strArr = strLowerCase.split(' ');
  const wordFreqCounter = {};

  strArr.forEach((word) => {
    if (!wordFreqCounter[word]) {
      wordFreqCounter[word] = 1;
    } else {
      wordFreqCounter[word] += 1;
    }
  });

  let allKeys = Object.keys(wordFreqCounter);

  allKeys.forEach((key) => {
    if (wordFreqCounter[key] > 1) {
      dupes.push(key);
    }
  });
  console.log(dupes)
  return dupes;
  
}


findDuplicates("Hello my name is hello")