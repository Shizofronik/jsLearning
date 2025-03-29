//МЕТОДЫ ЧИСЕЛ
const price = 99.555//Примитивный тип number
console.log('Округелнная цена: ', price.toFixed(2))//Метод округления (2) - кол-во знаков после ','

/*При выполнении методов примитивов js создает обертку, которая знает 
price и имеет несколько вспомогательных методов*/

console.log('Округелнная цена 2: ', price.toPrecision(3))////Метод округления (3) - кол-во знаков в целом

console.log('Цена в числе: ', price)
console.log('Цена в строке: ', price.toString())//Приведение к строке
//В вргументы toString() можно передать(от 2 до 36) в какой системе счисления отображать приведенное число
console.log('Цена в строке в двоичной системе счисления: ', price.toString(2))


//⁡⁣⁣⁢Встроенный объект Math⁡
console.log(Math)
console.log('Случайное число: ', Math.random())
console.log('|-100| =', Math.abs(-100))//Абсолютное значение(модуль числа)
console.log('12^2 =', Math.pow(12, 2))// ну или 12**2
console.log('Квадратный корень из 144 =', Math.sqrt(144))
console.log('Кубический корень из 125 =', Math.cbrt(125))

const numbers = [1, 2, 3, 99, -100, 256]

console.log('min:', Math.min(...numbers), 'max:', Math.max(...numbers))//Для массивов передаем через Spread Operator


//Парсинг числа из строки(простой вариант)
const numAsString = '100px'
const floatAsString = '100.5px'

console.log(parseInt(numAsString))//parseInt(numAsString, 2) - дополнительно переведет число в двоичную систему
console.log(parseFloat(floatAsString))







//МЕТОДЫ СТРОК
const someString = 'lalala'

console.log(`Длина строки ${someString} = ${someString.length}`)//Длина строки - length
console.log(`4й символ из строки ${someString} = ${someString[3]}`)//Получение символа по индексу
console.log(`Последний символ из строки ${someString} = ${someString[someString.length - 1]}`)
/*Метод at позволяет лишь получить символ по индексу, но изменить его нельзя(будет ошибка)
    В общем-то и первым способом изменить символ нельзя, но ошибки в таком случае не будет*/
console.log(`Последний символ из строки ${someString} через at = ${someString.at(-1)}`)

//Методы изменения регистра строки
const text = 'OoOoOoOoO'

console.log('в нимжнем регистре:', text.toLowerCase())
console.log('в верхнем регистре:', text.toUpperCase())

//trim() - обрезание пробелов в начале и в конце строки(также есть trimStart() и trimEnd)
const text2 = '   пробел   '
console.log(`строка ${text2} имеет длину ${text2.length}`)
console.log(`строка ${text2}.trim имеет длину ${(text2.trim()).length}`)


//indexOf - нахождение индекса символа начала подстроки в строке
const message = 'тысячу хуев мне в жопу'
console.log(message.indexOf('в жопу'))//indexOf('жопу', 3) - начнет поиск с 3-го элемента в message


//Но для проверки наличия подстроки в строке лучше использовать includes
console.log(message.includes('хуев'))//Проверяет есть ли подстрока в строке и возвращает true или false
//includes('хуев', 3) - начнет поиск с 3-го элемента в message


//Получение подстроки из строки
console.log(message.substring(7, 11))//индекс начала получаемой подстроки и конца(только положительные значения)
//Также в substring можно передать только один аргумент - это будет индекс начала подстроки

//Метод slice позаолят получать подстроку начиная с конца строки
console.log(message.slice(-10))//Подстрока из последних 10-и символов message


//repeat
console.log(message.repeat(3))


//replace
console.log(message.replace('тысячу', 'две тысячи'))//заменяет первое вхождение подстроки 'a' на подстроку 'b'
//Есть еще replaceAll - заменяет все вхождения подстроки 'a' на подстроку 'b'


//Разделение строк (split - позволяет получить строку в виде массива)
console.log(message.split(''))//Массив с каждым элементом строки
console.log(message.split(' '))//Массив со словами через разделитель ' '


//ЗАДАЧКА
while (true){
    const value = prompt('Введите имя:', 'Иван')
    if(value){
        const clearValue = value.trim()

        if(clearValue.length < 2){
            alert('Неккоректный ввод!')
        }
        else if(clearValue.toLowerCase() === 'admin'){
            alert(`Нельзя использовать ${clearValue} в качестве имени`)
        }
        else{
            break
        }
    }
}