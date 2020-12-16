let cris = {
    nombre:"Cristopher",
    apellido: "Adasme",
    edad: 27,
}

function upperCase(persona){
    let { nombre } = persona
    console.log(nombre.toUpperCase())
}

function imprimirNombreEdad(persona){
    var { nombre } = persona
    var { edad } = persona
    console.log("Hola, mi nombre es ", nombre, "y tengo", edad)
}

function cumpleanos(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

imprimirNombreEdad(cris)