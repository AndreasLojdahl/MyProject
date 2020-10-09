module.exports = class AttackAdapter {

    static translateList = {
        Assassin: ['stab','poison','ambush'],
        Warrior: ['mortalStrike','bladeStorm','execute'],
        Mage: ['frostBolt','arcaneNova','fireBall'],
        Druid: ['moonFire','starFire','natureBolt'],
    }

    static attack(object, attack){
        let className = object.constructor.name;
        try{
           
            return object[this.translateList[className][attack]]();
        }catch (e) {
            throw new Error
        }
    }

}