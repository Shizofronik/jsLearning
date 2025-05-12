//⁡⁢⁣⁣API - Application Programming Interface⁡
//Набор правил по каоторым части приложения общаются друг с другом

const loadPostFormElement = document.querySelector('.load-post-form')
const resultElement = document.querySelector('.result')
const postIdInputElement = document.querySelector('#post-id')

loadPostFormElement.addEventListener('submit', (event) => {
    event.preventDefault()
    //Код(try it) с free rest api - fsonplaceholder
    //⁡⁢⁣⁡⁢⁣⁣response - объект с информацией о запросе⁡
    /*response.status: 
    200-226 - Успех
    300-308 - Перенаправление
    400-499 - Ошибка во фронтенде
    500-526 - Ошибка в бэкенде
    */

    //По умолчанию fetch делает get-запрос по указонному url
    fetch(`http://localhost:3000/posts/${postIdInputElement.value}`)
        .then((response) => {
            console.log('response:', response)

            //Обработаем возможную ошибку
            if(!response.ok) {
                const errorMessage = response.status === 404 ? 
                'Пост по указанному идентификатору не найдена' : 
                'Что-то пошло не так'

                throw new Error(errorMessage)
            }

            return response.json()
        })
        .then((json) => {
            console.log('json:', json)

            const {title, id, complited, views} = json

            resultElement.innerHTML = `
                <input 
                id="post-${id}>"
                type="checkbox"
                ${complited ? "checked" : ""} />
                
                <label for="post-${id}">${title}, views: ${views}</label>`
        })
        .catch((error) => {
            console.log('error:', error)

            resultElement.innerHTML = error.message
        })
})