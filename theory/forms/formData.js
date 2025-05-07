//⁡⁣⁣⁢Сбор данных с формы c помощью класса FormData⁡
const formElement = document.querySelector('#regForm')

formElement.addEventListener('submit', (event) => {
    //Отменяем дефолтное поведение, чтобы не перекидывало на другую страницу
    event.preventDefault()

    //В качестве аргумента для конструктора класса передаем DOM-элемент формы
    //На сервер данные можно отдавать уже в таком виде
    const formData = new FormData(formElement)

    //⁡⁣⁣⁢Методы FormData⁡
    //Добавление собственных пар ключ-значение
    //В append можно передать 3й аргумент - имя файла(для имитации input type file)
    formData.append('onValide', true)
    
    //Метод get()
    console.log('login:', formData.get('login'))

    //Метод has()
    console.log('has password:', formData.has('password'))

    //Метод delete()
    //Удаляем onValide
    formData.delete('onValide')

    console.log(Object.fromEntries(formData))
})

//⁡⁢⁣⁣from entries - из записей(перевод)⁡