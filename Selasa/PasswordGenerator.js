// Problem
// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

function changeVocals (str) {
    //code di sini
    var newStr = '';
    var alphaVocal = 'aiueoAIUEO'
  
    for(var i = 0; i < str.length;i++){
      flagVocal = false;
      for(var j = 0; j< alphaVocal.length;j++){
          if(str[i] == alphaVocal[j]) {
            flagVocal = true;
          }
      }
      if (flagVocal){
          newStr += String.fromCharCode(str[i].charCodeAt()+1);
      } else {
          newStr += str[i]
      }
    }
    return newStr
  }
  
function reverseWord (str) {
    //code di sini
    var newStr = '';
    for(var i=str.length-1;i>=0;i--){
      newStr += str[i]
    }
    return newStr;
  }
  
function setLowerUpperCase (str) {
    //code di sini
  var newStr = "";
  for(var i=0;i< str.length;i++){
      if (str[i] === str[i].toLowerCase()) {
          newStr += str[i].toUpperCase();
      } else {
          newStr += str[i].toLowerCase();
      }
  }
  return newStr;
  }
  
function removeSpaces (str) {
    //code di sini
    return str.split(" ").join("");
  }
  
function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
  
    var Generate = '';
    Generate = changeVocals(name);
    Generate = reverseWord(Generate);
    Generate = setLowerUpperCase(Generate);
    Generate = removeSpaces(Generate);
    return Generate;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'