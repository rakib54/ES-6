const doubleit =num => num *2   //single parameter arrow function

const sum = (num1,num2)=> num1 + num2 

const math = (x,y)=>{
    const sum = x+y;
    const sub = x-y;
    const Multiply = sum * sub;
    return Multiply;
}
const result3 = math(10,5);

const result2 = sum(12,13);
const result = doubleit(15);
console.log(result3)