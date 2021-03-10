// I solved 2 questions in 1 reply  see two questions below.

// Objects: Exercise 1 
// Create 3 different objects for 3 different themes:  car, animal and person. The end result should be 9 objects in total.  These objects should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 

// Each object should have at least one method, that shows some properties about each theme. Feel free to expand on that.

// The message from the methods must be printed on the browser too.

// Classes - Basic
// Exercise 1
// Create 3 different classes:  car, animal and person. These classes should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 

// Each class should have at least one method, that shows some properties about each theme. Feel free to expand on that.

// Create, using the classes, 3 different objects for each class.

// The results from the methods must be printed on the browser too.

class Person {
    city;
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

let placeIn=document.getElementById('person')
// console.log(typeof (document.getElementById('person')))

for(i=0;i<everyPerson.length;i++){
   placeIn.innerHTML += "<li>"+everyPerson[i].showMessage()+ "</li>";
}

// ANIMALS

let dog={
    class:'mammalia',
    species:'lupis',
    printSpecies:function(){
        return ` Dogs are from the species of ${this.species}`
    }

}

let cat={
    class:'mammalia',
    species:'catus',
    printClass: function(){
        return `Cats have an animal class of ${this.class}`
    }
}

console.log(cat.printClass())

let dogPlace=document.getElementById('dog')
dogPlace.innerHTML+=dog.printSpecies()

let catPlace=document.getElementById('cat')
dogPlace.innerHTML+=cat.printClass()



let audi={
    country:'Germany',
    carBrand:'Audi',
    printOrigin: function(){
        return `${this.carBrand} is made in ${this.country}`
    }
}

console.log(audi.printOrigin())

let audiPlace=document.getElementById('audi')
audiPlace.innerHTML+=audi.printOrigin()

let bmw={
    country:'Germany',
    carBrand:'bmw',
    printOrigin: function(){
        return `${this.carBrand} is made in ${this.country}`
    }
}

console.log(bmw.printOrigin())

let bmwPlace=document.getElementById('bmw')
bmwPlace.innerHTML+=bmw.printOrigin()

let citroen={
    country:'France',
    carBrand:'citroen',
    printOrigin: function(){
        return `${this.carBrand} is made in ${this.country}`
    }
}

console.log(citroen.printOrigin())

let citroenPlace=document.getElementById('citroen')
citroenPlace.innerHTML+=citroen.printOrigin()