//this - позволяет получить доступ к определенному контексту выполнения
const user = {
    name: 'moonshine',
    age: 20,
    logThisArrow: () => { //Это кстати "метод"
        console.log('this в стрелочной функции в object: ', this)
        console.log(this.name)//выведется пустая строка(name в window)
    },
    logThis() {//Сокращенная запись function declaration
        console.log('this в function declaration в object: ', this)
        console.log(this.name)
    }


}

user.logThisArrow()//Контекст window, все потому что Arrow function не имеет своего контекста
user.logThis()//Контекст объекта user

//ЗАКРЕПИМ:
user1 = {name: 'Kira'}
user2 = {name: 'Nikita'}

function logInfo() {
    console.log('this: ', this)
    console.log('this.name: ', this.name)
}

logInfo()//this - window, name - ""

user1.logName = logInfo//Без () потому что нам надо получить ссылку на функцию, а не ее результат
user2.logName = logInfo

user1.logName()//this - user1, name - Kira
user2.logName()//this - user2, name - Nikita


//Задача с learn JavaScript #1
const calculator = {
    read() {
        this.a = Number(prompt('Введите значение a: ', 0))
        this.b = Number(prompt('Введите значение b: ', 0))
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
}

calculator.read()
console.log('sum: ', calculator.sum())
console.log('mul: ', calculator.mul())



//Задача с learn JavaScript #2 Цепь вызовов(chaining)
let ladder = {
    step: 0,
    up() {//Результат неявного возврата каждой функции это undefined
        this.step++
        return this//Сделаем явный возврат текущего контекста
    },
    down() {
        this.step--
        return this
    },
    showStep() { // показывает текущую ступеньку
        console.log('step:', this.step )
        return this
    }
}

ladder.up().up().showStep().down().showStep(); // показывает 2 затем 1





//⁡⁣⁣⁢Потеря this⁡

let someUser = {
    firstName: "Вася",
    sayHi() {
      console.log(`Привет, ${this.firstName}!`);
    }
};
  
setTimeout(someUser.sayHi, 1000); // Привет, undefined!
//для setTimeout this = window, поэтому оригинальный контекст выполнения теряется

//⁡⁢⁣⁣Решение с помощью bind⁡(привязка this)

let say = someUser.sayHi.bind(someUser)//Теперь у say всегда контекст будет user
//Теперь say это связанная функция
setTimeout(say, 1000); // Привет, Вася!

let user2 = {
    name: 'Олег',
    say(phrase) {
        console.log(`${this.name}, говорит ${phrase.toLowerCase()}`);
    }
}

let toSay = user2.say.bind(user)

user2.name = 'Дима'

toSay('привет')
toSay('Пока')

//С помощью bind можно привязать и начальные аргументы

function mul(a, b) {
    return a * b
}

let double = mul.bind(null, 2)//bind(context, [arg1], [arg2], ...)

console.log(double(3))//2 * 3
console.log(double(8))//2 * 8
