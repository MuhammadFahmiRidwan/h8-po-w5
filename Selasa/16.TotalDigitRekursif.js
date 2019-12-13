// Problem
// Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

// Contoh:

// 512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.

function totalDigitRekursif(angka) {
  // you can only write your code here!
  let string = String(angka)
    if (string.length == 1) {
      return angka // 2
    }
    else {
      return totalDigitRekursif(Number(string.slice(1))) + Number(string[0]) // 6
    }
  }
  // 1. a(12) + 5
  // 2. a(2) + 1 + 5
  // 3. 2 + 1 + 5


  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  // console.log(totalDigitRekursif(1542)); // 12
  // console.log(totalDigitRekursif(5)); // 5
  // console.log(totalDigitRekursif(21)); // 3
  // console.log(totalDigitRekursif(11111)); // 5