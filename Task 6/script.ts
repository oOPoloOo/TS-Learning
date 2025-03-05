/* ------------------------------ TASK 6 ---------------------------------------------------------------
Sukurkite klasę "Potion", kuri sukuria objektus su 2 savybėm ir 1 metodu:

Savybės:
  color(masyvas tryjų spalvų 0-255), volume
Metodas: 
  mix(potion) - Pateikiamas kitas eliksyras ir jiedu sumaišomi į vieną naują eliksyrą, kuris yra grąžinamas kaip naujas Klasės objektas.

Pvz.: 
  felix_felicis     =  Potion([255, 255, 255],  7)
  polyjuice         =  Potion([ 51, 102,  51], 12)
  new_potion        =  felix_felicis.mix(polyjuice)

  new_potion.color  =  [127, 159, 127]
  new_potion.volume =  19
------------------------------------------------------------------------------------------------------ */

type NumericRange
<
    START extends number,
    END extends number,
    ARR extends unknown[] = [],
    ACC extends number = never
> 
= ARR['length'] extends END
    ? ACC | START | END
    : NumericRange<START, END, [...ARR, 1], ARR[START] extends undefined ? ACC : ACC | ARR['length']>

type ColorNumber = NumericRange<0,255>;
type ColorArray = [ColorNumber, ColorNumber, ColorNumber];


// Gal taip geriau butu, bet konstruktoriai pagavo.
// type MixedArrayType = ColorNumber | number[];

class Potion {
  color?: number[];
  colorChecked?: ColorArray;
  volume: number;

  constructor( volume: number, color?: number[], colorChecked?: ColorArray)
  {    
    if(colorChecked) this.colorChecked = colorChecked;  
    if(color) this.color = color;    
    this.volume = volume;
  } 
 
  mix(ingridients: Potion): Potion {
    const newVolume = this.volume + ingridients.volume;

    const newColor = this.color.map((c, i) =>
      Math.round((c * this.volume + ingridients.color[i] * ingridients.volume) / newVolume)
    );
    
    return new Potion(newColor, newVolume);
  }
 
}

// Example usage
const felixFelicis = new Potion([255, 255, 255], 7);
const polyjuice = new Potion([51, 102, 51], 12);
const newPotion = felixFelicis.mix(polyjuice);