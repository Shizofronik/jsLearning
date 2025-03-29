//⁡⁢⁣⁢JSON - Java Script Object Notation⁡
//Это стандартизированный формат данных в виде js объекта
//1)В json объекте не может храниться функций и undefind значений
//2)Все строки в json ОБЯЗАТЕЛЬНО оборачиваются в ""
//3)В json объекте нет висячих запятых

const user = {
    name: 'Никита',
    age: 20,
    city: 'Москва',
    address: {
        street: 'Рязанский проспект',
        apartament: 1507,
    },
    hobby: ['guitar', 'programming', 'sleep', 'dota2'],
    hasDog: true,
    yacht: null,
    surName: undefined,//JSON проигнорирует это свойство
}

//Преобразование данных в JSON объект. В таком виде данные можно отправлять на сервер
const userDataAsString = JSON.stringify(user)

console.log(userDataAsString)

//Обратная операция. JSON объект -> object js
const parsedUserData = JSON.parse(userDataAsString)

console.log(parsedUserData)

//JSON может начинать свой синтаксис с [] никаких проблем с parse это не доставит