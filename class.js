class Student{
    constructor(name, id, cgpa){   
        this.name = name;
        this.id = id;
        this.cgpa = cgpa;
        this.versity= 'AIUB';
    }
}
const student1 = new Student('Rakib',"17-2",3.14); //create object
const student2 = new Student('Sokal',"17-2",3.5);
console.log(student1,student2);