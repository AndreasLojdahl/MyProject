const prompt = require('async-prompt');
const Enums = require('../enums/Enums');
const Messages = require('../information/Messages');
const UserInteraction = require('../userInteraction/UserInteraction')


module.exports = class GamePlan {

    hasBeenInstantieted = false;
    userInteraction = new UserInteraction();
    
    // singleton pattern
    constructor(){
      if(GamePlan.hasBeenInstantieted){
        throw new Error('You can only create one instance of Gameplan!')
      }
    GamePlan.hasBeenInstantieted = true;
    }
  

    async mainMenu(){

        let mainMenuInput;
      
        console.log(Messages.getGreetingMessage())
    
          while(mainMenuInput !== Enums.mainMenu.QUIT ){
            let input = await prompt(Messages.getMainMenuMessage())
            mainMenuInput = await this.userInteraction.getMainMenuSwitch(input)
          }
          Messages.showMessage(Messages.getByeMessage())
    }


}