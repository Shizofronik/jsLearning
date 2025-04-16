//⁡⁣⁣⁢Все браузерное окружение⁡
console.log(window)
//Все свойства window глобальные и их можно вызывать и без window(но лучше так не делать)
console.log(screen)
console.log('Высота:', innerHeight)//То же самое что и window.innerHeight
console.log('Ширина:', innerWidth)

//⁡⁣⁣⁢BOM(Brouser Object Model)⁡
console.log('navigator:', window.navigator)// Инфа о браузере
console.log('screen:', window.screen)// Инфа об экране
console.log('location:', window.location)// Инфа о URL
console.log('URL:', window.location.href)
console.log('history:', window.history)// Инфа о текущей сессии
console.log('XMLHttpRequest:', window.XMLHttpRequest)

window.localStorage.setItem('id', JSON.stringify({id: 1}))

console.log('parse:', JSON.parse(window.localStorage.getItem('id')))


//⁡⁣⁣⁢DOM(Document Object Model)⁡ DOM-дерево
// объектная модель документа для взаимодействия с содержимым страницы в виде объектов
console.log(window.document)//HTML код страницы в обертке

console.log(document.documentElement)
console.log(document.head)
console.log(document.body)//будет null, если скрипт подключен не в body

console.log('Родительский элемент body:', document.body.parentElement)
console.log('Соседний элемент перед body:', document.body.previousElementSibling)
console.log('Соседний элемент после body:', document.body.nextElementSibling)//null

console.log('Дочерние элементы body:', document.body.children)//Это не список или объект, а HTMLCollection
//HTMLCollection всегда отражает актуальное состояние DOM-дерева при обращении к HTMLCollection

//Через spread оператор преобразуем HTMLCollection в массив и переберем еe
const childrens = [...document.body.children]

childrens.forEach((child) => {
    console.log('Дочерний элемент body:', child)
})


console.log('Первый дочерний элемент body:',document.body.firstElementChild)


//⁡⁣⁣⁡⁣⁣⁢NODE(узлы)⁡

//parentNode в данном случае будет ссылаться на сам document, в остальном его поведение будет таким же
console.log('html parent:', document.documentElement.parentElement)//null
console.log('html parent:', document.documentElement.parentNode)

console.log('previous:', document.body.firstElementChild.previousElementSibling)//null
//А в этом слкчае будет ссылаться на текстовый узел "\n   "(перенос строки в самом коде)
console.log('previous:', document.body.firstElementChild.previousSibling)

//firstChild и lastChild тоже возвращают не эелементы, а текстовые узлы
console.log('first children node:', document.body.firstChild)
console.log('last children node:', document.body.lastChild)





//⁡⁣⁣⁡⁣⁣⁢Поиск элементов⁡
//getElementById()
const button = document.getElementById('button1')
console.log(button)
//Если элементов с id = button1 было бы несколько, то getElementById вернул бы первый найденный элемент
//Когда в HTML мы задаем id, у нас автоматически появляется доступ к этой глобальной переменной
console.log('button1:', button1)//Но лучше так не делать


//⁡⁣⁣⁢Поиск по CSS-селектору⁡
console.log('button by query:', document.querySelector('button'))
console.log('div by query:', document.querySelector('div'))//Вернет первый div
console.log('div by query:', document.querySelector('.myDiv'))//Поиск по классу надо указывать через "."

//Получение нескольких элементов по селектору
const listDiv = document.querySelectorAll('div')
console.log(listDiv)

//Можно находить также и элементы с разными селекторами:
console.log('all elements:', document.querySelectorAll('div, button'))

//⁡⁢⁣⁣Поиск от элемента вверх по дереву осуществляется через closest('selector')⁡

//⁡⁣⁣⁢Самый надежный способ находить элементы(data-атрибут)⁡
//В HTML добавляем к элементам data-атрибут data-js-someName
//И получаем элементы через селектор по атрибуту [data-js-someName]
console.log('button:', document.querySelector('[data-js-button1]'))
console.log('firstDiv:', document.querySelector('[data-js-firstDiv]'))
console.log('myDiv:', document.querySelector('[data-js-myDiv]'))

//https://learn.javascript.ru/searching-elements-dom#tasks 
// - решил отсюда задачку, но она буквально устная))