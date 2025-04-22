//⁡⁣⁣⁡⁣⁣⁢Чтение и изменение текстового содержимого элемента⁡
const boxElement = document.querySelector('.box')

console.log('текстовое содержимое boxElement:', boxElement.textContent)

//Если не нужна полная перезапись текста, то используем +=
setTimeout(() =>boxElement.textContent = 
    "Change Change Change Change Change Change Change Change Change Change Change Change Change", 5000)


//Получаем содержимое элемента с HTML разметкой
console.log('boxElement with HTML:', boxElement.innerHTML)

//Получаем весь элемент с HTML разметкой, включая сам элемент
console.log('boxElement with HTML and self: \n', boxElement.outerHTML)


//⁡⁣⁣⁢Создание элемента⁡
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

window.createBigBox = createBigBox


//⁡⁣⁣⁢Клонирование элемента⁡
let boxElementClone = boxElement.cloneNode()
console.log('boxElementClone:', boxElementClone)//поверхностное клонирование без содержимого

boxElementClone = boxElement.cloneNode(true)
console.log('boxElementClone full:', boxElementClone)//Клонирование с содержимым