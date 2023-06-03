class Person{
      constructor(name , age){
          this.Name = name
          this.Age = age
      }

     hello(){
          console.log(`${this.Name} says hello`)
       } 
     
     static staticHello(){
         console.log('This is a static Method')
     }


}


class Teacher extends Person{
    constructor(name , age, subject , classStrength){
       super(name , age)
        this.Subject = subject
        this.ClassStrength = classStrength
    }
}


class Student extends Person{
   constructor(name , age , cgpa){
       super(name , age)
       this.cgpa = cgpa
   }
}


let person1 = new Person('Adam' , 24 , "Male")

let teacher1 = new Teacher('Steve' , 36 , 'Mathematics' , 50)

let student1 = new Student('Mark' , 25 , 8.5)


console.log(person1)
console.log(teacher1)
console.log(student1)








