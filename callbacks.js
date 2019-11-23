// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word + 's'
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  let newArr = [];
	for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]))
  }
  return newArr;
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
// console.log(alphabet);   //prints 'abcd'

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  let result = [];
  forEach(array, (el) => {
    result.push(callback(el));
  })
	// result.push(forEach(array, callback));
  return result;
}
// console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
 let result = array[0];
 let skipFirstEl = true;
 if (initialValue || initialValue === 0) {
   result = initialValue;
   skipFirstEl = false;
 }
 forEach(array, (el) => {
   if (skipFirstEl) {
     result = el;
     skipFirstEl = false;
   } else {
     result = callback(result, el);
   }
 })
//  console.log(result)
return result;
}
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add));   //-> 8

//Extension 3
function intersection(...arrays) {
  let elHash = {};
  let resultArr = [];
  for (let i = 0; i < arrays.length; i++) {
    let inputArr = arrays[i];
    for (let j = 0; j < inputArr.length; j++) {
      const el = inputArr[j];
      if (elHash[el]) {
        elHash[el] += 1;
        if (elHash[el] === 3) resultArr.push(el);
      } else {
        elHash[el] = 1;
      }
    }
  }
  return resultArr;
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
  return reduce(arrays, (accum, arr) => {
    forEach(arr, (el) => {
      if (!accum.includes(el)) accum.push(el);
    });
    return accum;
  }, []);
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  let matches = {}
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      matches[array1[i]] = array2[i];
    }
  }
  return matches;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  return reduce(arrVals, (accum, curr) => {
    accum[curr] = mapWith(arrCallbacks, (cb) => cb(curr));
    return accum;
  }, {});
}

// console.log(multiMap(['x', 'y', 'z']))

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Extension 7
function objectFilter(obj, callback) {
  const result = {};
  for (let key in obj) {
    if (callback(key) === obj[key]) result[key] = callback(key);
  }
  return result;
}

const cities = {
London: 'LONDON',
LA: 'Los Angeles',
Paris: 'PARIS',
};
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

