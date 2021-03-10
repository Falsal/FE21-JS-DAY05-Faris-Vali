var car = {
    fName: "VW-Golf7",
    brand:"Golf",
    model:"Limousine",
    type:"car",
    color:"White",
    weight:"3500Kg",
    age:2,
    height:"305cm",
    city:"Vienna",
    
    showMessage1: function () {return `Name: ${this.fName} , brand: ${this.brand}, model: ${this.model}, color: ${this.color}, Weight: ${this.weight}, Age: +${this.age}, City: ${this.city} `}
}
console.log(car.showMessage1());

/*console.log(car.fName);
console.log(car.brand);
console.log(car.color);*/ 

var animal = {
    fName: "Nina",
    model:"European",
    type:"cat",
    color:"yellow",
    weight:"3KG",
    age:4,
    height:"80cm",
    city:"Vienna",
    showMessage2: function () {return `Name is:  ${this.fName},  Type:   ${this.type}, color: ${this.color}, Age: ${this.age},  City: ${this.city} `;;}

}
console.log(animal.showMessage2());
/*console.log(animal.fName);
console.log(animal.weight);
console.log(animal.color);
console.log(animal.age);*/

var person = {
    fName: "Vali",
    brand:"human",
    model:"Engineer",
    type:"Challanger",
    color:"white",
    weight:"85Kg",
    age:25,
    height:"185cm",
    city:"Vienna",
    showMessage3: function () {return `Name: ${this.fName} , Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}, Weight: ${this.weight}, Age: ${this.age}, City: ${this.city} `}

}
console.log(person.showMessage3());
/*console.log(person.fName);
console.log(person.color);
console.log(person.weight);
console.log(person.weight);
console.log(person.age);
console.log(person.height);
console.log(person.city);*/

console.log("The second Method: ")

// SEcond Method:

var basic = {
    fName: "VW-Golf7",
    brand:"Golf",
    model:"Limousine",
    type:"car",
    color:"White",
    weight:"3500Kg",
    age:2,
    height:"305cm",
    city:"Vienna",
    
    showMessage1: function () {return `Name: ${this.fName} , brand: ${this.brand}, model: ${this.model}, color: ${this.color}, Weight: ${this.weight}, Age: +${this.age}, City: ${this.city} `}
}
class Basic
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
var car = new Basic("Golf7", "Golf", "Limousine", "White", "3500Kg", 2, "Vienna" );
var animal = new Basic("Nina", "European", "cat", "yellow", "3KG", 4, "Vienna");
var person = new Basic("Vali", "human", "AI and ML Engineer", "white", "85Kg", "25", "Vienna" )

console.log(car.showMessage4());
console.log(animal.showMessage4());
console.log(person.showMessage4());