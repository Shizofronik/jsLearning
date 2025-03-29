//Объект это набор ключей и значений, ключом кстати может быть и другой объект
//Объект это ссылочный тип данных
const user = {
    login: 'admin',
    password: 'qwerty'
}

//Если имя свойства(ключ) содержит пробел или дефис, то его обязательно нужно обернуть в кавычки
const user2 = {
    'login-2': 'admin2',
    password: 'qwerty2',

    sayHuy: () => console.log('Huy')//Метод объекта user2
}






//Доступ к свойствам объекта
console.log(user.login)//1
console.log(user['password'])//2 (для имен свойст в пробелом или дефисом)

user2.sayHuy() //Вызов метода из объекта







//ДОБАВЛЕНИЕ СВОЙСТВ В ОБЪЕКТ
const myName = {}

function logObj (obj){ //Просто закрепляю функции
    console.log(obj)
}

logObj(myName)

myName.name = 'Nikitoss'//Добавляем свойство
logObj(myName)

myName.name = 'Kirochka'//Переопределяем свойство
logObj(myName)

delete myName.name//Удаляем свойство
logObj(myName)

const name1 = 'РЫЦАРЬ'
myName.name = name1//Запись через переменную, определить свойство можно так же только через :
logObj(myName)

const object = {
    123: 'Example'//имена свойств можно записывать числами, но js все равно будет считать их строкой
}

console.log(object['123'])//По другому к ним нельзя обратиться

const promptName = prompt('Имя свойства:', 'name2')//Запись prompt в переменную
const promptValue = prompt(`Значение свойства: ${promptName}`, 'value')

const promptObj = {
    [promptName]: promptValue,//обязательно используем [] если в качестве имени свойства хотим использовать значение переменной
    olol: 'ololo',
    end: 'last'

}

console.log(promptObj)

//Проверка на наличие свойства
console.log('name' in promptObj)//'name' - проверяемое свойство в promptObj

//Перебор имен свойств в объекте
for(const key in promptObj){

    console.log(`${key}: ${promptObj[key]}`)//имена свойств : значения
}

//js сортирует все имена свойств которые можно интерпритировать как числа по порядку в начало
const nums = {
    3: 'Третий',
    1: 'Первый',
    mama: 'Mama',
    2: 'Второй',
}

for(const num in nums){

    console.log(`${num}: ${nums[num]}`)//Вывод будет упорядоченным автоматически
}










//СРАВНЕНИЕ ОБЪЕКТОВ
const someObj1 = {
    num: 11, 
    numObj: {
        num1: 2,
        age: 22
    },
    num2: 22
}

const someObj2 = {
    num: 11, 
    /*numObj: {
        num1: 2,
        age: 22
    },*/
    num2: 22
}

console.log(`Сравнение объектов: ${someObj1 === someObj2}`)//false т.к js хранит непримитивные значения по ссылке в памяти
//соответсвенно ссылки на someObj1 и someObj2 отличаются

//Так можно поднимать значения из вложенных объектов
console.log('someObj2 age: ', someObj2.numObj?.age ?? 'Возраста нет')//Опциональная цепочка ?. = опциональный оператор
//Опциональный оператор как бы уточняет: если в someObj2 есть numObj и если это объект, то обращаемся к age
//Также добавляем оператор нулевого слияния ??, чтобы если numObj или age нет, от вывелась заглушка

//Но если один объект ссылается на другой, то по факту он хранит в себе ту же самую ссылку что и первый объект
const someObj3 = someObj1

console.log(`Сравнение объектов 2: ${someObj1 === someObj3}`)//true
//Можно даже сделать так:
//someObj3.num = 12
//console.log(`someObj1.num: ${someObj1.num}`) - вывод будет 12


//Сравниваем объекты(с возможными вложенными объектами) через рекурсию, выполняем глубокое сравнение
const areObjectsEqual = (obj1, obj2) => {
    keys1 = Object.keys(obj1)//Получение массива ключей объекта
    keys2 = Object.keys(obj2)

    let returnValues = true//Создаем отдельную переменную под return чтобы не прерывать функцию при рекурсии
    //Но лучше сделать это через доп.условие с continue в if(isObjects):
    /*
    if(areObjectsEqual(value1, value2)){
        continue
    }
    else{
        return false
    }
    */

    if(keys1.length !== keys2.length) {//Проверка на одинаковое кол-во элементов
        returnValues = false
    }

    for(const key in obj1) {
        const value1 = obj1[key]
        const value2 = obj2[key]
        //Флаг для определения 2-ух объектов для вызова рекурсии
        const isObjects = 
            typeof value1 === 'object' && typeof value2 === 'object'

        if(isObjects) {
            returnValues = areObjectsEqual(value1, value2)//рекурсия для проверки вложенных объектов
        }

        //ВАЖНО: else if, ведь иначе после выполнения рекурсии мы сравним ссылки на 2 разных объекта и получим false
        else if(value1 !== value2) {
            returnValues = false
        }
    }

    return returnValues
}

console.log(`Результат сравнения: ${areObjectsEqual(someObj1, someObj2)}`)







//КОПИРОВАНИЕ ОБЪЕКТОВ
const copyObj1 = {name: 'names', age: 112}
//const copyObj2 = Object.assign({}, copyObj1) //Скопировали сам объект, а не его ссылку

//а еще можно скопировать объект так:
const copyObj2 = {...copyObj1}//Оператор расширения (Spread Operator), по факту это объединение с пустым объектом

copyObj2.name = 'попа'
console.log('copyObj1: ', copyObj1)
console.log('copyObj2: ', copyObj2)






//ОБЪЕДИНЕНИЕ ОБЪЕКТОВ
const copyObj3 = {pol: 'женский', isDevelooper: true}
//const assignOdj = Object.assign({}, copyObj2, copyObj3)
//ИЛИ
const assignOdj = {...copyObj2, ...copyObj3}

console.log('assignOdj: ', assignOdj)
//Важно сказать, что при объединении объектов с вложенными объектами запишется только последний из них
//Чтобы вложенные объекты тоже объединялись можно использовать сторонние библиотеки







//ДЕСТРУКТУРИРОВАНИЕ ОБЪЕКТА
const admin = {
    name: 'Alex',
    age: 20,
    onWorking: true,
}

//Можно либо так для каждого свойства
//nameAdmin = admin.name
//либо так(через : можно переиминовать вытягиваемую переменную)
const {name: nameAdmin, age, onWorking, city = 'Москва'} = admin//city = 'Москва' - значение по умолчанию
console.log('name, age, onWorking, city: ', nameAdmin, age, onWorking, city)

//ПРИМЕР
const logAddress = (address) => {
    const {city, street, houseNumber} = address//Деструктурируем переданный аргумент
    console.log(`Город ${city}, ул. ${street}, д.${houseNumber}`)
}

logAddress({city: 'Москва', //Передаем аргументы одной сущностью
    street: 'Пушкина', 
    houseNumber: 22}
)






//ОСТАТОЧНЫЕ ПАРАМЕТРЫ(нужны например для свойств, которых может и не быть в объекте)
const logInfo = (address) => {
    const {city, street, houseNumber, ...otherInfo} = address//...otherInfo - сюда входит все что осталось после деструктурирования
    console.log(`
        Город ${city}, 
        ул. ${street}, 
        д.${houseNumber}
        Дополнительная информация:`, otherInfo
    )
}

logInfo({city: 'Кемерово', //Передаем аргументы одной сущностью
    street: 'Красноармейская', 
    houseNumber: 50,
    apartamentNumber: 109}
)