let cris = {
    nombre:"Cristopher",
    apellido: "Adasme",
    edad: 27,
}

function upperCase({ nombre }){
    console.log(nombre.toUpperCase())
}

upperCase(cris)