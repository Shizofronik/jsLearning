/*
Создайте функцию multiplyNumeric(obj), 
которая умножает все числовые свойства объекта obj на 2.
*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu)

const multiplyNumeric = obj => {
    for(let key in obj) {
        if(typeof obj[key] === 'number'){
            obj[key] *= 2
        }
    }
    return obj
}
  
console.log(multiplyNumeric(menu))