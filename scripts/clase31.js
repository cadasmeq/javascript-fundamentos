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

const ids = [1,2,3,4,5,6,7,8]
let promesas = ids.map(id => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)
