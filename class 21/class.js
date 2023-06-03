class Person{
      constructor(name , age , gender){
          this.Name = name
          this.Age = age
          this.Gender = gender
      }

     hello(){
          console.log(`${this.Name} says hello`)
       } 
     
     static staticHello(){
         console.log('This is a static Method')
     }


}


class Teacher extends Person{
    constructor(name , age , subject , classStrength){
       super(name , age)
        this.Subject = subject
        this.ClassStrength = classStrength
    }
}


let person1 = new Person('Adam' , 24 , "Male")

let teacher1 = new Teacher('Steve' , 36 , 'Mathematics' , 50)


console.log(person1)
console.log(teacher1)








