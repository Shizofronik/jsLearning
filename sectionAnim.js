const sectionElements = document.querySelectorAll('section')
const sectionBottomElement = document.querySelector('.bottom')

console.log(sectionElements)

function animateSection(sectionElements) {
    sectionElements.forEach((sectionElement) => {
        sectionElement.classList.add('is-visible')
        console.log(sectionElement)
    })
}

//Вешаем обработчик события на document и в нем запускаем animateSection
//таким обраазом модульные части не пересекаются между собой и не усложняют код
document.addEventListener('preloaderClose', () => {
    animateSection(sectionElements)
    //Отдельно анимируем bottom секцию
    sectionBottomElement.style.transform = 'translateY(0vh)'
})