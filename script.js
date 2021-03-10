var a = 10;
console.log(a);
{
    var a = 20;
    console.log(a);
}
console.log(a);

var i = 5;

for  (var i = 0; i < 10; i++){

//here comes a code;

}

console.log("Variable i is:",i);

var b;
b=10;
console.log(b);

const color=["vali", "drin", "fufi"];
console.log(color);

var b = "I%am%a%Javascript%developer%foryou%";
var c = new Array();
c = b.split("%")
console.log(c);


var tic_tac_toe = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
    ];
console.log(tic_tac_toe,tic_tac_toe.length);
console.log("The length is:",tic_tac_toe.length);


function funcN1(par1, par2,par3)
{   
    parameters = `${par1} +  ${par2} + ${par3}`;;
    console.log("The parameters are:", parameters);
    result =   par1 + par2 + par3;
    console.log("The sum of parameters are:", result);

    return result;
   
}
funcN1(10, 20, 40); //calling of the function funcN1


//Anonymous functions
function get(numone,ntwo,nthree)
{
    var sum = numone+ntwo+nthree;
    var multipy = numone*ntwo*nthree;

    var result = [sum, multipy];
    return result;
}
document.write("The sum is: ", get(10,20,40)[0]);
document.write("<br/>");
document.write("The multiply is: ",get(25,35,  45)[1]);

var area =(function(){
    var a = 2;
    var b=4;
    var c = b*a;
    console.log("The annonymous functions is: ", c);
    return c;
    
}());

alert("Hi, please click the button and I will disappear :-)");


var person = 
{
    fName: "Vali",
    age: 30,
    jobTitle: "IT",
    gym:false,
    showMessage: function () {return `Hey, My name is ${this.fName}`}
        //inside object you need to say function()
        
}

console.log(person.fName)

class Person{
    fName;
    age;
    jobTitle;
    gym;

    constructor(name,age,jobTitle,gym)
    //constriuctor is to give to many values 
    //call parameters, and give value call inside,
    //fix values define outside constructor
    {
        this.fName = name;
        this.age = age;
        this.jobTitle = jobTitle;
        this.gym = gym;
    }
    showMessage(){ //Inside the class you do not need to say function 
        return `Hey, my name is ${this.fName}`;
    }
}
var person1 = new Person("John", 45, "IT", true);
var person2 = new Person("Vali", 25, "IT", true);


console.log(person1.showMessage());
class VIP extends Person{
    email;

    constructor(name,age,jobTitle,gym,email)
    {
        //super
        super(name,age,jobTitle,gym);
        this.email = email;
    }

    showMessage(){
        return super.showMessage() + " and my email is: " + this.email+ "and I am: " + this.age;
    }

}
//new object
var person3 = new VIP("Vali", 25, "IT", false, "vali@gmail.com");


var people = [person, person1, person2, person3];
for (let info of people){
    console.log("The people names are:",info.showMessage());
}

/* SERRI SCRIPT
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
}*/