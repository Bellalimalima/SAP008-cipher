const cipher = { encode, decode };

function encode(offset, string) {
  let converterTexto = "";
  for (let i = 0; i<string.length; i++) {
    let numAscii = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;
    converterTexto += String.fromCharCode(numAscii);
  }
  return converterTexto;
}

function decode(offset, string) {
  let converterTexto = "";
  for (let i = 0; i<string.length; i++) {
    let numAscii = ((string.charCodeAt(i) - 65 - offset) % 26) + 65;
    converterTexto += String.fromCharCode(numAscii);
  }
  return converterTexto;
}

export default cipher;
