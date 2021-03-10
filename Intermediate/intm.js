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
//console.log(object1);
var a = object1.showMessage4();
//document.getElementById("car").innerHTML = a;

class Motorbike extends Car{
    number_of_wheels;
    number_of_doors;
    type_of_gears;

    constructor(fName,brand,mode,type,color,weight, age,height, city,number_of_wheels,number_of_doors,type_of_gears)
    {
        super(fName,brand,mode,type,color,weight, age,height, city,number_of_wheels,number_of_doors,number_of_wheels,type_of_gears);
        this.number_of_wheels =number_of_wheels;
        this.number_of_doors=number_of_doors;
        this.type_of_gears=type_of_gears;
    }
    showMessage4()
    {
        return super.showMessage4() + "New properties are: Number of wheels: " + this.number_of_wheels + "Number of doors: " + this.number_of_doors + "Type of gears: "+ this.type_of_gears;
    }
}
var car3 = new Motorbike("myCar", "Volkswagen","Golf-7", "Limousine", "White", "3500Kg", 2, 3500+"cm", "Vienna", 4, 4, "Automatic" );
console.log(car3);
var new_class = car3.showMessage4();
document.getElementById("car1").innerHTML = new_class;

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
//console.log(object2);
//var animal_out = object2.showMessage5();
//document.getElementById("animal").innerHTML=animal_out;

class Fish extends Animal
{   type_of_water;
    type_of_fish;

    constructor(fName,eye_color,character,type,color,weight, age,height, city, type_of_fish,type_of_water)
    {
        super(fName,eye_color,character,type,color,weight, age,height, city, type_of_fish,type_of_water);
        this.type_of_fish=type_of_fish;
        this.type_of_water=type_of_water;
    }
    showMessage5()
    {
        return super.showMessage5() + "New properties are: Type of fish:  " + this.type_of_fish + "Type of Water: " + this.type_of_water;
    }

}
var animal_new = new Fish("Nina", "Brown", "Strong", "Sweetcat", "orange", 5+"Kg", 5, 70+"cm", "Vienna", "BLUE WHALE", "Cold Water" );
console.log(animal_new);
var new_animal1 = animal_new.showMessage5();
document.getElementById("animal1").innerHTML=new_animal1;






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
//console.log(object3);
var c = object3.showMessage6();
//document.getElementById("person").innerHTML = c;

class Profession extends Person
{
    job_position;
    years_of_job;

    constructor(fName,eye_color,character,type,color,weight, age,height, city,job_position,years_of_job)
    {
        super(fName,eye_color,character,type,color,weight, age,height, city, job_position, years_of_job);
        this.job_position=job_position;
        this.years_of_job=years_of_job;
    }

    showMessage6()
    {
        return super.showMessage6() + "New properties are: Job Position: " + this.job_position + "Carrier: " + this.years_of_job;
    }
}
var object4 = new Profession("Vali", "Green", "Strong", "Ambious", "White", "85kg", 25, "185cm", "Vienna", "Network Securit Engineer", 5 );
console.log(object4);
var c1 = object4.showMessage6();
document.getElementById("person1").innerHTML=c1;
