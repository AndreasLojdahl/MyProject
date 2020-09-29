const Character = require("./Character");

module.exports = class Assassin extends Character {
    health;
    spells;
    level;
    class;
    constructor(name, race, spells){
        super(name, race)
        this.class = 'Assassin'
        this.level = 1;
        this.health = 70;
        this.spells = spells
    }
}