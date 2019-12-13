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
    let result = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'A'){
            result += 'b'
        }
        else if(str[i] === 'i' || str[i] === 'I'){
            result += 'j'
        }
        else if(str[i] === 'u' || str[i] === 'U'){
            result += 'v'
        }
        else if(str[i] === 'e'|| str[i] === 'E'){
            result += 'f'
        }
        else if(str[i] === 'o'|| str[i] === 'O'){
            result += 'p'
        }
        else {
            result += str[i]
        }
    }
    return result
}   
  
function reverseWord (str) {
    //code di sini
    let reverse = ''
    for (let i = str.length-1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse
}
  
function setLowerUpperCase (str) {
    //code di sini
    let set = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            set += str[i].toUpperCase()
        }
        else {
            set += str[i].toLowerCase()
        }
    }
    return set
}
  
function removeSpaces (str) {
    //code di sini
  }
  
function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5'
    }

    return setLowerUpperCase(reverseWord(changeVocals(name)))
}
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'