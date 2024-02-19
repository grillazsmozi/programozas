let a = +prompt('Írj be egy számot')
let b = +prompt('Írj be megint egy számot')

let sum = a + b

switch (sum) {
    case 3:
        alert('Túl kicsi!')
        break

    case 4:
        alert('Pontosan!')
        break

    case 5:
        alert('Túl nagy!')
        break
    
    default:
        alert('Nem tudom értelmezi.')
}