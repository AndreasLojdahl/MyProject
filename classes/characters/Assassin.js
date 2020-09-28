const Character = require("./Character");

module.exports = class Assassin extends Character {
    health;
    spells;
    level;
    constructor(name, gender, type){
        super(name, gender, type)
        this.level = 1;
        this.health = 70;
        this.spells = [
            {name: 'Stab', dmg: 15},
            {name: 'Poison', dmg: 10},
            {name: 'Ambush', dmg: 20}
        ];
    }
}