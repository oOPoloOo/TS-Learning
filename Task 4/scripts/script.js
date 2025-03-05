"use strict";
const WordToFakeBinary = (word) => {
    const removableSeparators = /[\s,;|:.?]+/g;
    let clearString;
    let charArray;
    let counter = 1;
    let conwertedWord = "";
    clearString = word.replace(removableSeparators, '');
    charArray = clearString.split('');
    charArray.forEach(() => {
        if (counter === 1) {
            conwertedWord += `${counter}`;
            counter--;
        }
        else if (counter === 0) {
            conwertedWord += `${counter}`;
            counter++;
        }
    });
    return parseInt(conwertedWord);
};
console.log(WordToFakeBinary("Labas"));
console.log(WordToFakeBinary("Labas Krabas"));
console.log(WordToFakeBinary("Labas Krabas. ?"));
