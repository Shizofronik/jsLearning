//Коллекция Map() -может принимать в себя массив массивов(как entries), применимы методы set() get() has()
//Еще Map значительно оптимизированние чем Object(например при переборе ключей)
const data = new Map(
    //[[1, '1 как число],
    //[1', '1 как строка'],] -добавление свойств идет черз массив ключ-значение
)


//Важно помнить что все клюи в объектах это строки, даже если мы задаем их через число
data.set(1, '1 как число')
data.set('1', '1 как строка')//Если добавлять свойства обычным методом, то js не будет видеть разницы между [1] и ['1']

console.log(data)
console.log(data.get(1))
console.log(data.get('1'))
data.delete('1')//Удаляем элемент по ключу
console.log(data.has('1'))//Проверка наличия ключа '1'
console.log(data)
//data.clear()//Очищаем коллекцию полностью
//console.log(data)

data.set('name', 'Alex')

//Map еще удобна тем что очень легко получить ее размер - size
console.log(data.size)//обращаемся к size без () потому что это свойство, а не метод

//Получаем из Map ключи, значения и пары ключ-значение в виде итерируемого объекта(индексируемого)
console.log('Ключи:', data.keys())
console.log('Значения:', data.values())
console.log('Entries:', data.entries())

//Цикл for of
for(const key of data.keys()) {
    console.log('Ключ:', key)
}

//forEach в Map коллекции, работает так же как и с массивами, но порядок сущностей в callback функции другой
//value - значение, key - ключ, map - ссылка на саму коллекцию

data.forEach((value, key, map) => {
    console.log('key:', key)
    console.log('value:', value)
    console.log('map:', map)
})

//Преобразование объекта в коллекцию
const myObj = {
    name: 'Borat',
    age: 32,
    country: 'Mongoliya'
}

const map = new Map(Object.entries(myObj))

map.forEach((value, key) => {
    console.log(`key: ${key} -> value: ${value}`)
})

//Ну и обратная операция - преобразование Map в Object
//Важно не забывать что объекты не могут хранить ключей не сторк, а Map может
const fromMap = Object.fromEntries(map)
console.log(fromMap)











//Коллекция Set (не метод set!!!)
//Set - коллекция, хранящая только уникальные значения
//Т.к объекты - ссылочный тип данных, то наборы ключей-значений в объектах внутри Set могут совпадать
const mySet = new Set([1, 1, 2, 2, 3, 3, 555, 555, 555])

console.log(mySet)//{1, 2, 3, 555}

//Set похож на массив, но только с уникальными значениями
//Добавление объектов в Set происходит через метод add()
mySet.add('Москва')
mySet.add('Москва')
mySet.add('Казань')

console.log(mySet)//{1, 2, 3, 555, 'Москва', 'Казань'}

//Многие методы Set совпадают с методами Map - has(), clear(), delete(), свойство size
//Перебор Set
const mySet2 = new Set([0, 1, 2])

for (const key of mySet2.keys()){
    console.log(key)//Разницы между keys и values мы не увидим(ключ и есть значение)
}

for (const value of mySet2.values()){
    console.log(value)
}

for (const entry of mySet2.entries()){
    console.log(entry)//Массив с двумя одинаковыми объектами
    //Эти странности нужны для совместимости с Map(для удобной работы)
}

let names = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", "Kira",
  ];

const unique = arr => {
    return Array.from(new Set(arr));//Получаем массив из Set с помощью Array.from
}

console.log(unique(names))