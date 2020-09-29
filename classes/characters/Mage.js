const Character = require("./Character");

module.exports = class Mage extends Character {
    health;
    spells;
    level;
    class;
    constructor(name, race, spells){
        super(name, race)
        this.class = 'Mage'
        this.level = 1;
        this.health = 70;
        this.spells = spells
    }
}