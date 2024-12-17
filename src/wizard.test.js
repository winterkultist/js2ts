import {Wizard} from "./wizard";

test('Create a new wizard', () => {
    const wizard = new Wizard(
        'Testibus',
        'fire',
        12,
        [{
            name: 'fireball',
            school: 'fire',
            cost: 2,
            damage: 2
        }])

    expect(wizard.name).toBe('Testibus')
})
