function printaComTempo(fulano, tempo){
    
    console.log("Contando " + tempo + " milisegundos:")

    var printaFulano = () => {
        console.log(fulano);
    }
    setTimeout(printaFulano,tempo);
}

printaComTempo("Terminei a contagem",3000);

