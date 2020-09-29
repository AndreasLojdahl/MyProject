const prompt = require('async-prompt');
const Messages = require('../information/Messages');
const UserInteraction = require('../userInteraction/UserInteraction')

module.exports = class GamePlan {

    message = new Messages();
    userInteraction = new UserInteraction();

    constructor(){

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