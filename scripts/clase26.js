const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const onResponse = function (person) {
    console.log(`Hola, yo soy ${person.name}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    const opts = {crossDomain: true}
    $.get(url, opts, onResponse);
}


obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)