class Person {

    static _count = 0;
    name    = '';
    age     = 0;
    code    = '';
    country = '';

    //we created a method static
    static get counting(){
        return Person._count + ' get counting';
    }

    static message() {
        console.log(this.code);
        console.log('Hi everyone');
    }

    constructor(name = '', age = 0, code = '', country = ''){
        this.name = name;
        this.age = age;
        this.code = code;
        this.country = country;

        //we crearted the count when stard constrcutor +1
        Person._count ++;
    }

    set setCountry(country){
        this.country = country.toUpperCase();
    }

    get getCountry(){
        return `The country is: ${this.country}`
    }

    //we created method
    whoAmI(){
        console.log(`The name is: ${this.name}, the age is: ${this.age}, the code is: ${this.code}, the country is: ${this.country}`)
    }

    myCountry(){
        console.log(`I am from: ${this.country}`)
    }

}

class Hero extends Person{
    clan;

    constructor(clan = ''){
        // super.Person
        this.clan = clan;

    }
}


const spiderman = new Hero();
spiderman.whoAmI()
console.log(spiderman)