class Car
{
    fName;
    brand;
    model;
    type;
    color;
    weight;
    age;
    height;
    city;
    
        constructor(fName,brand,mode,type,color,weight, age,height, city)
        {
            this.fName = fName;
            this.brand = brand;
            this.model = brand;
            this.type = type;
            this.color = color;
            this.weight = weight;
            this.age = age;
            this.height = height;
            this.city = city;

        }
        showMessage4()
        {
            return `Name: ${this.fName} , Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}, Weight: ${this.weight}, Age: ${this.age}, City: ${this.city} `;
        }
        
}
var object1 = new Car("myCar", "Volkswagen","Golf-7", "Limousine", "White", "3500Kg", 2, 3500+"cm", "Vienna" ); 
console.log(object1);
var a = object1.showMessage4();
document.getElementById("car").innerHTML = a;
 

class Animal
{
    fName;
    eye_color;
    character;
    type;
    color;
    weight;
    age;
    height;
    city;
    
        constructor(fName,eye_color,character,type,color,weight, age,height, city)
        {
            this.fName = fName;
            this.eye_color = eye_color;
            this.character = character;
            this.type = type;
            this.color = color;
            this.weight = weight;
            this.age = age;
            this.height = height;
            this.city = city;

        }
        showMessage5()
        {
            return `Name: ${this.fName} , Eye color: ${this.eye_color}, Character: ${this.character}, Color: ${this.color}, Weight: ${this.weight}, Age: ${this.age}, City: ${this.city} `;
        }
        
}
var object2 = new Animal("Nina", "Brown", "Strong", "Sweetcat", "orange", 5+"Kg", 5, 70+"cm", "Vienna" );
console.log(object2);
var animal_out = object2.showMessage5();
document.getElementById("animal").innerHTML=animal_out;


/*var value_object1 = new Array();
value_object1 = object2;
document.getElementById("animal") = object2;*/



class Person
{
    fName;
    eye_color;
    character;
    type;
    color;
    weight;
    age;
    height;
    city;
    
        constructor(fName,eye_color,character,type,color,weight, age,height, city)
        {
            this.fName = fName;
            this.eye_color = eye_color;
            this.character = character;
            this.type = type;
            this.color = color;
            this.weight = weight;
            this.age = age;
            this.height = height;
            this.city = city;

        }
        showMessage6()
        {
            return `Name: ${this.fName} , eye_color: ${this.eye_color}, Character: ${this.character}, Type:${this.type} Color: ${this.color}, Weight: ${this.weight}, Age: ${this.age}, Height of person: ${this.height}, City: ${this.city} `;
            
        }
        
}

var object3 = new Person("Vali", "Green", "Strong", "Ambious", "White", "85kg", 25, "185cm", "Vienna" );
console.log(object3);
var c = object3.showMessage6();
document.getElementById("person").innerHTML = object3.showMessage6();

