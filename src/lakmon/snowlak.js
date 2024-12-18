import {Chill, Freeze} from "../attack/attacks.js";

// A very resistant ice Lakmon
export const Snowlak = {
    element: 'ice',
    energy: 18,
    attacks: [
        Freeze,
        Chill,
    ],
    resistances: [
        'poison',
        'acid',
        'ice',
    ],
    health: 120,
}
