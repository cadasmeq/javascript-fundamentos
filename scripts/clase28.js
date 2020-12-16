const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

function obtenerPersonaje(id, callback){
    const opts = {crossDomain: true}
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $
        .get(url, opts, callback)
        .fail(function() {
            console.log(`Error al obtener persaje ${id}`)
    })
}

obtenerPersonaje(1, function(person) {
    console.log(`Hola, yo soy ${person.name}`);
    obtenerPersonaje(2, function (person) {
        console.log(`Hola, yo soy ${person.name}`);
        obtenerPersonaje(3, function (person) {
            console.log(`Hola, yo soy ${person.name}`);
            obtenerPersonaje(4, function (person) {
                console.log(`Hola, yo soy ${person.name}`);
                obtenerPersonaje(5, function (person) {
                    console.log(`Hola, yo soy ${person.name}`);
                    obtenerPersonaje(6, function (person) {
                        console.log(`Hola, yo soy ${person.name}`);
                    })
                })
            })
        })
    })
})

