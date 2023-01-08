function student(name,roll,address){
    this.name = name;
    this.roll = roll;
    this.address = address;
}

const student1 = new student('Ram',1);
delete student1.name;
student1.address = 'ktm';
console.log(student1);
let date = new Date();
console.log(date);
let pattern = /sandip/;
let name = 'sandip';
name.test(pattern);