import {Burn, Fireball} from "../attack/attacks.js";

// A high energy fire Lakmon
export const Lavalak = {
    name: 'Lavalak',
    element: 'fire',
    energy: 10,
    attacks: [
        Fireball,
        Burn,
    ],
    resistances: [
        'ice',
    ],
    health: 100,
}
