// arrow function
const oi = () => console.log('Oi!!')
oi()


const saudacao = (nome) => `Fala ${nome}, blz?!`
//"Fala " + nome + ", beleza?"
console.log(saudacao('Maria'))

const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for (let n of numeros) {
        total += n
    }

    return total
}

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const potencia = (base) => exp => Math.pow(base, exp)
console.log(potencia(2)(8))

// this
Array.prototype.ultimo = function () {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = function () {
    console.log(this[0])
}

const numeros = [1, 2, 3]
numeros.ultimo()
numeros.primeiro()
