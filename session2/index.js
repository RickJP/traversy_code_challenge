
// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  // Create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // Sort by length

  const sorted = wordArr.sort(
    (a, b) => b.length - a.length
  );

  // IF multiple words, then put into array

  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );

  // Check if more than 1 array value

  if (longestWordArr.length === 1) {
    // return the word
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

//function chunkArray(arr, len) {

  // // SOLUTION 1

  // //init chunked array
  // const chunkedArr = [];

  // // Set index
  // let i = 0;

  // // Loop while index is less than array length
  // while (i < arr.length) {

  //   // Slice out from the index to the index + the current length
  //   chunkedArr.push(arr.slice(i , i + len ));
  //   console.log(chunkedArr);
  //   i += len;
  // }

  // return chunkedArr;


  // ##############################################################

  // // init chunked array
  // const chunkedArr = [];

  // // Loop through arr
  // arr.forEach(function(val) {
  //   // Get last element
  //   const last = chunkedArr[chunkedArr.length - 1];

  //   // check if there is last and last length is equal to the chunk length
  //   if (!last || last.length === len) {
  //     chunkedArr.push([val]);
  //   } else {
  //     last.push(val);
  //   }

  //   console.log(last);

  // }); 

  // return chunkedArr;

//}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {

  // SOLUTION 1

  r//eturn arrays.reduce((a, b) => a.concat(b));


  // SOLUTION 2
  //return [].concat.apply([], arrays);


  // SOLUTION 3
  // function add(a,b,c) {
  //   return a + b + c;
  // }
  // const arr = [1,2,3];

  // console.log(add(...arr));

  // return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {

  return formatStr(str1) === formatStr(str2);


}


// helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join()
};

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
    if (char === 'z' || char === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => 
    vowel.toUpperCase());

  return newStr;
}

// Call Function
//const output = longestWord('Hello, my name is Brad');
//const output = chunkArray([1,2,3,4,5,6,7,8,9], 4);
//const output = flattenArray([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ]);
//const output = isAnagram('Dormitory', 'dirty room');
const output = letterChanges('WHat is going on?');

console.log(output);