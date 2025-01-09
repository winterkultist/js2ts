# JS 2 TS Training project

This is a javascript project designed to be transformed into a typescript project

# TODO @Stefan

Add a small test cheat sheet
check for index.js
check why intellij does import from dist, something is broken with tsc build
rename Lakmon to just Monster

# Setup

Run `npm install`

Run `npm run test`

# Training

## Implement a small feature in js

- Create a new attack with `element: 'acid'` in `attack.js`
- Create a new acid lakmon in the folder `/src/lakmon`, the `Balsamlak` that uses the new attack
- Create a test in `arena.spec.js` and let the Balsamlak fight another lakmon
- Write a function `learnNewAttack` wherever you see fit, that learns a lakmon a new attack. (Pushes it into it's attacks array)
  - This function should throw an error when an attack is learned that has a different element than the lakmon
  - Write a test for this function

## Change project to Typescript

- Run `npm install typescript`
- Create a new file called `tsconfig.json` on root with this content:
```
{
  "compilerOptions": {
    "target": "ES6",
    "outDir": "./dist", // Specify the output folder for compiled JavaScript
    "allowJs": true,
    "strict": false,
    "moduleResolution": "node"
  },
  "include": ["./src/**/*.ts"] // Specify the path to your TypeScript files
}
```
- Rename all `.js` files to `.ts`
  - All import statements have to be changes, so that the .js is removed (eg: `import ... from "../utilities/element"`)
- Fix jest
  - Because jest test methods (like `describe()`, `expect()`) are hacked into global scope in javascript, we need to add the jest types
  - Run `npm install @types/jest`
- Compile typescript: Run `tsc`
  - Nice to have: Add `'tsc': 'tsc'` to your package,json scripts
- Enjoy your compile javascript code in `/dist` 😊

### Get jest tests to run

Jest is broken right now, we need jest-ts to get it to work again
- Run `npm install -D ts-jest`
- Run `npx ts-jest config:init`
- Run `npm run test` to verify if everything works again

Congratulations! You now have a working Typescript project!
Sadly, it still just looks like javascript 😔

## Refactor the code to use Typescript features!

### Lakmon

- Create a `Lakmon` Interface that looks like this:
```
export interface Lakmon {
    name: string
    element: string
    energy: number
    attacks: Attack[]
    resistances: string[]
    currentEnergy: number
    health: number
    learnNewAttack: {(attack: Attack): void}
}
```
- Write an abstract class that does everything a Lakmon does
- You will need to write your own `Attack` interface as well. Maybe you won't even need to change your attacks!
- Write your `Lavalak` implementation. Preferrably it just has an empty constructor! Change the other Lakmons as well
- We have nice objects now. It's time to move all functionality from `lakmon-util.ts` inside the Lakmon implementation
- Obviously you have to fix all tests 😊

## STRICT

- Change typescript to be strict in `tsconfig.json`
```
...
"compilerOptions": {
  "strict": true,
  ...
}
```
- Fix all the problems while compiling
- Hint: `shuffleArray` should look like `shuffleArray<T>`

## Element

- Make an `Element` enum instead of using a string
  - In `Lakmon` change `resistances` to element

## Generics

- Make Lakmon generically have an Element type (`Lakmon<E extends Element>`)
- Make Lakmons `learnNewAttack` generic, so you can get rid of the element checking logic
  - Hint: You will also need to make Attack generic as well
  - Now we can safely change the constructor so only attacks of the same element are allowed

## New Features

### Make Lakmon more convenient

- Rewrite the Lakmon constructor to have resistances and health optional and give them default values

### Poison Lakmon

- Create a Poison Attack und a new Lakmon that uses poison
  - Write a test to let it fight another Lakmon

### World Arena

- Create a file `arena/world-arenas.ts`
  - Write a function `fightArctic`, that only allows ice lakmons to fight each other. (Just call normal arena fight inside)
    - Write a test
  - Write a function `fightTundra`, that allows ice and poison lakoms to fight each other.
    - Hint: use a Union Type
    - Write a test
