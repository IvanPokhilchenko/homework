// Создать кнопку "Создать картинку" и пустой div. При клике на кнопку
// в div создается изображение (img). Изображение произвольное.

const createButton = document.querySelector('#createImgButton');
const containerImg = document.querySelector('#containerImg');

function addImageDiv(){
    const createimg = document.createElement('img');

    let imageUrl = "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80";
    createimg.src = imageUrl;
    containerImg.appendChild(createimg);
}
createButton.addEventListener('click', addImageDiv);


// Создать кнопку и пустой div. При клике на кнопку создавать внутри
// div параграф с произвольным текстом. 

const button = document.querySelector('#presButton');
const divParagraph = document.querySelector('#par');

function addParagraph(){
const createParagraph = document.createElement('p');

createParagraph.textContent = 'Hello  World';
divParagraph.appendChild(createParagraph);
}
button.addEventListener('click', addParagraph);

