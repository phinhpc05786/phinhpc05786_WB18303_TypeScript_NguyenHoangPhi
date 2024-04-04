import validate from "./StaticZipCodeValidator";

let string = ["Hello", "1999", "phi"];

string.forEach((s) => {
    console.log(`"${s}" ${validate(s) ? "matches" : "does not match"}`);
    
})