module.exports = class Character {

    name;
    race;

    constructor(name, race){
        this.name = name;
        this.race = race;
    }
    
    // template pattern
    makeSpecialGreeting(){
        this.greet()
    }

    greet(){
        throw new Error('You have to make your own greet!')
    }
}