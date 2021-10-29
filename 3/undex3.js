this.array = []
class Worker {
    #experience
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName
        this.dayRate = dayRate
        this.workingDays = workingDays
        this.#experience = 1.2
        array.push()
    }
    showSalary() {
        let salary = this.dayRate * this.workingDays;
        console.log(this.fullName + ':' + salary)
    }
    showSalaryWithExperience() {
        let salaryExp = this.dayRate * this.workingDays * this.#experience
        console.log(this.fullName + ':' + salaryExp)
        if (this.#experience == 1.5) {
            array.push(salaryExp)
        }
    }
    get showExp() {
        return `${this.#experience}`
    }
    set setExp(experience) {
        this.#experience = experience;
    }

}

//I coundn't create working code in this way :(

// function sortedSalaryWithExperience () {
// let newArray=array.sort((a, b) => b-a);
// let newNewArray=newArray.sort((a, b) => b-a);
// return console.log(newNewArray);
// }
// sortedSalaryWithExperience()






const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

const worker3 = new Worker("Andy Ander", 29, 23)
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

function sortExperiencedSalary() {
    const sortedSalary = array.sort((a, b) =>
        b - a)
    console.log(sortedSalary)
}
sortExperiencedSalary();






