const message = 'HellO!';

const encoded = btoa(message); //base 64 encoding

console.log(encoded);

const decoded = atob(encoded); //base 64 decoding

console.log(decoded);