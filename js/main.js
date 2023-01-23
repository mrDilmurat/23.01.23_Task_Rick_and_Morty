// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch. Отобразите на странице имена персонажей из 
Рика и Морти в list.
(Вы можете стилизовать страницу по желанию.)
*/

let list = document.querySelector(".list");

let promise = fetch("https://rickandmortyapi.com/api/character");
promise
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.results);
    data.results.forEach((item) => {
      // console.log(item.name);
      list.innerHTML += `<li><img class="img" src="${item.image}" alt="">  ${item.name}</li>`;
    });
  });

/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

let btn = document.querySelector(".btn");

btn.addEventListener("click", async function () {
  await addHero();
});

// addHero();
 function sentRequest() {
  let promise =  fetch("http://localhost:8005/characters")
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((item) => {
        
      });
    });
}



async function addHero(arr) {
  let data = await getData();
  // console.log(data);

  fetch("http://localhost:8000/characters", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}

// console.log(arr, "arr");
// console.log(arr, "arr");

// addHero();
/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.


/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/

// let promis = fetch("http://localhost:8000/characters")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
