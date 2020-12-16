let sasha = {
    nombre: "Sasha",
    edad: 18,
    enemy: true,
}


const isChampionEnemy = ({ enemy }) => enemy 

let displayHelp = champion => {
    if (isChampionEnemy(champion)) {
        console.log(`Caution! ${champion.name} is now your enemy!`)
    }
}

displayHelp(sasha)