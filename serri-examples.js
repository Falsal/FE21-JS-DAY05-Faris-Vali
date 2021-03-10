const person = {
    fName: "Serri",
    age: 30,
    jobTitle: "IT",
    gym : false,
    showMessage: function(){return `Hey, My name is ${this.fName}`}
}
class Person {
    city;
    constructor(name, age, jobTitle, gym){
        this.fName = name;
        this.age= age;
        this.jobTitle = jobTitle;
        this.gym = gym;
    }
    showMessage(){
        return `Hey, My name is ${this.fName}`;
    }
}
var person1 = new Person("John", 45, "IT", true);
var person2 = new Person("Theo", 20, "IT", true);

class VIP extends Person {
    email;
    constructor(name, age, jobTitle, gym, email){
        super(name, age, jobTitle, gym);
        this.email = email;
    }
    showMessage(){
        return super.showMessage() + " and my email is "+ this.email;
    }
}
var person3 = new VIP("Jonny",32,"IT",false,"Jonny@gmail.com");
// console.log(person.showMessage());
// console.log(person1.showMessage());
// console.log(person2.showMessage());
// console.log(person3.showMessage());
var people = [person, person1, person2, person3];
for(let x of people){
    console.log(x.showMessage());
}