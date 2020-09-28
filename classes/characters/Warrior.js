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
            {name: 'Mortal Strike', dmg: 15},
            {name: 'Bladestorm', dmg: 10},
            {name: 'Execute', dmg: 20}
        ];
    }
}