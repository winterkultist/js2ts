
export default function getElementIcon(element) {
    switch (element) {
        case 'fire': return '🔥'
        case 'ice': return '❄️'
        case 'poison': return '🍄'
        case 'acid': return '🧪'
        default: throw 'INVALID ELEMENT'
    }
}
