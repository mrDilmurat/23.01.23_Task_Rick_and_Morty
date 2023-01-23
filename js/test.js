// Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
// Используйте fetch. Отобразите на странице имена персонажей из
// Рика и Морти в list.
// (Вы можете стилизовать страницу по желанию.)
// */

let arr = [];
let res = fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) =>
    data.results.forEach((item) => {
      arr.push(item);
    })
  );

setTimeout(() => {
  console.log(arr);
    fetch("http://localhost:8005/characters", {
      method: "POST",
      body: JSON.stringify(arr),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
  });
}, 1000);



let list2 = document.querySelector(".list2");

function getDataFromDataBase() {
        let promise =  fetch("http://localhost:8007/characters")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            data[0].forEach((item) => {
                list2.innerHTML += `<li><img class="img" src="${item.image}" alt="">  ${item.name}</li>`;
            });
          });
      }

  
  getDataFromDataBase();



/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/
