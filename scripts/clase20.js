function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function() {
    console.log(`Hola ${this.nombre} ${this.apellido}`)
}

Persona.prototype.esAlto = () => {
    debugger
    return this.altura > 1.8
}
let cris = new Persona('Cristopher', 'Adasme', 1.85);