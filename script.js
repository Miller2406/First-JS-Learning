
// Even report homework
// let input = prompt("fill number");

// if (input % 2 == 0) {
//     console.log("Even");
// }

// // RED GREEN YELLOW homework
// let input = prompt("fill color");

// input = input.toLowerCase();

// if (input === "stop") {
//     console.log("Red");
// } else if (input == "slow") {
//     console.log("Yellow");
// } else if (input == "go") {
//     console.log("Green");
// }

// nested conditions
// Change the value of num, so that "YOU GOT ME!" prints out
// const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

// DO NOT TOUCH ANYTHING BELOW (please)
// if (num <= 100) {
//     if (num >= 50) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 103) {
//         if (num % 2 === 0) {
//             console.log("YOU GOT ME!");
//         }
//     }
// }

// True False

// const num = '80'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// // LEAVE THIS CODE ALONE! (pretty please)
// if (num >= 78 && num <= 99 && (num % 2) == 0) {
//     console.log("YOU GOT IT!!!");
// }

// LOGIC
// false || (true && false);    *false
// true || (1 + 2);             *true
// (1 + 2) || true;             *true
// true && (1 + 2);             *true
// false && (1 + 2);            *false
// (1 + 2) && true;             *true
// (32 * 4) >= 129;             *false
// false !== !true;             *true
// true === 4;                  *false
// false === (847 === '847');   *true
// false === (847 == '847');    *false
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82))|| false;    *true

//PLEASE DON'T TOUCH THIS LINE!
// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }

// //YOUR CODE GOES DOWN HERE:
// let fullAddress = `${restaurant.address} ${restaurant.city} ${restaurant.state} ${restaurant.zipcode}`;

// console.log(fullAddress);


// Challenge: Iterating Arrays Exercise
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for (let i = 0; i <= people.length - 1; i++) {
//     console.log(people[i].toUpperCase());
// }

// console.log('end loop');

// For OF
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const a of numbers) {
//     console.log(a ** 2);
// }

// THE TEST EXERCISE /Challenge: Conditional Statements and Loops Exercises
// Exercise 1 เขียนโปรแกรมที่หาเลขจำนวนเต็มที่มากที่สุด ระหว่างเลขจำนวนเต็มสองตัว
// let num1 = Math.floor(Math.random() * 100)
// let num2 = Math.floor(Math.random() * 100)
// console.log(num1);
// console.log(num2);

// let compNum = Math.max(num1, num2)

// console.log(compNum);

//
// Exercise 2 เขียนโปรแกรม JS โดยใช้ condition statement เพื่อหาเครื่องหมายของผลลัพธ์ที่ได้จากการคูณกันของตัวเลข 3 ตัว

// ตัวอย่างตัวเลข: 3, -7, 2
// ผลลัพธ์: The sign is -

// let signNum1 = Math.floor(Math.random() * 100)
// let signNum2 = Math.floor(Math.random() * 100)
// let signNum3 = Math.floor(Math.random() * 100)

// let signX = signNum1 * signNum2 * signNum3;

// console.log(`The sign is ${signX}`);


// Exercise 3
// เขียนโปรแกรม JS โดยใช้ conditional statement เพื่อเรียงตัวเลข 3 ตัว จากค่ามากไปหาค่าน้อย

// ตัวอย่างตัวเลข: 0, -1, 4
// ผลลัพธ์: 4, 0, -1

// let num1 = Math.floor(Math.random() * 100)
// let num2 = Math.floor(Math.random() * 100)
// let num3 = Math.floor(Math.random() * 100)

// let numAll = [num1, num2, num3]
// console.log(numAll.sort());
// console.log([num1, num2, num3].sort());


// Exercise 4
// เขียนโปรแกรม JS โดยใช้ conditional statement เพื่อหาตัวเลขที่มีค่ามากที่สุด จากตัวเลข 5 ตัว

// ตัวอย่างตัวเลข: -5, -2, -6, 0, -1
// ผลลัพธ์: 0


// let num1 = Math.floor(Math.random() * 10)
// let num2 = Math.floor(Math.random() * 10)
// let num3 = Math.floor(Math.random() * 10)
// let num4 = Math.floor(Math.random() * 10)
// let num5 = Math.floor(Math.random() * 10)

// let numAll = [num1, num2, num3, num4, num5]
// console.log(numAll);

// console.log(numAll.sort().reverse()[0]);

// Exercise 5
// เขียนโปรแกรม JS โดยใช้ loop เพื่อทำซ้ำกระบวนการตั้งแต่เลข 0 ถึง 15 โดยที่ในแต่ละรอบของการทำซ้ำ ใช้ทำการเช็กว่าตัวเลข ณ รอบนั้น เป็นเลขคู่ หรือ เลขคี่ และให้แสดงผลลัพธ์เป็นข้อความในหน้าจอ ดังนี้

// ตัวอย่าง ผลลัพธ์:
// "0 is even"
// "1 is odd"
// "2 is even"
//     .
// ..
// ...
// "15 is odd"

// let numRun = 0;


// while (numRun < 16) {
//     if (numRun % 2 == 0) {
//         console.log(`${numRun} is even`);
//         numRun += 1


//     } else {
//         console.log(`${numRun} is odd`);
//         numRun += 1


//     }

// }

// Exercise 6
// เขียนโปรแกรม JS เพื่อแสดงผลลัพธ์ให้ออกมาตามรูปแบบในตัวอย่างข้างล่างนี้ โดยที่จะต้องใช้ nested loop ในการแสดงผลลัพธ์ในข้อนี้เท่านั้น

// *
// * *
// * * *
// * * * *
// * * * * *

// const arr = [];

// for (let i = 0; i < 5; i++) {
//     arr.push('*');
//     console.log(arr);

// }


//     Exercise 7
// เขียนโปรแกรม JS เพื่อหาผลรวมของตัวเลขทั้งหมดตั้งแต่ 0 - 1000 แต่ตัวเลขนั้นจะต้องหาร 3 หรือ 5 ลงตัวเท่านั้น

// const numD3 = []
// const numD5 = []
// let suma = 0

// for (let d3 = 3; d3 <= 1000;) {
//     numD3.push(d3)
//     d3 += 3
// }
// for (let d5 = 5; d5 <= 1000;) {
//     numD5.push(d5)
//     d5 += 5
// }
// for (let i = 0; i < numD3.length; i++) {
//     suma += numD3[i]

// }
// for (let j = 0; j < numD5.length; j++) {
//     suma += numD5[j]

// }

// console.log(suma);



// Exercise 8
// เขียนโปรแกรม JS เพื่อใช้ในการหาค่าเฉลี่ยของคะแนนสอบจากนักเรียนทั้งหมดที่กำหนดให้ในตาราง และจากนั้นให้ใช้คะแนนเฉลี่ยที่คำนวณมาได้ ใช้ในการคำนวณเกรดต่อไป


// const stu = {
//     'David': 80,
//     'Vinoth': 77,
//     'Divya': 88,
//     'Ishitha': 95,
//     'Thomas': 68,
// }

// const p = ['A', 'B', 'C', 'D', 'F']

// for (const a in stu) {
//     if (stu[a] < 60) {

//         console.log(`${a} got ${stu[a]} avg score = grade ${p[4]}`);

//     } else if (stu[a] < 70) {
//         console.log(`${a} got ${stu[a]} avg score = grade ${p[3]}`);

//     } else if (stu[a] < 80) {
//         console.log(`${a} got ${stu[a]} avg score = grade ${p[2]}`);

//     } else if (stu[a] < 90) {
//         console.log(`${a} got ${stu[a]} avg score = grade ${p[1]}`);
//     }
//     else if (stu[a] < 100) {
//         console.log(`${a} got ${stu[a]} avg score = grade ${p[0]}`);
//     }

// }



// console.log(stu);

// โดยที่เกรดจะต้องถูกคำนวณตามเงื่อนไขดังต่อไปนี้:



// ***Functions

// function printHeart() {

//     console.log("<3");

// }

// printHeart()

// Challenge: Rant Exercise
// สร้าง function ชื่อว่า rant ซึ่ง function นี้จะรับ argument message โดยที่ function นี้จะต้องสามารถแสดงผล message เป็นตัวอักษรตัวใหญ่ทั้งหมด 3 ครั้ง(ซึ่งจะต้องเรียกใช้ console.log 3 ครั้ง) ยกตัวอย่างเช่น rant("I hate beets") ควรจะได้ผลลัพธ์เป็น:


// function rant(message) {
//     console.log(`${message}`.toUpperCase());
//     console.log(`${message}`.toUpperCase());
//     console.log(`${message}`.toUpperCase());
// }

// rant("i love you")






// // Challenge: Basic Function Exercises
// Exercise 1: Return Value Practice

// function multiply(x, y) {
//     let result = x * y;
//     return result;
// }

// result = multiply(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));

// console.log(result, '- result');


// Exercise 2: isShortsWeather Function

// function isShortsWeather(temperature) {
//     if (temperature >= 75) {
//         return temperature = true;
//     }
//     return temperature = false;

// }

// Exercise 3: Last Element Exercise

// function lastElement(arr) {
//     if (arr.length == 0) {
//         return null;
//     } else {
//         return arr[arr.length - 1];
//     }
// }
// console.log(lastElement([3, 1, 5, 7, 3, 7, 8, 0, 'last']));
// console.log(lastElement([3]));
// console.log(lastElement([]));

// Exercise 4: Capitalize Exercise

// function capitalize(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }

// console.log(capitalize('done'));


// Exercise 5: Sum Array Exercise

// function sumArray(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total;
// }

// console.log(sumArray([1, 5, 2, 6]));
// console.log(sumArray([1, 2, 3])); // 6
// console.log(sumArray([2, 2, 2, 2])); // 8
// console.log(sumArray([50, 50, 1])); // 101

// Exercise 6: Days Of The Week Exercise

// function returnDay(numDay) {

//     if (numDay > 0 && numDay < 8) {
//         switch (numDay) {
//             case 1:
//                 return 'Monday';
//                 break;
//             case 2:
//                 return 'Tuesday';
//                 break;
//             case 3:
//                 return 'Wednesday';
//                 break;
//             case 4:
//                 return 'Thursday';
//                 break;
//             case 5:
//                 return 'Friday';
//                 break;
//             case 6:
//                 return 'Saturday';
//                 break;
//             case 7:
//                 return 'Sunday';
//                 break;
//         }

//     } else {
//         return null;
//     }
// }


// console.log(returnDay(1)); // "Monday"
// console.log(returnDay(7)); // "Sunday"
// console.log(returnDay(4)); // "Thursday"
// console.log(returnDay(0)); // null



// // *** Function Expression

// let square = function (x) {
//     return x ** x;
// }

// console.log(square(4));//16
// console.log(square(3)); //9




// // Methods Excercise

// square = {
//     area(x) {
//         return x * x;
//     },
//     perimeter(x) {
//         return x * 4;
//     }
// }
// console.log(square.area(10)); //100
// console.log(square.perimeter(10)); //40




// // Challenge: Egg Laying Exercise

// let hen = {
//     name: "Helen",
//     eggCount: 0,
//     layAnEgg() {
//         this.eggCount++
//         return "EGG";
//     }
// }
// console.log(hen.name); // "Helen"
// console.log(hen.eggCount); // 0
// console.log(hen.layAnEgg()); // "EGG"
// console.log(hen.layAnEgg()); // "EGG"
// console.log(hen.eggCount);// 2




// /////Challenge: Map Practice


// const fullNames = [{ first: 'Albus', last: 'Dumbledore' },
// { first: 'Harry', last: 'Potter' }, {
//     first: 'Hermione',
//     last: 'Granger'
// }, { first: 'Ron', last: 'Weasley' },
// { first: 'Rubeus', last: 'Hagrid' }, {
//     first: 'Minerva',
//     last: 'McGonagall'
// }, { first: 'Severus', last: 'Snape' }];

// const firstNames = fullNames.map(function (x) {
//     return {
//         first: x.first
//     }

// })

// console.log(firstNames);


// /////Challenge: Arrow Function Practice


// const greet = (x) => {
//     return `Hey ${x}!`;
// }

// console.log(greet("Hagrid")); //"Hey Hagrid!"
// console.log(greet("Luna")); //"Hey Luna!"



/////// Challenge: Filter Exercise

// function validUserNames(arr) {
//     return arr.filter(name => name.length < 10);
// }

// console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));

// /////// Some/Every Exercise

// function allEvens(arr) { return arr.every(num => num % 2 === 0); }

// console.log(allEvens([2, 4, 6, 8])); //true
// console.log(allEvens([1, 4, 6, 8])); //false
// console.log(allEvens([1, 2, 3])); //false


// ////// Method Reduce

// const nums = [2, 4, 6, 2, 7, 8, 9, 4]

// let result = nums.reduce


// /////Default Params
// // ถ้าไม่ทราบชื่อให้เรียก Guest
// function greet(name = 'Guest') {
//     return `Hello, ${name}!`;
// }

// console.log(greet());
// console.log(greet('Peter'));
// console.log('end ex.1');


// // ถ้าไม่ทราบ b ให้เป็น 5
// function multiply(a, b = 5) {
//     return a * b;
// }

// let l = (Math.floor(Math.random() * 10))
// console.log(l, 'random');
// console.log(multiply(l,));
// console.log(multiply(l, l));

// // ถ้าไม่ทราบอายุให้เป็น 18
// function createPerson(name, age = 18) {
//     return { name, age };
// }

// console.log(createPerson('Peter', 30));
// console.log(createPerson('Brace',));




// /////////////Challenge: Spread in Function Calls and Array Literals
// // 1.กำหนดให้มีอาร์เรย์ของตัวเลข หาตัวเลขที่มากที่สุดโดยใช้ตัวดำเนินการ spread.

// // const numbers = [3, 7, 2, 8, 28, 10, 6];
// // const maxNumber = Math.max(...numbers);
// // console.log(maxNumber);


// // 2.เขียนฟังก์ชัน combineArrays ที่รับอาร์เรย์สองอาร์เรย์และคืนค่าอาร์เรย์ใหม่ที่รวมทั้งสองอาร์เรย์โดยใช้ตัวดำเนินการ spread.

// // function combineArrays(arr1, arr2) {
// //     return [...arr1, ...arr2]
// // }

// // console.log(combineArrays([2, 5, 1, 6], [2, 6, 3, 7]));

// // 3.ใช้ตัวดำเนินการ spread เพื่อแปลงสตริง "hello" เป็นอาร์เรย์ของตัวอักษร.

// // const word = "hello";
// // const chars = [...word]
// // console.log(chars);


// // 4.กำหนดให้มีอาร์เรย์สองอาร์เรย์ รวมเข้าด้วยกันเป็นอาร์เรย์เดียว.

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const merged = [...arr1, ...arr2]
// console.log(merged);


// /////////Challenge: Spread with Objects
// // 1.กำหนดให้มีวัตถุสองวัตถุ รวมเข้าด้วยกันเป็นวัตถุเดียว.

// // const obj1 = { a: 1, b: 2 };
// // const obj2 = { c: 3, d: 4 };
// // const mergedObj = {
// //     ...obj1, ...obj2
// // }

// // console.log(mergedObj);

// // 2.ใช้ตัวดำเนินการ spread เพื่อสร้าง Object ใหม่ที่มีคุณสมบัติเดียวกันกับObject { x: 10, y: 20 } แต่เพิ่มคีย์ z ให้มีค่าเป็น 30 เข้าไปด้วย.

// // const obj = { x: 10, y: 20 };
// // const newObj = {
// //     ...obj,
// //     z: 30
// // }

// // console.log(newObj);

// // 3.กำหนดให้มีObject { a: 1, b: 2, c: 3 } และ { c: 4, d: 5 } รวมเข้าด้วยกันโดยให้ค่าของ c ในObjectแรกถูกแทนที่ด้วยค่าของ c ในObjectที่สอง.

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { c: 4, d: 5 };
// const mergedObj = {
//     ...obj1,
//     ...obj2
// }

// console.log(mergedObj);


// //////// Challenge: Rest Params
// // 1.เขียนฟังก์ชัน includeLast ที่รับพารามิเตอร์จำนวนเท่าใดก็ได้และคืนค่าพารามิเตอร์สุดท้าย.


// // function includeLast(...nums) {
// //     return nums[nums.length - 1]
// // }

// // console.log(includeLast(2, 3, 4, 1));
// // console.log(includeLast("A", "B", "C", "D"));


// // 2.เขียนฟังก์ชัน excludeLast ที่รับพารามิเตอร์จำนวนเท่าใดก็ได้และคืนค่าพวกเขาเป็นอาร์เรย์โดยไม่รวมพารามิเตอร์สุดท้าย.

// // function excludeLast(...args) {
// //     return [...args].slice(0, -1);
// // }

// // console.log(excludeLast(2, 3, 4, 1)); //-> [2,3,4]
// // console.log(excludeLast("A", "B", "C", "D")); //-> ["A","B","C"]


// // 3.เขียนฟังก์ชัน sumFirstLast ที่รับพารามิเตอร์จำนวนเท่าใดก็ได้และคืนค่าพวกเขาเป็นผลรวมของพารามิเตอร์ตัวแรกและตัวสุดท้าย

// function sumFirstLast(...nums) {
//     return Number([...nums][0]) + Number([...nums].splice(-1))
// }

// console.log(sumFirstLast(2, 3, 4, 1)); //-> 3
// console.log(sumFirstLast(4, 2, 1, 8)); //-> 12


// ///////Challenge: Destructuring Arrays
// 1.กำหนดให้มีอาร์เรย์[1, 2, 3, 4, 5] แยกองค์ประกอบทุกตัวให้ออกมาเป็นตัวแปร a, b, c, d, e ตามลำดับ

// const arr1 = [1, 2, 3, 4, 5];
// const [a, b, c, d, e] = arr1

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


// 2.กำหนดให้มีอาร์เรย์[1, 2, 3, 4, 5] แยกองค์ประกอบตัวแรก ตัวที่สาม และตัวที่ห้าออกมาเป็นตัวแปร.a, b, c ตามลำดับ

// const arr1 = [1, 2, 3, 4, 5];
// const [a, x, b, y, c] = arr1

// console.log(`a = ${a}, b = ${b}, c = ${c}`);

// 3.แยกค่าสองค่าแรกและค่าที่เหลือจากอาร์เรย์[1, 2, 3, 4, 5].โดยค่าที่เหลือให้ชื่อว่า rest

// const arr1 = [1, 2, 3, 4, 5];
// const [a, b, ...rest] = arr1

// console.log(`a = ${a}, b = ${b}, rest = ${rest}`);


///////Challenge: Destructuring Objects
// 1.กำหนดให้มีObject { name: 'Alice', age: 25, city: 'Wonderland' } แยกคุณสมบัติ name และ city ออกมาเป็นตัวแปร.

// const person = { name: 'Alice', age: 25, city: 'Wonderland' };
// let { name, city } = person;
// console.log(`${name} ${city}`);

//const
// 2.เปลี่ยนชื่อคีย์ name เป็น firstName ขณะทำการ destructuring วัตถุ { name: 'Bob', age: 30 }.(ตัวอย่าง)

// const person = { name: 'Bob', age: 30 };
// const { name: firstName, age } = person;
// console.log(firstName);
// console.log(age);


// 3.แยกคุณสมบัติ country จากวัตถุ { name: 'Charlie', country: 'Chocolate Factory' } และให้ค่าเริ่มต้นเป็น 'Thailand' หากไม่มี. (ตัวอย่าง)

// const person = { name: 'Charlie', country: 'Chocolate Factory' };
// const { name, country = 'Thailand' } = person
// const person2 = { name2: 'Peter', country2: undefined };
// const { name2, country2 = 'Thailand' } = person2


// console.log(name);
// console.log(country);
// console.log(name2);
// console.log(country2 + ', blank');


