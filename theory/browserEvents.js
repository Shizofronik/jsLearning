//⁡⁣⁣⁡⁣⁣⁢События⁡
/*
Примеры событий:
click,
scroll,
keydown / keyup,
mouseover / mouseout
*/

//Обработчиком события будет onclick в HTML
//Собственно, в script.js уже есть примеры обработки событий

//Еще вариант присвоения функции обработчику
const buttonElement1 = document.querySelector('[data-js-button1]')


buttonElement1.onclick = () => {
    console.log('Теперь вместо анимации круга будет console.log')
}


//⁡⁣⁣⁢Добавление нескольких обработчиков - addEventListener()⁡
const buttonHiddenLoginElement = document.querySelector('[data-js-hiddenButton]')

//В event будет содержаться вся информация о событии
//event - объект события
function logLoginMessage(event) {
    console.log('Поле ввода логина скрыто!')
    console.log(event)
    console.log(event.target)//В target содержится DOM-element на который мы кликнули
}

buttonHiddenLoginElement.addEventListener('click', logLoginMessage)

//⁡⁣⁣⁡⁣⁣⁢Удаление обработчиков - removeEventListener()⁡
const buttonCreateBox = document.querySelector('[data-js-button2]')

//удаляем обработчик с помощью другого обработчика
buttonCreateBox.addEventListener('click', () => {
    buttonHiddenLoginElement.removeEventListener('click', logLoginMessage)
    console.log('Обработчик logLoginMessage удален с buttonHiddenLoginElement')
})


//⁡⁣⁣⁢Всплытие и погружение⁡
//innerBox вложен в outerBox
const outerBoxElement = document.querySelector('[data-js-outerBox]')
const innerBoxElement = document.querySelector('[data-js-innerBox]')

//Если мы кликаем по outer, то сработает только этот обработчик
outerBoxElement.addEventListener('click', () => {
    console.log('Клик по внешнему box')
})

//Если же мы кликнем по inner, то произойдет всплытие и outer обработчик тоже сработает
innerBoxElement.addEventListener('click', () => {
    console.log('Клик по внутреннему box')
})

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
//Наглядность всплытия события
//Всплытие происходит до document

//⁡⁣⁣⁢Перехват и остановка всплытия⁡
//для остановки всплытие в обработчике у event следует вызвать stopPropagation()

//Теперь подсвечиваться будет только innerBoxElement
/*
⁡⁢⁣⁣innerBoxElement.addEventListener('click', (event) => event.stopPropagation())⁡
*/

//stopImmediatePropagation() - отменит не только всплытие, но и все остальные обработчики элемента
//прописанные ниже чем огбработчик с stopImmediatePropagation()

/*
⁡⁢⁣⁣innerBoxElement.addEventListener('click', (event) => event.stopImmediatePropagation())⁡
*/

//Не стоит забывать о возможности перехватить событие на этапе погружения
//передав 3-м аргументом в addEventListener()- true