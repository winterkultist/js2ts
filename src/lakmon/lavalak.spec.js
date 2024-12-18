import Lavalak from "./lavalak.js";

describe('Test Lavalak class', () => {
    it('Creating a new lavalak should set fields', () => {
        // arrange
        const testi = new Lavalak(
            'Testi',
            12)

        // assert
        expect(testi.name).toBe('Testi')
        expect(testi.element).toBe('fire')
    })
})
