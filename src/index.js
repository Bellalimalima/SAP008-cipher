import cipher from './cipher.js';

const cifrar = document.querySelector("#criptografar");

cifrar.addEventListener("click",function(e){
    
    e.preventDefault();

    const valordeslocamento = document.querySelector("#deslocamento").value;
    const valortexto = document.querySelector("#texto").value;
    const resultado = cipher.encode(valordeslocamento,valortexto);

    console.log(resultado);

});


const decifrar = document.querySelector("#descriptografar");

decifrar.addEventListener("click",function(e){

    e.preventDefault();

    const valordeslocamento = document.querySelector("#deslocamento").value;
    const valortexto = document.querySelector("#texto").value;
    const resultado = cipher.decode(valordeslocamento,valortexto);

    console.log(resultado);

});




