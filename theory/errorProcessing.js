//⁡⁣⁣⁢try catch(error)⁡

console.log('Начало кода...')

try {
    //Тут мы пробуем выполнить код
    const names = undefined

    names.forEach((name) => {
        console.log(name)
    });

    console.log('Это сообщение не выведется, если в try выше была ошибка')

    //⁡⁢⁣⁣try catch не может отловить ошибки в асинхронном коде(например при юзе setTimout())⁡
    //Но ⁣try catch можно поместить в тело самой асинхронной функции, тогда это сработает
}
catch(error) {
    //обрабатываем ошибку, если она возникла
    console.log('Возникла ошибка:', error)
    //Выполнение кода не прервется
    //⁡⁢⁣⁣error - это объект с 3-мя свойствами:⁡
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log('Конец кода...')





//⁡⁣⁣⁢throw - генерация кастомной ошибки⁡ ⁡⁣⁣⁢и класс Error⁡

try {
    const userJSON = `{
        "age": 28
    }`

    const user = JSON.parse(userJSON)
    const {name, age} = user//Способ записи свойств объекта в переменные

    //Добавляем проверку и генерим кастомную ошибку через ⁡⁣⁣⁢throw
    if(!name) {
        //throw - "бросить"
        const errorMessage =  'Name is undifined'//Создали тукст ошибки

        //Создаем ошибку через экземпляр класса Error
        throw new Error(errorMessage)//Создаем ошибку и перенаправляем ее в catch
    }

    //name будет undifined, catch не сработает без доп.проверки
    console.log(`Это ${name}, ему ${age}`)

}
catch(error) {
    console.log(`Ошибка: ${error.name} 
        ${error.message}
        ${error.stack}`) //Лучше выводить ошибку так, чтобы отлавливать неожиданные ошибки
        //Например, если мы добавим висячую запятую в JSON, то нам выведется SyntaxError
        //а не 
}





//finally
try {
    //Пытаемся выполнить код
}
catch(error) {
    //обрабатываем ошибку
}
finally{
    //ВЫполняем код при любом раскладе
    //Этот блок весгда выполняется последним
}