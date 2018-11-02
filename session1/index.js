// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // return str
  //   .split('')
  //   .reverse()
  //   .join('');


  // ########################## //

  // let revStr = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revStr = revStr + str[i];
  // }
  // return revStr;

  // ########################## //

  // let revStr = '';
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revStr = str[i] + revStr;
  //   console.log(revStr);
  // }
  // return revStr;


  // let revStr = '';
  // for (let char of str) {
  //   revStr = char + revStr;
  // }
  // return revStr;

  // ###########################

  // let revStr = '';
  // str.split('').forEach(function(char) {
  //   revStr = char + revStr;
  // });
  // return revStr;

  // let revStr = '';
  // str.split('').forEach(char => revStr = char + revStr);
  // return revStr;


 // ###############################

  //  return str.split('').reduce(function(revStr, char){
  //    return char + revStr;
  //  }, '');
 

  // return str.split('').reduce((revStr, char) => char + 
  // revStr, '');

}


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {

  return str === str.split('')
  .reduce((rStr, char) => char + rStr, '');
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {

  const revStr = int.toString().split('').reverse().join('');

  return parseInt(revStr) * Math.sign(int);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {

  // const strArr = str.toLowerCase().split(' ');

  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
  //   strArr[i].substring(1);
  // }
  // return strArr.join(' ');

  // ################################################


  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(function(word) {
  //     return word[0].toUpperCase() + word.substr(1);
  //   })
  //   .join(' ');

  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(' ');

  // ############################

  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  });
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {

  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  })

  for (let char in charMap) {
    //debugger;      // Use node inspect index.js on cmd line
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {

  for (let i = 1; i <= 100; i++) {
    
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else  {
      console.log(i);
    }
  }
}



// Call Function
//const output = reverseString('hello');
//const output = isPalindrome('madam');

//const output = reverseInt(324);
//const output = capitalizeLetters('i adore javascript');
//const output = maxCharacter('javascriiipt');

const output =  fizzBuzz();

console.log(output);
