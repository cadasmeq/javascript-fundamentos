const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    const opts = {crossDomain: true}
    $.get(url, opts, function (person) {
        console.log(`Hola, yo soy ${person.name}`)
    });
    if (callback){
        callback();
    }
}

obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6)
                })
            })
        })
    })
})

