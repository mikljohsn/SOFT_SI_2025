console.log(new Date()); //UTC Standard: ISO 8601

console.log(Date()); //Local Date Standard: ISO 8601

console.log(Date.now()); //Standard: Unix Epoch Time



console.log("==================================");

const date = new Date();

const danishDate = new Intl.DateTimeFormat('da-DK').format(date);
console.log(danishDate); //Danish Date Format

const americanDate = new Intl.DateTimeFormat('en-US').format(date);
console.log(americanDate); //American Date Format
