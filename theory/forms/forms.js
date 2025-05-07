console.log('все элементы form на странице:', document.forms)

const formElement = document.querySelector('[data-js-regForm]')

/*
//⁡⁣⁣⁢Поиск элементов внутри формы по атрибуту name⁡
//formElement.elements - HTMLCollection со всеми актульными элементами формы
console.log(formElement.elements.login)
console.log(formElement.elements.password)
//Можно исключить из записи elements, все будет работать так же
console.log(formElement.gender)
*/



//⁡⁣⁣⁢Доступ к форме, к которой прявязан DOM-элемент⁡
//Это помогает при использовании многосоставных, возможно визульно разбитых, форм
const loginInputElement = formElement.login
const passwordInputElement = formElement.password
const citySelectElement = document.querySelector('#city')

console.log('login привязан к:', passwordInputElement.form)
//Изначально будет null
//Но после того как мы добавим в HTML атрибут form, будет корректное отображение
console.log('city привязан к:', citySelectElement.form)


//⁡⁣⁣⁢Получение значения с помощью value⁡
loginInputElement.addEventListener('change', (event) => {
    console.log('actual login:', event.target.value)

    if(event.target.value == 'admin') {
        console.log('login admin is incorrect')
        //⁡⁢⁣⁣С помощтью value можно и изменять содержимое loginInputElement⁡
        event.target.value = ''
    }
})



//⁡⁣⁣⁢input type radio⁡
const genderRadios = formElement.gender

console.log('Информация о поле:', genderRadios)

//для корректного отображения следует каждому radio элементу заранее установить value в HTML
console.log('Выбранный пол:', genderRadios.value)

//Проверка какой radio элемент выбран(либо как показано выше через предустановленное value)
console.log('Выбран 1й элемент:', genderRadios[0].checked, 
    'Выбран 2й элемент:', genderRadios[1].checked)

//можно и переключать checked
setTimeout(() => {
    genderRadios[1].checked = true
    console.log('Выбранный пол:', genderRadios.value)
}, 2000)




//⁡⁣⁣⁢input type checkbox⁡
const agreementCheckboxElement = formElement.agreement
console.dir(agreementCheckboxElement)

//Проверка на состояния checkbox
console.log('checkbox on:', agreementCheckboxElement.checked)


//⁡⁣⁣⁢Управление select⁡
const selectCityElement = formElement.city
//⁡⁢⁣⁣value будет равно первому элементу из списка option, если заранее не предустановлен selected⁡
console.log('value selectCityElement:', selectCityElement.value)

//Получение DOM-элементов option(это HTMLCollection)
console.log(selectCityElement.options)

//Индекс, выбранной в данный момент, опции
console.log('Индекс выбранной опции:', selectCityElement.selectedIndex)

//Изменение значения value(будет работать только если есть соответсвующий элемент option)
setTimeout(() => selectCityElement.value = 'Кемерово', 3000)
//ЛИБО
//⁡⁢⁣⁡⁢⁣⁣selectCityElement.options[i].selected = true⁡