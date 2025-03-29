'use strict'
//МАССИВЫ
//Массив это не отдельный тип данных(но он считается объектом), а струткутра данных(коллекция)
const arr = [
    'Hello', 
    100, 
    true,
    { name:'Niki', 
        age: 20, },
    () => console.log('function'),
    [true, true, true]

]
//или const arr2 = new Array() Используется редко

console.log('arr:', arr)
console.log('arr type:', typeof(arr))
for(let i = 0; i < arr.length; i++){
    console.log(`вывод по индексу ${i}: ${arr[i]}`)
}

console.log(arr[3]['name'])//вывод свойства объекта в массиве
console.log(arr[3].age)//либо так
arr[4]()//Вызов функции из массива
console.log(arr[5][0])//Выводим первый элемент из вложенного массива
//Массив, хранящий в себе массивы - это многомерный массив(нужен например для матриц)

console.log('arr before:', arr[0])
arr[0] = 'Goodbye'//Замена значения элемента массива
console.log('arr after:', arr[0])

arr[6] = 'Шестой'//Добавление эелемента в массив
console.log('arr:', arr)
//Если попытаться добавить объект на большой индекс, то все индексы от последнего элемента массива
//и до нового элемента заполнятся пустыми объектами:
arr[10] = 10
console.log('arr10:', arr)
console.log('last element at:', arr.at(-1))//Еще способ получить последний эелемент массиваы

//Через push можно гарантированно добавить эелемент в конец массива
arr.push('11', 12)
console.log('arr12:', arr)

arr.unshift(0, 1)//Добавлениие элементов в начало массива, но лучше так не делать(дорого по памяти)
console.log('arr14:', arr)

//Удаление элементов
const lastElement = arr.pop()//pop не только удаляет элемент с конца массива, но и возвращает его значение
console.log(lastElement)
console.log('arr no lastElement:', arr)
console.log(arr.shift())//Удаляем 1й элемент из массива и возвращаем его значение 

//toString() примененный к массивам преобразует их в единую строку
console.log(arr.toString())
//Но лучше делать это через join()
console.log(arr.join(', '))

//Копированние массивов работает так же как и копирование объектов:
//const arr1 = [0, 1, 2, 3]
//const arr2 = arr1 - arr2 будет хранить в себе ссылку на arr1 и все изменения будут касаться обоих массивов
//const arr2 = [...arr1] - поэтому копирование надо делеать через spread operator
//Но также можно копировать массив через arr2 = arr1.slice() вырезая его как бы полностью
//const arr2 = arr1.slice(0, 2) будет вырезкой с [0, 1] slice возвращает элементы с 0 до 2 не включительно

//Объединение массивов тоже происходит через spread operator
const arr1 = [0, 1]
const arr2 = [2, 3]
const arr3 = [4, 5]

console.log('arr1 + arr2 + arr3 = ', [...arr1, ...arr2, ...arr3])
//или через concat()
console.log('arr1.concat(arr2, arr3) = ', arr1.concat(arr2, arr3))


//СРАВНЕНИЕ МАССИВОВ
//Самое главное не забывать что массивы это по сути объекты
const array1 = [
    1, 
    2,
    [1, 2, 3, 4],
    'sex',
]

const array2 = [
    1, 
    2,
    [1, 2, 3],
    'sex',
]

/*  Для более точной проверки(например для массивов в которых могут содержаться объекты)
    можно внутри функции areArrayEqual добавить проверку на объекты после проверки на массивы 
     и если эта проверка дала true, то вызывать areObjectsEqual которая прописана в 
    objects.js. Но лучше просто сравнивать объекты и массивы через библиотеки
*/
const areArrayEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        const value1 = arr1[i]
        const value2 = arr2[i]

        const isArray = Array.isArray(value1) && Array.isArray(value2)

        if(isArray) {
            if(areArrayEqual(value1, value2)){
                continue
            }
            else{
                return false
            }
        }

        if (arr1[i] !== arr2[i]) {
            return false
        }
    }

    return true
}

console.log('Результат сравнения массивов:', areArrayEqual(array1, array2))




//ДЕСТРУКТУРИРОВАНИЕ МАССИВА
const data = ['someName', 18]

const [name1, age] = data
console.log(`Имя: ${name1}, Возраст: ${age}`)



//Перебор массива через forEach()
const letters = ['A', 'B', 'C', 'D', 'E']
//То же сaмое что и const letters = ['A', 'B', 'C', 'D', 'E'].forEach(...)
//forEach принимает в аргументы функцию(callback)
letters.forEach((letter, index, array) => {
    console.log(`index: ${index}, element: ${letter}`)
})//Передаваемая функция может принимать 3 элемента - element, index, array

//Нахождение индекса по значению
console.log(`Индекс эелемента C: ${letters.indexOf('C')}`)//Если indexOf не найдет элемент в массиве, то он вернет -1
console.log(`Индекс эелемента D: ${letters.lastIndexOf('D')}`)//Поиск эелемента с конца массива

const users = [
    {
        name: 'Олег',
        age: 22,
        city: 'Москва'
    },
    {
        name: 'Александра',
        age: 19,
        city: 'Москва'
    },
    {
        name: 'Глеб',
        age: 20,
        city: 'Оренбург'
    },
    {
        name: 'Мария',
        age: 26,
        city: 'Ставрополь'
    },
    {
        name: 'Григорий',
        age: 27,
        city: 'Москва'
    },
]

//Поиск индекса элемента сложного элемента(объекта например) в массиве - findIndex() и findLastIndex()

/*
console.log(
    users.findIndex((user) => {
        if(user.name === 'Глеб') {
            return true
        }
    })
)
*/
//Но лучше записать так(для небольших функций)
console.log('Индекс элемента через findIndex:',
    users.findIndex((user) => user.name === 'Глеб')//(принимает callback функцию)
)

//Проверка на наличие элемента в массиве - includes (возвращает true/false)(принимает callback функцию)
console.log(`D in letters: ${letters.includes('D', 0)}`)//Начинаем поиск с нулевого элемента
//Поиск в массиве объектов - some (возвращает true/false)
console.log(
    users.some((user) => user.name === 'Глеб' && user.age === 21)
)

//Проверка каждого элемента в массиве на определенное условие - every (возвращает true/false)(принимает callback функцию)
console.log('Проверка всех юзеров на совершеннолетие:',
    users.every((user) => user.age >= 18) 
)

//Нахождение элемента по условию - find()(принимает callback функцию) -находит лишь первый элемент удовлетворяющий условию
console.log(users.find((user) => user.age === 22))

//Фильтрация массива - filter()
console.log(users.filter((user) => user.age >= 20))//Все люди с возрастом > 19
console.log(users.filter((user) => user.age <= 25 || user.city === 'Москва'))//Все люди из Москвы ИЛИ с возрастом < 26


//Преобразование массива - метод map()(принимает callback функцию)
const usersFormatted = users.map((user) => {
        return `${user.name} живет в городе ${user.city}`//map() создает новый массив, не мутируя исходный массив
    }
)

console.log(usersFormatted)

//Если нужно изменить исходный массив, то она должен быть определен через let
/*
И его нужно будет перезаписать:
users = users.map((user) => {
        return `${user.name} живет в городе ${user.city}`//map() создает новый массив, не мутируя исходный массив
    }
)
*/

//Перебор массива с накоплением - метод reduce()
//reduce(() => {}, 0) принимает два аргумента: callback функцию и начальное значение accumulator
//В свою очередь callback функция должна содержать 4 параметра: accumulator - хранит результат предыдущего вызыва функции
//Далее стандартные параметры - element, index, array

//дебаг режим
//debugger
const ageSum = users.reduce((accumulator, user) => {return accumulator + user.age}, 0)

//Если надо перебрать массив с накоплением с конца, то - reduceRight()

console.log(`Средний возраст юзера: ${ageSum / users.length}`)



//reverse() - переворачивает исходный массив
console.log('Переворачиваем:', letters.reverse())//ВАЖНО: метод reverse() - мутирует исходный массив
console.log('Исходный массив:', letters)
//Но если мы не хотим мутировать исходный массив, то можно перед вызовом reverse() скопировать исходный массив через spread operator
console.log('Опять переворачиваем:',[...letters].reverse())
console.log('Исходный массив:', letters)


//sort() - сортирует массив, принимает callback функцию, но может работать и без нее (например с буквами)
console.log('Сортированный массив:', letters.sort())
const numbers1 = [8, 4, 500, 92, -5]
//Callback функция принимает имеет 2 параметра - сравниваемые сущности
//И если функция будет возвращать отрицательное значение, то sort поставит a перед b в массиве
console.log('Сортированный массив:', numbers1.sort((a, b) => a - b))//Со строками такой подход тоже будет работать
console.log('Сортированный в обратную сторону массив:', numbers1.sort((a, b) => b - a))//Сортировка по убыванию