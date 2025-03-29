//Встроенный объект: 𝗗𝗮𝘁𝗲. Он содержит дату и время, а также предоставляет методы управления ими.
let now = new Date()
console.log(now)

//Создать объект Date с временем, равным количеству миллисекунд (тысячная доля секунды), 
// прошедших с 1 января 1970 года UTC+3.
//𝗻𝗲𝘄 𝗗𝗮𝘁𝗲(𝘆𝗲𝗮𝗿, 𝗺𝗼𝗻𝘁𝗵, 𝗱𝗮𝘁𝗲, 𝗵𝗼𝘂𝗿𝘀, 𝗺𝗶𝗻𝘂𝘁𝗲𝘀, 𝘀𝗲𝗰𝗼𝗻𝗱𝘀, 𝗺𝘀)

let Jan01_1970 = new Date(0);//0 соответствует 01.01.1970
console.log(Jan01_1970)

// теперь добавим 24 часа и получим 02.01.1970 (24 часа * 60 минут * 60 секунд по 1000 миллисекунд)
let Jan02_1970 = new Date(24 * 3600 * 1000)
console.log(Jan02_1970)

//Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970 года, называется таймстамп
//Если аргумент всего один, и это строка, то из неё «прочитывается» дата. 
// Алгоритм разбора – такой же, как в Date.parse

let strDate = new Date('2011-11-11')
console.log(strDate)

let exactDate = new Date(2024, 2, 1, 23, 59, 59, 999)
console.log(exactDate)

//Существуют методы получения года, месяца и т.д. из объекта Date: 
//Получить год (4 цифры) ⁡⁣⁣⁢getFullYear()⁡
console.log(exactDate.getFullYear())

//Получить месяц, от 0 до 11. ⁡⁣⁣⁢getMonth()⁡
console.log(exactDate.getMonth())

//Получить день месяца, от 1 до 31, что несколько противоречит названию метода. getDate()
console.log(exactDate.getDate())

//getHours(), getMinutes(), getSeconds(), getMilliseconds() 
// Получить, соответственно, часы, минуты, секунды или миллисекунды.
console.log(exactDate.getHours(), exactDate.getMinutes(), exactDate.getSeconds(), exactDate.getMilliseconds())

//Кроме того, можно получить определённый день недели: getDay() (0 - вс, 6 - сб)
console.log(exactDate.getDay())

//Однако существуют и их UTC-варианты, возвращающие день, месяц, год для временной зоны UTC+0:\
//getUTCFullYear(), getUTCMonth(), getUTCDay(). Для их использования требуется после "get" подставить "UTC".
console.log(exactDate.getUTCHours())

//Для заданной даты возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0.
console.log(exactDate.getTime())

//Возвращает разницу в минутах между UTC и местным часовым поясом:
// если вы в часовом поясе UTC-1, то выводится 60
// если вы в часовом поясе UTC+3, выводится -180
console.log(exactDate.getTimezoneOffset())

//Установка компонентов даты
let future = new Date()

future.setYear(2030)
future.setMinutes(future.getMinutes() + 30)

console.log(future)

//Преобразование к числу
console.log(+future)//выведет таймстамп

//Измерение времени с помощью Date.now()
let start = Date.now()

for(let i = 0; i < 100_000_000; i++) {
    let doSomething = i * i * i
}

let end = Date.now()

console.log(`цикл отработал за ${end - start} миллисекунд`)


//⁡⁢⁣⁢ЗАДАЧКА⁡
//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: 
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

const getWeekDay = (date) => {
    const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    
    return days[date.getDay()]
}

let randomDay = new Date()

console.log(getWeekDay(randomDay))


//⁡⁢⁣⁢ЕЩЕ ЗАДАЧКА⁡
//Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
//К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое 
//getDateAgo(new Date(), 2) – восемнадцатое.
//Функция не должна изменять переданный ей объект date.

const getDateAgo = (date, days) => {
    let pastDate = new Date()
    pastDate.setDate(date.getDate() - days)

    return pastDate.getDate()
}

console.log(randomDay)
console.log(getDateAgo(randomDay, 8))



//⁡⁢⁣⁢ЛАСТ ЗАДАЧКА⁡
//⁡⁢Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. 
//Иногда это 30, 31 или даже февральские 28/29.
/*
Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

const getLastDayOfMonth = (year, month) => {
    let lastDayDate = new Date(year, month + 1, 0)//Даты начинаются с 1, поэтому 0 это последний день прошлого месяца

    return lastDayDate.getDate()

}

console.log(getLastDayOfMonth(2025, 4))



//⁡⁢⁣⁡⁢⁣⁢ТОЧНО ЛАСТ ЗАДА⁡⁢⁣⁢ЧКА⁡
/*
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
А именно: "год.месяц.день часы:минуты", всё в виде двух цифр, т.е. 2024.02.02 10:00.
*/

const formatDate = date => {
    let nowDate = new Date()
    let difference = nowDate - date

    switch(true) {
        case difference < 1000 && difference >= 0: {
            console.log("прямо сейчас")
            break
        }
        case difference < (1000 * 60) && difference >= 0: {
            console.log(`${(difference) / 1000} сек. назад`)
            break
        }
        case difference < (1000 *  60 * 60) && difference >= 0: {
            console.log(`${((difference) / (1000 * 60)).toFixed()} мин. назад`)
            break
        }
        default: {
            let returnData = date;
            returnData = [
              '' + returnData.getFullYear(),
              '0' + (returnData.getMonth() + 1),
              '0' + returnData.getDate(),
              '0' + returnData.getHours(),
              '0' + returnData.getMinutes()
            ].map((component) => component.slice(-2));//Берем срез(2 символа с конца)

            console.log(returnData.slice(0, 3).join('.') + ' ' + returnData.slice(3).join(':'))
            break
        }
    }
}

let date = new Date(2021, 2, 2, 23, 20, 50)

formatDate(date)