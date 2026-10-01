//Pobieranie danych z formularza do dodawania składników:
// zapisanie formularza do zmiennej by póżniej mieć dostep do dzieci

const ingredientsForm = document.querySelector("#ingredients-form");
const ingredientsList = document.querySelector("#ingredients-list");
//ingredientList item template
const ingredientsListItem = document.querySelector("#ingredients-list-item");

const ingredients = [];
const recipe = {};

const recipes = {};
// const nameInput = ingredientsForm.elements.name;
// const amountInput = ingredientsForm.elements.amount;
// const unitSelect = ingredientsForm.elements.unit;
// const typeSelect = ingredientsForm.elements.type;

// function ingredientsList(ingredientList) {
//   for (const ingredient of ingredientList) {
//     console.log(ingredient.name);
//   }
// }

function addIngredient(ingredient) {
  ingredients.push(ingredient);

  const clone = document.importNode(ingredientsListItem.content, true);
  const li = clone.querySelector("li");
  li.dataset.id = ingredient.id;

  const span = clone.querySelectorAll("span");
  span[0].innerHTML = ingredient.name;
  span[1].innerHTML = ingredient.amount;
  span[2].innerHTML = ingredient.unit;

  ingredientsList.appendChild(clone);
}

ingredientsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //pobranie danych z pól i przypisanie ich wartości do obiektu
  // destrukturyzacja obiektu forms

  const { name, amount, unit, type } = ingredientsForm.elements;

  const newIngredient = {
    id: crypto.randomUUID(),
    name: name.value,
    amount: parseInt(amount.value),
    unit: unit.value,
    type: type.value,
  };

  addIngredient(newIngredient);
  ingredientsForm.reset();
});
