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

    natureBolt(){
        return `
        
        ${this.name} shoots a ** NATURE BOLT ** at its enemy!`
    }
    moonFire(){
        return `
        
        ${this.name} shoots a glowing ** MOONFIRE ** at its enemy!`
    }
    heal(){
        return `
        
        ${this.name} shoots a maxed out ** STARFIRE ** at its enemy in full moonkin form Kiyaah!`
    }
}