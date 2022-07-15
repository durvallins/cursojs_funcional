/* function bomDia() {
    console.log('Bom dia!')
}

const boaTarde = function () {
    console.log('Boa Tarde!')

}

//1 -  passar uma função como parm pra outra função
function executarQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)
 */

//2 - retornar uma função a partir de uma outra função

function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const resultadoPot = potencia(3)(4)
console.log()
