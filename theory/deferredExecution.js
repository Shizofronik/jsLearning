//⁡⁣⁣⁢Отложенное выполнение setTimeout(), setInterval(), clearTumeout() и др.⁡

//⁡⁣⁣⁡⁣⁣⁢setTimeout(func, ms)⁡⁡ ...Принимает 2 аргумента - выполняемая функция и время задержки
setTimeout(() => console.log('Прошло 2 секунды!'), 2000)

const logMessasge = (name, age) => {
    console.log(`Это ${name}, ему ${age}`)
}

setTimeout(logMessasge('Вася', 23), 3000)//SetTimeout так не сработает
setTimeout(logMessasge, 3000, 'Антон', 21)//а вот так сработает
// Или так, потому что стрелочная функция вызовет logMessasge только по истечению 4х секунд
setTimeout(() => {logMessasge('Никита', 20)}, 4000)

//⁡⁢⁣⁣clearTimout⁡⁢⁣⁣()⁡⁡ - сбросить setTimeout(по факту отменяет выполнение, если его не перезапустить)

//⁡⁣⁣⁢setInterval()⁡ - выполняет переданную функцию каждые n ms

const logOne = () => {
    console.log(1)
}

let interval = setInterval(logOne, 1000)

setTimeout(clearInterval, 10_000, interval)