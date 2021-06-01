function experienciaProfissional(anosExperiencia){
    if(anosExperiencia >=0 && anosExperiencia <= 1){
        console.log("Iniciante");
    }
    else if(anosExperiencia >1 && anosExperiencia <= 3){
    console.log("Intermediario");
    }
    else if(anosExperiencia >3 && anosExperiencia <= 6){
        console.log("Avançado");
    }
    else if(anosExperiencia >=7){
        console.log("Master");
        }
}

var anosTrabalho = 3;

experienciaProfissional(anosTrabalho);
