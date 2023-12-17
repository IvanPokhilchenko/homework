// const form = document.querySelector("#search");
// const searchInput = document.querySelector("#searchInput");
// const cocktailsSection  = document.querySelector("#cocktails");

// async function fetchCocktails(name){
//   const response =  await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  
//   if(!response.ok){
//     throw new Error("Error fetching cocktails");
//   }

//   const data = await response.json();
  
//   return data.drinks;
// }

// function displayCocktails(listOfCocktails){
//   cocktailsSection.innerHTML = "";

//   if(!listOfCocktails){
//     const noResult = document.createElement("h1");
//     noResult.innerText = "No results found!";
//     cocktailsSection.append(noResult);
//     return;
//   }

//   listOfCocktails.forEach((cocktail) => {
//     const cocktailCard = document.createElement("div");
    
//     const cocktailTitle = document.createElement("h2");
//     cocktailTitle.innerText = cocktail.strDrink;
//     cocktailCard.append(cocktailTitle);

//     const cocktailImg = document.createElement("img");
//     cocktailImg.src = cocktail.strDrinkThumb;
//     cocktailImg.alt = cocktail.strDrink;
//     cocktailCard.append(cocktailImg);

//     const ingridientsList = document.createElement("ul");

//     for(let i = 1; i <= 15; i++){
//       const ingridient = cocktail[`strIngredient${i}`];
//       const measure = cocktail[`strMeasure${i}`];
//       if( ingridient && measure){

//         const item = document.createElement("li");
//         item.innerText = `${ingridient} - ${measure}`;
//         ingridientsList.append(item);

//       } else if(ingridient && !measure){

//         const item = document.createElement("li");
//         item.innerText = `${ingridient}`;
//         ingridientsList.append(item);

//       }
//     }
//     cocktailCard.append(ingridientsList);

//     const instructions = document.createElement("p");
//     instructions.innerText = cocktail.strInstructions;
//     cocktailCard.append(instructions);

//     cocktailsSection.append(cocktailCard);
//   });
// }

// form.onsubmit = async (e) => {
//   e.preventDefault();
  
//   try{
//     const cocktails = await fetchCocktails(searchInput.value);
//     displayCocktails(cocktails);
//   } catch(error){
//     console.log(error.message);
//   }
// };
//___________________________________________________________________




const form = document.querySelector("#search");
    const searchInput = document.querySelector("#searchInput");
    const cocktailsSection = document.querySelector("#cocktails");
    const modal = document.querySelector("#modal");
    const modalContent = document.querySelector("#modalContent");

    async function fetchCocktails(letter) {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);

      if (!response.ok) {
        throw new Error("Error fetching cocktails");
      }

      const data = await response.json();

      return data.drinks;
    }

    function displayCocktails(listOfCocktails) {
      cocktailsSection.innerHTML = "";

      if (!listOfCocktails) {
        const noResult = document.createElement("h1");
        noResult.innerText = "No results found!";
        cocktailsSection.append(noResult);
        return;
      }

      listOfCocktails.forEach((cocktail) => {
        const cocktailCard = document.createElement("div");
        cocktailCard.classList.add("cocktailCard");

        const cocktailTitle = document.createElement("h2");
        cocktailTitle.innerText = cocktail.strDrink;
        cocktailCard.append(cocktailTitle);

        const cocktailImg = document.createElement("img");
        cocktailImg.src = cocktail.strDrinkThumb;
        cocktailImg.alt = cocktail.strDrink;
        cocktailCard.append(cocktailImg);

        const ingridientsList = document.createElement("ul");

        for (let i = 1; i <= 15; i++) {
          const ingridient = cocktail[`strIngredient${i}`];
          const measure = cocktail[`strMeasure${i}`];
          if (ingridient && measure) {
            const item = document.createElement("li");
            item.innerText = `${ingridient} - ${measure}`;
            ingridientsList.append(item);
          } else if (ingridient && !measure) {
            const item = document.createElement("li");
            item.innerText = `${ingridient}`;
            ingridientsList.append(item);
          }
        }
        cocktailCard.append(ingridientsList);

        const instructions = document.createElement("p");
        instructions.innerText = cocktail.strInstructions;
        cocktailCard.append(instructions);

        cocktailCard.onclick = () => {
          openModal(cocktail);
        };

        cocktailsSection.append(cocktailCard);
      });
    }

        async function fetchCocktailDetailsById(id) {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

      if (!response.ok) {
        throw new Error("Error fetching cocktail details");
      }

      const data = await response.json();

      return data.drinks[0];
    }



    form.onsubmit = async (e) => {
      e.preventDefault();

      try {
        const cocktails = await fetchCocktails(searchInput.value.charAt(0));
        displayCocktails(cocktails);
      } catch (error) {
        console.log(error.message);
      }
    };


   async function openModal(cocktail){
    
      modalContent.innerHTML = "";
    const spans = document.createElement("span");
    spans.classList.add("close");
    spans.innerHTML = "&times;";
    modalContent.appendChild(spans);

      const cocktailTitle = document.createElement("h2");
      cocktailTitle.innerText = cocktail.strDrink;
      modalContent.appendChild(cocktailTitle);

      const cocktailImg = document.createElement("img");
      cocktailImg.src = cocktail.strDrinkThumb;
      cocktailImg.alt = cocktail.strDrink;
      modalContent.appendChild(cocktailImg);

      const ingridientsList = document.createElement("ul");

      for (let i = 1; i <= 15; i++) {
        const ingridient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];

        if (ingridient && measure) {
          const item = document.createElement("li");
          item.innerText = `${ingridient} - ${measure}`;
          ingridientsList.appendChild(item);
        } else if (ingridient && !measure) {
          const item = document.createElement("li");
          item.innerText = `${ingridient}`;
          ingridientsList.appendChild(item);
        }
      }
      modalContent.appendChild(ingridientsList);

      const instructions = document.createElement("p");
    instructions.innerText = cocktail.strInstructions;
    modalContent.append(instructions);

  //   spans.onclick = () => {
  //   modal.style.display = "none";
  // };
  
window.onclick = (e) => {
  if(e.target === modal || e.target === spans) {
      modal.style.display = "none";
  }
};

      modal.style.display = "block";
      document.body.classList.add("modal-open");
    }
