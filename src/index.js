import cipher from './cipher.js';

const cifrar = document.querySelector("#criptografar");

cifrar.addEventListener("click",function(e){
    
    e.preventDefault();

    let valorDeslocamento = document.querySelector("#deslocamento").value;
    let valorTexto = document.querySelector("#texto").value;
    let resultado = cipher.encode(valorDeslocamento,valorTexto);

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




