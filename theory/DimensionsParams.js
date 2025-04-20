//⁡⁣⁣⁢Размеры DOM-элементов⁡
const boxElement = document.querySelector('.box')

//Высота и ширина считаются вместе со всеми border и scrollbar
console.log('Полная ширина:', boxElement.offsetWidth)
console.log('Полная высота:', boxElement.offsetHeight)

//border
console.log('Ширина левой рамки:', boxElement.clientLeft)
console.log('Ширина верхней рамки:', boxElement.clientTop)

//Высота и ширина без учета border и scrollbar
console.log('Ширина без учета рамки и скроллбара:', boxElement.clientWidth)
console.log('Высота без учета рамки и скроллбара:', boxElement.clientHeight)

//Scrollbar(размеры прокрученных областей)
//Выполним автоматическую прокрутку
boxElement.scroll({
    top: 30,
    behavior: "smooth"//плавность прокрутки
})

//Если прокрутки не было, то 0
setTimeout(() => console.log('Высота прокрученной по вертикали области:', boxElement.scrollTop), 1000)
//Для горизонтали можно использовать scrollLeft



//⁡⁣⁣⁢Координаты⁡
//Всего есть 2 системы координат: относительно окна браузера и относительно всей страницы
const boxElementRectParams = boxElement.getBoundingClientRect()
console.log(boxElementRectParams)//Координаты отсюда идут относительно окна браузера

//Координаты скролла страницы
console.log('Координаты скролла страницы по x и y:', window.scrollX, window.scrollY)

//Координаты относительно всей страницы
console.log(boxElementRectParams.x + window.scrollX, boxElementRectParams.y + window.scrollY)

//Получение ширины и высоты вьюпорта (текущего окна)
const htmlElement = document.documentElement

console.log('Width:', htmlElement.clientWidth)
console.log('Height:', htmlElement.clientHeight)

//Размеры страницы
console.log('Ширина страницы:', htmlElement.scrollWidth)
console.log('Высота страницы:', htmlElement.scrollHeight)//Иногда scrollHeight ведет себя некорректно

const fullPageHeight = Math.max(
    htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
    document.body.clientHeight, document.body.scrollHeight, document.body.offsetHeight
)

console.log('Наверняка корректная высота страницы:', fullPageHeight)


//⁡⁣⁣⁢scrollIntoView()⁡ -  позволяет проскроллить страницу до видимости определенного элеменa
//Такой скролл лучше обернуть в небольшой таймер, чтобы страница точно успела отрисоваться 
boxElement.scrollIntoView({
    behavior: 'smooth'
})