window.onload = initPage;

function initPage(){


let numero = (prompt("Você é um fã? quantos homens John Wick matou em um bar com um lápis?"));

 parseInt(numero)

 if(numero < 3){
    alert("Que pena, você errou");
}
else if(numero > 3){
     alert("Que pena, você errou!");
}
else{
    alert("O número certo é 3");
}

console.log(numero)


}
