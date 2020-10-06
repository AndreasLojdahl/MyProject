const Character = require("../characters/Character");


module.exports = class Storage {
    
    StorageHasBeenInstantieted = false;

    playerCharacters = [];
    
    constructor(){
        if(Storage.StorageHasBeenInstantieted){
            throw new Error('You can only create one instance of Storage!')
        }
        Storage.StorageHasBeenInstantieted = true;
    }

    getPlayerCharacters = () => {
        return playerCharacters;
    }

    deletePlayerCharacter = (name) => {
        let newList = playerCharacters.filter(char => char.name !== name )
        playerCharacters = newList;
    }

    addPlayerCharacter = (character) => {
        playerCharacters.push(character)
    }
}