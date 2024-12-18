import {shuffleArray} from "../utilities/misc-util.js";

export function performRandomPossibleAttack(lakmon) {
    const shuffledAttacks = shuffleArray(lakmon.attacks)
    for (const attack of shuffledAttacks) {
        if (attack.energy <= lakmon.currentEnergy) {
            lakmon.currentEnergy = lakmon.currentEnergy - attack.energy
            return attack
        }
    }
    return null
}

export const sufferAttack = (lakmon, attack) => {
    let damage = attack.damage
    if (lakmon.resistances.includes(attack.element)) {
        damage = Math.floor(damage / 2)
    }
    lakmon.health = Math.max(lakmon.health - damage, 0)
}

export const regenerate = (lakmon) => {
    lakmon.currentEnergy = Math.min(lakmon.currentEnergy + 1, lakmon.energy)
}
