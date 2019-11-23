/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');

setTimeout(() => console.log('I am the setTimeout callback function'), 0)

console.log('End of Challenge 1');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');
// ...your code below

const int = setInterval(() => console.log('Interval Hello!'), 2000)
setTimeout(() => clearInterval(int), 10000)


// ...your code above
function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
console.log('End of Challenge 2');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');
// ...your code below
function everyXsecxForYsecs(func, intSecs, totalSecs) {
  // const int = setInterval(func, intSecs * 1000)
  for (let i = 0; i < totalSecs / intSecs; i++) {
    setTimeout(func, intSecs * 1000)
  }
  // setTimeout(() => clearInterval(int), totalSecs * 1000)
}

function sayHowdy() {
  console.log('Howdy');
}

everyXsecxForYsecs(sayHowdy, 1, 5);


console.log('End of Challenge 3');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');
// ...your code below

function myEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i)
  }
}

const delays = [2000, 5000, 0, 3500]

function delayLog(delayTime, i) {
  setTimeout(() => console.log(`printing element ${i}`), delayTime)
}

myEach(delays, delayLog)

console.log('End of Challenge 4');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');
// ...your code below

// function changeColor() {
//   if (document.body.style.background === "rgb(221, 238, 255)") {
//       document.body.style.background = "rgb(221,238,221)";
//   } else {
//       document.body.style.background = "rgb(221,238,255)";
//   }
// }

// let activate = document.getElementById("activate");
// let color = document.getElementById("color");
// activate.addEventListener("click", function (event) {
//   console.log("clicked #1");
//   color.addEventListener("click", function (event) {
//       console.log("clicked #2")
//       changeColor();
//   });
// });

// ...your code above
document.body.style.background = '#def';
console.log('End of Challenge 5');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];
  setTimeout(() => {
    callback(database[id]);
    console.log('dataRecieved 2 ->', dataReceived);
  }, 0)
}

function storeData(data) {
  dataReceived = data;
}

ajaxSimulate(1, storeData);
console.log('dataRecieved 1 ->', dataReceived);

console.log('End of Challenge 6');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');
// ...your code below

async function getBack(name) {
  const band = await fetch(`rest.bandsintown.com/artists/${name}`);
  console.log('band ->', band);
}

getBack('underoath');


console.log('End of Challenge 7');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 8');
// ...your code below


const Http = new XMLHttpRequest(); //creates new XHR object
const url = 'https://rest.bandsintown.com/artists/sleepingwithsirens/events?app_id=jshp'; //url where the Sleeping With Sirens JSON can be found
Http.open("GET", url); //initializes a newly-created request
Http.send(); //sends the request to the server

Http.onreadystatechange = function () { //when event is finished, call this function
    if (this.readyState == 4 && this.status == 200) { //ensures task is done
        var response = Http.responseText;
        dataHandler(JSON.parse(response)); //parses the JSON received to construct the object described
    }
};

function dataHandler(data) {
    for (let i = 0; i < data.length; i++) {
        $("#ch3").append(data[i].venue.name + ', ');//appends the correct section of our JSON into our HTML
    }
    $("#ch3").slice(0, -1); //takes off the extra comma
}



console.log('End of Challenge 8');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 9');
// ...your code below



const Http = new XMLHttpRequest(); //creates new XHR object
const url = 'https://rest.bandsintown.com/artists/sleepingwithsirens/events?app_id=jshp&date=1990-01-01%2C2019-01-01'; //url where the Sleeping With Sirens JSON can be found
Http.open("GET", url); //initializes a newly-created request
Http.send(); //sends the request to the server

Http.onreadystatechange = function () { //when event is finished, call this function
    if (this.readyState == 4 && this.status == 200) { //ensures task is done
        var response = Http.responseText;
        dataHandler(JSON.parse(response)); //parses the JSON received to construct the object described
    }
};

function dataHandler(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].venue.country === "United States") {
            $("#ch4").append(data[i].venue.name + ', ');//appends the correct section of our JSON into our HTML
        }
    }
    $("#ch4").slice(0, -1); //takes off the extra comma
}



console.log('End of Challenge 9');
// */// (do not alter this line)


