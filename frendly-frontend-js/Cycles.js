//WHILE(используется относительно редко т.к иногда случаются утечки памяти, js не может освободить память)
let count = 0

while (count < 10){
    console.log(count)
    count++
}


//DO WHILE
let num = 100

do {
    console.log(num)
    count++
} while (count < 10)


//FOR
for (let i = 0; i < 2; i++){

    alert(i)
}


//continue - позволяет мгновенно перейти на следующею итерация цикла
for (let i = 0; i < 10; i++){

    if(i % 2 === 0){ //Пропускаем все четные числа с помощью continue
        continue
    }

    console.log(`i = ${i}`)

}