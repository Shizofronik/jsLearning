//⁡⁣⁣⁢Исключить обратные ссылки⁡
/*
Напишите функцию replacer для JSON-преобразования, которая удалит свойства, 
ссылающиеся на meetup

в результате должно быть:
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
*/

let room = {
    number: 23
};
  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
  
// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, (key, value) => {
    return (key != "" && value == meetup) ? undefined : value;
}))

//⁡⁣⁣⁢ОБЪЯСНЕНИЕ⁡
/*
Функция replacer будет вызвана для каждой пары (key, value), и в первом вызове 
будет передан специальный «объект-обёртка»: {"": meetup}.

Если мы реализуем только проверку value == meetup, то в результате получим undefined. 
Чтобы в первом вызове replacer не было удалено свойство, ссылающееся на meetup, нам также нужно 
добавить проверку key != "".
*/
  
