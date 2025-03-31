//⁡⁣⁣⁢Прозрачное кеширование⁡
/*
Представим, что у нас есть функция slow(x), 
выполняющая ресурсоёмкие вычисления, но возвращающая стабильные результаты. 
Другими словами, для одного и того же x она всегда возвращает один и тот же результат.
Если функция вызывается часто, то, вероятно, мы захотим кешировать (запоминать) возвращаемые ею результаты, чтобы сэкономить время на повторных вычислениях.

Вместо того, чтобы усложнять slow(x) дополнительной функциональностью, 
мы заключим её в функцию-обёртку – «wrapper», 
которая добавит кеширование.
*/

function slow(x) {
    // здесь могут быть ресурсоёмкие вычисления
    return x + 1
}

function something(n) {
    return n - 1
}


//⁡⁣⁣⁢cachingDecorator – это декоратор, специальная функция,⁡ 
//⁡⁣⁣⁢которая принимает другую функцию и изменяет её поведение.⁡
function cachingDecorator(func) { 
    let cache = new Map()//Map не будет персоздаваться для slow()

    return function(x) {
        if(cache.has(x)) {  // если кеш содержит такой x,
            return `из кеша: ${cache.get(x)}` // читаем из него результат
        }

        let result = func.call(this, x) // иначе, вызываем функцию

        cache.set(x, result); // и кешируем (запоминаем) результат
        return `result: ${result}`
    }
}

slow = cachingDecorator(slow)//Оборачиваем slow в функцию-обёртку

//Функцию cachingDecorator можно использовать повторно. Мы можем применить её к другой функции.
something = cachingDecorator(something)

console.log(slow(1))//Вычисляем и кешируем
console.log(slow(1)) //Выводим из кеша
console.log(slow(2))
console.log(slow(2))
console.log(slow(3))

console.log(`something: ${something(1)}`)
console.log(something(1))












//⁡⁣⁣⁢Применение «func.call» для передачи контекста⁡
//Упомянутый выше кеширующий декоратор не подходит для работы с методами объектов.

// сделаем worker.slow кеширующим
let worker = {
    someMethod() {
      return 2;
    },
  
    slow(x) {
      // здесь может быть страшно тяжёлая задача для процессора
      console.log(("Called with " + x));
      return x * this.someMethod(); // (*)
    }
};

worker.slow(2)//Оригинальный метод worker.slow() работает без проблем

worker.slow = cachingDecorator(worker.slow)//добавим кеширование
// worker.slow(2) - ⁡⁢⁣⁢ошибка, не удаётся прочитать свойство 'someMethod' из 'undefined'⁡
//cachingDecorator не имеет того же контекста что и worker.slow и this == undefined
//Т.е. декоратор передаёт вызов оригинальному методу, но без контекста. Следовательно – ошибка.
// func.call(context, …args)
//заменяем  ⁡⁢⁣⁣let result = func(x)⁡; на  ⁡⁢⁣⁣let result = func.call(this, x)⁡;

console.log(worker.slow(3))
console.log(worker.slow(3))// работает, не вызывая первоначальную функцию (кешируется)

//Передача контекста с помощью func.call()
function say(phrase) {
    console.log(this.name + ': ' + phrase);
}

//объект, контекст которого мы будем передавать
let user = {
    name: "John",
}

//say('Hello') - ⁡⁢⁣⁢ошибка⁡, ведь name не существует в контексте say
say.call(user, 'Hello') // 'user' становится 'this', и "Hello" становится первым аргументом












//⁡⁣⁣⁢Несколько аргументов с «func.apply»⁡
//Сделаем cachingDecorator ещё более универсальным.
//До сих пор он работал только с функциями с одним аргументом.

let company = {
    slow(min, max) {
        return min + max; // здесь может быть тяжёлая задача
      }
}

function cachingMoreDecorator(func, hash) {
    let cache = new Map()

    return function() {
        let key = hash(arguments)//arguments это object

        if(cache.has(key)) {
            return `из кеша cachingMoreDecorator: ${cache.get(key)}` 
        }

        let result = func.call(this, ...arguments)// передаёт массив как список с оператором расширения
        //Вместо func.call(this, ...arguments) мы могли бы написать func.apply(this, arguments).
        //но apply принимает arguments в качестве псевдомассива

        cache.set(key, result)
        return result
    }

    function hash(args) {
        return args[0] + ',' + args[1]
    }
}

company.slow = cachingMoreDecorator(company.slow)

console.log(company.slow(1, 7))
console.log(company.slow(1, 7))
console.log(company.slow(1, 5))
console.log(company.slow(1, 5))












//⁡⁣⁣⁢Заимствование метода⁡
//Улучшим наше хеширование чтобы оно работало на любое кол-во аргументов

function cachingMoreDecorator2(func, hash) {
    let cache = new Map()

    return function() {
        let key = hash(arguments)//arguments это object

        if(cache.has(key)) {
            return `из кеша cachingMoreDecorator2: ${cache.get(key)}` 
        }

        let result = func.call(this, ...arguments)// передаёт массив как список с оператором расширения

        cache.set(key, result)
        return result
    }

    function hash(args) {
        return [].join.call(args)//Заимствуем метод join от [] массива
        //Мы берём (заимствуем) метод join из обычного массива [].join. 
        // И используем [].join.call, чтобы выполнить его в контексте arguments.
    }
}

let company2 = {
    slow(min, max, medium, color) {
        return min + max + medium - (color ?? 0) ; // здесь может быть тяжёлая задача
      }
}

company2.slow = cachingMoreDecorator2(company2.slow)

console.log(company2.slow(2, 6, 3, 5))
console.log(company2.slow(2, 6, 3, 5))
console.log(company2.slow(2, 6, 3))
console.log(company2.slow(2, 6, 3))

//Обычно безопасно заменить функцию или метод декорированным, 
// за исключением одной мелочи. Если исходная функция предоставляет свойства, 
// такие как func.calledCount или типа того, то декорированная функция их не предоставит.


//⁡⁢⁣⁢ЗАДАЧКА⁡
/*
Создайте декоратор spy(func), который должен возвращать обёртку, 
которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.
Например:

function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

⁡⁢⁣⁣Этот декоратор иногда полезен для юнит-тестирования. 
Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.⁡
*/

function work(a, b) {
    console.log( a + b )
}

function spy(func) {

    function wrapper () {
        wrapper.calls.push([].join.call(arguments))
        func.call(this, ...arguments);        
    }

    wrapper.calls = []

    return wrapper
}

work = spy(work)

work(1, 2)
work(4, 5)
work(4, 6)

for (let args of work.calls) {
    console.log( 'call:' + args); // "call:1,2", "call:4,5"
}



//⁡⁢⁣⁢ЕЩЕ ЗАДАЧКА⁡
/*
Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. 
Например:

function f(x) {
  alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

В приведённом выше коде f – функция с одним аргументом, 
но ваше решение должно передавать все аргументы и контекст this.
*/

function f(a, b) {
    console.log( a + b )
}

//Ограниченное решение(на момент решения я не знал про setTimeout())
/*
function delay(func, ms) {

    return function () {
        let start = Date.now()

        while(true) {
            if(Date.now() - start >= ms) {
                func.call(this, ...arguments)
                break
            }
        }

    }
}
*/

function delay(f, ms) {

    return function() {
        //Используем стрелочную функцию т.к она будет брать this из delay(обертки)
        //Обычная функция возьмет this из setTimeout, где this = window
      setTimeout(() => f.apply(this, arguments), ms);
    };
  
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 2000);

f1000(1, 2)
f1500(1, 3)