const Character = require("./Character");

module.exports = class Warrior extends Character {

    health;
    spells;
    level;
    class;

    constructor(name, race, spells){
        super(name, race)
        this.class = 'Warrior'
        this.level = 1;
        this.health = 70;
        this.spells = spells
    }

    mortalStrike(){
        return `${this.name} swings a ** MORTAL STRIKE ** at its enemy!`
    }
    bladeStorm(){
        return `${this.name} swings and spins like a ** BLADESTORM ** at its enemy!`
    }
    execute(){
        return `${this.name} storms its opponent in hope for a ** EXECUTE ** !`
    }

}