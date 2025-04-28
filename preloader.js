//Теперь поймаем конец анимации preloader
const preloaderElment = document.querySelector('.preloader')

//animationend - событие конца анимации элемента
preloaderElment.addEventListener('animationend', (event) => {
    if(event.animationName === 'fade-out'){
        //Вызываем метод dispatchEvent для добавления кастомного события
        //И в этом же методе создаем новое событие preloaderClose с помощью экземпляра класса Event
        //bubbles: true - значит что событие будет всплывать по DOM-дереву к document
        preloaderElment.dispatchEvent(new Event('preloaderClose', {bubbles: true}))
    }
})