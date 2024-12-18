import {getStatus, performRandomPossibleAttack, regenerate, sufferAttack} from "../lakmon/lakmon-util.js";
import getElementIcon from "../utilities/element.js";

export function fight(lakmonA, lakmonB) {
    while (!isKo(lakmonA) && !isKo(lakmonB)) {
        console.log(`${getStatus(lakmonA)} <-/-> ${getStatus(lakmonB)}`)
        tradeBlows(lakmonA, lakmonB)
    }

    if (isKo(lakmonA) && isKo(lakmonB)) {
        console.log('The fight ends in a draw')
        return {
            draw: true,
        }
    } else {
        const winnerLakmon = (isKo(lakmonA)) ? lakmonB : lakmonA
        console.log(`${getStatus(winnerLakmon)} wins this fight!`)
        return {
            winner: winnerLakmon,
        }
    }
}

const tradeBlows = (lakmonA, lakmonB) => {
    dealBlow(lakmonA, lakmonB)
    dealBlow(lakmonB, lakmonA)
}

const dealBlow = (lakmonAttacker, lakmonReceiver) => {
    const attack = performRandomPossibleAttack(lakmonAttacker)
    if (attack == null) {
        regenerate(lakmonAttacker)
        console.log(`${lakmonAttacker.name} is exhausted and needs to rest!`)
    } else {
        const receiverHealthBeforeAttack = lakmonReceiver.health
        sufferAttack(lakmonReceiver, attack)
        const damageDealt = receiverHealthBeforeAttack - lakmonReceiver.health
        console.log(`${lakmonAttacker.name} attacks with ${getElementIcon(attack.element)}${attack.name} and deals ${damageDealt} damage.`)
    }
}

const isKo = lakmon => lakmon.health <= 0
