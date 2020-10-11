module.exports = class Storage {
  storageHasBeenInstantieted = false;

  playerCharacters = [];

  constructor() {
    if (Storage.storageHasBeenInstantieted) {
      throw new Error("You can only create one instance of Storage!");
    }
    Storage.StorageHasBeenInstantieted = true;
  }

  getPlayerCharacters = () => {
    return this.playerCharacters;
  };

  deletePlayerCharacter = (name) => {
    let newList = this.playerCharacters.filter((char) => char.name !== name);
    this.playerCharacters = newList;
  };

  addPlayerCharacter = (character) => {
    this.playerCharacters.push(character);
  };
};
