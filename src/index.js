import cipher from './cipher.js';

const cifrar = document.querySelector("#criptografar");

cifrar.addEventListener("click",function(e){
    
    e.preventDefault();

    let valorDeslocamento = parseInt(document.querySelector("#deslocamento").value);
    let valorTexto = document.querySelector("#texto").value;
    valorTexto = valorTexto.toUpperCase();
    let resultado = cipher.encode(valorDeslocamento,valorTexto);
    document.getElementById("resultado").innerHTML= "Sua mensagem está pronta:" + resultado;
    console.log(resultado);

    console.log(resultado);

});


const decifrar = document.querySelector("#descriptografar");

decifrar.addEventListener("click",function(e){

    e.preventDefault();

    let valorDeslocamento = document.querySelector("#deslocamento").value;
    let valorTexto = document.querySelector("#texto").value;
    let resultado = cipher.decode(valorDeslocamento,valorTexto);

    console.log(resultado);

});




