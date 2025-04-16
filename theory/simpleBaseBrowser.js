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