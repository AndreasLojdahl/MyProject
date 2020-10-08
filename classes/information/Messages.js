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

    static getQuickMatchMessage(){
        return `
        
        Welcome to quick match!
        you will now battle with an enemy for experience
        to level up your character or die and loose it forever!
        `
    }

    static getNoCharsHaveBeenCreated(){
        return `
        
        No characters have been created yet!
        `
    }

    static getWhichCharQuickMatchMessage(){
        return `
        
        Which character would you like to go to battle with?
        `
    }

    static showMessage(message){
        console.log(message)
    }

    static displayCharacters(characters){

        let count = 1

        characters.forEach(char => {

            let spells = char.spells.map(x => 
                x.name
            );

            let spellsDisplay = spells.join(', ')
            console.log(`
            CHARACTER ${count}

            Name:   ${char.name}
            Class:  ${char.class}
            Race:   ${char.race}
            health: ${char.health}
            Spells: ${spellsDisplay}
            `)
            count++;
        });
    }

    static getSelectPlayerMessage(characters){

        let count = 1;

        for(let char of characters){
            console.log(`${count}. ${char.name}, ${char.race} ${char.class} Lvl. ${char.level}`)
            count++;
        }
        // characters.forEach(char => {
        // })
    }
}