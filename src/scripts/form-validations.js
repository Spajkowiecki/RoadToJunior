const formOptions = {
  canHaveLetters: false,
  canHaveNumbers: false,
  canHaveSpecials: false,
};

/*

RODZAJE PÓL KTÓRE BĘDĘ CHCIAŁ WALIDOWAĆ PO PRZEZ WPROWADZENIE DANYCH BEZ RADIO & CHECKBOX'A & OPTIONS

- TEKST (miejscowość)
- TEKST + ZNAK SPECJALY (dwa imiona, dwa nazwiska)

- LICZBA (wiek, waga, numer budynku, lokum)
- LICZBA + ZNAK SPECJALNY (zip-code, numer telefonu, numer domu/lokal)


*/
//Litery i znaki specjalne
//Tylko litery
/**
 * @param {string} text the value should be STRING type
 * @returns {boolean} returns true if arg: text has only letters,
 *          returns false if arg: text has numbers
 */
const hasLettersAndSpecials = (text) => /^\p{L}+[- ]?\p{L}+$/.test(text);

//Tylko litery
/**
 * @param {string} text the value should be STRING type
 * @returns {boolean} returns true if arg: text has only letters,
 *          returns false if arg: text has numbers
 */
const hasOnlyLetters = (text) => /^\p{L}+$/u.test(text);

//Tylko liczby
/**
 * @param {string} number the value should be INT type
 * @returns {boolean} returns true if arg: number has only numbers,
 *          returns false if arg: number has numbers & text
 */
const hasOnlyNumbers = (text) => /^\d+$/.test(text);

//Tekst zawierający znaki specjalne
