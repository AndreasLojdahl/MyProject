const CharacterInformation = require('../information/CharacterInformation')
const Message = require('../information/Messages')
const CharacterFactory = require('../factories/CharacterFactory')
const Enums = require('../enums/Enums')
const prompt = require('async-prompt');

module.exports = class UserInteraction  {

    

    constructor(){
    }

    async getWhichClassSwitch (userChoice) {

        if(Object.values(Enums.classes).includes(userChoice) || '5') {
            
            switch(userChoice){
                case Enums.classes.WARRIOR: 
                    return Enums.classes.WARRIOR;
                case Enums.classes.MAGE: 
                    return Enums.classes.MAGE;
                case Enums.classes.ASSASSIN: 
                    return Enums.classes.ASSASSIN;
                case Enums.classes.DRUID: 
                    return Enums.classes.DRUID;
                case '5': 
                    let userInput = await prompt(Message.getWhichInfoMessage())
                    return Enums.classes.DRUID;
            }
        }
        return 'error'
    }


    getWhichRaceSwitch (userChoice) {

        
        if(Object.values(Enums.races).includes(userChoice)){

            switch(userChoice){
                case Enums.races.ORC: 
                    return Enums.stringRaces.ORC;
                case Enums.races.UNDEAD: 
                    return Enums.stringRaces.UNDEAD;
                case Enums.races.TROLL: 
                    return Enums.stringRaces.TROLL;
                case Enums.races.GNOME: 
                    return Enums.stringRaces.GNOME;
                case Enums.races.ELF: 
                    return Enums.stringRaces.ELF;
                case Enums.races.HUMAN: 
                    return Enums.stringRaces.HUMAN;
            }
        }

        return 'error'
        
    }

    getWhichInfoSwitch (userChoice) {

        if(Object.values(Enums.classes).includes(userChoice)){

            switch(userChoice){
                case Enums.classes.WARRIOR: 
                    return CharacterInformation.getWarriorInfo();
                case Enums.classes.MAGE: 
                    return CharacterInformation.getMageInfo();
                case Enums.classes.ASSASSIN: 
                    return CharacterInformation.getAssassinInfo();
                case Enums.classes.DRUID: 
                    return CharacterInformation.getDruidInfo();
            }
        }
        return 'error'
    }
    getMainMenuSwitch (userChoice) {

        if(Object.values(Enums.mainMenu).includes(userChoice)){

            switch(userChoice){
                case Enums.mainMenu.CREATE:
                    this.create();
                    return null;
                case Enums.mainMenu.DISPLAY: 
                    return CharacterInformation.getMageInfo();
                case Enums.mainMenu.GAME: 
                    return CharacterInformation.getAssassinInfo();
                case Enums.mainMenu.QUIT: 
                    return CharacterInformation.getDruidInfo();
                }
            }
            return 'error'
        }
        
        async create() {
            let character = {
                class: '',
                race: '',
                name: ''
            }
            
            let userInput = await prompt(Message.getWhichClassMessage());
            character.class = this.getWhichClassSwitch(userInput)
            
            // let userInput1 = await prompt(Message.getWhichRaceMessage());
            // character.race = this.getWhichRaceSwitch(userInput1)

            character.name = await prompt(Message.getWhichNameMessage());
            
            let createdCharacter = CharacterFactory.createCharacter(character);

            console.log('Name: ' + createdCharacter.name +
            ' Race: ' +  createdCharacter.race + 
            ' class: ' + createdCharacter.class + 
            ' Health '+ createdCharacter.health+ ' created caracter!!!!!!')
            
    }

}