/* The method Serri used to get access to the props of the parent class was to 
create a method inside the parent class to just return the property (check method "getAnimalName") after that you can access it inside of child class  */

class Cat {

    constructor(name, species){
        this.animalName = name;
        this.species = species;
    }
    showMessage(){
        return `Cats have an animal class of ${this.species}`;
    }

    getAnimalName(){
        return this.animalName;
    }
}

var tigerCat=new Cat('TigerCat','Catus')
console.table(tigerCat)



class Persian extends Cat {
    features;
    constructor(name, species, features){
        super(name, species);
        this.features = features;
    }
    showMsg(){
        return `${super.getAnimalName()} has these features:  ${this.features}`
    }
}

let myCat= new Persian('Macho','persian','long Hair')
console.log(myCat.showMessage())
console.log(myCat.animalName)

console.log(myCat.showMsg())