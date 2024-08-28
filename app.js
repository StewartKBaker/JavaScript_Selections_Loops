console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//for (let i = 1; i <= 100; i++) {
//    if (i % 2 != 0) {
//        console.log(i);
//    } 
//}

var count = 1;

while(count <= 100)
{
    if (count % 2 != 0)
    {
        console.log(count);
    }
    count++;
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
//for (let i = 1; i <=100; i++)  
//  {
//    if (i % 3 == 0 && i % 5 == 0)
//      {
//          console.log("FIZZBUZZ");
//      } else if (i % 3 == 0) 
//      {
//          console.log("FIZZ");
//      } else if (i % 5 == 0)
//      {
//        console.log("BUZZ");
//      }
//    console.log(i);
//  }

var fizzbuzz = 1;

do {
    if (fizzbuzz % 3 == 0 && fizzbuzz % 5 == 0)
    {
        console.log("FIZZBUZZ");
    } else if (fizzbuzz % 3 == 0)
    {
        console.log("FIZZ");
    } else if (fizzbuzz % 5 == 0)
    {
        console.log("BUZZ");
    } else 
    {
        console.log(fizzbuzz);
    }
    fizzbuzz++;
} while (fizzbuzz <= 100);


console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (var i = 0; i <= n; i++)
{
    if (i == value)
    {
        console.log("Value Found!");
        break;
    }
    if (i == n)
    {
        console.log(`Did not find the value ${value}.`);
    }
}


console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(`Fizz Divisor : ${fizzDivisor}`)
console.log(`Buzz Divisor : ${buzzDivisor}`)

let fizzBuzzArray = [];

for (var i = start; i <= end; i++)
{
    if (i % fizzDivisor == 0 && i % buzzDivisor ==0) {
        fizzBuzzArray.push("FizzBuzz!");
    } else if (i % fizzDivisor == 0)
    {
        fizzBuzzArray.push("Fizz");
    } else if (i % buzzDivisor == 0)
    {
        fizzBuzzArray.push("Buzz");
    } else
    {
        fizzBuzzArray.push(i);
    }
    if (i == end) 
    {
        console.log(fizzBuzzArray);
    }
}
