/*
Фибоначчи
последовательность Фибоначчи — это ряд чисел, где каждое последующее 
является суммой двух предыдущих. Так, первые десять чисел выглядят следующим образом: 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Постановка

Нужно написать функцию, которая возвращает n-ную запись в определенной 
последовательности, причем n — число, которое передается в качестве аргумента функции.

fibonacci(3) // --> 2
*/

const fibonacci = n => {
    let arrFibonacci = [0, 1]

    for (let i = 2; i <= n; i++) {
        arrFibonacci[i] = arrFibonacci[i - 2] + arrFibonacci[i - 1]
    }
    return arrFibonacci[n]
}

console.log(fibonacci(9))