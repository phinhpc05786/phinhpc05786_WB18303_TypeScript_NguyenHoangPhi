export class ParseIntBasedZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}
// Export original validator but rename it
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator";
