//⁡⁣⁣⁢Тормозящий (throttling) декоратор⁡
/*
Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку.
При многократном вызове он передает вызов f не чаще одного раза в ms миллисекунд.
По сравнению с декоратором debounce поведение совершенно другое:

debounce запускает функцию один раз после периода «бездействия». 
Подходит для обработки конечного результата.
throttle запускает функцию не чаще, чем указанное время ms.
Подходит для регулярных обновлений, которые не должны быть слишком частыми.

function f(a) {
  console.log(a)
}

f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

когда 1000 мс истекли ...
...выводим 3, промежуточное значение 2 было проигнорировано
*/

function f(a) {
    console.log(a)
}
  
function throttle(func, ms) {
    let isSaved = false,
        savedThis,
        savedArgs

    function wrapper() {
        if(isSaved) {
            savedThis = this
            savedArgs = arguments
            return
        }

        func.apply(this, arguments)
        isSaved = true

        setTimeout(() => {
            isSaved = false
            if(savedArgs) {
                wrapper.apply(savedThis, savedArgs)
                savedThis = savedArgs = null
            }
        }, ms)
    }
     
    return wrapper
}



let f1000 = throttle(f, 1000);
let f1200 = throttle(f, 1200);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

f1200(6)
f1200(8)
f1200(9)