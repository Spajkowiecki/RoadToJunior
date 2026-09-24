// Przypomnienie programowania
// Robimy projekt który będzie sprawdzał co mamy w lodówce i na tej podstawie będzie podawał przepisy kulinarne i liczył kalorie
// Planował zakupy w sklepie
// planował tydzień posiłków

// w pierwszej kolejności planer zakupów w sklepie, dodać możliwość wpisania ceny ile się zapłaciło za produkty

//rodzaje mięsa: kurczak, indyk, wołowina, wieprzowina, baranina, cielęcina, ryby, owoce morza

const shoppingList_form = document.querySelector(".shoppingList_form");
const shoppingList_input = document.querySelector(".shoppingList_input");
const shoppingList_submit = document.querySelector(".shoppingList_submit");

//shoppingList elements
const shoppingList_product_list = document.querySelector(".shoppingList_list");
const shoppingList_product = document.querySelector("#product-template");


function productToDOM({produkt, ilosc})
{
  const shoppingList_product_clone = document.importNode(shoppingList_product.content, true);
  const productID = shoppingList_product_clone.querySelector("li");
  productID.dataset.id = crypto.randomUUID();
  const data = shoppingList_product_clone.querySelectorAll("p");
  data[0].textContent = productName;
  data[1].textContent = quantity;

  shoppingList_product_list.appendChild(shoppingList_product_clone);
}



const shoppingList = {
  productList: {}
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


//BAZA DANYCH - DODAWANIE DO LOKALNEJ BAZY DANYCH
function addToLocalDataBase()
{

}
//BAZA DANYCH - CZYSZCZENIE DO LOKALNEJ BAZY DANYCH
function clearLocalDataBase()
{

}
//BAZA DANYCH - UPDATE DO LOKALNEJ BAZY DANYCH
function updateLocalDataBase()
{

}
//BAZA DANYCH - USUWANIE DO LOKALNEJ BAZY DANYCH
function removeLocalDataBase()
{

}


shoppingList_form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Pobieram dane od uzytkownika: ");


});

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
