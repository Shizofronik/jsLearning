//Просуммировать зпшки

const salaries  = {
    oleg: 60_000,
    nikita: 130_000,
    dmitry: 100_000,
    kira: 120_000,
}

const sum = (obj) => {
    return (sumSalaries = Object.values(obj).reduce((accumulator, salaries) => {
        return accumulator + salaries
    }, 0))
}

console.log(sum(salaries))

//ЛИБО

const sum2 = (obj) => {
    let sum = 0

    for(let key in obj) {
        sum += obj[key]
    }

    return sum
}

console.log(sum2(salaries))