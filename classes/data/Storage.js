const Character = require("../characters/Character");

let playerCharacters = [];

const addPlayerCharacter = (character) => {
    playerCharacters.push(character)
}

const deletePlayerCharacter = (name) => {
    let newList = playerCharacters.filter(char => char.name !== name )
    playerCharacters = newList;
}

const getPlayerCharacters = () => {
    return playerCharacters;
}

module.exports = {playerCharacters, addPlayerCharacter, deletePlayerCharacter , getPlayerCharacters}