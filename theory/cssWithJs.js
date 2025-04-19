//⁡⁣⁣⁢Свойство style⁡
const boxElement = document.querySelector('.box')

console.log(boxElement.style)//Не увидим никаких значений т.к стили прописанны в отдельном файле
console.log(getComputedStyle(boxElement))//В этом случае надо использовать getComputedStyle
console.log('width:', getComputedStyle(boxElement).width)//Получение ширины

//Изменяем и добавляем css свойства с помощью js
boxElement.style.position = 'absolute'

//Или так
boxElement.style.cssText += `
    position: absolute;
    background-color: black;   
`


//⁡⁣⁣⁢Свойства className и ClassList⁡
//Добавить нашему div еще два класса и применить на него свойства этих классов
boxElement.classList.add('yellows', 'big')

//Удаление класса(для наглядности через 3 сек.)
setTimeout(() => boxElement.classList.remove('yellows'), 3000)

//toggle - удаляет класс у элемента, если он у него есть, а если его нет, то добавляет этот класс
//Вторым аргументом в toggle можно передать условие для выполнения переключения
const hasYellow = true

setTimeout(() => boxElement.classList.toggle('yellows', hasYellow), 5000)

//Проверка на наличие класса у эелемента
console.log('boxElement has class big:', boxElement.classList.contains('big'))


//⁡⁣⁣⁢Управление CSS переменными⁡
boxElement.style.setProperty('--border-color', 'green')