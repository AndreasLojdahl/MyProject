module.exports = class Messages {

    constructor(){

    }

    getWhichRaceMessage(){
        return `Which race would you like to play as?
        1. Orc - 2. Undead - 3. Troll - 4. Gnome - 5. Elf - 6. Human : `
    }

    getWhichClassMessage(){
        return `Which class would you like to play as?
        1. Warrior - 2. Mage - 3. Assassin - 4. Druid - 5. more info :`
    }

    getWhichNameMessage(){
        return `What do you like your character to be named as? :`
    }

    getWhichGenderMessage(){
        return `What gender do want to play as?
        1. Female - 2. Male`
    }

    getGreetingMessage(){
        return `Welcome Player! lets start off by creating your own character! :`
    }
}