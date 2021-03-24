class Cat {
    constructor(nom,age){
        this.nom = nom;
        this.age = age;
    }
}

var chats = [] ;

var chat1 = new Cat ("Skitty",9);
var chat2 = new Cat ("Pixel",6);

chats.push(chat1);
chats.push(chat2);


console.log(chats);
