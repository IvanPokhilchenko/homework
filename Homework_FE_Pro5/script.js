// Создайте массив из объектов. Каждый объект имеет 2 ключа en и ru.
// В свойстве en написано слово на английском, а в свойстве ru на русском. 
// Необходимо реализовать карточки, при нажатии на которые слова с русского меняются на английский и обратно.
// Меняете с помощью классов, без innerText!


const texts = [
    {en: "Hello", ru: "Привет"},
    {en: "What is your name?", ru: "Как Вас зовут?"},
    {en: "Where are you from?", ru: "Откуда Вы родом?"},
    {en: "How are you?", ru: "Как Ваши дела?"}
];
const divs = document.createElement("div");
divs.className = "container";

for(let i = 0; i < texts.length; i++){
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = "Карточка";
    let isEnglish = true;

card.onclick = () => {
    if (isEnglish) {
        card.textContent = texts[i].ru;
        card.classList.remove('english');
        card.classList.add('russian');
    } else {
        card.textContent = texts[i].en;
        card.classList.remove('russian');
        card.classList.add('english');
    }
    isEnglish = !isEnglish; 
}

    divs.append(card);
}
document.body.append(divs);
