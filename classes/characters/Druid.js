const Character = require("./Character");

module.exports = class Druid extends Character {
    health;
    spells;
    level;
    constructor(name, gender, type){
        super(name, gender, type)
        this.level = 1;
        this.health = 70;
        this.spells = [
            {name: 'Nature Bolt', dmg: 15},
            {name: 'MoonFire', dmg: 10},
            {name: 'Heal', heal: 20}
        ];
    }
}