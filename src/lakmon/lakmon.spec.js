import Lakmon from './lakmon.js';

describe('Test Lakmon class', () => {
    it('Creating a new lakmon should set fields', () => {
        // arrange
        const testi = new Lakmon(
            'Testi',
            'fire',
            12)

        // assert
        expect(testi.name).toBe('Testi')
    })

    test('Learn a new attack should add that attack', () => {
        // arrange
        const testi = new Lakmon(
            'Testi',
            'fire',
            12)
        const attack = {
            name: 'fireball',
            element: 'fire',
            energy: 2,
            damage: 25
        }

        // act
        testi.learnNewAttack(attack)

        // assert
        expect(testi.attacks).toHaveLength(1)
        expect(testi.attacks[0].name).toBe('fireball')
    })
})
