module.exports = class Character {

    name;
    race;

    constructor(name, race){
        this.name = name;
        this.race = race;
    }

    makeSpecialGreeting(){
        this.greet()
    }

    greet(){
        throw new Error('You have to make your own greet!')
    }
}