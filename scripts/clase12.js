

let sasha = {
    nombre: "sasha",
    edad: 18,
    peso: 85,
}

console.log(`Al inicio del año ${sasha.nombre} pesa ${sasha.peso}`)

const diasDelAño = 365;
const incrementoPeso = 0.200;
const aumentarPeso = (persona) => persona.peso += incrementoPeso;
const adelgazar = persona => persona.peso -= incrementoPeso;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
const META = sasha.peso - 3

let dias = 0
while (sasha.peso > META) {

    if (comeMucho()) {
        // aumentar de peso
        aumentarPeso(sasha)
    } else if (realizaDeporte()) {
        // adelgazar
        adelgazar(sasha);
    }
    dias += 1
}

console.log(`pasaron ${dias} hasta que $(sasha.nombre) adelgazo.`)

for(let i=1; i <= diasDelAño; i++){

    const random = Math.random()
    
    if (random < 0.25){
        // Aumenta de Peso
        aumentarPeso(sasha);

    } else if (random < 0.5) {
        adelgazar(sasha);
    } 
};

console.log(sasha.nombre.toUpperCase(), "pesa: ", sasha.peso.toFixed(2), "kg")