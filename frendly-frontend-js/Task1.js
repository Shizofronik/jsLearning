/*
ПАЛИНДРОМ
Дана строка; нужно написать функцию, которая позволяет вернуть значение true, 
если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы 
и знаки препинания.

palindrome('racecar') === true
palindrome('table') === false
*/

const palindrome = someString => {
    someString = someString.toLowerCase()

    const arr = someString.split('')
    const arrInverse = [...arr].reverse()

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] !== arrInverse[i]){
            return false
        }
    }

    return true
}

/*
Более короткое и менее ресурсозатаратное(по идее) решение:

const palindrome = str => {
  // turn the string to lowercase
  str = str.toLowerCase()
  // reverse input string and return the result of the
  // comparisong
  return str === str.split('').reverse().join('')//разделяем в массив, переаорачиваем массив, соединяем массив в строку
}
*/

console.log(palindrome('racecar'))
console.log(palindrome('table'))
console.log(palindrome('Amamama'))