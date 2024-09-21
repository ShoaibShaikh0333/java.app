let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

viewData() {
    console.log("data =",DATA);{

    }
}

class Admin extends User {
    constructor(name, email){ 

    }
}
editData() {
    DATA = "some new value";{

    }
}
let student1 = new User("shoaib", "abc@email.com");
let student2 = new User("aman@gmail.com");