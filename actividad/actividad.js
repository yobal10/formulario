//1 expresion 1;
//2 /\p{N}/gu;
//3 /\p{n}/gu;
let  texto = "abc123";
let expresion = /\p{N}/gu;
console.log(texto.match(expresion))


let simbolo = "El precio es de 50€, 60$ y 7000¥.";
let currencySymbols = /[\$\€\£\¥\₹\₽\₩\₺R]/g;
console.log(simbolo.match(currencySymbols)); // Output: ["€", "$", "¥"]


let espacios = "Esto es\tun ejemplo\ncon varios   tipos de espacios.";
let whitespaceRegex = /\s+/g;
console.log(espacios.match(whitespaceRegex)); // Output: [" ", "\t", "\n", " ", " ", " "]


let MayusculasMinusculas = "Hello, Καλημέρα, こんにちは, Bonjour!";
let latinGreekLettersRegex = /[\u0041-\u005A\u0061-\u007A\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u0370-\u03FF\u1F00-\u1FFF]+/gu;
console.log(MayusculasMinusculas.match(latinGreekLettersRegex)); // Output: ["Hello", "Καλημέρα", "Bonjour"]


let LetraNumero = "Hello123, Καλημέρα456, こんにちは789.";
let alphanumericUnicodeRegex = /[\p{L}\p{N}]+/gu;
console.log(LetraNumero.match(alphanumericUnicodeRegex)); // Output: ["Hello123", "Καλημέρα456", "こんにちは789"]

