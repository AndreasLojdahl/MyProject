const prompt = require('async-prompt');
const promptly = require('promptly')
const readline = require('readline');
const Enums = require('../enums/Enums');
const Messages = require('../information/Messages');
const UserInteraction = require('../userInteraction/UserInteraction')

module.exports = class GamePlan {

    hasBeenInstantieted = false
    message = new Messages();
    userInteraction = new UserInteraction();

    constructor(){
      if(GamePlan.hasBeenInstantieted){
        throw new Error('You can only create one instance of Gameplan!')
      }
    GamePlan.hasBeenInstantieted = true;
    }
  

    async mainMenu(){
        // const rl = readline.createInterface({
        //   input: process.stdin,
        //   output: process.stdout
        // })
        let mainMenuInput;
        let userChoice;
        let input;

        console.log(Messages.getGreetingMessage())
        // let question = Messages.getMainMenuMessage();

        // rl,question(question, (answer) => {
        //   if(answer !== exit){
        //     this.userInteraction.getMainMenuSwitch(answer)
        //   }else{
        //     rl,close()
        //   }
        // })

        
        // while(userChoice !== exit){
          while(mainMenuInput !== Enums.mainMenu.QUIT ){
            input = await prompt(Messages.getMainMenuMessage())
            mainMenuInput = await this.userInteraction.getMainMenuSwitch(input)
          }

          Messages.showMessage(Messages.getByeMessage())
        //  }



            












        

    }


}