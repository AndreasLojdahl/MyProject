const CharacterInformation = require("../information/CharacterInformation");
const Message = require("../information/Messages");
const CharacterFactory = require("../factories/CharacterFactory");
const Storage = require("../data/Storage");
const Enums = require("../enums/Enums");
const prompt = require("async-prompt");
const QuickMatch = require("../userInteraction/QuickGame");

module.exports = class UserInteraction {
  storage = new Storage();

  constructor() {}

  async getWhichClassSwitch(userChoice) {
    let moreCharInfo = Enums.inputs.goBack;

    if (
      Object.values(Enums.classes).includes(userChoice) ||
      userChoice === Enums.inputs.moreCharInfo
    ) {
      switch (userChoice) {
        case Enums.classes.WARRIOR:
          return Enums.classes.WARRIOR;
        case Enums.classes.MAGE:
          return Enums.classes.MAGE;
        case Enums.classes.ASSASSIN:
          return Enums.classes.ASSASSIN;
        case Enums.classes.DRUID:
          return Enums.classes.DRUID;
        case Enums.inputs.moreCharInfo:
          while (moreCharInfo === Enums.inputs.goBack) {
            let input = await prompt(Message.getWhichInfoMessage());
            moreCharInfo = this.getWhichInfoSwitch(input);
          }
          Message.showMessage(moreCharInfo);
          return "error";
      }
    }
    return "error";
  }

  getWhichRaceSwitch(userChoice) {
    if (Object.values(Enums.races).includes(userChoice)) {
      switch (userChoice) {
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

    return "error";
  }

  getWhichInfoSwitch(userChoice) {
    if (Object.values(Enums.classes).includes(userChoice)) {
      switch (userChoice) {
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
    return "error";
  }
  async getMainMenuSwitch(userChoice) {
    if (Object.values(Enums.mainMenu).includes(userChoice)) {
      switch (userChoice) {
        case Enums.mainMenu.CREATE:
          await this.createCharacter();
          return;
        case Enums.mainMenu.DISPLAY:
          this.displayCharacters(Enums.display.CHARS);
          return;
        case Enums.mainMenu.GAME:
          await this.selectCharacterForQuickMatch();
          return;
        case Enums.mainMenu.QUIT:
          return Enums.mainMenu.QUIT;
      }
    }
    return "error";
  }

  async createCharacter() {
    let character = {
      class: "",
      race: "",
      name: "",
    };

    let inputRace;
    let inputClass;

    let charRace = Enums.inputs.wrongInput;
    let charClass = Enums.inputs.wrongInput;

    while (charClass === Enums.inputs.wrongInput) {
      inputClass = await prompt(Message.getWhichClassMessage());
      charClass = await this.getWhichClassSwitch(inputClass);
    }
    character.class = charClass;

    while (charRace === Enums.inputs.wrongInput) {
      inputRace = await prompt(Message.getWhichRaceMessage());
      charRace = this.getWhichRaceSwitch(inputRace);
    }
    character.race = charRace;

    character.name = await prompt(Message.getWhichNameMessage());

    let createdCharacter = CharacterFactory.createCharacter(character);

    this.storage.addPlayerCharacter(createdCharacter);

    Message.showMessage("\n        You have created a character!");
    createdCharacter.makeSpecialGreeting();
  }

  displayCharacters(display) {
    if (display === Enums.display.CHARS) {
      if (this.storage.getPlayerCharacters().length > 0) {
        let chars = this.storage.getPlayerCharacters();
        Message.displayCharacters(chars);
      } else {
        Message.showMessage(Message.getNoCharsHaveBeenCreated());
      }
    } else if (display === Enums.display.QUICKMATCHCHARS) {
      if (this.storage.getPlayerCharacters().length > 0) {
        Message.getSelectPlayerMessage(this.storage.getPlayerCharacters());
      } else {
        Message.showMessage(Message.getNoCharsHaveBeenCreated());
      }
    }
  }

  getWhichCharToQuickMatch(input) {
    if (parseInt(input)) {
      let x = parseInt(input);

      if (x > this.storage.getPlayerCharacters().length) {
        return Enums.inputs.wrongInput;
      } else if (x === 0) {
        return Enums.inputs.wrongInput;
      }

      let intInput = parseInt(input);
      let choice = intInput - 1;
      return choice;
    } else {
      if (!parseInt(input)) {
        return Enums.inputs.wrongInput;
      }
    }
  }

  createRandomEnemy() {
    let enemyChar = {
      class: "",
      race: "",
      name: "",
    };

    let classesLength = Math.floor(Math.random() * 4) + 1;
    let classesLengthStr = classesLength.toString();
    enemyChar.class = classesLengthStr;

    let racesLength = Math.floor(Math.random() * 6) + 1;
    let racesLengthStr = racesLength.toString();
    enemyChar.race = this.getWhichRaceSwitch(racesLengthStr);

    enemyChar.name = "Enemy";
    let createdRandomEnemy = CharacterFactory.createCharacter(enemyChar);
    return createdRandomEnemy;
  }

  async doQuickMatch(selectedChar) {
    let enemy = this.createRandomEnemy();

    let deleteCharacter = await QuickMatch.enterQuickGame(selectedChar, enemy);
    if (deleteCharacter) {
      this.storage.deletePlayerCharacter(deleteCharacter.name);
    }
  }

  async selectCharacterForQuickMatch() {
    if (this.storage.getPlayerCharacters().length > 0) {
      let selectedChar;
      let whichChar = Enums.inputs.wrongInput;
      while (whichChar === Enums.inputs.wrongInput) {
        Message.showMessage(Message.getWhichCharQuickMatchMessage());
        this.displayCharacters(Enums.display.QUICKMATCHCHARS);
        let input = await prompt("\n        Select Character: ");
        whichChar = this.getWhichCharToQuickMatch(input);
        let chars = this.storage.getPlayerCharacters();
        selectedChar = chars[whichChar];
        // console.log(selectedChar)
      }
      await this.doQuickMatch(selectedChar);
    } else {
      Message.showMessage(Message.getNoCharsHaveBeenCreated());
    }
  }
};
