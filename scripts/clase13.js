let contador = 0;


const llueve = () => Math.random() < 0.25;
 
do {
    contador ++;

}while(!llueve());

if (contador >= 1){
    time = "veces";
} else {
    time = "vez";
}

console.log(`Fui a ver si llovia: ${contador} ${time}`)