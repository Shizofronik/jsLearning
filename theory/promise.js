//⁡⁣⁣⁢Синхронный код в js⁡
function wait(ms, callback) {
    const now = new Date().getTime()

    while(new Date().getTime() < now + ms) {
        //ничего не делаем
    }

    callback()
}

//Все инструкции выведутся по порядку, несмотря на задержку выполнения в wait
console.log(1)
wait(2000, () => console.log(2))
console.log(3)



//⁡⁣⁣⁢Асинхронный код⁡ 
function asyncWait(ms, callback) {
    return setTimeout(callback, ms)//setTimeout() - работает асинхронно
}

console.log(4)
asyncWait(2000, () => console.log(5))//выведется после console.log(6)
console.log(6)
//⁡⁢⁣⁣EventLoop кладет асинхронные задаси в очередь и выполняет их когда основной поток свободен⁡






//⁡⁣⁣⁢Promise⁡
/*
Промис имеет три состояния:

1)⁡⁢⁣⁣pending⁡ - ожидание(по умолчанию)
2)⁡⁢⁣⁣fulfilled⁡ - успешное выполнение, получен ркзультат
3)⁡⁢⁣⁣rejected⁡ - выполнение с ошибкой

⁡⁢⁣⁣resolve⁡(может быть и другое название, это колбек функция промиса) дает состояние ⁡⁢⁣⁣fulfilled⁡
⁡⁢⁣⁣reject⁡(может быть и другое название, это колбек функция промиса) дает состояние ⁡⁢⁣⁣rejected⁡


Основные методы:
1)⁡⁢⁣⁣then()⁡ - обрабатывает fulfilled состояние
2)⁡⁢⁣⁣catch()⁡ - обрабатывает rejected состояние
3)⁡⁢⁣⁣finally()⁡ - выполнится в любом случае
*/

//⁡⁢⁣⁢ЗАДАЧКА⁡
/*
Встроенная функция setTimeout использует колбэк-функции. 
Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис, который перейдёт 
в состояние «выполнен» через ms миллисекунд, так чтобы мы могли 
добавить к нему .then:
*/

function delay(ms) {
    return new Promise(function(resolve, reject){
        setTimeout(resolve, ms)
    })
}

delay(5000).then(() => console.log('выполнилось через 5 секунд'));




//⁡⁢⁣⁢ЕЩЕ ЗАДАЧКА⁡
/*
Перепишите функцию showCircle, написанную в задании Анимация круга 
с помощью колбэка таким образом, чтобы она возвращала промис, 
вместо того чтобы принимать в аргументы функцию-callback.

Новое использование:

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});
*/

function go() {
    showCircle(150, 150, 100)
        .then(div => {
            div.classList.add('message-ball');
            div.append("Hello, world!")
            console.log('Анимирование круга прошло успешно.')
        })
        .catch(div => {
            div.classList.add('message-ball');
            div.append("грустни(((")
            console.log('Ошибка! Не удалось анимировать круг!')
        }) 
}

function showCircle(cx, cy, radius, callback) {
    
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);
    
    return new Promise(function(resolve, reject) { 
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';

            div.addEventListener('transitionend', function handler() {
            div.removeEventListener('transitionend', handler);
            resolve(div)
            reject(div)//Не выполнится
            });
        }, 0);
    })

}








//⁡⁣⁣⁡⁣⁣⁢Цепочки промисов⁡
function triple(x, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(x * 3), ms)//⁡⁢⁣⁢ВАЖНО⁡ вызвать resolve с оберткой в виде стрелочной функции
        //Иначе выводится раньше времени, пока что не выяснил почему
    })
}

triple(2, 6000)
    .then((result) => { //result - результат fulfilled промиса
        console.log(`result: ${result}`)// 6
        return result * 2})
    .then((result) => {
        console.log(`result: ${result}`)// 12
        return result * 2})
    .then((result) => console.log(`result: ${result}`))// 24