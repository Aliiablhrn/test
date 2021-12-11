// Деструктуризация 

// let user = {
//     name: 'Alex',
//     age: 30,
// }
// let newUser = user;
// newUser.name = 'Sally';
// console.log(newUser);
// console.log(user);



// let product = {
//     title: 'T-shirt',
//     price: {
//         s: 2000,
//         m: 3000,
//         l: 4000,
//     }
// }
// let newProduct = {...product}
// newProduct.title = 'Coat';
// newProduct.price.l = 5000;                   //цена меняется везде
// console.log(product);
// console.log(newProduct);



// let product = {
//     title: 'T-shirt',
//     price: {
//         s: 2000,
//         m: 3000,
//         l: 4000,
//     }
// }
// let newProduct = JSON.parse(JSON.stringify(product))
// product.price.m = 5000;
// console.log(product);
// console.log(newProduct);



// let student = {
//     name: 'Tom',
// }
// let {name: studentName} = student;
// console.log(studentName);
// console.log(student);


// let arr = ['false', 10, null];
// let [, , type] = arr;
// console.log(type);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let [first, second, third, fourth, ...rest] = arr
// console.log(first, second, third, fourth);
// console.log(rest);


// let obj = {
//     name: 'MarketPlace',
//     frameworks: ['React', 'Angular'],
//     versions: {
//         legacy: [2011, 2012, 2013]
//     }
// }
// let {
//     name: projectName,
//     frameworks: [react],
//     versions: {
//         legacy: [year, ...otherYears]
//     }
// } = obj
// console.log(react, year, otherYears, projectName);



// let obj = {
//     hello: "World",
//     console: "log",
//     java: "script",
//     python: 'django',
// }

// let {hello, console: console1, ...rest} = obj;
// console.log(hello, console1, rest)



//! Дан объект {name: 'John', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало введенное значение с prompt.

// let obj = {
    // name: 'John',
    // age: '22',
// }
// let {name = prompt('Введите свое имя'), age = +prompt('Введите свой возраст')} = obj
// console.log(name, age);


//! Переделайте следующую функцию через деструктуризацию.
// Сделайте так, чтобы если какое-либо из значений отсутствует, то переменной присваивалось значение по умолчанию.
// function func({ t: title = 'phoneNumber', n: number = '0888229927' }) {
//     console.log(title, number)
// }
// func({})




//! Вам дан объект с информацией о книге. С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль

// const courseCatalogMetadata = [
//   {
//     title: "The Hobbit, or There and Back Again",
//     description:
//       "The hobbit tells a fantastic story of adventure, danger, friendship, and courage",
//     texts: [
//       {
//         author: "J. R. R. Tolkien",
//         price: 120,
//         ISBN: "912-6-44-578441-0",
//       },
//     ],
//   },
// ];



//! Вам дан объект с информацией о книге. С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль

const courseCatalogMetadata = [
    {
      title: "The Hobbit, or There and Back Again",
      description:
        "The hobbit tells a fantastic story of adventure, danger, friendship, and courage",
      texts: [
        {
          author: "J. R. R. Tolkien",
          price: 120,
          ISBN: "912-6-44-578441-0",
        },
      ],
    },
  ];
  
  let [
    {
      title,
      description,
      texts: [
        {
          author,
          price,
          ISBN: isbn
        }
      ]
    }
  ] = courseCatalogMetadata;
  console.log(isbn);



//! Задание №11 
// Напишите функцию с деструктуризацей, которая выводит лучшее время автогонщиков
// из данного массива:
// const winners = [
//     { name: 'Mario',   time: 110 },
//     { name: 'Waluigi', time: 115 },
//     { name: 'Toad',    time: 116 },
//     { name: 'Yoshi',   time: 124 },
//     { name: 'Bowser',  time: 129 },
//     { name: 'Kran', time: 100},
//   ];

//   function getBestTimeOf (racers) {
//       racers.sort((a, b) => a.time - b.time)
//       let [{time: bestTime}] = racers
//       return bestTime
//   }
//   console.log(getBestTimeOf(winners));

