function retornaAno(nome, idade){
    console.log(nome + " nasceu em " + (new Date().getFullYear() - (idade + 1)));
}

retornaAno("Felipe",21);