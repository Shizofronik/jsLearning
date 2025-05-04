//⁡⁣⁣⁡⁣⁣⁢События клавиатуры keydown and keyup⁡

document.addEventListener('keydown', (event) => {
    console.log(event)
    //Для распознавания нажатой клавиши лучше использовать свойство code 
    //так как оно не зависит от раскладки
    console.log(event.code)
})

document.addEventListener('keyup', (event) => {
    //console.log(event)
})

//⁡⁣⁣⁢Запрет ввода чисeл в input⁡
//Вообще можно просот запретить писать чот либо в input отменив дефолтное поведение
//Но лучше, для взаимодействия с input использовать специальное событие input
const inputElement = document.querySelector('[data-js-input]')

inputElement.addEventListener('keydown', (event) => {
    // ⁡⁢⁣⁣/\d/ - регулярное выражение которое включает в себя все цифры⁡
    const anyNumber = /\d/
    
    //test - проверяет есть ли в event.key содержимое регулярного выражения с цифрамиs
    if(anyNumber.test(event.key)) {
        event.preventDefault()
        console.log('Отменен ввод цифры:', event.key)
    }
})

//⁡⁣⁣⁢Событие input⁡
//Срабатывает, когда что-либо вводится в поле input
const nameOutputElement = document.querySelector('.name-output')

inputElement.addEventListener('input', () => {
    nameOutputElement.textContent = inputElement.value
})


//⁡⁣⁣⁢Событие change⁡ - срабатывает, когда при изменении пользователь убирает фокус с input'a
inputElement.addEventListener('change', (event) => {
    if(inputElement.value.length < 5 && inputElement.value.length > 0) {
        console.log(inputElement.value.length)
        inputElement.style.border = '1px solid red'
    }

    else{
        inputElement.style.border = '0px solid black'
    }
})

//⁡⁣⁣⁢Еще есть события cut, copy и past, откуда можно получать данные из буфера обмена или блокировать их⁡