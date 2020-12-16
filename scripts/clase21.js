function heredaDe(prototipoHijo, prototipoPadre) {
    let fn = function () {};
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn();
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function() {
    console.log(`Hola ${this.nombre} ${this.apellido}`)
}

Persona.prototype.esAlto = () => {
    return this.altura > 1.8
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);


Desarrollador.prototype.saludar = function() {
    console.log(`H3ll0, W0rld! ${this.nombre}`)
}


// let cris = new Persona('Cristopher', 'Adasme', 1.85);

