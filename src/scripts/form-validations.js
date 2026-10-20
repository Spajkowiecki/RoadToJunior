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
export const hasLettersAndSpecials = (text) => /^\p{L}+[- ]?\p{L}+$/.test(text);

//Tylko litery
/**
 * @param {string} text the value should be STRING type
 * @returns {boolean} returns true if arg: text has only letters,
 *          returns false if arg: text has numbers
 */
export const hasOnlyLetters = (text) => /^\p{L}+$/u.test(text);

//Tylko liczby
/**
 * @param {string} number the value should be INT type
 * @returns {boolean} returns true if arg: number has only numbers,
 *          returns false if arg: number has numbers & text
 */
export const hasOnlyNumbers = (text) => /^\d+$/.test(text);

//Sprawdzam czy nie jest puste
//Tylko liczby
/**
 * @param {string} text the value should be an string after trim;
 * @returns {boolean} returns true if the text field is empty, after triming the spaces, false if is there a value
 */
export const isEmpty = (text) => text.length === 0;
