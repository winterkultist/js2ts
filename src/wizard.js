export class Wizard {

    constructor(name, school, mana, spells) {
        this.name = name;
        this.school = school;
        this.mana = mana;
        this.spells = spells;
    }

    learnNewSpell(spell) {
        if (this.school === spell.school) {
            this.spells.put(spell)
        } else {
            throw `${name} can't learn ${spell.name}, because it isn't a ${this.school} spell`
        }
    }

}
