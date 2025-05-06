const loginInputElement = document.querySelector('[data-js-input-login]')
const passwordInputElement = document.querySelector('[data-js-input-password]')
const buttonElement = document.querySelector('[data-js-button-login]')

//⁡⁣⁣⁢focus⁡
loginInputElement.addEventListener('focus', () => {
    console.log('В фокусе login!')
})

passwordInputElement.addEventListener('focus', () => {
    console.log('В фокусе password!')
})

buttonElement.addEventListener('focus', () => {
    console.log('В фокусе button!')
})


//⁡⁣⁣⁢blur срабатывает при потере фокуса⁡
loginInputElement.addEventListener('blur', () => {
    console.log('Потерян фокус с login!')
})

passwordInputElement.addEventListener('blur', () => {
    console.log('Потерян фокус с password!')
})

buttonElement.addEventListener('blur', () => {
    console.log('Потерян фокус с button!')
})


//⁡⁣⁣⁢Принудительное взятие элемнта в фокус⁡
//Теперь, при загрузке страницы элемент автоматически возьмется в фокус
loginInputElement.focus()//⁡⁢⁣⁣лучше задать в html autofocus⁡

//⁡⁣⁣⁢Принудительное снятие фокуса с элемнта⁡
setTimeout(() => {
        loginInputElement.blur()
    }, 5000)

//⁡⁢⁣⁢focus и blur не всплывают вверх по дом-дереву!!!⁡
//⁡⁢⁣⁣Для этого можно использовать focusin и focusout⁡(и цеплять такие события например на document)


//⁡⁢⁣⁢document.activeElement - можно в life-expression отслеживать в браузере(значок глаза в console)⁡