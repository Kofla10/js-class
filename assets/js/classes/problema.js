const fher = {
    name: 'camilo',
    age: 15,
    imprimir(){
        //con el this, hacemos referencia a los valores que están por fuera del scope
        console.log(`Name: ${this.name} - Age: ${this.age}`)
    }
}


// fher.imprimir()

function Person (name, age){
    console.log('This line was executed')
    this.name = name;
    this.age  = age;
    this.print = () =>{
        console.log(`The name is: ${this.name}, the age is: ${age}`)
    }
}

//we created a new instances of per
const maria = new Person('María', 18)

console.log(maria)
maria.print();
