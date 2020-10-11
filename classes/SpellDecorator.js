module.exports = class SpellDecorator {
  constructor() {
    throw new Error("we don't wanna instansiate this class");
  }
  
  // decorator pattern
  static learnNewSpell(char) {
    if (!char.name) {
      throw new Error("You need to exist if you want to leaarn a new spell");
    }
    char.spells = [...char.spells, this.newSpell()];
    char.blizzard = this.blizzard;
  }

  static newSpell() {
    return { name: "blizzard", dmg: 15 };
  }

  static blizzard() {
    return `
        ${this.name} channels a large ** BLIZZARD ** over a large area ontop of its enemy!
        `;
  }
};
