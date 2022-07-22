const cipher = {encode,decode}

function encode(offset,string){
  let converterTexto = ""
  for(let i = 0, j= string.length; i < j; i++){
    let numAscii = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;
    console.log(numAscii);
    converterTexto += String.fromCharCode(numAscii)
  }


  return converterTexto;
}

function decode(offset,string){

    return offset + string




  }


export default cipher;
