/*
⁡⁣⁣⁢Контекст выполнения⁡ – специальная внутренняя структура данных, 
которая содержит информацию о вызове функции. Она включает в себя конкретное место в коде, 
на котором находится интерпретатор, локальные переменные функции, значение this 
и прочую служебную информацию.

⁡⁣⁣⁢Стек⁡ — это способ организации данных в памяти компьютера. 
Он работает по принципу «последним пришёл, первым вышел» 

⁡⁣⁣⁢Когда функция производит вложенный вызов, происходит следующее:⁡

Выполнение текущей функции приостанавливается.
Контекст выполнения, связанный с ней, запоминается в специальной структуре данных – стеке 
контекстов выполнения. Выполняются вложенные вызовы, для каждого из которых создаётся свой 
контекст выполнения. После их завершения старый контекст достаётся из стека, и выполнение 
внешней функции возобновляется с того места, где она была остановлена.
*/

//⁡⁣⁣⁢Рекурсивная функция⁡
function pow(x, n) {
    //Контекст выполнения вложенного вызова кладется "поверх" предыдущего контекста
    return (n === 1) ? x : x * pow(x, n - 1)
    //Когда вложенная функция возвращает значение ее контекст удаляется, а предыдущий продолжается с того метса, где остановился
}

/*
⁡⁣⁣⁢Обратим внимание на требования к памяти⁡. 
Рекурсия приводит к хранению всех данных для неоконченных внешних вызовов в стеке, 
и в данном случае это приводит к тому, что возведение в степень n хранит 
в памяти n различных контекстов.

Реализация возведения в степень через цикл гораздо более экономна, но менее изящна:
*/

function forPow(x, n) {
    let result = 1

    for(let i = 0; i < n; i++) {
        result *= x
    }

    return result
}

/*
Итеративный вариант функции pow использует один контекст, 
в котором будут последовательно меняться значения i и result. 
При этом объём затрачиваемой памяти небольшой, фиксированный и не зависит от n.

Любая рекурсия может быть переделана в цикл. 
Как правило, вариант с циклом будет эффективнее.
Часто код с использованием рекурсии более короткий, 
лёгкий для понимания и поддержки. Оптимизация требуется не везде, 
как правило, нам важен хороший код, поэтому она и используется.
*/

console.log(pow(2, 10))
console.log(forPow(3, 6))



//⁡⁣⁣⁢‍Рекурсивные обходы⁡

let company = {
    nameCompany: 'Ростелеком',
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1600
      }]
    }
  };


//Функция для получения суммы всех зарплат
function sumSalary(departament) {
    let sum = 0

    for(let key of Object.keys(departament)) {
        if(typeof departament[key] === 'object') {
            sum += sumSalary(departament[key])
        }
        else if(!departament.salary) {
            continue
        }
        else {
            sum += departament.salary
            break
        }
    }

    return sum
}

console.log(`${sumSalary(company)}$`)


//⁡⁢⁣⁢ЗАДАЧКА⁡
/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
*/

//Вариант через рекурсию(самый короткий, но не самый эффуктивный и с ограничениями по памяти)
function sumTo(n) {
    return (n === 1) ? n : n + sumTo(n - 1)
}

console.log(sumTo(100))


//Через цикл, гораздо менее затратно по памяти
function sumToEconomy(n) {
    result = 0

    for(let i = 1; i <= n; i++) {
        result += i
    }

    return result
}

console.log(sumToEconomy(10_000))

//Через сумму арифметической прогрессии(самый эффективный метод)
function sumProgression(n) {
    return ((1 + n) / 2) * n
}

console.log(sumProgression(10_000_000_000))

//⁡⁢⁣⁢ЕЩЕ ЗАДАЧКА⁡
//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
//5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n) {
    return (n === 1) ? n : n * factorial(n - 1)
}

console.log(factorial(6))


//⁡⁢⁣⁢ЛАСТ ЗАДАЧКА⁡
/*
Допустим, у нас есть односвязный список
Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию.
*/

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

//Через рекурсию
function printList(list) {
    console.log(list.value)

    if(list.next !== null) {
        printList(list.next)
    }
}

printList(list)

//Через цикл
function printForList(list) {
    tmp = list

    while (tmp) {
        console.log(tmp.value)
        tmp = tmp.next
    }
}

console.log(printForList(list))


//⁡⁢⁣⁢ТОЧНО ЛАСТ ЗАДАЧКА⁡
//Выведите односвязный список из предыдущего задания в обратном порядке.

//Вывод целого списка
function printReversedList(list) {
    reversedList = list.next !== null ? printReversedList(list.next) : []
    reversedList.push(list.value)
    return reversedList
}

//Вывод каждого эелемента
function printReversedList2(list) {
    if(list.next) {
        printReversedList2(list.next)
    }

    console.log(list.value)
}

console.log(printReversedList(list))

printReversedList2(list)