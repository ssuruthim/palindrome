

// function checkPalindrome(string) {

    
//     const len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }


// const string = prompt('Enter a string: ');


// const value = checkPalindrome(string);

// console.log(value);

// var word=prompt('Enter any word');
// console.log(word);
// var wordArray=[...word];
// var temp=[...wordArray];
// console.log(wordArray);
// var revWordArray=temp.reverse();
// console.log(revWordArray);
// console.log(wordArray);
// var join1=wordArray.join('');
// console.log(join1);
// var join2=revWordArray.join('');
// console.log(join2);
// if(join1==join2){
//     console.log('This word is palindrome');
// }
// else{
//     console.log('This word is not palindrome');

// }
var word = prompt("enter a word");
console.log(word);
var wordsplit = word.split("");
console.log(wordsplit);
var array = [...wordsplit];

var reverse = array.reverse();
console.log(reverse);
var join1 = wordsplit.join("");
console.log(join1);
var join2 = reverse.join("")
console.log(join2);
if(join1 == join2){
    console.log("given word is palidrom");
}
else{
    console.log("give value is not a palindrome");
}
