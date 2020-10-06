module.exports = class Messages {

    constructor(){
        
    }

    static getWhichRaceMessage(){
        return `
        
        Which race would you like to play as?
        1. Orc 
        2. Undead 
        3. Troll 
        4. Gnome 
        5. Elf 
        6. Human 
        : `
    }

    static getWhichClassMessage(){
        return `
        
        Which class would you like to play as?
        1. Warrior
        2. Mage 
        3. Assassin 
        4. Druid 
        5. Class info 
        :`
    }

    static getWhichInfoMessage(){
        return `
        
        Which class would you like information about?
        1. Warrior
        2. Mage 
        3. Assassin 
        4. Druid 
        5. Go back
        :`
    }

     static getWhichNameMessage(){
        return `
        
        What do you like your character to be named as? 
        :`
    }

    static getGreetingMessage(){
        return `
        
        Welcome Player!`
    }

    static getByeMessage(){
        return `
        
        Goodbye! see you soon!
        `
    }

    static getMainMenuMessage(){
        return `

        Main menu!
        1. Create Character
        2. Display Characters
        3. Play Quick Game
        4. Quit
        :`
    }

    static showMessage(message){
        console.log(message)
    }

    static displayCharacters(characters){

        

        characters.forEach(char => {

            let spells = char.spells.filter(x => {
                x.name
            })

            console.log(spells)
            let spellsDisplay = spells.join()
            console.log(`
            
            Name: ${char.name}
            Class: ${char.class}
            Race: ${char.race}
            health: ${char.health}
            Spells: ${spellsDisplay}
            `)
        });
    }
}