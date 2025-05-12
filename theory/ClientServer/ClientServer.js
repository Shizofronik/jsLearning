//⁡⁢⁣⁣API - Application Programming Interface⁡
//Набор правил по каоторым части приложения общаются друг с другом

const loadTodoFormElement = document.querySelector('.load-todo-form')
const resultElement = document.querySelector('.result')
const todoIdInputElement = document.querySelector('#todo-id')

loadTodoFormElement.addEventListener('submit', (event) => {
    event.preventDefault()
    //Код(try it) с free rest api - fsonplaceholder
    //⁡⁢⁣⁡⁢⁣⁣response - объект с информацией о запросе⁡
    /*response.status: 
    200-226 - Успех
    300-308 - Перенаправление
    400-499 - Ошибка во фронтенде
    500-526 - Ошибка в бэкенде
    */
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoIdInputElement.value}`)
        .then((response) => {
            console.log('response:', response)

            //Обработаем возможную ошибку
            if(!response.ok) {
                const errorMessage = response.status === 404 ? 
                'Задача по указанному идентификатору не найдена' : 
                'Что-то пошло не так'

                throw new Error(errorMessage)
            }

            return response.json()
        })
        .then((json) => {
            console.log('json:', json)

            const {title, id, complited} = json

            resultElement.innerHTML = `
                <input 
                id="todo-${id}>"
                type="checkbox"
                ${complited ? "checked" : ""} />
                
                <label for="todo-${id}">${title}</label>`
        })
        .catch((error) => {
            console.log('error:', error)

            resultElement.innerHTML = error.message
        })
})