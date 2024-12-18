import {Burn, Fireball} from "../attack/attacks.js";

// A high energy fire Lakmon
export const Lavalak = {
    element: 'fire',
    energy: 25,
    attacks: [
        Fireball,
        Burn,
    ],
    resistances: [
        'ice',
    ],
    health: 100,
}
