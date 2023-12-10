// 1)Создать 3 ссылки без атрибутов в HTML. Нужно задать адрес каждой ссылке используя следующий массив:
// [
// "https://www.google.com/",
// "https://www.freepik.com/",
// "https://www.pexels.com/"
// ]
     const arr = ["https://www.google.com/",
     "https://www.freepik.com/",
     "https://www.pexels.com/"
     ];

     let container = document.querySelector("div");

     for( let i = 0; i < arr.length; i++){
          let atr = document.createElement("a");
          atr.href = arr[i];
          atr.textContent = "Ссылка ";
          container.appendChild(atr);
     }
//__________________________________________________________________________________________________
//      2)Создайте в HTML 3 картинки без атрибутов. Используя следующий массив,
//       задайте источник и альтернативный текст для каждой картинки.
 const images = [
     {
     alt: "lion",
     src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
     },
     {
     alt: "elephant",
     src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
     },
     {
     alt: "dog",
     src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
     }
];

let image = document.querySelectorAll("#image");
for( let i = 0; i < images.length; i++){
     element = images[i];
     image[i].src = element.src;
     image[i].alt = element.alt;
}
//____________________________________________________________________________________________________
// Создайте список с 3 пустыми пунктами в HTML документе.Используя следующий массив измените текст пунктов.
// ['Item 1', 'Item 2', 'Item 3']
const arrays = ['Item 1', 'Item 2', 'Item 3'];
let findList = document.querySelectorAll("#list li");

for( let i = 0; i < arrays.length; i++){
     findList[i].textContent = arrays[i];
}


