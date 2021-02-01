class Parent{
    constructor(){
        this.fathername = 'Azizur Rahman'
    }
}

class Child extends Parent{ 
    constructor(name){
        super();         //extends parent class ==>super()
        this.name = name;
    }
    getfullname(){   //Method
        return this.name +' '+ this.fathername
    }
}
const baby = new Child('Rakib');
const baby2 = new Child('Runa');
console.log(baby.getfullname());
console.log(baby2.getfullname());