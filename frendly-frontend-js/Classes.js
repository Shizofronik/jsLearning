//Class - это шаблон
//⁡⁢⁣⁡⁢⁣⁡⁢⁣⁣_имя - это условный синтаксис для приватных свойств и методов, которые не следует использовать вне класса⁡

class Student {
    //Задаем свойства класса
    planet = 'Земля'
    country = 'Россия'//дефолт значения

    //⁡⁢⁣⁣Свойства для использования только внутри класса⁡
    #city

    //Любой класс должен иметь конструктор
    //⁡⁢⁣⁣‍Он выполняется автоматически при создании экземпляра класса⁡

    constructor(name, age, country) { //Принимаем в параметры имя и возраст
        this.name = name //Передаем значения в свойства объекта
        this.age = age //⁡⁢⁣⁡⁣⁣⁡⁢⁣⁡⁢⁣⁢this ссылается на контекст выполнения конкретного экземпляра ⁡

        //Возможный вариант замены дефолтного значения country
        if(country !== undefined) {
            this.country = country
            this.#someSecretAction()
        }

    }

    //⁡⁢⁣⁡⁢⁣⁣Геттер и сеттер⁡
    set city(value) {
        const firstLetter = value[0].toUpperCase()
        const fromSecondLetter = value.slice(1).toLowerCase()

        //#city - приватное свойство с которым можно работать только внутри класса
        this.#city = `${firstLetter}${fromSecondLetter}`
    }

    get city() {
        return `г. ${this.#city}`
    }

    logAge() {
        console.log(this.age)
    }

    //Анологично - # значит приватный метод
    #someSecretAction() {
        console.log('Установили не дефолтное значение для страны')
    }
}

//Создаем экземпляр класса Student
const firstStudent = new Student('Никита', 20, 'Италия')
const secondStudent = new Student('Кира', 19, 'Финляндия')

console.log(firstStudent)//⁡⁢⁣⁡⁢⁣⁣Автоматически срабатывает геттер⁡
console.log(secondStudent)

//Вызываем методы класса
firstStudent.logAge()
secondStudent.logAge()




//⁡⁢⁣⁢Геттеры и сеттеры⁡
//Неявная установка или замена значения свойства

firstStudent.planet = 'Марс' //⁡⁢⁣Автоматически срабатывает сеттер
console.log(firstStudent)

//Явная установка через сеттер(set city()) с кастомной логикой записи
firstStudent.city = 'мОСква'

//console.log(firstStudent.#city) - ⁡⁢⁣⁢ошибка, приватное свойство⁡
console.log(firstStudent.city)//Используем геттер


class Country {
    //Статическое свойство, его можно получить через сам класс
    //Но нельзя использовать для экземпляров класса
    static population = 150_000_000_000

    constructor(name) { //Принимаем в параметры имя
        this.name = name
        //⁡⁢⁣⁢this.logPopulation() - ошибка⁡
        Country.logPopulation()
    }

    //Статический метод не может использовать this
    static logPopulation() {
        console.log(Country.population)
    }
}

console.log(Country.population)//обращаемся к статическому свойству через класс Country

const russia = new Country('Россия')

console.log(russia)//population не отобразится
Country.logPopulation()


//⁡⁢⁣⁢НАСЛЕДОВАНИЕ⁡

class Person {
    
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        console.log(`${this.name} ест`)
    }

    sleep() {
        console.log(`${this.name} cпит`)
    }
}

const examplePerson = new Person('Дмитрий', 20)

//⁡⁢⁣⁣Создаем класс Developer, который наследуется от Person⁡
//Developer является полной копией класса Person, но может иметь дополнительные методы и свойства
class Developer extends Person {
    //⁡⁢⁣⁣Переопределение конструктора⁡(дублируем name и age т.к они были в Person)
    constructor (name, age, expirience) {
        super(name, age)
        this.expirience = expirience
    }
    //Developer содержит в себе методы класса Person
    writeCode() {
        console.log(`${this.name} пишет код...`)
    }

    //⁡⁢⁣⁣Переопределяем метод sleep для Developer⁡
    sleep() {
        console.log(`${this.name} не хочет спать, он идет писать код`)
        this.writeCode()
    }
}

//⁡⁢⁣⁣JavaScriptDeveloper уже наследуется от Developer и Person⁡⁡(т.к Developer сам наследуется от Person)
class JavaScriptDeveloper extends Developer{

    makeFrontend() {
        console.log(`${this.name} пишет фронтенд`)
    }

    eat() {
        //С помощью super вызываем eat из родительского класса(Developer)
        super.eat()
        console.log(`${this.name} смотрит уроки по js`)
    }
}



const exampleDeveloper = new Developer('Андрей', 19, 5)
const exampleJsDeveloper = new JavaScriptDeveloper('Никита', 20, 4)

console.log(`Опыт работы ${exampleDeveloper.name}: ${exampleDeveloper.expirience}`)

//examplePerson.writeCode() - ⁡⁢⁣⁢ошибка, т.к writeCode принадлежит только классу Person⁡
exampleDeveloper.writeCode()
exampleDeveloper.eat()//Метод, который Developer унаследовал от Person
exampleDeveloper.sleep()
examplePerson.sleep()//Метод в классе Person работает по прежнему
exampleJsDeveloper.sleep()
exampleJsDeveloper.makeFrontend()
exampleJsDeveloper.eat()