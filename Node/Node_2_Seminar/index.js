
// import { v4 } from 'uuid';
const uuid = require('uuid');

// import { sum } from './math';
const math = require('./math');


const id = uuid.v4();
console.log(id);

const resultSum = math.sum(2, 4);
const resultMult = math.mult(3, 5);
console.log(resultSum);
console.log(resultMult);
