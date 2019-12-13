// Problem
// Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

// Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!

function sorting(arrNumber) {
    // code di sini
    for (let i = 0; i < arrNumber.length; i++) {
      for (let j = i+1; j < arrNumber.length; j++) {
        if (arrNumber[i] > arrNumber[j]) {
          let temp = arrNumber[i]
          arrNumber[i] = arrNumber[j]
          arrNumber[j] = temp
        }
      }
    }
    return arrNumber
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    let sort = sorting(arrNumber)
    console.log(sort)
    let max = -Infinity
    for (let i = 0; i < sort.length; i++) {
      if (max < sort[i]) {
        max = sort[i]
      }
    }

    let length = 0
    for (let i = 0; i < sort.length; i++) {
      if (sort[i] == max) {
        length++
      }
    }
    
    if (sort == '') {
      return ''
    }
    
    return 'angka paling besar adalah ' + max + ' dan jumlah kemunculan sebanyak ' + length + ' kali'

  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''