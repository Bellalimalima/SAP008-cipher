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

    const valordeslocamentotwo = document.querySelector("#deslocamento").value;
    const valortextotwo = document.querySelector("#texto").value;
    const resultado = ciphertwo.decode(valordeslocamentotwo,valortextotwo);

    console.log(resultado);

});




