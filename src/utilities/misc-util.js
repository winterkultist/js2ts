/* Randomize array using Durstenfeld shuffle algorithm */
export function shuffleArray(array) {
    let clone = structuredClone(array)
    for (var i = clone.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = clone[i]
        clone[i] = clone[j]
        clone[j] = temp
    }
    return clone
}
