//! Podstawowe zmienne
//1. Deklaracja formularza
const form = document.querySelector("#add-client");

//TODO: Dopisać komentarz
//6. Funkcja pobierająca dane z formularza, która:
//6.1 - wysyła dane do weryfikacji
function getDataFromForm(clientData) {
  //6.1 - Weryfikacja danych:
  //console.log(clientData);
  const { clientName, clientSurname, clientAge, clientEmail, clientPhone } =
    clientData;
  console.log("ClientName: ", validateTextData(clientName, { onlyText: true }));
  console.log(
    "ClientSurname: ",
    validateTextData(clientSurname, { onlyText: true, canHaveSpecial: true }),
  );
  console.log("ClientNumber: ", validatePhoneNumber(clientPhone));
  console.log("ClientAge: ", validateAge(clientAge, { minAge: 8, maxAge: 60 }));
}

//7. Sprawdzenie: Czy pole nie jest puste
function isFieldEmpty(text) {
  return text.trim().length === 0;
}

function hasOnlyLetters(text) {
  const regex = /^\p{L}+$/u;
  return regex.test(text);
}

function hasLettersWithSpecial(text) {
  const regex = /^\p{L}+[- ]*\p{L}+$/u;
  return regex.test(text);
}

const textOptions = {
  onlyText: false,
  canHaveSpecial: false,
};

/**
 * @param {string} clientAge
 */
function validateAge(clientAge, { minAge = 8, maxAge = 60 } = {}) {
  //usuniecie spacji przed i za liczba
  const fixedNumber = clientAge.trim();

  //sprawdzenie czy pole nie jest puste
  if (isFieldEmpty(fixedNumber)) {
    console.log("Pole jest puste: " + fixedNumber);
    return false;
  }

  //sprawdzenie czy liczba nie jest NaN
  if (Number.isNaN(fixedNumber)) {
    console.log("To nie jest liczba [NaN]");
    return false;
  }

  const toNumber = Number(fixedNumber);

  if (!Number.isInteger(toNumber)) {
    console.log("To nie jest liczba całkowita");
    return false;
  }

  if (!(toNumber >= minAge && toNumber <= maxAge)) {
    console.log("Wiek jest nieprawidłowy");
    return false;
  }

  return true;
}

/**
 * @param {string} number
 */
function validatePhoneNumber(number) {
  //usuwam z numeru niepotrzebne spacje
  const fixedNumber = number.trim();
  const regexNumberLength = /^\d{9}$/;

  //sprawdzam czy tekst nie jest pusty
  if (isFieldEmpty(fixedNumber)) {
    console.log("Pole jest puste: " + fixedNumber);
    return false;
  }
  //wlasciwe przygotowanie numeru do weryfikacji, usuwam '-' i ' ', zamieiam je na ""
  const parsedNumber = fixedNumber.replace(/[ -]/g, "");

  //sprawdzanie czy wprowadzony numer jest liczbą, czy nie zawiera np. 72131234abcd <- liter

  //TODO: sprawdzic tutaj /^\d{9}$/ ten regex dot. czy numer ma 9 liczb
  if (!regexNumberLength.test(parsedNumber)) {
    console.log("Liczba nie zawiera 9 cyfr");
    return false;
  }

  return true;
}

function validateTextData(text, textOptions = {}) {
  //7.1 usuniecie pustych znakow z tekstu
  const trimedText = text.trim();
  /*
  Jeżeli trimedText da mi prawdę to robie kolejnego if'a jeżeli nie to w warunku wstawiam
  return z clg dot. z jakiego powodu nie przeszło dalej
  */
  if (isFieldEmpty(trimedText)) {
    //wypisanie odpowiedniego błędu w konsoli na czas testów
    console.log("Text jest pusty: " + trimedText);
    return false;
  }
  //przeniosłem if który ma wiecej warunków bo jest mniej ogólnikowy
  if (textOptions.onlyText && textOptions.canHaveSpecial) {
    if (hasOnlyLetters(trimedText)) {
      console.log("Test na liczby [OK]");
      return true;
    }
    if (hasLettersWithSpecial(trimedText)) {
      console.log("Test na znak specjalny [OK]");
      return true;
    }
    console.log("Test na znak specjalny [ERROR]");
    return false;
  }
  //przeniosłem niżej bo wcześniej wyłapywało mi jako pierwszy
  // warunek dot. tekstu przez co blokował drugi warunek ze znakami specjalnymi
  if (textOptions.onlyText) {
    if (hasOnlyLetters(trimedText)) {
      console.log("Test na liczby [OK]");
      return true;
    }
    console.log("Test na liczby [ERROR]");
    return false;
  }

  //sprawdzam czy tekst ma tylko litery, neguje tutaj cały warunek,
  //ponieważ jak tekst będzie miał liczby to wejdzie w ifa i wyjdzie z funkcji

  //sprawdzam czy tekt zawiera znaki specjalne tj( - )

  return false;
}

//2. Odczytanie danych z formularza
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //3. destrukturyzacja obiektu form.elements na wlasciwosci po 'name' z drzewie DOM
  const { name, surname, age, email, phone } = form.elements;

  //4. przypisanie zmiennych z destrukturyzacji do nowych zmiennych
  const clientData = {
    clientName: name.value,
    clientSurname: surname.value,
    clientAge: age.value,
    clientEmail: email.value,
    clientPhone: phone.value,
  };

  //5. Wyciągnięcie danych z formularza do funkcji
  getDataFromForm(clientData);

  form.reset();
});
