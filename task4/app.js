// let inputString = "dunen bazardan iki manata utu aldim. hemen utunu ana chox beyendi. kicik hediyye olmasina baxmayaraq bu hediyye cox ses saldi";

function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

function findPalindromeStr(inputString) {
    let words = inputString.split(' ');

    for (let i = 0; i < words.length; i++) {
        let str = words[i];

    }

    if (Object.keys(palindromeString).length === 0) {
        return false;
    
    }

    return palindromeString;
}

let inputString = "dunen bazardan iki manata utu aldim. hemen utunu ana chox beyendi. kicik hediyye olmasina baxmayaraq bu hediyye cox ses saldi";

let result = findPalindromeStr(inputString);

console.log(result);
