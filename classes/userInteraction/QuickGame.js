const Message = require("../information/Messages");
const prompt = require("async-prompt");
const Character = require("../characters/Character");
const Enums = require("../enums/Enums");
const AttackAdapter = require("../userInteraction/AttackAdapter");
const Storage = require("../data/Storage");
const SpellDecorator = require("../SpellDecorator");
module.exports = class QuickGame {

  constructor() {
  }
  
  static async enterQuickGame(character, enemy) {

    Message.showMessage(Message.getQuickMatchMessage(character));
    Message.showMessage(Message.getIntroMatchMessage(enemy));

    let playersTurn = true;
    let playerStartHealth = character.health;
    let enemyStartHealth = enemy.health;

    while (character.health > 0 || enemy.health > 0) {
      if (playersTurn) {
        let selectedSpell = Enums.inputs.wrongInput;
        while (selectedSpell === Enums.inputs.wrongInput) {
          Message.showMessage(Message.getCharacterMoveMessage());
          Message.getShowCharacterSpells(character);

          let input = await prompt("\n        choose spell: ");
          selectedSpell = this.getSelectedSpell(input, character);
        }
        let reducedHealth = enemy.health - selectedSpell.spell.dmg;
        enemy.health = reducedHealth;
        if (enemy.health <= 0) {
          break;
        }
        Message.showMessage(
          AttackAdapter.attack(character, selectedSpell.index)
        );
        Message.showMessage(
          Message.getEnemyHealthMessage(
            character,
            enemy,
            selectedSpell.spell,
            enemyStartHealth
          )
        );
        playersTurn = false;
      } else if (!playersTurn) {
        Message.showMessage("\n        The enemy makes a move towards you!");
        let randomInput = Math.floor(Math.random() * 3) + 1;
        let selectedSpell = this.getSelectedSpell(randomInput, enemy);
        let reducedHealth = character.health - selectedSpell.spell.dmg;
        character.health = reducedHealth;
        if (character.health <= 0) {
          break;
        }

        Message.showMessage(AttackAdapter.attack(enemy, selectedSpell.index));
        Message.showMessage(
          Message.getPlayerHealthMessage(
            character,
            enemy,
            selectedSpell.spell,
            playerStartHealth
          )
        );
        playersTurn = true;
      }
    }

    if (character.health > enemy.health) {
      Message.showMessage(Message.getVictoryMessage());

      if (character.level === 1) {
        SpellDecorator.learnNewSpell(character);
        Message.showMessage(Message.getNewSpellMessage());
      }
      character.level = character.level + 1;
      character.health = playerStartHealth;
    } else if (character.health < enemy.health) {
      Message.showMessage(Message.getLosingMessage());
      return character;
    }
  }

  static getSelectedSpell(input, character) {
    if (parseInt(input)) {
      let x = parseInt(input);

      if (x > character.spells.length) {
        return Enums.inputs.wrongInput;
      } else if (x === 0) {
        return Enums.inputs.wrongInput;
      }

      let intInput = parseInt(input);
      let choice = intInput - 1;

      let chosenSpell = {
        spell: character.spells[choice],
        index: choice,
      };

      return chosenSpell;
    } else {
      if (!parseInt(input)) {
        return Enums.inputs.wrongInput;
      }
    }
  }
};
