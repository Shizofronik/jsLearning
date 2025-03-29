/*
Анаграмма

Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, 
причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки 
препинания в расчет не берутся.

anagram('finder', 'Friend') --> true
anagram('hello', 'bye') --> false
*/

const anagram = (str1, str2) => {
    //.replace(/[^A-Za-z]+/g, '') заменяет все символы, которые не являются буквами на ''
    const sortedStr1 = str1.replace(/[^A-Za-z]+/g, '').toLowerCase().split('').sort().join('')
    const sortedStr2 = str2.replace(/[^A-Za-z]+/g, '').toLowerCase().split('').sort().join('')
    
    if(sortedStr1 !== sortedStr2) {
        return false
    }

    return true
}

console.log(anagram('finder, e', 'Frieend'))
console.log(anagram('hello', 'bye'))
console.log(anagram('Зда рова,', 'Здарова'))
console.log(anagram('Zdarova', 'Здарова'))