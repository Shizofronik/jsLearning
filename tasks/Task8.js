/*
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
*/

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]

const anagram = (arr) => {
    let map = new Map();

    for(let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('')
        map.set(sorted, word)//задаем ключ-значение, ключ отсортирован поэтому не будет обновляться при анаграммах
        //в word будет передаваться последняя анагрмма[aer: era]
    }

    const noAnagrams = Array.from(map.values())//СУКА, В МАССИВ ПРЕВРАЩАЕМ С ПОМОЩЬЮ Array.from

    return noAnagrams
}

console.log(anagram(arr))