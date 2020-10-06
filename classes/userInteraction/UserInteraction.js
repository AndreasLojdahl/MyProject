const CharacterInformation = require('../information/CharacterInformation')
const Message = require('../information/Messages')
const CharacterFactory = require('../factories/CharacterFactory')
const Storage = require('../data/Storage')
const Enums = require('../enums/Enums')
const prompt = require('async-prompt');

module.exports = class UserInteraction  {

    storage = new Storage;

    constructor(){
    }

    async getWhichClassSwitch (userChoice) {

        let moreCharInfo = Enums.inputs.goBack

        if(Object.values(Enums.classes).includes(userChoice) || userChoice === Enums.inputs.moreCharInfo) {
            
            switch(userChoice){
                case Enums.classes.WARRIOR: 
                    return Enums.classes.WARRIOR;
                case Enums.classes.MAGE: 
                    return Enums.classes.MAGE;
                case Enums.classes.ASSASSIN: 
                    return Enums.classes.ASSASSIN;
                case Enums.classes.DRUID: 
                    return Enums.classes.DRUID;
                case Enums.inputs.moreCharInfo:
                    while(moreCharInfo === Enums.inputs.goBack){
                        let input = await prompt(Message.getWhichInfoMessage())
                        moreCharInfo = this.getWhichInfoSwitch(input)
                    }
                    Message.showMessage(moreCharInfo)
                    return 'error'
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
                case Enums.inputs.goBack:
                    return Enums.inputs.goBack;
            }
        }
        return 'error'
    }
    async getMainMenuSwitch (userChoice) {

        if(Object.values(Enums.mainMenu).includes(userChoice)){

            switch(userChoice){
                case Enums.mainMenu.CREATE:
                    await this.createCharacter();
                    return;
                case Enums.mainMenu.DISPLAY: 
                    await this.displayCharacters();
                case Enums.mainMenu.GAME: 
                    return CharacterInformation.getAssassinInfo();
                case Enums.mainMenu.QUIT: 
                    return Enums.mainMenu.QUIT
                }
            }
            return 'error'
    }
        
    async createCharacter() {

            let character = {
                class: '',
                race: '',
                name: ''
            }

            let inputRace
            let inputClass
            

            let charRace = Enums.inputs.wrongInput;
            let charClass = Enums.inputs.wrongInput;
            
            while(charClass === Enums.inputs.wrongInput){
                inputClass = await prompt(Message.getWhichClassMessage())
                charClass = await this.getWhichClassSwitch(inputClass)
            }
            character.class = charClass;

            while(charRace === Enums.inputs.wrongInput){
                inputRace = await prompt(Message.getWhichRaceMessage())
                charRace = this.getWhichRaceSwitch(inputRace)
            }
            character.race = charRace;

            character.name = await prompt(Message.getWhichNameMessage())

            let createdCharacter = CharacterFactory.createCharacter(character)

            this.storage.addPlayerCharacter(createdCharacter)

            Message.showMessage(`
            
            You have created a new Character!`)

            console.log(
            ' Name: ' + createdCharacter.name +
            ' Race: ' +  createdCharacter.race + 
            ' class: ' + createdCharacter.class + 
            ' Health '+ createdCharacter.health+ ' created caracter!!!!!!')
            
    }

    async displayCharacters(){

        // do I want to fetch data here and then pass it elsewhere like this? 
        //or do I make a introduce method in each character and just do a displayMethod in storage or message class?
        if(this.storage.getPlayerCharacters().length > 0){
            let chars = this.storage.getPlayerCharacters();
            Message.displayCharacters(chars);

        }else {
            Message.showMessage('No Characters Have Been Created!')
        }

    }

}