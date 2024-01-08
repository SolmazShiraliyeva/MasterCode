function arrayString(words){

    if(typeof words == 'number'){
        return false;
    }

else{
console.log(words.split(' '));
}



}
const strText = 'JAVA is programming language';
const numbers = 48945648;

console.log(arrayString(strText));
console.log(arrayString(numbers));