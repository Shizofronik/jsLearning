//ПЕРЕБОР ОБЪЕКТА
//1й вариант через for(const key in object){}
//С объектами можно работать как с массивами
const user = {
    name: 'Kira',
    age: 19,
    city: 'Moscow'
}

const userKeys = Object.keys(user)//Получение массива ключей
const userValues = Object.values(user)//Получение массива значений
console.log(userKeys)

userKeys.forEach((key) => console.log('Имя свойства:', key))//А этот массив уже можно перебрать через forEach()
userValues.forEach((value) => console.log('Значение:', value))

//Преобразование объекта в массив - entries() -> создает массив объектов с одним свойством(пары ключ-значений исходного объекта)
//Не мутирует исходный объект
const userEntries = Object.entries(user)//Получаем массив объектов([{name:'Kira}, {age: 19}, {city: 'Moscow}]) из user

let userUpper = userEntries.map(([key, value]) => {//Не забываем про возможность дестрктурируемого присваивания

    return [key.toUpperCase(), `--${value}--`]
})

console.log(userUpper)

//fromEntries - превращает массив массивов(ключ-значение) в объект
userUpper = Object.fromEntries(userUpper)
console.log(userUpper)