module.exports = class AttackAdapter {

    static translateList = {
        Assassin: ['stab','poison','ambush','blizzard'],
        Warrior: ['mortalStrike','bladeStorm','execute','blizzard'],
        Mage: ['frostBolt','arcaneNova','fireBall','blizzard'],
        Druid: ['natureBolt','moonFire','starFire','blizzard'],
    }

    //adapter pattern
    static attack(object, attack){
        let className = object.constructor.name;
        try{
           
            return object[this.translateList[className][attack]]();
        }catch (e) {
            throw new Error
        }
    }

}