# JS 2 TS Training project

This is a javascript project designed to be transformed into a typescript project

## Setup

Run `npm install`

Run `npm run test`

## Training

### Implement a small feature in js

- Create a new acid attack in `attack.js`
- Create a new acid lakmon in `/src/lakmon`, the `Balsamlak` that uses the new attack
- Create a test in `arena.js` and let the Balsamlak fight another lakmon
- Write a function `learnNewAttack` wherever you see fit, that learns a lakmon a new attack. (Pushes it into it's attacks array)
  - This function should throw an error when an attack is learned that has a different element than the lakmon
  - Write a test for this function

### Change project to Typescript

Run `npm install typescript`

add a `tsconfig.json` on root with 

```
{
  "compilerOptions": {
    "target": "ES6",
    "outDir": "./dist", // Specify the output folder for compiled JavaScript
    "allowJs": true
  },
  "include": ["./src/**/*.ts"] // Specify the path to your TypeScript files
}
```
Run `tsc`


### TBD
