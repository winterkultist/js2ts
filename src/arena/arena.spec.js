import {Lavalak} from "../lakmon/lavalak.js";
import {Snowlak} from "../lakmon/snowlak.js";
import {fight} from "./arena.js";

describe('Test Arena', () => {

    it('A Lavalak fights a Snowlak', () => {
        // arrange
        const myLavalak = {...Lavalak, currentEnergy: Lavalak.energy}
        const mySnowlak = {...Snowlak, currentEnergy: Snowlak.energy}

        // act
        const result = fight(myLavalak, mySnowlak)

        // assert
        expect(result).toBeDefined()
    })

})
