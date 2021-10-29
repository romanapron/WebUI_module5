class Student {
  constructor (fullName, direction) {
    this._fullName = fullName
    this._direction = direction
  }

  showFullName () {
    return this._fullName
  }
  nameIncludes (data) {
    return showFullName().split.includes(data)
  }
  static studentBuilder (fullName, direction) {
    fullName = 'Ihor Kohut'
    direction = 'qc'
  }
  get direction () {
    return this._direction
  }
  set direction (value) {
    if (value !== 'qc') {
      return false
    }

    this._direction = value
  }
}

const stud1 = new Student('Ivan Petrenko', 'web')
const stud2 = new Student('Sergiy Koval', 'python')
const stud3 = new Student('Ihor Kohut', 'qc')
Student.studentBuilder(stud3)

console.log(stud1.nameIncludes('Ivan'))

console.log(stud1.nameIncludes('Ihor'))