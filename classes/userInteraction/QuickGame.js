const Message = require('../information/Messages')
const prompt = require('async-prompt');
const Character = require('../characters/Character');
const Enums = require('../enums/Enums');
const AttackAdapter = require('../userInteraction/AttackAdapter')
module.exports = class QuickGame {

  constructor(){

  }

  static async enterQuickGame(character, enemy){
    
    Message.showMessage(Message.getQuickMatchMessage(character))
    Message.showMessage(Message.getIntroMatchMessage(enemy))

    let charactersTurn = true;
  
    while(character.health >= 0 || enemy.health >= 0){

        if(charactersTurn){
          let userInput = Enums.inputs.wrongInput;
          while(userInput === Enums.inputs.wrongInput){
            
            Message.showMessage(Message.getCharacterMoveMessage())
            Message.getShowCharacterSpells(character);
            let input = await prompt('\n        choose spell:\n ')
            let selectedSpell = this.getSelectedSpell(input, character);
            Message.showMessage(AttackAdapter.attack(character, selectedSpell.index))


          }

          console.log(input)
        }


    }

  }

  static getSelectedSpell(input, character){

    if(parseInt(input)){
      let x = parseInt(input)

      if(x > character.spells.length){
          return Enums.inputs.wrongInput;
          
      }else if(x === 0){
          return Enums.inputs.wrongInput  
      }

      
      let intInput = parseInt(input)
      let choice = intInput-1
      // let idx = choice
      // let spe = character.spells[choice]

      let chosenSpell = {
        spell: character.spells[choice],
        index: choice
      }
        
      return (chosenSpell);

    }else{

      if(!parseInt(input)){
          return Enums.inputs.wrongInput
      }
      
    }

  }

}