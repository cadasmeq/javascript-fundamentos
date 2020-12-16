const sasha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

const cumpleanos = persona => persona.edad++


const cumpleanosInmutables = persona => ({
    ...persona,
    edad: persona.edad + 1
})