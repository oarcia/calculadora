'use strict'
//sirve para poder definir las varibles
var args = process.argv.slice(2)

//parametrios de los strings a float

var operando1 = parseFloat(args[0])
var operando2 = parseFloat(args[2])

var operando = args[1]

var resultado = "resultado"

if (args.lenght == 3) {
    switch (operando){
        case "+":
        resultado += parseFloat(operando1 + operando2)
        break
        case "-":
        resultado += parseFloat(operando1 - operando2)
        break
        case "*":
            resultado += parseFloat(operando1 * operando2)
            break
        case "/":
            resultado += parseFloat(operando1 / operando2)
            break      
    }
}
console.log(resultado)


