const form = document.querySelector("form");
const titleInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");

const sectionProducts = document.querySelector("#allProducts");
const h2 = document.createElement("h2");
h2.innerText = "Товаров нет!";
sectionProducts.append(h2);

let products = [];

form.onsubmit = (e) => {
    e.preventDefault();
    products.push({title: titleInput.value, price: priceInput.value});
    titleInput.value = "";
    priceInput.value = "";
    newProducts();
};

function createNode(title, price, index){
    const div = document.createElement("div");
    div.classList.add("product");

    const titleP = document.createElement("p");
    const priceP = document.createElement("p");

    titleP.innerText = title;
    priceP.innerText = price;

    const btn = closeBtn();

    btn.onclick = () => {
        sectionProducts.removeChild(div);
        
        const newProd = [];

        for(let i = 0; i < products.length; i++){
        if(i !== index) newProd.push(products[i]); 
        }
        products = newProd;

        if(!newProd.length){
            sectionProducts.innerHTML = "";
            sectionProducts.append(h2);
        }
    };

    div.append(titleP, priceP, btn);

    div.onmouseover = () => {
        btn.style.opacity = "1";
    };
    div.onmouseleave = () => {
        btn.style.opacity = "0";
    };

    sectionProducts.append(div);
}

function newProducts(){
    sectionProducts.innerHTML = "";
    for(let i = 0; i < products.length; i++){
        createNode(products[i].title, products[i].price, i);
    }
}

function closeBtn() {
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.classList.add("close");
    return btn;
}


const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.onclick = () => {
    sectionProducts.innerHTML = "";
    for(let i = 0; i < products.length; i++){
        if(products[i].title === searchInput.value){
            createNode(products[i].title, products[i].price, i);
        }
    }
};

const sortBtn = document.querySelector("#sort");
sortBtn.onclick = () => {
    products.sort((a,b) => a.price - b.price);
    newProducts();
}

const calculate = document.querySelector("#calculator");
const p = document.querySelector("p");

calculate.onclick = () => {
    let total = 0;
    for (const product of products) {
        total += +product.price;
    }
    p.innerText = `Итоговая сумма: ${total}`;
};

const deleteProducts = document.querySelector("#deleteProducts");

deleteProducts.onclick = () => {
    products = [];
    sectionProducts.innerHTML = "";
    sectionProducts.append(h2);
};

const clearSearch = document.querySelector("#clearSearch");

clearSearch.onclick = () => {
    searchInput.value = ""
    newProducts();
};