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
    div.style.marginTop = '30px'
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


const boxElement = document.querySelector('.box')
const newBoxElement = document.createElement('div')

function createBigBox() {
    newBoxElement.classList.add('box', 'big')
    newBoxElement.textContent = 'Новый блок!!!'
    newBoxElement.style.marginTop = '20px'
    
    console.log(newBoxElement)
    //Если хотим добавить в начало, то использовать prepend
    //document.body.append(newBoxElement)

    boxElement.style.marginTop = '150px'
    //before - создать перед элементом(boxElement)
    //after - создать после элемента
    boxElement.before(newBoxElement)
}

window.onViewLogin = onViewLogin
window.hiddenLogin = hiddenLogin
window.createBigBox = createBigBox


//⁡⁣⁣⁢Всплытие и погружение⁡
//innerBox вложен в outerBox
const outerBoxElement = document.querySelector('[data-js-outerBox]')
const innerBoxElement = document.querySelector('[data-js-innerBox]')

function highlight(element, event) {
    let ms = 0
    //Сделаем простенькую задержку, если клик был не по currentTarget элементу
    if(event.currentTarget !== event.target){
        ms = 1000
    }
    setTimeout(() => {
        let defaultBorder = element.style.borderColor;
        let defaultTransition = element.style.transition;
        
        element.style.transition = "border-color 1s";
        element.style.borderColor = "#FDFF47";
    
        setTimeout(function()
        {
            element.style.borderColor = defaultBorder;
            setTimeout(function() {
                element.style.transition = defaultTransition;
            }, 1000);
        }, 1000);
    }, ms)

}
//Подсветятся оба элемента
innerBoxElement.addEventListener('click', (event) => highlight(innerBoxElement, event))
//Подсветится только outer
outerBoxElement.addEventListener('click', (event) => highlight(outerBoxElement, event))