module.exports = class Messages {

    constructor(){
        
    }

    static getWhichRaceMessage(){
        return `
        
        Which * RACE * would you like to play as?
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
        
        Which * CLASS * would you like to play as?
        1. Warrior
        2. Mage 
        3. Assassin 
        4. Druid 
        5. Class info 
        :`
    }

    static getWhichInfoMessage(){
        return `
        
        Which * CLASS * would you like * INFORMATION * about?
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

    static getQuickMatchMessage(character){
        return `
        
        Welcome to quick match ${character.name}!
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

    static getQuickGameMessage(char){
        return `
        
        Welcome to Quick Game ${char.name}! you will now commence battle with an enemy!
        `
    }

    static getIntroMatchMessage(enemy){
        return `
        
        As you stepped onto the battlefield you felt a cold malevolent air to it,
        the wind howling past you in every which way. A red mist thrown up from
        the sheer of blood that has been spilt. As you look towards the horizon 
        there you see a blood thirsty ${enemy.race} ${enemy.class}
        `
    }

    static getCharacterMoveMessage(){

        return `
        
        Your move!
        which spell would yoou like to use?
        `
    }

    static getShowCharacterSpells(character){
    
        let count = 1;
       
        for(let spell of character.spells){
            console.log(`        ${count}. ${spell.name} - ${spell.dmg} dmg`)
            count++;
        }
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
            console.log(`        ${count}. ${char.name}, ${char.race} ${char.class} Lvl. ${char.level}`);
            count++;
        }
    }
}