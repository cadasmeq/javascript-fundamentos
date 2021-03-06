const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'



function obtenerPersonaje(id){
    return new Promise((resolve, reject) =>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        const opts = {crossDomain: true}
        $
            .get(url, opts, (data) => resolve(data))
            .fail(() => reject(id));
        })
}

function onError(id){
    console.log(`Error trayendo información de id ${id}`)
}

function onSuccess(person){
    console.log(`Mi nombre es  ${person.name}`)
}

obtenerPersonaje(1)
    .then(person => {
        console.log(`Mi nombre es  ${person.name}`)
        return obtenerPersonaje(2)
    })
    .then(person => {
        console.log(`Mi nombre es  ${person.name}`)
        return obtenerPersonaje(3)
    })
    .then(person => {
        console.log(`Mi nombre es  ${person.name}`)
        return obtenerPersonaje(4)
    })
    .then(person => {
        console.log(`Mi nombre es  ${person.name}`)
        return obtenerPersonaje(5)
    })
    .then(person => {
        console.log(`Mi nombre es  ${person.name}`)
        return obtenerPersonaje(6)
    })
    .then(person => {
        console.log(`Mi nombre es  ${person.name}`)
        return obtenerPersonaje(7)
    })
    .catch(onError)

