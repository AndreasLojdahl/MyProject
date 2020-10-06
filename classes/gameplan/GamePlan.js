const prompt = require('async-prompt');
const Messages = require('../information/Messages');
const UserInteraction = require('../userInteraction/UserInteraction')

module.exports = class GamePlan {

    hasBeenInstantieted = false
    message = new Messages();
    userInteraction = new UserInteraction();

    constructor(){
      if(GamePlane.hasBeenInstantieted){
        throw new Error('You can only create one instance of Gameplan!')
      }
    GamePlan.hasBeenInstantieted = true;
    }

    async mainMenu(){

        console.log(Messages.getGreetingMessage())
        let userChoice

        // do{

          userChoice = await prompt(Messages.getMainMenuMessage());
          this.userInteraction.getMainMenuSwitch(userChoice)


            












        // }while(userChoice !== '4')

    }
}