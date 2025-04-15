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