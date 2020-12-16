let sasha = {
    nombre: "sasha",
    edad: 18
}

const MAYOR_DE_EDAD = 18

function esMayorDeEdad(persona){
    return persona.edad >= 18;
}
function impŕimirMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

impŕimirMayorDeEdad(sasha);