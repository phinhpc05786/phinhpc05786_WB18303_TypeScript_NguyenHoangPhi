
// let so = 4;

// let sochan = (so: number) =>{
//  if(!(so % 2)){
//     console.log(so);   
//  }else {
//     console.log('số sai');
    
//  }
// }

// sochan(so);

const sum = (x:number=5, y?:number) => {
    return x + <number>y;
}

console.log(sum(0));


const pop = (o: string | number) => {
    console.log("ggdgf" + o)
}
pop(sum(4));
pop(sum(undefined, 5));
pop(sum(3,5));

const hello = (msg: string = "wdjdbfgdhdhdhd"): string => {
    return `heloooo ${msg}`;
}

console.log(hello("dgffdf"));




let person : {
    name : string,
    age: number
} = {
    name: 'John',
    age: 20
}

const salary : {
    grade: string,
    basic: string
}  = {
    grade: 'basic',
    basic: "ddsas"
}

const summary = {...person, ...salary};
console.log(summary);
