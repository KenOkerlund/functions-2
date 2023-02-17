////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

// const multiply = (num1, num2, cb) => cb(num1 * num2);
const multiply = (num1, num2, cb) => {
  cb(num1 * num2);
}


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

function log(answer){
  console.log('1 - The answer is ' + answer);
}
multiply(4,3, log)


// multiply(4, 3, answer => {
//   console.log('1 - The answer is ' + answer) //should console.log 12
// })




////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

const first = (arr, cb) => cb(arr[0]);


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER


function logFirstName(name){
  console.log('2 - The first name in names is' + name);
}
first(names, logFirstName);


// first(names, firstName => {
//   console.log('2 - The first name in names is ' + firstName)
// })

////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

const last = (arr, cb) => cb(arr[arr.length -1]);



// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

function logLastName(name){
  console.log('3 - The last name in names is ' + name)
}
last(names, logLastName);

// last(names, lastName => {
//   console.log('3 - The last name in names is ' + lastName)
// })



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
  
*/



// const contains = (arr, name, cb) => {
//     // step 2
//     if (arr.includes(name)) {
//         // step 3 A
//         cb(true);
//     } else {
//         // step 3 B
//         cb(false);
//     }
// }

// // step 1
// contains(names, 'Colt', (result) => {
//     // step 4
//     if (result === true) {
//         console.log('4 - Colt is in the array')
//     } else {
//         console.log('4 - Colt is not in the array')
//     }
// });


/**
 * Contains is called with the following args
 * 1. Names array
 * 2. name to search for
 * 3. a function that can be executed
 * 
 * Inside of the contains function now
 * if our array contains the search string call the callback with TRUE, otherwise FALSE
 * 
 * Now that the callback has been executed, AND the result (TRUE OR FALSE) has been passed to the callback
 * Run the code inside of the callback function
 */


// ******************
// passing in bool, true so we have access to the name in the next function
const contains = (arr, name, cb) => {
  arr.includes(name) ? cb(true, name) : cb(false, name);
}

// const contains = (arr, name, cb) => {
//   if(arr.includes(name)){
//     return cb(true);
//   }
//   else{
//     return cb(false);
//   }
// }


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

function checkBool(bool, name){
  if(bool){
    console.log(`${name} is in the array`)
  }
  else{
    console.log(`${name} is in the array`);
  }
}
contains(names, 'Kevin', checkBool)


// contains(names, 'Colt', result => {
//   if(result === true){
//     console.log('4 - Colt is in the array')
//   } else {
//     console.log('4 - Colt is not in the array')
//   }
// })



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// const uniqSet = (arr => [...new Set(arr)]);
// const uniq = (arr => new Set(arr));

// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
const uniq = (arr, cb) => {
  const uniqArr = [];
  for(let i = 0; i < arr.length; i++){
    if(!uniqArr.includes(arr[i])){
      uniqArr.push(arr[i]);
    }
  }
  cb(uniqArr);
}

/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

// console.log(uniqSet(names));

function callback(uniqArr){
  console.log('The new names array with all the duplicate items removed is', uniqArr);
}
uniq(names, callback);



uniq(names, uniqArr => {
  console.log('The new names array with all the duplicate items removed is', uniqArr);
})
////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

// this always returns index 6 because it doesn't stop until the end of the for each...
// const each = (arr, index) => {
//   arr.forEach((name, i) => {
//     index = `6 - The item at index ${[i]} is ${name}`
//   });
//   return index;
// }



const eachMine = (arr, index) => {
  // if(index > 1 && index < 7){
  for(let i = 0; i < arr.length; i++){
    let name = arr[i];
    if(i === index && i < arr.length){
      return `The item at index ${index} is ${name}`;
    }
  }
// }
}

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

const each = (arr, cb) => {
  arr.forEach((name, index) => {
    cb(name, index)
  });
}

/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two parameters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

each(names, (item, index) => {
  console.log(`The item at index ${index} is ${item}`);
})

console.log(eachMine(names, 5));

// each(names, cb(3, ))





////////// CHALLENGES //////////


////////// CHALLENGE 1 //////////


/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

const addingFactory = num1 => {
  return sum = num2 => num1 + num2;
}
/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

const addTen = addingFactory(10);

/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

console.log(addTen(15));

/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

const addEleven = addingFactory(11);
console.log(addEleven(11));




////////// CHALLENGE 2 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
  You'll learn about objects in our next lecture. But you can research objects and attempt this problem.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

const getUserById = (arr, id, callback) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].id === id){
      return callback(arr[i]);
    }
  }
}



// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

getUserById(users, '16t', user => {
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
})