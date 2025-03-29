/*
Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, 
не повторяющихся значений массива arr.
*/

let names = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", "Kira",
  ];

const unique = arr => {
    return Array.from(new Set(arr));
}

console.log(unique(names))