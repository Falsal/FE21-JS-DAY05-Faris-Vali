class Person {
    constructor(name, age, jobName){
        this.fName = name;
        this.age= age;
        this.jobName = jobName;
    }
    showMessage(){
        return (`Hey, My name is ${this.fName}`);
    }
}

var person_1=new Person('Abas',55,'Doctor')
var person_2=new Person('George',100,'comedian')
var person_3=new Person('Layla',25,'Psychologist')

let everyPerson=[person_1,person_2,person_3]

// console.log(everyPerson[2].showMessage())
// console.log(person_2.showMessage())

// console.log(typeof (document.getElementById('person')))



class Employee extends Person {
    companyName;
    constructor(name, age, jobName, companyName){
        super(name, age,jobName);
        this.companyName = companyName;
    }
    showMessage(){
        return super.showMessage() + " and i am an employee at the company "+ this.companyName;
    }
    showMsgTwo(){
        return `I love working at ${this.companyName}`
    }
}
var employee1 = new Employee("Jonny Bravo",32,"IT-Guy","Tesla");
var employee2 = new Employee('Abas',55,'Doctor','BionTech');
var employee3 = new Employee('George',100,'comedian','Las Vegas Sahara')

let everyEmployee=[employee1,employee2,employee3]

let placeIn=document.getElementById('person')

for(i=0;i<everyEmployee.length;i++){
    placeIn.innerHTML += "<li>"+everyEmployee[i].showMessage()+ "</li>";
}
console.log(employee2.showMessage())
console.log(employee3.showMsgTwo())











// ANIMALS

// let dog={
//     class:'mammalia',
//     species:'lupis',
//     printSpecies:function(){
//         return ` Dogs are from the species of ${this.species}`
//     }

// }

// let cat={
//     class:'mammalia',
//     species:'catus',
//     printClass: function(){
//         return `Cats have an animal class of ${this.class}`
//     }
// }

// console.log(cat.printClass())

// let dogPlace=document.getElementById('dog')
// dogPlace.innerHTML+=dog.printSpecies()

// let catPlace=document.getElementById('cat')
// dogPlace.innerHTML+=cat.printClass()



// let audi={
//     country:'Germany',
//     carBrand:'Audi',
//     printOrigin: function(){
//         return `${this.carBrand} is made in ${this.country}`
//     }
// }

// console.log(audi.printOrigin())

// let audiPlace=document.getElementById('audi')
// audiPlace.innerHTML+=audi.printOrigin()

// let bmw={
//     country:'Germany',
//     carBrand:'bmw',
//     printOrigin: function(){
//         return `${this.carBrand} is made in ${this.country}`
//     }
// }

// console.log(bmw.printOrigin())

// let bmwPlace=document.getElementById('bmw')
// bmwPlace.innerHTML+=bmw.printOrigin()

// let citroen={
//     country:'France',
//     carBrand:'citroen',
//     printOrigin: function(){
//         return `${this.carBrand} is made in ${this.country}`
//     }
// }

// console.log(citroen.printOrigin())

// let citroenPlace=document.getElementById('citroen')
// citroenPlace.innerHTML+=citroen.printOrigin()