import {Lavalak} from "./lavalak.js";
import {performRandomPossibleAttack, regenerate, sufferAttack} from "./lakmon-util.js";
import {Burn, Fireball} from "../attack/attacks.js";

describe('Test performRandomPossibleAttack', () => {
    it('should return an attack and consume energy', () => {
        // arrange
        const myLavalak = {
            ...Lavalak,
            attacks: [Fireball],
            currentEnergy: 20,
        }

        // act
        const attack = performRandomPossibleAttack(myLavalak)

        // assert
        expect(myLavalak.currentEnergy).toBe(16)
        expect(attack).toEqual(Fireball)
    })

    it('should return null if currentEnergy is not high enough', () => {
        // arrange
        const myLavalak = {
            ...Lavalak,
            attacks: [Fireball],
            currentEnergy: 3,
        }

        // act
        const attack = performRandomPossibleAttack(myLavalak)

        // assert
        expect(myLavalak.currentEnergy).toBe(3)
        expect(attack).toBeNull()
    })

    it('should return one attack it has enough energy left', () => {
        // arrange
        const myLavalak = {
            ...Lavalak,
            attacks: [
                {...Fireball, energy: 5},
                {...Fireball, energy: 5},
                {...Fireball, energy: 5},
                {...Fireball, energy: 5},
                Burn,
            ],
            currentEnergy: 3,
        }

        // act
        const attack = performRandomPossibleAttack(myLavalak)

        // assert
        expect(myLavalak.currentEnergy).toBe(0)
        expect(attack).toEqual(Burn)
    })
})


describe('Test sufferAttack', () => {
    it('should reduce health of lakmon', () => {
        // arrange
        const myLavalak = {...Lavalak}

        // act
        sufferAttack(myLavalak, Fireball)

        // assert
        expect(myLavalak.health).toBe(56)
    })

    it('should not reduce health of lakmon beyond 0', () => {
        // arrange
        const myLavalak = {
            ...Lavalak,
            health: 7,
        }

        // act
        sufferAttack(myLavalak, Fireball)

        // assert
        expect(myLavalak.health).toBe(0)
    })

    it('should halve the amount of damage received when lakmon has a resistance against the attack', () => {
        // arrange
        const myLavalak = {
            ...Lavalak,
            resistances: ['fire'],
        }

        // act
        sufferAttack(myLavalak, Fireball)

        // assert
        expect(myLavalak.health).toBe(78)
    })
})


describe('Test regenerate', () => {

    it('should increase current energy', () => {
        // arrange
        const myLavalak = {...Lavalak}
        myLavalak.currentEnergy = 2

        // act
        regenerate(myLavalak)

        // assert
        expect(myLavalak.currentEnergy).toBe(5)
    })

    it('should not go above initial energy', () => {
        // arrange
        const myLavalak = {...Lavalak}
        myLavalak.currentEnergy = 8

        // act
        regenerate(myLavalak)

        // assert
        expect(myLavalak.currentEnergy).toBe(10)
    })

})
