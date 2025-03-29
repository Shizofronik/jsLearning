'use strict' 

const greeting = 'hello'
const name = 'Kira'

let message = `${greeting}, ${name}!`

console.log(message)

const a = 1_000_000
const b = 11
const isChild = a < b

//Инетрполяция
message = `Сумма a и b равна ${a + b}`

//Вывод интерполяции
console.log(message)
//bool
console.log(isChild)
//typeof - проверка типа данных
console.log(typeof('111' / '222')) //number

//Преобразование в string
console.log(a)
console.log(String(a))

//0 - False, Все оствльное - True
console.log('bool0 ', Boolean(0))
console.log('bool1 ', Boolean(1))
console.log('bool2 ', Boolean(2))
console.log('bool3 ', Boolean(-1))

//Если строка пустая - false, иначе - true(пробелы тоже считаются)
console.log('bool4 ', Boolean(''))
console.log('bool5 ', Boolean('gg'))

//АРЕФМЕТИЧЕСКИЕ БИНАРНЫЕ ОПЕРАТОРЫ
console.log('2 + 2 =', String(2 + 2))
console.log('2 - 2 =', String(2 - 2))
console.log('2 * 2 =', String(2 * 2))
console.log('2 / 2 =', String(2 / 2))
console.log('2 ** 3 =', String(2 ** 3))
console.log('5 % 2 =', String(5 % 2))

//УНАРНЫЕ ОПЕРАТОРЫ
console.log(-10)
//С помощью унарного "+" можно преобрпзовывать любые типы данных в number
console.log('typeof(+123) =', typeof(+'123'))
console.log('typeof(+false) =', typeof(+false))
console.log(+'3' + +'7')//Складываем преобрпзованные в тип number строки

//ДЕКРЕМЕНТ И ИНКРЕМЕНТ
let first = 10
let second = 10

first--//Декртемент
--first//Есть префиксный вариант инкремента и декремента, он немного по другому работает при присваивании
second++//Инкремент
second++

console.log(first)
console.log(second)

//СРАВНЕНИЕ
console.log(2 == 2)//Не строгое стравнение
console.log(3 == '3')//(true)
console.log(3 === '3')//Строгое сравнение(false)
console.log(3 !== '3')//Строгое сравнение(true)


//IF ELSE
let year = 2025

if(year === 2025){

    console.log('Год: 2025й')
}
else if(year === 2024){

    console.log('Год:  2024й')
}
else{

    console.log('Год: не 2025й')
}

//⁡⁣⁣⁢ТЕРНАРНЫЙ ОПЕРАТОР⁡
const messageYear = year === 2024 ? 'Год:  2024й' : 'Год: не 2024й'
console.log(messageYear)

//⁡⁢⁣⁡⁣⁣⁢ЛОГИЧЕСКИЕ ОПЕРАТОРЫ:⁡
// ИЛИ - ||
//И - &&
//НЕ - ! двойной оператор !! это то жек самое что и Boolean()
//⁡⁣⁣⁢ОПЕРАТОР НУЛЕВОГО СЛИЯНИЯ⁡ - ??(если первый операнд != null и != undefind, то вернется его значение, иначе - второй операнд)

const aNull = null

const result1 = a ?? b //a == 1_000_000, b == 11
const result2 = aNull ?? b //aNull == null, b == 11

console.log('result1:', result1, ' result2:', result2)

//alert - функция для вывода сообщений в виде всплывающего окна
alert('alert!!!')//Можно вывести только один параметр

//prompt - всплывющее окно с полем ввода(аналог input для браузера)
let question = prompt('Вопросы?', 'нет')//Принимет 2 параметра - сообщение и значению по умолчанию

if(question === 'нет'){//prompt все введенные данные преобразует в строку

    console.log(`заебок`)
}
else if(question === 'да'){

    console.log(`иди нахуй`)
}
else{

    console.log(`question = ${question}`)
}

//confirm - всплывающее окошко для подтверждения действия(результат всегда булевого типа)
const isUserReady = confirm('Готов?')

if(isUserReady){

    console.log(`заебок`)
}
else{

    console.log(`иди нахуй`)
}

//⁡⁣⁣⁢Условия switch case⁡

const age = +prompt('Возраст?')

switch (true){
    case age <= 0: {
        console.log('не пизди')
        break //Всегда пиши break
    }

    case age === 18: {
        console.log('норм')
        break
    }

    case age >= 100: {
        console.log('дохуя')
        break
    }
    
    default: {
        console.log(`Твой возраст: ${age}`)
    }
}
