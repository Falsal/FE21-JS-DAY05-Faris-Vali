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
    
    showMessage1: function () {return `Name: ${this.fName} + color: +${color} + Age: +${age} + City: +${this.city} `}
}
console.log(car.showMessage1());
var animal = {
    fName: "Nina",
    model:"European",
    type:"bigger",
    color:"yellow",
    weight:"3KG",
    age:4,
    height:"80cm",
    city:"Vienna",
    showMessage2: function () {return `Name: ${this.fName} + color: +${color} + Age: +${age} + City: +${this.city} `;;}

}
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
    showMessage1: function () {return `Name: ${this.fName} + color: +${color} + Age: +${age} + City: +${this.city} `;;}

}