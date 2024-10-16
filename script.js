/**
 * Calcularea Sumelor:
 * Definește o funcție numită computeSum care 
 * primește doi parametri și returnează suma acestora.
 */
function computeSum(a, b){
    return  a + b;
}

console.log( computeSum(20, 15));


/**
 * Determinarea Parității:
 * Scrie o funcție numită isEven care primește un număr 
 * și returnează true dacă numărul este par și false dacă este impar
 */
function isEven (checkedNumber) {
    let isOdd = true;
    if (checkedNumber %2 !== 0) {
        isOdd = false;
    }
    return !isOdd;
}
console.log(isEven (12));
console.log(isEven(3));

/**
 * Concatenarea Șirurilor de caractere:
 * Creează o funcție numită concatenateStrings care primește 
 * două șiruri și le concatenează, returnând rezultatul.
 */
function concatenatedStrings(string1, string2){
    return string1 + string2;
}
const result = concatenatedStrings("Alabala", "Portocaala");
console.log(result);
/** 
 * Verificarea Palindromului:
 * Defineste o funcție numită isPalindrome care primește un șir și
 *  returnează true dacă este palindrom și false în caz contrar.
 */
function isPalindrome(text){
    let reverseText = "";
    for(const letter of text){
        reverseText = letter + reverseText;
    }
    return text === reverseText;
}
console.log(isPalindrome("aba"));
console.log(isPalindrome("abca"));

/**
 * Generarea unui Număr Aleatoriu:
 * Scrie o funcție numită generateRandomNumber care 
 * returnează un număr aleatoriu întreg între 1 și 100.
 */
function generateRandomNumber(){
    let x = Math.floor((Math.random() * 100) + 1);
    return Math.floor(Math.random() * 100);

}
console.log(generateRandomNumber());


/**
 * Calcularea Puterii:
 * Implementează o funcție numită raiseToPower care primește 
 * două numere (baza și exponentul) și returnează rezultatul ridicării la putere.
 */
function raiseToPower(a, b){
    let rezultat = Math.pow(2, 3);
    return Math.pow(2, 3);

}
console.log(raiseToPower());

/**
 * Calcularea Mediei:
 * Creează o funcție numită calculateAverage care primește 
 * un array de numere și returnează media lor.
 */
function calculateAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
  console.log("average: ", calculateAverage([10, 7, 8, 4]));
/**
 * Transformarea în Majusculă:
 * Definește o funcție numită transformToUppercase 
 * care primește un șir și returnează șirul cu toate 
 * literele transformate în majusculă.
 */
function transformToUppercase(sir) {
  return sir.toUpperCase();
}
console.log(transformToUppercase("AndreiseJoaca"));
/**
 * Verificarea Numărului Prim:
 * Scrie o funcție numită isPrimeNumber care primește un număr 
 * și returnează true dacă este prim și false în caz contrar.
 */

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(4))