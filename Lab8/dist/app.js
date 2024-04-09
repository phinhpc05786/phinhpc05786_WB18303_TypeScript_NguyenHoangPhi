import 'reflect-metadata';
import { validate } from 'class-validator';
import { Product } from './product.model';
const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 18.99 }
];
const newProd = new Product('', -5.99);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('VALIDATION ERRORS!');
        console.log(errors);
    }
    else {
        console.log(newProd.getInformation());
    }
});
