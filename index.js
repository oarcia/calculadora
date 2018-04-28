'use strict'

var express = require('express')
var bodyParse = require('body-parser')
var args = process.argv.slice(2)
var operando1 = parseFloat(args[0])
var operando2 = parseFloat(args[2])

var operando = args[1]

var resultado = "resultado"
var app = express()
 app.use(bodyParse.urlencoded({extended: false}))
 app.use(bodyParse.json())

app.get('/api/:parametro?/:operando1?/:operando2?/:operando?/:resultado?',function(req, res){
    var parametro1 = "Sin Parametro"
    if (req.params.parametro){
        parametro1 = req.params.parametro
    }

    if (args.lenght == 3) {
        switch (operando) {
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

    parametro: "esto es un parametro"

    res.status(200).send({
        arreglo: [{ objeto_1: 1, objeto_2: 2}, { objeto_1: 2, objeto_2: 3}],
        ejemplo: "esto es un ejemplo de respuesta"
        
    })
})
app.listen(7070, function(){
    console.log('Esto es un ejemplo de una API buuu')
});