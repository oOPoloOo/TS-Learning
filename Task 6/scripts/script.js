"use strict";
class Potion {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    mix(ingridients) {
        const newVolume = this.volume + ingridients.volume;
        const newColor = this.color.map((c, i) => Math.ceil((c * this.volume + ingridients.color[i] * ingridients.volume) / newVolume));
        return new Potion(newColor, newVolume);
    }
}
const felixFelicis = new Potion([255, 255, 255], 7);
const polyjuice = new Potion([51, 102, 51], 12);
const newPotion = felixFelicis.mix(polyjuice);
console.log(`newPotion: ${newPotion.color} ${newPotion.volume}`);
