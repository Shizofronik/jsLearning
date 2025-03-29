//⁡⁣⁣⁢Преобразуйте объект в JSON, а затем обратно в обычный объект⁡

let user = {
    name: "Василий Иванович",
    age: 35
};

const userDataAsString = JSON.stringify(user)

console.log(user)
console.log(userDataAsString)

user = JSON.parse(userDataAsString)

console.log(user)