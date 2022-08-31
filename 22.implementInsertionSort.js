function insertionSort(array){
  for(i=1;i<array.length;i++){
    let j =i
    while (j>0 && array[j] <array[j-1]){
      [array[j-1],array[j]] = [array[j],array[j-1]]
      j--
    }
  }
  return array
}

console.log(insertionSort([1,4,2,8,5,123,45,43,23,234,92,1000]))