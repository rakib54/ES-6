const profile = {name:'Rakib', age:23, job:'learn javascript',hobby:'Cricket'}

const {name , age, hobby} = profile;     //{name, age} = create a object

const object ={
    name: 'Tamim',
    info: {
        address: 'chattogram',
        Job1: 'playing cricket'
    }
}
const {address} = object.info;
console.log(address);

// const name = profile.name;
// const Job = profile.job;
// const age = profile.age;
// console.log(name,age,hobby);

const friends = ['Rakib','Emon','Hasibul','Semanto','Shakib']
const [...restfriend] = friends;
console.log(restfriend);