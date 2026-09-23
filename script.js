// Przypomnienie programowania
// Robimy projekt który będzie sprawdzał co mamy w lodówce i na tej podstawie będzie podawał przepisy kulinarne i liczył kalorie
// Planował zakupy w sklepie
// planował tydzień posiłków

// w pierwszej kolejności planer zakupów w sklepie, dodać możliwość wpisania ceny ile się zapłaciło za produkty

//rodzaje mięsa: kurczak, indyk, wołowina, wieprzowina, baranina, cielęcina, ryby, owoce morza

const shoppingList_form = document.querySelector("#shoppingList");
const shoppingList_input = document.querySelector(".shoppingInput");
const shoppingList_submit = document.querySelector(".shoppingSubmit");

console.log(shoppingList_input);

const shoppingList = {
  needToBuy: ["pomidor", "ogórek", "sałata", "fasola", "ziemniak"],
};

const meat = {};

//warzywa
const vegetables = {};

//owoce
const fruits = {};

//lodowka - jest to magazyn tego co aktualnie mamy dostępne
const FREEZER = {};

// szafka na produkty suche - jest to magazyn tego co aktualnie mamy dostępne
const BOX = {};

//kamis, knorr, vegeta, sól, pieprz, curry, chili, oregano, bazylia, tymianek, rozmaryn
const spicies = {};

//cukier, mąka, kasza, ryż, makaron, płatki owsiane, bułka tarta, proszek do pieczenia, soda oczyszczona
const ingredients = {};

const dayName = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Niedziela",
];

const monthName = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień",
];

//

// w pierwszej kolejności muszę zrobić funkcje by dało dodawać się rzeczy do listy zakupowej. Lista musi być zrobiona w HTML'u
//function that adds items to the shopping list

function addItemToShoppingList(item) {
  shoppingList.needToBuy = [...shoppingList.needToBuy, item.toLowerCase()];
}

function removeFromShoppingList(item) {
  //nazwa przedmiotu do zmiennej
  const nazwaPrzedmiotu = item.toLowerCase();
  if (shoppingList.needToBuy.includes(nazwaPrzedmiotu)) {
    //szukam index przedmiotu
    let indexItemu = shoppingList.needToBuy.indexOf(nazwaPrzedmiotu);
    //usuwam przedmiot po indeksie
    shoppingList.needToBuy.splice(indexItemu, 1);
    console.log(
      "usunięto z tablicy: " +
        item +
        ", zostało [" +
        shoppingList.needToBuy.length +
        "]",
    );
  } else console.log("w koszyku nie ma " + item);
}

function clearShoppingList() {
  if (shoppingList.needToBuy.length > 1) {
    console.log("Usunięto " + shoppingList.needToBuy.length + " elementów");
  } else console.log("koszyk jest pusty");
}

function whatIsOnShoppingList() {
  return console.log(shoppingList.needToBuy);
}
// - SPRAWDZIC DLACZEGO TO SIE NIE WYSYŁA
shoppingList_submit.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputValue = shoppingList_input.textContent;
  console.log(inputValue);
});
