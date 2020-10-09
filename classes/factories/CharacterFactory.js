const Enums = require("../enums/Enums");
const Assassin = require("../characters/Assassin");
const Warrior = require("../characters/Warrior");
const Mage = require("../characters/Mage");
const Druid = require("../characters/Druid");

module.exports = class CharacterFactory {
  static spells = {
    WARRIOR: [
      { name: "mortalStrike", dmg: 15 },
      { name: "bladeStorm", dmg: 10 },
      { name: "execute", dmg: 20 },
    ],
    MAGE: [
      { name: "frostBolt", dmg: 15 },
      { name: "arcaneNova", dmg: 10 },
      { name: "fireBall", dmg: 20 },
    ],
    ASSASSIN: [
      { name: "stab", dmg: 15 },
      { name: "poison", dmg: 10 },
      { name: "Ambush", dmg: 20 },
    ],
    DRUID: [
      { name: "natureBolt", dmg: 15 },
      { name: "moonFire", dmg: 10 },
      { name: "starFire", dmg: 20 },
    ],
  };

  constructor() {}

  // shall get a character obj {name: '', race: '', class: ''}
  static createCharacter(character) {
 
    if (Object.values(Enums.classes).includes(character.class)) {
      switch (character.class) {
        case Enums.classes.WARRIOR: {
          let newChar = new Warrior(
            character.name,
            character.race,
            this.spells.WARRIOR
          );
          return newChar;
        }
        case Enums.classes.MAGE: {

          let newChar = new Mage(
            character.name,
            character.race,
            this.spells.MAGE
          );
          return newChar;
        }
        case Enums.classes.ASSASSIN: {
          let newChar = new Assassin(
            character.name,
            character.race,
            this.spells.ASSASSIN
          );
          return newChar;
        }
        case Enums.classes.DRUID: {
          let newChar = new Druid(
            character.name,
            character.race,
            this.spells.DRUID
          );
          return newChar;
        }
      }
    }
    return "error";
  }
};
