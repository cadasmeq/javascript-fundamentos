class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) {
        const { nombre, apellido } = this;
        console.log(`Hola ${nombre} ${apellido}`)
        if (fn){
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura);
    }
    saludar(fn) {
        console.log(`H3llo, W0rld!`);
        const { nombre, apellido } = this;
        if (fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Gracias, saludos para ti también! ${nombre} ${apellido}`)
    if (esDev){
        console.log(`Oh! Y ere Dev! Hello World para ti!`)
    }
}


let cris = new Persona("cris", "adasme");
// let pedro = new Persona("pedro", "apellido", 1.85);
// let juan = new Desarrollador("juan", "apellido");

cris.saludar(responderSaludo)
// pedro.saludar()
// juan.saludar()

