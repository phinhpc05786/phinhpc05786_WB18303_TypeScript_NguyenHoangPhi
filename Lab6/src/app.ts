console.log("----------Bài 1------------");

function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
}

@Logger
class Person {
    name: string;

    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
}

const pers = new Person();
console.log(pers);

console.log("----------Bài 2------------");

function Logger1(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

@Logger1('LOGGING PERSON')
class Person1 {
    name: string;

    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
}

const person = new Person1();


  console.log("----------Bài 3------------");

  function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
  
    console.log(target, propertyName);
  }
  
  class Product {
    @Log
    title: string;
  
    private _price: number;
  
    set price(val: number) {}
  
    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }
  
    getPriceWithTax() {}
  }
  
  const product = new Product('My Product', 100);
  
  console.log(product.title); 

  console.log("----------Bài 4------------");

  function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
  
    console.log(target);
    console.log(name);
  
    console.log(descriptor);
}
  
class Product1 {
    title: string;
    private _price1: number;
  
    set price1(val: number) {}
  
    constructor(t: string, p: number) {
      this.title = t;
      this._price1 = p; // Corrected variable name
    }
  
    @Log3
    getPriceWithTax() {}
}
  
const product1 = new Product1('Product 1', 100);
product1.getPriceWithTax();

  console.log("----------Bài 5------------");

 function Autobind(_:any, _2: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
 }

 class Printer {
    message = 'This word!';

    @Autobind
    showMessage(){
        console.log(this.message);
        
    }
 }

 const p = new Printer();
 p.showMessage();

 const button = document.querySelector('button')!;
 button.addEventListener('click', p.showMessage);

