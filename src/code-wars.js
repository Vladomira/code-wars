// =======Reversed Strings 'world'  =>  'dlrow'=====
function solution(str){
    return str.split("").reverse().join("");
     
   }
   console.log(solution);


// =======practice by lesson========
const str = 'my favourite music';
const words = str.split(' ');

for (let i = 0; i < words.length; i += 1){
    const word = words[i];
    const newWord = word[0].toUpperCase() + word.slice(1);

    words[i] = newWord;
}
const newWord = words.join(' ');

console.log(str);
console.log(words);
console.log(newWord);
// result: My Favourite Music=============


// ============== Find the odd int===========
function findOdd(A) {
    //happy coding!
    for (element of A){
      element %2 !== 0;    
    }
    return element;
  }


function findOdd(start = 0, end =0) {
    //happy coding!
    const result = [];
    
    for (let i = start; i <= end; i += 1){
      if (i %2 !== 0);
      result = result + i;
    }
    return result;
  }

  function findOdd(A) {
    //happy coding!
    const result = 0;
    
    for ( i = 0; i <= A; i += 1){
      if ( i %2 !== 0);
      result +=  i;
    }
    return result;
  }
 