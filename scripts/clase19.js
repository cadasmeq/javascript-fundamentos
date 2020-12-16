function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function() {
    console.log(`Hola ${this.nombre} ${this.apellido}`)
}

Persona.prototype.esAlto = function() {
    this.altura > 1.7 ? console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} no es alto`);
}

let cris = new Persona('Cristopher', 'Adasme', 1.85);