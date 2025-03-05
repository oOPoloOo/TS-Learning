/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */

const WordToFakeBinary = (word: string): number =>
{
  const removableSeparators = /[\s,;|:.?]+/g;
  let clearString: string;
  let charArray: string[];
  let counter = 1;
  let conwertedWord = "";

  clearString = word.replace(removableSeparators,'');
  charArray = clearString.split('');

  charArray.forEach(() => {    
    
    if(counter === 1){
      conwertedWord += `${counter}`;
      counter--;      
    } 
    else if(counter === 0)
      {
      conwertedWord += `${counter}`;
      counter++;     
    }  
  });
  return parseInt(conwertedWord);
}

console.log(WordToFakeBinary("Labas"));
console.log(WordToFakeBinary("Labas Krabas"));
console.log(WordToFakeBinary("Labas Krabas. ?"));