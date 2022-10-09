for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
/*
Вывести числа от 1 до 100. Если число делиться на 3, то вывести Fizz. Если на 5, то Buzz
Если одновременно на 3 и 5, то FizzBuzz
*/
