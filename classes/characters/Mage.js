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

    frostBolt(){
        return `

        ${this.name} shoots a chilly ** FROST BOLT ** at its enemy!`
    }
    arcaneNova(){
        return `

        ${this.name} shoots a ** ARCANE NOVA ** at its enemy!`
    }
    fireBall(){
        return `
        
        ${this.name} shoots a smoldering hot ** FIRE BALL ** at its enemy! !`
    }
}