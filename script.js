//import "./theory/promise.js" - можно и так, но лучше не надо
//import * as promise from './theory/promise.js' // - импорт всех сущностей
//promise.go() -пример вызова функции при таком импорте
//Даже если импортировать только функцию go(), при импорте ваыполнится весь код модуля promise.js
//console.log(promise)//мы не увидим никаких переменных и функций(кроме go()), 
//потому что они не были экспортированны в promise.js

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

window.go = go//Скрипты с типом module не регистрируют глобальные переменные
//Крч это нужно чтобы при импорте HTML код смог найти эту функцию

function showCircle(cx, cy, radius) {
    
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

const formElement = document.querySelector('form')

function hiddenLogin() {
    formElement.hidden = true
}

function onViewLogin() {
    formElement.hidden = false
}

window.onViewLogin = onViewLogin
window.hiddenLogin = hiddenLogin


