export { Add } from "./components/Add";
class Add {
    eval(a, b) {
        return a + b;
    }
}
console.log("hihi");
const add = new Add();
console.log(add.eval(2, 2));
