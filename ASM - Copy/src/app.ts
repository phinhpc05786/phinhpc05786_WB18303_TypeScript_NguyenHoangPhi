export {Add} from "./components/Add";
class Add implements Operator{
    eval(a: number, b: number): number {
        return a + b;
    }
}

console.log("hihi");



const add = new Add();
console.log(add.eval(2,2));

