
function temHabilidade(habilidades){
    for(var i = 0; i < habilidades.length; i++){
        if(habilidades[i] == "Javascript"){
            return true;
        }
    }
    return false;
}




var habilidades =["Javascript", "ReactJS", "ReactNative"];
console.log(temHabilidade(habilidades));