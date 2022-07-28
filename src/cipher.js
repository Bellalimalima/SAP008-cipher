const cipher = { encode, decode };

function encode(offset, string) {
  if (typeof offset != "number" || typeof string != "string") {
    throw new TypeError("Apenas números e palavras");
  }

  let converterTexto = "";
  for (let i = 0; i < string.length; i++) {
    let numAscii = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;
    converterTexto += String.fromCharCode(numAscii);
  }
  return converterTexto;
}

function decode(offset, string) {
  if (typeof offset != "number" || typeof string != "string") {
    throw new TypeError("Apenas números e palavras");
  }

  let converterTexto = "";
  for (let i = 0; i < string.length; i++) {
    let numAscii = ((string.charCodeAt(i) - 90 - offset) % 26) + 90;
    converterTexto += String.fromCharCode(numAscii);
  }
  return converterTexto;
}

export default cipher;
