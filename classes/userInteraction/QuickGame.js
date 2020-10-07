const Message = require('../information/Messages')
module.exports = class QuickGame {

  constructor(){

  }

  static enterQuickGame(character, enemy){

    while(character.health <= 0 || enemy.health <= 0){

      Message.showMessage(Message.getQuickMatchMessage())


    }

  }

}