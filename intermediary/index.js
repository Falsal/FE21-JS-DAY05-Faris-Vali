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
/* console.log(employee2.showMessage())
console.log(employee3.showMsgTwo()) */






// ANIMALS

class Cat {

    constructor(name, species){
        this.animalName = name;
        this.species = species;
    }
    showMessage(){
        return `${this.animalName} has a cat class of ${this.species}`;
    }

    getAnimalName(){
        return this.animalName;
    }
    getAnimalSpecies(){
        return this.species;
    }
}

var tigerCat=new Cat('TigerCat','Catus')
console.table(tigerCat)

/* ******  Class extension ****** */

class Persian extends Cat {
    features;
    constructor(name, species, features){
        super(name, species);
        this.features = features;
    }
    showMsg(){
        return `${super.getAnimalName()} is a ${super.getAnimalSpecies()} Cat and has these features:  ${this.features}`
    }
}

//   Cat example
let myCat= new Persian('Macho','persian','long Hair')
console.log(myCat.showMessage())
console.log(myCat.animalName)
console.log(myCat.showMsg())


let placeAnimals=document.getElementsByClassName('animal')[0];
placeAnimals.innerHTML+=myCat.showMessage()
placeAnimals.innerHTML+='<br>'

placeAnimals.innerHTML+=myCat.showMsg()


class Car{
    constructor(brand,type){
        this.carBrand=brand;
        this.carType=type;
    }
    showBrand=()=> `The car is a ${this.carBrand} ${this.carType}`

}

let car1=new Car('Mercedes','coupe')
console.log(car1.showBrand())

let carElem=document.getElementsByClassName('car')[0]
carElem.innerHTML=car1.showBrand()
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