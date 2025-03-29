const message = 'global' //Эту переменную будет видеть функция и весь остальной код ниже
//Если переопределить эту переменную в теле функции, то эти изменения будут применены локально для функции

function logHello(message2, count = 1) {//Параметры функции(count = 1 это значение по умолчанию, их лучше переносить в конец)
    const message = 'local'//По умолчанию будет использованная именно эта переменная для этой области видимости
    
    console.log(message)

    message2 = `${message2}ss`

    for (let i = 0; i < count; i++) {
        console.log(message2)
    }
}

logHello(message)//Аргументы функции

//RETURN

a = 5
b= 101

console.log(`a + b = ${sumNumber(a, b)}`)//Вызываем функцию которая еще не объявалена

function sumNumber (first, second) { //Это функция типа function declaration, ее можно использовать в коде до объявления
    console.log(arguments)//Неявная переменная хранящая в себе все переданные в функцию аргументы
    return first + second
}


//Function Expression 1)Такую функцию нельзя переопределить если она определена через const(но через let можно)
// 2)Function Expression нельзя использовать в коде до ее определения
const logNumber = function(a) {
    console.log(a)
}

logNumber(b)


//Arrow Function(стрелочная функция)
//1)Нельзя использовать до объявления в коде
//2)Не имеет доступа к неявной переменной arguments
//3)В Arrow Function нет своего контекста и this покажет на родительскую область видимости
const logName = (name) => {
    console.log(`Твое имя: ${name}`)

}

logName('РЫЦАРЬ')

//4)Можно провернуть неявный возврат из функции, если записать ее в одну строку
const returnNum = (a = 11, b = 100) => a + b

console.log(`Сумма a и b равна: ${returnNum()}`)


//Функции  callback'и (функцие передаваемые в другие функции)
const sendMessage = (fnBefore, fnAfter) => {
    fnBefore()
    console.log('Middle')
    fnAfter()

}

const fn1 = () => console.log('After')
const fn2 = () => console.log('Before')

sendMessage(fn1, fn2)

//Функция может возвращать в return другую функцию:
const validate = (isAccses) => {
    if(isAccses){
        return () => console.log('Доступ разрешен')
    }

    else{
        return () => console.log('Доступ запрещен')
    }
}

/*также можно упростить функцию через тернарный оператор:

const validate = (isAccses) => {
    return isAccses 
        ? return () => console.log('Доступ разрешен')
        : return () => console.log('Доступ запрещен')

}
то есть если true - Доступ разрешен, ксли false - Доступ запрещен
*/

const logValidate = validate(false)

logValidate()//Вызывем как функцию для корректного результата

console.log(logValidate)//Вернется () => console.log('Доступ разрешен'), то есть сама функция, а не ее результат
