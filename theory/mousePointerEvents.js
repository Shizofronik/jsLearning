const sectionBottomElement = document.querySelector('.bottom')


//⁡⁣⁣⁢mousemove - событие движения мыши над элементом⁡
sectionBottomElement.addEventListener('mousemove', () => {
    console.log('Mouse move on bottom section')
})



//⁡⁣⁣⁢mouseover и mouseout - попадание мыши на элемент и выход мыши с элемeнта⁡
//При попаданиии на дочерний элемент, может сработать повторно
sectionBottomElement.addEventListener('mouseover', (event) => {
    console.log('курсор навели на элемент')
    console.log('relatedTarget:', event.relatedTarget)//Предыдущий таргет курсора
})

sectionBottomElement.addEventListener('mouseout', () => {
    console.log('курсор увели с элемента')
})

sectionBottomElement.addEventListener('click', () => {
    console.clear()
})


//⁡⁢⁣⁡⁢⁣⁣Еще есть mouseenter и mouseleave, которые не учитывают движения курсора по дочерним элементам⁡

//⁡⁣⁣⁢mousedown, mouseup and click⁡ and dblclick
//1 - всегда mousedown, 2 - mouseup, 3 - click, но при условии что сработали mousedown и mouseup
const mouseButtonElement = document.querySelector('.mousetest')

//Срабатывает когда зажимается ЛКМ на элементе
mouseButtonElement.addEventListener('mousedown', () => {
    console.log('1. mousedown')
})

//Срабатывает когда ЛКМ отжимается с элемента
mouseButtonElement.addEventListener('mouseup', () => {
    console.log('2. mouseup')
})

mouseButtonElement.addEventListener('click', () => {
    console.log('3. click')
})

//двойной клик
mouseButtonElement.addEventListener('dblclick', () => {
    console.log('4. dblclick')
})

//ПКМ по элементу
mouseButtonElement.addEventListener('contextmenu', () => {
    console.log('5. contextmenu')
})


//⁡⁣⁣⁡⁣⁣⁢События указателя: pointer events⁡
/*
-   pointermove
-   pointerdown
-   pointerup
-   pointerover
-   pointerout
-   pointerenter
-   pointerleave
-   pointercancel
-   gotpointercapture
-   lostpointercapture

pointer события точно корректно будут работать на всех устроиствах
в.т.ч. и на телефонах лучшая поддержка тачскринов

в свойствах pointer events можно найти PointerType который 
отображает был произведен клик, тач или стилус(pen)

также есть свойства для взаимодействия с мультитачем
*/