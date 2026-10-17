//! PODSTAWOWE ZMIENNE:
// Zmienne dot. pobrania daych z pól:
const addClientForm = document.querySelector("#add-client");

//! ZMIENNE PROGRAMOWE
const clients = []; //Tablica obiektów, z danymi klientów

//! FUNKCJA DODAJĄCA KLIENTÓW
function addClient(client) {
  console.log("Dodałeś klienta: " + client.name);
  clients.push(client);
}

function isOnlyLetters(text) {
  const rgExp = /^\p{L}+$/u;
  return rgExp.test(text);
}

function isValidCompoundName(text) {
  const rgExp = /^\p{L}+([- ]\p{L}+)*$/u;
  return rgExp.test(text);
}

// Sprawdza 1. czy nie jest pusty -> 2. czy nie jest za krótkie/długie
function verifyTextLength(text, { min = 2, max = 50 } = {}) {
  //usuniecie spacji
  text = text.trim();
  console.log(text);
  //sprawdzenie czy nie jest pusty
  if (text.length === 0) {
    console.log("[ERROR]: tekst jest pusty.");
    return false;
  }
  //sprawdzenie wymaganej dlugosci
  if (text.length < min) {
    console.log("[ERROR]: tekst zbyt krótki.");
    return false;
  }
  if (text.length > max) {
    console.log("[ERROR]: tekst zbyt długi.");
    return false;
  }

  return true;
}

function verifyData(text, { allowHyphen = false } = {}) {
  console.log("[PENDING]: Checking length");
  if (!verifyTextLength(text)) {
    return false;
  }
  if (!isOnlyLetters(text)) {
    return false;
  }
  if (allowHyphen) {
    if (isValidCompoundName(text)) {
      return true;
    }
  }
  return true;
}

function verifyClientData(client) {}

addClientForm.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();
  //! POBRANIE I WALIDACJA DANYCH Z FORMULARZA
  //destrukturyzaja pól formularza
  const { name, surname, age, email, phone } = addClientForm.elements;

  const client = {
    name: name.value,
    surname: surname.value,
    age: age.value,
    email: email.value,
    phone: phone.value,
  };

  addClient(client);

  //DEBUG: INPUT CONTROL
  //   console.log(
  //     "Nowy klient:" + name.value + " " + surename.value + " Wiek: " + age.value,
  //   );
  //   console.log("| " + email.value + " " + phone.value);

  //? dodać warunek ze reset tylko gdy formularz sie wysle i dane będą poprawne
  // reset formularza po wypisaniu
  addClientForm.reset();
});
