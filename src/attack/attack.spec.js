import Attack from "./attack.js";

describe('Test Attack class', () => {
    it('Creating a new attack should set fields', () => {
        // arrange
        const mockSpell = new Attack(
            'MockSpell',
            'fire',
            2,
            25)

        // assert
        expect(mockSpell.name).toBe('MockSpell')
        expect(mockSpell.element).toBe('fire')
        expect(mockSpell.energy).toBe(2)
        expect(mockSpell.damage).toBe(25)
    })
})
