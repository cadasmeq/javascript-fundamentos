let sasha = {
    nombre: "sasha",
    edad: 18
}

const MAYOR_DE_EDAD = 18

const esMayorDeEdad = ({ edad }) => edad >= 18;

function imprimirMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirMayorDeEdad(sasha);