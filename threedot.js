const age = [12, 14, 15, 20, 22, 16];
const age2 = [30, 40, 50, 60];
const age3 = [22, 23, 24, 25];

// const Allages = age.concat(age2).concat([10]).concat(age3); //normal method
const Allages = [...age, ...age2, ...age3]; //using dots
// console.log(Allages);

const Amount=[120,350,450,500];
const Maximum = Math.max(...Amount);
console.log(Maximum);

