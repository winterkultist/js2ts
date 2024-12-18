export default class Lakmon {

    constructor(name, element, energy) {
        this.name = name
        this.element = element
        this.energy = energy
        this.attacks = []
        this.resistances = []
        this.health = 100
    }

    learnNewAttack(attack) {
        if (this.element === attack.element) {
            this.attacks.push(attack)
        } else {
            throw `${name} can't learn ${attack.name}, because it isn't a ${this.school} attack`
        }
    }

}
