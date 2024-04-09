import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class Product {
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsPositive()
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  getInformation(){
    return [this.title, `$${this.price}`];
  }
}

const product1 = new Product('Bánh mì', 20000);
const product2 = new Product('Sữa', 30000);

console.log(product1.getInformation());
console.log(product2.getInformation());