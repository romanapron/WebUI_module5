class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
        
    }
    showFullName() {
        return ` ${this.name} ${this.surname}`
    }
}
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year
    }

    showFullName(middleName) {
        this.middleName = middleName
        return super.showFullName()+ ` ${this.middleName}`;
    }
    showCourse() {
        let currentYear= new Date().getFullYear();
        return currentYear - `${this.year}`
    }
}

const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4
