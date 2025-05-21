const name = "hitesh";
const repoCount = 50;

// strint is a keyvalue pair
// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));

// String creation
let str = "Hello, World!";
console.log("Original:", str);

// Length
console.log("Length:", str.length);

// Inspection methods
console.log("Includes 'World':", str.includes("World"));
console.log("Starts with 'Hello':", str.startsWith("Hello"));
console.log("Ends with '!':", str.endsWith("!"));
console.log("Index of 'o':", str.indexOf("o"));
console.log("Last index of 'o':", str.lastIndexOf("o"));
console.log("Character at index 7:", str.charAt(7));
console.log("Char code at index 7:", str.charCodeAt(7));
console.log("Match /o/g:", str.match(/o/g));
console.log("Search 'World':", str.search("World"));

// Manipulation methods
console.log("Slice(0, 5):", str.slice(0, 5));
console.log("Slice(-6):", str.slice(-6));
console.log("Substring(0, 5):", str.substring(0, 5));
console.log("Substr(7, 5):", str.substr(7, 5)); // Deprecated
console.log("Replace 'World' with 'JS':", str.replace("World", "JS"));
console.log("ReplaceAll 'o' with 'O':", str.replaceAll("o", "O"));
console.log("To upper case:", str.toUpperCase());
console.log("To lower case:", str.toLowerCase());

let numStr = "5";
console.log("Pad start to 3:", numStr.padStart(3, "0"));
console.log("Pad end to 3:", numStr.padEnd(3, "0"));

let spaced = "   JavaScript   ";
console.log("Trimmed:", spaced.trim());
console.log("Trim start:", spaced.trimStart());
console.log("Trim end:", spaced.trimEnd());

console.log("Repeat 'JS ' 3 times:", "JS ".repeat(3));
console.log("Split by comma:", str.split(","));

// Concatenation
let a = "Hello";
let b = "World";
console.log("Using +:", a + " " + b);
console.log("Using concat:", a.concat(" ", b));

// Template literal
let named = "Mridul";
console.log(`Template literal: Hello, ${name}!`);

// Conversion
let num = 123;
console.log("Number to string:", num.toString());

// Regex test
let regex = /script/i;
console.log("Regex test for 'script':", regex.test("I love JavaScript!"));
