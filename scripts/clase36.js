function crearSaludo(finalDeFrase){
    return function(nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('wey')
const saludoColombiano = crearSaludo('amigo')
const saludoChileno = crearSaludo('po')

saludoArgentino()
saludoMexicano('Sacha')
saludoColombiano('Sacha')
saludoChileno('Sacha')