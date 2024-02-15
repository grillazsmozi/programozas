let sum = 0

while (true) {
    let value = +prompt("Adj meg egy számot:", '')

    if (!value) break

    sum += value
}

alert('Összeg: ' + sum)