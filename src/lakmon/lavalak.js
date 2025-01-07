import {Burn, Fireball, Chill} from "../attack/attacks.js";

// A high energy fire Lakmon
export const Lavalak = {
    name: 'Lavalak',
    element: 'fire',
    energy: 10,
    attacks: [
        Fireball,
        Burn,
        Chill
    ],
    resistances: [
        'ice',
    ],
    health: 100,
}
