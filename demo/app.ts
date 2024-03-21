console.log("---Câu 1----");

// ARRAY
const hobbies: string[] = ["Sports", "Cooking"];

const activeHobbies: string[] = ["Hiking"];

activeHobbies.push(...hobbies);
activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);

console.log(activeHobbies);

console.log("---Câu 2----");

let sum = (x: number = 5, y?: number) => {
  return x + <number>y;
};
let speech = (output: any): void => {
  console.log("result:" + output);
};
speech(sum(5, 12));
console.log(speech(sum(5, 12)));

let something: void;
let nothing: never;

let throwError = (errorMsg: string): never => {
  throw new Error(errorMsg);
};

function AddandHandle(x: number, y: number, cb: (num: number) => void) {
  const result = x + y;
  cb(result);
}

AddandHandle(10, 20, (resuld) => {
  console.log(resuld);
});

console.log("---Câu 3----");

