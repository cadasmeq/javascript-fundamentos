const sacha = {
    nombre: 'sacha',
    apellido: 'lifszyc'
}

function saludar(saludo = "hola"){
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

const saludarASacha = saludar.bind(sacha)
setTimeout(saludar.bind(sacha, "hola che"), 1000)
saludar.call(sacha, 'Hola ché')
saludar.apply(sacha, ['hola  chéee'])