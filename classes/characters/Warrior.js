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

}