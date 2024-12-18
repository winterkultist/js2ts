import {Chill, Freeze} from "../attack/attacks.js";

// A very resistant ice Lakmon
export const Snowlak = {
    name: 'Snowlak',
    element: 'ice',
    energy: 14,
    attacks: [
        Freeze,
        Chill,
    ],
    resistances: [
        'poison',
        'acid',
        'ice'
    ],
    health: 120,
}
