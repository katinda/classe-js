class Person {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello(){
      console.log( " Hello, "+ this.firstname + this.lastname);
    }
};

var personne = new Person ("Skitty","Momi");


console.log(personne);


