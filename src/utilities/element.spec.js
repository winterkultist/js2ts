import getElementIcon from "./element.js";

describe('Test element', () => {

    it('should return icon', () => {
        // act
        let icon = getElementIcon('fire')

        // assert
        expect(icon).toBe('🔥')
    })

    it('should not allow invalid element', () => {
        // act & assert
        expect(() => getElementIcon('whatever')).toThrow('INVALID ELEMENT')
    })

})
