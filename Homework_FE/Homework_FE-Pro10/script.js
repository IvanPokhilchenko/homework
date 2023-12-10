// Создать counter.  Страница с параграфом с числом(изначально 0) и  
// двумя кнопками “+” и “-”  и при нажатии на какую-либо 
// число должно меняться в соответствующую сторону.
// Значение counter не должно слетать при перезагрузке страницы.

const counterPar = document.querySelector("#counter");
const incrementBtn = document.querySelector("#incBtn");
const decrementBtn = document.querySelector("#decBtn");

let number = +localStorage.getItem("counterValue");

counterPar.textContent = number;

incrementBtn.onclick = () => {
    number++;
    counterPar.innerText = number;
    localStorage.setItem("counterValue", number);
};

decrementBtn.onclick = () => {
    number--;
    counterPar.innerText = number;
    localStorage.setItem("counterValue", number);
};


