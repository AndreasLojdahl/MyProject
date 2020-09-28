
const prompt = require('async-prompt');
const Messages = require('./classes/information/Messages')


const message = new Messages();

async function test() {

    let newCharacter = {
        class: '',
        name: '',
        gender: '',
        race: ''
    }
    console.log(message.getGreetingMessage())
    newCharacter.class = await prompt(message.getWhichClassMessage());
    newCharacter.gender = await prompt(message.getWhichGenderMessage());
    newCharacter.race = await prompt(message.getWhichRaceMessage());
    newCharacter.name = await prompt(message.getWhichNameMessage());
   
  }
  test();