const Character = require("./Character");

module.exports = class Druid extends Character {
    health;
    spells;
    level;
    class;
    constructor(name, race, spells){
        super(name, race)
        this.class = 'Druid'
        this.level = 1;
        this.health = 70;
        this.spells = spells
    }
}