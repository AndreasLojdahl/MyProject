const Enums = require('../enums/Enums')
const Assassin = require('../characters/Assassin')
const Warrior = require('../characters/Warrior')
const Mage = require('../characters/Mage')
const Druid = require('../characters/Druid')

let spells = {
    WARRIOR: [
        {name: 'Mortal Strike', dmg: 15},
        {name: 'Bladestorm', dmg: 10},
        {name: 'Execute', dmg: 20}
    ],
    MAGE: [
        {name: 'Frost Bolt', dmg: 15},
        {name: 'Arcane Nova', dmg: 10},
        {name: 'FireBall', dmg: 20}
    ],
    ASSASSIN: [
        {name: 'Stab', dmg: 15},
        {name: 'Poison', dmg: 10},
        {name: 'Ambush', dmg: 20}
    ],
    DRUID: [
        {name: 'Nature Bolt', dmg: 15},
        {name: 'MoonFire', dmg: 10},
        {name: 'Heal', dmg: 20}
    ],
};

module.exports = class CharacterFactory {
     
    
  

    constructor(){

        
    }

    // shall get a character obj {name: '', race: '', class: ''}
    static createCharacter(character){
       
        if(Object.values(Enums.classes).includes(character.class)){
            switch(character.class){
                case Enums.classes.WARRIOR:{
                    let newChar = new Warrior(character.name, character.race, spells.WARRIOR)
                    return newChar;
                }
                case Enums.classes.Mage:{
                    let newChar = new Mage(character.name, character.race, spells.MAGE )
                    return newChar;
                }
                case Enums.classes.ASSASSIN:{
                    let newChar = new Assassin(character.name, character.race, spells.ASSASSIN )
                    return newChar;
                }
                case Enums.classes.DRUID:{
                    let newChar = new Druid(character.name, character.race, spells.DRUID)
                    return newChar;
                }
            }

        }
        return 'error'

    }

} 